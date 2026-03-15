import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
}

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Welcome to Okie Tokyo Tea! I'm your AI guide. How can I help you discover the perfect matcha today?", sender: "ai" },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // SIMULATE AI RESPONSE
    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: "That's a great question! I'm currently in 'UI mode', but soon I'll be able to give you expert advice on all our ceremonial grades.",
        sender: "ai",
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <div className="relative">
      {/* CHAT WINDOW */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 sm:bottom-28 sm:right-10 w-[min(calc(100vw-3rem),400px)] h-[min(600px,75vh)] bg-brand-card/95 backdrop-blur-3xl border border-brand-border shadow-[0_30px_90px_-15px_rgba(0,0,0,0.4)] rounded-[2.5rem] flex flex-col overflow-hidden z-10006"
          >
            {/* HEADER */}
            <div className="p-6 bg-brand-accent text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
                  <FaRobot className="text-xl" />
                </div>
                <div>
                  <h3 className="font-black text-sm uppercase tracking-widest">Okie Guide</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse"></span>
                    <span className="text-[10px] font-bold opacity-80 uppercase tracking-tighter">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                title="Close"
              >
                <FaTimes />
              </button>
            </div>

            {/* MESSAGES AREA */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: msg.sender === "user" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div 
                    className={`max-w-[80%] p-4 rounded-3xl text-sm leading-relaxed ${
                      msg.sender === "user" 
                        ? "bg-brand-accent text-white rounded-tr-none shadow-lg shadow-brand-accent/20" 
                        : "bg-brand-secondary/50 text-brand-text rounded-tl-none border border-brand-border/30"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* INPUT AREA */}
            <div className="p-6 border-t border-brand-border/20 bg-brand-bg/30">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about matcha..."
                  className="w-full bg-brand-card border border-brand-border px-6 py-4 rounded-2xl text-sm focus:outline-none focus:border-brand-accent transition-all placeholder:text-brand-muted/50"
                />
                <button 
                  onClick={handleSend}
                  title="Send Message"
                  className="absolute right-2 p-3 bg-brand-accent text-white rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-accent/20"
                >
                  <FaPaperPlane />
                </button>
              </div>
              <p className="mt-3 text-[10px] text-center text-brand-muted font-bold tracking-widest uppercase opacity-50">
                Powered by Okie Intelligence
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING ACTION BUTTON */}
      <motion.button
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`rounded-full p-4 flex items-center justify-center text-xl shadow-2xl transition-all duration-500 border-2 ${
          isOpen 
            ? "bg-white text-brand-accent border-brand-accent" 
            : "bg-brand-accent text-white border-white/20"
        }`}
        title="Open AI Guide"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
            >
              <FaTimes />
            </motion.div>
          ) : (
            <motion.div
              key="robot"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="flex items-center justify-center"
            >
              <FaRobot />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#41d34a] rounded-full border-2 border-white animate-bounce"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default AIAssistant;
