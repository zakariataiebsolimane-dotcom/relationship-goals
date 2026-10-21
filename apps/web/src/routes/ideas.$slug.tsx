import type { Route } from './+types/ideas.$slug';
import { seo } from '@/lib/seo';
import { ideas } from '@/data/ideas';
import { IdeaDetail } from '@/components/idea-detail';

export function meta({ matches, location, loaderData }: Route.MetaArgs) {
	if (!loaderData) {
		return seo({ matches, location }, { title: 'Idea not found', description: 'This idea is no longer available.', noindex: true });
	}
	const idea = loaderData.idea;
	return seo({ matches, location }, {
		title: `${idea.name} — Relationship Goals`,
		description: idea.description,
		image: idea.image,
	});
}

export function loader({ params }: Route.LoaderArgs) {
	const idea = ideas.find((i) => i.slug === params.slug);
	if (!idea) {
		throw new Response('Idea not found', { status: 404 });
	}
	return { idea };
}

export default function IdeaPage({ loaderData }: Route.ComponentProps) {
	return <IdeaDetail idea={loaderData.idea} />;
}
