import { Link } from 'react-router';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import type { Guide } from '@/data/guides';
import { relatedGuides } from '@/data/guides';
import { categoryName } from '@/data/categories';
import { EmailSignup } from '@/components/email-signup';

export function GuideDetail({ guide }: { guide: Guide }) {
	const related = relatedGuides(guide);
	let n = 0;
	return (
		<main className="guide-page">
			<Link className="back-link" to="/guides"><ArrowLeft size={17} /> All guides</Link>
			<p className="eyebrow">{categoryName(guide.category)}</p>
			<h1>{guide.title}</h1>
			<p className="affiliate-line">This post contains affiliate links. As an Amazon Associate I earn from qualifying purchases.</p>
			<img className="guide-cover" src={guide.image} alt={guide.imageAlt} width={1216} height={912} fetchPriority="high" />
			<p className="guide-intro">{guide.intro}</p>
			{guide.sections.map((section) => (
				<section className="guide-section" key={section.heading}>
					<h2>{section.heading}</h2>
					<p className="section-text">{section.text}</p>
					{section.products.map((product) => {
						n += 1;
						return (
							<article className="product-item" key={product.name}>
								<a className="product-photo" href={product.amazonUrl} target="_blank" rel="nofollow sponsored noopener" aria-label={`See ${product.name} on Amazon`}>
									<img src={product.image} alt={product.alt} width={600} height={600} loading="lazy" />
									<span className="photo-badge"><span className="badge-long">See real product</span><span className="badge-short">Real photos</span> <ArrowUpRight size={12} /></span>
								</a>
								<div className="product-body">
									<h3><span className="product-number">{n}.</span> {product.name}</h3>
									<p>{product.description}</p>
									<a className="button amazon-btn" href={product.amazonUrl} target="_blank" rel="nofollow sponsored noopener">See photos &amp; price on Amazon <ArrowUpRight size={16} /></a>
								</div>
							</article>
						);
					})}
				</section>
			))}
			{guide.comparison && (
				<section className="comparison">
					<h2>Quick comparison</h2>
					<div className="table-wrap">
						<table>
							<thead>
								<tr>{guide.comparison.columns.map((c) => <th key={c}>{c}</th>)}</tr>
							</thead>
							<tbody>
								{guide.comparison.rows.map((row) => (
									<tr key={row.label}>
										<th scope="row">{row.label}</th>
										{row.values.map((v, i) => <td key={i}>{v}</td>)}
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</section>
			)}
			{guide.faq.length > 0 && (
				<section className="guide-faq">
					<h2>Frequently asked questions</h2>
					{guide.faq.map((f) => (
						<details key={f.question}>
							<summary>{f.question}</summary>
							<p>{f.answer}</p>
						</details>
					))}
				</section>
			)}
			<EmailSignup variant="compact" />
			<section className="related-guides">
				<h2>Related guides</h2>
				<div className="guide-grid">
					{related.map((g) => (
						<article className="guide-card" key={g.slug}>
							<Link to={`/guides/${g.slug}`} className="guide-image">
								<img src={g.image} alt={g.imageAlt} width={1216} height={912} loading="lazy" />
								<span className="image-arrow"><ArrowUpRight size={20} /></span>
							</Link>
							<span className="guide-cat">{categoryName(g.category)}</span>
							<h3><Link to={`/guides/${g.slug}`}>{g.title}</Link></h3>
						</article>
					))}
				</div>
			</section>
		</main>
	);
}
