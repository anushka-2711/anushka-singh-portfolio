import React from 'react';
import { ArrowUpRight, Check, Code2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

const visualStyles = {
  orange: 'bg-[#ee7048] text-[#20241f]',
  lime: 'bg-[#b5cf5b] text-[#20241f]',
  blue: 'bg-[#8eb8c8] text-[#20241f]'
};

const Projects = () => (
  <section id="projects" className="py-24 sm:py-32">
    <div className="section-shell">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><span className="eyebrow">Selected work</span><h2 className="font-display mt-5 text-4xl font-bold leading-tight tracking-[-0.05em] sm:text-5xl">Ideas I&apos;ve started<br /><span className="text-[#e35e3b]">bringing to life.</span></h2></div><p className="max-w-xs text-sm leading-6 text-[#686c63]">A few academic and personal projects where I&apos;ve practiced turning problems into interfaces.</p></div>
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {projectsData.map((project) => <article key={project.id} className="group flex flex-col rounded-[1.75rem] border border-[#dcd8ce] bg-[#fffdf8] p-3 transition hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(42,39,30,0.1)]">
          <div className={`project-visual ${visualStyles[project.accent]}`}><span className="absolute left-5 top-5 rounded-full bg-white/40 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em]">{project.tag}</span><span className="font-display relative z-10 max-w-[8ch] text-4xl font-bold leading-[0.95]">{project.title}</span><span className="absolute bottom-5 right-5 font-mono text-xs font-bold opacity-60">{project.number}</span></div>
          <div className="flex flex-1 flex-col p-4 sm:p-5"><div><p className="text-sm font-bold text-[#e35e3b]">{project.subtitle}</p><p className="mt-4 text-sm leading-6 text-[#686c63]">{project.description}</p><ul className="mt-5 space-y-2">{project.features.map((feature) => <li key={feature} className="flex gap-2 text-xs font-semibold leading-5 text-[#4f534b]"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#e35e3b]" />{feature}</li>)}</ul></div><div className="mt-7 flex flex-wrap items-center gap-2 border-t border-[#e4e0d6] pt-4">{project.techStack.map((tech) => <span key={tech} className="rounded-full bg-[#f0ede5] px-2.5 py-1 text-[0.65rem] font-bold text-[#686c63]">{tech}</span>)}<span className="ml-auto inline-flex items-center gap-1 text-[0.65rem] font-bold uppercase tracking-wider text-[#9a9e94]"><Code2 className="h-3.5 w-3.5" /> Prototype</span></div></div>
        </article>)}
      </div>
      <div className="mt-12 rounded-2xl border border-dashed border-[#c9c5ba] p-5 text-center text-sm text-[#686c63]">More experiments are in progress. The best way to see what&apos;s next is to <a href="#contact" className="font-bold text-[#e35e3b] underline decoration-[#e35e3b]/30 underline-offset-4">start a conversation</a>.</div>
    </div>
  </section>
);

export default Projects;
