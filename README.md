# SCAJ — Automobile Accessories Website

A modern, stunning marketing site for **SCAJ**, a premium automobile accessories brand. The flagship product is a **car cooling film**; the site is built so future accessories can be added with minimal effort.

Brand palette: **white · black · red** (`#ffffff`, `#0a0a0a`, `#e10600`).

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **Lucide Icons**.

## Features

- Hero with animated cooling-film visual and live trust stats
- Brand marquee
- Six-point benefits grid ("Why SCAJ")
- Three-product lineup + "Coming soon" accessory roadmap
- Stats / social-proof band
- 4-step install process
- Testimonials carousel-style grid
- Contact section with quote-request form + studio details
- Sticky navbar with mobile menu, smooth scroll, scroll-aware glass effect
- Fully responsive, a11y-friendly, production-ready

## Project Structure

```
src/
├── app/
│   ├── globals.css      # brand tokens, animations, utilities
│   ├── layout.tsx       # fonts + metadata
│   └── page.tsx         # composes all sections
└── components/
    ├── Logo.tsx
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── Marquee.tsx
    ├── Features.tsx
    ├── Products.tsx
    ├── Stats.tsx
    ├── Process.tsx
    ├── Testimonials.tsx
    ├── Contact.tsx
    └── Footer.tsx
```

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
```

## Customising the Brand

All theme tokens live in `src/app/globals.css`:

```css
--background: #ffffff;
--foreground: #0a0a0a;
--brand:      #e10600;
--brand-dark: #b30500;
```

Change those and the entire site rebrands.

## Adding a New Product

1. Open `src/components/Products.tsx`.
2. Add a new entry to the `products` array (for live items) or the `upcoming` array (for "Coming soon").
3. That's it — the grid & "Coming soon" section auto-expand.

## License

© SCAJ Automotive. All rights reserved.
