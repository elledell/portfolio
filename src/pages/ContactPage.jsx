import React from "react";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { Mail, MapPin, MessageCircle, Send, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#030014] text-white overflow-x-hidden relative">
      <Navbar />
      <StarBackground />

      <div className="pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h1>
          <p className="text-slate-400">Have a project in mind? Let's turn your vision into reality.</p>
        </motion.div>

        {/* TOP SECTION: 4 Info Cards (Updated Grid & Added WhatsApp) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { 
              icon: Mail, 
              title: "Email", 
              desc: "For inquiries and projects", 
              link: "hellenmochama7@gmail.com", 
              href: "mailto:hellenmochama7@gmail.com",
              color: "text-blue-400" 
            },
            { 
              icon: MapPin, 
              title: "Location", 
              desc: "Based in", 
              link: "Nairobi, Kenya / Remote", 
              href: "#",
              color: "text-orange-400" 
            },
            { 
              icon: Linkedin, 
              title: "LinkedIn", 
              desc: "Let's connect professionally", 
              link: "View Profile", 
              href: "https://www.linkedin.com/in/hellen-waithira-b96a61392", 
              color: "text-blue-500" 
            },
            { 
              icon: MessageCircle, 
              title: "WhatsApp", 
              desc: "Chat directly", 
              link: "+254 794 847 876", // UPDATE THIS WITH YOUR NUMBER
              href: "https://wa.me/254794847876", // UPDATE THIS (No spaces or +)
              color: "text-green-500" 
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-xl hover:border-slate-600 transition-all shadow-lg flex flex-col items-start"
            >
              <div className={`p-3 rounded-lg bg-slate-800/50 w-fit mb-4 ${item.color}`}>
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-1">{item.title}</h3>
              <p className="text-slate-400 text-xs mb-3">{item.desc}</p>
              <a href={item.href} target="_blank" rel="noopener noreferrer" className={`font-medium ${item.color} hover:underline mt-auto text-sm break-all`}>
                {item.link}
              </a>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM SECTION: Form */}
        <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-blue-500 pl-4">Send me a Message</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Hellen Waithira" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-white transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-white transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Subject</label>
              <input 
                type="text" 
                placeholder="Project Proposal / Hiring Inquiry" 
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-white transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Message</label>
              <textarea 
                rows="5"
                placeholder="Hi Lenah, I'd like to discuss..." 
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-white transition-colors resize-none"
              ></textarea>
            </div>

            <div className="flex gap-4 pt-4">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-all">
                <Send size={18} /> Send Message
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};