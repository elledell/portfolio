import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { projects } from "../data/projects";
import { StarBackground } from "../components/StarBackground";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Code2, Users, FolderClock, CheckCircle2 } from "lucide-react";
// Import useLocation to read URL parameters
import { useLocation } from "react-router-dom";

export const ProjectsPage = () => {
  const [mainCategory, setMainCategory] = useState("solo"); 
  const [soloStatus, setSoloStatus] = useState("completed"); 

  // 1. Navigation Logic Fix
  const location = useLocation();

  useEffect(() => {
    // Parse the URL parameters (e.g., ?category=group)
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");

    if (categoryParam === "group") {
      setMainCategory("group");
    } else if (categoryParam === "solo") {
      setMainCategory("solo");
    }
  }, [location]);

  // Filter Logic
  const filteredProjects = projects.filter((project) => {
    if (mainCategory === "group") return project.category === "group";
    return project.category === "solo" && project.status === soloStatus;
  });

  return (
    <div className="min-h-screen bg-[#030014] text-white overflow-x-hidden">
      <Navbar />
      <StarBackground />
      <div className="pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            From individual full-stack applications to collaborative team systems.
          </p>
        </motion.div>

        {/* CONTROLS */}
        <div className="flex flex-col items-center gap-6 mb-12">
          {/* Main Category Buttons */}
          <div className="flex p-1 bg-slate-800/50 backdrop-blur-md rounded-xl border border-slate-700">
            <button
              onClick={() => setMainCategory("solo")}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                mainCategory === "solo" 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Code2 size={16} /> Solo Projects
            </button>
            <button
              onClick={() => setMainCategory("group")}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                mainCategory === "group" 
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Users size={16} /> Group Projects
            </button>
          </div>

          {/* Sub-filter for Solo */}
          <AnimatePresence>
            {mainCategory === "solo" && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="flex gap-4"
              >
                <button
                  onClick={() => setSoloStatus("completed")}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all flex items-center gap-2 ${
                    soloStatus === "completed"
                      ? "bg-green-500/10 border-green-500 text-green-400"
                      : "bg-transparent border-slate-700 text-slate-500 hover:border-slate-500"
                  }`}
                >
                  <CheckCircle2 size={14} /> Completed
                </button>
                <button
                  onClick={() => setSoloStatus("ongoing")}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all flex items-center gap-2 ${
                    soloStatus === "ongoing"
                      ? "bg-orange-500/10 border-orange-500 text-orange-400"
                      : "bg-transparent border-slate-700 text-slate-500 hover:border-slate-500"
                  }`}
                >
                  <FolderClock size={14} /> Ongoing
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* PROJECT GRID */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/10"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden relative">
                   <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-all duration-500 z-10" />
                   <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                   />
                   <div className="absolute top-3 right-3 z-20">
                     <span className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md border ${
                       project.status === 'completed' 
                        ? 'bg-green-500/20 border-green-500/50 text-green-300' 
                        : 'bg-orange-500/20 border-orange-500/50 text-orange-300'
                     }`}>
                       {project.status === 'completed' ? 'Completed' : 'In Progress'}
                     </span>
                   </div>
                </div>

                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-slate-800 text-blue-300 rounded-md border border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-4 mt-auto">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium transition-all"
                    >
                      <Github size={16} /> Code
                    </a>
                    
                    {/* DEMO BUTTON - Now fully clickable to external link */}
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all"
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};