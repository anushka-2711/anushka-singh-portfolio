import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onKeyDown = (event) => event.key === 'Escape' && setIsOpen(false);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-[#dcd8ce]/80 bg-[#f4f1ea]/90 py-3 backdrop-blur-xl' : 'py-5'}`}>
      <div className="section-shell flex items-center justify-between">
        <a href="#home" className="group flex items-center gap-3" onClick={closeMenu} aria-label="Anushka Singh home">
          <span className="font-display flex h-10 w-10 items-center justify-center rounded-full bg-[#20241f] text-lg font-bold text-[#f4f1ea] transition-transform group-hover:-rotate-6">A<span className="text-[#ee7048]">.</span></span>
          <span className="hidden text-sm font-bold tracking-tight sm:block">Anushka Singh</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => <a key={link.name} href={link.href} className="ink-link text-[#555850] hover:text-[#1d1f1c]">{link.name}</a>)}
        </nav>

        <a href="#contact" className="hidden items-center gap-2 rounded-full bg-[#ee7048] px-4 py-2.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(238,112,72,0.2)] transition hover:-translate-y-0.5 hover:bg-[#d95d38] md:inline-flex">
          Let&apos;s talk <ArrowUpRight className="h-4 w-4" />
        </a>

        <button type="button" className="rounded-full border border-[#d1cdc2] bg-[#fffdf8] p-2.5 md:hidden" onClick={() => setIsOpen((open) => !open)} aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isOpen}>
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && <nav className="section-shell mt-4 space-y-1 rounded-2xl border border-[#dcd8ce] bg-[#fffdf8] p-3 shadow-xl md:hidden" aria-label="Mobile navigation">
        {navLinks.map((link) => <a key={link.name} href={link.href} onClick={closeMenu} className="block rounded-xl px-4 py-3 text-sm font-bold text-[#555850] hover:bg-[#f4f1ea] hover:text-[#1d1f1c]">{link.name}</a>)}
        <a href="#contact" onClick={closeMenu} className="mt-2 flex items-center justify-between rounded-xl bg-[#20241f] px-4 py-3 text-sm font-bold text-white">Let&apos;s talk <ArrowUpRight className="h-4 w-4 text-[#b5cf5b]" /></a>
      </nav>}
    </header>
  );
};

export default Navbar;
