import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Instagram, Mail, MapPin, Send } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-[#030014] pt-20 pb-10 border-t border-slate-800 text-slate-300 overflow-hidden">
      {/* Optional: Top glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLUMN 1: Brand & Socials */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">
              Lenah <span className="text-blue-500">Devs</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-400">
              Building scalable web applications and crafting immersive digital experiences. 
              Let's turn your vision into reality through code and creativity.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-blue-600 hover:text-white transition-all duration-300">
                <Github size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-blue-700 hover:text-white transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-sky-500 hover:text-white transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-pink-600 hover:text-white transition-all duration-300">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> About Me
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Projects
                </Link>
              </li>
              <li>
                <Link to="/certificates" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Certificates
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-purple-500 rounded-full"></span>
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="text-purple-500 mt-1" size={20} />
                <span className="text-sm">
                  University of Eastern Africa, Baraton <br />
                  Nandi County, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-purple-500" size={20} />
                <a href="mailto:lenah.devs@example.com" className="text-sm hover:text-white transition-colors">
                hellenmochama7@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Newsletter / Connect */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Stay Connected
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-cyan-500 rounded-full"></span>
            </h3>
            <p className="text-sm text-slate-400 mb-4">
              Subscribe to get updates on my latest projects and availability.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 text-white placeholder-slate-500 transition-colors"
              />
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/20">
                <Send size={16} /> Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 text-center md:text-left">
            © {currentYear} Lenah Devs. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};