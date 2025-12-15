import React from "react";
import { certificates } from "../data/certificates";
import { Award, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const HomeCertificates = () => {
  // We display all 4 since you have a focused set
  const featuredCerts = certificates;

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-10">
          <div>
             <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Certifications</span>
          </h1>
            <p className="text-slate-400">Recognitions, Hackathons, and Technical Qualifications.</p>
          </div>
          <Link 
            to="/certificates" 
            className="hidden md:flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            View Details <ArrowRight size={18} />
          </Link>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCerts.map((cert, index) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-slate-900/50 border border-slate-800 hover:border-purple-500/50 rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-purple-500/20"
            >
              {/* Image Area */}
              <div className="h-32 bg-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-purple-900/20 group-hover:bg-transparent transition-colors z-10" />
                {/* Ensure you add the images to your assets folder! */}
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Text Area */}
              <div className="p-4">
                <h3 className="font-bold text-white text-md mb-1 leading-tight line-clamp-2 min-h-[2.5rem]">
                  {cert.title}
                </h3>
                <p className="text-xs text-purple-400 mb-3">{cert.issuer}</p>
                <Link 
                  to="/certificates"
                  className="text-xs flex items-center gap-1 text-slate-400 group-hover:text-white transition-colors"
                >
                  View Certificate <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-8 md:hidden text-center">
          <Link to="/certificates" className="inline-flex items-center gap-2 text-purple-400">
             View All Certificates <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};