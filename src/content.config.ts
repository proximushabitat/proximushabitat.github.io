// 1. Import utilities from `astro:content`
import { defineCollection, reference, z } from 'astro:content';

// Import parser
import { parse as parseYaml } from "yaml";

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)

// test articles
const test = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: 'src/collections/test' }),
	schema: z.object({
		is_draft: z.boolean(),
		not_on_front: z.boolean().optional(),
		not_on_section: z.boolean().optional(),
		no_own_page: z.boolean().optional(),
		lang_ready: z.boolean(),
		is_og: z.boolean(),
		is_upToDate: z.boolean(),
		date_published: z.date(),
		date_lastUpdate: z.date().optional(),
		author: z.array(reference('people')).optional(),
		title: z.string().optional(),
		slug: z.string().optional(),
	  	headline: z.string(),
	  	drophead: z.string().optional(),
		lead: z.string().optional(),
		excerpt: z.string().optional(),
		category: z.enum(['transportation', 'architecture', 'urbanism']).optional(),
		related_test: z.array(reference('test')).optional(),
	}),
});

// mönsche
const people = defineCollection({
	loader: file("src/collections/people.yaml", { parser: (peops) => parseYaml(peops) }),
})
  
  

// quelle

// 4. Export a single `collections` object to register your collection(s)
export const collections = { test, people };