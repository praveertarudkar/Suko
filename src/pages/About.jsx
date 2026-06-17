import React from "react";
import { motion } from "framer-motion";
import { LOOKBOOK } from "../data/products";
import Aurora from "../components/Aurora";

const About = () => {
  return (
    <div data-testid="about-page" className="grain pt-40 pb-32 relative min-h-screen">

      <div className="fixed inset-0 bg-[#0a0a0c]/50 z-0 pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-24 max-w-4xl"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/45 font-body block mb-6">— The Atelier</span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-tighter font-medium leading-[0.95]">
            Quiet luxury for those who let the <em className="italic font-normal text-foreground/55">work speak.</em>
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-12 gap-12 mb-32"
        >
          <div className="lg:col-span-7 aspect-[4/5] overflow-hidden bg-[#15151a]">
            <img src={LOOKBOOK[1].image} alt="The atelier" className="w-full h-full object-cover" />
          </div>
          <div className="lg:col-span-5 lg:pt-12">
            <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/45 font-body block mb-4">— Heritage</span>
            <h2 className="font-display text-3xl lg:text-4xl tracking-tight mb-6">A house, not a brand.</h2>
            <p className="text-foreground/75 leading-relaxed font-body text-base lg:text-lg">
              SUKO was founded with a single conviction — that the modern executive deserves tailoring as exacting as his ambition. We work between Mumbai and Milan, drawing on three generations of craftsmen who can still hand-pad a lapel in under forty minutes.
            </p>
            <p className="text-foreground/65 font-body leading-relaxed">
              Each garment is cut by a single tailor and finished by a single hand. We do not produce volume. We produce wardrobe.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-12 gap-12 mb-32 items-center"
        >
          <div className="lg:col-span-5 lg:order-1 order-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/45 font-body block mb-4">— Craftsmanship</span>
            <h2 className="font-display text-3xl lg:text-4xl tracking-tight mb-6">Forty-eight hours, twelve hands.</h2>
            <p className="text-foreground/75 leading-relaxed font-body text-base lg:text-lg">
              A SUKO two-piece passes through twelve craftspeople over forty-eight hours. The canvas is sewn by hand. The lapels are pressed three times. Buttonholes are cut, then bound — never milled.
            </p>
            <p className="text-foreground/65 font-body leading-relaxed">
              We source our cloth from the oldest mills in Italy and the Scottish borders — Loro Piana, Holland &amp; Sherry, Vitale Barberis Canonico — and refuse blends that compromise the hand.
            </p>
          </div>
          <div className="lg:col-span-7 lg:order-2 order-1 aspect-[4/5] overflow-hidden bg-[#15151a]">
            <img src={LOOKBOOK[2].image} alt="Craftsmanship" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center py-20 border-t border-white/5"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/45 font-body block mb-6">— Three Cities</span>
          <div className="font-display text-3xl lg:text-5xl tracking-tighter">
            Mumbai · Milan · London
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
