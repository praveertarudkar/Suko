import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ShoppingBag, Search, User, Menu, X, MoreHorizontal, Heart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import SearchModal from "./SearchModal";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/collection", label: "Shop" },
  { to: "/inventory", label: "Inventory" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { openCart, count } = useCart();
  const { count: wishlistCount } = useWishlist();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [actionsOpen, setActionsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header
        data-testid="main-navbar"
        className="absolute top-0 left-0 right-0 z-50 bg-transparent transition-all duration-500 pointer-events-none"
      >
        <div className={`relative max-w-[1600px] mx-auto px-6 lg:px-12 py-5 lg:py-8 flex ${isHome ? 'items-start' : 'items-center'} justify-between pointer-events-auto`}>
          
          {/* Left Side: Logo */}
          <div className="flex items-start flex-1">
            {/* Logo */}
            <div>
              <Link to="/" data-testid="nav-logo" className="font-body font-bold text-2xl lg:text-4xl tracking-[0.35em] text-white select-none relative">
                SUKO
              </Link>
              {isHome && (
                <span className="hidden lg:block text-[10px] uppercase tracking-[0.4em] text-white/50 font-body mt-2 pl-1 select-none">
                  Crafted For Distinction
                </span>
              )}
            </div>
          </div>

          {/* Center: Links */}
          <nav className={`hidden lg:flex items-center justify-center flex-1 gap-6 lg:gap-8 z-10 ${isHome ? 'mt-[13px]' : 'mt-[10px]'}`}>
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                data-testid={`nav-${l.label.toLowerCase()}-link`}
                className={({ isActive }) =>
                  `text-[11px] uppercase tracking-[0.25em] font-body transition-all duration-300 relative group py-1 ${
                    isActive ? "text-white font-medium" : "text-white/60 hover:text-white"
                  }`
                }
              >
                {/* Active indicator line */}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full [[aria-current='page']_&]:w-full"></span>
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Side: Actions */}
          <div className="hidden lg:flex items-center justify-end relative flex-1 gap-12">
            <button 
              onClick={() => setActionsOpen(!actionsOpen)}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
            >
              <MoreHorizontal size={18} strokeWidth={1.5} />
            </button>
            
            {actionsOpen && (
              <div className="absolute top-14 right-0 bg-[#0a0a0c]/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-4 flex flex-col gap-2 min-w-[220px]">
                <button 
                  onClick={() => {
                    setActionsOpen(false);
                    setSearchOpen(true);
                  }}
                  aria-label="Search" 
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all"
                >
                  <Search size={16} strokeWidth={1.5} />
                  <span className="text-[13px] tracking-wide font-body">Search</span>
                </button>
                <Link
                  to="/wishlist"
                  onClick={() => setActionsOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Heart size={16} strokeWidth={1.5} />
                    <span className="text-[13px] tracking-wide font-body">Wishlist</span>
                  </div>
                  {wishlistCount > 0 && (
                    <span className="text-[10px] bg-white text-black rounded-full px-2 py-0.5 font-bold">{wishlistCount}</span>
                  )}
                </Link>
                <button
                  onClick={() => {
                    setActionsOpen(false);
                    openCart();
                  }}
                  aria-label="Cart"
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <ShoppingBag size={16} strokeWidth={1.5} />
                    <span className="text-[13px] tracking-wide font-body">Cart</span>
                  </div>
                  {count > 0 && (
                    <span className="text-[10px] bg-white text-black rounded-full px-2 py-0.5 font-bold">{count}</span>
                  )}
                </button>
                <div className="h-[1px] w-full bg-white/5 my-1"></div>
                <Link
                  to="/collection"
                  onClick={() => setActionsOpen(false)}
                  className="mt-1 bg-white text-black px-4 py-3 rounded-xl text-[13px] font-medium tracking-wide font-body hover:bg-white/90 transition-all text-center"
                >
                  Shop all items
                </Link>
              </div>
            )}
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              data-testid="mobile-cart-btn"
              onClick={openCart}
              className="relative text-white"
              aria-label="Cart"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 text-[10px] bg-white text-black rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  {count}
                </span>
              )}
            </button>
            <button
              onClick={() => setSearchOpen(true)}
              className="text-white"
              aria-label="Search"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            <Link
              to="/wishlist"
              className="relative text-white"
              aria-label="Wishlist"
            >
              <Heart size={20} strokeWidth={1.5} />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 text-[10px] bg-white text-black rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <button
              data-testid="mobile-menu-btn"
              onClick={() => setMobileOpen(true)}
              className="text-white"
              aria-label="Menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div data-testid="mobile-menu-drawer" className="fixed inset-0 z-[60] bg-[#0a0a0c] flex flex-col">
          <div className="flex items-center justify-between px-6 h-20 border-b border-white/5">
            <span className="font-body font-bold text-2xl tracking-[0.35em] text-white">SUKO</span>
            <button data-testid="mobile-menu-close" onClick={() => setMobileOpen(false)} aria-label="Close" className="text-white">
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-10 gap-6">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setMobileOpen(false)}
                className="font-body text-3xl font-medium text-white/90 hover:text-white"
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/collection"
              onClick={() => setMobileOpen(false)}
              className="mt-8 bg-white text-black px-6 py-4 rounded-full text-center text-[16px] font-medium font-body"
            >
              Shop all items
            </Link>
          </nav>
        </div>
      )}
      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};

export default Navbar;
