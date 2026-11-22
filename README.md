# amcody.dev

Cody 的个人博客。用 [Astro](https://astro.build) 生成静态页面，部署在 GitHub Pages。

## 本地运行

```bash
npm install
npm run dev      # 本地预览，默认 http://localhost:4321
npm run build    # 正式构建，输出到 dist/
```

## 写文章

在 `src/content/posts/` 下新建一个 `.md` 文件。文件名就是网址里的那一段，建议用英文小写和连字符，例如 `flow-matching.md` 对应 `/posts/flow-matching/`。

文件名的第一个英文字母还决定列表里标题前面的那个如尼文，比如 `flow-matching` 是 ᚠ（f）。开头相同的文章会得到同一个字母。

文件开头写这些信息：

```yaml
---
title: 文章标题
date: 2026-11-22
description: 一句话摘要（可选）
tags: [标签一, 标签二]   # 可选，列表里显示第一个
series: 系列名            # 可选，同名的文章会在星图上连成一条线
draft: true               # 可选，草稿只在本地可见
---
```

正文里两个额外的写法：

- 旁注：`<aside>这里写旁注</aside>`，写在它要挨着的那一段前面，宽屏时会排到那一段的右边。
- 分隔线：单独一行 `---`，会显示成一行如尼文。

文件名以 `-demo` 结尾的几篇是示例草稿，不会出现在正式站点上，用不到了可以删掉。

## 在哪里改

| 想改的东西 | 文件 |
| --- | --- |
| 站名、简介、如尼文 | `src/consts.ts` |
| 配色和字体 | `src/styles/global.css` |
| 关于页 | `src/pages/about.astro` |
| 友链 | `src/data/links.ts` |
| 星图的画法 | `src/components/StarChart.astro` |
| 标题前的如尼文对照表 | `src/components/PostMark.astro` |

## 部署

推送到 `main` 分支后，`.github/workflows/deploy.yml` 会自动构建并发布。仓库的 Settings → Pages → Source 需要选 GitHub Actions。自定义域名写在 `public/CNAME`。
