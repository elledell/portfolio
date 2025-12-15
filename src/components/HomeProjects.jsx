import React from "react";
import { projects } from "../data/projects";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom"; // Assuming you use React Router

export const HomeProjects = () => {
  // Only show the first 3 projects
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
             <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
          </h1>
            <p className="text-slate-400">Highlights from my recent development work.</p>
          </div>
          <Link 
            to="/projects" 
            className="hidden md:flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            View All Projects <ArrowRight size={18} />
          </Link>
        </div>

        {/* Simple Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div key={project.id} className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-600 transition-all group">
              <div className="h-40 bg-slate-800 relative overflow-hidden">
                {/* Image Placeholder */}
                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex gap-2 text-blue-400 text-sm font-medium">
                    <a href={project.github} className="hover:text-white flex items-center gap-1"><Github size={14}/> Code</a>
                    <span className="text-slate-600">|</span>
                    <a href={project.live} className="hover:text-white flex items-center gap-1"><ExternalLink size={14}/> Live</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile "View All" Button */}
        <div className="mt-8 md:hidden text-center">
            <Link to="/projects" className="inline-flex items-center gap-2 text-blue-400">
                View All Projects <ArrowRight size={18} />
            </Link>
        </div>
      </div>
    </section>
  );
};