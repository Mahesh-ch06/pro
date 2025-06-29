import React from 'react';
import { CheckCircle } from 'lucide-react';
import { maheshInfo } from '../data/portfolio';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 reveal">
      <h2 className="text-3xl font-bold mb-2 text-white">
        <span className="text-sky-400">04.</span> Experience & Achievements
      </h2>
      <div className="h-0.5 w-48 bg-slate-700 mb-12"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-slate-200 mb-6">Hackathons & Competitions</h3>
          <div className="relative pl-8 border-l-2 border-slate-700 space-y-10">
            {maheshInfo.hackathons.map((hackathon, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[39px] top-1 w-4 h-4 bg-sky-500 rounded-full border-4 border-slate-900 ring-4 ring-slate-700"></div>
                <p className="text-sm text-sky-400 mb-1">
                  {hackathon.year} - <span className="font-semibold">{hackathon.placement}</span>
                </p>
                <h3 className="text-lg font-bold text-white">{hackathon.event}</h3>
                <p className="text-slate-400 text-sm">{hackathon.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-200 mb-6">Awards & Certifications</h3>
          <div className="space-y-6">
            {[...maheshInfo.achievements, ...maheshInfo.certifications].map((item, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-sky-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white">{item.title || item.name}</h4>
                  <p className="text-sm text-slate-400">
                    {item.detail || `Issued by: ${(item as any).issuer}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;