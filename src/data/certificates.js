// src/data/certificates.js
import BITSA from "../assets/BITSA.jpg";
import AI from "../assets/sc2.jpg";
import CERT from "../assets/CERT1.jpg";
export const certificates = [
  {
    id: 1,
    title: "AI for Sports Hackathon (Nutrix)",
    issuer: "University of Eastern Africa, Baraton", // You can update this to the specific organizer name
    date: "2025",
    description: "Developed 'Nutrix', a genetic nutrition planner for athletes.",
    skills: ["Teamwork", "Innovation", "AI Integration"],
    link: "#", // Link to post or proof if available
    image: AI // You will need to put your image here
  },
  {
    id: 2,
    title: "BITSA Hackathon Participant",
    issuer: "BITSA",
    date: "2025",
    description: "Built a Full-Stack website for the student association.",
    skills: ["Full-Stack Dev", "Rapid Prototyping"],
    link: "#",
    image: BITSA
  },
  {
    id: 3,
    title: "UEAB Innovation Week",
    issuer: "University of Eastern Africa, Baraton",
    date: "2025",
    description: "Certificate of Attendance and Participation in university innovation showcase.",
    skills: ["Networking", "Tech Trends"],
    link: "#",
    image: CERT
  },
  {
    id: 4,
    title: "Computer Studies & Microsoft Office",
    issuer: "Senior Chief Koinange Girls High School", // e.g., KNEC or the specific institute
    date: "2022", // Update with actual year
    description: "Proficiency in Microsoft Office Suite and Computer Fundamentals.",
    skills: ["Word", "Excel", "PowerPoint", "Computing Basics"],
    link: "#",
    image: "/src/assets/cert-computer.jpg" // Use your scanned image here
  }
];