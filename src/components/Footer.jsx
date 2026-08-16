import React from 'react';
import { Mail, Phone, ArrowUp, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05070c] border-t border-slate-800/80 pt-14 pb-12 text-slate-400 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-10 border-b border-slate-800/60">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white font-bold shadow-sm">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Aspiring Full Stack Developer | 2nd Year B.Tech CSE Student at Roorkee Institute of Technology (RIT).
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </h5>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#home" className="hover:text-sky-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-sky-400 transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-sky-400 transition-colors">Skills & Tools</a></li>
              <li><a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-sky-400 transition-colors">Contact Form</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-4 space-y-2.5">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Contact Info
            </h5>
            <div className="space-y-2 text-xs">
              <div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-sky-400 transition-colors break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>{personalInfo.email}</span>
                </a>
              </div>
              <div>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>+91 {personalInfo.phone}</span>
                </a>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 pt-1">
              Roorkee Institute of Technology (RIT), Roorkee, Uttarakhand.
            </p>
          </div>

        </div>

        {/* Bottom Copyright & Scroll to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} <span className="text-slate-300 font-medium">{personalInfo.name}</span>. Student Portfolio | Roorkee Institute of Technology (RIT).
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
