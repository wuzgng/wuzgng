import type { CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;

export const sortPostsByDateDesc = (posts: BlogPost[]) =>
  [...posts].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
