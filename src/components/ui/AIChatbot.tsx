/**
 * File: AIChatbot.tsx
 * Purpose: UI component: AIChatbot. Reusable interface element.
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */

import React, { useState } from 'react';
import { Sparkles, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

/**
 * Component: AIChatbot
 * 
 * Defines the AIChatbot component. Responsible for rendering the UI elements
 * and handling any internal state or side-effects for this section.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function AIChatbot() {
  // Local state to manage isOpen
  const [isOpen, setIsOpen] = useState(false);
  // Local state to manage messages
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm the SCAIL AI Assistant. How can I help you today with our IT, AI, or Toll Management solutions?", isBot: true }
  ]);
  // Local state to manage input
  const [input, setInput] = useState("");

  // Handler function for Send events

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { id: Date.now(), text: input, isBot: false }]);
    setInput("");
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: Date.now(), 
        text: "Thank you for your message. An executive will get back to you shortly regarding this inquiry.", 
        isBot: true 
      }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 px-4 h-14 bg-brand-600 hover:bg-brand-500 text-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)] hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] transition-all duration-300 hover:scale-105 z-50 group border border-white/10 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <Sparkles className="w-6 h-6 mr-2 group-hover:animate-pulse" />
        <span className="font-semibold tracking-wide">SCAIL AI</span>
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 w-80 sm:w-96 glass-card rounded-2xl overflow-hidden z-50 flex flex-col h-[500px] max-h-[80vh]"
          >
            {/* Header */}
            <div className="bg-brand-600 p-4 flex justify-between items-center text-white">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="font-medium">SCAIL AI Assistant</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-md transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-grow p-4 overflow-y-auto space-y-4 glass-section">
              {messages.map(msg => (
                <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                    msg.isBot 
                      ? 'glass-card text-slate-800 dark:text-slate-200 border border-slate-100 dark:border-slate-700 shadow-sm' 
                      : 'bg-brand-600 text-white'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-3 glass-section border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center space-x-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..." 
                  className="flex-grow glass-card border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-brand-500 outline-none dark:text-white"
                />
                <button type="submit" className="w-10 h-10 bg-brand-600 text-white rounded-full flex items-center justify-center hover:bg-brand-500 transition-colors shrink-0">
                  <Send className="w-4 h-4 ml-1" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
