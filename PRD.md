# SOKO — Luxury Formal Menswear (Frontend MVP)

## Original Problem Statement
Build a world-class luxury ecommerce website for SOKO — an ultra-luxury formal menswear brand specialising in executive shirts, tailored suits, blazers, premium trousers. Dark mode first, matte black + ivory white palette, cinematic hero video, glassmorphism navbar, luxury typography, premium motion design. Target: CEOs, entrepreneurs, HNIs. Garments priced ₹25,000–₹1,00,000+.

## User Choices (Iteration 1)
- **Frontend only** — no backend in this iteration
- **Payment**: skip / mocked
- **Admin panel**: skipped
- **Hero**: stock luxury video (Coverr)
- **Scope**: Storefront + Catalog + Cart + Mock Checkout

## Architecture
- **Stack**: React 19 + React Router 7 + Tailwind + Framer Motion + Sonner
- **State**: CartContext + localStorage persistence (`soko-cart-v1`)
- **Data**: Mock catalog at `/app/frontend/src/data/products.js` (14 products × 4 categories)
- **Design tokens**: HSL CSS vars (matte black `#0F0F11`, ivory `#F6F6F0`, muted gold accent)
- **Fonts**: Playfair Display (display) + Outfit (body)

## User Personas
1. **The Executive** — CEO / senior leader buying ready-to-wear formalwear for work & evening
2. **The HNI** — luxury buyer seeking craftsmanship narrative & exclusivity
3. **The Aspirational Professional** — values quiet luxury, considered tailoring

## Core Requirements (static)
- Cinematic hero with video background + dual CTA
- Sticky glassmorphic navbar + announcement marquee
- Product catalog (4 categories) with sort & filter
- Product detail with image gallery, size selector, qty, related products
- Cart drawer with qty controls & subtotal
- Mock checkout with order confirmation
- Lookbook editorial layout
- About brand storytelling
- Contact / private styling request form
- Responsive (desktop / tablet / mobile)

## What's Been Implemented (2026-02)
- ✅ Cinematic hero video with parallax text, scroll-triggered fade
- ✅ Marquee announcement bar + sticky glassmorphic navbar with cart badge
- ✅ Mobile drawer navigation
- ✅ Home: hero, manifesto, 4-category grid, featured products (8), craftsmanship strip, lookbook teaser, CTA
- ✅ Collection with category routes (`/collection/:category`) + sort by price
- ✅ Product Detail: gallery, thumbs, size picker, qty, add-to-bag, wishlist toggle, related products
- ✅ Cart drawer with +/-/remove, subtotal, localStorage persistence
- ✅ Mock checkout: form → order confirmation with CheckCircle
- ✅ Lookbook editorial (4 chapters, alternating layout)
- ✅ About (heritage + craftsmanship + three cities)
- ✅ Contact with three atelier addresses + request form
- ✅ Footer with newsletter + sitemap
- ✅ Sonner dark-themed toasts for all user actions
- ✅ 100% testing-agent pass (37/37 frontend checks)

## Prioritized Backlog
### P0 (next)
- Backend (FastAPI + MongoDB) with real Product model & APIs
- Real Razorpay / Stripe payment integration
- Order persistence & order tracking
- User accounts (JWT or Emergent Google Auth)

### P1
- Admin dashboard (CRUD products, manage orders, lookbook content)
- Real product search with debounced query
- Wishlist persistence (currently UI-only)
- Reviews & ratings
- Coupons / discount codes
- 360° garment viewer
- Image optimisation (Cloudinary / object storage)

### P2
- Multi-currency, multi-language (Hindi / English / Italian)
- Private styling appointment scheduler with calendar integration
- Email transactional flows (order confirmation, shipping)
- Analytics dashboard
- Inventory management
- SEO (sitemap, structured data)
