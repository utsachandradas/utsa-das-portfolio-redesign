# Production Checklist

Use this checklist before deploying to production on Vercel.

## Code Quality

- [ ] Run `pnpm check` - TypeScript type checking passes
- [ ] Run `pnpm format` - Code is properly formatted
- [ ] All console errors and warnings are resolved
- [ ] No `console.log()` statements left in production code
- [ ] All TODO/FIXME comments are addressed or documented

## Build & Performance

- [ ] `pnpm build` completes successfully
- [ ] Build output is under 500KB (gzipped)
- [ ] No build warnings about missing dependencies
- [ ] Code splitting is working (check dist/assets/ has multiple chunks)
- [ ] Images are optimized (use proper formats and sizes)

## SEO & Metadata

- [ ] All pages have unique, descriptive titles
- [ ] All pages have meta descriptions
- [ ] Canonical URLs are set correctly
- [ ] Schema markup is valid (test with Google's Rich Results Test)
- [ ] Open Graph tags are present for social sharing
- [ ] robots.txt is configured correctly
- [ ] sitemap.xml is generated and valid

## Functionality

- [ ] All navigation links work correctly
- [ ] Contact form submits successfully
- [ ] All external links open in new tabs (if intended)
- [ ] Forms have proper validation and error messages
- [ ] 404 page displays for non-existent routes
- [ ] No broken images or missing assets

## Browser & Device Testing

- [ ] Desktop: Chrome, Firefox, Safari, Edge
- [ ] Mobile: iOS Safari, Chrome Android
- [ ] Tablet: iPad, Android tablet
- [ ] Responsive design works at all breakpoints (320px, 768px, 1024px, 1440px)
- [ ] Touch interactions work on mobile
- [ ] Keyboard navigation works throughout the site

## Accessibility

- [ ] All images have alt text
- [ ] Color contrast meets WCAG AA standards
- [ ] Focus indicators are visible
- [ ] Keyboard navigation is complete
- [ ] Form labels are properly associated
- [ ] No keyboard traps
- [ ] Screen reader friendly (test with NVDA or JAWS)

## Security

- [ ] No sensitive data in client-side code
- [ ] Environment variables are properly configured in Vercel
- [ ] API keys are not exposed in repository
- [ ] HTTPS is enforced (Vercel default)
- [ ] Security headers are set in vercel.json
- [ ] No console errors about mixed content

## Performance

- [ ] Lighthouse score is 90+ for Performance
- [ ] First Contentful Paint (FCP) is under 2 seconds
- [ ] Largest Contentful Paint (LCP) is under 2.5 seconds
- [ ] Cumulative Layout Shift (CLS) is under 0.1
- [ ] Core Web Vitals are in green
- [ ] Images are lazy-loaded where appropriate

## Analytics & Monitoring

- [ ] Analytics tracking is configured (if applicable)
- [ ] Error tracking is set up (optional)
- [ ] Monitoring alerts are configured (optional)
- [ ] Vercel Analytics is enabled

## Content

- [ ] All placeholder text has been replaced
- [ ] Contact information is accurate and up-to-date
- [ ] Social media links are correct
- [ ] All external links are verified and working
- [ ] No typos or grammatical errors
- [ ] Brand colors and fonts are consistent

## Environment

- [ ] Environment variables are set in Vercel
- [ ] Build command is correct: `pnpm build`
- [ ] Install command is correct: `pnpm install`
- [ ] Output directory is correct: `dist`
- [ ] Node.js version is compatible (18+)

## Final Steps

- [ ] Create a test deployment to staging first
- [ ] Verify all functionality on staging
- [ ] Get stakeholder approval
- [ ] Deploy to production
- [ ] Monitor for errors in first 24 hours
- [ ] Set up monitoring and alerts
- [ ] Document deployment in team wiki/docs

## Post-Deployment

- [ ] Verify site is live and accessible
- [ ] Test all critical user paths
- [ ] Monitor error logs for issues
- [ ] Check analytics for traffic
- [ ] Verify email notifications are working (if applicable)
- [ ] Document any issues and resolutions

## Rollback Plan

If issues occur after deployment:

1. Check Vercel deployment logs for errors
2. Review recent code changes
3. Check environment variables are correct
4. Rollback to previous deployment if necessary:
   - Go to Vercel Dashboard → Deployments
   - Find the previous working deployment
   - Click the three dots menu
   - Select "Promote to Production"

---

**Deployment Date**: _______________
**Deployed By**: _______________
**Notes**: _______________
