// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL / BASE_PATH are set by the GitHub Pages workflow.
// On a custom domain (e.g. https://thomascredle.com) leave BASE_PATH unset.
export default defineConfig({
  site: process.env.SITE_URL || 'https://john-thomas-credle.com',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  // The Writing section moved to /blog — keep old links working.
  redirects: {
    '/writing': '/blog',
    '/writing/[...slug]': '/blog/[...slug]',
  },
  integrations: [sitemap()],
});
