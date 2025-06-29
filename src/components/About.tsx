import React from 'react';
import { Code, Brain, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Building end-to-end applications with modern technologies"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI/ML Expertise",
      description: "Implementing intelligent solutions and machine learning models"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Leadership",
      description: "Leading teams in hackathons and collaborative projects"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Academic Excellence",
      description: "Maintaining 9.0 GPA while pursuing B.Tech in AI & ML"
    }
  ];

  return (
    <section id="about" className="py-24 reveal">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          <span className="text-sky-400">01.</span> About Me
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-sky-400 to-purple-500 rounded-full mb-8"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          <div className="text-lg text-slate-300 space-y-6 leading-relaxed">
            <p>
              Hello! I'm Mahesh, a driven Computer Science student at <span className="text-white font-semibold">SR University</span> with a deep fascination for the intersection of artificial intelligence and software engineering. My journey into tech began with a simple curiosity, which has since evolved into a full-fledged passion for problem-solving and building things that make a difference.
            </p>
            <p>
              My core focus is on developing <span className="text-sky-400 font-semibold">scalable applications</span>, whether it's designing efficient algorithms, architecting robust backend systems, or creating intuitive front-end experiences. I have a strong foundation in Data Structures, AI/ML, and cloud technologies.
            </p>
            <p>
              I thrive in leading and collaborating within teams, as evidenced by my experience in competitive hackathons and open-source contributions. I'm always eager to learn, adapt, and mentor others along the way.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="glass-effect p-4 rounded-lg hover:bg-slate-800/50 transition-all group">
                <div className="text-sky-400 mb-2 group-hover:scale-110 transition-transform">
                  {highlight.icon}
                </div>
                <h4 className="font-semibold text-white mb-1">{highlight.title}</h4>
                <p className="text-sm text-slate-400">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-purple-500 rounded-2xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105"></div>
            <div className="relative bg-slate-800 p-1 rounded-2xl">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Chitikeshi Mahesh"
                className="rounded-xl w-80 h-96 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-sky-500 text-white p-3 rounded-full shadow-lg">
              <Code className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;