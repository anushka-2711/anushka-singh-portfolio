import React, { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, Phone, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) { setError('Please fill in your name, email, and message.'); return; }
    setError('');
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nReply to: ${form.email}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return <section id="contact" className="bg-[#20241f] py-24 text-[#f4f1ea] sm:py-32"><div className="section-shell"><div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><span className="eyebrow text-[#b5cf5b] before:bg-[#b5cf5b]">Let&apos;s connect</span><h2 className="font-display mt-5 text-5xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-7xl">Have a good<br /><span className="text-[#ee7048]">idea?</span></h2><p className="mt-7 max-w-sm leading-7 text-white/60">I&apos;m currently open to internship conversations, collaboration, and thoughtful feedback on my work.</p><div className="mt-10 space-y-4 text-sm"> <a className="flex items-center gap-3 text-white/80 hover:text-[#b5cf5b]" href={`mailto:${personalInfo.email}`}><Mail className="h-4 w-4 text-[#ee7048]" />{personalInfo.email}</a><a className="flex items-center gap-3 text-white/80 hover:text-[#b5cf5b]" href={`tel:${personalInfo.phone}`}><Phone className="h-4 w-4 text-[#ee7048]" />+91 {personalInfo.phone}</a><span className="flex items-center gap-3 text-white/80"><MapPin className="h-4 w-4 text-[#ee7048]" />{personalInfo.location}</span></div></div><div className="rounded-[1.75rem] bg-[#f4f1ea] p-6 text-[#20241f] sm:p-9"><div className="flex items-start justify-between"><div><p className="text-sm font-bold text-[#e35e3b]">Start a conversation</p><h3 className="font-display mt-2 text-2xl font-bold">Tell me what&apos;s on your mind.</h3></div><ArrowUpRight className="h-6 w-6 text-[#e35e3b]" /></div><form className="mt-8 space-y-5" onSubmit={handleSubmit}><div className="grid gap-5 sm:grid-cols-2"><label className="text-xs font-bold uppercase tracking-wider text-[#686c63]">Your name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-2 w-full border-b border-[#c9c5ba] bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#a4a69e] focus:border-[#e35e3b]" placeholder="Jane Smith" /></label><label className="text-xs font-bold uppercase tracking-wider text-[#686c63]">Your email<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-2 w-full border-b border-[#c9c5ba] bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#a4a69e] focus:border-[#e35e3b]" placeholder="jane@company.com" /></label></div><label className="block text-xs font-bold uppercase tracking-wider text-[#686c63]">Your message<textarea required rows="4" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-2 w-full resize-none border-b border-[#c9c5ba] bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#a4a69e] focus:border-[#e35e3b]" placeholder="I would love to chat about..." /></label>{error && <p className="text-xs font-semibold text-[#d95d38]" role="alert">{error}</p>}<button type="submit" className="inline-flex items-center gap-2 rounded-full bg-[#e35e3b] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#d35432]">Open email draft <Send className="h-4 w-4" /></button><p className="text-xs text-[#8a8d84]">This opens your default email app with the message ready to send.</p></form></div></div></div></section>;
};

export default Contact;
