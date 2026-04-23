import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://monfarmexperience.it',
  output: 'hybrid',
  adapter: vercel(),
  build: {
    assets: '_assets',
  },
});
