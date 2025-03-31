// 1. Import utilities from `astro:content`
import { defineCollection, reference, z } from 'astro:content';

// Import parser
import { parse as parseYaml } from "yaml";

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)

// someContent

const contentSchema = z.object({
	is_draft: z.boolean(),
	on_front: z.boolean().optional(),
	on_section: z.boolean().optional(),
	make_page: z.boolean().optional(),
	trans_ready: z.boolean().optional(),
	is_og: z.boolean().optional(),
	up_to_date: z.boolean().optional(),
	date_published: z.date(),
	date_lastUpdate: z.date().optional(),
	author: z.array(reference('people')).optional(),
	category: z.array(reference('articleCategories')).optional(),
	keywords: z.array(reference('keyWords')).optional(),
	slug: z.string(),
	title: z.string().optional(),
	headline: z.string(),
	drophead: z.string().optional(),
	lead: z.string().optional(),
	excerpt: z.string().optional(),
});

const categorySchema = z.object({
	is_draft: z.boolean(),
	on_front: z.boolean().optional(),
	on_section: z.boolean().optional(),
	make_page: z.boolean().optional(),
	trans_ready: z.boolean().optional(),
	is_og: z.boolean().optional(),
	up_to_date: z.boolean().optional(),
	date_published: z.date().optional(),
	date_lastUpdate: z.date().optional(),
	author: z.array(reference('people')).optional(),
	category: z.array(reference('articleCategories')).optional(),
	keywords: z.array(reference('keyWords')).optional(),
	slug: z.string(),
	title: z.string().optional(),
	headline: z.string(),
	drophead: z.string().optional(),
	lead: z.string().optional(),
	excerpt: z.string().optional(),

	menu_order: z.number(),	
	menu_include: z.boolean(),
	see_all: z.string().optional(),
	read_it: z.string().optional(),
	article_preview_style: z.object({
		front: z.string(),
		section: z.string(),
	}).optional(),
});

// test articles
const test = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: 'src/collections/test' }),
	schema: contentSchema,
});

// Overview articles
const overviews = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: 'src/collections/overview' }),
	schema: contentSchema,
});

// News articles
const news = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: 'src/collections/news' }),
	schema: contentSchema,
});

// General stuff
const general = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: 'src/collections/general' }),
	schema: contentSchema,
});

// sections
const sections = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: 'src/collections/sections' }),
	schema: categorySchema,
});

// bigger things that are not used often and need language specific versions
const bigBits = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: 'src/collections/bigBits' }),
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

const keyWords = defineCollection({
	loader: file("src/collections/keyWords.yaml", { parser: (keywords) => parseYaml(keywords) }),
});

const glossary = defineCollection({
	loader: file("src/collections/glossary.yaml", { parser: (keywords) => parseYaml(keywords) }),
});

const articleCategories = defineCollection({
	loader: file("src/collections/articleCategories.yaml", { parser: (articleCategory) => parseYaml(articleCategory) }),
});

// quelle

// 4. Export a single `collections` object to register your collection(s)
export const collections = { test, people, sources, sections, lilBits, overviews, news, bigBits, articleCategories, keyWords, glossary, general };