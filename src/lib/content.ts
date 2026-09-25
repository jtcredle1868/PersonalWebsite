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

export async function getProducts(): Promise<CollectionEntry<'products'>[]> {
  return (await getCollection('products', visible)).sort(
    (a, b) => Number(b.data.featured) - Number(a.data.featured) || a.data.order - b.data.order || newestFirst(a, b),
  );
}

export const productCategoryLabel = { 'e-book': 'E-book', training: 'Training material', tool: 'Tool', template: 'Template' } as const;

export function formatPrice(n?: number): string {
  if (n === undefined) return '';
  return n === 0 ? 'Free' : n.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: n % 1 ? 2 : 0 });
}

export const writingTypeLabel = { blog: 'Blog', article: 'Article', instruction: 'How-to' } as const;

export function readingTime(body = ''): string {
  const words = body.trim().split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 230))} min read`;
}
