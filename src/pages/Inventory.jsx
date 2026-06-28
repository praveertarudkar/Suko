import React from 'react';
import { motion } from 'framer-motion';

const GALLERY_IMAGES = [
  "/images/gallery_fabric_1782661588386.png",
  "/images/gallery_folded_shirts_1782661599331.png",
  "/images/womens_blazer_cover_1782656530913.png",
  "/images/gallery_hangers_1782661609614.png",
  "/images/gallery_lapel_1782661621695.png",
  "/images/womens_shirt_cover_1782656518361.png",
  "/images/suits_cover_1782652781025.png",
  "/images/trousers_cover_1782652833041.png",
  "/images/blazers_cover_1782652819450.png"
];

const Inventory = () => {
  return (
    <div className="bg-[#0a0a0c] text-white">
      {/* Header removed as requested */}
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="w-full relative"
      >
        <img 
          src="/images/inventory_cream_black_1782660905375.png" 
          alt="SUKO Inventory" 
          className="w-full h-auto object-cover block"
        />
      </motion.div>

      {/* Editorial Masonry Grid */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 py-32">
        <div className="mb-20 text-center">
             <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 font-body mb-4 block">— Curated Archive</span>
             <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white">The Lookbook Gallery</h2>
        </div>

        {/* Masonry layout using CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 lg:gap-8 space-y-6 lg:space-y-8">
          {GALLERY_IMAGES.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: (idx % 3) * 0.15 }}
              className="break-inside-avoid relative group overflow-hidden bg-[#111113] rounded-sm"
            >
              <img 
                src={src} 
                alt={`Gallery detail ${idx + 1}`} 
                loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] opacity-90 hover:opacity-100" 
              />
              
              {/* Subtle hover overlay for luxury feel */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Inventory;
