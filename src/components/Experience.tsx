import React from 'react';
import { Trophy, Award, Calendar, MapPin } from 'lucide-react';
import { maheshInfo } from '../data/portfolio';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 reveal">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          <span className="text-sky-400">04.</span> Experience & Achievements
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-sky-400 to-purple-500 rounded-full mb-8"></div>
        <p className="text-xl text-slate-400 max-w-2xl">
          My journey through competitive programming, hackathons, and academic excellence.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Hackathons Timeline */}
        <div>
          <div className="flex items-center mb-8">
            <Trophy className="w-6 h-6 text-sky-400 mr-3" />
            <h3 className="text-2xl font-bold text-white">Hackathons & Competitions</h3>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-400 to-purple-500"></div>
            
            <div className="space-y-8">
              {maheshInfo.hackathons.map((hackathon, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-0 top-2 w-8 h-8 bg-gradient-to-r from-sky-400 to-purple-500 rounded-full flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-white" />
                  </div>
                  
                  <div className="glass-effect p-6 rounded-xl hover:bg-slate-800/50 transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-sky-400" />
                      <span className="text-sky-400 font-semibold">{hackathon.year}</span>
                      <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full">
                        {hackathon.placement}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-bold text-white mb-2">{hackathon.event}</h4>
                    <p className="text-slate-400 text-sm mb-3">{hackathon.detail}</p>
                    
                    <div className="flex items-center text-xs text-slate-500">
                      <MapPin className="w-3 h-3 mr-1" />
                      <span>Multi-location Competition</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Awards & Certifications */}
        <div>
          <div className="flex items-center mb-8">
            <Award className="w-6 h-6 text-sky-400 mr-3" />
            <h3 className="text-2xl font-bold text-white">Awards & Certifications</h3>
          </div>
          
          <div className="space-y-6">
            {/* Achievements */}
            <div>
              <h4 className="text-lg font-semibold text-slate-200 mb-4">🏆 Achievements</h4>
              <div className="space-y-4">
                {maheshInfo.achievements.map((achievement, index) => (
                  <div key={index} className="glass-effect p-4 rounded-lg hover:bg-slate-800/50 transition-all group">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-bold text-white group-hover:text-sky-400 transition-colors">
                          {achievement.title}
                        </h5>
                        <p className="text-sm text-slate-400 mt-1">{achievement.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div>
              <h4 className="text-lg font-semibold text-slate-200 mb-4">📜 Certifications</h4>
              <div className="space-y-4">
                {maheshInfo.certifications.map((cert, index) => (
                  <div key={index} className="glass-effect p-4 rounded-lg hover:bg-slate-800/50 transition-all group">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-bold text-white group-hover:text-sky-400 transition-colors">
                          {cert.name}
                        </h5>
                        <p className="text-sm text-slate-400 mt-1">Issued by: {cert.issuer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Education Section */}
      <div className="mt-16 glass-effect p-8 rounded-2xl">
        <div className="flex items-center mb-6">
          <div className="w-3 h-3 bg-gradient-to-r from-sky-400 to-purple-500 rounded-full mr-3"></div>
          <h3 className="text-2xl font-bold text-white">Education</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-bold text-white mb-2">{maheshInfo.education.degree}</h4>
            <p className="text-sky-400 font-semibold mb-2">{maheshInfo.education.university}</p>
            <p className="text-slate-400 mb-4">{maheshInfo.education.duration}</p>
            <div className="flex items-center">
              <span className="text-sm text-slate-400 mr-2">GPA:</span>
              <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-full">
                {maheshInfo.education.gpa}/10.0
              </span>
            </div>
          </div>
          
          <div>
            <h5 className="font-semibold text-slate-200 mb-3">Key Coursework</h5>
            <div className="flex flex-wrap gap-2">
              {maheshInfo.education.courses.map((course, index) => (
                <span key={index} className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;