import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { ReactLenis } from "lenis/react";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Aurora from "./components/Aurora";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import PageWrapper from "./components/PageWrapper";

// Lazy-loaded routes
const Home = lazy(() => import("./pages/Home"));
const Collection = lazy(() => import("./pages/Collection"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Lookbook = lazy(() => import("./pages/Lookbook"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Wishlist = lazy(() => import("./pages/Wishlist"));

const PageLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-[#0F0F11] z-50">
    <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
};

const GlobalBackground = () => {
  const { pathname } = useLocation();
  if (pathname === "/") return null;

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none opacity-40 md:opacity-100">
      <Aurora 
        colorStops={["#ffffff", "#000000", "#94a3b8"]}
        blend={0.5} 
        amplitude={1.0} 
        speed={0.5} 
      />
    </div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/collection" element={<PageWrapper><Collection /></PageWrapper>} />
          <Route path="/collection/:category" element={<PageWrapper><Collection /></PageWrapper>} />
          <Route path="/product/:slug" element={<PageWrapper><ProductDetail /></PageWrapper>} />
          <Route path="/wishlist" element={<PageWrapper><Wishlist /></PageWrapper>} />
          <Route path="/lookbook" element={<PageWrapper><Lookbook /></PageWrapper>} />
          <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
          <Route path="/blog/:id" element={<PageWrapper><BlogPost /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="/checkout" element={<PageWrapper><Checkout /></PageWrapper>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

function App() {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Backspace" || e.keyCode === 8) {
        if (e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
          e.preventDefault();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
      <div className="App relative min-h-screen">
        <WishlistProvider>
          <CartProvider>
            <BrowserRouter>
              <GlobalBackground />
              <ScrollToTop />
              <Navbar />
              <CartDrawer />
              <Toaster
                position="bottom-right"
                theme="dark"
                toastOptions={{
                  style: {
                    background: "#15151a",
                    color: "#F6F6F0",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 0,
                    fontFamily: "Outfit, sans-serif",
                  },
                }}
              />
              <main>
                <AnimatedRoutes />
              </main>
              <Footer />
            </BrowserRouter>
          </CartProvider>
        </WishlistProvider>
      </div>
    </ReactLenis>
  );
}

export default App;
