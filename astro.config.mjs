// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path'

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@src": path.resolve('./src'),
      }
    }
  }
});
