import React from "react";
import { motion } from "framer-motion";
import { LOOKBOOK } from "../data/products";

const Lookbook = () => {
  return (
    <div data-testid="lookbook-page" className="grain pt-40 pb-32">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/45 font-body block mb-4">— Editorial · AW MMXXVI</span>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-[8rem] tracking-tighter font-medium leading-[0.9]">
            The <em className="italic font-normal text-foreground/60">Lookbook.</em>
          </h1>
        </motion.div>

        <div className="space-y-32">
          {LOOKBOOK.map((look, i) => (
            <motion.article
              key={look.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              data-testid={`lookbook-${look.id}`}
              className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
            >
              <div className="lg:col-span-8 [direction:ltr]">
                <div className="aspect-[16/10] overflow-hidden bg-[#15151a]">
                  <img src={look.image} alt={look.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2000ms]" />
                </div>
              </div>
              <div className="lg:col-span-4 [direction:ltr]">
                <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/45 font-body block mb-4">— {look.season}</span>
                <h2 className="font-display text-3xl lg:text-5xl tracking-tighter font-medium leading-tight">{look.title}</h2>
                <p className="mt-6 text-foreground/55 font-body leading-relaxed max-w-sm">
                  A study in restraint. Shot in available light, in a city that does not sleep. Every garment hand-pressed before the lens opened.
                </p>
                <button className="mt-8 luxe-link text-[11px] uppercase tracking-[0.3em] font-body text-foreground/80 hover:text-foreground">
                  Shop the Chapter →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lookbook;
