import React from 'react';
import { ArrowDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative">
      <div className="max-w-4xl">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full text-sky-400 text-sm font-medium reveal">
            👋 Available for opportunities
          </span>
        </div>
        
        <p className="text-sky-400 mb-4 text-lg font-medium reveal">Hi, my name is</p>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 reveal leading-tight" style={{transitionDelay: '100ms'}}>
          Chitikeshi Mahesh.
        </h1>
        
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-400 mb-8 reveal leading-tight" style={{transitionDelay: '200ms'}}>
          I build intelligent applications.
        </h2>
        
        <p className="text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed reveal" style={{transitionDelay: '300ms'}}>
          I'm a passionate <span className="text-white font-semibold">AI/ML enthusiast</span> and Computer Science undergraduate specializing in scalable project development and full-stack engineering. Currently building <strong className="text-sky-400">CampusConnect</strong> to revolutionize campus services.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 reveal" style={{transitionDelay: '400ms'}}>
          <a
            href="#projects"
            className="group bg-sky-500 hover:bg-sky-600 text-white font-semibold py-4 px-8 rounded-lg transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-sky-500/25 flex items-center justify-center"
          >
            View My Work
            <ArrowDown className="w-5 h-5 ml-2 transition-transform group-hover:translate-y-1" />
          </a>
          
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-2 border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-900 font-semibold py-4 px-8 rounded-lg transition-all flex items-center justify-center"
          >
            <Download className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
            Download Resume
          </a>
        </div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-sky-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-40 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default Hero;