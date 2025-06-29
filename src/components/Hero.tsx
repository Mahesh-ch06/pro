import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-[90vh] flex flex-col justify-center">
      <div className="max-w-3xl">
        <p className="text-sky-400 mb-4 text-lg reveal">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 reveal" style={{transitionDelay: '100ms'}}>
          Chitikeshi Mahesh.
        </h1>
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-400 mb-6 reveal" style={{transitionDelay: '200ms'}}>
          I build intelligent applications.
        </h2>
        <p className="text-lg text-slate-400 max-w-xl mb-8 reveal" style={{transitionDelay: '300ms'}}>
          I'm a passionate AI/ML enthusiast and Computer Science undergraduate specializing in scalable project development and full-stack engineering. Currently building <strong className="text-white">CampusConnect</strong> to revolutionize campus services.
        </p>
        <div className="reveal" style={{transitionDelay: '400ms'}}>
          <a
            href="#projects"
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;