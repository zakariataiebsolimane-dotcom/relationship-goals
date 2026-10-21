import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export function About() {
	return (
		<main className="about-page">
			<p className="eyebrow">OUR STORY</p>
			<h1>About Relationship Goals</h1>
			<p>Relationship Goals is a thoughtful little corner of the internet for couples. We gather gift ideas, date ideas and coordinated style inspiration that feels personal — not generic, not cheesy, and never overthought.</p>
			<h2>Why we started</h2>
			<p>Finding a meaningful gift or planning a simple date should not feel like a chore. We wanted one place where you could browse real, doable ideas for your partner and your everyday life together, whatever the occasion.</p>
			<h2>What you will find here</h2>
			<p>Guides packed with specific, useful ideas across six categories — Long Distance, Gifts for Him, Gifts for Her, Couple Style, Date Night and Valentine’s — plus quick ideas you can act on today. Every guide links out to Amazon so you can check current prices, availability and reviews before you buy.</p>
			<h2>How we work</h2>
			<p>We are an inspiration site, not a store. We do not sell products, process payments or fulfill orders. Some links are affiliate links, which means we may earn a commission on qualifying purchases at no extra cost to you. That support keeps the guides coming.</p>
			<Link className="back-link" to="/"><ArrowLeft size={17} /> Back home</Link>
		</main>
	);
}
