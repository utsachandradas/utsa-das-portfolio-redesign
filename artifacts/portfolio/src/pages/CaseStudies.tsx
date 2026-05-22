import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Sparkles, ExternalLink } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/8801861393416?text=Hi%20Utsa%2C%20I%27d%20like%20to%20discuss%20a%20project";

const cases = [
  {
    icon: FileText,
    category: "Content SEO · Business Blog",
    title: "Bytebd — Business Blog Organic Growth",
    client: "Bytebd",
    website: "https://bytebd.website",
    location: "Bangladesh",
    niche: "Business & Finance Content",
    challenge:
      "Bytebd launched as a business-focused blogging platform in Bangladesh with a highly competitive niche and near-zero domain authority. Content was published without a clear topical structure, resulting in poor crawl coverage, minimal indexation, and no meaningful organic traffic from Google.",
    solution:
      "Built a comprehensive topical authority framework by mapping 12 core business content clusters. Restructured the site architecture around hub-and-spoke content models, implemented Article and BreadcrumbList schema across all posts, and optimized internal linking to distribute PageRank efficiently. Title and meta systems were also standardized for click-through rate improvement.",
    results: [
      { metric: "+180%", label: "Organic Sessions" },
      { metric: "+94%", label: "Indexed Pages" },
      { metric: "Top 10", label: "Target Keyword Rankings" },
    ],
    tags: ["Content Clusters", "Topical Authority", "Article Schema", "Internal Linking", "Blog SEO", "Bangladesh"],
    color: "from-cyan-500/10 to-transparent border-cyan-500/20",
    accent: "text-cyan-400",
    accentBg: "bg-cyan-400/8",
  },
  {
    icon: Sparkles,
    category: "Ecommerce SEO · Beauty & Personal Care",
    title: "Beauty Monk — Ecommerce Organic Revenue",
    client: "Beauty Monk",
    website: "https://beautymonk.bd",
    location: "Bangladesh",
    niche: "Beauty & Personal Care",
    challenge:
      "Beauty Monk is a Bangladesh-based beauty and personal care e-commerce brand with a growing product catalogue but limited organic search presence. Category pages lacked semantic depth, product pages had thin content and no structured data, and non-brand organic traffic contributed almost nothing to revenue.",
    solution:
      "Redesigned the category architecture using semantic product taxonomy aligned with Bangladeshi consumer search behaviour. Implemented Product, Offer, and AggregateRating schema across all product pages. Developed a content hub targeting beauty-adjacent informational queries to build topical authority, and established a clean internal linking framework to push authority into high-revenue category pages.",
    results: [
      { metric: "+130%", label: "Non-brand Organic Revenue" },
      { metric: "+260%", label: "Organic Product Page Traffic" },
      { metric: "4x", label: "Category Page Rankings" },
    ],
    tags: ["Ecommerce SEO", "Product Schema", "Category Architecture", "Beauty Niche", "Content Hubs", "Bangladesh"],
    color: "from-pink-500/10 to-transparent border-pink-500/20",
    accent: "text-pink-400",
    accentBg: "bg-pink-400/8",
  },
];

export default function CaseStudies() {
  return (
    <Layout>
      <Helmet>
        <title>SEO & GEO Case Studies | Bytebd & Beauty Monk | Utsa Das</title>
        <meta
          name="description"
          content="Real SEO results for Bangladesh brands. Case studies covering Bytebd (business blog) and Beauty Monk (beauty ecommerce) — from Utsa Das, SEO & GEO Strategist."
        />
      </Helmet>

      <section className="py-20 pt-28 md:pt-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,oklch(0.70_0.24_272_/_0.07)_0,transparent_50%)] pointer-events-none" />
        <div className="container max-w-5xl mx-auto relative z-10 px-4 sm:px-6">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-primary text-sm font-medium mb-6 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Brand Case Studies
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-tight">Case Studies</h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Real SEO strategies. Measurable outcomes. Two Bangladesh brands, built for search.
            </p>
          </motion.div>

          {/* Case study cards */}
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
                  className={`glass-panel rounded-2xl md:rounded-3xl border bg-gradient-to-br ${cs.color} overflow-hidden`}
                >
                  <div className="p-6 md:p-10">

                    {/* Card header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-11 h-11 md:w-13 md:h-13 rounded-xl ${cs.accentBg} border border-white/10 flex items-center justify-center flex-shrink-0 ${cs.accent}`}>
                          <Icon className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                          <span className={`text-[10px] md:text-xs font-bold uppercase tracking-widest ${cs.accent}`}>
                            {cs.category}
                          </span>
                          <div className="flex flex-wrap items-center gap-2 mt-1">
                            <p className="text-sm font-semibold text-foreground">{cs.client}</p>
                            <span className="text-xs text-muted-foreground">· {cs.location}</span>
                            <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-muted-foreground">{cs.niche}</span>
                          </div>
                        </div>
                      </div>
                      <a
                        href={cs.website}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-white/10 hover:border-current transition-colors ${cs.accent} ${cs.accentBg} hover:bg-white/6`}
                      >
                        <ExternalLink className="w-3 h-3" />
                        {cs.website.replace("https://", "")}
                      </a>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 tracking-tight">{cs.title}</h2>

                    {/* Challenge / Solution */}
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">The Challenge</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">The Solution</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{cs.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-3 md:gap-5 mb-8 p-5 md:p-6 rounded-xl md:rounded-2xl bg-white/3 border border-white/5">
                      {cs.results.map((r, j) => (
                        <div key={j} className="text-center">
                          <p className={`text-2xl md:text-3xl font-bold tracking-tight ${cs.accent}`}>{r.metric}</p>
                          <p className="text-[10px] md:text-xs text-muted-foreground mt-1 leading-tight">{r.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
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

          {/* CTA */}
          <div className="text-center glass-panel rounded-2xl md:rounded-3xl p-8 md:p-12 border border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Be the Next Success Story?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-sm md:text-base">
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
