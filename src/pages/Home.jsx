import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground"; // Keeping the background
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { HomeProjects } from "../components/HomeProjects";
import { HomeContact } from "../components/HomeContact";
// Import the new component
import { HomeCertificates } from "../components/HomeCertificates"; 

export const Home = () => {
  return (
    <div className="min-h-screen bg-[#030014] text-foreground overflow-x-hidden">
      <Navbar />
      <StarBackground /> {/* This runs in the background for the whole page */}

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <HomeProjects />
        
        {/* Added the Certificates Section here */}
        <HomeCertificates />
        <HomeContact />
        
      </main>
    </div>
  );
};