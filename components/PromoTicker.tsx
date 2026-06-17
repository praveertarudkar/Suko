"use client";
import { motion } from "framer-motion";

export default function PromoTicker() {
  const items = Array(10).fill("BLACK FRIDAY SALE: 50% OFF SITEWIDE");
  return (
    <div className="bg-[#111111] text-white overflow-hidden py-2.5 border-b border-white/10 relative z-50">
      <motion.div 
        className="flex whitespace-nowrap gap-20 text-[11px] font-medium tracking-[0.2em]"
        animate={{ x: [0, -1000] }}
        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
      >
        {items.map((text, i) => (
          <span key={i} className="flex items-center gap-2">
            {text} <span className="opacity-40">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
