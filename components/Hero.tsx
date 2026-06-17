"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-120px)] flex flex-col justify-between px-6 py-12 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6 lg:mt-12">
        <div className="lg:col-span-7 space-y-8 z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tighter leading-[0.95]"
          >
            Premium wear for <br />
            <span className="font-serif italic text-neutral-400">modern living.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-base md:text-lg text-[#767676] max-w-md font-light leading-relaxed"
          >
            Discover our new range of soft clothes made for your daily look and your best days with the finest fabrics.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <button className="bg-[#111111] text-white px-8 py-4 text-[13px] font-medium tracking-wide flex items-center gap-3 hover:bg-neutral-800 transition-all rounded-full group">
              See all collections 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-[#EAEAEA] bg-white text-[#111111] px-8 py-4 text-[13px] font-medium tracking-wide rounded-full hover:bg-neutral-50 transition-colors">
              Contact us
            </button>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative w-full aspect-[4/5] md:aspect-[1/1] lg:aspect-[4/5] bg-neutral-200 rounded-2xl overflow-hidden mt-8 lg:mt-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full relative"
          >
            {/* Embedded custom high-aesthetic SVG illustration to fully abstract copyrighted photography assets */}
            <svg className="w-full h-full bg-[#E5E5E5]" viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.35">
                <circle cx="200" cy="220" r="140" stroke="#111111" strokeWidth="1" strokeDasharray="4 4"/>
                <path d="M100 450 L200 120 L300 450" stroke="#111111" strokeWidth="1.5"/>
                <line x1="40" y1="250" x2="360" y2="250" stroke="#111111" strokeWidth="0.5"/>
              </g>
              <rect x="140" y="160" width="120" height="180" rx="4" fill="#FFFFFF" fillOpacity="0.8" className="shadow-sm"/>
              <line x1="160" y1="210" x2="240" y2="210" stroke="#111111" strokeWidth="2"/>
              <line x1="160" y1="230" x2="210" y2="230" stroke="#111111" strokeWidth="1.5"/>
            </svg>
            <div className="absolute bottom-6 left-6 right-6 bg-white/70 backdrop-blur-md p-5 rounded-xl border border-white/20 flex justify-between items-center">
              <div>
                <p className="text-xs tracking-widest text-[#767676] uppercase">Featured Core</p>
                <p className="text-sm font-semibold text-[#111111]">Oversized Cotton Knit</p>
              </div>
              <span className="text-sm font-medium">$95.00</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
