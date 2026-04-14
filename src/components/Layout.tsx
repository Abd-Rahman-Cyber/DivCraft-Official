import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Capture", path: "/capture" },
    { name: "Pricing", path: "/pricing" },
    { name: "Docs", path: "/docs" },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-8 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto">
          {/* Logo moved to hero section */}
        </div>

        <div className="hidden md:flex items-center gap-12 text-[11px] font-medium tracking-[0.2em] uppercase bg-white/50 backdrop-blur-md px-10 py-4 rounded-full border border-black/5 shadow-sm pointer-events-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `transition-all hover:opacity-100 ${
                  isActive ? "opacity-100 text-blue-600 font-bold" : "opacity-60 text-black"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-6 pointer-events-auto">
          <button 
            className="md:hidden text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 bg-white/95 backdrop-blur-xl z-[90] flex flex-col items-center justify-center gap-8 text-2xl font-display uppercase tracking-widest"
          >
            {navItems.map((item) => (
              <NavLink 
                key={item.name} 
                to={item.path} 
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}
              >
                {item.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main>{children}</main>

      {/* Minimal Footer */}
      <footer className="w-full bg-white py-12 px-6 border-t border-black/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-[11px] font-medium tracking-[0.2em] uppercase opacity-30">© 2026 DIVCRAFT AI PLATFORM</p>
           <div className="flex gap-8">
             <a href="https://instagram.com/i_rxhmxn_" target="_blank" rel="noopener noreferrer" className="text-[11px] font-medium tracking-[0.2em] uppercase opacity-30 hover:opacity-100 transition-opacity">Instagram</a>
             <a href="https://github.com/Abd-Rahman-Cyber" target="_blank" rel="noopener noreferrer" className="text-[11px] font-medium tracking-[0.2em] uppercase opacity-30 hover:opacity-100 transition-opacity">GitHub</a>
             <a href="https://discord.com/users/i_rahman_" target="_blank" rel="noopener noreferrer" className="text-[11px] font-medium tracking-[0.2em] uppercase opacity-30 hover:opacity-100 transition-opacity">Discord</a>
           </div>
        </div>
      </footer>
    </div>
  );
};
