import { siteOrigin } from '@/lib/site-origin.server';
import { guides } from '@/data/guides';
import { ideas } from '@/data/ideas';
import { categories } from '@/data/categories';

const STATIC_PATHS = [
	'/',
	'/guides',
	'/about',
	'/contact',
	...categories.map((c) => `/category/${c.slug}`),
];

function escapeXml(value: string): string {
	return value.replace(/[&<>"']/g, (ch) => {
		switch (ch) {
			case '&': return '&amp;';
			case '<': return '&lt;';
			case '>': return '&gt;';
			case '"': return '&quot;';
			default: return '&apos;';
		}
	});
}

function dynamicEntries() {
	const guideEntries = guides.map((g) => ({ path: `/guides/${g.slug}` }));
	const ideaEntries = ideas.map((i) => ({ path: `/ideas/${i.slug}` }));
	return [...guideEntries, ...ideaEntries];
}

export async function loader({ request }: { request: Request }) {
	const origin = siteOrigin(request);
	const entries = [...STATIC_PATHS.map((path) => ({ path })), ...dynamicEntries()];
	const body =
		`<?xml version="1.0" encoding="UTF-8"?>\n` +
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
		entries.map((e) => `  <url>\n    <loc>${origin}${escapeXml(e.path)}</loc>\n  </url>`).join('\n') +
		`\n</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600',
		},
	});
}
