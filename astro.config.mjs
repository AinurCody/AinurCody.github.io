// @ts-check
import { satteri } from '@astrojs/markdown-satteri';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import katex from 'katex';

/**
 * 用 KaTeX 把一段 LaTeX 渲染成 HTML。公式写错不会让构建失败：
 * 那一处会显示成红字，鼠标悬停能看到错误原因。
 * @param {string} tex
 * @param {boolean} displayMode
 */
function renderMath(tex, displayMode) {
  return katex.renderToString(tex, { displayMode, throwOnError: false });
}

// https://astro.build/config
export default defineConfig({
  site: 'https://amcody.dev',
  integrations: [sitemap()],
  markdown: {
    processor: satteri({
      // 数学公式：打开 math 以后，$…$ 是行内公式，前后各一行 $$ 的是单独成行的公式。
      // 下面的插件在构建时就把它们渲染好，页面上不用跑脚本。
      // 公式的样式和字体在 src/pages/posts/[...slug].astro 里引入。
      features: { math: true },
      mdastPlugins: [
        {
          name: 'katex',
          inlineMath(node, ctx) {
            ctx.replaceNode(node, { type: 'html', value: renderMath(node.value, false) });
          },
          math(node, ctx) {
            ctx.replaceNode(node, { type: 'html', value: renderMath(node.value, true) });
          },
        },
      ],
    }),
    shikiConfig: {
      // 代码配色不用现成主题，颜色由 src/styles/global.css 里的 --astro-code-* 变量决定，
      // 所以会跟着站点的浅色和深色一起切换。
      theme: 'css-variables',
    },
  },
});
