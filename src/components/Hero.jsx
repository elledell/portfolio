import { ArrowRight, Download, Cpu } from "lucide-react";
import { motion } from "framer-motion";

// Animation settings
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      // This controls the speed of the typing (0.05 is fast, 0.1 is slower)
      staggerChildren: 0.08, 
      delayChildren: 0.5 // Wait half a second before starting
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

export const Hero = () => {
  // YOUR NEW SLOGAN
  const slogan = "Where vision meets execution.";
  const letters = slogan.split("");

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 text-center z-10">
        <div className="space-y-8">
          
          {/* 1. SLOGAN (Typewriter Animation) */}
          <motion.div 
            className="flex justify-center flex-wrap"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {letters.map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                // Added 'tracking-widest' to give it that cinematic movie-title feel
                className="text-blue-300 font-semibold tracking-[0.2em] uppercase text-sm md:text-lg"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>

          {/* 2. NAME */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            // Delays until after the slogan finishes typing
            transition={{ duration: 0.8, delay: 2.5 }} 
            className="text-5xl md:text-8xl font-bold text-white tracking-tight leading-tight"
          >
            Hi, I'm <br className="md:hidden" />
            <span className="animate-gradient-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Lenah Devs
            </span>
          </motion.h1>

          {/* 3. DESCRIPTION (Pop-In) */}
          <motion.p 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: 3.2, // Waits for name
              type: "spring", 
              stiffness: 100 
            }}
            className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Building scalable <span className="text-gray-200 font-semibold">Web Applications</span> and crafting immersive <span className="text-gray-200 font-semibold">Digital Experiences</span>.
          </motion.p>

          {/* 4. BUTTONS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.8, duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8"
          >
            <a 
              href="#projects" 
              className="group relative px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_30px_rgba(37,99,235,0.7)] hover:-translate-y-1 flex items-center gap-2"
            >
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a 
              href="/resume.pdf" 
              target="_blank"
              className="px-8 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              Download CV
              <Download size={20} />
            </a>
          </motion.div>

        </div>
      </div>

      {/* 5. TECH ICON */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-blue-500/80 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest opacity-70">Initialize</span>
          <div className="p-2 rounded-full border border-blue-500/30 bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.4)]">
            <Cpu size={24} className="animate-pulse" />
          </div>
        </div>
      </div>

    </section>
  );
};