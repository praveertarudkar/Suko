"use client";
import { useState } from "react";
import { ShoppingBag, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Home", "About", "Shop", "Blog", "Contact"];

  return (
    <nav className="sticky top-0 z-40 bg-[#F9F9F9]/80 backdrop-blur-md border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-[0.15em] text-[#111111]">
          VANGUARD
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="text-[13px] font-medium tracking-wide text-[#767676] hover:text-[#111111] transition-colors relative group py-2"
            >
              {link}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#111111] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2.5 hover:bg-black/5 rounded-full transition-colors">
            <ShoppingBag className="w-[19px] h-[19px]" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-[#111111] text-white text-[9px] font-bold flex items-center justify-center rounded-full">
              2
            </span>
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2.5 hover:bg-black/5 rounded-full transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-0 w-full bg-[#F9F9F9] border-b border-[#EAEAEA] px-6 py-8 flex flex-col gap-6 md:hidden z-50 shadow-sm"
          >
            {links.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-[#111111] flex items-center justify-between border-b border-[#EAEAEA] pb-3"
              >
                {link} <ArrowUpRight className="w-4 h-4 opacity-40" />
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
