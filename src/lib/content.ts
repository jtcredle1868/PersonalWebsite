import { getCollection, type CollectionEntry } from 'astro:content';

const visible = (e: { data: { draft: boolean } }) => import.meta.env.DEV || !e.data.draft;
const newestFirst = (a: { data: { date: Date } }, b: { data: { date: Date } }) => b.data.date.valueOf() - a.data.date.valueOf();

export async function getWriting(): Promise<CollectionEntry<'writing'>[]> {
  return (await getCollection('writing', visible)).sort(newestFirst);
}
export async function getVideos(): Promise<CollectionEntry<'videos'>[]> {
  return (await getCollection('videos', visible)).sort(newestFirst);
}
export async function getBooks(): Promise<CollectionEntry<'books'>[]> {
  return (await getCollection('books', visible)).sort(newestFirst);
}

export const writingTypeLabel = { blog: 'Blog', article: 'Article', instruction: 'How-to' } as const;

export function readingTime(body = ''): string {
  const words = body.trim().split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 230))} min read`;
}
