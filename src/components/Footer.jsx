import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer data-testid="site-footer" className="border-t border-white/5 bg-[#0a0a0c]/40 backdrop-blur-md mt-32">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
        <div className="col-span-2 lg:col-span-2 max-w-md">
          <div className="font-display text-3xl tracking-[0.35em] mb-6">SUKO</div>
          <p className="text-sm text-foreground/55 font-body leading-relaxed">
            An atelier devoted to the modern executive. Hand-finished tailoring, considered fabrics, and quiet luxury for those who prefer the form to follow the man.
          </p>
          <div className="mt-8 flex gap-4">
            <input
              data-testid="newsletter-email-input"
              type="email"
              placeholder="Your email — for the private list"
              className="flex-1 bg-transparent border-b border-white/15 focus:border-foreground outline-none py-3 px-1 text-sm font-body placeholder:text-foreground/35"
            />
            <button data-testid="newsletter-subscribe-btn" className="text-[10px] uppercase tracking-[0.3em] font-body hover:text-foreground/70 transition-colors">
              Subscribe →
            </button>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 mb-5 font-body">Atelier</h4>
          <ul className="space-y-3 text-sm text-foreground/70 font-body">
            <li><Link to="/about" className="hover:text-foreground transition-colors">Heritage</Link></li>
            <li><Link to="/about" className="hover:text-foreground transition-colors">Craftsmanship</Link></li>
            <li><Link to="/lookbook" className="hover:text-foreground transition-colors">Lookbook</Link></li>
            <li><Link to="/contact" className="hover:text-foreground transition-colors">Private Styling</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 mb-5 font-body">Shop</h4>
          <ul className="space-y-3 text-sm text-foreground/70 font-body">
            <li><Link to="/collection/shirts" className="hover:text-foreground transition-colors">Shirts</Link></li>
            <li><Link to="/collection/suits" className="hover:text-foreground transition-colors">Suits</Link></li>
            <li><Link to="/collection/blazers" className="hover:text-foreground transition-colors">Blazers</Link></li>
            <li><Link to="/collection/trousers" className="hover:text-foreground transition-colors">Trousers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 mb-5 font-body">Client</h4>
          <ul className="space-y-3 text-sm text-foreground/70 font-body">
            <li><Link to="/contact" className="hover:text-foreground transition-colors">Concierge</Link></li>
            <li><Link to="/contact" className="hover:text-foreground transition-colors">Fit Guide</Link></li>
            <li><Link to="/contact" className="hover:text-foreground transition-colors">Delivery</Link></li>
            <li><Link to="/contact" className="hover:text-foreground transition-colors">Returns</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between gap-3 text-[10px] uppercase tracking-[0.3em] text-foreground/40 font-body">
          <span>© SUKO Atelier MMXXVI. All rights reserved.</span>
          <span>Mumbai · Milan · London</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
