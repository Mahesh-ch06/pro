import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { maheshInfo } from '../data/portfolio';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 reveal">
      <h2 className="text-3xl font-bold mb-2 text-white">
        <span className="text-sky-400">03.</span> Things I've Built
      </h2>
      <div className="h-0.5 w-48 bg-slate-700 mb-12"></div>
      <div className="space-y-12">
        {maheshInfo.projects.map((project, index) => {
          const isFeatured = project.type === "Startup ✨";
          
          if (isFeatured) {
            return (
              <div key={index} className="project-card flex flex-col md:flex-row gap-6 items-center glass-effect p-8 rounded-lg">
                <div className={`text-left w-full ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <p className="text-sky-400 text-sm font-semibold">{project.type}</p>
                  <h3 className="text-2xl font-bold text-white mb-3 hover:text-sky-400 transition-colors">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.name}
                    </a>
                  </h3>
                  <div className="description bg-slate-800 p-4 rounded-md shadow-lg mb-4 text-slate-300">
                    <p>{project.description}</p>
                    {project.highlights && (
                      <ul className="mt-3 list-disc list-inside text-sm space-y-1">
                        {project.highlights.map((highlight, hIndex) => (
                          <li key={hIndex}>{highlight}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm text-slate-400 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <React.Fragment key={techIndex}>
                        <span>{tech}</span>
                        {techIndex < project.tech.length - 1 && <span className="mx-1">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sky-400 hover:text-sky-300 font-semibold group"
                  >
                    Explore Live Demo
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
                <div className="w-full md:w-1/2 flex-shrink-0 group relative">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                    <img
                      src={`https://placehold.co/600x360/1e293b/38bdf8?text=${project.name.replace(' ', '+')}`}
                      className="rounded-md w-full h-full object-cover"
                      alt={project.name}
                    />
                    <div className="absolute inset-0 bg-sky-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
                  </a>
                </div>
              </div>
            );
          } else {
            return (
              <div key={index} className="relative grid gap-4 grid-cols-12 items-center text-left project-card glass-effect p-6 rounded-lg transition-all duration-300">
                <div className="col-span-12 md:col-span-6 z-10">
                  <p className="text-sky-400 text-sm font-semibold">Project</p>
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-sky-400 transition-colors">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.name}
                    </a>
                  </h3>
                  <div className="description bg-slate-900/50 p-4 rounded-md shadow-lg mb-4 text-slate-300 text-sm">
                    <p>{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-x-3 text-xs text-slate-400 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex}>{tech}</span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-sky-400"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
                <div className="hidden md:block col-span-6 opacity-20 md:opacity-100">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={`https://placehold.co/600x360/1e293b/38bdf8?text=${project.name.replace(' ', '+')}`}
                      className="rounded-md w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                      alt={project.name}
                    />
                  </a>
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Projects;