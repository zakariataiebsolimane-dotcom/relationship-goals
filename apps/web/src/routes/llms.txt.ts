import { siteOrigin } from '@/lib/site-origin.server';
import { guides } from '@/data/guides';

export async function loader({ request }: { request: Request }) {
	const origin = siteOrigin(request);
	const lines: string[] = [
		'# Relationship Goals',
		'',
		'> Thoughtful gift, date and couple style inspiration for couples.',
		'',
		'## Pages',
		`- [Guides](${origin}/guides): Every couple guide, newest first.`,
	];
	for (const g of guides) {
		lines.push(`- [${g.title}](${origin}/guides/${g.slug}): ${g.metaDescription}`);
	}
	lines.push(`- [About](${origin}/about): Who we are and how we work.`);
	lines.push(`- [Contact](${origin}/contact): Send us a message.`);

	return new Response(lines.join('\n'), {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
}
