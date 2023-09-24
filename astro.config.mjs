import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import { site } from '@/config/site';

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [tailwind()],
});
