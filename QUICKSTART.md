# Eduminati Boarding Guide - Quick Start & Deployment

## Quick Start (Local Development)

### Prerequisites
- Node.js 18+ installed
- npm 9+ or yarn
- Git configured

### Local Setup (5 minutes)

```bash
# Clone the repository
git clone https://github.com/RachitMittal-20/eduminati-boarding-guide.git
cd eduminati-boarding-guide

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

### Development Commands
```bash
npm run dev      # Start dev server (port 3000)
npm run build    # Production build
npm start        # Run production server
npm run lint     # Check code quality
```

## Deploy to Vercel (Recommended - 2 minutes)

### Option 1: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FRachitMittal-20%2Feduminati-boarding-guide)

### Option 2: Manual Vercel Deployment

1. **Sign up/Login to Vercel**
   - Go to https://vercel.com
   - Sign in with GitHub account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select project from GitHub
   - Vercel auto-detects Next.js stack

3. **Configure Environment** (Optional)
   - NEXT_PUBLIC_SITE_URL: `https://your-domain.vercel.app`
   - Leave other defaults

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build

5. **Custom Domain** (Optional)
   - In Vercel dashboard: Settings → Domains
   - Add your domain and follow DNS instructions

## Deploy to Netlify

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Netlify**
   - Sign in to https://netlify.com
   - Click "Add new site" → "Import an existing project"
   - Select GitHub repository

3. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: `18.x`

4. **Deploy**
   - Click "Deploy site"
   - Netlify builds and publishes automatically

## Environment Variables

Create `.env.local` for local development:
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production, set in your hosting provider's dashboard.

## GitHub Setup for CI/CD

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/username/repo.git
   git push -u origin main
   ```

2. **Set Secrets** (for GitHub Actions deployment)
   - Go to repo → Settings → Secrets and variables → Actions
   - Add secrets:
     - `VERCEL_TOKEN` - from https://vercel.com/account/tokens
     - `VERCEL_ORG_ID` - from Vercel project settings
     - `VERCEL_PROJECT_ID` - from Vercel project settings

3. **Enable GitHub Actions**
   - Go to repo → Actions tab
   - Enable workflows

4. **Auto-Deploy Setup**
   - On push to `main` → automatic production deployment
   - On push to `develop` → automatic preview deployment
   - On pull requests → automatic preview deployments

## Project Structure

```
eduminati-boarding-guide/
├── src/
│   ├── app/              # Next.js app routes
│   │   ├── page.tsx      # Home page with all features
│   │   ├── layout.tsx    # Root layout + metadata
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   │   ├── ui/          # Shadcn UI components
│   │   ├── navigation.tsx
│   │   ├── hero-section.tsx
│   │   ├── school-card.tsx
│   │   ├── filter-sidebar.tsx
│   │   ├── comparison-modal.tsx
│   │   ├── testimonials-carousel.tsx
│   │   ├── pricing-calculator.tsx
│   │   ├── virtual-tours.tsx
│   │   ├── blog-section.tsx
│   │   └── contact-form.tsx
│   └── lib/             # Utilities and data
│       ├── utils.ts
│       ├── schools-data.ts
│       ├── testimonials-data.ts
│       └── blog-data.ts
├── public/              # Static files
│   └── robots.txt
├── next.config.ts      # Next.js configuration
├── vercel.json         # Vercel configuration
└── package.json        # Dependencies

```

## Key Features Implemented ✅

### Core Functionality (Phase 1-3)
- ✅ Responsive navigation with mobile menu
- ✅ Hero section with search bar
- ✅ School cards with ratings and details
- ✅ Smart filters (location, curriculum, fees, grades, sports)
- ✅ Interactive school comparison tool
- ✅ Student testimonials carousel
- ✅ Pricing calculator with detailed breakdowns
- ✅ Virtual school tours with lightbox
- ✅ Blog section with categories
- ✅ Contact form with validation
- ✅ Professional blue/white color scheme
- ✅ Dark mode support

### Technical (Phase 4)
- ✅ Next.js 16 with Turbopack (1.8s builds)
- ✅ React 19 with TypeScript
- ✅ Tailwind CSS v4
- ✅ Shadcn/UI components
- ✅ SEO optimization:
  - ✅ Dynamic XML sitemap
  - ✅ robots.txt
  - ✅ JSON-LD structured data
  - ✅ Meta tags & Open Graph
- ✅ Image optimization with Next.js Image
- ✅ Responsive design (mobile-first)
- ✅ Zero TypeScript errors

## Performance Targets

- **Build Time:** < 2s (achieved: 1.8s)
- **Lighthouse Score:** Target > 90
- **LCP (Largest Contentful Paint):** Target < 1.5s
- **FID (First Input Delay):** Target < 100ms
- **CLS (Cumulative Layout Shift):** Target < 0.1

## Testing

### Manual Testing Checklist
- [ ] Test on mobile (375px), tablet (768px), desktop (1920px)
- [ ] Test filters (all combinations)
- [ ] Test comparison tool (2-4 schools)
- [ ] Test calculator with different values
- [ ] Test carousel navigation
- [ ] Test form validation and submission
- [ ] Test dark mode toggle
- [ ] Test navigation on mobile

### Performance Testing
```bash
# Local performance test
npm run build
npm start

# Then use: https://pagespeed.web.dev/
# And: https://gtmetrix.com/
```

## Troubleshooting

### Port Already in Use
```bash
# Kill the process using port 3000
kill -9 $(lsof -t -i:3000)

# Or use a different port
npm run dev -- -p 3001
```

### Build Failing
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try build again
npm run build
```

### Images Not Loading
- Check that `images.unsplash.com` is in `next.config.ts`
- Verify image URLs are valid
- Check Next.js Image component sizing

## Future Enhancements

- [ ] Admin panel for content management
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication (NextAuth)
- [ ] School profile pages
- [ ] Advanced booking/enquiry workflow
- [ ] Email notifications (SendGrid)
- [ ] Analytics dashboard
- [ ] Mobile app (React Native)
- [ ] Multilingual support
- [ ] Payment integration

## Support & Contact

- **GitHub Issues:** https://github.com/RachitMittal-20/eduminati-boarding-guide/issues
- **Email:** info@eduminati.com
- **Website:** https://eduminati-boarding-guide.vercel.app

---

**Built with:** Next.js • React • TypeScript • Tailwind CSS • Shadcn UI

**Deployment Status:** ✅ Ready for Production
