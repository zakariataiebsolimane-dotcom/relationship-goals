import { Link, useSearchParams } from 'react-router';
import { Search, ArrowUpRight } from 'lucide-react';
import { ideas } from '@/data/ideas';
import { categories, categoryName } from '@/data/categories';
import { useListFilter } from '@/hooks/use-list-filter';

export function Discover() {
	const [params, setParams] = useSearchParams();
	const active = params.get('category') || 'all';
	const items = active === 'all' ? ideas : ideas.filter((idea) => idea.category === active);
	const filter = useListFilter({ items, searchText: (item) => `${item.name} ${item.description} ${item.occasion} ${item.category}` });
	const tabs = [{ slug: 'all', name: 'All ideas' }, ...categories.map((c) => ({ slug: c.slug, name: c.name }))];

	return (
		<section id="discover" className="discover">
			<div className="section-heading">
				<div>
					<p className="eyebrow">THE GOOD-TOGETHER GUIDE</p>
					<h2>What’s your kind of thoughtful?</h2>
				</div>
				<span className="small-note">A little inspiration goes a long way.</span>
			</div>
			<div className="browse-tools">
				<div className="filter-tabs" aria-label="Idea categories">
					{tabs.map((t) => (
						<button
							key={t.slug}
							aria-pressed={t.slug === active}
							className={t.slug === active ? 'selected' : ''}
							onClick={() => setParams(t.slug === 'all' ? {} : { category: t.slug }, { preventScrollReset: true })}
						>
							{t.name}
						</button>
					))}
				</div>
				<label className="search-field">
					<Search size={17} />
					<input aria-label="Search ideas" placeholder="Search for a little inspiration" value={filter.query} onChange={(e) => filter.setQuery(e.target.value)} />
				</label>
			</div>
			<div className="results-label">
				<span>{filter.results.length} IDEAS TO MAKE IT PERSONAL</span>
				<span>CURATED WITH CONNECTION IN MIND</span>
			</div>
			<div className="idea-grid">
				{filter.results.map((idea, i) => (
					<article className="idea-item" key={idea.slug}>
						<Link to={`/ideas/${idea.slug}`} className="idea-image">
							<img src={idea.image} srcSet={`${idea.image}?width=375 375w, ${idea.image}?width=768 768w, ${idea.image} 1344w`} sizes="(min-width: 900px) 33vw, (min-width: 600px) 50vw, 100vw" width={1216} height={912} alt={idea.alt} loading="lazy" />
							<span className="image-number">0{i + 1}</span>
							<span className="image-arrow"><ArrowUpRight size={20} /></span>
						</Link>
						<div className="item-label">
							<span>{categoryName(idea.category)}</span>
							<span>{idea.occasion}</span>
						</div>
						<h3><Link to={`/ideas/${idea.slug}`}>{idea.name}</Link></h3>
						<p>{idea.description}</p>
						<a className="amazon-link" href={idea.link} target={idea.link === '#' ? undefined : '_blank'} rel="nofollow sponsored noopener">Check on Amazon <ArrowUpRight size={16} /></a>
					</article>
				))}
			</div>
			{filter.results.length === 0 && (
				<div className="empty-state">
					<h3>No ideas found just yet.</h3>
					<p>Try “coffee,” “anniversary,” or a different category.</p>
					<button className="button" onClick={() => { filter.reset(); setParams({}); }}>Reset filters</button>
				</div>
			)}
			<p className="disclosure-note">A little transparency: we may earn a commission from qualifying purchases made through our links, at no extra cost to you. Images show editorial inspiration, not specific Amazon products. Prices and availability are set by Amazon.</p>
		</section>
	);
}
