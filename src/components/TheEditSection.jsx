import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "../data/products";

const CUSTOM_COVERS = {
  suits: "/images/suits_cover_1782652781025.png", // men
  shirts: "/images/womens_shirt_cover_1782656518361.png", // women
  blazers: "/images/womens_blazer_cover_1782656530913.png", // women
  trousers: "/images/trousers_cover_1782652833041.png" // men
};

const TheEditSection = () => {
  const categoriesWithImages = CATEGORIES.map((cat) => {
    return {
      ...cat,
      image: CUSTOM_COVERS[cat.slug] || "",
    };
  });

  return (
    <section className="bg-[#050505] pt-32 pb-8">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
        <div>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 font-body mb-4 block">
            The Edit
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl tracking-tight text-white">
            Curated For You
          </h2>
        </div>
        <Link 
          to="/collection" 
          className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-body text-white/70 hover:text-white pb-1 border-b border-transparent hover:border-white transition-all"
        >
          View All Collections <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {categoriesWithImages.map((cat, i) => (
            <Link
              key={i}
              to={`/collection/${cat.slug}`}
              className="group block relative aspect-[3/4] overflow-hidden rounded-lg bg-[#111113] border border-white/5"
            >
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] tracking-[0.3em] font-body uppercase text-white/90 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    0{i + 1}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <ArrowUpRight size={16} strokeWidth={2} />
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-3xl md:text-4xl lg:text-3xl xl:text-4xl uppercase tracking-tighter text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {cat.name}
                  </h3>
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/50 font-body opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                    {cat.tagline}
                  </p>
                </div>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TheEditSection;
