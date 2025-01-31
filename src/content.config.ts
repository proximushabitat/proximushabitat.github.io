// 1. Import utilities from `astro:content`
import { defineCollection, reference, z } from 'astro:content';

// Import parser
import { parse as parseYaml } from "yaml";

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)

// someContent
const bigBits = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: 'src/collections/bigBits' }),
	/*schema: z.object({
		
	}),*/
});

// test articles
const test = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: 'src/collections/test' }),
	schema: z.object({
		id: z.string(),
		is_draft: z.boolean(),
		not_on_front: z.boolean().optional(),
		not_on_section: z.boolean().optional(),
		no_own_page: z.boolean().optional(),
		is_trans_ready: z.boolean(),
		is_og: z.boolean(),
		is_upToDate: z.boolean(),
		date_published: z.date(),
		date_lastUpdate: z.date().optional(),
		author: z.array(reference('people')).optional(),
		title: z.string().optional(),
	  	headline: z.string(),
	  	drophead: z.string().optional(),
		lead: z.string().optional(),
		excerpt: z.string().optional(),
		category: z.enum(['transportation', 'architecture', 'urbanism']).optional(),
		related_test: z.array(reference('test')).optional(),
		references: z.array(reference('sources')).optional(),
		slug: z.string().optional(),
	}),
});

// Overview articles
const overviews = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: 'src/collections/overview' }),
	schema: z.object({
		id: z.string(),
		is_draft: z.boolean(),
		not_on_front: z.boolean().optional(),
		not_on_section: z.boolean().optional(),
		no_own_page: z.boolean().optional(),
		is_trans_ready: z.boolean(),
		is_og: z.boolean(),
		is_upToDate: z.boolean(),
		date_published: z.date(),
		date_lastUpdate: z.date().optional(),
		author: z.array(reference('people')).optional(),
		title: z.string().optional(),
	  	headline: z.string(),
	  	drophead: z.string().optional(),
		lead: z.string().optional(),
		excerpt: z.string().optional(),
		category: z.enum(['transportation', 'architecture', 'urbanism']).optional(),
		related_test: z.array(reference('test')).optional(),
		references: z.array(reference('sources')).optional(),
		slug: z.string().optional(),
	}),
});

// News articles
const news = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: 'src/collections/news' }),
	schema: z.object({
		id: z.string(),
		is_draft: z.boolean(),
		not_on_front: z.boolean().optional(),
		not_on_section: z.boolean().optional(),
		no_own_page: z.boolean().optional(),
		is_trans_ready: z.boolean(),
		is_og: z.boolean(),
		is_upToDate: z.boolean(),
		date_published: z.date(),
		date_lastUpdate: z.date().optional(),
		author: z.array(reference('people')).optional(),
		title: z.string().optional(),
	  	headline: z.string(),
	  	drophead: z.string().optional(),
		lead: z.string().optional(),
		excerpt: z.string().optional(),
		category: z.enum(['transportation', 'architecture', 'urbanism']).optional(),
		related_test: z.array(reference('test')).optional(),
		references: z.array(reference('sources')).optional(),
		slug: z.string().optional(),
		keywords: z.array(reference('keyWords')).optional(),
	}),
});

// sections
const sections = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: 'src/collections/sections' }),
	schema: z.object({
		is_draft: z.boolean(),
		not_on_front: z.boolean().optional(),
		no_own_page: z.boolean().optional(),
		menu_order: z.number(),	
		menu_include: z.boolean(),
		is_trans_ready: z.boolean(),
		is_upToDate: z.boolean(),
		date_published: z.date().optional(),
		date_updated: z.date().optional(),
		author: z.array(reference('people')).optional(),
		title: z.string().optional(),
		seeAll: z.string().optional(),
		readIt: z.string().optional(),
		name: z.object({
			thin: z.string(),
			thick: z.string(),
		}),
		items: z.object({
			title: z.object({
				thin: z.string(),
				thick: z.string(),
			}),
			style: z.string().optional(),
		}),
		slug: z.string().optional(),
	  	headline: z.string().optional(),
	  	drophead: z.string().optional(),
		lead: z.string().optional(),
		excerpt: z.string().optional(),
	}),
});

// mönsche
const people = defineCollection({
	loader: file("src/collections/people.yaml", { parser: (peops) => parseYaml(peops) }),
});

// quellä
const sources = defineCollection({
	loader: file("src/collections/sources.yaml", { parser: (sources) => parseYaml(sources) }),
});

// infostöckli, übersetzige
const lilBits = defineCollection({
	loader: file("src/collections/lilBits.yaml", { parser: (bitly) => parseYaml(bitly) }),
});

// keywords
const keyWords = defineCollection({
	loader: file("src/collections/keyWords.yaml", { parser: (bitly) => parseYaml(bitly) }),
});

// quelle

// 4. Export a single `collections` object to register your collection(s)
export const collections = { test, people, sources, sections, lilBits, overviews, news, bigBits, keyWords };