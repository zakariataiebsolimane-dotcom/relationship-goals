import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
	index('routes/home.tsx'),
	route('ideas/:slug', 'routes/ideas.$slug.tsx'),
	route('guides', 'routes/guides.tsx'),
	route('guides/:slug', 'routes/guides.$slug.tsx'),
	route('category/:slug', 'routes/category.$slug.tsx'),
	route('about', 'routes/about.tsx'),
	route('contact', 'routes/contact.tsx'),
	route('info/:page', 'routes/info.$page.tsx'),
	route('llms.txt', 'routes/llms.txt.ts'),
	route('sitemap.xml', 'routes/sitemap.xml.ts'),
	route('robots.txt', 'routes/robots.txt.ts'),
] satisfies RouteConfig;
