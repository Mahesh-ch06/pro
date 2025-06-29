import React from 'react';
import { ArrowRight, ExternalLink, Github, Star } from 'lucide-react';
import { maheshInfo } from '../data/portfolio';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 reveal">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          <span className="text-sky-400">03.</span> Featured Projects
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-sky-400 to-purple-500 rounded-full mb-8"></div>
        <p className="text-xl text-slate-400 max-w-2xl">
          Here are some of my favorite projects that showcase my skills in full-stack development, AI/ML, and problem-solving.
        </p>
      </div>
      
      <div className="space-y-16">
        {maheshInfo.projects.map((project, index) => {
          const isFeatured = project.type === "Startup ✨";
          
          if (isFeatured) {
            return (
              <div key={index} className="relative">
                <div className="glass-effect p-8 rounded-2xl hover:bg-slate-800/50 transition-all duration-300 group">
                  <div className="flex flex-col lg:flex-row gap-8 items-center">
                    <div className={`flex-1 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-sky-500 to-purple-500 text-white text-sm font-semibold rounded-full">
                          <Star className="w-4 h-4 mr-1" />
                          {project.type}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                        {project.name}
                      </h3>
                      
                      <p className="text-sky-400 font-medium mb-4">{project.tagline}</p>
                      
                      <div className="bg-slate-900/50 p-6 rounded-xl mb-6 border border-slate-700/50">
                        <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                        {project.highlights && (
                          <ul className="space-y-2">
                            {project.highlights.map((highlight, hIndex) => (
                              <li key={hIndex} className="flex items-start text-sm text-slate-400">
                                <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-4">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
                        >
                          <ExternalLink className="w-5 h-5 mr-2" />
                          Live Demo
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex-1 max-w-lg">
                      <div className="relative group/image">
                        <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-purple-500 rounded-xl opacity-75 group-hover/image:opacity-100 transition-opacity"></div>
                        <img
                          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                          className="relative z-10 rounded-xl w-full h-80 object-cover group-hover/image:transform group-hover/image:scale-105 transition-transform duration-300"
                          alt={project.name}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div key={index} className="glass-effect p-6 rounded-xl hover:bg-slate-800/50 transition-all duration-300 group">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <div className="md:col-span-2">
                    <span className="text-sky-400 text-sm font-medium">Featured Project</span>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-slate-700/50 text-slate-400 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sky-400 hover:text-sky-300 font-medium group/link"
                    >
                      View Project
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                  <div className="hidden md:block">
                    <img
                      src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
                      className="rounded-lg w-full h-32 object-cover grayscale group-hover:grayscale-0 transition-all"
                      alt={project.name}
                    />
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      
      <div className="text-center mt-16">
        <a
          href="https://github.com/Mahesh-ch06"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center border-2 border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-900 font-semibold py-3 px-8 rounded-lg transition-all"
        >
          <Github className="w-5 h-5 mr-2" />
          View All Projects on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;