import React from "react";
import { Link, useLocation } from "react-router-dom";
import Aurora from "./Aurora";

const Footer = () => {
  const location = useLocation();
  // Check if we are on pages that shouldn't have top margin on the footer
  const isCollectionLanding = location.pathname === "/collection" && !location.search;
  const isInventory = location.pathname === "/inventory";
  const removeMargin = isCollectionLanding || isInventory;

  return (
    <footer data-testid="site-footer" className={`relative border-t border-white/5 bg-[#0a0a0c] overflow-hidden ${removeMargin ? '' : 'mt-32'}`}>
      
      {/* Aurora glow effect behind footer */}
      <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-screen" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)' }}>
        <Aurora colorStops={["#3b82f6", "#a5b4fc", "#93c5fd"]} amplitude={0.6} blend={0.8} speed={0.5} />
      </div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 py-16 md:py-24 flex flex-col lg:flex-row gap-16 lg:gap-10 justify-between">
        <div className="lg:w-2/5 max-w-md">
          <Link to="/" className="inline-block font-display font-medium text-4xl tracking-[0.35em] mb-6 md:mb-8 text-white hover:text-white/80 transition-colors">
            SUKO
          </Link>
          <p className="text-sm text-foreground/50 font-body leading-relaxed mb-8 md:mb-10">
            An atelier devoted to the modern executive. Hand-finished tailoring, considered fabrics, and quiet luxury for those who prefer the form to follow the silhouette.
          </p>
          <div className="flex gap-4 items-end w-full max-w-sm group">
            <input
              data-testid="newsletter-email-input"
              type="email"
              placeholder="Your email — for the private list"
              className="flex-1 bg-transparent border-b border-white/10 focus:border-white outline-none py-3 px-1 text-[13px] font-body placeholder:text-foreground/30 transition-colors duration-300 min-w-0"
            />
            <button data-testid="newsletter-subscribe-btn" className="text-[10px] uppercase tracking-[0.3em] font-body text-white/50 group-hover:text-white transition-colors duration-300 pb-3 border-b border-transparent group-hover:border-white shrink-0">
              Subscribe
            </button>
          </div>
        </div>

        <div className="lg:w-3/5 grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 lg:pl-10">
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white mb-6 md:mb-8 font-body">Atelier</h4>
            <ul className="space-y-3 md:space-y-4 text-[13px] text-foreground/50 font-body tracking-wide">
              <li><Link to="/about" className="hover:text-white transition-colors duration-300">Heritage</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors duration-300">Craftsmanship</Link></li>
              <li><Link to="/lookbook" className="hover:text-white transition-colors duration-300">Lookbook</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors duration-300">Private Styling</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white mb-6 md:mb-8 font-body">Shop</h4>
            <ul className="space-y-3 md:space-y-4 text-[13px] text-foreground/50 font-body tracking-wide">
              <li><Link to="/collection?category=shirts" className="hover:text-white transition-colors duration-300">Shirts</Link></li>
              <li><Link to="/collection?category=suits" className="hover:text-white transition-colors duration-300">Suits</Link></li>
              <li><Link to="/collection?category=blazers" className="hover:text-white transition-colors duration-300">Blazers</Link></li>
              <li><Link to="/collection?category=trousers" className="hover:text-white transition-colors duration-300">Trousers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white mb-6 md:mb-8 font-body">Client</h4>
            <ul className="space-y-3 md:space-y-4 text-[13px] text-foreground/50 font-body tracking-wide">
              <li><Link to="/contact" className="hover:text-white transition-colors duration-300">Concierge</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors duration-300">Fit Guide</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors duration-300">Delivery</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors duration-300">Returns</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/5 bg-[#050505]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-6 md:py-8 flex flex-col-reverse md:flex-row justify-between items-center gap-6 md:gap-4 text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-foreground/30 font-body text-center md:text-left">
          <span className="leading-relaxed">© SUKO Atelier MMXXVI. All rights reserved.</span>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <span className="hover:text-white/70 transition-colors cursor-pointer">Mumbai</span>
            <span className="hover:text-white/70 transition-colors cursor-pointer">Milan</span>
            <span className="hover:text-white/70 transition-colors cursor-pointer">London</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
