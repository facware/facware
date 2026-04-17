# Facware — Migration to Astro
## Task Tracker & Technical Plan

> **Status:** Planning phase  
> **Target stack:** Astro 5 (static output) + scoped CSS + minimal vanilla JS islands  
> **Current stack:** Semantic HTML5 + single CSS file + inline vanilla JS  
> **Goal:** Demonstrate engineering quality through the site itself — fast, clean, maintainable.

---

## Why Astro (not Next.js)

| Criteria | HTML/CSS | **Astro** ✅ | Next.js |
|---|---|---|---|
| Build output | Static files | **Static files** | Node / static hybrid |
| JS sent to browser | Minimal (inline) | **Zero by default** (islands opt-in) | React runtime always |
| Learning curve | None | Low | Medium–High |
| Component reuse | None (copy/paste) | **Full** (`.astro` components) | Full |
| Image optimization | Manual | **Built-in** (`<Image />`) | Built-in |
| SEO / sitemap | Manual | **`@astrojs/sitemap` plugin** | Manual or plugin |
| Performance ceiling | Good | **Excellent** (0 JS by default) | Good (with tuning) |
| Fits current scale | ✅ | ✅ | Overkill |

**Verdict:** Astro is the correct choice. It compiles to pure HTML/CSS with zero JavaScript shipped unless you explicitly opt into an "island". The architecture will look familiar to anyone who reads the codebase — a trust signal for technical buyers.

---

## Current Site Inventory

### Pages (active)
| File | Route | Description |
|---|---|---|
| `index.html` | `/` | Main landing page (all sections) |
| `contact.html` | `/contact` | Contact page + web3forms AJAX form |
| `privacy-policy.html` | `/privacy-policy` | GDPR-aware privacy policy |
| `terms-of-service.html` | `/terms-of-service` | Terms of service |

### Assets in use
| Path | Purpose |
|---|---|
| `assets/css/facware-landing.css` | Main stylesheet (full design system) |
| `assets/css/vendor/fontawesome-all.min.css` | FontAwesome 5 icons |
| `assets/images/facware/home_logo.png` | Logo (header + footer) |
| `assets/images/facware/favicon_facware.png` | Favicon |
| `assets/images/facware/business_solutions_home.jpg` | Hero background (LCP image) |
| `assets/images/facware/resources_facware.png` | Proven Results section image |
| `assets/images/facware/customers/*.{png,jpg,jpeg,avif}` | Logo ticker (10 logos) |
| `assets/images/icons/mitech-box-image-style-05-image-0{1-6}-60x60.webp` | Service/problem card icons |
| `assets/images/testimonial/Facware-testimonial-avata-0{1-4}-90x90.webp` | Testimonial avatars |

### JS behavior (all vanilla, must be preserved)
| Behavior | JS complexity | Astro island? |
|---|---|---|
| Mobile nav toggle | ~15 lines | `client:load` island |
| Header shadow on scroll | ~3 lines | Can be CSS-only |
| Testimonials carousel (auto-advance, touch, dots) | ~30 lines | `client:load` island |
| Logo ticker | CSS `@keyframes` only | No JS needed |
| Scroll-to-top button | ~5 lines | `client:load` island |
| Copyright year | 1 line | Can be build-time in Astro |
| IntersectionObserver animations | ~10 lines | `client:load` island |
| Web3Forms AJAX submission | ~40 lines | `client:load` island |

---

## Target Astro Project Structure

```
facware-astro/
├── astro.config.mjs          # site URL, integrations, output: 'static'
├── package.json
├── tsconfig.json
├── public/                   # copied verbatim to dist/
│   ├── favicon.ico
│   ├── robots.txt
│   ├── CNAME
│   ├── google515ab47b1b58682a.html
│   └── images/               # all existing images, same paths
│       ├── facware/
│       ├── icons/
│       └── testimonial/
└── src/
    ├── styles/
    │   ├── global.css         # design tokens + reset + utilities
    │   ├── components/        # per-component scoped styles (optional)
    │   └── vendor/
    │       └── fontawesome-all.min.css
    ├── layouts/
    │   ├── BaseLayout.astro   # <html>, head, header, footer, skip link
    │   └── ProseLayout.astro  # BaseLayout + page-hero + .prose container
    ├── components/
    │   ├── Header.astro       # top-bar + nav (static shell)
    │   ├── NavToggle.astro    # hamburger island (client:load)
    │   ├── Footer.astro       # 4-col footer + copyright
    │   ├── ScrollTop.astro    # scroll-to-top button island
    │   ├── StatsStrip.astro   # 4-stat dl grid (static)
    │   ├── ServicesGrid.astro # 6 service cards (static)
    │   ├── StepsGrid.astro    # 3 HOW IT WORKS steps (static)
    │   ├── ProvenResults.astro# dark section + results list (static)
    │   ├── Testimonials.astro # carousel island (client:load)
    │   ├── LogoTicker.astro   # CSS-only ticker (static)
    │   ├── ContactCTA.astro   # gradient contact section (static)
    │   └── ContactForm.astro  # web3forms form island (client:load)
    └── pages/
        ├── index.astro        # landing page
        ├── contact.astro      # contact page
        ├── privacy-policy.astro
        └── terms-of-service.astro
```

---

## Migration Task List

### Phase 0 — Foundation
- [ ] **0.1** Init Astro project: `npm create astro@latest facware-astro -- --template minimal`
- [ ] **0.2** Configure `astro.config.mjs`: `output: 'static'`, `site: 'https://facware.com'`, add `@astrojs/sitemap`
- [ ] **0.3** Install dependencies: `@astrojs/sitemap`, FontAwesome (copy existing vendor CSS)
- [ ] **0.4** Copy all `assets/images/` → `public/images/` (preserve paths)
- [ ] **0.5** Copy `robots.txt`, `CNAME`, `google515ab47b1b58682a.html` → `public/`
- [ ] **0.6** Migrate `assets/css/facware-landing.css` → `src/styles/global.css` (adjust relative image paths from `../images/` to `/images/`)
- [ ] **0.7** Copy FontAwesome → `src/styles/vendor/fontawesome-all.min.css`; update font file references to `/fonts/webfonts/`
- [ ] **0.8** Verify dev server runs: `npm run dev`

### Phase 1 — Layout
- [ ] **1.1** Create `BaseLayout.astro` with:
  - Props: `title`, `description`, `canonicalURL`, `ogImage?`
  - Full `<head>` (meta, OG, Twitter Card, preconnect, preload, fonts)
  - `<Header />` and `<Footer />` slots
  - Skip link
  - Global CSS import
- [ ] **1.2** Create `Header.astro`:
  - Top bar announcement with configurable CTA href prop
  - Nav with links as props array or hardcoded
  - `<NavToggle />` island slot
- [ ] **1.3** Create `NavToggle.astro` (island, `client:load`):
  - Hamburger button with aria-expanded
  - Escape key / click-outside dismiss
- [ ] **1.4** Create `Footer.astro`:
  - 4-column grid (brand/address, Services, Quick Links, Support)
  - Dynamic copyright year via `new Date().getFullYear()`
  - Social links
- [ ] **1.5** Create `ProseLayout.astro`:
  - Extends `BaseLayout`
  - Dark `.page-hero` with breadcrumb slot
  - `.prose-section` + `.prose` wrapper

### Phase 2 — Landing Page Components
- [ ] **2.1** Create `StatsStrip.astro` — 4 stat items (static, data from props or hardcoded)
- [ ] **2.2** Create `ServicesGrid.astro` — 6 service cards; define card data as a typed array in the component frontmatter
- [ ] **2.3** Create `StepsGrid.astro` — 3 HOW IT WORKS steps
- [ ] **2.4** Create `ProvenResults.astro` — dark section with results list + image
- [ ] **2.5** Create `Testimonials.astro` (island, `client:load`):
  - Pure HTML/CSS shell renders on server
  - JS carousel logic (auto-advance, touch, dots, pause-on-hover) activates client-side
  - Define testimonial data as typed array in frontmatter
- [ ] **2.6** Create `LogoTicker.astro` — pure CSS `@keyframes` ticker; no JS
- [ ] **2.7** Create `ContactCTA.astro` — gradient section with trust sidebar + CTA button

### Phase 3 — Contact Page Components
- [ ] **3.1** Create `ContactForm.astro` (island, `client:load`):
  - All form fields (name, email, company, phone, service, message)
  - Web3Forms AJAX fetch pattern
  - Loading state, success/error result, 8s auto-hide
  - Honeypot `botcheck`
  - **Access key injected via `import.meta.env.PUBLIC_WEB3FORMS_KEY`** (env var, not hardcoded)
- [ ] **3.2** Create `ContactInfo.astro` — dark sidebar (email, location, response time, badge, social)

### Phase 4 — Pages
- [ ] **4.1** Build `src/pages/index.astro`:
  - Hero section (inline in page or Hero component)
  - Compose all Phase 2 components
  - Preserve all section IDs (`#facware_problem`, `#facware_services`, `#facware_features`, `#contact-us`)
- [ ] **4.2** Build `src/pages/contact.astro`:
  - Uses `BaseLayout`
  - Page hero + breadcrumb
  - `<ContactInfo />` + `<ContactForm />`
- [ ] **4.3** Build `src/pages/privacy-policy.astro`:
  - Uses `ProseLayout`
  - Full prose content (can be inline or loaded from a `.md` content collection)
- [ ] **4.4** Build `src/pages/terms-of-service.astro`:
  - Uses `ProseLayout`
  - Full prose content

### Phase 5 — SEO & Performance
- [ ] **5.1** Configure `@astrojs/sitemap` — auto-generates `sitemap.xml` at build
- [ ] **5.2** Add `<link rel="preload">` for hero image in `BaseLayout` (conditional by page)
- [ ] **5.3** Replace `<img>` tags for logos, avatars, icons with Astro's `<Image />` component (auto WebP + width/height)
- [ ] **5.4** Self-host Inter font (download WOFF2 files → `public/fonts/`) — eliminate Google Fonts external request
- [ ] **5.5** Inline critical CSS for above-the-fold content in `BaseLayout` `<head>` (hero, header, nav)
- [ ] **5.6** Add `<link rel="preconnect">` and `dns-prefetch` for web3forms API only on contact page
- [ ] **5.7** Validate Lighthouse scores: target LCP < 1.5s, CLS = 0, TBT = 0, Performance ≥ 95

### Phase 6 — Deployment
- [ ] **6.1** Configure deployment target:
  - **Option A:** GitHub Pages — add `.github/workflows/deploy.yml` with `withastro/action@v3`
  - **Option B:** Netlify — `netlify.toml` with `command = "npm run build"`, `publish = "dist"`
  - **Option C:** Vercel — zero config (Astro detected automatically)
- [ ] **6.2** Set env vars in deployment platform: `PUBLIC_WEB3FORMS_KEY=<your-key>`
- [ ] **6.3** Ensure `CNAME` in `public/` is present for custom domain (`facware.com`)
- [ ] **6.4** Test build output: `npm run build && npm run preview`
- [ ] **6.5** DNS cutover from current static files to new Astro-built output

### Phase 7 — Validation & Cleanup
- [ ] **7.1** Cross-browser test: Chrome, Firefox, Safari, Edge
- [ ] **7.2** Mobile test (360px, 390px, 414px, 768px breakpoints)
- [ ] **7.3** Accessibility audit: axe DevTools or Lighthouse accessibility ≥ 95
- [ ] **7.4** Broken link check
- [ ] **7.5** Form submission end-to-end test (verify email received in web3forms inbox)
- [ ] **7.6** Check `robots.txt` and `sitemap.xml` are served correctly at production URL
- [ ] **7.7** Remove old HTML files from repo root once Astro build is live

---

## Key Technical Decisions

### CSS Strategy
Keep `global.css` as a single imported stylesheet — consistent with the current approach and avoids CSS-in-JS overhead. Use Astro's `<style>` scoped blocks only for page-specific overrides (e.g., `.page-hero` on legal pages). No CSS framework.

### JS Islands Strategy
| Component | Island strategy | Reason |
|---|---|---|
| NavToggle | `client:load` | Must work immediately on page load |
| Testimonials | `client:load` | Auto-advance starts immediately |
| ContactForm | `client:load` | Form submit handler |
| ScrollTop | `client:idle` | Non-critical, can defer |
| IntersectionObserver | `client:idle` | Progressive enhancement |
| LogoTicker | None (CSS) | Pure animation |
| All other sections | None | Static HTML |

### Content Strategy
- Short-term: hardcode copy in `.astro` components (current state)
- Long-term: move service cards, testimonials, logos into **Astro Content Collections** (`.json` or `.md` files) — enables non-developer content updates without touching component code

### Environment Variables
```
PUBLIC_WEB3FORMS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```
Prefix `PUBLIC_` makes it available in client-side islands. Never commit the key.

---

## Future Enhancements (Post-Migration)
- [ ] Blog via Astro Content Collections (MDX support)
- [ ] Case studies page with real client results
- [ ] Spanish language version (`/es/`) via `i18n` routing
- [ ] View Transitions API for page-to-page animations
- [ ] Analytics (Plausible or Fathom — privacy-first)

---

## Reference Commands

```bash
# Create project
npm create astro@latest facware-astro -- --template minimal

# Add sitemap integration
npx astro add sitemap

# Dev server
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```
