import type { Route } from './+types/guides.$slug';
import { seo, siteOriginFrom, absoluteUrl } from '@/lib/seo';
import { getGuide } from '@/data/guides';
import { GuideDetail } from '@/components/guide-detail';

export function meta({ matches, location, loaderData }: Route.MetaArgs) {
	if (!loaderData) {
		return seo({ matches, location }, { title: 'Guide not found', description: 'This guide is no longer available.', noindex: true });
	}
	const g = loaderData.guide;
	const origin = siteOriginFrom(matches);
	const url = absoluteUrl(origin, location.pathname);
	return seo({ matches, location }, {
		title: g.seoTitle,
		description: g.metaDescription,
		image: g.image,
		type: 'article',
		jsonLd: [
			{
				'@context': 'https://schema.org',
				'@type': 'Article',
				headline: g.title,
				description: g.metaDescription,
				url,
				image: absoluteUrl(origin, g.image),
			},
			{
				'@context': 'https://schema.org',
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl(origin, '/') },
					{ '@type': 'ListItem', position: 2, name: 'Guides', item: absoluteUrl(origin, '/guides') },
					{ '@type': 'ListItem', position: 3, name: g.title, item: url },
				],
			},
			{
				'@context': 'https://schema.org',
				'@type': 'FAQPage',
				mainEntity: g.faq.map((f) => ({
					'@type': 'Question',
					name: f.question,
					acceptedAnswer: { '@type': 'Answer', text: f.answer },
				})),
			},
		],
	});
}

export function loader({ params }: Route.LoaderArgs) {
	const guide = getGuide(params.slug);
	if (!guide) {
		throw new Response('Guide not found', { status: 404 });
	}
	return { guide };
}

export default function GuidePage({ loaderData }: Route.ComponentProps) {
	return <GuideDetail guide={loaderData.guide} />;
}
