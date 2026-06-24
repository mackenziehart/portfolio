import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mackenziehart.github.io',
  base: '/portfolio',
  redirects: {
    '/work/rume':      '/',
    '/work/aether':    '/',
    '/work/greenroom': '/',
    '/work/icon':      '/',
  },
});
