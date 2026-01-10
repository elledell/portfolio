import React, { useState } from "react"; // 1. Import useState
import { motion } from "framer-motion";
import { Phone, Clock } from "lucide-react";

export const ContactFlipCad = () => {
  // 2. Create state to track if flipped
  const [isFlipped, setIsFlipped] = useState(false);

  // 3. Toggle function
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{ 
        duration: 2, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="w-full max-w-sm h-72 cursor-pointer group perspective-1000 z-20"
      // 4. Add onClick to handle touch devices
      onClick={handleFlip}
    >
      {/* Inner Container: Handles the FLIP logic */}
      {/* Logic explanation: 
         - group-hover:[transform:rotateY(180deg)] -> Flips on Mouse Hover
         - ${isFlipped ? "[transform:rotateY(180deg)]" : ""} -> Flips on Touch/Click
      */}
      <div 
        className={`relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}
      >
        
        {/* === FRONT SIDE (Blue) === */}
        <div className="absolute inset-0 bg-blue-600 text-white p-8 flex flex-col items-center justify-center text-center rounded-xl shadow-2xl [backface-visibility:hidden]">
          <div className="bg-white/20 p-4 rounded-full mb-6">
            <Phone size={40} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Let's Talk</h3>
          <div className="w-10 h-1 bg-white/50 mb-4 rounded-full"></div>
          <p className="mb-1 opacity-90">Are you hiring?</p>
          <p className="font-bold text-lg">+254 794 847 876</p>
          {/* Small hint for mobile users */}
          <p className="md:hidden text-xs mt-4 text-white/70">(Tap to flip)</p>
        </div>

        {/* === BACK SIDE (Purple) === */}
        <div className="absolute inset-0 bg-purple-700 text-white p-8 flex flex-col items-center justify-center text-center rounded-xl shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="bg-white/20 p-4 rounded-full mb-6">
            <Clock size={40} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Availability</h3>
          <div className="w-10 h-1 bg-white/50 mb-4 rounded-full"></div>
          <p className="mb-1">Mon - Fri: 9am - 5pm</p>
          <p>Open for Freelance & Internships</p>
          <p className="mt-4 text-xs opacity-75">Based in Kenya (GMT+3)</p>
        </div>
        
      </div>
    </motion.div>
  );
};