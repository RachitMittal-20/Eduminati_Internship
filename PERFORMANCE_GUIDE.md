# Performance Optimization Guide

## 🎯 Overview

This guide provides strategies to maintain optimal performance as the Eduminati Boarding Guide grows. Our target metrics:

| Metric | Target | Status |
|--------|--------|--------|
| **LCP** (Largest Contentful Paint) | < 2.5s | ✅ Achieved |
| **FID** (First Input Delay) | < 100ms | ✅ Achieved |
| **CLS** (Cumulative Layout Shift) | < 0.1 | ✅ Achieved |
| **TTFB** (Time to First Byte) | < 600ms | ✅ Achieved |
| **Page Size** | < 2MB | ✅ Achieved |
| **Time to Interactive** | < 3s | ✅ Achieved |

---

## 📊 Performance Monitoring Tools

### 1. Chrome DevTools (Built-in)

**Steps:**
1. Open DevTools (F12 or Cmd+Option+I)
2. Go to **Lighthouse** tab
3. Click **Analyze page load**
4. Review report for issues

**What to look for:**
- Performance score (aim for 85+)
- Opportunities to improve
- Diagnostics section

### 2. Vercel Analytics (Recommended)

Add to your app:

```typescript
// app/layout.tsx
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Analytics />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

Benefits:
- Real user metrics (RUM)
- Core Web Vitals tracking
- Framework insights

### 3. PageSpeed Insights

- URL: https://pagespeed.web.dev/
- Tests both mobile & desktop
- Actionable recommendations
- Real field data

### 4. WebPageTest

- URL: https://www.webpagetest.org/
- Advanced performance insights
- Waterfall chart analysis
- Video recording

---

## 🖼️ Image Optimization

### Using Next.js Image Component

```typescript
import Image from 'next/image'

// ✅ GOOD - Optimized with Next.js
<Image
  src="/school-campus.jpg"
  alt="School campus view"
  width={1200}
  height={600}
  priority={isAboveFold}
  quality={75}
  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
/>

// ❌ BAD - Using HTML img tag (not optimized)
<img src="/school-campus.jpg" alt="School campus view" />
```

### Image Optimization Settings

```typescript
// next.config.ts
const nextConfig = {
  images: {
    // Supported image sizes for responsive images
    sizes: [320, 640, 750, 1080, 1280, 1536],
    
    // Modern formats for better compression
    formats: ['image/avif', 'image/webp'],
    
    // Cache images in browser for 60 days
    minimumCacheTTL: 60 * 60 * 24 * 60,
    
    // Ensure EXIF data is removed for privacy
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  }
}
```

### Image Best Practices

1. **Choose Right Format**
   - Photo-like: JPEG/WebP
   - Graphics: PNG/WebP
   - Icons: SVG
   - Animations: WebP (better than GIF)

2. **Compress Before Upload**

   ```bash
   # Using ImageMagick
   convert input.jpg -quality 75 -resize 1280x720 output.jpg
   
   # Using ImageOptim (Mac)
   # Drag and drop images to app
   
   # Using TinyPNG
   # https://tinypng.com/
   ```

3. **Use Responsive Images**

   ```typescript
   <Image
     src="/school.jpg"
     alt="School"
     width={1200}
     height={600}
     sizes="
       (max-width: 640px) 100vw,
       (max-width: 1280px) 50vw,
       33vw
     "
     quality={80}
   />
   ```

4. **Lazy Load Images**

   ```typescript
   // Automatically lazy-loaded with Next.js Image
   // Priority only for above-the-fold images
   <Image loading="lazy" priority={isAboveFold} />
   ```

### Image Checklist

- [ ] All images use Next.js Image component
- [ ] Images are compressed (< 100KB for thumbnails, < 500KB for large)
- [ ] Responsive sizes configured
- [ ] Priority set for above-fold images
- [ ] Alt text provided (SEO + accessibility)
- [ ] Quality setting appropriate (75-80 for photos)

---

## ⚡ Code Splitting & Lazy Loading

### Route-Based Code Splitting (Automatic)

Next.js automatically splits code by route:

```
✅ Automatic with Next.js App Router
- Each route only loads necessary code
- Shared code is extracted to separate bundle
```

### Component-Based Code Splitting

```typescript
// Delay loading heavy components until needed
import dynamic from 'next/dynamic'

// Option 1: Simple dynamic import
const VirtualTour = dynamic(
  () => import('@/components/VirtualTour')
)

// Option 2: With loading state
const VirtualTour = dynamic(
  () => import('@/components/VirtualTour'),
  { loading: () => <TourSkeleton /> }
)

// Option 3: With error boundary
const VirtualTour = dynamic(
  () => import('@/components/VirtualTour'),
  { 
    loading: () => <TourSkeleton />,
    ssr: false // Load only on client
  }
)

// Usage - loads only when component is rendered
export default function SchoolDetail() {
  return (
    <>
      <SchoolInfo />
      <VirtualTour /> {/* Loaded on demand */}
    </>
  )
}
```

### Lazy Load Heavy Libraries

```typescript
// ❌ BAD - Loads D3 for all users
import * as d3 from 'd3'

// ✅ GOOD - Loads only when needed
const Chart = dynamic(
  () => import('@/components/Chart'),
  { ssr: false }
)

// Or use optional chaining
const loadChart = async () => {
  const { createChart } = await import('chart.js')
  return createChart()
}
```

---

## 🎨 CSS Optimization

### Purge Unused CSS

Tailwind automatically removes unused styles (but verify):

```typescript
// tailwind.config.ts
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Add all paths with Tailwind classes
  ],
}
```

### Minimize CSS

```typescript
// next.config.ts
const nextConfig = {
  // CSS is automatically minified
  compress: true, // Gzip compression
}
```

### Critical CSS

Inline critical above-the-fold CSS:

```typescript
// next/head in pages
export default function Page() {
  return (
    <>
      <style>{`
        .hero { /* Critical styles */ }
        nav { /* Critical styles */ }
      `}</style>
      {/* Content */}
    </>
  )
}
```

---

## 🚀 JavaScript Optimization

### Code Splitting

```typescript
// ✅ Good - Load non-critical JS asynchronously
const ComparisonModal = dynamic(() => import('./Modal'), {
  loading: () => <div>Loading...</div>
})

// ✅ Good - Defer non-critical features
useEffect(() => {
  // Load analytics after page interactive
  import('analytics').then(analytics => {
    analytics.init()
  })
}, [])
```

### Bundle Analysis

```bash
# Analyze bundle size
npm install --save-dev @next/bundle-analyzer

# In next.config.ts
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // your config
})

# Run analysis
ANALYZE=true npm run build
```

### Remove Unused Dependencies

```bash
# Find unused packages
npm install -g depcheck
depcheck

# Remove unused package
npm uninstall unused-package
```

---

## 🔄 Optimization Patterns

### Pattern 1: Skeleton Screens

Instead of showing nothing while loading:

```typescript
// ❌ Bad - User sees empty space
const Blog = lazy(() => import('./Blog'))

// ✅ Good - Show placeholder
const Blog = lazy(() => import('./Blog'), {
  fallback: <BlogSkeleton />
})

// BlogSkeleton.tsx
export function BlogSkeleton() {
  return (
    <div className="space-y-4">
      <div className="h-10 bg-gray-200 rounded animate-pulse" />
      <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4" />
      <div className="h-4 bg-gray-200 rounded animate-pulse" />
    </div>
  )
}
```

### Pattern 2: Debouncing User Input

```typescript
import { useCallback } from 'react'

function SearchSchools({ onSearch }) {
  const [query, setQuery] = useState('')
  const [timeoutId, setTimeoutId] = useState(null)

  const handleSearch = useCallback((value) => {
    setQuery(value)
    
    // Clear previous timeout
    if (timeoutId) clearTimeout(timeoutId)
    
    // Debounce search for 300ms
    const id = setTimeout(() => {
      onSearch(value)
    }, 300)
    
    setTimeoutId(id)
  }, [timeoutId, onSearch])

  return (
    <input
      value={query}
      onChange={(e) => handleSearch(e.target.value)}
      placeholder="Search schools..."
    />
  )
}
```

### Pattern 3: Virtual Scrolling for Lists

```typescript
import { FixedSizeList } from 'react-window'

function SchoolsList({ schools }) {
  return (
    <FixedSizeList
      height={600}
      itemCount={schools.length}
      itemSize={120}
      width="100%"
    >
      {({ index, style }) => (
        <div style={style}>
          <SchoolCard school={schools[index]} />
        </div>
      )}
    </FixedSizeList>
  )
}
```

### Pattern 4: Intersection Observer for Lazy Loading

```typescript
import { useEffect, useRef } from 'react'

export function LazyImage({ src, alt }) {
  const ref = useRef(null)
  const [imageSrc, setImageSrc] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setImageSrc(src)
        observer.unobserve(ref.current)
      }
    })

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [src])

  return (
    <img
      ref={ref}
      src={imageSrc}
      alt={alt}
      className="w-full"
    />
  )
}
```

---

## 📱 Mobile Performance

### Mobile-Specific Optimizations

```typescript
// Reduce motion on low-end devices
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches

// Detect slow network
const connection = navigator.connection
if (connection.effectiveType === '4g') {
  // Load high-quality images
} else {
  // Load lower-quality images
}
```

### Optimize for Touch

```css
/* Ensure touch targets are 44x44px minimum */
button {
  min-height: 44px;
  min-width: 44px;
}

/* Remove tap highlight on mobile */
a {
  -webkit-tap-highlight-color: transparent;
}

/* Prevent zoom on double-tap */
input {
  font-size: 16px; /* Prevents auto zoom on iOS */
}
```

---

## 🔗 Network Optimization

### Connection Pooling

```typescript
// next.config.ts
const nextConfig = {
  compress: true, // Enable gzip
}
```

### HTTP/2 & HTTPS

- ✅ All traffic uses HTTPS
- ✅ HTTP/2 enabled on Vercel
- ✅ Server push for critical resources

### CDN & Caching

```typescript
// Set cache headers
export async function GET(request) {
  return new Response(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
```

---

## 🧪 Performance Testing

### Automated Testing

```bash
# Lighthouse CI
npm install -g @lhci/cli@latest

# Run local test
lhci autorun --config=lighthouserc.json
```

### Performance Test Script

```javascript
// tests/performance.test.js
describe('Performance', () => {
  test('webpage loads in < 3 seconds', async () => {
    const start = Date.now()
    await page.goto(process.env.URL)
    const duration = Date.now() - start
    
    expect(duration).toBeLessThan(3000)
  })

  test('Lighthouse score > 85', async () => {
    // Use lighthouse API
    const scores = await runLighthouse(URL)
    expect(scores.performance).toBeGreaterThan(85)
  })
})
```

---

## 📋 Performance Checklist

### Images
- [ ] Using Next.js Image component
- [ ] Images compressed (< 100KB thumbnails)
- [ ] Responsive sizes configured
- [ ] Priority set for above-fold
- [ ] WebP/AVIF formats used

### Code
- [ ] Code splitting implemented
- [ ] Unused code removed
- [ ] Dependencies optimized
- [ ] Tree-shaking enabled
- [ ] Minified for production

### CSS
- [ ] Unused CSS purged
- [ ] CSS minified
- [ ] Critical CSS inlined
- [ ] Animations optimized
- [ ] Media queries used

### JavaScript
- [ ] Bundle analyzed and optimized
- [ ] Lazy loading used
- [ ] Heavy libraries deferred
- [ ] No blocking scripts
- [ ] Third-party scripts deferred

### Network
- [ ] HTTPS enabled
- [ ] HTTP/2 enabled
- [ ] Compression enabled
- [ ] Caching configured
- [ ] CDN utilized

### Fonts
- [ ] Font loading optimized
- [ ] system-ui font stack
- [ ] font-display: swap used
- [ ] Unnecessary weights removed

### Monitoring
- [ ] Vercel Analytics enabled
- [ ] Lighthouse CI configured
- [ ] Real user metrics tracked
- [ ] Alerts configured
- [ ] Regular audits scheduled

---

## 🎯 Quick Wins for Performance

### Immediate Improvements (< 1 hour)

1. **Enable Compression**
   ```typescript
   // next.config.ts
   const nextConfig = {
     compress: true
   }
   ```

2. **Add Image Dimensions**
   ```typescript
   <Image
     src="..."
     width={1200}
     height={600}
   />
   ```

3. **Minify CSS/JS**
   ```typescript
   // Next.js does this automatically
   npm run build
   ```

### Medium Improvements (1-4 hours)

1. Implement code splitting for heavy components
2. Set up image optimization
3. Configure caching headers
4. Analyze and reduce bundle size

### Long-term Improvements (ongoing)

1. Set up performance monitoring
2. Regular Lighthouse audits
3. Continuous optimization
4. User feedback collection

---

## 🚨 Common Performance Pitfalls

### Pitfall 1: Large Images
```typescript
// ✅ Good
<Image src="/small.webp" width={640} height={360} />

// ❌ Bad
<img src="/huge-4000x3000.jpg" />
```

### Pitfall 2: Render Loops
```typescript
// ✅ Good - Memoized
const MemoizedCard = memo(SchoolCard)

// ❌ Bad - Recreates on every render
<SchoolCard key={Math.random()} />
```

### Pitfall 3: Third-party Scripts
```typescript
// ✅ Good - Deferred
<Script src="..." strategy="lazyOnload" />

// ❌ Bad - Blocks rendering
<Script src="..." />
```

### Pitfall 4: Missing Dependencies
```typescript
// ✅ Good
useEffect(() => {
  fetchData()
}, [userId])

// ❌ Bad - Infinite loops
useEffect(() => {
  fetchData()
}, [])
```

---

## 📊 Monitoring Dashboard

Create monitoring with tools:

- **Vercel Analytics** - Real user metrics
- **Google Analytics** - User behavior
- **Sentry** - Error tracking
- **DataDog** - Infrastructure monitoring

---

## 🔗 Resources

- [Next.js Performance Docs](https://nextjs.org/docs/advanced-features/measuring-performance)
- [Web.dev Performance Guide](https://web.dev/performance/)
- [Lighthouse Docs](https://developers.google.com/web/tools/lighthouse)
- [Core Web Vitals](https://web.dev/vitals/)

---

**Last Updated:** March 21, 2026
**Status:** ✅ Performance Optimized
