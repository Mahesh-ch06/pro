import React from 'react';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';
import { maheshInfo } from '../data/portfolio';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 reveal">
      <div className="text-center mb-16">
        <h2 className="text-2xl font-bold text-sky-400 mb-4">05. What's Next?</h2>
        <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Let's Work Together</h3>
        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          I'm actively seeking new opportunities and collaborations. Whether you have a project in mind, 
          want to discuss potential opportunities, or just want to connect, I'd love to hear from you!
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h4 className="text-2xl font-bold text-white mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <a 
                href={`mailto:${maheshInfo.profile.email}`}
                className="flex items-center p-4 glass-effect rounded-lg hover:bg-slate-800/50 transition-all group"
              >
                <Mail className="w-6 h-6 text-sky-400 mr-4 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-slate-400">{maheshInfo.profile.email}</p>
                </div>
              </a>
              
              <a 
                href={`tel:${maheshInfo.profile.phone}`}
                className="flex items-center p-4 glass-effect rounded-lg hover:bg-slate-800/50 transition-all group"
              >
                <Phone className="w-6 h-6 text-sky-400 mr-4 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p className="text-slate-400">{maheshInfo.profile.phone}</p>
                </div>
              </a>
              
              <div className="flex items-center p-4 glass-effect rounded-lg">
                <MapPin className="w-6 h-6 text-sky-400 mr-4" />
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p className="text-slate-400">Warangal, Telangana, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              <a
                href={maheshInfo.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={maheshInfo.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-all transform hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="glass-effect p-8 rounded-2xl">
          <h4 className="text-2xl font-bold text-white mb-4">Ready to Start a Project?</h4>
          <p className="text-slate-400 mb-6 leading-relaxed">
            I'm currently available for freelance work, internships, and full-time opportunities. 
            Let's discuss how we can work together to bring your ideas to life.
          </p>
          
          <div className="space-y-4">
            <a
              href={`mailto:${maheshInfo.profile.email}?subject=Let's Work Together&body=Hi Mahesh, I'd like to discuss a potential opportunity with you.`}
              className="block w-full bg-gradient-to-r from-sky-500 to-purple-500 hover:from-sky-600 hover:to-purple-600 text-white font-semibold py-4 px-6 rounded-lg transition-all transform hover:scale-105 text-center"
            >
              Send Me an Email
            </a>
            
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full border-2 border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-900 font-semibold py-4 px-6 rounded-lg transition-all text-center"
            >
              Download My Resume
            </a>
          </div>
          
          <div className="mt-6 p-4 bg-slate-800/30 rounded-lg">
            <p className="text-sm text-slate-400 text-center">
              <strong className="text-white">Response Time:</strong> I typically respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;