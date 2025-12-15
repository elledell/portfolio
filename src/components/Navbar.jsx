import { useState, useEffect } from "react";
import { Menu, Plus, Minus, User, Briefcase, GraduationCap, Code, Users, Cpu, MessageSquare, Brain } from "lucide-react";
import { cn } from "../lib/utils";
// Make sure this matches your file name exactly!
import logo from "../assets/logo.png";
import { ThemeToggle } from "./ThemeToggle";
import { TopBar } from "./TopBar";
import { MobileSidebar } from "./MobileSideBar";

const navItems = [
  { name: "Home", href: "/" },
  
  { 
    name: "About", 
    href: "/about", 
    subItems: [
      // If these sections are on the About page, we use /about#id
      { name: "My Story", href: "/about#story", icon: User }, 
      { name: "Experience", href: "/about#experience", icon: Briefcase },
      { name: "Education", href: "/about#education", icon: GraduationCap }
    ]
  },
  
  { 
    name: "Skills", 
    // Since Skills is a section on your HOME page, we use /#skills
    // This tells the browser: "Go to Home page (/), then scroll to #skills"
    href: "/#skills",
    subItems: [
      { name: "Technical", href: "/#tech-skills", icon: Cpu },
      { name: "Interpersonal", href: "/#soft-skills", icon: MessageSquare },
      { name: "Problem Solving", href: "/#logic-skills", icon: Brain }
    ]
  },
  
  { 
    name: "Projects", 
    // Pointing to the new Projects Page we created
    href: "/projects",
    subItems: [
      // These use the query parameters we set up to filter the list automatically
      { name: "Solo Projects", href: "/projects?category=solo", icon: Code },
      { name: "Group Projects", href: "/projects?category=group", icon: Users }
    ]
  },
  
  { 
    name: "Certificates", 
    // Pointing to the new Certificates Page
    href: "/certificates" 
  },
  
  { 
    name: "Contact", 
    // Pointing to the new Contact Page
    href: "/contact" 
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex flex-col transition-all duration-300">
      <TopBar />

      <nav
        className={cn(
          "w-full transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "bg-slate-900/80 backdrop-blur-md shadow-sm border-gray-800 py-2"
            : "bg-transparent py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* UPDATED: Increased height from h-14 to h-20 */}
          <div className="flex items-center justify-between h-20">
            
            {/* LOGO AREA */}
            <a href="#hero" className="flex-shrink-0 cursor-pointer block">
              {/* UPDATED: Increased size from h-12 w-12 to h-16 w-16 (64px) */}
              <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-transform hover:scale-105 duration-300">
                <img 
                  src={logo} 
                  alt="Lenah Devs Logo" 
                  // If the head is still cut off, try changing 'object-[center_top]' to 'object-top' or 'object-center'
                  className="h-full w-full object-cover object-[center_top]"
                />
              </div>
            </a>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group flex items-center gap-1 cursor-pointer">
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-blue-400 font-medium transition-colors flex items-center gap-1"
                  >
                    {item.name}
                    
                    {item.subItems && (
                      <span className="ml-1">
                        <Plus size={14} className="group-hover:hidden transition-all" />
                        <Minus size={14} className="hidden group-hover:block transition-all" />
                      </span>
                    )}
                  </a>
                  
                  {item.subItems && (
                    <div className="absolute left-0 top-full mt-2 w-56 bg-slate-900 shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-700 overflow-hidden">
                      {item.subItems.map((sub) => (
                        <a 
                          key={sub.name} 
                          href={sub.href} 
                          className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:bg-slate-800 hover:text-blue-400 transition-colors"
                        >
                          <sub.icon size={18} className="text-blue-500" />
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <ThemeToggle />
            </div>

            {/* MOBILE BUTTON */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={() => setIsOpen(true)}
                className="text-gray-300 hover:text-white"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileSidebar 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        navItems={navItems} 
      />
      
    </header>
  );
};