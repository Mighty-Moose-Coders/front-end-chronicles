import analog from '@analogjs/platform';
import fs from 'fs';
import path from 'path';
import Parser from 'rss-parser';
import { defineConfig } from 'vite';
import { slugify } from './src/core/utils';

export default defineConfig({
  plugins: [
    analog({
      static: true,
      prerender: {
        routes: async () => {
          const parser = new Parser();
          const feed = await parser.parseURL(
            'https://anchor.fm/s/4c31b3c4/podcast/rss'
          );

          const items = feed.items.map((item) => ({
            title: item.title,
            pubDate: item.pubDate,
            enclosure: item.enclosure,
            content: item.content,
          }));

          const outDir = './public';
          fs.mkdirSync(outDir, { recursive: true });
          fs.writeFileSync(
            path.join(outDir, 'episodes.json'),
            JSON.stringify(items, null, 2)
          );

          return items.map((item) => `/episodes/${slugify(item.title!)}`);
        },
      },
      vite: {
        experimental: {
          supportAnalogFormat: true,
        },
      },
    }),
  ],
});
