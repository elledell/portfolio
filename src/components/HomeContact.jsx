import React from "react";
import { Link } from "react-router-dom";
import { ContactFlipCad } from "./ContactFlipCad";

export const HomeContact = () => {
  return (
    <section className="relative py-24 px-4 z-10 overflow-hidden">
        
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 z-0"></div>
      
      {/* Optional: Add a subtle SVG wave at bottom if desired, otherwise removed for clean look */}

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* LEFT SIDE: The Bouncing Flip Card */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
             <ContactFlipCad />
          </div>

          {/* RIGHT SIDE: Text Content */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <p className="text-blue-400 font-bold tracking-wider mb-2 uppercase text-sm">
              Collaboration
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Amazing Together</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl leading-relaxed">
              I am currently looking for <strong>internship opportunities</strong> and freelance projects. 
              Whether you have a question about my stack, want to discuss a project, or just want to say hi, 
              I'd love to hear from you!
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-bold shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-1"
            >
              Get In Touch
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};