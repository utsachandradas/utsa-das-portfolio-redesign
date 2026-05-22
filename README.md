# Utsa Das - Portfolio & SEO Consulting Website

A modern, production-ready portfolio website for Utsa Das, an SEO and GEO strategist. Built with React, TypeScript, Vite, and Tailwind CSS, optimized for Vercel deployment.

## Features

- **Modern Design**: Premium dark theme with smooth animations and transitions
- **Responsive Layout**: Mobile-first design that works on all devices
- **SEO Optimized**: Built-in SEO metadata, schema markup, and structured data
- **Performance**: Code splitting, lazy loading, and optimized assets
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Dark/Light Theme**: Theme switching with persistent user preference
- **Contact Form**: Functional contact form with validation
- **Portfolio Showcase**: Display of projects and services
- **Analytics Ready**: Support for analytics integration (Umami)

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4 + Radix UI
- **Routing**: Wouter (lightweight client-side router)
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **UI Components**: Radix UI primitives with custom styling
- **Deployment**: Vercel (serverless)

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- pnpm 10.4.1+ (or npm/yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/utsachandradas/utsa-das-portfolio-redesign.git
cd utsa-das-portfolio-redesign

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The development server will start at `http://localhost:3000`

### Available Scripts

```bash
# Development
pnpm dev              # Start dev server with hot reload

# Production
pnpm build            # Build for production
pnpm preview          # Preview production build locally

# Code Quality
pnpm check            # Type checking with TypeScript
pnpm format           # Format code with Prettier
```

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/       # Reusable React components
│   │   ├── pages/            # Page components (Home, About, etc.)
│   │   ├── hooks/            # Custom React hooks
│   │   ├── lib/              # Utility functions and schemas
│   │   ├── contexts/         # React context providers
│   │   ├── App.tsx           # Main app component
│   │   ├── main.tsx          # Entry point
│   │   └── index.css         # Global styles
│   ├── public/               # Static assets
│   └── index.html            # HTML template
├── shared/                   # Shared types and constants
├── patches/                  # pnpm patches for dependencies
├── vite.config.ts            # Vite configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── vercel.json               # Vercel deployment configuration
└── package.json              # Project dependencies
```

## Deployment

### Deploy to Vercel

1. **Via Vercel Dashboard** (Recommended):
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New" → "Project"
   - Select your GitHub repository
   - Vercel will auto-detect the configuration
   - Click "Deploy"

2. **Via Vercel CLI**:
   ```bash
   npm i -g vercel
   vercel login
   vercel --prod
   ```

### Environment Variables

If using analytics or other external services, add environment variables in Vercel:

1. Go to Project Settings → Environment Variables
2. Add your variables (must start with `VITE_` for client-side access)
3. Redeploy to apply changes

Example:
```
VITE_ANALYTICS_ENDPOINT=https://analytics.example.com
VITE_ANALYTICS_WEBSITE_ID=your-website-id
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## Performance Optimizations

- **Code Splitting**: Vendor and UI component chunks for optimal loading
- **Asset Caching**: Long-term caching headers for static assets
- **Minification**: Production-grade minification with Terser
- **CSS Optimization**: Tailwind CSS purging unused styles
- **Image Optimization**: Responsive images with proper formats
- **Security Headers**: X-Content-Type-Options, X-Frame-Options, XSS Protection

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: Latest versions

## SEO Features

- **Meta Tags**: Customizable title, description, and canonical URLs
- **Schema Markup**: Structured data for organization and breadcrumbs
- **Open Graph**: Social media preview optimization
- **Sitemap**: Auto-generated sitemap.xml
- **Robots.txt**: Search engine crawling guidelines
- **Semantic HTML**: Proper heading hierarchy and semantic elements

## Accessibility

- WCAG 2.1 Level AA compliance
- Keyboard navigation support
- Screen reader friendly
- Color contrast ratios met
- Focus indicators visible
- ARIA labels where needed

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit your changes: `git commit -am 'Add feature'`
3. Push to the branch: `git push origin feature/your-feature`
4. Submit a pull request

## License

MIT License - See LICENSE file for details

## Contact

For inquiries about services or collaborations:
- Email: utsa@example.com
- Website: https://utsadas.com
- LinkedIn: [Your LinkedIn Profile]

## Support

For deployment issues or questions, see [DEPLOYMENT.md](./DEPLOYMENT.md) or check the [Vercel Documentation](https://vercel.com/docs).

---

**Last Updated**: May 2026
**Vercel Deployment Ready**: ✓
