import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const CarouselItem = ({ p, i, smoothProgress, length, isActive, setActiveIndex }) => {
  const distance = useTransform(smoothProgress, (val) => {
    let d = i - val;
    d = ((d % length) + length) % length;
    const half = Math.floor(length / 2);
    if (d > half) d -= length;
    return d;
  });

  const scale = useTransform(distance, (d) => Math.max(0, 1 - Math.abs(d) * 0.2));
  const xOffset = useTransform(distance, (d) => d * (window.innerWidth < 768 ? 120 : 250));
  const zIndex = useTransform(distance, (d) => Math.round(10 - Math.abs(d)));
  const rotateY = useTransform(distance, (d) => d * -15);
  const opacity = useTransform(distance, (d) => {
    if (Math.abs(d) > 2.5) return 0;
    return 1 - Math.abs(d) * 0.3;
  });
  const pointerEvents = useTransform(distance, (d) => Math.abs(d) <= 0.5 ? 'auto' : 'none');

  return (
    <motion.div
      onClick={() => setActiveIndex(i)}
      style={{
        x: xOffset,
        scale: scale,
        zIndex: zIndex,
        rotateY: rotateY,
        opacity: opacity,
        pointerEvents: pointerEvents,
      }}
      className={`absolute w-[65vw] sm:w-[40vw] lg:w-[25vw] aspect-[3/4] origin-center ${isActive ? 'cursor-default' : 'cursor-pointer'}`}
    >
      <div className={`w-full h-full relative overflow-hidden rounded-2xl md:rounded-3xl border ${isActive ? 'border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.1)]' : 'border-white/5 shadow-2xl'} transition-all duration-500 bg-[#111]`}>
        <img
          src={p.images[0]}
          alt={p.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-80' : 'opacity-100 bg-black/40'}`} />

        <AnimatePresence>
          {isActive && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.2 }}
              className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end"
            >
              <span className="text-[9px] uppercase tracking-[0.3em] text-white/50 mb-3 block font-body">
                {p.category.replace("-", " ")}
              </span>
              <h3 className="font-display text-2xl md:text-4xl tracking-tight text-white mb-2">
                {p.name}
              </h3>
              <div className="flex justify-between items-center mt-2">
                <span className="font-body text-sm md:text-base text-white/70">${p.price}</span>
                <Link 
                  to={`/product/${p.id}`}
                  className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-black hover:text-white border border-transparent hover:border-white transition-all duration-300"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {isActive && p.tags && p.tags[0] && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-6 left-6"
          >
            <span className="text-[9px] uppercase tracking-[0.2em] font-body bg-white/10 backdrop-blur-md text-white border border-white/20 px-4 py-2 rounded-full">
              {p.tags[0]}
            </span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const NewArrivals3DCarousel = ({ products }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const progress = useMotionValue(0);
  const smoothProgress = useSpring(progress, { stiffness: 70, damping: 20, mass: 0.8 });

  const handleSetActiveIndex = (index) => {
    setActiveIndex(index);
    progress.set(index);
  };

  const updateProgressFromX = (clientX) => {
    if (!products || products.length === 0) return;
    const percentage = clientX / window.innerWidth;
    const floatIndex = percentage * (products.length - 1);
    
    progress.set(floatIndex);
    
    const index = Math.round(floatIndex);
    const safeIndex = Math.max(0, Math.min(index, products.length - 1));
    if (safeIndex !== activeIndex) {
      setActiveIndex(safeIndex);
    }
  };

  const handleMouseMove = (e) => {
    updateProgressFromX(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches.length > 0) {
      updateProgressFromX(e.touches[0].clientX);
    }
  };

  return (
    <section 
      className="pt-8 pb-8 md:pt-12 md:pb-12 overflow-hidden bg-[#050505] text-white relative border-t border-white/5 overscroll-x-none touch-pan-y select-none"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <div className="px-6 lg:px-16 max-w-[1600px] mx-auto mb-16 flex items-end justify-between relative z-20">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 font-body block mb-4">— Season AW26</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl tracking-tight">New Arrivals</h2>
        </div>
        <Link to="/collection" className="hidden md:flex items-center gap-3 text-xs uppercase tracking-[0.3em] font-body text-white/70 hover:text-white transition-colors group">
          Explore All 
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <motion.div 
        className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center perspective-[1200px] cursor-ew-resize overflow-hidden touch-pan-y overscroll-x-none"
      >
        {products.map((p, i) => (
          <CarouselItem
            key={p.id}
            p={p}
            i={i}
            smoothProgress={smoothProgress}
            length={products.length}
            isActive={i === activeIndex}
            setActiveIndex={handleSetActiveIndex}
          />
        ))}
      </motion.div>
      
      {/* Mobile view all link */}
      <div className="px-6 mt-20 md:hidden text-center">
        <Link to="/collection" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-body text-white/70 hover:text-white transition-colors">
          Explore All <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </section>
  );
};

export default NewArrivals3DCarousel;
