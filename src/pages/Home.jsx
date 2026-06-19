import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Scissors, Award, Compass } from "lucide-react";
import ProductCard from "../components/ProductCard";
import SideRays from "../components/SideRays";
import { CATEGORIES, PRODUCTS, HERO_FALLBACK, LOOKBOOK } from "../data/products";

const Home = () => {
  const heroRef = useRef(null);
  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };
  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);
  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const carouselSlides = [
    {
      id: "female",
      video: "/images/Woman_in_luxury_fashion_commercial_202606131438.mp4",
      tagline: "Discover the Light",
      title: "Women's Bespoke",
      desc: "Elegance woven into every thread.",
      btnText: "Shop Women's"
    },
    {
      id: "male",
      video: "/images/Model_wearing_formal_suit_202606151520.mp4",
      tagline: "Explore the Darkness",
      title: "Men's Tailoring",
      desc: "Signature cuts for the modern gentleman.",
      btnText: "Shop Men's"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [carouselSlides.length]);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const featured = PRODUCTS.slice(0, 8);

  return (
    <div data-testid="home-page" className="grain">
      {/* CINEMATIC CAROUSEL HERO */}
      <section ref={heroRef} data-testid="carousel-hero-section" className="relative h-screen w-full overflow-hidden bg-[#0F0F11]">
        
        {/* Videos (Both rendered but opacity toggled to prevent flickering) */}
        {carouselSlides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
              src={slide.video}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
          </div>
        ))}

        {/* SideRays Effect Layer */}
        <div className="absolute inset-0 z-[15] pointer-events-none mix-blend-screen">
          <SideRays
            rayColor1="#000000"
            rayColor2="#ffffff"
            origin="top-left"
            speed={2.5}
            intensity={1.9}
            spread={2}
            tilt={0}
            saturation={1.5}
            blend={0.75}
            falloff={1.6}
            opacity={1}
          />
        </div>

        {/* Animated Typography Layer */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-20 md:pb-24 px-6 text-center pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <span className="text-[9px] md:text-[11px] uppercase tracking-[0.4em] text-white/80 font-body mb-4">
                {carouselSlides[currentSlide].tagline}
              </span>
              <h1 className="font-display font-medium italic text-4xl md:text-6xl lg:text-7xl tracking-tighter text-white leading-none drop-shadow-2xl">
                {carouselSlides[currentSlide].title}
              </h1>
              <p className="mt-4 text-white/80 font-body text-xs md:text-sm max-w-sm tracking-wider font-light">
                {carouselSlides[currentSlide].desc}
              </p>
              
              <Link 
                to="/collection"
                className="mt-8 pointer-events-auto bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-medium font-body hover:bg-white hover:text-black transition-all duration-500 shadow-2xl"
              >
                {carouselSlides[currentSlide].btnText}
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Luxury Progress Bars */}
        <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center gap-4 px-6">
          {carouselSlides.map((_, index) => (
            <div 
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="relative w-16 md:w-24 h-1 bg-white/20 rounded-full overflow-hidden cursor-pointer group"
            >
              <motion.div 
                className="absolute top-0 left-0 bottom-0 bg-white"
                initial={{ width: index < currentSlide ? "100%" : "0%" }}
                animate={{ width: index === currentSlide ? "100%" : index < currentSlide ? "100%" : "0%" }}
                transition={{ 
                  duration: index === currentSlide ? 6 : 0.3, 
                  ease: "linear" 
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section data-testid="category-section" className="px-6 lg:px-16 max-w-[1600px] mx-auto pt-24 pb-32">
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight">The Edit</h2>
          <Link to="/collection" className="luxe-link text-[11px] uppercase tracking-[0.3em] font-body text-foreground/70 hover:text-foreground">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-2">
          {CATEGORIES.map((cat, i) => {
            const sample = PRODUCTS.find((p) => p.category === cat.slug);
            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={`/collection/${cat.slug}`}
                  data-testid={`category-card-${cat.slug}`}
                  className="group block relative overflow-hidden aspect-[3/4] bg-[#15151a]"
                >
                  <img
                    src={sample?.images[0]}
                    alt={cat.name}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover product-img group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/60 mb-2 font-body">{cat.tagline}</p>
                    <h3 className="font-display text-2xl lg:text-3xl tracking-tight text-foreground">{cat.name}</h3>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section data-testid="featured-section" className="px-6 lg:px-16 max-w-[1600px] mx-auto pb-32">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/45 font-body block mb-3">— Season AW26</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight">New Arrivals</h2>
          </div>
          <Link to="/collection" className="luxe-link text-[11px] uppercase tracking-[0.3em] font-body text-foreground/70 hover:text-foreground">
            Shop All →
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14 lg:gap-x-8">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* INTRO STATEMENT */}
      <section data-testid="manifesto-section" className="relative py-32 lg:py-48 flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/7%20sec.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 px-6 lg:px-16 max-w-[1400px] mx-auto w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <span className="lg:col-span-2 text-[10px] uppercase tracking-[0.3em] text-white/60 font-body pt-3">— Manifesto</span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-10 font-display text-2xl sm:text-4xl lg:text-6xl leading-tight tracking-tight font-medium text-white"
            >
              We do not chase season. We chase <em className="italic font-normal text-white/70">silhouette</em> — the precise geometry that lets a man speak softly and be heard across the room.
            </motion.h2>
          </div>
        </div>
      </section>

      {/* CRAFTSMANSHIP STRIP */}
      <section data-testid="craft-section" className="border-y border-white/5 py-24 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-12">
          {[
            { icon: Scissors, label: "Hand Finished", text: "Twelve craftspeople. Forty-eight hours per jacket." },
            { icon: Award, label: "Heritage Fabric", text: "Loro Piana, Holland & Sherry, Vitale Barberis Canonico." },
            { icon: Compass, label: "Private Atelier", text: "Bespoke fittings by appointment, worldwide." },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.1 }}
              className="flex gap-5"
            >
              <f.icon size={28} strokeWidth={1} className="shrink-0 mt-1 text-foreground/80" />
              <div>
                <h4 className="font-display text-xl mb-2">{f.label}</h4>
                <p className="text-sm text-foreground/55 font-body leading-relaxed">{f.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LOOKBOOK TEASER */}
      <section data-testid="lookbook-teaser" className="py-32 px-6 lg:px-16 max-w-[1600px] mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-12">
          <h2 className="lg:col-span-7 font-display text-4xl sm:text-5xl lg:text-7xl tracking-tighter font-medium leading-[0.95]">
            The Lookbook — <em className="italic font-normal text-foreground/60">Chapter IV.</em>
          </h2>
          <Link to="/lookbook" className="lg:col-span-5 lg:text-right luxe-link text-[11px] uppercase tracking-[0.3em] font-body text-foreground/70 hover:text-foreground">
            View Editorial →
          </Link>
        </div>
        
        <div 
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex gap-4 lg:gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-8 -mx-6 px-6 lg:-mx-16 lg:px-16 select-none ${isDown ? 'cursor-grabbing' : 'cursor-grab'}`}
        >
          {LOOKBOOK.map((look, i) => (
            <motion.div
              key={look.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="shrink-0 w-[85vw] sm:w-[60vw] lg:w-[45vw] xl:w-[35vw] aspect-[4/5] overflow-hidden bg-[#15151a] snap-center relative group"
            >
              <img src={look.image} alt={look.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms]" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                 <p className="text-[10px] uppercase tracking-[0.3em] text-white/60 mb-2 font-body">— {look.season}</p>
                 <h3 className="font-display text-2xl lg:text-3xl tracking-tight text-white">{look.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-16 text-center border-t border-white/5">
        <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/45 font-body block mb-6">— By Appointment</span>
        <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl tracking-tighter font-medium mb-10">
          A wardrobe, <em className="italic font-normal text-foreground/55">privately tailored.</em>
        </h2>
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 border border-foreground/30 px-12 py-5 text-[11px] uppercase tracking-[0.3em] font-body hover:border-foreground hover:bg-foreground hover:text-background transition-all"
          data-testid="cta-book-styling-btn"
        >
          Book Private Styling
          <ArrowRight size={14} strokeWidth={1.25} />
        </Link>
      </section>
    </div>
  );
};

export default Home;
