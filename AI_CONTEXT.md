# Facware — AI Agent Context

> This file is the single source of truth for AI agents working on this codebase.  
> Read this first before touching any file. Update this file whenever significant decisions are made.  
> Last updated: April 17, 2026.

---

## 1. Business Context

### Who is Facware?
Facware is a **custom software and systems integration company** based in Chihuahua, Mexico. It serves mid-market businesses in Mexico and the US Southwest (primarily US-Mexico border region). The company is small/boutique — one accountable team per engagement.

### Ideal Customer Profile (ICP)
- **Company size:** 20–200 employees (mid-market, not enterprise, not startup)
- **Revenue stage:** $2M–$50M/yr
- **Geography:** Mexico (Chihuahua, CDMX, Monterrey) and US Southwest (Texas, New Mexico, Arizona, California)
- **Pain:** Running 3+ disconnected software tools; significant manual data entry/reconciliation; previously hired agencies that failed to deliver
- **Buyer persona:** Operations Director, CFO, or founder/CEO who is technical enough to understand the problem but not the solution

### Value Proposition
> "We eliminate the integration tax — the hidden cost of duct-taped software — by building purpose-built systems that reduce manual operations by 40%+ for mid-market businesses."

Three differentiators:
1. **Fixed-scope, fixed-price** — scoped to a defined business outcome, not hours or sprints
2. **Outcome accountability** — one team from kickoff to production, no hand-offs
3. **Regional expertise** — understands US-Mexico cross-border operational context

### Services (6 total)
1. IT Consulting
2. System Architecture Design
3. Custom Software Development
4. System & Data Integrations
5. Process Automation
6. Web Design & Conversion

### Key Stats (used in copy)
- 40%+ reduction in manual operational hours post-integration
- 2× faster delivery vs. comparable US agencies
- 4.6/5.0 client satisfaction rating
- 100% outcome-scoped engagements

---

## 2. Current Technical Stack

### Overview
The current site is a **production-ready static HTML site** — no framework, no build tool. It was rewritten from scratch (from a Bootstrap template) to semantic HTML5 + custom CSS + vanilla JS.

### Files
| File | Purpose |
|---|---|
| `index.html` | Main landing page (~500 lines) |
| `contact.html` | Dedicated contact page with web3forms AJAX form |
| `privacy-policy.html` | Privacy policy (GDPR-aware, 13 sections) |
| `terms-of-service.html` | Terms of service (14 sections, fixed-price model, Chihuahua governing law) |
| `assets/css/facware-landing.css` | Full production stylesheet (~900 lines) |
| `assets/css/vendor/fontawesome-all.min.css` | FontAwesome 5 icons |
| `robots.txt` | Standard crawl rules |
| `sitemap.xml` | Manual sitemap (must be kept in sync) |
| `CNAME` | GitHub Pages custom domain → `facware.com` |

### CSS Architecture
- **Methodology:** CSS Custom Properties (design tokens) + no framework
- **Single stylesheet:** `assets/css/facware-landing.css`
- **Critical CSS:** Inlined `<style>` in each page `<head>` for above-the-fold FCP
- **Responsive:** Mobile-first, breakpoints at 992px and 600px
- **No:** Bootstrap, Tailwind, Sass, CSS Modules, CSS-in-JS

### JavaScript
- **No framework.** All vanilla JS, IIFE-wrapped `(function(){ 'use strict'; ... }())`
- **Behaviors:**
  - Nav toggle (hamburger)
  - Header shadow on scroll
  - Testimonials carousel (auto-advance every 6s, touch swipe, keyboard dots, pause on hover/focus)
  - Logo ticker (pure CSS `@keyframes ticker`)
  - Scroll-to-top button (visible after 400px scroll)
  - Copyright year (dynamic via `new Date().getFullYear()`)
  - IntersectionObserver animations (`.animate-on-scroll` → `.in-view`)
  - Web3Forms AJAX form submission (`fetch` POST to `https://api.web3forms.com/submit`)

---

## 3. Design System

### Brand Colors
```css
--primary:       #086AD8   /* Facware blue — CTAs, links, accents */
--primary-dark:  #065bb8   /* Hover state */
--primary-light: #e8f1fc   /* Backgrounds, badges */
--text:          #1a1a2e   /* Dark navy — headings, body */
--text-muted:    #5a6378   /* Secondary text, captions */
--bg:            #ffffff   /* Default background */
--bg-gray:       #f8f9fa   /* Alternate section background */
--bg-dark:       #1a1a2e   /* Dark sections (hero, results, contact sidebar) */
--border:        #e2e8f0   /* Subtle borders */
--star:          #f59e0b   /* Testimonial star rating */
--green:         #4ade80   /* Checkmarks, success states */
```

### Typography
- **Font:** Inter (Google Fonts), weights 400 / 500 / 600 / 700 / 800
- **Base size:** 16px
- **Line height:** 1.65 (body), 1.2 (headings)
- **H1:** `clamp(2rem, 5vw, 3.2rem)`, weight 800
- **H2:** `clamp(1.7rem, 3.5vw, 2.6rem)`, weight 700
- **H3:** `clamp(1rem, 2vw, 1.15rem)`, weight 700
- **Section eyebrow:** 11px, uppercase, letter-spacing 2.5px, `--primary` color
- **Anti-aliasing:** `-webkit-font-smoothing: antialiased`

### Border Radius
- Default cards/inputs: `--radius: 10px`
- Large cards/modals: `--radius-lg: 18px`

### Shadows
- Default: `0 2px 16px rgba(0,0,0,0.07)`
- Hover/elevated: `0 8px 40px rgba(0,0,0,0.11)`

### Buttons
```html
<!-- Primary (blue fill) -->
<a href="#" class="btn btn-primary">Label &rarr;</a>

<!-- White outline (on dark backgrounds) -->
<a href="#" class="btn btn-outline-white">Label</a>

<!-- Large variant -->
<a href="#" class="btn btn-primary btn-lg">Label &rarr;</a>
```

### Icons
FontAwesome 5 Free (`fas`, `fab`, `far` prefixes). Loaded from `assets/css/vendor/fontawesome-all.min.css`. Always use `aria-hidden="true"` on decorative icon elements.

---

## 4. Page Architecture

### Landing Page (`index.html` / `index.astro`)
Sections in order:
1. **Skip link** (accessibility)
2. **Header:** Top bar announcement + sticky nav (logo, 3 links, CTA button)
3. **Hero:** Full-bleed dark image with gradient overlay, H1, subheading, 2 CTA buttons
4. **Stats strip:** 4-stat `<dl>` grid (40%+, 2×, 4.6/5.0, 100%)
5. **Problem section** `#facware_problem`: 3 cards (pain points)
6. **Services section** `#facware_services`: 6 cards (service offering)
7. **How It Works** `#facware_features`: 3-step ordered grid
8. **Proven Results:** Dark section, results list + image
9. **Testimonials:** Carousel (4 slides, auto-advance)
10. **Logo ticker:** 10 client logos, CSS-only infinite scroll
11. **Contact CTA** `#contact-us`: Gradient section, trust sidebar + CTA
12. **Footer:** 4-col (brand+address, Services, Quick Links, Support)
13. **Scroll-to-top button**

### Contact Page (`contact.html` / `contact.astro`)
- Page hero (dark, breadcrumb)
- 2-col grid: dark info sidebar (left) + white form card (right)
- Web3forms AJAX form (name, email, company, phone, service dropdown, message)
- Responsive: stacks to 1-col at 900px

### Legal Pages (`privacy-policy.html`, `terms-of-service.html`)
- Same header/footer as other pages
- Dark page-hero + breadcrumb
- `.prose` container (max-width 780px, centered)
- Inline `<style>` for prose-specific CSS (`.page-hero`, `.breadcrumb`, `.prose-section`, `.prose`, `.last-updated`, `.highlight-box`)

---

## 5. Content & Copy Guidelines

### Tone
- Direct, confident, outcome-focused
- No jargon, no hype ("we leverage synergies" = never)
- Technical buyers respect specificity: use real numbers ($30K–$80K/yr in saved labor, 6 weeks delivery)
- Plain language. Short sentences. Active voice.

### Key phrases (use verbatim in copy)
- "integration tax" — the signature concept
- "outcome-scoped" — distinguishes from hourly/retainer agencies
- "40%+ reduction in manual ops"
- "fixed scope, fixed price"
- "no pitch deck. No commitment."
- "one team, one point of accountability"

### What to avoid
- "innovative", "cutting-edge", "synergy", "leverage", "paradigm"
- Passive voice on CTAs
- Vague claims without numbers
- Mentioning competitors by name

---

## 6. Integrations

### Web3Forms (contact form)
- **API endpoint:** `https://api.web3forms.com/submit`
- **Method:** POST, JSON body, `Accept: application/json` header
- **Required field:** `access_key` (get from `https://app.web3forms.com/`)
- **⚠️ Current state:** `contact.html` still contains `YOUR_ACCESS_KEY_HERE` — must be replaced
- **Optional fields used:** `subject`, `from_name`
- **Spam protection:** `botcheck` checkbox (hidden from users, visible to bots)
- **Error handling:** Network failure falls back to `mailto:contact@facware.com` link
- **In Astro:** Key should be stored as `PUBLIC_WEB3FORMS_KEY` env var

### Email
- **Primary contact:** `contact@facware.com`
- **Appears in:** footer address, contact page info, form fallback error, trust list on index.html contact section

### Social
- **Facebook:** `https://www.facebook.com/facware`
- **LinkedIn:** `https://www.linkedin.com/company/18322494/`

---

## 7. Asset Inventory

### Images (all under `assets/images/` or `public/images/` in Astro)
| Path | Usage |
|---|---|
| `facware/home_logo.png` (160×48) | Header + footer logo |
| `facware/favicon_facware.png` | Favicon |
| `facware/business_solutions_home.jpg` | Hero background (LCP — preload) |
| `facware/resources_facware.png` | Proven Results section image |
| `facware/customers/festa.png` | Logo ticker |
| `facware/customers/grammarschool.jpg` | Logo ticker |
| `facware/customers/scrapadvisor.png` | Logo ticker |
| `facware/customers/proffer.png` | Logo ticker |
| `facware/customers/sista.png` | Logo ticker |
| `facware/customers/vikingsdrywall.png` | Logo ticker |
| `facware/customers/partyzone.png` | Logo ticker |
| `facware/customers/buildbinder.png` | Logo ticker |
| `facware/customers/3pillar_logo.jpeg` | Logo ticker |
| `facware/customers/tiempo_development.jpeg` | Logo ticker |
| `icons/mitech-box-image-style-05-image-01-60x60.webp` | Service card 1 icon |
| `icons/mitech-box-image-style-05-image-02-60x60.webp` | Service card 2 icon |
| `icons/mitech-box-image-style-05-image-03-60x60.webp` | Service card 3 icon |
| `icons/mitech-box-image-style-05-image-04-60x60.webp` | Service card 4 / problem card 1 icon |
| `icons/mitech-box-image-style-05-image-05-60x60.webp` | Service card 5 / problem card 2 icon |
| `icons/mitech-box-image-style-05-image-06-60x60.webp` | Service card 6 / problem card 3 icon |
| `testimonial/Facware-testimonial-avata-01-90x90.webp` | Testimonial 4 avatar |
| `testimonial/Facware-testimonial-avata-02-90x90.webp` | Testimonial 1 avatar |
| `testimonial/Facware-testimonial-avata-03-90x90.webp` | Testimonial 2 avatar |
| `testimonial/Facware-testimonial-avata-04-90x90.webp` | Testimonial 3 avatar |

---

## 8. SEO Configuration

### Meta per page
| Page | Title | Description |
|---|---|---|
| index | Facware — Custom Software & Integrations for Mid-Market Operations | "Facware eliminates the integration tax... reduce manual operations by 40%+" |
| contact | Contact Us — Facware | "Get in touch... Book a free 30-min operations assessment" |
| privacy-policy | Privacy Policy — Facware | "Learn how Facware collects, uses, and protects your personal information" |
| terms-of-service | Terms of Service — Facware | "Review Facware's Terms of Service..." |

### OG Image
- All pages reference: `https://facware.com/assets/images/facware/og-image.jpg`
- ⚠️ **This file does not exist yet** — needs to be created (1200×630px)

### Canonical URL
- `https://facware.com/` (index)
- `https://facware.com/contact.html` (or `/contact` in Astro)
- `https://facware.com/privacy-policy.html`
- `https://facware.com/terms-of-service.html`

### Structured Data (not yet implemented — opportunity)
- `Organization` schema on homepage
- `ContactPage` schema on contact page

---

## 9. Accessibility Standards

- WCAG AA compliant
- All images have `alt` text (decorative images use `alt=""`)
- All interactive elements have `aria-label` or visible text labels
- Skip link: `<a href="#main-content" class="skip-link">`
- Focus styles: `outline: 3px solid #086AD8; outline-offset: 3px`
- Carousel: `role="region"`, `aria-label`, `aria-selected` on dots
- Form: all inputs have associated `<label>`, required fields marked with aria
- Reduced motion: `@media (prefers-reduced-motion: reduce)` pauses logo ticker animation

---

## 10. Deployment

- **Platform:** GitHub Pages (current)
- **Custom domain:** `facware.com` (CNAME file in repo root)
- **Repo:** Contains source files + built output (no CI/CD yet)
- **Target (post-migration):** GitHub Actions workflow using `withastro/action@v3`, or migrate to Netlify/Vercel for better preview deploys

---

## 11. Known Issues & Pending Work

| # | Issue | Status |
|---|---|---|
| 1 | Web3forms `access_key` in `contact.html` is still `YOUR_ACCESS_KEY_HERE` | ⚠️ Needs user action |
| 2 | OG image `og-image.jpg` referenced but doesn't exist | ❌ Missing |
| 3 | `sitemap.xml` is manually maintained — must update when pages change | ⚠️ Manual |
| 4 | `resources/` folder contains old Bootstrap template HTML files — unused | 🗑️ Can be removed |
| 5 | `old_site/` folder in repo root — legacy, should be cleaned up | 🗑️ Can be removed |
| 6 | Top-bar CTA on `terms-of-service.html` and `privacy-policy.html` still links to `index.html#contact-us` instead of `contact.html` | ✅ Known, low priority |
| 7 | Nav CTA button on legal pages links to `index.html#contact-us` instead of `contact.html` | ⚠️ Should update |

---

## 12. Decision Log

| Date | Decision | Reason |
|---|---|---|
| Prior session | Rewrote from Bootstrap template to semantic HTML5 + custom CSS | Performance, credibility as software engineering company |
| Prior session | Single CSS file (`facware-landing.css`) instead of per-component files | Simpler for static HTML; revisit in Astro migration |
| Prior session | Removed `reveal-footer` class | Fixed fixed-position footer rendering bug |
| Prior session | Inline critical CSS in `<head>` | FCP/LCP performance optimization |
| This session | Created `contact.html`, `privacy-policy.html`, `terms-of-service.html` | Complete site structure |
| This session | Web3Forms for contact form | Free tier, no server-side code needed, AJAX-capable |
| This session | Chose Astro for migration target | Static-first, zero JS by default, marketing site scale, performance |

---

## 13. Quick Reference

### HTML patterns used consistently
```html
<!-- Section with anchor -->
<section class="section" id="facware_services" aria-labelledby="services-heading">
  <div class="container">
    <header class="section-header text-center">
      <p class="section-eyebrow">Eyebrow Label</p>
      <h2 id="services-heading">Heading with <span class="text-primary">blue accent</span></h2>
    </header>
    <!-- content -->
  </div>
</section>

<!-- Card -->
<article class="card">
  <div class="card-icon">
    <img src="..." width="60" height="60" alt="" loading="lazy">
  </div>
  <h3 class="card-title">Title</h3>
  <p class="card-text">Body text.</p>
</article>

<!-- Primary CTA button -->
<a href="contact.html" class="btn btn-primary">Label &rarr;</a>
```

### Section ID anchors (do not change these — used in all nav links)
- `#facware_problem` — Problem section
- `#facware_services` — Services section
- `#facware_features` — How It Works section
- `#contact-us` — Contact CTA section (on index.html only)

### Footer link structure
All pages share identical footer with these links:
- **Services nav:** `#facware_services`, `#facware_features` (relative on index, prefixed with `index.html` on other pages)
- **Quick Links:** `terms-of-service.html`, `privacy-policy.html`, `contact.html`
- **Support:** `#` (FAQ placeholder), `contact.html`, `#` (Cookies placeholder)
