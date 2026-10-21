import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { guides } from '@/data/guides';
import { categoryName } from '@/data/categories';

export function LatestGuides() {
	const latest = guides.slice(0, 4);
	return (
		<section className="latest-guides">
			<div className="section-heading">
				<div>
					<p className="eyebrow">FRESH INSPIRATION</p>
					<h2>Latest guides</h2>
				</div>
				<Link className="see-all" to="/guides">All guides <ArrowUpRight size={16} /></Link>
			</div>
			<div className="guide-grid">
				{latest.map((guide) => (
					<article className="guide-card" key={guide.slug}>
						<Link to={`/guides/${guide.slug}`} className="guide-image">
							<img
								src={guide.image}
								srcSet={`${guide.image}?width=375 375w, ${guide.image}?width=768 768w, ${guide.image} 1216w`}
								sizes="(min-width: 900px) 25vw, (min-width: 600px) 50vw, 100vw"
								width={1216}
								height={912}
								alt={guide.imageAlt}
								loading="lazy"
							/>
							<span className="image-arrow"><ArrowUpRight size={20} /></span>
						</Link>
						<span className="guide-cat">{categoryName(guide.category)}</span>
						<h3><Link to={`/guides/${guide.slug}`}>{guide.title}</Link></h3>
						<p>{guide.metaDescription}</p>
					</article>
				))}
			</div>
		</section>
	);
}
