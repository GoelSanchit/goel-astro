# Goel Astro — ज्योतिष परामर्श

Premium Vedic Jyotish (Astrology) consultation website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- Dark mystical theme with gold accents
- Booking form with Google Sheets integration
- UPI payment flow with QR code
- WhatsApp integration for communication
- Mobile-first responsive design
- Smooth animations with Framer Motion
- Hindi + English bilingual content

## Tech Stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **Framer Motion** for animations
- **Lucide React** for icons
- **Google Sheets** as database (via Apps Script)

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Setup

See [SETUP.md](./SETUP.md) for complete setup instructions including:
- Google Sheets integration
- Google Apps Script deployment
- UPI QR code setup
- Vercel deployment

## Pages

- `/` — Home page with services, testimonials, FAQ
- `/book` — Booking form
- `/thank-you` — Payment instructions after booking
- `/contact` — Contact information

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

## Deploy to Vercel

Push to GitHub, import in Vercel, add environment variables, deploy.
