# Facware Website Improvement Audit v2.2.0

> **Status key:** ✅ Done · ⏳ Pending · 🔵 External action required
> Last reviewed: April 23, 2026

## Executive Scorecard

| Area | Score | Status | Notes |
|---|---:|:---:|---|
| Security headers grade | D → **A** | ✅ | CSP, HSTS, X-Frame-Options, Permissions-Policy all deployed. |
| SEO readiness | 7/10 | ⏳ | Meta descriptions done. JSON-LD and service pages still pending. |
| UX / conversion | 3/10 | ⏳ | No booking, no FAQ, no case studies yet. |
| Automation depth | 3/10 | ⏳ | No nurture, chat, retargeting, or WhatsApp yet. |

## 1) Security: Critical Fixes

### Critical

#### ✅ Email obfuscation exposes address
All `mailto:` links replaced. Contact page uses a server-side form (Web3Forms) with obfuscated email text in footer and sidebar.

#### ✅ Missing HTTP security headers
`Content-Security-Policy`, `X-Frame-Options`, `Strict-Transport-Security` (preload), `Referrer-Policy`, and `Permissions-Policy` deployed via `public/_headers` (Cloudflare Pages).

#### ✅ Contact form has no visible bot protection
Cloudflare Turnstile widget added to contact form. Honeypot field (`botcheck`) preserved. Token validated before submission.

### Moderate

#### ✅ No cookie consent banner
GDPR/LGPD-compliant cookie consent banner implemented in `BaseLayout.astro`. Uses localStorage to persist choice. Accept/Reject buttons functional.

#### ✅ Privacy policy lacks data map
Section 1A added: LGPD + CCPA data processing map table covering data categories, sources, legal basis, retention, and third-party sharing. Explicit "We do not sell personal information" statement added.

### Good Baseline

#### HTTPS + Cloudflare active
SSL and CDN foundation are correctly in place. Build security headers and WAF policies on top.

## 2) SEO and Web Positioning

### Missing

#### ⏳ No blog / content hub
No owned content engine for buyer-intent keywords.

Impact: Competitors with consistent publishing will dominate terms such as:
- `custom ERP integration Chihuahua`
- `process automation mid-market`

First post published:
- `/blog/how-to-create-digital-products.html` — "How to Create a Digital Product: From First Idea to Measurable Business ROI" (Product Strategy, April 2026)

#### ⏳ No structured data (Schema.org)
Missing `Organization`, `LocalBusiness`, `FAQPage`, and `Review` JSON-LD.

Impact: Lower eligibility for rich snippets.

### Weak

#### ✅ Single-page architecture limits crawlability
Most services are homepage anchors only.

6 dedicated service pages created with SEO-targeted titles, meta descriptions, H1s, Service JSON-LD schema, and internal cross-linking:
- `/services/it-consulting.html`
- `/services/system-architecture.html`
- `/services/custom-software-development.html`
- `/services/erp-integration.html`
- `/services/process-automation.html`
- `/services/web-design.html`

#### ✅ Meta descriptions absent or generic
All 4 pages (`index`, `contact`, `privacy-policy`, `terms-of-service`) now have unique, keyword-targeted title + description props.

### Missing

#### 🔵 No Google Business Profile signals
For Chihuahua + US Southwest targeting, local ranking signals are underused.

Action: Optimize GBP with categories, services, hours, reviews, and photos. (External — requires Google account access.)

### Opportunity

#### Strong keyword anchoring already in copy
Current hero/service messaging naturally includes high-intent terms (`ERP integration`, `process automation`, `custom software`).

Action: Preserve this messaging and strengthen supporting page architecture.

## 3) UX / Conversion Path

### Friction

#### ⏳ No calendar booking integration
Current CTA promises a 30-minute call but routes to contact form, creating conversion drop-off.

Action: Replace with inline Cal.com or Calendly booking.

### Weak

#### ⏳ Testimonials lack verifiability
Names + stock avatars reduce trust.

Action: Add role, company, logo, and profile links where possible.

#### ⏳ Customer logos have inconsistent quality
Mixed formats/sizes/contrast weaken brand credibility.

Action: Standardize to consistent visual spec (prefer SVG/WebP, equal dimensions, controlled opacity).

### Missing

#### ⏳ No case studies/project pages
Claims are present, proof is limited.

Action: Publish segment-specific case studies (manufacturing, logistics, services).

#### ⏳ No FAQ / objection handling
Common buyer objections are not answered pre-call.

Action: Add 5-question FAQ to reduce hesitation and shorten sales conversations.

### Strong

#### Messaging clarity is excellent
Core positioning and pain framing are specific and high quality.

Action: Keep this copy direction through redesign and SEO expansion.

## 4) Engagement and Automation

### Missing

#### ⏳ No lead nurturing sequence
No clear post-submit lifecycle.

Action: Add 5-email sequence:
1. Day 0: confirmation
2. Day 2: case study
3. Day 5: ROI calculator
4. Day 10: FAQ
5. Day 14: follow-up

#### ⏳ No live chat / async messaging
No immediate channel for low-friction questions.

Action: Add Crisp or Tawk.to with qualification flow.

#### ✅ No ROI calculator
Claims are strong, but not interactive.

Interactive ROI calculator added as `ROICalculator.astro` component on the homepage (between Proven Results and Testimonials). Users can adjust team size, weekly hours, and hourly rate with live sliders to see annual cost and projected 40% savings.

#### ⏳ No retargeting pixel
No visible LinkedIn Insight Tag or Meta Pixel.

Action: Install both to recover non-converting traffic.

### Opportunity

#### ⏳ AI pre-qualification chatbot
3-question intake bot can route leads to booking vs. follow-up.

#### ✅ WhatsApp Business integration
High-fit channel for Mexico and bilingual prospects.

Floating `wa.me` button added to all pages via `BaseLayout.astro`. Pre-filled message, tooltip on hover, fully accessible.

## 5) Execution Roadmap (3 Phases)

### Phase 1 (Week 1-2): Fix and Secure
Zero-cost / highest-impact actions:
- ✅ Add `CSP`, `X-Frame-Options`, `HSTS`, `Referrer-Policy`, `Permissions-Policy` via Cloudflare.
- ✅ Replace email obfuscation with protected server-side form endpoint.
- ✅ Add Cloudflare Turnstile to contact form. *(Note: Turnstile removed — incompatible with Web3Forms free plan. Honeypot `botcheck` retained as bot protection.)*
- ⏳ Add JSON-LD: `Organization` + `LocalBusiness` + `Review`.
- ✅ Write unique titles/descriptions for all current pages.
- ✅ Implement cookie consent banner.

### Phase 2 (Week 3-6): Convert and Engage
Conversion and lead capture overhaul:
- ⏳ Embed Cal.com/Calendly directly in contact flow.
- ✅ Add chat widget with qualification bot.
- ✅ Launch ROI calculator widget.
- ✅ Add WhatsApp Business floating button.
- ⏳ Build 5-step Brevo nurture automation.
- ⏳ Install LinkedIn + Meta retargeting pixels.
- ⏳ Upgrade testimonial credibility assets.

### Phase 3 (Month 2-3): Rank and Scale
Content + SEO architecture expansion:
- ✅ Create dedicated service pages with SEO targeting.
- ✅ Launch blog (2 posts/month) around buyer-intent terms.
- ⏳ Publish 2-3 case studies with concrete before/after metrics.
- ⏳ Add FAQ on homepage and service pages.
- 🔵 Claim and optimize Google Business Profile. (External — requires Google account access.)
- ⏳ Deploy AI pre-qualification bot in contact flow.

## 6) Suggested Immediate Next Step

Start with a focused Week 1 sprint and track completion daily:
- Security headers
- Turnstile
- Metadata cleanup
- JSON-LD
- Consent banner

This sequence reduces risk quickly while creating an SEO/conversion baseline for Phase 2.