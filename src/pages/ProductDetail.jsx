import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Minus, Plus, Heart } from "lucide-react";
import { toast } from "sonner";
import { getProductBySlug, SIZES, formatINR, getProductsByCategory } from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  
  const [activeImage, setActiveImage] = useState(0);
  const [size, setSize] = useState("");
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="pt-40 pb-32 px-6 text-center">
        <h1 className="font-display text-4xl">Piece not found</h1>
        <Link to="/collection" className="mt-8 luxe-link text-[11px] uppercase tracking-[0.3em] font-body">
          Return to Collection
        </Link>
      </div>
    );
  }

  const related = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const handleAdd = () => {
    if (!size) {
      toast.error("Please select a size");
      return;
    }
    addItem(product, size, qty);
  };

  return (
    <div className="grain pt-32 pb-32" data-testid="product-detail-page">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-foreground/45 font-body mb-8">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to={`/collection/${product.category}`} className="hover:text-foreground">{product.category}</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-32">
          {/* Gallery */}
          <div className="lg:col-span-7 flex flex-col-reverse lg:flex-row gap-4 lg:gap-6">
            <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  data-testid={`thumb-${i}`}
                  onClick={() => setActiveImage(i)}
                  className={`relative w-20 aspect-[3/4] shrink-0 bg-[#15151a] overflow-hidden transition-all ${activeImage === i ? "ring-1 ring-foreground opacity-100" : "opacity-50 hover:opacity-100"}`}
                >
                  <img src={img} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={activeImage}
              transition={{ duration: 0.5 }}
              className="flex-1 aspect-[3/4] bg-[#15151a] overflow-hidden"
            >
              <img src={product.images[activeImage]} alt={product.name} className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/45 font-body block mb-4">— {product.fabric}</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tighter mb-4">{product.name}</h1>
            <p className="font-body text-xl mb-8">{formatINR(product.price)}</p>
            
            <p className="text-foreground/65 font-body leading-relaxed mb-10">
              {product.description}
            </p>

            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] uppercase tracking-[0.3em] font-body text-foreground/80">Select Size</span>
                <button className="text-[10px] uppercase tracking-[0.2em] font-body text-foreground/40 hover:text-foreground">Size Guide</button>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {SIZES.map(s => (
                  <button
                    key={s}
                    data-testid={`size-${s}`}
                    onClick={() => setSize(s)}
                    className={`py-3 text-sm font-body border transition-all ${size === s ? "border-foreground bg-foreground text-background" : "border-white/10 hover:border-white/30"}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <div className="flex items-center border border-white/10 px-4 py-3 shrink-0">
                <button
                  data-testid="qty-decrease"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="text-foreground/60 hover:text-foreground"
                >
                  <Minus size={14} strokeWidth={1.25} />
                </button>
                <span className="w-12 text-center text-sm font-body">{qty}</span>
                <button
                  data-testid="qty-increase"
                  onClick={() => setQty(qty + 1)}
                  className="text-foreground/60 hover:text-foreground"
                >
                  <Plus size={14} strokeWidth={1.25} />
                </button>
              </div>
              <button
                data-testid="add-to-cart-btn"
                onClick={handleAdd}
                className="flex-1 bg-foreground text-background text-[11px] uppercase tracking-[0.3em] font-body hover:bg-foreground/90 transition-all"
              >
                Add to Bag
              </button>
              <button
                data-testid="wishlist-btn"
                className="w-14 shrink-0 flex items-center justify-center border border-white/10 hover:border-white/30 transition-colors"
                onClick={() => toggleWishlist(product)}
              >
                <Heart 
                  size={16} 
                  strokeWidth={1.25} 
                  className={isInWishlist(product.id) ? "fill-white text-white" : "text-foreground/80"} 
                />
              </button>
            </div>

            <div className="space-y-4 pt-8 border-t border-white/5 text-sm font-body">
              <div className="flex justify-between">
                <span className="text-foreground/50">Delivery</span>
                <span>Complimentary worldwide</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/50">Returns</span>
                <span>14 days complimentary</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div>
            <h2 className="font-display text-3xl tracking-tight mb-10">Pair with</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14 lg:gap-x-8">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProductDetail;
