import React from 'react';
import { ArrowDown, ArrowUpRight, Check, Code2, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => (
  <section id="home" className="relative overflow-hidden pb-20 pt-36 sm:pb-28 sm:pt-44">
    <div className="section-shell">
      <div className="grid items-end gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        <div>
          <div className="eyebrow mb-7">Open to internship opportunities</div>
          <h1 className="font-display max-w-4xl text-[clamp(3.5rem,9vw,8.7rem)] font-bold leading-[0.9] tracking-[-0.075em] text-[#20241f]">
            Building my way
            <span className="block text-[#e35e3b]">into tech<span className="text-[#b5cf5b]">.</span></span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[#62665d] sm:text-xl">
            I&apos;m <strong className="text-[#20241f]">{personalInfo.name}</strong>, a {personalInfo.roleTagline.toLowerCase()}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#20241f] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#343a31]">
              See selected work <ArrowUpRight className="h-4 w-4 text-[#b5cf5b]" />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c9c5ba] px-6 py-3.5 text-sm font-bold text-[#20241f] transition hover:-translate-y-1 hover:border-[#ee7048] hover:text-[#d95d38]">
              <Mail className="h-4 w-4" /> Say hello
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:mb-3">
          <div className="absolute -left-8 -top-8 h-20 w-20 rounded-full bg-[#b5cf5b]" />
          <div className="absolute -bottom-8 -right-6 h-24 w-24 rounded-full border-[14px] border-[#ee7048]" />
          <div className="relative rounded-[2rem] bg-[#20241f] p-5 text-[#f4f1ea] shadow-[0_24px_60px_rgba(32,36,31,0.18)] sm:p-7">
            <div className="flex items-center justify-between border-b border-white/15 pb-5">
              <div className="flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-[#ee7048]" /><i className="h-2.5 w-2.5 rounded-full bg-[#b5cf5b]" /><i className="h-2.5 w-2.5 rounded-full bg-[#f4f1ea]/40" /></div>
              <span className="font-mono text-[0.65rem] text-white/50">anushka.dev / profile</span>
            </div>
            <div className="py-7">
              <Code2 className="mb-6 h-8 w-8 text-[#b5cf5b]" />
              <p className="font-mono text-xs leading-7 text-white/55">const focus = [</p>
              <p className="pl-5 font-mono text-sm leading-7 text-[#f4f1ea]">&quot;learn deeply&quot;,</p>
              <p className="pl-5 font-mono text-sm leading-7 text-[#f4f1ea]">&quot;build thoughtfully&quot;,</p>
              <p className="pl-5 font-mono text-sm leading-7 text-[#ee9a7c]">&quot;stay curious&quot;</p>
              <p className="font-mono text-xs leading-7 text-white/55">];</p>
            </div>
            <div className="flex items-center justify-between border-t border-white/15 pt-5 text-xs">
              <span className="flex items-center gap-2 font-semibold"><i className="h-2 w-2 animate-pulse rounded-full bg-[#b5cf5b]" /> Available to learn</span>
              <span className="text-white/45">RIT / CSE</span>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="mt-20 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#74786f] hover:text-[#e35e3b] sm:mt-24">
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c9c5ba]"><ArrowDown className="h-4 w-4" /></span> Scroll to explore
      </a>
    </div>
  </section>
);

export default Hero;
