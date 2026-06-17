"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function BrandStory() {
  return (
    <section id="about" className="bg-[#111111] text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-semibold">Since 2014</span>
            <div className="h-[1px] w-12 bg-neutral-600" />
          </div>
          <h2 className="text-4xl md:text-6xl font-normal tracking-tighter leading-[1.05]">
            Defining urban layouts with structured aesthetics.
          </h2>
          <p className="text-neutral-400 text-base md:text-lg font-light leading-relaxed max-w-xl">
            A decade ago, we set out to redefine the modern silhouette. Today, we merge high utility with clean design structural grids into resilient architectural pieces.
          </p>
          <div className="flex items-center gap-8 pt-4">
            <button className="text-[13px] font-medium tracking-widest uppercase flex items-center gap-2 text-white hover:text-neutral-300 transition-colors group">
              More about us <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 grid grid-cols-2 gap-4 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/5] bg-neutral-800 rounded-xl p-8 flex flex-col justify-between border border-neutral-700/50"
          >
            <span className="text-3xl font-light font-serif italic text-neutral-400">01 /</span>
            <div>
              <h4 className="text-sm font-semibold tracking-wide uppercase mb-1">Premium Fabrics</h4>
              <p className="text-xs text-neutral-400 font-light leading-normal">Long lasting custom tactile weights.</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/5] bg-neutral-900 rounded-xl p-8 flex flex-col justify-between border border-neutral-800"
          >
            <span className="text-3xl font-light font-serif italic text-neutral-400">02 /</span>
            <div>
              <h4 className="text-sm font-semibold tracking-wide uppercase mb-1">Minimal Lineage</h4>
              <p className="text-xs text-neutral-400 font-light leading-normal">Balanced geometric comfort profiles.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
