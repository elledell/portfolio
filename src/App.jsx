import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AboutPage } from "./pages/AboutPage";
import { ProjectsPage } from "./pages/ProjectsPage";
// Import the new Certificates Page
import { CertificatesPage } from "./pages/CertificatesPage"; 
import { ContactPage } from "./pages/ContactPage";
import { Footer } from "./components/Footer";
import { AiAssistant } from "./components/AiAssistant";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Main Home Route */}
        <Route path="/" element={<Home />} />
        
        {/* Detailed Pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        
        {/* NEW: Add the Certificates Route */}
        <Route path="/certificates" element={<CertificatesPage />} />
        <Route path="/contact" element={<ContactPage />} />

      
        
      </Routes>
      <Footer />
      <AiAssistant />
    </BrowserRouter>
  );
}

export default App;