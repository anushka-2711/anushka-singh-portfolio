import React from 'react';
import { 
  Code, Cpu, FileCode, Globe, Layout, Atom, 
  Sparkles, Server, Layers, Database, GitBranch, Github, Figma 
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  Code: Code,
  Cpu: Cpu,
  FileCode: FileCode,
  Globe: Globe,
  Layout: Layout,
  Atom: Atom,
  Sparkles: Sparkles,
  Server: Server,
  Layers: Layers,
  Database: Database,
  GitBranch: GitBranch,
  Github: Github,
  Figma: Figma
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-sky-400">
            Technical Proficiency
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Skills & <span className="text-gradient">Developer Tools</span>
          </h3>
          <p className="text-slate-400 text-sm sm:text-base">
            Core programming languages, frameworks, databases, and version control tools I use to build robust software.
          </p>
        </div>

        {/* Skill Category Grid */}
        <div className="space-y-12">
          {skillsData.map((categoryGroup, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-6 bg-gradient-to-b from-sky-400 to-indigo-600 rounded-full" />
                <h4 className="text-xl font-bold text-white tracking-wide">
                  {categoryGroup.category}
                </h4>
              </div>

              {/* Grid of Skill Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {categoryGroup.items.map((skill, skillIdx) => {
                  const IconComponent = iconMap[skill.icon] || Code;
                  return (
                    <div
                      key={skillIdx}
                      className="glass-card glass-card-hover rounded-2xl p-5 flex flex-col justify-between space-y-3 group border border-slate-800/80"
                    >
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:text-purple-400 transition-all duration-300 shadow-inner">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-semibold tracking-wider px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700/50">
                          {skill.level}
                        </span>
                      </div>

                      <div>
                        <h5 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                          {skill.name}
                        </h5>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
