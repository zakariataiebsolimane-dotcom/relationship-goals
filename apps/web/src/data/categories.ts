export type Category = {
	slug: string;
	name: string;
	short: string;
	description: string;
	image: string;
};

const BASE = '/images';

export const categories: Category[] = [
	{
		slug: 'gifts-for-him',
		name: 'Gifts for Him',
		short: 'Gifts for Him',
		description: 'Gift ideas for your boyfriend or husband that he will actually use, from sentimental keepsakes to cozy everyday upgrades.',
		image: `${BASE}/eb2dd3d3-a6b8-4711-ab59-7ff2b6995f85.webp`,
	},
	{
		slug: 'long-distance',
		name: 'Long Distance',
		short: 'Long Distance',
		description: 'Gifts and ideas that close the gap when you and your partner are miles apart.',
		image: `${BASE}/4a8c4881-62f8-4eac-980d-8d0eed46804e.webp`,
	},
	{
		slug: 'gifts-for-her',
		name: 'Gifts for Her',
		short: 'Gifts for Her',
		description: 'Meaningful gift ideas she will love, from little luxuries to everyday keepsakes.',
		image: `${BASE}/355b4908-f445-4772-b7f5-9fc2b7d5cb6c.webp`,
	},
	{
		slug: 'couple-style',
		name: 'Couple Style',
		short: 'Couple Style',
		description: 'Coordinated outfits and matching looks that feel like you, not a costume.',
		image: `${BASE}/2186b10b-371f-44ad-baba-cd3142187b60.webp`,
	},
	{
		slug: 'date-night',
		name: 'Date Night',
		short: 'Date Night',
		description: 'At-home and out-and-about date ideas for connection any night of the week.',
		image: `${BASE}/fd760a46-8bc0-4f74-8ced-d2506af19138.webp`,
	},
	{
		slug: 'valentines',
		name: "Valentine's",
		short: "Valentine's",
		description: 'Romantic gift and date ideas to make Valentine’s Day feel personal.',
		image: `${BASE}/feac02be-0fe1-4ccf-b906-2af764a229f3.webp`,
	},
];

export function getCategory(slug: string): Category | undefined {
	return categories.find((c) => c.slug === slug);
}

export function categoryName(slug: string): string {
	return categories.find((c) => c.slug === slug)?.name ?? slug;
}
