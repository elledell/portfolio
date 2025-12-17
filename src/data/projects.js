import { Code2, Table2, Terminal, ShieldCheck, Database, Layout } from "lucide-react";
import BitsaImage from "../assets/BITSASC.jpg";
import NutrixImage from "../assets/Nutrix.jpg";
import ExcelImage from "../assets/excel.jpg";
import cctvImage from "../assets/cctv.jpg";
import smigImage from "../assets/smig.png";
import portfolioImage from "../assets/portfolio.jpg";
export const projects = [
  {
    id: 1,
    title: "BITSA Full-Stack Website",
    category: "solo", // UPDATED: Solo Project
    status: "ongoing",
    description: "A comprehensive platform for the Bachelor of Information Technology Students Association to manage events, members, and resources.",
    tech: ["React", "Vite", "Spring Boot", "MySQL"],
    github: "https://github.com/elledell", // Replace with real link
    live: "https://bitsa-website-frontend.vercel.app/", // Replace with real link
    image: BitsaImage 
  },
  {
    id: 2,
    title: "Nutrix (Genetic Nutrition)",
    category: "group", // UPDATED: Group Project
    status: "ongoing",
    description: "A personalized nutrition recommendation engine for athletes based on genetic makeup analysis.(PIN 2222)",
    tech: ["Python", "ML", "React", "SpringBoot"],
    github: "https://github.com/elledell",
    live: "https://nutrix-seven.vercel.app/",
    image: NutrixImage
  },
  {
    id: 3,
    title: "School Management System",
    category: "group", // UPDATED: Group Project
    status: "ongoing",
    description: "A robust MIS for school administration handling student records, grading, and budget management.",
    tech: ["Java", "Spring Boot", "React", "Oracle"],
    github: "https://github.com/yourusername/school-system",
    live: "https://school-system-demo.com",
    image: smigImage
  },
  {
    id: 4,
    title: "Financial Analytics Dashboard",
    category: "solo", // NEW: Excel Project
    status: "completed",
    description: "Advanced financial modeling using Excel functions for budget forecasting and expense tracking.",
    tech: ["Excel", "VBA", "Data Analysis"],
    github: "#", // Excel sheets might not have a GitHub link, can leave as '#'
    live: "https://onedrive.live.com/...", // Link to viewable Sheet
    image:ExcelImage
    },
  {
    id: 5,
    title: "CCTV Company System",
    category: "group", // NEW: CCTV Project
    status: "completed",
    description: "A management system for a security company to track installations, client maintenance, and inventory.",
    tech: ["PHP", "MySQL", "JavaScript"], // Assuming stack, update if different
    github: "https://github.com/yourusername/cctv-system",
    live: "https://one05cctv-233y.onrender.com",
    image: cctvImage
  },
  {
    id: 6,
    title: "Personal Portfolio V1",
    category: "solo",
    status: "completed",
    description: "My first portfolio website showcasing my early frontend development skills and resume.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/elledell",
    live: "https://portfolio-nine-eta-r3ixl22avc.vercel.app/",
    image: portfolioImage
  }
];