import { useState, useEffect } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    window.addEventListener("resize", generateStars);
    return () => window.removeEventListener("resize", generateStars);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setStars(newStars);
  };

  // --- THIS IS THE FUNCTION YOU WANTED ---
  const generateMeteors = () => {
    const numberOfMeteors = 4; // We set the number here
    const newMeteors = []; // Corrected name: newMeteors (not newStars)

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        // Left Side Logic: Position between -10% and 60%
        x: Math.random() * 60 - 10,
        
        // Random vertical start
        y: Math.random() * 40,
        
        // Constant Movement Logic: Negative delay ensures they start moving instantly
        delay: -(Math.random() * 5),
        
        duration: Math.random() * 2 + 3,
      });
    }
    setMeteors(newMeteors);
  };
  // ---------------------------------------

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Render Stars */}
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {/* Render Meteors */}
      {meteors.map((meteor) => (
        <div
          key={`meteor-${meteor.id}`}
          className="meteor animate-meteor"
          style={{
            width: "120px",
            height: "2px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.duration + "s",
          }}
        />
      ))}
    </div>
  );
};