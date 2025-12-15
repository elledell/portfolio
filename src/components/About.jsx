import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/pic.jpg"; 

export const About = () => {
  return (
    <section className="bg-slate-950 py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* LEFT: IMAGE */}
          <div className="w-full md:w-2/5 flex justify-center relative">
            <div className="absolute inset-0 bg-blue-600/20 blur-[60px] rounded-full transform scale-90 z-0" />
            
            <div className="relative z-10 w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src={logo} 
                alt="Profile" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
            </div>
          </div>

          {/* RIGHT: CONTENT (Synced with About Page) */}
          <div className="w-full md:w-3/5 space-y-8">
            
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                About <span className="text-blue-500">Me</span>
              </h2>
              <p className="text-blue-400 font-medium text-lg">
                Full-Stack Developer & Tech Enthusiast
              </p>
            </div>

            <div className="text-gray-400 text-lg leading-relaxed space-y-4">
              <p>
                I am a passionate developer who believes in the power of technology to transform ideas into reality. 
                With a strong foundation in <span className="text-white font-semibold">Java, Spring Boot, and React</span>, 
                I specialize in building efficient, scalable backends and intuitive, dynamic frontends.
              </p>
              <p>
                {/* SYNCED TEXT: Mentions the diverse background */}
                My unique journey—spanning roles in <strong>teaching, administration, and tech</strong>—has equipped me with a holistic perspective on problem-solving.
                My approach is simple: <span className="italic text-blue-400">"Where vision meets execution."</span> 
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-2">
              <div className="px-8 py-4 bg-slate-900 rounded-lg border border-gray-800 flex flex-col items-center min-w-[140px]">
                <span className="text-3xl font-bold text-blue-500">1+</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider mt-1">Years Exp.</span>
              </div>
              
              <div className="px-8 py-4 bg-slate-900 rounded-lg border border-gray-800 flex flex-col items-center min-w-[140px]">
                <span className="text-3xl font-bold text-purple-500">10+</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider mt-1">Projects</span>
              </div>
            </div>

            <div className="pt-4">
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 text-white border-b-2 border-blue-500 pb-1 hover:text-blue-400 transition-colors group"
              >
                Read full story
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};