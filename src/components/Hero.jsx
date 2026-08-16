import React from 'react';
import { ArrowDown, Mail, Phone, FolderGit2, Send, Terminal, GraduationCap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-x-hidden bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Internship Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-semibold tracking-wide uppercase">
              <GraduationCap className="w-4 h-4 text-sky-400 shrink-0" />
              <span>2nd Year B.Tech CSE | Seeking Internships</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-medium text-slate-400">Hello, I'm</h2>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                <span className="text-gradient">{personalInfo.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-300">
                {personalInfo.title}
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {personalInfo.shortBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 transition-colors"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View Projects</span>
              </a>
              
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:text-white transition-colors"
              >
                <Send className="w-4 h-4 text-sky-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Contact Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-4 text-slate-400 max-w-full">
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/50 hover:text-sky-300 text-xs font-medium transition-colors"
                aria-label="Email Me"
              >
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="break-all">{personalInfo.email}</span>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 hover:text-emerald-300 text-xs font-medium transition-colors"
                aria-label="Call Me"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+91 {personalInfo.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Visual Student Profile Card */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative w-full max-w-md">
              <div className="bg-slate-900/90 rounded-2xl p-5 sm:p-6 border border-slate-800">
                
                {/* Code Window Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Terminal className="w-3.5 h-3.5 text-sky-400" />
                    <span>student.profile.js</span>
                  </div>
                </div>

                {/* Code Window Body */}
                <div className="font-mono text-xs leading-relaxed space-y-2 text-slate-300 overflow-x-auto">
                  <p><span className="text-purple-400">const</span> <span className="text-sky-300">student</span> = &#123;</p>
                  <p className="pl-4"><span className="text-slate-400">name:</span> <span className="text-emerald-300">"{personalInfo.name}"</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">college:</span> <span className="text-emerald-300">"Roorkee Institute of Tech"</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">degree:</span> <span className="text-emerald-300">"B.Tech CSE (2nd Year)"</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">skills:</span> [<span className="text-amber-300">"C++"</span>, <span className="text-amber-300">"HTML/CSS"</span>, <span className="text-amber-300">"JS"</span>, <span className="text-amber-300">"React"</span>],</p>
                  <p className="pl-4"><span className="text-slate-400">status:</span> <span className="text-emerald-300">"Seeking Internship"</span></p>
                  <p>&#125;;</p>
                </div>

                {/* Highlight Tags */}
                <div className="mt-5 pt-4 border-t border-slate-800 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 text-[11px] font-mono text-sky-300">RIT Roorkee</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 text-[11px] font-mono text-purple-300">2nd Year B.Tech CSE</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 text-[11px] font-mono text-emerald-300">C++ & Web Dev</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 p-2 rounded-full text-slate-400 hover:text-white transition-colors animate-bounce hidden sm:flex items-center justify-center"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="w-5 h-5" />
      </a>
    </section>
  );
};

export default Hero;
