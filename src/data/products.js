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
  { id: "sh-f-05", slug: "windswept-poplin-shirt", name: "Windswept Poplin Shirt", category: "shirts", gender: "female", price: 29000, fabric: "Italian Cotton", description: "An executive white shirt cut for an elegant feminine silhouette and crisp drape.", images: ["/images/female_corp_shirt_1.png", "/images/female_clean_3_1781334672765.png"], badge: "Essential" },
  { id: "sh-f-06", slug: "powder-blue-executive", name: "Powder Blue Executive Shirt", category: "shirts", gender: "female", price: 27500, fabric: "Heavyweight Oxford", description: "A structured shirt in powder blue, tailored for modern boardrooms.", images: ["/images/female_clean_4_1781334684185.png", "/images/female_corp_shirt_1.png"] },
  { id: "sh-f-07", slug: "midnight-silk-executive", name: "Midnight Silk Executive Shirt", category: "shirts", gender: "female", price: 38000, fabric: "Silk/Cotton Twill", description: "A dark, brooding silk shirt with a subtle luster for formal events.", images: ["/images/female_formal_4_1781334454191.png", "/images/female_clean_3_1781334672765.png"], badge: "New" },

  // --- FEMALE SUITS ---
  { id: "su-f-01", slug: "obsidian-two-piece", name: "Obsidian Two-Piece", category: "suits", gender: "female", price: 87000, fabric: "Loro Piana Super 150s", description: "Hand-canvassed two-piece in obsidian wool. Notch lapel, structured shoulders.", images: ["/images/female_clean_1_1781334564171.png", "/images/female_formal_1_1781334416775.png"], badge: "Signature" },
  { id: "su-f-02", slug: "graphite-three-piece", name: "Graphite Power Suit", category: "suits", gender: "female", price: 114000, fabric: "Vitale Barberis Canonico", description: "A full suite in graphite glen check. Impeccable tailoring.", images: ["/images/female_formal_1_1781334416775.png", "/images/female_clean_2_1781334574968.png"], badge: "Limited" },
  { id: "su-f-03", slug: "ivory-tuxedo-suit", name: "Ivory Tuxedo Suit", category: "suits", gender: "female", price: 105000, fabric: "Wool / Silk Blend", description: "Striking ivory tuxedo for evening wear with satin lapels.", images: ["/images/hero_focus_2_1781336678836.png", "/images/female_clean_1_1781334564171.png"] },
  { id: "su-f-04", slug: "midnight-dinner-suit", name: "Midnight Dinner Suit", category: "suits", gender: "female", price: 98500, fabric: "Mohair / Wool Blend", description: "An evening suit in deepest midnight. Peak satin lapel.", images: ["/images/female_clean_2_1781334574968.png", "/images/female_formal_2_1781334428103.png"] },
  { id: "su-f-05", slug: "charcoal-worsted-power", name: "Charcoal Worsted Power Suit", category: "suits", gender: "female", price: 95000, fabric: "Worsted Wool 130s", description: "Impeccably tailored women's power suit. Double-breasted closure, sharp shoulders.", images: ["/images/female_corp_suit_1.png", "/images/female_clean_1_1781334564171.png"], badge: "Signature" },
  { id: "su-f-06", slug: "navy-pinstripe-executive", name: "Navy Pinstripe Executive Suit", category: "suits", gender: "female", price: 110000, fabric: "Holland & Sherry", description: "The ultimate power suit in deep navy with subtle pinstripes, contoured cut.", images: ["/images/female_corp_suit_2.png", "/images/female_clean_2_1781334574968.png"] },
  { id: "su-f-07", slug: "classic-black-tuxedo-suit", name: "Classic Black Tuxedo Suit", category: "suits", gender: "female", price: 125000, fabric: "Barathea Wool", description: "A timeless black dinner tuxedo with satin peak lapels for evening affairs.", images: ["/images/female_formal_2_1781334428103.png", "/images/female_corp_suit_1.png"], badge: "Evening" },
  { id: "su-f-08", slug: "dove-grey-tailored", name: "Dove Grey Tailored Suit", category: "suits", gender: "female", price: 89000, fabric: "Lightweight Wool", description: "A crisp, lightweight suit perfect for daytime formal events or summer corporate conferences.", images: ["/images/female_clean_1_1781334564171.png", "/images/female_corp_suit_2.png"] },

  // --- FEMALE BLAZERS ---
  { id: "bl-f-01", slug: "onyx-velvet-blazer", name: "Onyx Velvet Blazer", category: "blazers", gender: "female", price: 62000, fabric: "Italian Silk Velvet", description: "An evening blazer in deep onyx velvet. Shawl collar.", images: ["/images/female_clean_5_1781334697190.png", "/images/female_formal_5_1781334467683.png"], badge: "New" },
  { id: "bl-f-02", slug: "smoked-grey-blazer", name: "Smoked Grey Blazer", category: "blazers", gender: "female", price: 54500, fabric: "Wool / Cashmere", description: "Unstructured silhouette, hand-stitched lapel roll.", images: ["/images/female_formal_5_1781334467683.png", "/images/female_clean_1_1781334564171.png"] },
  { id: "bl-f-03", slug: "camel-hair-blazer", name: "Camel Hair Blazer", category: "blazers", gender: "female", price: 71000, fabric: "100% Camel Hair", description: "A luxurious and warm blazer with an oversized masculine fit.", images: ["/images/hero_focus_3_1781336690961.png", "/images/female_clean_5_1781334697190.png"] },
  { id: "bl-f-04", slug: "heritage-navy-blazer", name: "Heritage Navy Tailored Blazer", category: "blazers", gender: "female", price: 65000, fabric: "Hopsack Wool", description: "The iconic structured navy blazer with gold-tone buttons and peak lapels.", images: ["/images/female_corp_blazer_1.png", "/images/female_clean_5_1781334697190.png"], badge: "Classic" },
  { id: "bl-f-05", slug: "houndstooth-tailored-blazer", name: "Houndstooth Tailored Blazer", category: "blazers", gender: "female", price: 72000, fabric: "Scottish Tweed", description: "A textured houndstooth blazer for cooler climates and casual Fridays.", images: ["/images/female_corp_blazer_1.png", "/images/female_clean_1_1781334564171.png"] },
  
  // --- FEMALE TROUSERS ---
  { id: "tr-f-01", slug: "charcoal-pleated-trouser", name: "Charcoal Pleated Trouser", category: "trousers", gender: "female", price: 26500, fabric: "Italian Worsted Wool", description: "Double-pleated, high-rise. Side adjusters, no belt loops.", images: ["/images/female_formal_2_1781334428103.png", "/images/female_clean_2_1781334574968.png"] },
  { id: "tr-f-02", slug: "midnight-flat-front-trouser", name: "Midnight Flat-Front Trouser", category: "trousers", gender: "female", price: 28000, fabric: "Super 120s Wool", description: "A flat-front cut for sharp silhouettes.", images: ["/images/female_clean_2_1781334574968.png", "/images/hero_focus_2_1781336678836.png"], badge: "Best Seller" },
  { id: "tr-f-03", slug: "ivory-wide-leg-trouser", name: "Ivory Wide-Leg Trouser", category: "trousers", gender: "female", price: 32000, fabric: "Silk Crepe", description: "Flowing wide-leg trousers that pool elegantly at the shoe.", images: ["/images/female_formal_3_1781334441333.png", "/images/female_formal_2_1781334428103.png"] },
  { id: "tr-f-04", slug: "grey-flannel-tailored", name: "Grey Flannel Tailored Trouser", category: "trousers", gender: "female", price: 29000, fabric: "Fox Brothers Flannel", description: "The definitive winter corporate trouser. High-rise with a subtle taper.", images: ["/images/female_corp_trouser_1.png", "/images/female_clean_2_1781334574968.png"] },
  { id: "tr-f-05", slug: "navy-twill-tailored", name: "Navy Twill Tailored Trouser", category: "trousers", gender: "female", price: 24000, fabric: "Heavy Cotton Twill", description: "A formal high-rise trouser with extended tab closure and sharp front creases.", images: ["/images/female_corp_trouser_1.png", "/images/female_formal_2_1781334428103.png"] },

  // --- MALE SUITS ---
  { id: "su-m-01", slug: "midnight-pinstripe-suit", name: "Midnight Pinstripe Suit", category: "suits", gender: "male", price: null, fabric: "Super 150s Wool", description: "A tailored midnight blue pinstripe corporate suit. Impeccable drape with soft canvassing.", images: ["/images/mens_item1_front_1782649409337.png", "/images/mens_item1_back_1782649420927.png"], badge: "New" },
  { id: "su-m-02", slug: "navy-executive-suit", name: "Navy Executive Tailored Suit", category: "suits", gender: "male", price: null, fabric: "Italian Worsted Wool", description: "An executive navy suit featuring sharp lapels and a structured silhouette.", images: ["/images/mens_item1_back_1782649420927.png", "/images/mens_item1_front_1782649409337.png"] },
  { id: "su-m-03", slug: "charcoal-grey-wool-jacket", name: "Charcoal Grey Wool Jacket", category: "blazers", gender: "male", price: null, fabric: "Merino Wool Blend", description: "A luxurious charcoal grey wool tailored corporate jacket. Classic boardroom presence.", images: ["/images/mens_item2_front_1782649430719.png", "/images/mens_item2_back_1782649442548.png"], badge: "Signature" },
  { id: "su-m-04", slug: "graphite-structured-blazer", name: "Graphite Structured Blazer", category: "blazers", gender: "male", price: null, fabric: "Flannel Wool", description: "A structured graphite blazer with a minimalist profile. Unlined for natural shoulder expression.", images: ["/images/mens_item2_back_1782649442548.png", "/images/mens_item2_front_1782649430719.png"] },
  { id: "su-m-05", slug: "crisp-white-executive-shirt", name: "Crisp White Executive Shirt", category: "shirts", gender: "male", price: null, fabric: "Egyptian Cotton Poplin", description: "The essential boardroom white shirt. Razor-sharp collar and French cuffs.", images: ["/images/mens_item3_front_1782649454163.png", "/images/mens_item3_back_1782649466148.png"], badge: "Essential" },
  { id: "su-m-06", slug: "ivory-poplin-boardroom-shirt", name: "Ivory Poplin Boardroom Shirt", category: "shirts", gender: "male", price: null, fabric: "Sea Island Cotton", description: "A subtly textured ivory poplin shirt. Fluid drape and unparalleled softness.", images: ["/images/mens_item3_back_1782649466148.png", "/images/mens_item3_front_1782649454163.png"] },
  { id: "su-m-07", slug: "black-tuxedo-corporate-suit", name: "Black Tuxedo Corporate Suit", category: "suits", gender: "male", price: null, fabric: "Barathea Wool", description: "A striking black tuxedo suit tailored for the modern executive's evening gala.", images: ["/images/mens_item4_front_1782649480951.png", "/images/mens_item4_back_1782649492354.png"], badge: "Evening" },
  { id: "su-m-08", slug: "obsidian-dinner-suit", name: "Obsidian Dinner Suit", category: "suits", gender: "male", price: null, fabric: "Silk/Wool Blend", description: "An obsidian dinner suit featuring subtle satin peak lapels. Impeccably cut.", images: ["/images/mens_item4_back_1782649492354.png", "/images/mens_item4_front_1782649480951.png"] },
  { id: "su-m-09", slug: "navy-twill-tailored-trousers", name: "Navy Twill Tailored Trousers", category: "trousers", gender: "male", price: null, fabric: "Heavy Cotton Twill", description: "Flat-front navy twill trousers with side adjusters. A corporate staple.", images: ["/images/mens_item5_front_1782649505331.png", "/images/mens_item5_back_1782649516789.png"], badge: "Best Seller" },
  { id: "su-m-10", slug: "midnight-pleated-trousers", name: "Midnight Pleated Trousers", category: "trousers", gender: "male", price: null, fabric: "Worsted Wool", description: "Single-pleated trousers in deepest midnight. High-rise, classic tailored fit.", images: ["/images/mens_item5_back_1782649516789.png", "/images/mens_item5_front_1782649505331.png"] },
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

export const HERO_VIDEO = "/images/Flow_1080p_202606241721.mp4";
export const HERO_FALLBACK = "https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?crop=entropy&cs=srgb&fm=jpg&w=2000&q=85";
