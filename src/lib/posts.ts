import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

/** 所有文章，新的在前。草稿只在本地开发时出现，正式构建会排除。 */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => (import.meta.env.PROD ? !data.draft : true));
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const postUrl = (post: Post) => `/posts/${post.id}/`;

/** 同一个系列的文章，从早到晚。同一天发的按文件名的自然顺序排（note-2 排在 note-10 前面）。 */
export function seriesOf(posts: Post[], name: string): Post[] {
  return posts
    .filter((post) => post.data.series === name)
    .sort(
      (a, b) =>
        a.data.date.valueOf() - b.data.date.valueOf() || a.id.localeCompare(b.id, undefined, { numeric: true }),
    );
}
