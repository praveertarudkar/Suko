import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const NewArrivalsSlider = ({ products }) => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current && sliderRef.current) {
        setSliderWidth(sliderRef.current.scrollWidth - containerRef.current.offsetWidth);
      }
    };
    
    // Slight delay to ensure images/layout are rendered
    setTimeout(updateWidth, 100);
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [products]);

  return (
    <section className="py-24 md:py-32 overflow-hidden bg-black text-white cursor-grab active:cursor-grabbing border-t border-white/5">
      <div className="px-6 lg:px-16 max-w-[1600px] mx-auto mb-12 flex items-end justify-between">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 font-body block mb-4">— Season AW26</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl tracking-tight">New Arrivals</h2>
        </div>
        <Link to="/collection" className="hidden md:flex items-center gap-3 text-xs uppercase tracking-[0.3em] font-body text-white/70 hover:text-white transition-colors group">
          Explore All 
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div ref={containerRef} className="px-6 lg:px-16 max-w-[1600px] mx-auto">
        <motion.div
          ref={sliderRef}
          drag="x"
          dragConstraints={{ right: 0, left: -sliderWidth }}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
          className="flex gap-6 md:gap-10 w-max"
        >
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              className="group relative w-[75vw] sm:w-[45vw] lg:w-[28vw] aspect-[3/4] flex-shrink-0"
            >
              <Link to={`/product/${p.id}`} className="block w-full h-full relative overflow-hidden bg-[#111] rounded-sm border border-white/5 hover:border-white/20 transition-colors duration-500">
                <motion.img
                  src={p.images[0]}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Info block */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/50 mb-3 block font-body">
                    {p.category.replace("-", " ")}
                  </span>
                  <div className="flex justify-between items-end gap-4">
                    <h3 className="font-display text-2xl md:text-3xl tracking-tight text-white/90 group-hover:text-white transition-colors truncate">
                      {p.name}
                    </h3>
                    <span className="font-body text-sm text-white/70 whitespace-nowrap">${p.price}</span>
                  </div>
                </div>

                {/* Top badge */}
                {p.tags && p.tags[0] && (
                  <div className="absolute top-6 left-6">
                    <span className="text-[9px] uppercase tracking-[0.2em] font-body bg-black/40 backdrop-blur-md text-white border border-white/10 px-4 py-2 rounded-full shadow-lg">
                      {p.tags[0]}
                    </span>
                  </div>
                )}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Mobile view all link */}
      <div className="px-6 mt-12 md:hidden">
        <Link to="/collection" className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-body text-white/70 hover:text-white transition-colors">
          Explore All <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </section>
  );
};

export default NewArrivalsSlider;
