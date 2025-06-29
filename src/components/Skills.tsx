import React from 'react';
import { CheckCircle, TrendingUp } from 'lucide-react';
import { maheshInfo } from '../data/portfolio';

const Skills: React.FC = () => {
  const skillCategories = [
    { 
      title: "Programming Languages", 
      data: maheshInfo.skills.languages,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      title: "Technologies & Frameworks", 
      data: maheshInfo.skills.technologies,
      color: "from-purple-500 to-pink-500"
    },
    { 
      title: "Specializations", 
      data: maheshInfo.skills.areas,
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="skills" className="py-24 reveal">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          <span className="text-sky-400">02.</span> Technical Skills
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-sky-400 to-purple-500 rounded-full mb-8"></div>
        <p className="text-xl text-slate-400 max-w-2xl">
          Here's my technical toolkit - the languages, frameworks, and technologies I use to bring ideas to life.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="glass-effect p-8 rounded-2xl hover:bg-slate-800/50 transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color} mr-3`}></div>
              <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                {category.title}
              </h3>
            </div>
            
            <div className="space-y-4">
              {category.data.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex items-center group/skill">
                  <CheckCircle className="w-5 h-5 mr-3 text-sky-400 group-hover/skill:scale-110 transition-transform" />
                  <span className="text-slate-300 group-hover/skill:text-white transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 glass-effect p-8 rounded-2xl">
        <div className="flex items-center mb-6">
          <TrendingUp className="w-6 h-6 text-sky-400 mr-3" />
          <h3 className="text-2xl font-bold text-white">Soft Skills & Leadership</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {maheshInfo.skills.soft_skills.map((skill, index) => (
            <div key={index} className="text-center p-4 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-colors">
              <span className="text-slate-300 font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;