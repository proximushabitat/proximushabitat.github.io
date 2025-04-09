// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

//to have github pages resolve the aliases
//import { path } from 'path'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  output: 'static',
  i18n: {
    defaultLocale: "de",
    locales: ["de"],
    routing: {
        prefixDefaultLocale: true,
    },
  },
  compressHTML: true,
  build: {
    // Example: Generate `page.html` instead of `page/index.html` during build.
    //format: 'preserve'
    redirects: true,
  },
  site: 'https://proximushabitat.ch',
  vite: {
    assetsInclude: ["**/*.xlsx"]
  }
  /*vite: {
    resolve: {
      alias: {
        // your aliases should mirror the ones defined in your tsconfig.json
        // i'll re-use the ones in the official docs:
        //"@components": path.resolve(path.dirname(''), './src/components'),

        "@": path.resolve(path.dirname(''), './src'),
        "@components": path.resolve(path.dirname(''), './src/components'),
        "@assets": path.resolve(path.dirname(''), './src/assets'),
        "@icons": path.resolve(path.dirname(''), './src/icons'),
        "@layouts": path.resolve(path.dirname(''), './src/layouts'),
        "@style": path.resolve(path.dirname(''), './/src/style'),
        "@lib": path.resolve(path.dirname(''), './/src/lib'),
        "@i18n": path.resolve(path.dirname(''), './/src/i18n'),
        "@snippets": path.resolve(path.dirname(''), './/src/snippets'),
      }
    }
  }*/
});