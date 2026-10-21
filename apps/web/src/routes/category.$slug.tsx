import type { Route } from './+types/category.$slug';
import { seo } from '@/lib/seo';
import { getCategory } from '@/data/categories';
import { CategoryListing } from '@/components/category-listing';

export function meta({ matches, location, loaderData }: Route.MetaArgs) {
	if (!loaderData) {
		return seo({ matches, location }, { title: 'Category not found', description: 'This category does not exist.', noindex: true });
	}
	const c = loaderData.category;
	return seo({ matches, location }, {
		title: `${c.name} — Guides & Ideas | Relationship Goals`,
		description: c.description,
		image: c.image,
	});
}

export function loader({ params }: Route.LoaderArgs) {
	const category = getCategory(params.slug);
	if (!category) {
		throw new Response('Category not found', { status: 404 });
	}
	return { category };
}

export default function CategoryPage({ loaderData }: Route.ComponentProps) {
	return <CategoryListing category={loaderData.category} />;
}
