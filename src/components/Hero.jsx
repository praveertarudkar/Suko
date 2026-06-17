import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBtZW4lMjB0YWlsb3JlZCUyMHN1aXQlMjBkYXJrfGVufDB8fHx8MTc4MTI0NTE1Nnww&ixlib=rb-4.1.0&q=85"
      >
        <source src="https://cdn.coverr.co/videos/coverr-a-man-in-a-suit-walking-down-the-street-5152/1080p.mp4" type="video/mp4" />
      </video>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="absolute inset-0 flex items-end">
        <div className="max-w-7xl mx-auto px-6 w-full pb-24 sm:pb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-white/60 mb-4 block">
              The Fall/Winter Collection
            </span>
            <h1 className="text-5xl sm:text-6xl tracking-tighter font-medium text-white mb-6 leading-tight">
              The Modern Uniform.<br />
              Redeclared.
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-lg mb-10 font-body leading-relaxed">
              A fusion of luxury fashion houses and premium tailoring brands. 
              Discover the new standard of sartorial excellence.
            </p>
            <button 
              className="bg-white text-black px-8 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-white/90 transition-colors rounded-none"
              data-testid="hero-cta-button"
            >
              Explore Collection
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
