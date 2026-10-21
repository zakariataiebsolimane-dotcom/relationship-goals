import { Link } from 'react-router';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import type { Idea } from '@/data/ideas';
import { categoryName } from '@/data/categories';

export function IdeaDetail({ idea }: { idea: Idea }) {
	return (
		<main className="detail-page">
			<Link className="back-link" to={`/?category=${idea.category}#discover`}><ArrowLeft size={17} /> Back to {categoryName(idea.category).toLowerCase()}</Link>
			<div className="detail-grid">
				<img src={idea.image} width={1216} height={912} alt={idea.alt} fetchPriority="high" />
				<div>
					<p className="eyebrow">{categoryName(idea.category)} / {idea.occasion}</p>
					<h1>{idea.name}</h1>
					<p className="detail-lead">{idea.description}</p>
					<a className="button" href={idea.link} target={idea.link === '#' ? undefined : '_blank'} rel="nofollow sponsored noopener">Check on Amazon <ArrowUpRight size={18} /></a>
					<p className="disclosure-note">We may earn a commission from qualifying purchases, at no extra cost to you. Amazon sets prices and availability. This image is editorial inspiration, not a specific product listing.</p>
					<h2>Why it’s a good-together idea</h2>
					<p>{idea.why}</p>
					<h2>Make it yours</h2>
					<p>{idea.tip}</p>
				</div>
			</div>
		</main>
	);
}
