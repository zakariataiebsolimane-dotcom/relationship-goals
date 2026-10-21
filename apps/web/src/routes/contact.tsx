import type { Route } from './+types/contact';
import { seo } from '@/lib/seo';
import { Contact } from '@/components/contact';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'Contact — Relationship Goals',
		description: 'Have a question or an idea for a guide? Send us a message and we will get back to you.',
	});
}

export default function ContactPage() {
	return <Contact />;
}
