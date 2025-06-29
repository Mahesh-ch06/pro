import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 reveal">
      <h2 className="text-3xl font-bold mb-2 text-white">
        <span className="text-sky-400">01.</span> About Me
      </h2>
      <div className="h-0.5 w-48 bg-slate-700 mb-12"></div>
      <div className="flex flex-col md:flex-row items-start gap-12">
        <div className="md:w-2/3 text-lg text-slate-300 space-y-4">
          <p>
            Hello! I'm Mahesh, a driven Computer Science student at SR University with a deep fascination for the intersection of artificial intelligence and software engineering. My journey into tech began with a simple curiosity, which has since evolved into a full-fledged passion for problem-solving and building things that make a difference.
          </p>
          <p>
            My core focus is on developing scalable applications, whether it's designing efficient algorithms, architecting robust backend systems, or creating intuitive front-end experiences. I have a strong foundation in Data Structures, AI/ML, and cloud technologies.
          </p>
          <p>
            I thrive in leading and collaborating within teams, as evidenced by my experience in competitive hackathons and open-source contributions. I'm always eager to learn, adapt, and mentor others along the way.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
          <div className="w-64 h-64 rounded-md group relative">
            <div className="absolute inset-0 bg-sky-400 rounded-md transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <img
              src="https://placehold.co/300x300/1e293b/e2e8f0?text=CM"
              alt="Chitikeshi Mahesh"
              className="rounded-md relative z-10 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;