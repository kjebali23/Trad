# CertifyTrad — Landing Page

A high-fidelity, fully responsive Next.js 15 landing page for a certified translation service.

## Tech Stack

- **Next.js 15** — App Router
- **TypeScript**
- **Tailwind CSS 3** — Utility-first styling with custom design tokens
- **Zustand** — Global cart state management
- **Radix UI** — Accessible Dialog (used for the Cart Drawer) & Toast primitives
- **Lucide React** — Clean icon library
- **Google Fonts** — Playfair Display (serif headings) + DM Sans (body)

## Features

- ✅ Sticky responsive header with cart badge (animates on add)
- ✅ Hero with radial glows, grid pattern, staggered fade-up animations
- ✅ Process bar (4 steps, white icons, orange background)
- ✅ Product grid (4 cards, 2-col on tablet, 1-col on mobile, 4-col on desktop)
- ✅ Cart slide-out Drawer (Radix Dialog) with:
  - Live cart items with remove button
  - Email input field
  - Drag-and-drop PDF upload zone
  - Running total
- ✅ Toast notifications on add-to-cart
- ✅ "Why us" section on navy background
- ✅ Full footer with 4-column grid

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
certifytrad/
├── app/
│   ├── globals.css        # Tailwind base + custom keyframes + CSS vars
│   ├── layout.tsx         # Root layout with Google Fonts + Toaster
│   └── page.tsx           # Main page assembling all sections
├── components/
│   ├── ui/
│   │   ├── toast.tsx      # Radix Toast primitives
│   │   ├── toaster.tsx    # Toast renderer
│   │   └── use-toast.ts   # Toast hook
│   ├── CartDrawer.tsx     # Slide-out drawer (Radix Dialog)
│   ├── Header.tsx         # Sticky header + mobile nav
│   ├── HeroSection.tsx    # Hero with animations
│   ├── ProcessBar.tsx     # 4-step orange process bar
│   ├── ProductCard.tsx    # Individual product card (client)
│   ├── ProductsSection.tsx# Products grid
│   ├── WhySection.tsx     # Features / trust section
│   └── Footer.tsx         # Site footer
├── lib/
│   ├── products.ts        # Products data
│   └── utils.ts           # cn() utility
├── store/
│   └── cart.ts            # Zustand cart store
├── tailwind.config.ts     # Custom colors, fonts, animations
└── next.config.js
```

## Customization

### Colors (tailwind.config.ts)
```
navy: #0A192F
orange: #F57C00
cream: #FDFCF0
```

### Adding Products
Edit `lib/products.ts` — add entries to the `PRODUCTS` array.

### Changing Prices
Each product has its own `price` field in `lib/products.ts`.
