import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const TopBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide when scrolled down more than 10px
      if (window.scrollY > 10) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        // COLORS: Deep Navy Blue (slate-900) with 90% opacity
        "bg-slate-900/95 text-gray-300 border-b border-white/10",
        "flex justify-end items-center px-8 transition-all duration-500 ease-in-out z-[60]",
        // LOGIC: When hidden, height becomes 0 and overflow hides content
        isVisible ? "h-12 opacity-100" : "h-0 opacity-0 overflow-hidden"
      )}
    >
      <div className="flex items-center gap-8 text-sm font-medium tracking-wide">
        <span className="opacity-70 hidden sm:block">Follow Me:</span>
        
        <div className="flex items-center gap-6">
          {/* Update 'href' with your actual links */}
          <a href="https://github.com/elledell" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 hover:scale-110 transition-all duration-300">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/hellen-waithira-b96a61392/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 hover:scale-110 transition-all duration-300">
            <Linkedin size={18} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 hover:scale-110 transition-all duration-300">
            <Twitter size={18} />
          </a>
          <a href="https://instagram.com/ellen._2k" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 hover:scale-110 transition-all duration-300">
            <Instagram size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};