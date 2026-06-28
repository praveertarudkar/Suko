import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Scissors, Award, Compass } from "lucide-react";
import ProductCard from "../components/ProductCard";
import SideRays from "../components/SideRays";
import NewArrivals3DCarousel from "../components/NewArrivals3DCarousel";
import MagneticButton from "../components/MagneticButton";
import { CATEGORIES, PRODUCTS, HERO_FALLBACK, LOOKBOOK } from "../data/products";
import TheEditSection from "../components/TheEditSection";

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
      video: "/Flow_1080p_202606281901.mp4",
      tagline: "Discover the Light",
      title: "Power Tailoring",
      desc: "Impeccable structure designed for the modern female leader.",
      btnText: "Explore Collection"
    },
    {
      id: "female-alt",
      video: "/Flow_1080p_202606281901.mp4",
      tagline: "Explore the Form",
      title: "Fluid Luxury",
      desc: "Precision silhouettes crafted from the finest European fabrics.",
      btnText: "Explore Collection"
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
      {/* ARCHITECTURAL EDITORIAL HERO */}
      <section 
        ref={heroRef} 
        data-testid="carousel-hero-section" 
        className="relative h-screen w-full bg-[#0a0a0c] pt-36 pb-12 px-6 lg:px-16 flex flex-col justify-between overflow-hidden group"
      >
        {/* Fullscreen Background Video Carousel */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#0a0a0c]">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            src="/Flow_1080p_202606281901.mp4"
          />
          {/* Elegant gradient overlay: darker at bottom for text, no dark effect at top */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-[11]" />

          {/* Soft Glow rays overlay over the video */}
          <div className="absolute inset-0 z-[15] pointer-events-none mix-blend-screen opacity-65">
            <SideRays
              rayColor1="#ffffff"
              rayColor2="#0A0A0C"
              origin="top-left"
              speed={1.0}
              intensity={1.5}
              spread={2.0}
              tilt={5}
              saturation={1.0}
              blend={0.9}
              falloff={1.5}
              opacity={0.6}
            />
          </div>
        </div>




        {/* Massive Bold Tagline (positioned right below SUKO logo) */}
        <div className="relative z-20 w-full max-w-[1500px] mx-auto pt-4 md:pt-8 pl-2 md:pl-0">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] tracking-tight text-white leading-[1.1] max-w-2xl drop-shadow-2xl">
            The New <span className="italic text-white/60 font-light">Standard</span><br/>
            of <span className="italic text-white/60 font-light">Corporate</span><br/>
            Style.
          </h1>
        </div>

        {/* Dynamic 3-Column Metadata Grid below video */}
        <div className="relative z-20 max-w-[1500px] w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-auto">
          
          {/* Col 1 & 2: Slide title and desc */}
          <div className="md:col-span-2 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-4 text-[9px] tracking-[0.35em] text-[#8e8e93] uppercase font-body mb-3">
                  <span>0{currentSlide + 1} // {carouselSlides[currentSlide].tagline}</span>
                </div>
                <h2 className="font-display font-medium text-3xl md:text-5xl lg:text-6xl tracking-tight text-white leading-none mb-4">
                  {carouselSlides[currentSlide].title.split(" ")[0]} <span className="italic text-white/70 font-light font-serif">{carouselSlides[currentSlide].title.split(" ")[1]}</span>
                </h2>
                <p className="text-white/60 font-body text-xs md:text-sm tracking-wide font-light leading-relaxed max-w-lg">
                  {carouselSlides[currentSlide].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Col 4: Action CTAs + slide progress lines */}
          <div className="flex flex-col justify-end items-start md:items-end border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8 gap-4 mt-auto md:mt-0">
            <Link 
              to="/collection"
              className="bg-white text-black border border-white px-10 py-4 rounded-none text-[10px] uppercase tracking-[0.25em] font-semibold font-body hover:bg-transparent hover:text-white transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] w-full md:w-auto text-center"
            >
              {carouselSlides[currentSlide].btnText}
            </Link>

            {/* Slider progress lines indicator */}
            <div className="flex gap-3 w-full md:w-auto justify-start md:justify-end">
              {carouselSlides.map((_, index) => (
                <div 
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className="relative w-10 h-[2px] bg-white/20 overflow-hidden cursor-pointer"
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
          </div>
        </div>

      </section>

      <TheEditSection />

      <NewArrivals3DCarousel products={featured} />

      {/* WORKWEAR ESSENTIALS SECTION */}
      <section className="bg-[#0a0a0c] py-20 lg:py-24 px-6 lg:px-16 border-b border-white/5">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16 text-center">
             <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 font-body mb-3 block">The Core Collection</span>
             <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-white">Workwear Essentials</h2>
          </div>

          <div className="flex flex-col gap-16 lg:gap-20">
            {/* Block 1 */}
            <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16 group">
              <div className="w-full md:w-1/2 lg:w-5/12 overflow-hidden bg-[#111113] rounded-sm aspect-[4/5] relative border border-white/5">
                <img 
                  src="/images/womens_blazer_cover_1782656530913.png" 
                  alt="Women's Tailored Blazer Set" 
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] opacity-90"
                />
              </div>
              <div className="w-full md:w-1/2 lg:w-7/12 flex flex-col justify-center">
                <h3 className="font-display text-3xl lg:text-4xl text-white tracking-tight mb-4">Tailored Blazer Set</h3>
                <p className="text-white/60 font-body text-sm leading-relaxed mb-6 max-w-md">
                  Structured corporate wear crafted for confidence, comfort, and boardroom presence.
                </p>
                <div className="flex flex-col gap-2 mb-8 text-white/40 text-[10px] font-body uppercase tracking-[0.2em]">
                  <span className="flex items-center gap-3"><span className="w-3 h-[1px] bg-white/20"></span> Premium fabric</span>
                  <span className="flex items-center gap-3"><span className="w-3 h-[1px] bg-white/20"></span> Sharp lapels</span>
                  <span className="flex items-center gap-3"><span className="w-3 h-[1px] bg-white/20"></span> Modern fit</span>
                </div>
                <Link to="/collection" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white border border-white/20 px-6 py-3 w-fit hover:bg-white hover:text-black transition-all duration-500">
                   Explore Women <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Block 2 (Reversed) */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-10 lg:gap-16 group">
              <div className="w-full md:w-1/2 lg:w-5/12 overflow-hidden bg-[#111113] rounded-sm aspect-[4/5] relative border border-white/5">
                <img 
                  src="/images/womens_shirt_cover_1782656518361.png" 
                  alt="Everyday Corporate Essential" 
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] opacity-90"
                />
              </div>
              <div className="w-full md:w-1/2 lg:w-7/12 flex flex-col justify-center md:items-end md:text-right">
                <h3 className="font-display text-3xl lg:text-4xl text-white tracking-tight mb-4">Everyday Corporate Essential</h3>
                <p className="text-white/60 font-body text-sm leading-relaxed mb-6 max-w-md">
                  Refined formalwear designed for daily elegance and professional ease.
                </p>
                <div className="flex flex-col md:items-end gap-2 mb-8 text-white/40 text-[10px] font-body uppercase tracking-[0.2em]">
                  <span className="flex items-center justify-end gap-3">Clean silhouette <span className="w-3 h-[1px] bg-white/20 hidden md:block"></span></span>
                  <span className="flex items-center justify-end gap-3">Breathable fabric <span className="w-3 h-[1px] bg-white/20 hidden md:block"></span></span>
                  <span className="flex items-center justify-end gap-3">Timeless style <span className="w-3 h-[1px] bg-white/20 hidden md:block"></span></span>
                </div>
                <Link to="/collection" className="inline-flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white border border-white/20 px-6 py-3 w-fit hover:bg-white hover:text-black transition-all duration-500">
                   View Collection <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Block 3 */}
            <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16 group">
              <div className="w-full md:w-1/2 lg:w-5/12 overflow-hidden bg-[#111113] rounded-sm aspect-[4/5] relative border border-white/5">
                <img 
                  src="/images/suits_cover_1782652781025.png" 
                  alt="Executive Menswear" 
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] opacity-90"
                />
              </div>
              <div className="w-full md:w-1/2 lg:w-7/12 flex flex-col justify-center">
                <h3 className="font-display text-3xl lg:text-4xl text-white tracking-tight mb-4">Executive Menswear</h3>
                <p className="text-white/60 font-body text-sm leading-relaxed mb-6 max-w-md">
                  Sharp tailoring and minimal formalwear for the modern professional.
                </p>
                <div className="flex flex-col gap-2 mb-8 text-white/40 text-[10px] font-body uppercase tracking-[0.2em]">
                  <span className="flex items-center gap-3"><span className="w-3 h-[1px] bg-white/20"></span> Structured fit</span>
                  <span className="flex items-center gap-3"><span className="w-3 h-[1px] bg-white/20"></span> Crisp finish</span>
                  <span className="flex items-center gap-3"><span className="w-3 h-[1px] bg-white/20"></span> Premium detailing</span>
                </div>
                <Link to="/collection" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white border border-white/20 px-6 py-3 w-fit hover:bg-white hover:text-black transition-all duration-500">
                   Explore Men <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* STATIC VIDEO MANIFESTO */}
      <section data-testid="manifesto-section" className="relative py-32 lg:py-48 flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/7%20sec.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />

        <div className="relative z-10 px-6 lg:px-16 max-w-[1400px] mx-auto w-full text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 font-body mb-6 block">— The Manifesto</span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-2xl sm:text-4xl lg:text-6xl leading-tight tracking-tight font-medium text-white max-w-5xl mx-auto"
          >
            We do not chase season. We chase <em className="italic font-normal text-white/70">silhouette</em> — the precise geometry that lets a woman speak softly and be heard across the room.
          </motion.h2>
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

      {/* LOOKBOOK TEASER REMOVED */}

      {/* CTA */}
      <section className="py-32 px-6 lg:px-16 text-center border-t border-white/5">
        <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/45 font-body block mb-6">— By Appointment</span>
        <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl tracking-tighter font-medium mb-10">
          A wardrobe, <em className="italic font-normal text-foreground/55">privately tailored.</em>
        </h2>
        <MagneticButton>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 border border-foreground/30 px-12 py-5 text-[11px] uppercase tracking-[0.3em] font-body hover:border-foreground hover:bg-foreground hover:text-background transition-all"
            data-testid="cta-book-styling-btn"
          >
            Book Private Styling
            <ArrowRight size={14} strokeWidth={1.25} />
          </Link>
        </MagneticButton>
      </section>
    </div>
  );
};

export default Home;
