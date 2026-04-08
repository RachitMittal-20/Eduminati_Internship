# Eduminati Boarding Guide 🎓

> Find and compare India's top 21 boarding schools — fees, facilities, curriculum, sports, and more.

**Live demo:** https://eduminati-boarding-guide.vercel.app

---

## About

Eduminati Boarding Guide is a fast, fully static web application that helps parents and students discover and compare premier boarding schools across India. It aggregates verified data on 21 schools — covering annual fees (₹5.3 L – ₹12.5 L+), curriculum types (CBSE, IB, ICSE, IGCSE, CIE, ISC), grades (3–12), sports, facilities, student ratings, and campus photos — all in one place.

No sign-up, no logins, no server round-trips. All data is bundled in the app itself.

---

## Features

- 🔍 **Live search** — Filter schools by name or city in real time
- ⚖️ **Side-by-side comparison** — Select up to 4 schools and compare 11 attributes in a table
- 🗂️ **Advanced filters** — Location, curriculum, fee range, grade level, sports
- 📋 **School detail modals** — Full profiles with facilities, teacher:student ratio, contact, and website
- 💰 **Fee calculator** — Estimate total cost for any grade range; download a `.txt` report
- 🖼️ **Virtual tours** — Photo gallery carousel with full-screen lightbox for each school
- 💬 **Testimonials** — Rotating carousel of parent and student reviews
- 📝 **Blog** — Articles on admissions, life skills, curriculum, finances, and sports
- 📧 **Contact form** — Enquiry form with subject categories
- 🌙 **Dark mode** — Full dark-mode support via Tailwind CSS `dark:` variants
- ⚡ **SEO ready** — Open Graph tags, JSON-LD structured data, XML sitemap, robots.txt

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| UI Primitives | Radix UI (Dialog, Tabs, Slot) |
| Component utilities | CVA, clsx, tailwind-merge |
| Icons | lucide-react |
| Fonts | Geist Sans / Geist Mono (next/font/google) |
| Image CDNs | Unsplash, Pexels |
| Hosting | Vercel (Node 18.x) |
| CI/CD | GitHub Actions |
| Linting | ESLint 9 + eslint-config-next |

---

## Getting Started

### Prerequisites

- Node.js **18.x** or **20.x**
- npm (bundled with Node)

### Install

```bash
git clone https://github.com/RachitMittal-20/Eduminati_Internship.git
cd Eduminati_Internship
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

The app requires **one optional public variable** (used for SEO/canonical URLs only):

| Variable | Example value | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://eduminati-boarding-guide.vercel.app` | Public URL for sitemap & Open Graph |

Create a `.env.local` file at the repo root to override for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

If deploying via GitHub Actions + Vercel, also add these as **repository secrets**:

| Secret | Description |
|---|---|
| `VERCEL_TOKEN` | Vercel personal access token |
| `VERCEL_ORG_ID` | Vercel organisation ID |
| `VERCEL_PROJECT_ID` | Vercel project ID |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx            Root layout (metadata, navigation, footer)
│   ├── page.tsx              Home page — all sections composed here
│   ├── globals.css           Tailwind base styles
│   └── sitemap.ts            XML sitemap generator
├── components/
│   ├── ui/                   Primitive components (Button, Card, Badge, Dialog…)
│   ├── navigation.tsx
│   ├── hero-section.tsx
│   ├── school-card.tsx
│   ├── filter-sidebar.tsx
│   ├── school-details-modal.tsx
│   ├── comparison-modal.tsx
│   ├── pricing-calculator.tsx
│   ├── virtual-tours.tsx
│   ├── testimonials-carousel.tsx
│   ├── blog-section.tsx
│   └── contact-form.tsx
└── lib/
    ├── schools-data.ts        Static data for 21 boarding schools
    ├── blog-data.ts           Blog articles
    ├── testimonials-data.ts   Testimonials
    └── utils.ts               cn(), formatCurrency(), formatFeeRange()
public/
└── schools/                   21 optimised .webp school photos
```

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server at `localhost:3000` |
| `npm run build` | Create optimised production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint (Next.js + TypeScript ruleset) |

---

## Deployment

The project is configured for **one-click deployment on Vercel**.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/RachitMittal-20/Eduminati_Internship)

Automatic deployment is also handled by the GitHub Actions workflow (`.github/workflows/deploy.yml`):

- Push to `main` → **production** deploy
- Push to `develop` or open a PR → **preview** deploy

The workflow runs `npm run lint` and `npm run build` on both Node 18.x and 20.x before deploying.

---

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add my feature'`
4. Push: `git push origin feature/my-feature`
5. Open a pull request targeting `main`

Please run `npm run lint` before submitting your PR.

---

## License

This project is private. All rights reserved © 2026 Eduminati.

---

## Contact

- **Email:** info@eduminati.com
- **Phone:** +91 90000 00000 (Mon–Fri, 9AM–6PM IST)
- **HQ:** Dehradun, Uttarakhand, India
- **Social:** [Twitter](https://twitter.com/eduminati) · [LinkedIn](https://linkedin.com/company/eduminati) · [Facebook](https://facebook.com/eduminati)
