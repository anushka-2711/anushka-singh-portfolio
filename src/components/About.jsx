import React from 'react';
import { ArrowUpRight, BookOpen, GraduationCap, MapPin, Target } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const About = () => (
  <section id="about" className="border-t border-[#dcd8ce] py-24 sm:py-32">
    <div className="section-shell">
      <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
        <div>
          <span className="eyebrow">A little about me</span>
          <h2 className="font-display mt-5 text-4xl font-bold leading-tight tracking-[-0.05em] sm:text-5xl">Curious by nature.<br /><span className="text-[#e35e3b]">Practical by choice.</span></h2>
          <p className="mt-6 max-w-sm leading-7 text-[#686c63]">A student developer with an eye for the details that make software feel simple, useful, and human.</p>
          <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[#555850]"><MapPin className="h-4 w-4 text-[#e35e3b]" /> {personalInfo.location}</div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="paper-card p-7 sm:col-span-2">
            <div className="mb-5 flex items-center justify-between"><span className="text-sm font-bold">The short version</span><span className="font-display text-3xl text-[#dcd8ce]">01</span></div>
            <p className="max-w-2xl text-lg leading-8 text-[#4f534b]">{personalInfo.fullBio}</p>
          </div>
          <div className="rounded-[1.75rem] bg-[#b5cf5b] p-7">
            <Target className="h-7 w-7 text-[#20241f]" />
            <h3 className="font-display mt-12 text-xl font-bold">What I&apos;m looking for</h3>
            <p className="mt-3 text-sm leading-6 text-[#34392e]">{personalInfo.careerObjective}</p>
          </div>
          <div className="rounded-[1.75rem] bg-[#20241f] p-7 text-[#f4f1ea]">
            <GraduationCap className="h-7 w-7 text-[#ee7048]" />
            <h3 className="font-display mt-12 text-xl font-bold">Currently studying</h3>
            <p className="mt-3 text-sm leading-6 text-white/65">{personalInfo.education.degree} in {personalInfo.education.field} at {personalInfo.education.institution}.</p>
            <span className="mt-5 inline-flex rounded-full border border-white/20 px-3 py-1 text-xs font-bold text-[#b5cf5b]">{personalInfo.education.status}</span>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-5 border-t border-[#dcd8ce] pt-8 sm:grid-cols-2 lg:grid-cols-4">
        {personalInfo.education.coursework.map((course, index) => <div key={course} className="flex gap-3"><span className="font-mono text-xs text-[#e35e3b]">0{index + 1}</span><div><BookOpen className="mb-2 h-4 w-4 text-[#777b71]" /><p className="text-sm font-bold">{course}</p></div></div>)}
      </div>
      <a href="#contact" className="ink-link mt-10 inline-flex items-center gap-2 text-sm font-bold text-[#20241f]">Want to work together? <ArrowUpRight className="h-4 w-4 text-[#e35e3b]" /></a>
    </div>
  </section>
);

export default About;
