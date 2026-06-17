import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";
import PageWrapper from "../components/PageWrapper";

const Wishlist = () => {
  const { items } = useWishlist();

  return (
    <PageWrapper>
      <div className="grain pt-32 pb-32 min-h-screen">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/45 font-body mb-4">
              Your Curated Collection
            </span>
            <h1 className="font-display text-4xl lg:text-5xl tracking-tight">Wishlist</h1>
          </div>

          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="font-body text-foreground/60 mb-8 max-w-md">
                Your wishlist is empty. Begin curating your personal collection of SOKO tailoring.
              </p>
              <Link
                to="/collection"
                className="bg-foreground text-background text-[11px] uppercase tracking-[0.3em] font-body px-8 py-4 hover:bg-foreground/90 transition-all"
              >
                Explore Collection
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
              {items.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          )}

        </div>
      </div>
    </PageWrapper>
  );
};

export default Wishlist;
