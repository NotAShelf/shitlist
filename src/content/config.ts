import { defineCollection, z } from 'astro:content';

const entrySchema = z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    dateAdded: z.date(),
    status: z.enum(['active', 'outdated', 'archived']).default('active'),
});

const shitCollection = defineCollection({
    type: 'content',
    schema: entrySchema,
});

const starsCollection = defineCollection({
    type: 'content',
    schema: entrySchema,
});

export const collections = {
    shit: shitCollection,
    stars: starsCollection,
};
