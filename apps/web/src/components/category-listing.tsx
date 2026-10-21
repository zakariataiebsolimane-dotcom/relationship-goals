import { Link } from 'react-router';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import type { Category } from '@/data/categories';
import { ideas } from '@/data/ideas';
import { guides } from '@/data/guides';
import { categoryName } from '@/data/categories';

export function CategoryListing({ category }: { category: Category }) {
	const catIdeas = ideas.filter((i) => i.category === category.slug);
	const catGuides = guides.filter((g) => g.category === category.slug);
	return (
		<main className="category-page">
			<Link className="back-link" to="/"><ArrowLeft size={17} /> Back home</Link>
			<p className="eyebrow">CATEGORY</p>
			<h1>{category.name}</h1>
			<p className="category-desc">{category.description}</p>
			{catGuides.length > 0 && (
				<section>
					<h2>Guides</h2>
					<div className="guide-grid">
						{catGuides.map((g) => (
							<article className="guide-card" key={g.slug}>
								<Link to={`/guides/${g.slug}`} className="guide-image">
									<img src={g.image} alt={g.imageAlt} width={1216} height={912} loading="lazy" />
									<span className="image-arrow"><ArrowUpRight size={20} /></span>
								</Link>
								<span className="guide-cat">{categoryName(g.category)}</span>
								<h3><Link to={`/guides/${g.slug}`}>{g.title}</Link></h3>
								<p>{g.metaDescription}</p>
							</article>
						))}
					</div>
				</section>
			)}
			{catIdeas.length > 0 && (
				<section>
					<h2>Ideas</h2>
					<div className="idea-grid">
						{catIdeas.map((idea, i) => (
							<article className="idea-item" key={idea.slug}>
								<Link to={`/ideas/${idea.slug}`} className="idea-image">
									<img src={idea.image} srcSet={`${idea.image}?width=375 375w, ${idea.image}?width=768 768w, ${idea.image} 1344w`} sizes="(min-width: 900px) 33vw, (min-width: 600px) 50vw, 100vw" width={1216} height={912} alt={idea.alt} loading="lazy" />
									<span className="image-number">0{i + 1}</span>
									<span className="image-arrow"><ArrowUpRight size={20} /></span>
								</Link>
								<div className="item-label"><span>{categoryName(idea.category)}</span><span>{idea.occasion}</span></div>
								<h3><Link to={`/ideas/${idea.slug}`}>{idea.name}</Link></h3>
								<p>{idea.description}</p>
								<a className="amazon-link" href={idea.link} target={idea.link === '#' ? undefined : '_blank'} rel="nofollow sponsored noopener">Check on Amazon <ArrowUpRight size={16} /></a>
							</article>
						))}
					</div>
				</section>
			)}
			{catGuides.length === 0 && catIdeas.length === 0 && (
				<p className="disclosure-note">New guides and ideas for {category.name} are coming soon.</p>
			)}
		</main>
	);
}
