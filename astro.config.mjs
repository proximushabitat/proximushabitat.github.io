// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  output: 'static',
  i18n: {
    defaultLocale: "de",
    locales: ["de", "fr", "en"],
    routing: {
        prefixDefaultLocale: true,
    },
  },
  compressHTML: true,
  build: {
    // Example: Generate `page.html` instead of `page/index.html` during build.
    //format: 'preserve'
    redirects: true,
  }
});