# Eduminati Boarding Guide - Complete Documentation

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Quick Start](#quick-start)
3. [Project Structure](#project-structure)
4. [Technology Stack](#technology-stack)
5. [Component Documentation](#component-documentation)
6. [Styling Guide](#styling-guide)
7. [Performance](#performance)
8. [Deployment](#deployment)
9. [Contributing](#contributing)
10. [Troubleshooting](#troubleshooting)

---

## 🎯 Project Overview

**Eduminati Boarding Guide** is a comprehensive web application designed to help students discover and compare boarding schools. The platform provides:

- **School Discovery** - Browse and filter through curated boarding schools
- **School Comparison** - Side-by-side comparison of institutions
- **Virtual Tours** - Interactive 360° tours of school campuses
- **Cost Calculator** - Estimate total cost of attendance
- **Blog & Resources** - Latest news, tips, and guides
- **Contact & Consultation** - Direct messaging with school representatives

### Key Features

✅ **Responsive Design** - Mobile, tablet, and desktop optimized
✅ **Fast Performance** - Optimized images and lazy loading
✅ **Accessible** - WCAG 2.1 AA compliant
✅ **SEO Ready** - Server-side rendering with Next.js
✅ **Modern UI** - Tailwind CSS with custom design system

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (or 20+)
- npm or yarn package manager
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/RachitMittal-20/eduminati-boarding-guide.git
cd eduminati-boarding-guide

# Install dependencies
npm install
# or
yarn install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your configuration

# Run development server
npm run dev
```

### Verify Installation

```bash
# Open browser at http://localhost:3000
# You should see the homepage with logo and navigation

# Check network tab for no 404 errors
# Check console for no JavaScript errors
```

---

## 📁 Project Structure

```
eduminati-boarding-guide/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Homepage
│   ├── error.tsx                # Error page
│   ├── not-found.tsx            # 404 page
│   ├── globals.css              # Global styles
│   ├── (routes)/                # Route groups
│   │   ├── schools/             # School discovery & comparison
│   │   ├── about/               # About page
│   │   ├── blog/                # Blog listing
│   │   ├── contact/             # Contact form
│   │   └── dashboard/           # User dashboard
│   └── api/                     # API routes (if needed)
│
├── components/                   # Reusable components
│   ├── layout/
│   │   ├── Navigation.tsx       # Top navigation bar
│   │   ├── Footer.tsx           # Footer
│   │   ├── Sidebar.tsx          # Filter sidebar
│   │   └── Header.tsx           # Page headers
│   ├── sections/
│   │   ├── HeroSection.tsx      # Landing hero
│   │   ├── SchoolCards.tsx      # School listing grid
│   │   ├── ComparisonModal.tsx  # Modal for comparison
│   │   ├── Testimonials.tsx     # Student testimonials
│   │   ├── Calculator.tsx       # Cost calculator
│   │   └── VirtualTour.tsx      # Tour viewer
│   ├── common/
│   │   ├── Button.tsx           # Button component
│   │   ├── Card.tsx             # Card wrapper
│   │   ├── Badge.tsx            # Badge component
│   │   ├── Modal.tsx            # Modal wrapper
│   │   └── Input.tsx            # Form input
│   ├── forms/
│   │   ├── SearchBar.tsx        # Search functionality
│   │   ├── FilterPanel.tsx      # Filter controls
│   │   └── ContactForm.tsx      # Contact form
│   └── hooks/
│       ├── useFilter.ts         # Filter logic
│       ├── useComparison.ts     # Comparison state
│       └── useDebounce.ts       # Debounce utility
│
├── lib/                          # Utilities and helpers
│   ├── constants.ts             # App constants
│   ├── types.ts                 # TypeScript types
│   ├── utils.ts                 # Helper functions
│   ├── api/                     # API client
│   │   ├── schools.ts           # School API
│   │   └── contact.ts           # Contact API
│   └── data/
│       ├── schools.json         # School data
│       ├── testimonials.json    # Testimonial data
│       └── blog.json            # Blog posts
│
├── public/                       # Static assets
│   ├── images/
│   │   ├── schools/             # School photos
│   │   ├── tours/               # Tour images
│   │   └── ui/                  # UI elements
│   ├── icons/                   # SVG icons
│   └── favicon.ico
│
├── styles/                       # Global styles (if needed)
│   └── variables.css            # CSS custom properties
│
├── config/                       # Configuration files
│   ├── tailwind.config.ts       # Tailwind configuration
│   ├── next.config.ts           # Next.js configuration
│   └── tsconfig.json            # TypeScript configuration
│
├── docs/                         # Documentation
│   ├── ARCHITECTURE.md          # System architecture
│   ├── MOBILE_TESTING.md        # Mobile testing guide
│   ├── COMPONENTS.md            # Component library
│   ├── PERFORMANCE.md           # Performance guide
│   └── API.md                   # API documentation
│
├── tests/                        # Test files
│   ├── unit/                    # Unit tests
│   ├── integration/             # Integration tests
│   └── e2e/                     # End-to-end tests
│
├── .env.local                   # Environment variables (git ignored)
├── .git/                        # Git repository
├── package.json                 # Dependencies & scripts
├── package-lock.json            # Locked versions
├── tsconfig.json               # TypeScript config
├── next.config.ts              # Next.js config
├── tailwind.config.ts          # Tailwind config
├── postcss.config.js           # PostCSS config
└── README.md                   # This file
```

---

## 🛠 Technology Stack

### Frontend
- **Next.js 15+** - React framework with SSR
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **React Hook Form** - Form management
- **Zustand** - State management (if needed)

### Backend (Optional)
- **Next.js API Routes** - Serverless functions
- **Prisma** - Database ORM (if using database)
- **PostgreSQL** - Database (if needed)

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Jest** - Unit testing
- **Playwright** - E2E testing
- **Vercel** - Hosting & deployment

---

## 📚 Component Documentation

### Layout Components

#### Navigation.tsx
```typescript
<Navigation />
```
- Responsive navbar with hamburger menu on mobile
- Contains logo, menu items, and CTA button
- Sticky on scroll
- Dark mode support

#### Footer.tsx
```typescript
<Footer />
```
- 4-column footer layout on desktop
- Responsive stacking on mobile
- Social media links
- Newsletter signup

### Section Components

#### HeroSection.tsx
```typescript
<HeroSection />
```
- Large banner with background image
- Search bar for quick school discovery
- Feature highlights

#### SchoolCards.tsx
```typescript
<SchoolCards 
  schools={schoolsData}
  isLoading={false}
  onCompare={handleCompare}
/>
```
- Responsive grid (1-3 columns)
- Individual school cards with images
- Compare checkbox
- Quick stats

#### ComparisonModal.tsx
```typescript
<ComparisonModal 
  open={isOpen}
  schools={selectedSchools}
  onClose={handleClose}
/>
```
- Fixed modal with 2-4 school comparison
- Scrollable comparison table
- Export/print functionality

#### Testimonials.tsx
```typescript
<Testimonials />
```
- Carousel of student testimonials
- Navigation arrows
- Dot indicators
- Responsive image placement

#### Calculator.tsx
```typescript
<Calculator />
```
- Interactive cost calculator
- Expense breakdown
- Annual vs total cost
- Export estimate

#### VirtualTour.tsx
```typescript
<VirtualTour 
  schoolId="school-123"
  images={tourImages}
/>
```
- Gallery with main image viewer
- Thumbnail navigation
- Full-screen mode
- Touch-swipe support

### Common Components

#### Button.tsx
```typescript
<Button 
  variant="primary" 
  size="lg" 
  onClick={handleClick}
>
  Click Me
</Button>
```
- Variants: primary, secondary, outline, ghost
- Sizes: sm, md, lg
- Loading state
- Disabled state

#### Card.tsx
```typescript
<Card className="p-6">
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
  <Card.Footer>Footer</Card.Footer>
</Card>
```
- Flexible card wrapper
- Optional header/footer
- Hover effects

#### Modal.tsx
```typescript
<Modal open={isOpen} onClose={handleClose}>
  <Modal.Header>Modal Title</Modal.Header>
  <Modal.Body>Modal content</Modal.Body>
  <Modal.Footer>Actions</Modal.Footer>
</Modal>
```
- Backdrop overlay
- Scroll lock on body
- Keyboard escape support

---

## 🎨 Styling Guide

### Tailwind Configuration

Our Tailwind setup includes:

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: '#1F2937',    // Deep gray
        secondary: '#3B82F6',  // Blue
        accent: '#F59E0B',     // Amber
      },
      spacing: {
        'safe': 'max(1rem, env(safe-area-inset-bottom))',
      },
      screens: {
        'sm': '375px',   // Mobile
        'md': '768px',   // Tablet
        'lg': '1024px',  // Desktop
        'xl': '1280px',  // Large desktop
      }
    }
  }
}
```

### Class Naming Conventions

```typescript
// ✅ Good - Semantic class names
<div className="flex items-center justify-between bg-white rounded-lg shadow">

// ✅ Good - Using component approach
<div className={cn("p-4 rounded-lg", isActive && "bg-blue-100")}>

// ❌ Avoid - Inline complex styles
<div style={{ 
  display: 'flex',
  justifyContent: 'space-between',
  ...manyInlineStyles 
}}>
```

### Dark Mode

```typescript
// In HTML
<html className="dark">

// In Tailwind
<div className="bg-white dark:bg-gray-900">
```

### Custom CSS

```css
/* styles/variables.css */
:root {
  --color-primary: #1F2937;
  --color-secondary: #3B82F6;
  --spacing-unit: 0.25rem;
  --transition-base: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Component styles */
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-600 text-white rounded-lg 
           hover:bg-blue-700 transition-colors;
  }
}
```

---

## ⚡ Performance

### Key Metrics

- **Core Web Vitals**
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1

### Optimization Techniques

1. **Image Optimization**
```typescript
import Image from 'next/image'

<Image 
  src="/school.jpg"
  alt="School campus"
  width={1200}
  height={600}
  priority={isAboveFold}
  quality={75}
/>
```

2. **Code Splitting**
```typescript
// Automatic with Next.js
// Route-based code splitting
// Dynamic imports for components
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./Heavy'), {
  loading: () => <Skeleton />
})
```

3. **Lazy Loading**
```typescript
<Image 
  src="/tour.jpg"
  alt="Tour"
  loading="lazy"
  onLoadingComplete={handleLoad}
/>
```

4. **Caching Strategy**
```typescript
// next.config.ts
const nextConfig = {
  images: {
    sizes: [320, 640, 750, 1080, 1280, 1536],
    formats: ['image/avif', 'image/webp'],
  }
}
```

### Monitoring

- Use **Lighthouse** in Chrome DevTools
- Setup **Web Vitals** monitoring
- Monitor with **Vercel Analytics**

---

## 🚀 Deployment

### On Vercel (Recommended)

```bash
# 1. Push to GitHub
git push origin main

# 2. Connect to Vercel
# Visit: https://vercel.com/import
# Select repository
# Configure environment variables

# 3. Deploy
# Automatic on push to main
# Or deploy from Vercel dashboard
```

### Environment Variables

Create `.env.local`:

```env
# API Configuration
NEXT_PUBLIC_API_URL=https://api.example.com
API_SECRET_KEY=your-secret-key

# Third-party services
NEXT_PUBLIC_ANALYTICS_ID=your-ga-id
EMAILJS_PUBLIC_KEY=your-public-key

# Database (if using)
DATABASE_URL=postgresql://user:password@localhost/db
```

### Build & Test Locally

```bash
# Build for production
npm run build

# Test production build
npm run start

# Run tests before deployment
npm test
npm run test:e2e
```

---

## 👥 Contributing

### Development Workflow

1. Create feature branch
```bash
git checkout -b feature/new-feature
```

2. Make changes following our code style

3. Commit changes
```bash
git commit -m "feat: Add new feature"
```

4. Push and create pull request
```bash
git push origin feature/new-feature
```

### Code Standards

- **TypeScript**: Strict mode enabled
- **ESLint**: Rules enforced
- **Prettier**: Auto-format on save
- **Tests**: Minimum 80% coverage

### Git Commit Messages

```
feat: Add new feature
fix: Fix bug in component
docs: Update documentation
style: Format code
refactor: Refactor component
test: Add tests
chore: Update dependencies
```

---

## 🔧 Troubleshooting

### Common Issues

#### Issue: Port 3000 Already in Use
```bash
# Kill process on port 3000
# macOS/Linux
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

#### Issue: Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Issue: Image Not Displaying
```javascript
// Check:
1. Image path is correct
2. Image exists in public/ folder
3. Image format is supported (jpg, png, webp)
4. Next Image component used correctly
```

#### Issue: Styles Not Applying
```bash
# 1. Clear .next folder
rm -rf .next

# 2. Restart dev server
npm run dev

# 3. Check Tailwind config
# Ensure all template paths are included:
content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
]
```

#### Issue: Build Fails
```bash
# Check TypeScript errors
npx tsc --noEmit

# Check for ESLint issues
npx eslint .

# Check console output for specific error
npm run build
```

### Performance Issues?

1. **Check images**: Use DevTools → Network
2. **Check bundle size**: `npm install -g webpack-bundle-analyzer`
3. **Profile runtime**: React Developer Tools → Profiler
4. **Check API calls**: Network tab in DevTools

### Getting Help

1. Check documentation in `/docs` folder
2. Search existing GitHub issues
3. Check browser console for errors
4. Use DevTools for debugging

---

## 📖 Additional Resources

### Documentation Files
- [ARCHITECTURE.md](./docs/ARCHITECTURE.md) - System design
- [MOBILE_TESTING.md](./docs/MOBILE_TESTING.md) - Mobile testing guide
- [COMPONENTS.md](./docs/COMPONENTS.md) - Component library
- [PERFORMANCE.md](./docs/PERFORMANCE.md) - Performance guide
- [API.md](./docs/API.md) - API documentation

### External Resources
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)

---

## 📄 License

This project is proprietary and confidential.

---

## 📞 Contact

For questions or support:
- 📧 Email: [support@eduminati.com](mailto:support@eduminati.com)
- 🐙 GitHub: [@RachitMittal-20](https://github.com/RachitMittal-20)

---

**Last Updated:** March 21, 2026
**Status:** ✅ Production Ready
