# Eduminati Boarding Guide

A modern, interactive website for discovering and comparing India's top 21 boarding schools. Built with Next.js, React, TypeScript, and Shadcn UI components.

**Live Demo:** http://localhost:3000 (when dev server is running)

## 🎯 Project Overview

This project transforms the static blog content from ecoleglobale.com into a dynamic, interactive platform that helps parents and students:
- **Discover** India's best boarding schools with verified information
- **Compare** schools side-by-side on fees, facilities, curriculum
- **Analyze** costs with the fee calculator tool
- **Access** student testimonials and virtual tours

## 🏗️ Architecture

### Tech Stack
- **Framework:** Next.js 16.2.1 with App Router
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4
- **Components:** Shadcn/UI (built on Radix UI)
- **Icons:** Lucide React
- **Utilities:** clsx, tailwind-merge
- **Runtime:** Node.js 18+

### Project Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout with navigation & footer
│   ├── page.tsx            # Home page with schools grid
│   ├── globals.css         # Global styles & color scheme
│   └── favicon.ico
├── components/
│   ├── ui/                 # Shadcn UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── badge.tsx
│   ├── navigation.tsx       # Sticky header navigation
│   ├── hero-section.tsx    # Landing hero with search
│   └── school-card.tsx     # Individual school card component
├── lib/
│   ├── schools-data.ts     # School details & TypeScript interfaces
│   └── utils.ts            # Helper functions (cn, formatCurrency, etc)
```

## 🎨 Design System

### Color Palette
- **Primary Blue:** `#003DA5` (Professional, trustworthy)
- **Secondary Blue:** `#0052A3` (Darker shade for interactions)
- **Accent Blue:** `#1E88E5` (Bright blue for CTAs)
- **Light Gray:** `#F5F5F5` (Backgrounds)
- **Dark Text:** `#333333` (Main content)

### Components
- Responsive grid layouts (mobile-first)
- Accessible form inputs
- Interactive buttons with variant system
- Card-based school listings
- Professional navigation with mobile hamburger menu

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm 9+

### Installation
```bash
# Navigate to project
cd eduminati-boarding-guide

# Install dependencies (already done)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development Server
```bash
npm run dev
# Server runs on http://localhost:3000
# Hot reload enabled - changes are instant
```

## 📋 Current Features

### Implemented
- ✅ Responsive navigation bar with mobile menu
- ✅ Hero section with search placeholder & CTAs
- ✅ School cards with images, ratings, fee info, curriculum
- ✅ Featured schools grid (5 schools displayed, scalable to 21)
- ✅ Feature showcase section (Search, Comparison, Calculator icons)
- ✅ Professional footer with links & contact info
- ✅ Dark mode support
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ TypeScript for type safety
- ✅ SEO metadata configuration

### Coming Next
- 🔲 Smart search & filtering system
- 🔲 School comparison tool (select 2-4 schools, compare side-by-side)
- 🔲 Fee calculator (estimate total costs)
- 🔲 Student testimonials carousel
- 🔲 Virtual school tours (image galleries)
- 🔲 Blog/news section for updates
- 🔲 Contact & enquiry form
- 🔲 Advanced SEO (structured data, sitemap, robots.txt)
- 🔲 Image optimization & lazy loading
- 🔲 Admin panel for content management

## 📊 Performance Optimizations

### Current
- Turbopack for blazing-fast builds (~1.5s)
- Optimized CSS with Tailwind
- TypeScript for elimination of runtime errors
- Next.js Image component ready for optimization

### Planned
- Next.js Image component w/ WebP/AVIF formats
- Code splitting by route
- Static generation (SSG) for school pages
- Assets optimization & CDN delivery
- Core Web Vitals target: 90+ PageSpeed score

## 🔧 Customization Guide

### Adding New Schools
Edit `src/lib/schools-data.ts`:
```typescript
{
  id: "6",
  name: "YOUR SCHOOL NAME",
  location: "City, State", 
  city: "City",
  state: "State",
  yearEstablished: 2000,
  type: "Boarding",
  curriculum: ["CBSE", "ICSE"],
  grades: "3-12",
  annualFees: { min: 500000, max: 800000 },
  // ... more fields
}
```

### Changing Colors
Edit `src/app/globals.css`:
```css
:root {
  --blue-primary: #003DA5;  /* Change primary blue */
  --blue-accent: #1E88E5;   /* Change accent blue */
}
```

### Updating Navigation Links
Edit `src/components/navigation.tsx` - modify the Link components.

### Modifying School Cards
Edit `src/components/school-card.tsx` - add/remove fields displayed.

## 📱 Responsive Breakpoints
- **Mobile:** < 768px (full-width layout)
- **Tablet:** 768px - 1024px (2-column grid)
- **Desktop:** > 1024px (3-column grid)

## 🧪 Testing & Validation

### Build Verification
```bash
npm run build
# Output: ✓ Compiled successfully
# Next.js 16.2.1 creates optimized production build
```

### Linting
```bash
npm run lint
# ESLint configured for Next.js best practices
```

## 🖥️ Environment Variables
Create `.env.local` for future features:
```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

## 📈 Future Integrations

### Backend Services
- Database: Supabase/Firebase for school data
- CMS: Headless CMS for blog/updates
- Email: SendGrid for enquiry notifications

### External APIs
- YouTube API for testimonial videos
- Google Maps API for location display
- Stripe for future payment processing

### Analytics
- Vercel Analytics
- Google Analytics 4
- Hotjar for user behavior

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
# Deploys automatically on push to main
```

### Alternative Hosting
- Netlify
- AWS Amplify
- DigitalOcean
- Heroku

## 📚 Documentation & Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React 19 Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Shadcn/UI Components](https://ui.shadcn.com)
- [Radix UI Primitives](https://www.radix-ui.com)

## 🤝 Contributing

This is an Eduminati project. To contribute:
1. Create feature branch from `main`
2. Make changes with descriptive commits
3. Ensure `npm run build` passes
4. Create pull request with details

## 📝 License

© 2026 Eduminati. All rights reserved.

## 📞 Support & Contact

- Email: info@eduminati.com
- Website: https://www.eduminati.com
- Project: Boarding School Comparison Guide

---

**Last Updated:** March 21, 2026
**Version:** 1.0.0 (Beta)
**Status:** Development Phase ✓

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
