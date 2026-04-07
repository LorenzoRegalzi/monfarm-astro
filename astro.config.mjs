import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://monfarmexperience.it',
  output: 'static',
  build: {
    assets: '_assets',
  },
});
