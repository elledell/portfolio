import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const AiAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hi there! I'm Lenah's AI Assistant. 🤖\n\nI can tell you about her skills, projects, or how to get in touch. What would you like to know?", 
      sender: "bot" 
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // --- THE "BRAIN" (Simple Logic to simulate AI) ---
  const generateResponse = (text) => {
    const lowerText = text.toLowerCase();

    if (lowerText.includes("contact") || lowerText.includes("email") || lowerText.includes("reach")) {
      return "You can reach Lenah via email at lenah.devs@example.com or connect with her on LinkedIn. Check out the Contact page for more!";
    }
    if (lowerText.includes("skill") || lowerText.includes("stack") || lowerText.includes("tech")) {
      return "Lenah is proficient in React, Spring Boot, Java, JavaScript, and Tailwind CSS. She also has experience with MySQL and Figma.";
    }
    if (lowerText.includes("project") || lowerText.includes("work")) {
      return "She has built some cool things! Notable projects include the BITSA Full-Stack Website, the Nutrix Nutrition Planner, and a School Management System.";
    }
    if (lowerText.includes("about") || lowerText.includes("who")) {
      return "Lenah is a Full-Stack Developer passionate about building scalable web applications and crafting immersive digital experiences.";
    }
    if (lowerText.includes("hello") || lowerText.includes("hi")) {
      return "Hello! 👋 How can I help you today?";
    }
    return "I'm currently a beta version trained specifically on Lenah's portfolio. Try asking about 'skills', 'projects', or 'contact info'!";
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // 1. Add User Message
    const userMessage = { id: Date.now(), text: inputValue, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // 2. Simulate AI "Thinking" delay
    setTimeout(() => {
      const responseText = generateResponse(userMessage.text);
      const botMessage = { id: Date.now() + 1, text: responseText, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* --- Floating Action Button (Toggle) --- */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg shadow-purple-500/30 text-white flex items-center justify-center border border-white/10"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {/* Notification Dot */}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-[#030014]"></span>
        )}
      </motion.button>

      {/* --- Chat Window --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] md:w-96 h-[500px] max-h-[80vh] flex flex-col bg-[#0f172a]/95 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-b border-slate-700 flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Bot size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Lenah's Assistant</h3>
                <p className="text-xs text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> Online
                </p>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white rounded-br-none"
                        : "bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 px-4 py-3 rounded-2xl rounded-bl-none border border-slate-700 flex gap-1">
                    <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 border-t border-slate-700 bg-slate-900/50">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about skills, projects..."
                  className="flex-1 bg-slate-800 border border-slate-700 text-white text-sm rounded-xl px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors placeholder-slate-500"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="text-center mt-2">
                 <p className="text-[10px] text-slate-500 flex items-center justify-center gap-1">
                   <Sparkles size={10} /> Powered by Lenah Devs Logic
                 </p>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};