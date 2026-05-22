import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/8801861393416?text=Hi%20Utsa%2C%20I%27d%20like%20to%20discuss%20a%20project";

const skillGroups = [
  {
    heading: "Search & GEO Strategy",
    skills: [
      { name: "Technical SEO", desc: "Crawl architecture, indexation, rendering, log file analysis" },
      { name: "GEO Optimization", desc: "AI citation structure, entity optimization, generative engine strategy" },
      { name: "AI Search Visibility", desc: "ChatGPT, Perplexity, Gemini, and Google AI Overviews positioning" },
      { name: "Keyword Research", desc: "Search intent mapping, gap analysis, cluster planning" },
      { name: "SEO Strategy", desc: "Roadmap development, competitive analysis, long-term planning" },
    ],
  },
  {
    heading: "Content & On-Page",
    skills: [
      { name: "Content Strategy", desc: "Topic clusters, topical authority, editorial planning" },
      { name: "Schema Markup", desc: "Article, Product, FAQ, Organization, and Entity schema" },
      { name: "Entity SEO", desc: "Brand entity definition, knowledge panel optimization" },
      { name: "On-Page Optimization", desc: "Title tags, meta descriptions, heading hierarchy, internal links" },
      { name: "E-E-A-T Signals", desc: "Author authority, trust indicators, citation building" },
    ],
  },
  {
    heading: "Specialist Areas",
    skills: [
      { name: "Ecommerce SEO", desc: "Category architecture, product schema, shopping feeds" },
      { name: "Core Web Vitals", desc: "LCP, CLS, INP optimization and performance auditing" },
      { name: "JavaScript SEO", desc: "Rendering diagnostics, hydration issues, SPA crawlability" },
      { name: "Local SEO", desc: "Google Business Profile, local citations, geo-targeting" },
      { name: "Migration Strategy", desc: "Site migrations, redirect mapping, indexation recovery" },
    ],
  },
];

const tools = [
  "Google Search Console",
  "Google Analytics 4",
  "Google Tag Manager",
  "Ahrefs",
  "SEMrush",
  "Screaming Frog",
  "Lighthouse",
  "Log File Analyser",
  "ChatGPT",
  "Google Gemini",
  "Perplexity AI",
  "Claude",
  "WordPress",
  "Shopify",
  "Google SGE / AI Overviews",
];

export default function Skills() {
  return (
    <Layout>
      <Helmet>
        <title>SEO & GEO Skills | Technical Expertise | Utsa Das</title>
        <meta name="description" content="Explore the technical SEO, GEO optimization, content strategy, and AI search expertise of Utsa Das — including tools like Ahrefs, Screaming Frog, Google Search Console, and AI platforms." />
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
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Built Over 4+ Years of Practice
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Skills & Expertise</h1>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              A detailed breakdown of the SEO, GEO, and AI search skills I've developed since 2022 — and the tools I use to put them into practice.
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
              Tell me what you're trying to build — whether it's traditional search rankings, AI search visibility, or both. I'll be direct about where I can add the most value.
            </p>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold items-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(var(--primary),0.3)]"
            >
              Discuss Your Project <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
