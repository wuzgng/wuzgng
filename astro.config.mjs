// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://wuzgng.github.io',
  base: '/wuzgng/',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});