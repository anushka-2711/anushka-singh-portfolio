import React from 'react';
import { Atom, Code2, Cpu, Database, FileCode, Globe, Github, Layout, Server } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const iconMap = { Globe, Layout, FileCode, Atom, Cpu, Github, Server, Database };

const Skills = () => (
  <section id="skills" className="bg-[#e9e6dd] py-24 sm:py-32">
    <div className="section-shell">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><span className="eyebrow">Tools in the kit</span><h2 className="font-display mt-5 max-w-xl text-4xl font-bold leading-tight tracking-[-0.05em] sm:text-5xl">Learning the craft, <span className="text-[#e35e3b]">one layer at a time.</span></h2></div><p className="max-w-xs text-sm leading-6 text-[#686c63]">The technologies I&apos;m using to turn ideas into working prototypes.</p></div>
      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {skillsData.map((group) => <div key={group.category} className="paper-card p-6 sm:p-8"><div className="mb-7 flex items-center justify-between border-b border-[#e4e0d6] pb-5"><h3 className="font-display text-xl font-bold">{group.category}</h3><Code2 className="h-5 w-5 text-[#e35e3b]" /></div><div className="grid grid-cols-2 gap-3">{group.items.map((skill) => { const Icon = iconMap[skill.icon] || Code2; return <div key={skill.name} className="group rounded-2xl border border-[#e4e0d6] p-4 transition hover:-translate-y-1 hover:border-[#b5cf5b] hover:bg-[#f8f6f0]"><Icon className="h-5 w-5 text-[#e35e3b] transition group-hover:text-[#20241f]" /><h4 className="mt-5 text-sm font-bold">{skill.name}</h4><p className="mt-1 text-xs leading-5 text-[#777b71]">{skill.description}</p><span className="mt-3 inline-block text-[0.65rem] font-bold uppercase tracking-wider text-[#9a9e94]">{skill.level}</span></div>; })}</div></div>)}
      </div>
    </div>
  </section>
);

export default Skills;
