import React from "react";
import { 
  Cpu, MessageSquare, Brain, 
  Code2, LayoutTemplate, Globe, Server, Database, Terminal, 
  Coffee, Leaf, Cloud, PenTool, GitBranch, Wrench, 
  UserCheck, Clock, Handshake, FileText, Shield, Layers, Lightbulb, Workflow
} from "lucide-react";
// 1. Import Framer Motion
import { motion } from "framer-motion";

const skillCategories = [
  {
    id: "tech-skills",
    title: "Technical Proficiency",
    description: "The tools and technologies I use to build scalable solutions.",
    icon: Cpu,
    color: "text-blue-400",
    subSections: [
      {
        title: "Frontend Development",
        skills: [
          { name: "React", icon: Code2 },
          { name: "JavaScript", icon: Code2 },
          { name: "HTML5", icon: LayoutTemplate },
          { name: "CSS3", icon: LayoutTemplate },
          { name: "Tailwind CSS", icon: LayoutTemplate },
        ]
      },
      {
        title: "Backend & APIs",
        skills: [
          { name: "Java", icon: Coffee },
          { name: "Spring Boot", icon: Leaf },
          { name: "Node.js", icon: Server },
          { name: "REST APIs", icon: Globe },
          { name: "MySQL", icon: Database },
          { name: "Oracle", icon: Database },
          { name: "ML", icon: Brain },
          { name: "Python", icon: Code2 },
        ]
      },
      {
        title: "Tools & Methods",
        skills: [
          { name: "Git & GitHub", icon: GitBranch },
          { name: "VS Code", icon: Terminal },
          { name: "Figma", icon: PenTool },
          { name: "Vercel", icon: Cloud },
          { name: "Railways", icon: Cloud },
        ]
      }
    ]
  },
  {
    id: "soft-skills",
    title: "Interpersonal Skills",
    description: "How I collaborate and contribute to professional environments.",
    icon: MessageSquare,
    color: "text-purple-400",
    subSections: [
      {
        title: "",
        skills: [
          { name: "Professional Communication", icon: UserCheck },
          { name: "Time Management", icon: Clock },
          { name: "Client Relations", icon: Handshake },
          { name: "Administrative Proficiency", icon: FileText },
          { name: "Discretion", icon: Shield },
        ]
      }
    ]
  },
  {
    id: "logic-skills",
    title: "Problem Solving",
    description: "My approach to tackling complex challenges.",
    icon: Brain,
    color: "text-cyan-400",
    subSections: [
      {
        title: "",
        skills: [
          { name: "Algorithmic Thinking", icon: Lightbulb },
          { name: "System Architecture", icon: Layers },
          { name: "Debugging", icon: Wrench },
          { name: "Logic Design", icon: Workflow },
        ]
      }
    ]
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 } // Stagger effect for children
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 }, // Start slightly down and invisible
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 100 } // Springy pop effect
  }
};

export const Skills = () => {
  return (
    <section id="skills" className="relative z-10 py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Skills</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive look at my technical expertise and professional capabilities.
          </p>
        </motion.div>

        {/* Categories Loop */}
        <div className="flex flex-col gap-24">
          {skillCategories.map((category) => (
            <div key={category.id} id={category.id} className="scroll-mt-24">
              
              {/* Category Header Animation */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-8 pb-4 border-b border-slate-800"
              >
                <div className={`p-3 rounded-full bg-slate-800/50 border border-slate-700 ${category.color}`}>
                  <category.icon size={28} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">{category.title}</h3>
                  <p className="text-slate-400 text-sm">{category.description}</p>
                </div>
              </motion.div>

              {/* Sub-sections Loop */}
              <div className="space-y-10">
                {category.subSections.map((subSection, subIndex) => (
                  <div key={subIndex}>
                    {/* Sub-section Title */}
                    {subSection.title && (
                      <motion.h4 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-xl font-semibold text-slate-300 mb-6 flex items-center gap-2"
                      >
                        <span className={`w-2 h-8 rounded-full bg-gradient-to-b from-blue-500 to-purple-500`}></span>
                        {subSection.title}
                      </motion.h4>
                    )}

                    {/* Skills Grid with Staggered Animation */}
                    <motion.div 
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                    >
                      {subSection.skills.map((skill, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800 hover:border-blue-500/50 p-4 rounded-xl transition-colors duration-300 hover:shadow-lg hover:shadow-blue-500/10 flex items-center gap-3 cursor-default"
                        >
                          <div className={`p-2 rounded-lg bg-slate-800/50 group-hover:bg-slate-700 transition-colors`}>
                            <skill.icon className={`w-5 h-5 ${category.color} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all`} />
                          </div>
                          <span className="text-slate-200 font-medium text-sm md:text-base group-hover:text-white">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};