// Mock catalog for SUKO luxury formal wear
// Pricing is in INR — between ₹25,000 and ₹1,00,000+

const SUIT_IMAGES = [
  "/images/female_clean_1_1781334564171.png",
  "/images/female_formal_1_1781334416775.png",
  "/images/female_clean_2_1781334574968.png",
  "/images/female_formal_2_1781334428103.png",
];

const SHIRT_IMAGES = [
  "/images/female_clean_3_1781334672765.png",
  "/images/female_formal_3_1781334441333.png",
  "/images/female_clean_4_1781334684185.png",
  "/images/female_formal_4_1781334454191.png",
];

const BLAZER_IMAGES = [
  "/images/female_clean_5_1781334697190.png",
  "/images/female_formal_5_1781334467683.png",
  "/images/female_clean_1_1781334564171.png",
];

const TROUSER_IMAGES = [
  "/images/female_clean_2_1781334574968.png",
  "/images/female_formal_2_1781334428103.png",
];

export const CATEGORIES = [
  { slug: "shirts", name: "Executive Shirts", tagline: "Tailored to the millimetre" },
  { slug: "suits", name: "Luxury Suits", tagline: "Bespoke architecture" },
  { slug: "blazers", name: "Tailored Blazers", tagline: "Sculpted silhouettes" },
  { slug: "trousers", name: "Premium Trousers", tagline: "Considered tailoring" },
];

export const PRODUCTS = [
  // --- FEMALE SHIRTS ---
  { id: "sh-f-01", slug: "noir-oxford-shirt", name: "Noir Oxford Shirt", category: "shirts", gender: "female", price: 28500, fabric: "Sea Island Cotton 200s", description: "A foundational shirt in deep onyx, woven from rare Sea Island cotton.", images: ["/images/female_clean_3_1781334672765.png", "/images/female_formal_3_1781334441333.png"], badge: "Heritage" },
  { id: "sh-f-02", slug: "ivory-poplin-classic", name: "Ivory Poplin Classic", category: "shirts", gender: "female", price: 31000, fabric: "Egyptian Giza 87", description: "The quintessential boardroom shirt. Crisp poplin, single-needle stitching.", images: ["/images/female_formal_3_1781334441333.png", "/images/female_clean_4_1781334684185.png"] },
  { id: "sh-f-03", slug: "midnight-twill-shirt", name: "Midnight Twill Shirt", category: "shirts", gender: "female", price: 34500, fabric: "Italian Twill 170s", description: "A subtle sheen in deepest navy. Cut for movement, finished by hand.", images: ["/images/female_clean_4_1781334684185.png", "/images/hero_focus_1_1781336666112.png"], badge: "New" },
  { id: "sh-f-04", slug: "silk-crepe-blouse", name: "Silk Crepe Blouse", category: "shirts", gender: "female", price: 42000, fabric: "100% Mulberry Silk", description: "Fluid silk crepe with a concealed placket for a minimalist finish.", images: ["/images/female_formal_4_1781334454191.png", "/images/female_clean_3_1781334672765.png"] },

  // --- MALE SHIRTS ---
  { id: "sh-m-01", slug: "mens-classic-poplin", name: "Classic White Poplin", category: "shirts", gender: "male", price: 29000, fabric: "Italian Cotton", description: "A staple for the modern man. Cut away collar and French cuffs.", images: ["/images/mens_shirt_1_1781520285093.png", "/images/male_clean_1_1781334707104.png"], badge: "Essential" },
  { id: "sh-m-02", slug: "mens-blue-oxford", name: "Powder Blue Oxford", category: "shirts", gender: "male", price: 27500, fabric: "Heavyweight Oxford", description: "A versatile shirt that transitions seamlessly from boardroom to evening.", images: ["/images/male_clean_1_1781334707104.png", "/images/mens_shirt_1_1781520285093.png"] },
  { id: "sh-m-03", slug: "mens-black-silk-blend", name: "Midnight Silk Blend", category: "shirts", gender: "male", price: 38000, fabric: "Silk/Cotton Twill", description: "A dark, brooding shirt with a subtle luster for formal events.", images: ["/images/male_formal_1_1781334480339.png", "/images/male_clean_1_1781334707104.png"], badge: "New" },

  // --- FEMALE SUITS ---
  { id: "su-f-01", slug: "obsidian-two-piece", name: "Obsidian Two-Piece", category: "suits", gender: "female", price: 87000, fabric: "Loro Piana Super 150s", description: "Hand-canvassed two-piece in obsidian wool. Notch lapel, structured shoulders.", images: ["/images/female_clean_1_1781334564171.png", "/images/female_formal_1_1781334416775.png"], badge: "Signature" },
  { id: "su-f-02", slug: "graphite-three-piece", name: "Graphite Power Suit", category: "suits", gender: "female", price: 114000, fabric: "Vitale Barberis Canonico", description: "A full suite in graphite glen check. Impeccable tailoring.", images: ["/images/female_formal_1_1781334416775.png", "/images/female_clean_2_1781334574968.png"], badge: "Limited" },
  { id: "su-f-03", slug: "ivory-tuxedo-suit", name: "Ivory Tuxedo Suit", category: "suits", gender: "female", price: 105000, fabric: "Wool / Silk Blend", description: "Striking ivory tuxedo for evening wear with satin lapels.", images: ["/images/hero_focus_2_1781336678836.png", "/images/female_clean_1_1781334564171.png"] },
  { id: "su-f-04", slug: "midnight-dinner-suit", name: "Midnight Dinner Suit", category: "suits", gender: "female", price: 98500, fabric: "Mohair / Wool Blend", description: "An evening suit in deepest midnight. Peak satin lapel.", images: ["/images/female_clean_2_1781334574968.png", "/images/female_formal_2_1781334428103.png"] },

  // --- MALE SUITS ---
  { id: "su-m-01", slug: "mens-charcoal-suit", name: "Charcoal Worsted Suit", category: "suits", gender: "male", price: 95000, fabric: "Worsted Wool 130s", description: "Impeccably tailored men's suit. Two-button closure, double vent.", images: ["/images/mens_suit_1_1781520258841.png", "/images/mens_suit_2_1781520272525.png"], badge: "Signature" },
  { id: "su-m-02", slug: "mens-navy-pinstripe", name: "Navy Pinstripe Suit", category: "suits", gender: "male", price: 110000, fabric: "Holland & Sherry", description: "The ultimate power suit in deep navy with subtle pinstripes.", images: ["/images/mens_suit_2_1781520272525.png", "/images/mens_suit_1_1781520258841.png"] },
  { id: "su-m-03", slug: "mens-tuxedo-classic", name: "Classic Black Tuxedo", category: "suits", gender: "male", price: 125000, fabric: "Barathea Wool", description: "A timeless black tuxedo with grosgrain silk peak lapels.", images: ["/images/male_formal_1_1781334480339.png", "/images/mens_suit_1_1781520258841.png"], badge: "Evening" },
  { id: "su-m-04", slug: "mens-light-grey-suit", name: "Dove Grey Suit", category: "suits", gender: "male", price: 89000, fabric: "Lightweight Wool", description: "Perfect for daytime formal events or summer weddings.", images: ["/images/male_clean_1_1781334707104.png", "/images/mens_suit_2_1781520272525.png"] },

  // --- FEMALE BLAZERS ---
  { id: "bl-f-01", slug: "onyx-velvet-blazer", name: "Onyx Velvet Blazer", category: "blazers", gender: "female", price: 62000, fabric: "Italian Silk Velvet", description: "An evening blazer in deep onyx velvet. Shawl collar.", images: ["/images/female_clean_5_1781334697190.png", "/images/female_formal_5_1781334467683.png"], badge: "New" },
  { id: "bl-f-02", slug: "smoked-grey-blazer", name: "Smoked Grey Blazer", category: "blazers", gender: "female", price: 54500, fabric: "Wool / Cashmere", description: "Unstructured silhouette, hand-stitched lapel roll.", images: ["/images/female_formal_5_1781334467683.png", "/images/female_clean_1_1781334564171.png"] },
  { id: "bl-f-03", slug: "camel-hair-blazer", name: "Camel Hair Blazer", category: "blazers", gender: "female", price: 71000, fabric: "100% Camel Hair", description: "A luxurious and warm blazer with an oversized masculine fit.", images: ["/images/hero_focus_3_1781336690961.png", "/images/female_clean_5_1781334697190.png"] },

  // --- MALE BLAZERS ---
  { id: "bl-m-01", slug: "mens-navy-blazer", name: "Heritage Navy Blazer", category: "blazers", gender: "male", price: 65000, fabric: "Hopsack Wool", description: "The iconic navy blazer with brass buttons and patch pockets.", images: ["/images/mens_blazer_1_1781520298090.png", "/images/male_formal_1_1781334480339.png"], badge: "Classic" },
  { id: "bl-m-02", slug: "mens-houndstooth-blazer", name: "Houndstooth Sport Coat", category: "blazers", gender: "male", price: 72000, fabric: "Scottish Tweed", description: "A textured sport coat for cooler climates and casual Fridays.", images: ["/images/male_clean_1_1781334707104.png", "/images/mens_blazer_1_1781520298090.png"] },
  
  // --- FEMALE TROUSERS ---
  { id: "tr-f-01", slug: "charcoal-pleated-trouser", name: "Charcoal Pleated Trouser", category: "trousers", gender: "female", price: 26500, fabric: "Italian Worsted Wool", description: "Double-pleated, high-rise. Side adjusters, no belt loops.", images: ["/images/female_formal_2_1781334428103.png", "/images/female_clean_2_1781334574968.png"] },
  { id: "tr-f-02", slug: "midnight-flat-front-trouser", name: "Midnight Flat-Front Trouser", category: "trousers", gender: "female", price: 28000, fabric: "Super 120s Wool", description: "A flat-front cut for sharp silhouettes.", images: ["/images/female_clean_2_1781334574968.png", "/images/hero_focus_2_1781336678836.png"], badge: "Best Seller" },
  { id: "tr-f-03", slug: "ivory-wide-leg-trouser", name: "Ivory Wide-Leg Trouser", category: "trousers", gender: "female", price: 32000, fabric: "Silk Crepe", description: "Flowing wide-leg trousers that pool elegantly at the shoe.", images: ["/images/female_formal_3_1781334441333.png", "/images/female_formal_2_1781334428103.png"] },

  // --- MALE TROUSERS ---
  { id: "tr-m-01", slug: "mens-grey-flannel-trouser", name: "Grey Flannel Trouser", category: "trousers", gender: "male", price: 29000, fabric: "Fox Brothers Flannel", description: "The definitive winter trouser. Mid-rise with a subtle taper.", images: ["/images/mens_trouser_1_1781520311808.png", "/images/mens_suit_2_1781520272525.png"] },
  { id: "tr-m-02", slug: "mens-navy-twill-trouser", name: "Navy Twill Chino", category: "trousers", gender: "male", price: 24000, fabric: "Heavy Cotton Twill", description: "A formal take on the chino. Sharp crease, extended tab closure.", images: ["/images/male_formal_1_1781334480339.png", "/images/mens_trouser_1_1781520311808.png"] },
];

export const SIZES = ["38", "40", "42", "44", "46", "48"];

export const formatINR = (n) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

export const getProductBySlug = (slug) => PRODUCTS.find((p) => p.slug === slug);
export const getProductsByCategory = (cat) => PRODUCTS.filter((p) => p.category === cat);

export const LOOKBOOK = [
  { id: 1, title: "Chapter I — The Boardroom", season: "Autumn / Winter 26", image: "/images/female_formal_1_1781334416775.png" },
  { id: 2, title: "Chapter II — After Eight", season: "Evening Edit", image: "/images/female_clean_3_1781334672765.png" },
  { id: 3, title: "Chapter III — The City", season: "Capsule 04", image: "/images/female_formal_4_1781334454191.png" },
  { id: 4, title: "Chapter IV — Private Hours", season: "Limited", image: "/images/female_clean_5_1781334697190.png" },
];

export const HERO_VIDEO = "https://cdn.coverr.co/videos/coverr-a-man-in-a-suit-walking-down-the-street-5152/1080p.mp4";
export const HERO_FALLBACK = "https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?crop=entropy&cs=srgb&fm=jpg&w=2000&q=85";
