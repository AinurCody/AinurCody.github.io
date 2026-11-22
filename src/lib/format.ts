const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// frontmatter 里的日期按 UTC 零点解析，所以这里也按 UTC 取，避免差一天。

/** 2026-11-20 */
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);

/** Nov 20 */
export const shortDate = (d: Date) => `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}`;

/** 粗略的阅读时间：中文每分钟 400 字，英文每分钟 200 词，代码块不计入。 */
export function readingMinutes(body = ''): number {
  const text = body.replace(/```[\s\S]*?```/g, ' ').replace(/<[^>]+>/g, ' ');
  const cjk = text.match(/[㐀-鿿]/g)?.length ?? 0;
  const words = text.replace(/[㐀-鿿]/g, ' ').match(/[A-Za-z0-9_]+/g)?.length ?? 0;
  return Math.max(1, Math.round(cjk / 400 + words / 200));
}
