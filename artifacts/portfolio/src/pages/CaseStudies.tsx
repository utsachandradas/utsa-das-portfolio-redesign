import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Globe, Brain, ShoppingCart } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/8801861393416?text=Hi%20Utsa%2C%20I%27d%20like%20to%20discuss%20a%20project";

const cases = [
  {
    icon: Globe,
    category: "Technical SEO",
    title: "Enterprise Technical SEO Overhaul",
    client: "Large-Scale Publisher (1M+ Pages)",
    challenge:
      "A major publisher was facing severe crawl budget waste, JavaScript rendering issues, and duplicate content problems across 1M+ pages, resulting in poor indexation rates.",
    solution:
      "Implemented a comprehensive crawl budget optimization strategy, resolved JS rendering issues via server-side rendering, and built a canonical architecture to eliminate duplicate signals.",
    results: [
      { metric: "+145%", label: "Crawl Efficiency" },
      { metric: "+62%", label: "Indexed Pages" },
      { metric: "-38%", label: "Crawl Errors" },
    ],
    tags: ["Core Web Vitals", "Crawl Budget", "JavaScript SEO", "Canonicalization"],
    color: "from-blue-500/10 to-transparent border-blue-500/20",
    accent: "text-blue-400",
  },
  {
    icon: ShoppingCart,
    category: "Ecommerce SEO",
    title: "D2C Ecommerce Organic Revenue Growth",
    client: "Direct-to-Consumer Retail Brand",
    challenge:
      "A growing D2C brand had excellent products but poor organic visibility. Their category architecture was flat, product pages were thin, and non-brand organic traffic was near zero.",
    solution:
      "Developed semantic category hub pages, implemented product schema, created a topical content cluster strategy, and optimized internal linking with PageRank sculpting.",
    results: [
      { metric: "+82%", label: "Non-brand Revenue" },
      { metric: "+210%", label: "Organic Sessions" },
      { metric: "3x", label: "Category Rankings" },
    ],
    tags: ["Category Architecture", "Product Schema", "Internal Linking", "Content Clusters"],
    color: "from-emerald-500/10 to-transparent border-emerald-500/20",
    accent: "text-emerald-400",
  },
  {
    icon: Brain,
    category: "GEO / AI Search",
    title: "LLM Visibility & Citation Injection",
    client: "B2B SaaS Brand",
    challenge:
      "A B2B SaaS company was invisible in AI-generated answers from Perplexity, ChatGPT, and Google's AI Overviews despite being a market leader in their niche.",
    solution:
      "Structured brand entities using schema markup, created authoritative reference content optimized for LLM retrieval, implemented knowledge panel strategy, and built entity co-citation signals across high-authority sources.",
    results: [
      { metric: "Tier 1", label: "Perplexity Citation" },
      { metric: "Featured", label: "AI Overviews" },
      { metric: "+3x", label: "Brand Mentions in AI" },
    ],
    tags: ["GEO", "AI Search", "Entity SEO", "Knowledge Graph"],
    color: "from-violet-500/10 to-transparent border-violet-500/20",
    accent: "text-violet-400",
  },
  {
    icon: TrendingUp,
    category: "AI-Search Optimization",
    title: "Semantic Entity Restructuring for AI Overviews",
    client: "Professional Services Firm",
    challenge:
      "A professional services firm needed consistent placement in Google's AI Overviews. Their content was authoritative but not structured for AI synthesis.",
    solution:
      "Aligned content models with Google's SGE requirements, implemented structured FAQ schema, created definition-first content formats, and built topical authority through semantic clustering.",
    results: [
      { metric: "Featured", label: "AI Overviews" },
      { metric: "+95%", label: "Rich Results" },
      { metric: "+44%", label: "Click-Through Rate" },
    ],
    tags: ["Google AI Overviews", "Schema Markup", "Topical Authority", "Content Strategy"],
    color: "from-orange-500/10 to-transparent border-orange-500/20",
    accent: "text-orange-400",
  },
];

export default function CaseStudies() {
  return (
    <Layout>
      <Helmet>
        <title>SEO & GEO Case Studies | Utsa Das</title>
        <meta
          name="description"
          content="Real results from Utsa Das's SEO and GEO projects. Detailed case studies covering technical SEO, ecommerce growth, AI search visibility, and GEO optimization."
        />
      </Helmet>

      <section className="py-24 pt-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--tw-gradient-from)_0,transparent_50%)] from-primary/8 pointer-events-none" />
        <div className="container max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-primary text-sm font-medium mb-6 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Proven Results
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Case Studies</h1>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Deep dives into real SEO and GEO projects — the challenges, strategies, and measurable outcomes.
            </p>
          </motion.div>

          <div className="space-y-10 mb-20">
            {cases.map((cs, i) => {
              const Icon = cs.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`glass-panel rounded-3xl border bg-gradient-to-br ${cs.color} overflow-hidden`}
                >
                  <div className="p-8 md:p-10">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${cs.accent}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className={`text-xs font-bold uppercase tracking-widest ${cs.accent}`}>
                          {cs.category}
                        </span>
                        <p className="text-xs text-muted-foreground mt-0.5">{cs.client}</p>
                      </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">{cs.title}</h2>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-3">Challenge</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-3">Solution</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{cs.solution}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-8 p-6 rounded-2xl bg-white/3 border border-white/5">
                      {cs.results.map((r, j) => (
                        <div key={j} className="text-center">
                          <p className={`text-3xl font-bold tracking-tight ${cs.accent}`}>{r.metric}</p>
                          <p className="text-xs text-muted-foreground mt-1">{r.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cs.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full border border-white/10 text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center glass-panel rounded-3xl p-12 border border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Ready to Be the Next Success Story?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's discuss your current challenges and build a strategy that delivers measurable results.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
              >
                Start the Conversation <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
