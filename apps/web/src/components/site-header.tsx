import { useState } from 'react';
import { Link } from 'react-router';
import { Heart, ArrowUpRight, Menu, X } from 'lucide-react';
import { categories } from '@/data/categories';

export function SiteHeader() {
	const [open, setOpen] = useState(false);
	return (
		<header className="site-header">
			<Link className="brand" to="/" aria-label="Relationship Goals home" onClick={() => setOpen(false)}>
				<Heart size={26} strokeWidth={1.7} />
				<span>relationship<span className="brand-second">goals.</span></span>
			</Link>
			<nav className="desktop-nav" aria-label="Main navigation">
				<Link to="/guides">Guides</Link>
				{categories.map((c) => (
					<Link key={c.slug} to={`/category/${c.slug}`}>{c.name}</Link>
				))}
			</nav>
			<Link className="header-cta" to="/guides">Find your next thoughtful thing <ArrowUpRight size={16} /></Link>
			<button className="menu-toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
				{open ? <X size={22} /> : <Menu size={22} />}
			</button>
			{open && (
				<div className="mobile-nav" onClick={() => setOpen(false)}>
					<Link to="/guides">Guides</Link>
					{categories.map((c) => (
						<Link key={c.slug} to={`/category/${c.slug}`}>{c.name}</Link>
					))}
					<Link to="/about">About</Link>
					<Link to="/contact">Contact</Link>
				</div>
			)}
		</header>
	);
}
