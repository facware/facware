# Facware Website

This repository contains the Facware website project.

## Project Structure

- `facware-astro/`: Main Astro project (source code, pages, components, build output).
- Root files/folders (`assets/`, `thank-you.html`, etc.): legacy/static assets and docs.

For local development, use the Astro app in `facware-astro`.

## Prerequisites

- Node.js 20 LTS recommended (Node.js 18.17+ minimum)
- npm (comes with Node.js)

Check versions:

```bash
node -v
npm -v
```

## Run Locally

From the repository root:

```bash
cd facware-astro
npm install
npm run dev
```

Then open the local URL shown in terminal (usually `http://localhost:4321`).

## Build for Production

```bash
cd facware-astro
npm run build
```

Build output is generated in:

- `facware-astro/dist/`

## Preview Production Build Locally

```bash
cd facware-astro
npm run preview
```

## Environment Variables

Create a `.env` file inside `facware-astro/` for form features:

```env
PUBLIC_WEB3FORMS_KEY=your_web3forms_public_key
PUBLIC_TURNSTILE_SITE_KEY=your_cloudflare_turnstile_site_key
```

Notes:

- Without `PUBLIC_WEB3FORMS_KEY`, contact form submissions will not work.
- Without `PUBLIC_TURNSTILE_SITE_KEY`, anti-spam Turnstile is not enabled.

## Useful Scripts

Run these inside `facware-astro/`:

- `npm run dev`: start local development server
- `npm run build`: create static production build
- `npm run preview`: preview built site locally
