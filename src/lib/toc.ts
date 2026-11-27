import type { MarkdownHeading } from 'astro';

export interface TocItem {
  slug: string;
  /** 标题的内容，保留公式和行内代码；标题里的链接去掉，免得链接里再套链接。 */
  html: string;
  children: TocItem[];
}

const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * 用二级、三级标题生成目录，三级标题挂在它前面的二级标题下面。
 * 标题内容从渲染好的 HTML 里取，这样标题里的公式在目录里也能显示；
 * 取不到时退回纯文字（Markdown 处理器给的纯文字里没有公式）。
 */
export function buildToc(headings: MarkdownHeading[], html = ''): TocItem[] {
  const toc: TocItem[] = [];
  for (const { depth, slug, text } of headings) {
    if (depth !== 2 && depth !== 3) continue;
    const pattern = new RegExp(`<h${depth}\\b[^>]*\\bid="${escapeRegExp(slug)}"[^>]*>([\\s\\S]*?)</h${depth}>`);
    const inner = html.match(pattern)?.[1];
    const item: TocItem = {
      slug,
      html: inner ? inner.replace(/<\/?a\b[^>]*>/g, '') : escapeHtml(text),
      children: [],
    };
    const parent = toc.at(-1);
    if (depth === 3 && parent) parent.children.push(item);
    else toc.push(item);
  }
  return toc;
}

/** 目录里一共有几条（二级加三级）。 */
export const tocSize = (toc: TocItem[]) => toc.reduce((n, item) => n + 1 + item.children.length, 0);
