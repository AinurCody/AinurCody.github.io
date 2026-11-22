import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  // src/content/posts/ 下的每个 .md 文件是一篇文章，文件名就是网址里的那一段。
  loader: glob({ base: './src/content/posts', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    // 同一个 series 的文章会在星图上连成一条线。
    series: z.string().optional(),
    // 草稿只在本地开发时显示，正式构建会排除。
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
