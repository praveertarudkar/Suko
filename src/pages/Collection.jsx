import React, { useMemo, useState } from "react";
import { useParams, NavLink, useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import { CATEGORIES, PRODUCTS } from "../data/products";
import Aurora from "../components/Aurora";

const Collection = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const genderFilter = searchParams.get("gender");
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    let list = category ? PRODUCTS.filter((p) => p.category === category) : PRODUCTS;
    if (genderFilter) list = list.filter((p) => p.gender === genderFilter);
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [category, sort, genderFilter]);

  const activeCat = CATEGORIES.find((c) => c.slug === category);
  const womenProducts = filtered.filter(p => p.gender === "female");
  const menProducts = filtered.filter(p => p.gender === "male");

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
            {activeCat ? `— ${activeCat.tagline}` : "— The Complete Edit"}
          </span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-tighter font-medium">
            {activeCat ? activeCat.name : "Collection"}
          </h1>
      </motion.div>

      {/* Filter bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-white/5 mb-12">
        <nav className="flex flex-wrap gap-8">
          <NavLink
            to="/collection"
            end
            data-testid="filter-all"
            className={({ isActive }) =>
              `text-[11px] uppercase tracking-[0.3em] font-body ${isActive && !genderFilter ? "text-foreground" : "text-foreground/50 hover:text-foreground"}`
            }
          >
            All
          </NavLink>

          {/* Womens Wear Dropdown */}
          <div className="relative group">
            <Link
              to="/collection?gender=female"
              className={`text-[11px] uppercase tracking-[0.3em] font-body pb-2 block ${genderFilter === 'female' ? "text-foreground" : "text-foreground/50 group-hover:text-foreground"}`}
            >
              Womens Wear
            </Link>
            <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50">
              <div className="bg-[#0f0f11] border border-white/10 p-4 flex flex-col gap-4 min-w-[200px] shadow-2xl">
                {CATEGORIES.map((c) => (
                  <Link
                    key={c.slug}
                    to={`/collection/${c.slug}?gender=female`}
                    className={`text-[10px] uppercase tracking-[0.2em] font-body ${category === c.slug && genderFilter === 'female' ? "text-foreground" : "text-foreground/50 hover:text-foreground transition-colors"}`}
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mens Wear Dropdown */}
          <div className="relative group">
            <Link
              to="/collection?gender=male"
              className={`text-[11px] uppercase tracking-[0.3em] font-body pb-2 block ${genderFilter === 'male' ? "text-foreground" : "text-foreground/50 group-hover:text-foreground"}`}
            >
              Mens Wear
            </Link>
            <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50">
              <div className="bg-[#0f0f11] border border-white/10 p-4 flex flex-col gap-4 min-w-[200px] shadow-2xl">
                {CATEGORIES.map((c) => (
                  <Link
                    key={c.slug}
                    to={`/collection/${c.slug}?gender=male`}
                    className={`text-[10px] uppercase tracking-[0.2em] font-body ${category === c.slug && genderFilter === 'male' ? "text-foreground" : "text-foreground/50 hover:text-foreground transition-colors"}`}
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
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

      {womenProducts.length > 0 && (
        <div className="mb-20">
          <h2 className="font-display text-3xl mb-8 border-b border-white/10 pb-4">Womenswear</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14 lg:gap-x-8" data-testid="product-grid-women">
            {womenProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      )}

      {menProducts.length > 0 && (
        <div className="mb-20">
          <h2 className="font-display text-3xl mb-8 border-b border-white/10 pb-4">Menswear</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14 lg:gap-x-8" data-testid="product-grid-men">
            {menProducts.map((p, i) => (
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
