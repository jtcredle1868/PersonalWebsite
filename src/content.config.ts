import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Blog posts, long-form articles and how-to instruction. */
const writing = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    type: z.enum(['blog', 'article', 'instruction']).default('blog'),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    // Link out instead of hosting the full text (e.g. an article published elsewhere).
    externalUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

/** Videos and video lessons. Use a YouTube ID, a Vimeo ID, or a direct video file URL. */
const videos = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/videos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    youtubeId: z.string().optional(),
    vimeoId: z.string().optional(),
    videoUrl: z.string().optional(),
    duration: z.string().optional(),
    series: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

/** Books — published, in progress, or forthcoming. */
const books = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/books' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    date: z.coerce.date(),
    status: z.enum(['published', 'in-progress', 'forthcoming']).default('in-progress'),
    cover: z.string().optional(),
    links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing, videos, books };
