import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from "@astrojs/sitemap";
export default defineConfig({
  i18n: {
    defaultLocale: "de",
    locales: ["de", "fr", "en"],
    routing: {
        prefixDefaultLocale: true,
    },
  },
   vite: {
    plugins: [tailwindcss()],
  },
  // add yur domain name here
  site: 'https://proximushabitat.github.io',
  compressHTML: true,
  integrations: [sitemap()]
});