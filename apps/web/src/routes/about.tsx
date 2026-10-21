import type { Route } from './+types/about';
import { seo } from '@/lib/seo';
import { About } from '@/components/about';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'About — Relationship Goals',
		description: 'Relationship Goals is a thoughtful corner of the internet for couples — gift ideas, date ideas and coordinated style that feels personal.',
	});
}

export default function AboutPage() {
	return <About />;
}
