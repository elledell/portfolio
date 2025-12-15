import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
  // Initialize State: Check Local Storage FIRST
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return true; // Default to Dark Mode
  });

  // Effect: Update the DOM and Save to Local Storage
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      // UPDATED: Removed bg-*, border-*, shadow-* classes. 
      // Added 'active:scale-90' for a nice click effect.
      className="p-2 rounded-full transition-transform duration-300 hover:scale-110 active:scale-90"
      aria-label="Toggle Theme"
    >
      {isDarkMode ? (
        // Sun shows when in Dark Mode (Yellow icon on Dark bg)
        <Sun size={28} className="text-yellow-300" />
      ) : (
        // Moon shows when in Light Mode (Dark Blue icon on Light bg)
        <Moon size={28} className="text-blue-900" />
      )}
    </button>
  );
};