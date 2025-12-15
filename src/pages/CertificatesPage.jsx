import React from "react";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground"; // Imported
import { certificates } from "../data/certificates";
import { motion } from "framer-motion";
import { Award, Calendar, BadgeCheck, Expand } from "lucide-react";

export const CertificatesPage = () => {
  return (
    <div className="min-h-screen bg-[#030014] text-white overflow-x-hidden relative">
      <Navbar />
      
      {/* 1. Add StarBackground here */}
      <StarBackground />

      {/* 2. Add 'relative z-10' to ensure content sits ON TOP of stars */}
      <div className="relative z-10 pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Certifications</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Documented proof of my technical journey, from University innovation weeks to national Hackathons.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl overflow-hidden flex flex-col md:flex-row hover:border-purple-500/40 transition-all group"
            >
              {/* Image Section - Larger on this page */}
              <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden bg-slate-800">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
              </div>

              {/* Details Section */}
              <div className="p-6 md:w-3/5 flex flex-col justify-center">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
                  <div className="flex items-center gap-2 text-purple-400 font-medium mb-1">
                    <BadgeCheck size={16} /> {cert.issuer}
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Calendar size={14} /> {cert.date}
                  </div>
                </div>

                <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="px-2 py-1 text-xs rounded border border-slate-700 bg-slate-800/50 text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>

                <a 
                  href={cert.image} // Clicking opens the image full size (since you have scans)
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors text-sm font-semibold w-fit"
                >
                  <Expand size={16} /> View Document
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};