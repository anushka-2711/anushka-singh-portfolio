import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#1d1f1c]">
      <Navbar />
      <main>
        <Hero />
        <div className="ticker" aria-label="Anushka's areas of interest">
          <div className="ticker-track flex items-center gap-8 text-xs font-bold uppercase tracking-[0.2em]">
            <span>Frontend craft</span><span className="text-[#b5cf5b]">✳</span>
            <span>Problem solving</span><span className="text-[#ee7048]">✳</span>
            <span>Human-centred ideas</span><span className="text-[#b5cf5b]">✳</span>
            <span>Always learning</span><span className="text-[#ee7048]">✳</span>
            <span>Frontend craft</span><span className="text-[#b5cf5b]">✳</span>
            <span>Problem solving</span><span className="text-[#ee7048]">✳</span>
            <span>Human-centred ideas</span><span className="text-[#b5cf5b]">✳</span>
            <span>Always learning</span><span className="text-[#ee7048]">✳</span>
          </div>
        </div>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
