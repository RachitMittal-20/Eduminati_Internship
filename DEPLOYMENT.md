# Deployment Guide - Eduminati Boarding Guide

## 🚀 Quick Deployment to Vercel (Recommended)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: Eduminati Boarding Guide"
git remote add origin https://github.com/RachitMittal-20/eduminati-boarding-guide.git
git push -u origin main
```

### Step 2: Deploy via Vercel
1. Visit [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select your GitHub repository
4. Click "Deploy"
5. Your site will be live in < 1 minute!

### Environment Variables (on Vercel Dashboard)
```
NEXT_PUBLIC_API_URL=https://api.example.com
```

### Custom Domain
1. Go to Project Settings → Domains
2. Add your custom domain (e.g., boarding-guide.eduminati.in)
3. Follow DNS configuration steps

---

## 📦 Alternative Deployment Options

### Netlify Deployment
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=.next
```

### AWS Amplify
```bash
npm install -g @aws-amplify/cli
amplify init
amplify add hosting
amplify publish
```

### Docker (for self-hosting)
```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t eduminati-boarding-guide .
docker run -p 3000:3000 eduminati-boarding-guide
```

---

## ✅ Pre-Deployment Checklist

- [ ] `npm run build` passes with no errors
- [ ] `npm run lint` shows no critical issues
- [ ] All images have proper alt text
- [ ] Meta tags are updated (favicon, title, description)
- [ ] Mobile responsiveness tested
- [ ] Links to external sites work
- [ ] Forms have validation
- [ ] Environment variables set up
- [ ] Analytics configured (Google Analytics, Vercel Analytics)
- [ ] 404 page is custom and branded

---

## 📊 Performance Optimization Before Deploy

### Check Lighthouse Score
```bash
npm install -g lighthouse
lighthouse http://localhost:3000 --view
```

### Key Metrics to Monitor
- **Largest Contentful Paint (LCP):** < 2.5s
- **First Input Delay (FID):** < 100ms
- **Cumulative Layout Shift (CLS):** < 0.1

### Improvements
1. **Image Optimization**: Use Next.js Image component
2. **Code Splitting**: Routes auto-split with Next.js
3. **Caching**: Vercel handles static assets
4. **Minification**: Automatic with Next.js build

---

## 🔐 Security Before Deploy

- [ ] No API keys in code (use `.env.local`)
- [ ] HTTPS enforced (automatic on Vercel)
- [ ] Content Security Policy headers configured
- [ ] No sensitive data in comments/code
- [ ] Dependencies up to date: `npm audit fix`

### Security Headers (next.config.ts)
```typescript
export default {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
    ]
  },
}
```

---

## 📈 Post-Deployment Monitoring

### Vercel Monitoring (Built-in)
- Analytics dashboard
- Performance insights
- Error tracking
- Deployments history

### Integrate Analytics
```typescript
// pages/_app.tsx or app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function App() {
  return (
    <>
      <YourApp />
      <Analytics />
    </>
  )
}
```

### Monitor Search Engine Indexing
1. Google Search Console: https://search.google.com/search-console
2. Bing Webmaster Tools: https://www.bing.com/webmasters
3. Add XML sitemap via Next.js plugin

---

## 🔄 Continuous Deployment

### GitHub Workflow (.github/workflows/deploy.yml)
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - run: npm run lint
      - name: Deploy to Vercel
        uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

---

## 🌍 Domain & DNS Setup

### Godaddy Example
1. Purchase domain at godaddy.com
2. Point DNS records:
   - Type: A Record
   - Name: @ (or domain)
   - Value: Use Vercel's IP (76.76.19.165 or region-specific)
   
OR use CNAME:
   - Type: CNAME
   - Name: www
   - Value: cname.vercel.com

### Cloudflare (Recommended for DNS)
1. Add site to Cloudflare
2. Update nameservers in domain registrar
3. Create A record pointing to Vercel IP
4. Enable Free SSL (automatic)

---

## 📱 Mobile App Deployment (Future)

### React Native / Expo
```bash
npx create-expo-app eduminati-mobile
cd eduminati-mobile
npm install axios zustand
# Share component logic with Next.js via shared lib
```

---

## 📞 Troubleshooting Deployment

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### 404 Not Found
Check that all routes exist and redirects are configured.

### Slow Performance
1. Check image sizes (should be < 100KB)
2. Review bundle analysis: `npm install @next/bundle-analyzer`
3. Enable caching headers

### Environment Variables Not Working
1. Ensure variables are prefixed with `NEXT_PUBLIC_` for client-side
2. Redeploy after updating .env
3. Check Vercel Project Settings → Environment Variables

---

## 🎉 Launch Checklist

- [ ] Site deployed and accessible
- [ ] Custom domain configured
- [ ] SSL certificate active (green lock)
- [ ] Analytics tracking
- [ ] Performance score > 90
- [ ] All pages indexed by Google
- [ ] Mobile-friendly test passing
- [ ] Sitemap submitted to search engines
- [ ] Error monitoring enabled
- [ ] Backup strategy in place

---

**Need Help?** Contact: dev@eduminati.com

**Last Updated:** March 21, 2026
