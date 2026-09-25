import rss from '@astrojs/rss';
import { getWriting } from '../lib/content';
import { site } from '../data/site';

export async function GET(context) {
  const posts = await getWriting();
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return rss({
    title: `${site.name} — Blog`,
    description: site.description,
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: p.data.externalUrl ?? `${base}/blog/${p.id}/`,
      categories: p.data.tags,
    })),
  });
}
