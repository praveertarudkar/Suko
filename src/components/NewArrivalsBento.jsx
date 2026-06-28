import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const BentoCard = ({ product, className }) => {
  if (!product) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-3xl bg-[#111] border border-white/10 hover:border-white/30 transition-colors duration-500 ${className}`}
    >
      <Link to={`/product/${product.id}`} className="block w-full h-full relative">
        <img
          src={product.images[0]}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
        
        {product.tags && product.tags[0] && (
          <div className="absolute top-6 left-6 z-10">
            <span className="text-[10px] uppercase tracking-[0.2em] font-body bg-black/40 backdrop-blur-md text-white border border-white/20 px-4 py-2 rounded-full shadow-lg">
              {product.tags[0]}
            </span>
          </div>
        )}

        <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 z-10">
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 flex flex-col gap-3 md:gap-4 transform transition-transform duration-500 group-hover:-translate-y-2">
            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/50 mb-2 font-body">
                {product.category.replace("-", " ")}
              </p>
              <h3 className="font-display text-xl md:text-2xl tracking-tight text-white/90 group-hover:text-white transition-colors truncate">
                {product.name}
              </h3>
            </div>
            
            <div className="flex items-center justify-between mt-1 md:mt-2">
              <span className="font-body text-sm text-white/70">${product.price}</span>
              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                <ArrowUpRight className="w-5 h-5" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const NewArrivalsBento = ({ products }) => {
  const displayProducts = products.slice(0, 4);

  return (
    <section className="py-24 md:py-32 bg-black px-6 lg:px-16 max-w-[1600px] mx-auto border-t border-white/5">
      <div className="flex items-end justify-between mb-12">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-body block mb-3">— Season AW26</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl tracking-tight text-white">New Arrivals</h2>
        </div>
        <Link to="/collection" className="hidden md:inline-flex luxe-link text-[11px] uppercase tracking-[0.3em] font-body text-white/70 hover:text-white">
          Shop All →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[80vh]">
        <BentoCard product={displayProducts[0]} className="h-[60vh] md:h-auto md:col-span-1 md:row-span-2" />
        <BentoCard product={displayProducts[1]} className="h-[45vh] md:h-auto md:col-span-1 md:row-span-1" />
        <BentoCard product={displayProducts[2]} className="h-[45vh] md:h-auto md:col-span-1 md:row-span-1" />
        <BentoCard product={displayProducts[3]} className="h-[45vh] md:h-auto md:col-span-2 md:row-span-1" />
      </div>

      <div className="mt-12 text-center md:hidden">
        <Link to="/collection" className="luxe-link text-[11px] uppercase tracking-[0.3em] font-body text-white/70 hover:text-white">
          Shop All →
        </Link>
      </div>
    </section>
  );
};

export default NewArrivalsBento;
