import { motion } from 'framer-motion';

const images = [
  { url: "https://images.unsplash.com/photo-1609335045485-e8341647c44a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBtZW5zd2VhciUyMGxvb2tib29rJTIwcGhvdG9ncmFwaHl8ZW58MHx8fHwxNzgxMjQ1MTU2fDA&ixlib=rb-4.1.0&q=85", type: "tall" },
  { url: "https://images.unsplash.com/photo-1665832102183-b232574131ff?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtZW5zd2VhciUyMGxvb2tib29rJTIwcGhvdG9ncmFwaHl8ZW58MHx8fHwxNzgxMjQ1MTU2fDA&ixlib=rb-4.1.0&q=85", type: "square" },
  { url: "https://images.unsplash.com/photo-1724858281574-e66473858284?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBtZW5zd2VhciUyMGxvb2tib29rJTIwcGhvdG9ncmFwaHl8ZW58MHx8fHwxNzgxMjQ1MTU2fDA&ixlib=rb-4.1.0&q=85", type: "tall" },
  { url: "https://images.unsplash.com/photo-1734669579609-90693a87f585?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBtZW5zd2VhciUyMGxvb2tib29rJTIwcGhvdG9ncmFwaHl8ZW58MHx8fHwxNzgxMjQ1MTU2fDA&ixlib=rb-4.1.0&q=85", type: "square" },
];

export default function Lookbook() {
  return (
    <section id="lookbook" className="py-24 sm:py-32 px-6 bg-card border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 sm:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-5xl tracking-tight font-medium mb-6">The Lookbook</h2>
            <p className="text-foreground/80 leading-relaxed">
              Explore our latest editorials. A visual journey through our most distinguished pieces, styled for the uncompromising individual.
            </p>
          </div>
          <button 
            className="border-b border-foreground pb-1 hover:text-foreground/70 transition-colors uppercase tracking-[0.2em] text-xs font-bold self-start md:self-end"
            data-testid="lookbook-view-all-button"
          >
            View Full Editorial
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Image 1 - Tall */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8 }}
            className="col-span-1 md:col-span-5 relative group overflow-hidden bg-background aspect-[3/4]"
          >
            <img src={images[0].url} alt="Lookbook 1" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" loading="lazy" />
          </motion.div>

          {/* Empty Space / Square Image */}
          <div className="col-span-1 md:col-span-7 flex flex-col gap-12 pt-0 md:pt-32">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group overflow-hidden bg-background aspect-square w-full md:w-2/3 ml-auto"
            >
              <img src={images[1].url} alt="Lookbook 2" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" loading="lazy" />
            </motion.div>
          </div>

          {/* Image 3 - Square */}
          <div className="col-span-1 md:col-span-6 flex flex-col justify-end pb-0 md:pb-32">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, delay: 0.1 }}
              className="relative group overflow-hidden bg-background aspect-square w-full md:w-5/6"
            >
              <img src={images[3].url} alt="Lookbook 3" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" loading="lazy" />
            </motion.div>
          </div>

          {/* Image 4 - Tall */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, delay: 0.3 }}
            className="col-span-1 md:col-span-6 relative group overflow-hidden bg-background aspect-[3/4] md:-mt-24"
          >
            <img src={images[2].url} alt="Lookbook 4" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" loading="lazy" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
