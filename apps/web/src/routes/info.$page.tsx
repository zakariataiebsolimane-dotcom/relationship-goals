import type { Route } from './+types/info.$page';
import { seo } from '@/lib/seo';
import { images } from '@/data/ideas';
import { Information } from '@/components/information';
export function loader({ params }: Route.LoaderArgs) {
 if (!['privacy', 'disclosure'].includes(params.page || '')) throw new Response('Page not found', { status: 404 });
 return { privacy: params.page === 'privacy' };
}
export function meta({ matches, location, loaderData }: Route.MetaArgs) { return seo({ matches, location }, { title: `${loaderData?.privacy ? 'Privacy & Cookies' : 'Affiliate Disclosure'} | Relationship Goals`, description: 'Learn how Relationship Goals handles affiliate links, editorial images, external shopping websites and your choices about optional cookies.', image: images.gifts }); }
export default function InfoPage({ loaderData }: Route.ComponentProps) { return <Information privacy={loaderData.privacy}/>; }
