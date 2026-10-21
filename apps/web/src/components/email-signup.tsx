import { useState } from 'react';
import { Mail, Check } from 'lucide-react';

export function EmailSignup({ variant = 'block' }: { variant?: 'block' | 'compact' }) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		if (!name.trim() || !email.trim()) return;
		setSubmitted(true);
	}

	if (submitted) {
		return (
			<section className={`email-signup ${variant === 'compact' ? 'compact' : ''}`} aria-label="Free guide signup">
				<div className="email-success">
					<span className="success-icon"><Check size={22} /></span>
					<h3>You’re in! Check your inbox.</h3>
					<p>“30 Date Ideas for Long Distance Couples” is on its way to {email}. Add us to your contacts so it doesn’t land in spam.</p>
				</div>
			</section>
		);
	}

	return (
		<section className={`email-signup ${variant === 'compact' ? 'compact' : ''}`} aria-label="Free guide signup">
			<span className="email-icon"><Mail size={22} /></span>
			<h3>Grab the free guide: 30 Date Ideas for Long Distance Couples</h3>
			<p>Drop your name and email and we’ll send you 30 creative date ideas you can do together, even miles apart. No spam, ever.</p>
			<form className="email-form" onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					placeholder="Your first name"
					aria-label="Your first name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
					autoComplete="given-name"
				/>
				<input
					type="email"
					name="email"
					placeholder="Your email"
					aria-label="Your email address"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					autoComplete="email"
				/>
				<button type="submit" className="button">Send me the guide</button>
			</form>
			<small>We respect your privacy. Unsubscribe anytime.</small>
		</section>
	);
}
