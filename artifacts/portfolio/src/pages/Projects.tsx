import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/8801861393416?text=Hi%20Utsa%2C%20I%27d%20like%20to%20discuss%20a%20project";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Enterprise Technical SEO Overhaul",
      category: "Technical SEO",
      metric: "+145%",
      metricLabel: "Crawl Efficiency",
      description: "A 1M+ page enterprise site was losing indexation due to cascading crawl budget waste and JavaScript rendering issues. I restructured the crawl architecture, resolved rendering blockers, and rebuilt the internal linking framework to prioritize high-value pages. Crawl efficiency improved by 145% within three months.",
      tags: ["Technical SEO", "Crawl Architecture", "JavaScript SEO", "Core Web Vitals"]
    },
    {
      id: 2,
      title: "D2C Ecommerce Organic Growth",
      category: "Ecommerce SEO",
      metric: "+82%",
      metricLabel: "Non-brand Organic Revenue",
      description: "A direct-to-consumer retail brand had strong products but weak organic presence. I built semantic category hubs, implemented Product and Offer schema across the catalogue, and developed a keyword strategy targeting high-intent non-brand queries. Organic revenue grew 82% year-over-year without paid search spend.",
      tags: ["Ecommerce SEO", "Product Schema", "Category Architecture", "Organic Revenue"]
    },
    {
      id: 3,
      title: "AI Citation Visibility Program",
      category: "GEO Strategy",
      metric: "Tier 1",
      metricLabel: "Citation Rate in Perplexity",
      description: "A consultancy wanted to appear in AI-generated answers when users asked questions in their niche. I structured their brand entities, rewrote key pages for AI readability, and built semantic co-citation signals through content partnerships. They now consistently appear as a cited source in Perplexity and ChatGPT responses.",
      tags: ["GEO Optimization", "Entity SEO", "Perplexity", "AI Citations"]
    },
    {
      id: 4,
      title: "Google AI Overviews Positioning",
      category: "AI Search",
      metric: "Featured",
      metricLabel: "AI Overviews Placement",
      description: "A B2B brand was missing from Google's AI Overview results despite ranking well in traditional search. I aligned their content model with SGE requirements — restructuring answers, adding FAQ schema, and building entity authority through structured definitions. They now appear consistently in AI Overview panels for their core queries.",
      tags: ["AI Overviews", "SGE", "Schema Markup", "Semantic Content"]
    },
    {
      id: 5,
      title: "SaaS B2B Lead Generation SEO",
      category: "Strategic SEO",
      metric: "+380%",
      metricLabel: "Qualified Inbound Leads",
      description: "A SaaS platform was relying heavily on paid acquisition with minimal organic presence. I designed a full content strategy targeting bottom-of-funnel comparison and use-case queries, built topical authority across the product category, and optimized conversion paths from organic landing pages. Qualified leads grew by 380% within six months.",
      tags: ["B2B SEO", "SaaS", "Content Strategy", "Lead Generation"]
    },
    {
      id: 6,
      title: "Local SEO Domination",
      category: "Local SEO",
      metric: "+320%",
      metricLabel: "Inbound Calls from Search",
      description: "A local service business was invisible in Google Maps and local pack results despite years in operation. I optimized their Google Business Profile, built consistent local citations, and created location-specific landing pages targeting 50+ service-area keywords. Inbound calls from search grew by 320% within 90 days.",
      tags: ["Local SEO", "Google Business Profile", "Citation Building", "Local Pack"]
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Growth Marketing Projects | Real Results by Utsa Das | Paid Ads, SEO, GEO, CRO</title>
        <meta name="description" content="Featured growth marketing project work by Utsa Das (Utsa Chandra Das) — including paid advertising, e-commerce organic growth, AI citation programs, SEO, and CRO wins with measurable revenue outcomes." />
        <link rel="canonical" href="https://utsadas.com/projects" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Utsa Das | Growth Marketing Strategist" />
        <meta property="og:title" content="Growth Marketing Projects | Real Results by Utsa Das" />
        <meta property="og:description" content="Featured growth marketing projects by Utsa Das — e-commerce organic growth (+82% revenue), AI citation programs, enterprise technical SEO, SaaS lead gen (+380%), and more. Measurable outcomes only." />
        <meta property="og:url" content="https://utsadas.com/projects" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://utsadas.com/opengraph.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@utsadas" />
        <meta name="twitter:title" content="Growth Marketing Projects | Real Results by Utsa Das" />
        <meta name="twitter:description" content="Real growth marketing results by Utsa Das — SEO, GEO, paid ads, and CRO projects with measurable revenue outcomes." />
        <meta name="twitter:image" content="https://utsadas.com/opengraph.jpg" />
        <meta name="keywords" content="Utsa Das projects, Utsa Chandra Das portfolio, growth marketing results Bangladesh, SEO GEO projects Bangladesh" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Growth Marketing Projects by Utsa Das",
          "url": "https://utsadas.com/projects",
          "numberOfItems": projects.length,
          "itemListElement": projects.map((p, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": p.title,
            "description": p.description
          }))
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://utsadas.com/" },
            { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://utsadas.com/projects" }
          ]
        })}</script>
      </Helmet>

      <section className="py-24 pt-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(var(--primary),0.05)_0,transparent_50%)] pointer-events-none" />
        <div className="container max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-panel text-primary text-xs font-semibold border border-primary/25 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Measurable Results
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Selected Projects by Utsa Das</h1>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Growth marketing projects across paid advertising, e-commerce SEO, GEO optimization, and AI search visibility — each with a clear problem, a clear system, and a measurable revenue outcome.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-14 md:mb-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 hover:border-primary/30 transition-all relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] transition-colors group-hover:bg-primary/10" />
                <span className="text-xs text-primary font-bold tracking-wider uppercase mb-5 block">
                  {project.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
                  {project.title}
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-8 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-foreground/80 border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-end gap-6 border-t border-border/50 pt-6">
                  <div className="text-5xl font-bold tracking-tighter text-foreground">
                    {project.metric}
                  </div>
                  <div className="text-muted-foreground pb-1 font-medium text-sm">
                    {project.metricLabel}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center bg-secondary/30 rounded-3xl p-6 sm:p-12 border border-border">
            <h2 className="text-3xl font-bold mb-4">Working on something similar?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Every growth system starts with a conversation. Tell Utsa Das what you're trying to fix or build — and he'll tell you what's actually possible and what will drive the most impact.
            </p>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold items-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(var(--primary),0.3)]"
            >
              Start the Conversation <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
