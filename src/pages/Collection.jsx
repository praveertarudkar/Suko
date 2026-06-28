import React, { useMemo, useState } from "react";
import { useParams, NavLink, useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import { CATEGORIES, PRODUCTS } from "../data/products";
import Aurora from "../components/Aurora";

const Collection = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const gender = searchParams.get("gender");
  const [sort, setSort] = useState("featured");
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    let list = PRODUCTS;
    if (gender) {
      list = list.filter((p) => p.gender === gender);
    }
    if (category) {
      list = list.filter((p) => p.category === category);
    }
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [category, gender, sort]);

  // Split landing page if neither category nor gender is selected
  if (!category && !gender) {
    return (
      <div className="min-h-screen flex flex-col md:flex-row bg-[#0a0a0c]">
        {/* Men's Section */}
        <div 
          onClick={() => navigate('/collection?gender=male')}
          className="flex-1 relative group cursor-pointer overflow-hidden min-h-[50vh] md:min-h-screen border-b md:border-b-0 md:border-r border-white/10"
        >
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-700 z-10" />
          <img 
            src="/images/mens_corporate_wear.png" 
            alt="Men's Corporate Wear" 
            className="absolute inset-0 w-full h-full object-cover object-[center_15%] md:object-[center_20%] transform group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 text-center mt-12 md:mt-0">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-8xl font-display font-medium text-white mb-4 tracking-tighter"
            >
              Men's
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm md:text-base text-white/70 font-body uppercase tracking-[0.4em]"
            >
              Corporate Wear
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 border border-white/20 px-8 py-3 text-[11px] uppercase tracking-[0.2em] text-white backdrop-blur-md group-hover:bg-white group-hover:text-black transition-colors duration-300"
            >
              Explore
            </motion.div>
          </div>
        </div>

        {/* Women's Section */}
        <div 
          onClick={() => navigate('/collection?gender=female')}
          className="flex-1 relative group cursor-pointer overflow-hidden min-h-[50vh] md:min-h-screen"
        >
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-700 z-10" />
          <img 
            src="/images/womens_corporate_wear.png" 
            alt="Women's Corporate Wear" 
            className="absolute inset-0 w-full h-full object-cover object-[center_15%] md:object-[center_20%] transform group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-8xl font-display font-medium text-white mb-4 tracking-tighter"
            >
              Women's
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm md:text-base text-white/70 font-body uppercase tracking-[0.4em]"
            >
              Corporate Wear
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-10 border border-white/20 px-8 py-3 text-[11px] uppercase tracking-[0.2em] text-white backdrop-blur-md group-hover:bg-white group-hover:text-black transition-colors duration-300"
            >
              Explore
            </motion.div>
          </div>
        </div>
      </div>
    );
  }



  const activeCat = CATEGORIES.find((c) => c.slug === category);
  
  // Format the heading based on selected filters
  let heading = "Collection";
  if (activeCat) heading = activeCat.name;
  else if (gender === 'male') heading = "Men's Edit";
  else if (gender === 'female') heading = "Women's Edit";

  const getNavLinkTo = (slug) => {
    let base = slug ? `/collection/${slug}` : "/collection";
    if (gender) base += `?gender=${gender}`;
    return base;
  };

  return (
    <div data-testid="collection-page" className="grain pt-40 pb-32 relative min-h-screen">
      <div className="fixed inset-0 bg-[#0a0a0c]/50 z-0 pointer-events-none" />
      <div className="relative z-10 px-6 lg:px-16 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/45 font-body block mb-4">
            {activeCat ? `— ${activeCat.tagline}` : (gender ? `— ${gender}'s Corporate Wear` : "— The Complete Edit")}
          </span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-tighter font-medium">
            {heading}
          </h1>
        </motion.div>

        {/* Filter bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-white/5 mb-12">
          <nav className="flex flex-wrap gap-8">
            <NavLink
              to={gender ? `/collection?gender=${gender}` : "/collection"}
              end
              data-testid="filter-all"
              className={({ isActive }) =>
                `text-[11px] uppercase tracking-[0.3em] font-body ${!category ? "text-foreground" : "text-foreground/50 hover:text-foreground"}`
              }
            >
              All
            </NavLink>

            {CATEGORIES.map((c) => (
              <NavLink
                key={c.slug}
                to={getNavLinkTo(c.slug)}
                className={({ isActive }) =>
                  `text-[11px] uppercase tracking-[0.3em] font-body ${category === c.slug ? "text-foreground" : "text-foreground/50 hover:text-foreground"}`
                }
              >
                {c.name}
              </NavLink>
            ))}
          </nav>
          
          <div className="flex items-center gap-8">
            {/* Gender Toggle for quick switching */}
            <div className="hidden md:flex gap-4 items-center border-r border-white/10 pr-8">
              <button
                onClick={() => navigate(category ? `/collection/${category}?gender=female` : '/collection?gender=female')}
                className={`text-[10px] uppercase tracking-[0.2em] font-body transition-colors ${gender === 'female' ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
              >
                Women
              </button>
              <button
                onClick={() => navigate(category ? `/collection/${category}?gender=male` : '/collection?gender=male')}
                className={`text-[10px] uppercase tracking-[0.2em] font-body transition-colors ${gender === 'male' ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
              >
                Men
              </button>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/45 font-body">Sort</span>
              <select
                data-testid="sort-select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-transparent border border-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.2em] font-body text-foreground outline-none focus:border-foreground/50"
              >
                <option value="featured" className="bg-[#0f0f11] text-white">Featured</option>
                <option value="low" className="bg-[#0f0f11] text-white">Price · Low to High</option>
                <option value="high" className="bg-[#0f0f11] text-white">Price · High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {filtered.length > 0 && (
          <div className="mb-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14 lg:gap-x-8" data-testid="product-grid">
              {filtered.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-32 text-foreground/50 font-display text-2xl">No pieces in this edit yet.</div>
        )}
      </div>
    </div>
  );
};

export default Collection;
