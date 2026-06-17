"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Review {
  id: number;
  quote: string;
  author: string;
  role: string;
  rating: string;
}

const reviews: Review[] = [
  { id: 1, quote: "The premium utility of the structured items is genuinely unmatched. Fabrics feel incredibly premium, heavy, and crisp. Tailored fit is exceptional for formal office environments.", author: "James Carter", role: "Creative Director", rating: "4.9/5" },
  { id: 2, quote: "Minimal aesthetic pairing perfectly structured silhouettes with actual daily use durability. I have washed my hoodie 15 times and the custom line retains structural integrity flawlessly.", author: "Elena Rostova", role: "Product Designer", rating: "5.0/5" }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="bg-neutral-100 py-24 px-6 border-y border-[#EAEAEA]">
      <div className="max-w-4xl mx-auto text-center space-y-8 relative">
        <div className="flex justify-center gap-1 text-amber-500">
          {Array(5).fill(<Star className="w-4 h-4 fill-current" />)}
        </div>

        <div className="min-h-[160px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p 
              key={index}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.4 }}
              className="text-xl md:text-2xl font-light tracking-tight text-[#111111] font-serif italic leading-relaxed"
            >
              "{reviews[index].quote}"
            </motion.p>
          </AnimatePresence>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase text-[#111111]">{reviews[index].author}</h4>
          <p className="text-xs text-[#767676] mt-0.5">{reviews[index].role} — {reviews[index].rating}</p>
        </div>

        <div className="flex justify-center gap-4 pt-4">
          <button onClick={prev} className="p-3 border border-neutral-300 rounded-full hover:bg-white transition-colors bg-neutral-50">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button onClick={next} className="p-3 border border-neutral-300 rounded-full hover:bg-white transition-colors bg-neutral-50">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
