"use client";
import { motion } from "framer-motion";

export default function CollectionMarquee() {
  const tags = ["URBAN", "LATEST", "PREMIUM", "ARCTIC", "CASUAL", "ICONIC", "UNIQUE", "NEW ARRIVALS"];
  return (
    <div className="border-y border-[#EAEAEA] bg-white py-6 overflow-hidden relative">
      <motion.div 
        className="flex whitespace-nowrap gap-16 text-3xl md:text-5xl font-light tracking-widest text-[#111111]/10"
        animate={{ x: [-1200, 0] }}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
      >
        {Array(4).fill(tags).flat().map((tag, idx) => (
          <span key={idx} className="flex items-center gap-16 font-sans">
            {tag} <span className="text-sm opacity-30">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
