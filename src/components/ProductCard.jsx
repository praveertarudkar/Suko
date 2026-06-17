import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { formatINR } from "../data/products";

const ProductCard = ({ product, index = 0 }) => {
  const [hover, setHover] = useState(false);
  const primary = product.images[0];
  const secondary = product.images[1] || product.images[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: (index % 4) * 0.08 }}
      className="product-card group"
      data-testid={`product-card-${product.id}`}
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div
          className="relative overflow-hidden bg-[#15151a] aspect-[3/4]"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <img
            src={primary}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover product-img transition-opacity duration-700 ${hover ? "opacity-0" : "opacity-100"}`}
          />
          <img
            src={secondary}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 w-full h-full object-cover product-img transition-opacity duration-700 ${hover ? "opacity-100" : "opacity-0"}`}
          />
          {product.badge && (
            <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.25em] font-body bg-background/70 backdrop-blur-md px-3 py-1.5 text-foreground/90">
              {product.badge}
            </span>
          )}
          <div className="absolute inset-x-0 bottom-0 p-5 flex justify-between items-end opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <span className="text-[10px] uppercase tracking-[0.3em] font-body bg-background/80 backdrop-blur-md px-3 py-1.5">
              View
            </span>
          </div>
        </div>
        <div className="pt-5 flex justify-between items-baseline gap-4">
          <div>
            <h3 className="font-display text-lg leading-tight">{product.name}</h3>
            <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/45 mt-1.5 font-body">
              {product.fabric}
            </p>
          </div>
          <span className="font-body text-sm whitespace-nowrap">{formatINR(product.price)}</span>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
