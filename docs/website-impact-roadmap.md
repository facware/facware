# Facware Website Impact & Growth Roadmap

**Planning horizon:** 90 days  
**Primary owner:** Luis Raúl Espinoza — proof, brand, and final-publication approvals  
**Implementation owner:** Web/marketing implementer — production, publishing, reporting, and maintenance  
**Audience:** Operations, IT, engineering, and plant leaders at manufacturing, logistics, and mid-market businesses in Mexico and the US Southwest.

## 1. Objective and positioning

Turn Facware from a technically capable software provider into a recognized operations-focused software partner that consistently creates qualified assessment requests.

Use this positioning across the website, content, and outreach:

> Facware helps manufacturing, logistics, and growing businesses eliminate manual operations through automation, system integration, and custom software.

The website must lead with business outcomes—not technologies:

- Reduced operational cost and manual work
- Faster, more reliable processes
- Better operational visibility and decisions
- Connected ERP, CRM, warehouse, and financial systems
- Fixed, outcome-scoped engagements

### Scope decisions

- Improve the existing English-language website first; Spanish localization is a later, evidence-led expansion.
- Use GA4 and Google Search Console for measurement, respecting the existing consent banner.
- Treat public ratings, testimonials, client names, results, and time/cost/ROI claims as **unverified until documented and approved**.
- Do not publish invented case studies, customer logos, statistics, or technology-partner endorsements.
- Paid media, CRM selection, and a full visual redesign are out of scope for this 90-day roadmap.

## 2. Current-state findings

### Already implemented

- The homepage already uses outcome-led language, problem framing, assessment CTAs, a services section, process explanation, ROI calculator, testimonials, FAQ structured data, and a contact CTA.
- Six service pages, a product page, a contact form, privacy/terms pages, and an initial blog article exist.
- The contact form collects contact and service-interest data and routes through Web3Forms.
- The site has a consent UI that exposes a `facware:consent-updated` event, creating a suitable hook for consent-aware analytics.
- Local SEO foundations are present through Chihuahua/Mexico and US Southwest positioning, canonical URLs, metadata, sitemap integration, and organization structured data.

### Priority gaps

- There are no detailed, evidence-backed case-study pages or a case-study index, despite case studies being the highest-priority strategy recommendation.
- The site lacks a founder/personal-brand section for Luis, verified professional photo, personal-site link, and LinkedIn link.
- The current navigation and homepage have no sector-specific acquisition pages for manufacturing or logistics, nor dedicated pages for the strategy's priority service keywords.
- There is no downloadable resource, email-capture flow, automated delivery, newsletter signup, content calendar, webinar page, or outreach workflow.
- GA4 and Search Console are not configured in the site source, and there is no event taxonomy or KPI baseline.
- Existing numerical claims, aggregate rating, review markup, quoted testimonials, delivery-duration statements, and “fixed scope, guaranteed” language need an evidence and legal/brand approval review before they are promoted further.

## 3. Non-negotiable proof and measurement foundation

Complete these items before creating or amplifying proof-led marketing assets.

| Priority | Work | Owner | Dependency / required input | Definition of done |
| --- | --- | --- | --- | --- |
| P0 | Build a claim register | Luis | Client contracts, emails, deliverables, survey responses, and approval contacts | A private register identifies every public claim, source, owner, date, approval status, expiry/review date, and the exact pages using it. |
| P0 | Audit current public proof | Luis + implementer | Claim register | Every rating, named testimonial, result, delivery timeframe, client logo, and guarantee is marked verified, revised to a supportable qualitative claim, or removed. Align on-page copy and JSON-LD. |
| P0 | Define assessment conversion | Luis | Sales process and qualification criteria | “Free 30-minute operations assessment” consistently promises a process review, integration/automation opportunities, and an ROI estimate; the follow-up owner and response-time commitment are documented. |
| P0 | Configure GA4 and Search Console | Implementer | GA4 measurement ID, Search Console property verification method, privacy-policy approval | GA4 loads only after `facwareConsent.analytics` is true, consent changes are handled, Search Console is verified, sitemap is submitted, and privacy disclosures name the tools and purposes. |
| P0 | Establish event taxonomy and baseline | Implementer | GA4 access | Capture `cta_click`, `assessment_form_start`, `assessment_form_submit`, `lead_magnet_view`, `lead_magnet_submit`, `lead_magnet_download`, `newsletter_signup`, and `webinar_registration`. Record the first 30-day baseline for traffic, organic traffic, conversion rate, leads, qualified calls, proposals, wins, and revenue. |

### Claim approval rules

1. A quantitative result needs its calculation method, measurement period, and client approval.
2. A testimonial needs the customer’s approved wording, name/title/company display permission, and a dated approval record.
3. Aggregate rating and review schema may be published only when it reflects a genuine, traceable review source and complies with the relevant search-engine structured-data rules.
4. If proof cannot be approved, use an accurate non-numeric statement or omit it. Do not use placeholders as public customer proof.

## 4. 90-day prioritized backlog

### Days 1–30 — conversion and credibility foundation

#### Implementation status — updated November 11, 2026

| Status | Item | Notes |
| --- | --- | --- |
| ✅ Complete | Evidence-safe public copy | Unverified ratings, reviews, quantitative outcomes, delivery-time claims, guarantees, and customer-logo proof have been removed or rewritten on the homepage. |
| ✅ Complete | Assessment conversion baseline | The contact flow, one-business-day response expectation, and consistent assessment offer already exist. CTA wording is being standardized to “Book a free operations assessment.” |
| ✅ Complete | Consent-ready analytics integration | The site supports optional GA4 through `PUBLIC_GA_MEASUREMENT_ID`, Google verification through `PUBLIC_GOOGLE_SITE_VERIFICATION`, and consent-gated CTA/form events. Credentials are still required to activate data collection. |
| ✅ Complete | Claim-register and content templates | Private templates below provide the approval workflow and examples without placing invented material on the public site. |
| ✅ Complete | Buyer education content | Four generic, non-client-specific Phase 1 articles are published in the blog: automation signs, automation ROI, ERP integration challenges, and CRM/ERP synchronization. |
| ⚠ Input needed | GA4 and Search Console activation | Luis must supply the GA4 measurement ID and choose the Search Console verification method/value. See `.env.example`. |
| ⚠ Input needed | Three case studies | Luis must provide approved client facts and permissions. Use `docs/case-study-template.md`; its example is fictional and must never be published. |
| ⚠ Input needed | Founder profile | Luis must provide an approved headshot, 80–120 word bio, personal-site URL, and preferred LinkedIn URL. Use `docs/founder-profile-template.md`. |
| ⚠ Input needed | Existing proof approval | Luis must complete `docs/claim-register-template.md` before ratings, testimonials, logos, or quantified results return to the site. |

| Priority | Deliverable | Owner | Required inputs | Definition of done / success signal |
| --- | --- | --- | --- | --- |
| P0 | Complete proof and measurement foundation | Luis + implementer | Items in section 3 | Claim register approved; analytics and Search Console live; baseline report saved. |
| P0 | Publish three verified case studies | Luis supplies proof; implementer produces | Client permission, challenge, solution, screenshots/diagrams where allowed, measured outcomes | Create a case-study index and three detail pages. Every page includes client profile/industry, challenge, solution, implementation scope, results, testimonial if approved, and an assessment CTA. Track case-study CTA clicks. |
| P0 | Update homepage credibility and conversion path | Implementer; Luis approves | Verified proof, professional photo, biography, LinkedIn and personal-site URLs | Add a trust section immediately below the hero: 13+ years, enterprise experience, manufacturing/logistics experience, and verified technology expertise. Add a “Meet Luis Espinoza” section with approved photo, leadership background, industries served, and links. Add a “View case studies” CTA only after the index exists. |
| P0 | Standardize assessment CTAs | Implementer | Approved assessment wording | Use one primary CTA label and promise across header, homepage, services, case studies, articles, and contact page; retain service-specific context only where useful. Confirm every CTA reaches the contact form or a future booking flow. |
| P1 | Publish four buyer-focused articles | Luis approves; implementer writes/publishes | Subject-matter input and approved examples | Publish one per week: automation warning signs, automation ROI, ERP integration challenges, and data synchronization/CRM integration. Each article has a target keyword, title/meta description, internal links to its relevant service page, and assessment CTA. |
| P1 | Improve conversion hygiene | Implementer | GA4 baseline | Test all forms and CTA links; add source/landing-page context to lead notifications if supported; ensure success/error states are accessible; document lead handoff and one-business-day response target. |

### Days 31–60 — SEO authority and lead capture

| Priority | Deliverable | Owner | Required inputs | Definition of done / success signal |
| --- | --- | --- | --- | --- |
| P0 | Publish sector and solution landing pages | Implementer; Luis approves | Keyword mapping, verified proof, service scope | Publish: `/manufacturing-software-solutions`, `/logistics-software-solutions`, `/erp-integrations`, `/business-process-automation`, `/cloud-modernization`, `/software-architecture-consulting`, and `/devops-consulting`. Each page addresses a specific audience/problem, outcomes, relevant proof, process, FAQs, internal links, unique metadata, and assessment CTA. Do not duplicate service-page text. |
| P0 | Publish one gated lead magnet | Luis supplies expertise; implementer produces | Final copy, design/brand approval, privacy wording, email delivery destination | Start with **“10 Hidden Operational Cost Drivers That Automation Can Eliminate.”** Create its landing page, short email form, confirmation state, protected/downloadable PDF, consent language, event tracking, and delivery/follow-up process. Queue the ERP checklist and spreadsheet guide as future assets. |
| P1 | Launch newsletter operations | Luis owns editorial approval; implementer configures | Email service/provider choice, sender identity, unsubscribe mechanism, privacy update | Name the newsletter **Operational Technology Insights**. Establish a twice-monthly template: industry insight, Facware article, real-world lesson, and tool recommendation. Include explicit subscription consent, unsubscribe capability, and a test-send checklist. |
| P1 | Publish four additional articles | Luis approves; implementer writes/publishes | Topic input | Publish: Azure for manufacturing, AWS migration strategy, cloud modernization roadmap, and technical debt / monolith-versus-microservices. Each supports one new landing page with intentional internal links. |
| P1 | Begin LinkedIn distribution | Luis | Updated LinkedIn positioning and content approvals | Update profile framing from senior engineer to technology consultant/business problem solver. Publish two posts each week: Monday lesson learned and Wednesday mini case study or operational insight; reuse each website article once. Track profile views, engagement, and inbound inquiries. |

### Days 61–90 — optimization and repeatable growth

| Priority | Deliverable | Owner | Required inputs | Definition of done / success signal |
| --- | --- | --- | --- | --- |
| P0 | Review funnel performance and optimize | Implementer; Luis decides changes | 30–60 days of GA4, Search Console, and sales data | Produce a page-by-page report. Prioritize the highest-traffic pages with weak CTA/form conversion, improve one hypothesis at a time, and record before/after results. |
| P0 | Launch one educational webinar | Luis presents; implementer promotes | Topic, date, registration/delivery platform, slide approval | Start with **“Reducing Manual Work with Automation.”** Publish a registration page, confirmation/reminder flow, consent language, event tracking, and follow-up CTA to the assessment. Repurpose questions into future articles/posts. |
| P1 | Run targeted connection and outreach workflow | Luis | Target-account list and approved message | Add up to 50 relevant connections weekly: operations managers, IT directors, plant managers, and owners in target industries. Personalize the first message around process improvement; do not automate unsolicited bulk messaging. Log replies, calls, and influenced opportunities. |
| P1 | Publish four additional articles | Luis approves; implementer writes/publishes | Webinar questions and subject-matter input | Publish articles based on the highest-intent Search Console queries, webinar questions, and sales objections. Use at least one case-study-derived lesson after approval. |
| P1 | Collect five new approved testimonials | Luis | Customer list and outcome data | Request outcome, time saved, cost reduced, and ROI achieved. Store approvals in the claim register; publish only approved quotes. |
| P1 | Review SEO technical quality | Implementer | Search Console and crawl results | Fix indexation, metadata, sitemap, canonical, broken-link, and Core Web Vitals issues found; re-submit important changed pages for indexing. |

## 5. Content and SEO operating model

### Keyword-to-page map

| Intent | Primary page or content cluster |
| --- | --- |
| Custom Software Development Mexico; Software Development Chihuahua; Software Consultant Chihuahua; IT Consulting Chihuahua; Custom Software Mexico | Homepage, IT consulting, custom software, and local-business proof sections |
| ERP Integration Services; System Integration Services | ERP integrations landing page, ERP service page, ERP checklist, integration articles |
| Manufacturing Software Solutions | Manufacturing landing page, manufacturing case study, Azure/manufacturing article |
| Warehouse Automation Software | Logistics landing page, warehouse/inventory use cases, logistics case study |
| Business Process Automation | Automation landing page, process automation page, automation ROI articles |
| Azure Development Services; AWS Development Services | Cloud modernization landing page and cloud article cluster |
| Software architecture and DevOps consulting | Dedicated landing pages plus architecture and technical-debt articles |

### Publishing checklist

For every new landing page, article, lead-magnet page, case study, and webinar page:

1. Select one primary buyer intent and keyword cluster; avoid competing pages for the same intent.
2. Write a unique title, meta description, canonical URL, clear H1, descriptive headings, and relevant image alt text.
3. Add internal links to the relevant service/sector page, proof asset where appropriate, and assessment CTA.
4. Use only approved claims, customer references, and structured data.
5. Verify mobile layout, keyboard access, page speed, form/CTA behavior, analytics events, and production metadata before publishing.
6. Add the page to the sitemap through the Astro build, request indexing in Search Console when appropriate, and schedule its LinkedIn distribution.

## 6. Reporting and review cadence

### Weekly

- Publish or prepare one article; distribute the current article on LinkedIn.
- Review assessment leads, response time, qualified-call outcomes, and content-production blockers.
- Verify any new claims or testimonials before they enter public drafts.

### Monthly

- Compare traffic, organic traffic, conversion rate, assessment leads, lead-magnet conversions, qualified calls, proposals, wins, and revenue to the baseline.
- Review Search Console impressions, clicks, queries, pages, indexation, and technical warnings.
- Review LinkedIn followers, profile views, engagement, and inbound inquiries.
- Choose the next month’s content from buyer questions, sales objections, high-impression/low-click queries, and best-performing sector pages.

### 90-day success review

The roadmap is complete when:

- Three evidence-backed case studies and five additional approved testimonials are available.
- All seven sector/solution landing pages, one lead magnet, twelve articles, a newsletter flow, and one webinar funnel are live.
- GA4, Search Console, and consent-aware conversion events produce a usable baseline and ongoing report.
- All promoted public proof has an approval record, and unsupported claims have been removed or rewritten.
- Facware can identify which pages, topics, channels, and offers produce qualified assessment requests and can prioritize the next quarter from that data.
