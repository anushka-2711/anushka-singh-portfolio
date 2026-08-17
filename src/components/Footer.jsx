import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => <footer className="bg-[#20241f] px-5 pb-8 text-[#f4f1ea] sm:px-8 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/15 pt-7 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} {personalInfo.name}. Made with curiosity.</p><a href="#home" className="inline-flex items-center gap-2 font-bold text-white/80 hover:text-[#b5cf5b]">Back to top <ArrowUpRight className="h-3.5 w-3.5" /></a></div></footer>;

export default Footer;
