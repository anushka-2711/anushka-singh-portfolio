import React from 'react';
import { GraduationCap, Target, UserCheck, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2.5">
          <h2 className="text-xs font-bold uppercase tracking-widest text-sky-400">
            Get To Know Me
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            About <span className="text-gradient">{personalInfo.name}</span>
          </h3>
          <p className="text-slate-400 text-sm sm:text-base">
            2nd-year B.Tech Computer Science & Engineering student at Roorkee Institute of Technology (RIT).
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Bio & Career Objective */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Bio Card */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold text-white">Student Overview</h4>
              </div>
              
              <div className="text-slate-300 text-sm leading-relaxed space-y-3">
                {personalInfo.fullBio.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Career Objective Card */}
            <div className="bg-slate-900/80 border border-slate-800 border-l-4 border-l-purple-500 rounded-2xl p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold text-white">Career Objective</h4>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {personalInfo.careerObjective}
              </p>
            </div>

          </div>

          {/* Right Column: Education */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Card */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Education</h4>
                  <span className="text-xs text-sky-400 font-medium">Academic Record</span>
                </div>
              </div>

              {/* Exact Education Details */}
              <div className="space-y-1.5 border-l-2 border-slate-800 pl-4 ml-1">
                <h5 className="text-base sm:text-lg font-bold text-white">
                  {personalInfo.education.degree}
                </h5>
                <p className="text-xs sm:text-sm font-semibold text-sky-400">
                  {personalInfo.education.field}
                </p>
                <p className="text-xs text-slate-300 font-medium">
                  {personalInfo.education.institution}
                </p>
                <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {personalInfo.education.status} Student
                </span>
              </div>

              {/* Coursework */}
              <div className="pt-3 border-t border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  <BookOpen className="w-4 h-4 text-purple-400" />
                  <span>Key Coursework</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {personalInfo.education.coursework.map((course, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/60 px-3 py-2 rounded-lg border border-slate-800/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Quick Focus Highlights */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400">
                <Award className="w-4 h-4" />
                <span>Focus Areas</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5 text-xs font-medium text-slate-300">
                <div className="bg-slate-900 p-2.5 rounded-lg text-center border border-slate-800">💻 Web Development</div>
                <div className="bg-slate-900 p-2.5 rounded-lg text-center border border-slate-800">⚡ C / C++ Logic</div>
                <div className="bg-slate-900 p-2.5 rounded-lg text-center border border-slate-800">⚛️ React Basics</div>
                <div className="bg-slate-900 p-2.5 rounded-lg text-center border border-slate-800">🚀 Quick Learner</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
