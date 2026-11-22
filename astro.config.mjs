// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://amcody.dev',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      // 代码配色不用现成主题，颜色由 src/styles/global.css 里的 --astro-code-* 变量决定，
      // 所以会跟着站点的浅色和深色一起切换。
      theme: 'css-variables',
    },
  },
});
