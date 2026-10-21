import type { Route } from './+types/guides';
import { seo } from '@/lib/seo';
import { GuidesListing } from '@/components/guides-listing';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'Guides — Gift, Date & Couple Style Ideas | Relationship Goals',
		description: 'Browse every Relationship Goals guide: matching couple outfits, long distance gifts, date night ideas and more. Search and filter by category.',
	});
}

export default function GuidesPage() {
	return (
		<main>
			<GuidesListing />
		</main>
	);
}
