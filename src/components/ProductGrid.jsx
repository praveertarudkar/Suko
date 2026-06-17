import { motion } from 'framer-motion';

const suits = [
  { id: 1, name: "The Midnight Tuxedo", price: "₹85,000", image: "https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBtZW4lMjB0YWlsb3JlZCUyMHN1aXQlMjBkYXJrfGVufDB8fHx8MTc4MTI0NTE1Nnww&ixlib=rb-4.1.0&q=85" },
  { id: 2, name: "Charcoal Wool Suit", price: "₹65,000", image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtZW4lMjB0YWlsb3JlZCUyMHN1aXQlMjBkYXJrfGVufDB8fHx8MTc4MTI0NTE1Nnww&ixlib=rb-4.1.0&q=85" },
  { id: 3, name: "Navy Pinstripe Suit", price: "₹72,000", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBtZW4lMjB0YWlsb3JlZCUyMHN1aXQlMjBkYXJrfGVufDB8fHx8MTc4MTI0NTE1Nnww&ixlib=rb-4.1.0&q=85" },
  { id: 4, name: "Classic Black Double Breasted", price: "₹90,000", image: "https://images.unsplash.com/photo-1611937663641-5cef5189d71b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBtZW4lMjB0YWlsb3JlZCUyMHN1aXQlMjBkYXJrfGVufDB8fHx8MTc4MTI0NTE1Nnww&ixlib=rb-4.1.0&q=85" }
];

export default function ProductGrid() {
  return (
    <section id="suits" className="py-24 sm:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-5xl tracking-tight font-medium mb-6">Tailored Suits</h2>
          <p className="text-foreground/80 max-w-xl leading-relaxed">
            Meticulously crafted from the finest European fabrics. Our signature silhouettes designed for the modern gentleman, ensuring both comfort and authority.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {suits.map((suit, index) => (
            <motion.div 
              key={suit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-secondary/50">
                <img 
                  src={suit.image} 
                  alt={suit.name}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-medium mb-2 group-hover:text-foreground/80 transition-colors">{suit.name}</h3>
                  <p className="text-foreground/60 text-sm tracking-wide">{suit.price}</p>
                </div>
                <button 
                  className="mt-8 border border-foreground/20 hover:border-foreground/50 py-4 uppercase tracking-[0.2em] text-[10px] font-bold transition-colors w-full rounded-none text-foreground/80 hover:text-foreground"
                  data-testid={`add-to-cart-button-${suit.id}`}
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
