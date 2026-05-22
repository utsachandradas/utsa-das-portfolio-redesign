# Deployment Guide

This portfolio has been optimized for **Vercel** deployment. Follow these steps to deploy your application.

## Prerequisites

- A [Vercel](https://vercel.com) account
- GitHub repository access (already connected)
- Node.js and pnpm installed locally (for development)

## Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Type checking
pnpm check

# Format code
pnpm format
```

## Vercel Deployment

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Select your GitHub repository: `utsachandradas/utsa-das-portfolio-redesign`
4. Vercel will auto-detect the configuration from `vercel.json`
5. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

## Environment Variables

If you need environment variables in production:

1. Go to your project settings in Vercel Dashboard
2. Navigate to "Settings" → "Environment Variables"
3. Add your variables (e.g., API keys, endpoints)
4. Redeploy to apply changes

Example variables:
```
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=your-analytics-id
```

## Build Configuration

The project uses the following configuration (defined in `vercel.json`):

- **Build Command**: `pnpm build`
- **Install Command**: `pnpm install`
- **Output Directory**: `dist`
- **Framework**: Vite

## Performance Optimizations

The build includes:

- **Code Splitting**: Vendor and UI component chunks for optimal loading
- **Asset Caching**: Long-term caching headers for static assets (1 year)
- **Security Headers**: X-Content-Type-Options, X-Frame-Options, XSS Protection
- **SPA Routing**: Client-side routing with fallback to index.html
- **Minification**: Production-grade minification with Terser

## Troubleshooting

### Build Fails

1. Check the build logs in Vercel Dashboard
2. Ensure all dependencies are correctly specified in `package.json`
3. Run `pnpm build` locally to test

### Environment Variables Not Working

1. Verify variables are prefixed with `VITE_` for client-side access
2. Redeploy after adding/updating variables
3. Check browser console for actual values

### Routing Issues

The `vercel.json` includes rewrite rules to handle client-side routing. If pages return 404:

1. Verify `rewrites` section in `vercel.json`
2. Check that `index.html` exists in the build output
3. Ensure Wouter routing is properly configured in `App.tsx`

## Monitoring

After deployment:

1. Check the deployment URL in Vercel Dashboard
2. Monitor performance metrics in Vercel Analytics
3. Set up error tracking (optional)
4. Review security headers in browser DevTools

## Rollback

To rollback to a previous deployment:

1. Go to "Deployments" in Vercel Dashboard
2. Find the deployment you want to restore
3. Click the three dots menu
4. Select "Promote to Production"

## Production Checklist

Before going live:

- [ ] Test all pages and links work correctly
- [ ] Verify contact form functionality
- [ ] Check mobile responsiveness
- [ ] Test dark/light theme switching
- [ ] Verify SEO metadata (title, description, schema)
- [ ] Check all external links are correct
- [ ] Test on different browsers
- [ ] Verify analytics tracking (if applicable)
- [ ] Check security headers in DevTools

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
