import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 text-center reveal">
      <h2 className="text-2xl font-bold text-sky-400 mb-2">05. What's Next?</h2>
      <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Get In Touch</h3>
      <p className="text-slate-300 mb-8 max-w-xl mx-auto">
        I'm actively seeking new opportunities and collaborations. My inbox is always open, whether you have a question or just want to say hi, I'll do my best to get back to you!
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <a
          href="mailto:chitikeshimahesh6@gmail.com"
          className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
        >
          Say Hello
        </a>
        <a
          href="https://www.linkedin.com/in/chitikeshimahesh/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-sky-400 transition-colors"
        >
          <Linkedin className="w-7 h-7" />
        </a>
        <a
          href="https://github.com/Mahesh-ch06"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-sky-400 transition-colors"
        >
          <Github className="w-7 h-7" />
        </a>
      </div>
    </section>
  );
};

export default Contact;