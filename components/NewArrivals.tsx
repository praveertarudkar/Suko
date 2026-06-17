"use client";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

interface Product {
  id: number;
  title: string;
  price: string;
  oldPrice: string;
  tag?: string;
  svgPreset: 'hoodie' | 'sweater' | 'jacket' | 'vest';
}

const products: Product[] = [
  { id: 1, title: "Heavyweight Oversized Hoodie", price: "$85.00", oldPrice: "$110.00", tag: "Best Seller", svgPreset: 'hoodie' },
  { id: 2, title: "Patterned Knit Sweater", price: "$45.00", oldPrice: "$90.00", svgPreset: 'sweater' },
  { id: 3, title: "Quilted Bomber Jacket", price: "$145.00", oldPrice: "$180.00", tag: "Limited", svgPreset: 'jacket' },
  { id: 4, title: "Hooded Puffer Vest", price: "$45.00", oldPrice: "$75.00", svgPreset: 'vest' },
];

function ProductVector({ type }: { type: string }) {
  return (
    <svg className="w-full h-full p-12 text-neutral-400 bg-neutral-100 group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="80" height="80" rx="12" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2 2"/>
      {type === 'hoodie' && <path d="M30 40 L50 25 L70 40 L65 85 L35 85 Z M40 40 L50 55 L60 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>}
      {type === 'sweater' && <path d="M25 35 L40 30 L60 30 L75 35 L70 80 L30 80 Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>}
      {type === 'jacket' && <path d="M30 30 H70 V80 H30 Z M50 30 V80 M30 45 H70" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>}
      {type === 'vest' && <path d="M35 30 L50 40 L65 30 L60 80 H40 Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>}
    </svg>
  );
}

export default function NewArrivals() {
  return (
    <section id="shop" className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
        <div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#767676] uppercase block mb-3">Shop New Collection</span>
          <h2 className="text-4xl md:text-5xl font-normal tracking-tight">Our signature best sellers</h2>
        </div>
        <button className="text-[13px] font-semibold tracking-wide border-b-2 border-[#111111] pb-1 hover:opacity-60 transition-opacity">
          View all 48 products
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
        {products.map((product, idx) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group cursor-pointer flex flex-col h-full"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100 mb-5 border border-black/5">
              {product.tag && (
                <span className="absolute top-4 left-4 z-10 bg-white text-[#111111] text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                  {product.tag}
                </span>
              )}
              <button className="absolute bottom-4 right-4 z-10 bg-[#111111] text-white p-3 rounded-full opacity-0 scale-70 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-lg hover:bg-neutral-800">
                <Plus className="w-4 h-4" />
              </button>
              <ProductVector type={product.svgPreset} />
            </div>

            <div className="flex justify-between items-start gap-4 mt-auto">
              <h3 className="text-[14px] font-medium text-[#111111] tracking-tight leading-snug group-hover:underline decoration-1">
                {product.title}
              </h3>
              <div className="flex flex-col items-end whitespace-nowrap">
                <span className="text-[14px] font-semibold text-[#111111]">{product.price}</span>
                <span className="text-[12px] text-[#767676] line-through font-light mt-0.5">{product.oldPrice}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
