import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/8801861393416?text=Hi%20Utsa%2C%20I%27d%20like%20to%20discuss%20a%20project";

const skillGroups = [
  {
    heading: "Paid Advertising & Performance Marketing",
    skills: [
      { name: "Meta Ads (Facebook & Instagram)", desc: "Full-funnel campaign architecture, creative testing, and ROAS optimization" },
      { name: "Google Ads", desc: "Search, Display, Performance Max — keyword strategy, bidding, and conversion optimization" },
      { name: "TikTok Ads", desc: "Top-of-funnel scaling strategy for e-commerce and brand awareness campaigns" },
      { name: "Funnel Design & A/B Testing", desc: "Structured multi-stage funnels with systematic creative and copy testing" },
      { name: "Meta Pixel & CAPI Tracking", desc: "Conversion API setup, event tracking, and data quality optimization" },
      { name: "Google Tag Manager (GTM)", desc: "Tag management, event firing, and cross-channel tracking implementation" },
    ],
  },
  {
    heading: "SEO & GEO (Generative Engine Optimization)",
    skills: [
      { name: "Technical SEO", desc: "Crawl architecture, indexation, rendering, Core Web Vitals, and site structure" },
      { name: "GEO Optimization", desc: "AI citation structure, entity optimization, and generative engine strategy for ChatGPT, Perplexity, Google AI Overviews" },
      { name: "On-Page SEO", desc: "Keyword research, search intent mapping, heading hierarchy, and meta optimization" },
      { name: "Entity-Based SEO Architecture", desc: "Semantic web structure, knowledge graph optimization, and brand entity definition" },
      { name: "LLM Visibility Optimization", desc: "Content frameworks engineered specifically for AI citation and ranking" },
      { name: "Schema Markup", desc: "Article, Product, FAQ, Organization, and Person schema implementation" },
    ],
  },
  {
    heading: "E-Commerce & Web Development",
    skills: [
      { name: "Shopify", desc: "Store setup, theme optimization, conversion-focused UX, and app integration" },
      { name: "WordPress & WooCommerce", desc: "Full site development, plugin management, and e-commerce configuration" },
      { name: "High-Conversion Landing Pages", desc: "CRO-focused design and copy architecture built to convert paid traffic" },
      { name: "Page Speed Optimization", desc: "Core Web Vitals, image optimization, caching, and performance auditing" },
      { name: "CRO-Focused UX", desc: "Conversion rate optimization through user experience structure and testing" },
    ],
  },
  {
    heading: "Growth Strategy & Analytics",
    skills: [
      { name: "Full-Funnel Growth Architecture", desc: "Paid and organic integration into one unified acquisition-to-retention system" },
      { name: "Conversion Rate Optimization (CRO)", desc: "Systematic testing and optimization of conversion touchpoints across the funnel" },
      { name: "Retention & Lifecycle Marketing", desc: "Post-purchase strategy, email flows, and customer LTV optimization" },
      { name: "Performance Scaling Frameworks", desc: "Data-driven systems for scaling profitable acquisition across channels" },
      { name: "Analytics & Attribution", desc: "GA4 setup, conversion tracking, and cross-channel attribution modeling" },
    ],
  },
];

const tools = [
  "Meta Ads Manager",
  "Google Ads",
  "Google Tag Manager",
  "Meta Pixel & CAPI",
  "TikTok Ads Manager",
  "Google Search Console",
  "Google Analytics 4",
  "Ahrefs",
  "SEMrush",
  "Screaming Frog",
  "Lighthouse",
  "ChatGPT",
  "Google Gemini",
  "Perplexity AI",
  "Claude",
  "Shopify",
  "WordPress",
  "WooCommerce",
  "Google AI Overviews",
];

export default function Skills() {
  return (
    <Layout>
      <Helmet>
        <title>Growth Marketing Skills & Expertise | Utsa Das | Paid Ads, SEO, GEO, CRO</title>
        <meta
          name="description"
          content="Explore the growth marketing expertise of Utsa Das (Utsa Chandra Das) — including paid advertising (Meta, Google, TikTok), SEO, GEO optimization, e-commerce development, and full-funnel growth strategy built since 2022."
        />
        <link rel="canonical" href="https://utsadas.com/skills" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Utsa Das | Growth Marketing Strategist" />
        <meta property="og:title" content="Growth Marketing Skills & Expertise | Utsa Das | Paid Ads, SEO, GEO, CRO" />
        <meta property="og:description" content="Growth marketing expertise of Utsa Das — paid advertising (Meta, Google, TikTok), SEO, GEO, e-commerce development, and full-funnel growth strategy. Built over 4+ years of real execution since 2022." />
        <meta property="og:url" content="https://utsadas.com/skills" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://utsadas.com/opengraph.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@utsadas" />
        <meta name="twitter:title" content="Growth Marketing Skills & Expertise | Utsa Das" />
        <meta name="twitter:description" content="Paid ads, SEO, GEO, e-commerce, and full-funnel growth strategy skills by Utsa Das. Built over 4+ years of real execution since 2022." />
        <meta name="twitter:image" content="https://utsadas.com/opengraph.jpg" />
        <meta name="keywords" content="Utsa Das skills, Utsa Chandra Das expertise, growth marketing skills Bangladesh, paid ads expertise, SEO GEO skills Bangladesh" />
      </Helmet>

      <section className="py-24 pt-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(var(--primary),0.05)_0,transparent_50%)] pointer-events-none" />
        <div className="container max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-panel text-primary text-xs font-semibold border border-primary/25 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Built Over 4+ Years of Real Execution
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Skills & Expertise</h1>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              A comprehensive breakdown of the growth marketing skills Utsa Das has built since 2022 — across paid advertising, SEO, GEO, e-commerce, and full-funnel growth strategy.
            </p>
          </motion.div>

          <div className="space-y-12 mb-14 md:mb-24">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={gi}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.1 }}
              >
                <h2 className="text-xl font-bold mb-6 text-foreground tracking-tight">{group.heading}</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {group.skills.map((skill, si) => (
                    <motion.div
                      key={si}
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.08 + si * 0.04 }}
                      className="glass-panel rounded-xl p-5 border border-white/5 hover:border-primary/30 transition-all"
                    >
                      <p className="font-semibold text-foreground mb-1 text-sm">{skill.name}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{skill.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 md:mb-24"
          >
            <h2 className="text-xl font-bold mb-6 text-foreground tracking-tight">Tools & Platforms</h2>
            <div className="glass-panel p-7 md:p-10 rounded-3xl flex flex-wrap gap-3 border border-white/5">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-xl border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200 font-medium text-sm cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="text-center bg-secondary/30 rounded-3xl p-6 sm:p-12 border border-border">
            <h2 className="text-3xl font-bold mb-4">Want to put this expertise to work?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Tell Utsa Das what you're trying to build — whether it's paid acquisition, organic search visibility, AI discovery, or conversion optimization. He'll be direct about where he can add the most value.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold items-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(var(--primary),0.3)]"
            >
              Discuss Your Growth Project <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
