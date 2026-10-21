import { Link, useSearchParams } from 'react-router';
import { Search, ArrowUpRight } from 'lucide-react';
import { guides } from '@/data/guides';
import { categories, categoryName } from '@/data/categories';
import { useListFilter } from '@/hooks/use-list-filter';

export function GuidesListing() {
	const [params, setParams] = useSearchParams();
	const active = params.get('category') || 'all';
	const items = active === 'all' ? guides : guides.filter((g) => g.category === active);
	const filter = useListFilter({ items, searchText: (g) => `${g.title} ${g.metaDescription} ${g.category}` });
	const tabs = [{ slug: 'all', name: 'All guides' }, ...categories.map((c) => ({ slug: c.slug, name: c.name }))];

	return (
		<section className="guides-page">
			<p className="eyebrow">THE GOOD-TOGETHER GUIDE</p>
			<h1>Guides</h1>
			<div className="browse-tools">
				<div className="filter-tabs" aria-label="Guide categories">
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
					<input aria-label="Search guides" placeholder="Search guides" value={filter.query} onChange={(e) => filter.setQuery(e.target.value)} />
				</label>
			</div>
			<div className="results-label">
				<span>{filter.results.length} GUIDES</span>
				<span>CURATED WITH CONNECTION IN MIND</span>
			</div>
			<div className="guide-grid guides-grid">
				{filter.results.map((g) => (
					<article className="guide-card" key={g.slug}>
						<Link to={`/guides/${g.slug}`} className="guide-image">
							<img src={g.image} srcSet={`${g.image}?width=375 375w, ${g.image}?width=768 768w, ${g.image} 1216w`} sizes="(min-width: 900px) 25vw, (min-width: 600px) 50vw, 100vw" width={1216} height={912} alt={g.imageAlt} loading="lazy" />
							<span className="image-arrow"><ArrowUpRight size={20} /></span>
						</Link>
						<span className="guide-cat">{categoryName(g.category)}</span>
						<h3><Link to={`/guides/${g.slug}`}>{g.title}</Link></h3>
						<p>{g.metaDescription}</p>
					</article>
				))}
			</div>
			{filter.results.length === 0 && (
				<div className="empty-state">
					<h3>No guides found.</h3>
					<p>Try a different search or category.</p>
					<button className="button" onClick={() => { filter.reset(); setParams({}); }}>Reset filters</button>
				</div>
			)}
		</section>
	);
}
