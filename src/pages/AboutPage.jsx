import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { User, Briefcase, GraduationCap, Calendar, Laptop, Quote } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/pic.jpg"; 

export const AboutPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-slate-950 text-gray-200">
      <Navbar />
      <StarBackground />
      
      <main className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        
        {/* --- NEW SECTION: ABOUT ME (Matches Home Page) --- */}
        <section className="flex flex-col md:flex-row items-center gap-12 mb-24 animate-fade-in-up">
          {/* Left: Image (Same style as Home) */}
          <div className="w-full md:w-1/3 flex justify-center">
             <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              <img src={logo} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right: Bio */}
          <div className="w-full md:w-2/3 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              About <span className="text-blue-500">Me</span>
            </h1>
            <h3 className="text-xl text-blue-300 font-medium">
              Full-Stack Developer | Problem Solver | Tech Enthusiast
            </h3>
            
            <div className="text-gray-300 text-lg leading-relaxed space-y-4">
              <p>
                I am a passionate developer who believes in the power of technology to transform ideas into reality. 
                With a strong foundation in <span className="text-white font-semibold">Java, Spring Boot, and React</span>, 
                I specialize in building efficient, scalable backends and intuitive, dynamic frontends.
              </p>
              <p>
                My background is unique—I didn't just start in code. I have honed my skills in <strong>leadership, communication, and organization</strong> through diverse roles as a teacher, receptionist, and administrator. This experience allows me to understand not just the <em>code</em>, but the <em>people</em> and <em>business needs</em> behind it.
              </p>
              
              <div className="flex items-center gap-3 pt-2">
                <Quote className="text-blue-500 rotate-180" size={20} />
                <p className="italic text-blue-400 font-medium">"Where vision meets execution."</p>
              </div>
            </div>
          </div>
        </section>

        {/* 1. MY STORY */}
        <section id="story" className="mb-20 scroll-mt-28 border-t border-white/5 pt-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-blue-500/10 rounded-full text-blue-500">
              <User size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">My Story</h2>
          </div>
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 leading-relaxed text-gray-300 text-lg">
            <p className="mb-4">
              My professional journey has been diverse, teaching me adaptability and resilience. 
              From managing front-desk operations and payroll to teaching young minds, I have always been driven by a desire to solve problems.
            </p>
            <p>
              However, my true passion lies in technology. Transitioning into <strong>Full-Stack Development</strong> allowed me to combine my organizational skills with my love for logic and creativity. 
              Today, I freelance as a web developer and excel specialist, building digital solutions that help businesses thrive.
            </p>
          </div>
        </section>

        {/* 2. EXPERIENCE */}
        <section id="experience" className="mb-20 scroll-mt-28">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-purple-500/10 rounded-full text-purple-500">
              <Briefcase size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">Experience</h2>
          </div>
          
          <div className="grid gap-6">
            
            {/* Freelance */}
            <div className="p-8 bg-slate-900/50 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors group">
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 group-hover:scale-110 transition-transform">
                    <Laptop size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Freelance Web Developer & Excel Specialist</h3>
                </div>
                <span className="flex items-center gap-2 text-sm text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full w-fit">
                  <Calendar size={14} /> Current
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-4">Remote / Self-Employed</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Designing and developing responsive websites for clients.</li>
                <li>Creating complex Excel sheets for data management and reporting.</li>
                <li>Managing client requirements and delivering solutions remotely.</li>
              </ul>
            </div>

            {/* City Groomers */}
            <div className="p-8 bg-slate-900/50 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-colors">
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-2">
                <div className="flex items-center gap-3">
                   <h3 className="text-xl font-bold text-white">Receptionist & Software Operator</h3>
                </div>
                <span className="flex items-center gap-2 text-sm text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full w-fit">
                  <Calendar size={14} /> May 2025 - Sept 2025
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-4">City Groomers Salon, Spa & Barbershop</p>
              <p className="text-gray-300 mb-2">
                Managed daily front-office operations, including using <strong>Odoo Software</strong> for bookings and inventory.
              </p>
            </div>

            {/* Geslink */}
            <div className="p-8 bg-slate-900/50 rounded-2xl border border-white/5 hover:border-green-500/30 transition-colors">
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-2">
                <div className="flex items-center gap-3">
                   <h3 className="text-xl font-bold text-white">Front Desk Secretary</h3>
                </div>
                <span className="flex items-center gap-2 text-sm text-green-400 bg-green-500/10 px-3 py-1 rounded-full w-fit">
                  <Calendar size={14} /> May 2024 - Sept 2024
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-4">Geslink Security Service</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Managed payroll and invoicing using <strong>Microsoft Excel</strong>.</li>
                <li>Designed promotional posters and marketing materials.</li>
              </ul>
            </div>

            {/* Teaching */}
            <div className="p-8 bg-slate-900/50 rounded-2xl border border-white/5 hover:border-yellow-500/30 transition-colors">
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-2">
                <div className="flex items-center gap-3">
                   <h3 className="text-xl font-bold text-white">Teacher (Mathematics & Science)</h3>
                </div>
                <span className="flex items-center gap-2 text-sm text-yellow-400 bg-yellow-500/10 px-3 py-1 rounded-full w-fit">
                  <Calendar size={14} /> April 2025
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-4">Gilberma Gilma Academy</p>
              <p className="text-gray-300">
                Taught CBC Grade 4, 5, and 6 students, developing strong communication and mentorship skills.
              </p>
            </div>

          </div>
        </section>

        {/* 3. EDUCATION */}
        <section id="education" className="mb-20 scroll-mt-28">
           <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-green-500/10 rounded-full text-green-500">
              <GraduationCap size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">Education</h2>
          </div>
          
          <div className="border-l-2 border-slate-800 ml-3 space-y-12 pl-8 relative">
            <div className="relative">
              <span className="absolute -left-[41px] top-0 w-6 h-6 bg-slate-950 border-4 border-green-500 rounded-full"></span>
              <h3 className="text-xl font-bold text-white">Bachelor of Science in Software Engineering</h3>
              <p className="text-gray-500 text-sm mb-2">University of Eastern Africa Baraton • 2022 - 2026</p>
              <p className="text-gray-400">Relevant Coursework: Data Structures, Algorithms, Web Development,Machine Learning.</p>
            </div>
             <div className="relative">
              <span className="absolute -left-[41px] top-0 w-6 h-6 bg-slate-950 border-4 border-slate-700 rounded-full"></span>
              <h3 className="text-xl font-bold text-white">High School Certificate</h3>
              <p className="text-gray-500 text-sm mb-2">Senior Chief Koinange Girls High School • 2017 - 2022</p>
              <p className="text-gray-400">Relevant Coursework: Microsoft Packages, Binary, Project Documentation.</p>
            </div>
          </div>
          
        </section>

      </main>
    </div>
  );
};