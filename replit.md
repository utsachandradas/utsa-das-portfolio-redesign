# Utsa Das Portfolio

A personal portfolio site for Utsa Das — SEO & GEO Strategist, showcasing services, projects, skills, and a contact form.

## Run & Operate

- `pnpm --filter @workspace/portfolio run dev` — run the frontend (Vite dev server)
- `pnpm run typecheck` — full typecheck across all packages
- Required env: none for frontend-only mode

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite (artifacts/portfolio)
- Routing: wouter
- Styling: Tailwind CSS v4 + custom dark theme
- Animation: framer-motion
- Font: Space Grotesk (Google Fonts)

## Where things live

- `artifacts/portfolio/src/pages/` — page components (Home, About, Services, Projects, Skills, Contact)
- `artifacts/portfolio/src/components/` — shared UI (Navbar, Footer, Layout, Hero, etc.)
- `artifacts/portfolio/src/contexts/ThemeContext.tsx` — custom dark theme provider
- `artifacts/portfolio/src/index.css` — Tailwind config + color variables (dark-first oklch palette)
- `artifacts/portfolio/index.html` — entry HTML with Space Grotesk font + SEO meta

## Architecture decisions

- Pure frontend SPA — no backend needed; the Express api-server scaffold is present but unused
- wouter for routing (lightweight, no React Router overhead); base path wired to `import.meta.env.BASE_URL`
- Custom ThemeContext instead of next-themes for dark-mode management (default: dark)
- ThemeProvider wraps the whole tree so any component can call `useTheme()`
- `react-helmet-async` for per-page SEO meta tags

## Product

Portfolio website for Utsa Das with 6 pages: Home (hero + overview), About, Services, Projects, Skills, and Contact.

## User preferences

_Populate as you build._

## Gotchas

- The Navbar uses wouter `<Link>` wrapping a `<motion.a>`, which causes a nested `<a>` warning — pre-existing from original code, not a regression
- `artifacts/portfolio/src/components/Map.tsx` uses a Google Maps proxy via `VITE_FRONTEND_FORGE_API_KEY` env var — map won't render without it

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
