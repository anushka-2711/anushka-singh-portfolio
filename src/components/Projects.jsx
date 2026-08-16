import React from 'react';
import { Github, ExternalLink, CheckCircle, Code2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2.5">
          <h2 className="text-xs font-bold uppercase tracking-widest text-sky-400">
            Student Projects
          </h2>

          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Academic & Personal <span className="text-gradient">Projects</span>
          </h3>

          <p className="text-slate-400 text-sm sm:text-base">
            Web development and hardware/software projects built to demonstrate
            problem-solving and coding fundamentals.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => {
            const hasGithub =
              Boolean(
                project.githubUrl &&
                project.githubUrl.trim() !== '' &&
                project.githubUrl.trim() !== '#'
              );

            const hasLive =
              Boolean(
                project.liveUrl &&
                project.liveUrl.trim() !== '' &&
                project.liveUrl.trim() !== '#'
              );

            return (
              <div
                key={project.id}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-5 hover:border-slate-700 transition-colors duration-200"
              >

                {/* Project Information */}
                <div className="space-y-4">

                  {/* Category */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      {project.tag}
                    </span>

                    <Code2 className="w-4 h-4 text-slate-500" />
                  </div>

                  {/* Title */}
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {project.title}
                    </h4>

                    <p className="text-xs font-medium text-slate-400 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      Key Highlights:
                    </span>

                    <ul className="space-y-1.5">
                      {project.features.map((feat, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-slate-300 flex items-start gap-2"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack & Links */}
                <div className="space-y-3 pt-3 border-t border-slate-800">

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-slate-800 text-slate-300 border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {(hasGithub || hasLive) && (
                    <div className="flex items-center gap-2 pt-2">

                      {hasGithub && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                        >
                          <Github className="w-3.5 h-3.5 text-sky-400" />
                          <span>GitHub</span>
                        </a>
                      )}

                      {hasLive && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}

                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;