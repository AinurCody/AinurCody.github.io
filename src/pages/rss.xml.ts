import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '../consts';
import { getPosts, postUrl } from '../lib/posts';

export async function GET(context: APIContext) {
  // 草稿不进订阅，本地开发时也一样。
  const posts = (await getPosts()).filter((post) => !post.data.draft);
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: postUrl(post),
    })),
  });
}
