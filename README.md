# Eduminati Boarding Guide

> Discover and compare India's top boarding schools — all in one place.

Eduminati Boarding Guide is a **Next.js** web application that helps students and parents find, compare, and explore India's top 21 boarding schools. The platform offers detailed school profiles, side-by-side comparison, fee calculators, virtual tour galleries, student testimonials, and a contact form — making the boarding school selection process straightforward and well-informed.

---

> **⚠️ Disclaimer**
> The images used are illustrative/placeholder and not real school images due to lack of access. This project is a prototype/MVP for how the final website should look after full development.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔍 **Advanced Search** | Search schools by name, city, or state in real time |
| 🎛️ **Multi-Criteria Filtering** | Filter by location, curriculum (CBSE / IB / ICSE / CIE), fee range, grade range, and sports |
| ⚖️ **School Comparison** | Select up to 4 schools and compare them side-by-side in a detailed table (fees, rating, ratio, sports, etc.) |
| 📋 **School Details Modal** | Tabbed modal with full information — overview, facilities, academics, sports, and photo gallery |
| 💰 **Pricing / Fee Calculator** | Estimate the total cost of boarding school education |
| 🖼️ **Virtual Tours** | Explore school campuses through curated photo galleries |
| 💬 **Testimonials Carousel** | Authentic student and parent reviews |
| 📝 **Blog Section** | Educational articles on boarding school topics |
| 📬 **Contact Form** | Reach out for personalised recommendations |
| 🌙 **Dark Mode** | Full dark mode support across all pages |
| 📱 **Responsive Design** | Mobile-first layout that works on all screen sizes |
| 🗺️ **SEO & Structured Data** | JSON-LD schema, Open Graph tags, sitemap, and optimised metadata |

---

## 🛠️ Tech Stack

### Core
| Layer | Technology |
|---|---|
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Runtime** | [Node.js 18+](https://nodejs.org/) |
| **Framework** | [Next.js 16.2.1](https://nextjs.org/) (App Router) |
| **UI Library** | [React 19](https://react.dev/) |

### Styling & Components
| Tool | Purpose |
|---|---|
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first CSS framework |
| [Radix UI](https://www.radix-ui.com/) | Accessible headless components (Dialog, Tabs, Slot) |
| [class-variance-authority](https://cva.style/) | Variant-based component styling |
| [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | Conditional class composition |
| [Lucide React](https://lucide.dev/) | SVG icon library |
| [Geist Font](https://vercel.com/font) | Google Font via `next/font` |

### Tooling
| Tool | Purpose |
|---|---|
| [ESLint 9](https://eslint.org/) + `eslint-config-next` | Linting |
| [@tailwindcss/postcss 4](https://tailwindcss.com/docs/installation/using-postcss) | PostCSS integration for Tailwind |
| [web-vitals](https://github.com/GoogleChrome/web-vitals) | Real-user performance monitoring |
| [npm](https://www.npmjs.com/) | Package manager |

### Deployment
| Platform | Details |
|---|---|
| [Vercel](https://vercel.com/) | Hosting & CI/CD (`vercel.json` configured) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or later — [download](https://nodejs.org/)
- **npm** v9+ (bundled with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/RachitMittal-20/Eduminati_Internship.git
cd Eduminati_Internship

# 2. Install dependencies
npm install
```

### Running Locally (Development)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app supports hot reloading.

### Building for Production

```bash
npm run build
```

The optimised output is written to `.next/`.

### Starting the Production Server

```bash
npm start
```

Serves the built application at [http://localhost:3000](http://localhost:3000).

---

## 🔑 Environment Variables

Create a `.env.local` file at the project root (it is git-ignored by default):

```env
# Public base URL used for Open Graph, sitemaps, and canonical links
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

| Variable | Required | Default | Description |
|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Recommended | `https://eduminati-boarding-guide.vercel.app` | The canonical URL of the deployed site |

> **Note:** No secret or server-side API keys are required for local development. The project uses static data from `src/lib/`.

---

## 📁 Project Structure

```
Eduminati_Internship/
├── public/
│   └── schools/              # School images (.webp)
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout — Navigation, fonts, SEO metadata, footer
│   │   ├── page.tsx          # Home page — search, filter, school grid, comparison
│   │   ├── globals.css       # Global CSS (Tailwind base + custom variables)
│   │   └── sitemap.ts        # Dynamic XML sitemap
│   ├── components/
│   │   ├── navigation.tsx        # Top navigation bar
│   │   ├── hero-section.tsx      # Landing hero with search input
│   │   ├── school-card.tsx       # Individual school card
│   │   ├── filter-sidebar.tsx    # Multi-criteria filter panel
│   │   ├── comparison-modal.tsx  # School comparison component
│   │   ├── school-details-modal.tsx  # Tabbed school details modal
│   │   ├── testimonials-carousel.tsx # Reviews carousel
│   │   ├── pricing-calculator.tsx    # Fee/cost estimator
│   │   ├── virtual-tours.tsx         # Campus photo gallery
│   │   ├── blog-section.tsx          # Blog articles section
│   │   ├── contact-form.tsx          # Contact / enquiry form
│   │   └── ui/               # Reusable UI primitives (Button, Card, Dialog, Input, Tabs, Table, Badge)
│   └── lib/
│       ├── schools-data.ts       # School data + TypeScript interfaces
│       ├── blog-data.ts          # Blog post data
│       ├── testimonials-data.ts  # Testimonial data
│       ├── utils.ts              # Helper utilities (cn, etc.)
│       ├── performance-utils.ts  # Performance helpers
│       └── web-vitals.ts         # Web Vitals reporting
├── next.config.ts            # Next.js configuration (image optimisation, compression)
├── postcss.config.mjs        # PostCSS config for Tailwind
├── eslint.config.mjs         # ESLint flat config
├── tsconfig.json             # TypeScript configuration
├── vercel.json               # Vercel deployment settings
└── package.json
```

---

## 📜 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Next.js development server with hot reload |
| `npm run build` | Create an optimised production build |
| `npm start` | Start the production server (requires `build` first) |
| `npm run lint` | Run ESLint across the project |

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork** this repository
2. **Create a branch**: `git checkout -b feature/your-feature-name`
3. **Make your changes** and ensure they pass lint checks (`npm run lint`)
4. **Commit**: `git commit -m "feat: describe your change"`
5. **Push** to your fork: `git push origin feature/your-feature-name`
6. **Open a Pull Request** describing what you changed and why

Please keep PRs focused and ensure any new pages or components follow the existing TypeScript and Tailwind CSS conventions.

---

## 📄 License

This repository does not currently include a license file. All rights are reserved by the author unless otherwise stated.

---

> For detailed technical documentation, performance notes, and improvement roadmap, see [`DOCUMENTATION.md`](./DOCUMENTATION.md).
