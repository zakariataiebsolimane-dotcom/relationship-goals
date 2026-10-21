import type { Config } from '@react-router/dev/config';
import { guides } from './src/data/guides';
import { ideas } from './src/data/ideas';
import { categories } from './src/data/categories';

/**
 * Static build: every page is prerendered to plain HTML at build time, so the
 * site runs on any web host (Hostinger shared hosting, Netlify, Cloudflare...).
 * New guides/ideas/categories are picked up automatically from src/data.
 */
export default {
	appDirectory: 'src',
	buildDirectory: '../../dist/apps/web',
	ssr: false,
	async prerender() {
		return [
			'/',
			'/guides',
			'/about',
			'/contact',
			'/info/privacy',
			'/info/disclosure',
			'/sitemap.xml',
			'/robots.txt',
			'/llms.txt',
			...categories.map((c) => `/category/${c.slug}`),
			...guides.map((g) => `/guides/${g.slug}`),
			...ideas.map((i) => `/ideas/${i.slug}`),
		];
	},
} satisfies Config;
