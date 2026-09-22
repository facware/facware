# AGENTS.md - facware-astro

## Project Overview
Static Astro 5 site for facware.com. Output: static HTML (`build.format: 'file'`).

## Commands
```bash
npm run dev      # Start dev server
npm run build    # Production build to ./dist
npm run preview  # Preview production build locally
```

## Key Config
- **Astro**: `astro.config.mjs` — site URL `https://facware.com`, static output, sitemap integration
- **TypeScript**: `tsconfig.json` — extends `astro/tsconfigs/strict`
- **No lint/test/typecheck scripts** — run `astro check` manually if needed

## Structure
```
src/
├── components/     # Reusable UI (Header, Footer, ContactForm, ROICalculator, Testimonials, ContactInfo)
├── layouts/        # BaseLayout.astro, ProseLayout.astro
├── pages/          # Routes (index, contact, privacy-policy, terms-of-service, blog/, services/, products/)
└── styles/         # global.css, vendor/fontawesome-all.min.css
```

## Conventions
- Pages use `.astro` extension; layouts in `src/layouts/`
- Static assets in `public/` (copied as-is to dist)
- No framework-specific testing or CI configured

## Gotchas
- Build outputs `.html` files (not directory index) due to `format: 'file'`
- FontAwesome loaded via local vendor CSS, not CDN
- No environment variables required (`.env.example` exists but unused)