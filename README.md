# Kristina Hakobyan — Portfolio

Senior product designer portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Quickstart

```bash
# 1. Install
npm install

# 2. Set up Crisp chat (optional)
cp .env.example .env.local
# Add your Crisp website ID from crisp.chat to .env.local

# 3. Run dev server
npm run dev
# → http://localhost:3000
```

## Deploy to Vercel

1. Push to a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/kh-portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) → Import Project → select your repo
3. Vercel auto-detects Next.js. Click Deploy.
4. Add `NEXT_PUBLIC_CRISP_WEBSITE_ID` in Vercel project settings → Environment Variables.

## Project structure

```
app/
├── layout.tsx                  # Root layout + fonts + Crisp
├── page.tsx                    # Homepage (composes all sections)
├── globals.css                 # Tailwind + type scales + utilities
├── not-found.tsx               # 404 page
└── projects/[slug]/page.tsx    # Dynamic case study route

components/
├── Nav.tsx                     # Sticky nav with scroll blur
├── Hero.tsx                    # Hero with meta grid
├── Work.tsx                    # Selected Work (featured + grid)
├── Timeline.tsx                # 3-column career timeline
├── Approach.tsx                # 4 principle cards
├── Reviews.tsx                 # Testimonials
├── CTA.tsx                     # Dark CTA section
├── Footer.tsx                  # Footer
├── CaseStudySections.tsx       # Case study page body
└── Reveal.tsx                  # Scroll fade wrapper

lib/
├── projects.ts                 # All 5 case studies (single source of truth)
└── motion.ts                   # Framer Motion variants
```

## Customization

### Edit project content
All 5 case studies live in `lib/projects.ts`. Edit copy, decisions, outcomes, and metadata there. Changes reflect on homepage cards AND case study pages automatically.

### Add a new project
1. Open `lib/projects.ts`
2. Copy one existing project object, change the slug
3. Add to the `projects` array
4. That's it — `/projects/[slug]` route generates automatically

### Replace placeholder visuals
All visual blocks on case study pages are styled placeholders. To add real images:
1. Drop files in `public/images/` (compressed to ~300KB)
2. Edit `components/CaseStudySections.tsx` — replace placeholder divs with `next/image`
3. Or wire images up per-project via `lib/projects.ts`

### Adjust colors
All design tokens are in `tailwind.config.ts` → `theme.extend.colors`.
Current palette: warm neutrals (`#F5F2EC` family) with coral accent `#D66A4C` and deep ink `#111014` for dark sections.

### Adjust type scales
Display sizes are in `app/globals.css` using `clamp()` for responsive scaling.
Smaller sizes in `tailwind.config.ts` → `fontSize`.

## Crisp Chat setup

1. Sign up at [crisp.chat](https://crisp.chat) (free tier)
2. Settings → Website Settings → copy Website ID
3. Paste into `.env.local` as `NEXT_PUBLIC_CRISP_WEBSITE_ID`

The widget will:
- Appear bottom-right with custom dark styling
- Show "Have a project in mind? Feel free to message me." as initial message
- Have 100px bottom offset so it doesn't overlap footer

Without the ID, Crisp simply doesn't load — the rest of the site works fine.

## Links

- LinkedIn: https://www.linkedin.com/in/kristina-hakobyan-0086111ab/
- Upwork: https://www.upwork.com/freelancers/qristineh

Both are wired up in the footer and referenced throughout.

## Performance notes

- Google Fonts loaded via `next/font` (zero layout shift)
- Scroll animations use `whileInView` with `once: true` (no re-triggers)
- `prefers-reduced-motion` respected throughout
- Images will be auto-optimized to AVIF/WebP when you add them
- Target Lighthouse: 95+ across the board once images are in place

## License

All yours.
