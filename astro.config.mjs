// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL / BASE_PATH are set by the GitHub Pages workflow.
// On a custom domain (e.g. https://thomascredle.com) leave BASE_PATH unset.
export default defineConfig({
  site: process.env.SITE_URL || 'https://jtcredle1868.github.io',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
