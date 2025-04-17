import { defineEventHandler } from 'h3';
import Parser from 'rss-parser';

export default defineEventHandler(async () => {
  const parser = new Parser();
  const feed = await parser.parseURL(
    'https://anchor.fm/s/4c31b3c4/podcast/rss'
  );
  return feed.items;
});
