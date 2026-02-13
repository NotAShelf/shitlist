import { defineCollection, z } from "astro:content";

const shitCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    dateAdded: z.date(),
    status: z.enum(["active", "outdated", "archived"]).default("active"),
  }),
});

const starsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    dateAdded: z.date(),
    status: z.enum(["active", "outdated", "archived"]).default("active"),
  }),
});

export const collections = {
  shit: shitCollection,
  stars: starsCollection,
};
