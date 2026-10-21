import type { Route } from './+types/home';
import { seo } from '@/lib/seo';
import { images, ideas } from '@/data/ideas';
import { Hero } from '@/components/home/hero';
import { Discover } from '@/components/home/discover';
import { Manifesto } from '@/components/home/manifesto';
import { LatestGuides } from '@/components/home/latest-guides';
import { EmailSignup } from '@/components/email-signup';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'Relationship Goals — Thoughtful Gifts & Date Ideas',
		description: 'Find meaningful gifts, creative date ideas and coordinated couple style. Thoughtful inspiration for your partner and your everyday life together.',
		image: images.coupleStyle,
		jsonLd: [
			{ '@context': 'https://schema.org', '@type': 'WebSite', name: 'Relationship Goals' },
			{ '@context': 'https://schema.org', '@type': 'Organization', name: 'Relationship Goals', description: 'Thoughtful gift, date and couple style inspiration.' },
			{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'The good-together guide', mainEntity: { '@type': 'ItemList', itemListElement: ideas.map((idea, index) => ({ '@type': 'ListItem', position: index + 1, name: idea.name, url: `/ideas/${idea.slug}` })) } },
		],
	});
}

export default function HomePage() {
	return (
		<main>
			<Hero />
			<Discover />
			<LatestGuides />
			<EmailSignup />
			<Manifesto />
		</main>
	);
}
