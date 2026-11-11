# Facware Website

This repository contains the Facware static website, built with Astro 5 and deployed to GitHub Pages.

## Requirements

- Node.js 20 LTS (Node.js 18.17 or newer is supported by Astro)
- npm

## Local development

Install dependencies and start the development server from the repository root:

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The production output is written to `dist/`. Static files in `public/` are copied unchanged to that output, including the GitHub Pages CNAME, security headers, robots file, and Google verification file.

## Environment variables

Copy `.env.example` to `.env` when configuring form integrations:

```env
PUBLIC_WEB3FORMS_KEY=your_web3forms_public_key
PUBLIC_TURNSTILE_SITE_KEY=your_cloudflare_turnstile_site_key
```

Without `PUBLIC_WEB3FORMS_KEY`, contact form submissions are unavailable. Without `PUBLIC_TURNSTILE_SITE_KEY`, Turnstile spam protection is disabled.

### GitHub Pages deployment variables

The GitHub Pages workflow reads public build-time identifiers from GitHub Actions repository variables. Configure these in **Settings → Secrets and variables → Actions → Variables**:

```text
PUBLIC_GTM_CONTAINER_ID=GTM-KZKT3WMC
PUBLIC_GOOGLE_SITE_VERIFICATION=your-search-console-verification-value
```

These identifiers are intentionally included in the deployed HTML/JavaScript and therefore must not be stored as secrets. Google Tag Manager only loads after a visitor accepts analytics cookies. In the GTM workspace, create and publish a Google tag using your existing GA4 measurement ID (`G-…`); do not add a second direct GA4 snippet to the site. Keep the Web3Forms and Turnstile values configured as GitHub Actions secrets.

## Deployment

Pushing to `master` runs the GitHub Actions workflow, builds the repository root, and publishes `dist/` to GitHub Pages.
