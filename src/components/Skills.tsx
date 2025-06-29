import React from 'react';
import { CheckCircle } from 'lucide-react';
import { maheshInfo } from '../data/portfolio';

const Skills: React.FC = () => {
  const skillCategories = [
    { title: "Languages", data: maheshInfo.skills.languages },
    { title: "Technologies & Tools", data: maheshInfo.skills.technologies },
    { title: "Areas of Expertise", data: maheshInfo.skills.areas }
  ];

  return (
    <section id="skills" className="py-24 reveal">
      <h2 className="text-3xl font-bold mb-2 text-white">
        <span className="text-sky-400">02.</span> My Skillset
      </h2>
      <div className="h-0.5 w-48 bg-slate-700 mb-12"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="glass-effect p-6 rounded-lg">
            <h3 className="text-xl font-bold text-slate-200 mb-4">{category.title}</h3>
            <ul className="text-slate-300">
              {category.data.map((skill, skillIndex) => (
                <li key={skillIndex} className="mb-2 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-sky-400" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;