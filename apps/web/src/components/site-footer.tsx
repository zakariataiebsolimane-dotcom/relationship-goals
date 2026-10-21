import { Link } from 'react-router';
import { openCookiePreferences } from '@/lib/cookie-consent';

export function SiteFooter() {
	return (
		<footer className="site-footer">
			<div>
				<Link to="/" className="footer-brand">relationship goals.</Link>
				<p>A thoughtful little corner of the internet.<br />For you and your favorite person.</p>
			</div>
			<div className="footer-links">
				<Link to="/guides">Guides</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
				<Link to="/info/disclosure">Affiliate disclosure</Link>
				<Link to="/info/privacy">Privacy & cookies</Link>
				<button onClick={openCookiePreferences}>Cookie settings</button>
			</div>
			<p className="footer-disclosure">This site contains affiliate links. As an Amazon Associate I earn from qualifying purchases — at no extra cost to you.</p>
			<div className="footer-bottom">
				<span>© 2026 Relationship Goals</span>
				<span>More connection. Less overthinking.</span>
			</div>
		</footer>
	);
}
