import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, Check } from 'lucide-react';

export function Contact() {
	const [sent, setSent] = useState(false);
	const [form, setForm] = useState({ name: '', email: '', message: '' });

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
		setSent(true);
	}

	if (sent) {
		return (
			<main className="contact-page">
				<div className="contact-success">
					<span className="success-icon"><Check size={22} /></span>
					<h2>Thanks, {form.name.split(' ')[0]}!</h2>
					<p>Your message has been received. We will get back to you at {form.email} as soon as we can.</p>
				</div>
				<Link className="back-link" to="/"><ArrowLeft size={17} /> Back home</Link>
			</main>
		);
	}

	return (
		<main className="contact-page">
			<p className="eyebrow">SAY HELLO</p>
			<h1>Contact us</h1>
			<p>Have a question, an idea for a guide, or just want to say hi? Send us a message and we will get back to you.</p>
			<form className="contact-form" onSubmit={handleSubmit}>
				<label>
					Your name
					<input type="text" name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required autoComplete="name" />
				</label>
				<label>
					Your email
					<input type="email" name="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required autoComplete="email" />
				</label>
				<label>
					Message
					<textarea name="message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
				</label>
				<button type="submit" className="button">Send message</button>
			</form>
			<Link className="back-link" to="/"><ArrowLeft size={17} /> Back home</Link>
		</main>
	);
}
