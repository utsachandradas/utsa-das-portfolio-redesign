import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { m } from "framer-motion";
import { ArrowRight, Clock, Tag } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/8801861393416?text=Hi%20Utsa%2C%20I%27d%20like%20to%20discuss%20a%20project";

const articles = [
  {
    slug: "what-is-geo-optimization",
    category: "GEO",
    readTime: "7 min",
    title: "What Is Generative Engine Optimization (GEO)?",
    excerpt:
      "GEO is the discipline of structuring your content and entity data so AI search engines — ChatGPT, Perplexity, Gemini — cite your brand as the authoritative answer. Here's a complete breakdown of what it means, why it matters, and how to start doing it right now.",
    tags: ["GEO", "AI Search", "Content Strategy"],
  },
  {
    slug: "how-brands-become-visible-in-ai-search",
    category: "AI Search",
    readTime: "6 min",
    title: "How Brands Become Visible in AI Search Results",
    excerpt:
      "AI models don't rank pages — they synthesize entities. Understanding how large language models retrieve and cite brand information is the single most important shift in digital marketing today. Here's what it means for your brand.",
    tags: ["AI Search", "GEO", "Brand Visibility"],
  },
  {
    slug: "technical-seo-in-2025",
    category: "Technical SEO",
    readTime: "9 min",
    title: "Technical SEO in 2025: What's Actually Changed",
    excerpt:
      "From INP replacing FID to AI bot crawling patterns and rendering shifts — this guide covers every technical change you need to account for in your SEO architecture this year. Practical, direct, no fluff.",
    tags: ["Technical SEO", "Core Web Vitals", "Crawling"],
  },
  {
    slug: "entity-seo-ai-authority",
    category: "GEO",
    readTime: "8 min",
    title: "Entity SEO: How to Build the Authority AI Systems Recognize",
    excerpt:
      "Entity SEO is not a trend — it's the foundation of how both Google's Knowledge Graph and AI language models understand who you are. If your brand isn't defined as a clear, trustworthy entity, you're invisible to the systems that matter most.",
    tags: ["Entity SEO", "Knowledge Graph", "GEO"],
  },
  {
    slug: "topical-authority-vs-backlinks",
    category: "Content SEO",
    readTime: "7 min",
    title: "Why Topical Authority Matters More Than Backlinks in 2025",
    excerpt:
      "Backlinks are still valuable — but they're no longer the primary driver of rankings. Topical authority, built through comprehensive content clusters and semantic relevance, is what Google's Helpful Content updates actually reward.",
    tags: ["Topical Authority", "Content Strategy", "SEO"],
  },
  {
    slug: "how-to-optimize-for-perplexity-ai",
    category: "GEO",
    readTime: "6 min",
    title: "How to Get Your Brand Cited by Perplexity AI",
    excerpt:
      "Perplexity is the fastest-growing AI search engine in the world. It pulls real-time answers from the web, citing sources directly. This guide explains exactly what content signals and source quality indicators Perplexity favours — and how to build them.",
    tags: ["Perplexity", "AI Search", "GEO"],
  },
  {
    slug: "ecommerce-seo-category-architecture",
    category: "Ecommerce SEO",
    readTime: "8 min",
    title: "Category Architecture for Ecommerce SEO: A Strategic Guide",
    excerpt:
      "Poor category structure is the silent killer of ecommerce organic growth. This guide walks through semantic hub models, internal linking strategy, and product hierarchy best practices that actually move non-brand revenue.",
    tags: ["Ecommerce SEO", "Architecture", "Internal Linking"],
  },
  {
    slug: "schema-markup-structured-data-guide",
    category: "Schema & Structured Data",
    readTime: "10 min",
    title: "Schema Markup: The Definitive Guide for 2025",
    excerpt:
      "Structured data is no longer optional — it's the bridge between your content and AI comprehension. Learn how to implement FAQPage, HowTo, Person, Product, and Article schema in ways that actually influence both search rankings and AI citations.",
    tags: ["Schema", "Structured Data", "Technical SEO"],
  },
  {
    slug: "google-ai-overviews-strategy",
    category: "AI Overviews",
    readTime: "7 min",
    title: "Getting Featured in Google AI Overviews: A Practical Strategy",
    excerpt:
      "Google's AI Overviews synthesize answers from highly authoritative sources. Here's how to structure your content, implement the right schema, and build the topical authority signals Google needs to confidently pull from your site.",
    tags: ["Google AI Overviews", "SGE", "Content Strategy"],
  },
  {
    slug: "how-to-write-content-for-humans-and-ai",
    category: "Content SEO",
    readTime: "7 min",
    title: "How to Write Content That Humans and AI Search Engines Both Love",
    excerpt:
      "Writing for AI search doesn't mean writing for robots. The brands winning in generative AI results write clearly, define concepts precisely, and structure information so it can be extracted and synthesized. Here's the practical approach.",
    tags: ["Content Writing", "AI Search", "GEO"],
  },
  {
    slug: "internal-linking-strategy-seo",
    category: "Technical SEO",
    readTime: "6 min",
    title: "Internal Linking Strategy: The Most Underrated SEO Lever",
    excerpt:
      "Most SEOs obsess over backlinks while their internal linking structure quietly destroys PageRank distribution. A well-planned internal link architecture is often the single fastest path to meaningful ranking improvement for existing content.",
    tags: ["Internal Linking", "PageRank", "Technical SEO"],
  },
  {
    slug: "core-web-vitals-2025",
    category: "Technical SEO",
    readTime: "8 min",
    title: "Core Web Vitals in 2025: What Actually Moves the Ranking Needle",
    excerpt:
      "INP is now a Core Web Vital. LCP thresholds have tightened. And Google is now surfacing CWV signals inside AI Overviews. Here's a practical guide to what's changed, what still matters, and how to prioritise your optimisation efforts.",
    tags: ["Core Web Vitals", "INP", "LCP", "Technical SEO"],
  },
  {
    slug: "search-intent-modern-seo",
    category: "Content SEO",
    readTime: "7 min",
    title: "Understanding Search Intent: The Foundation of Modern SEO",
    excerpt:
      "Every query has an intent behind it — informational, transactional, navigational, or commercial. Mapping your content to the precise intent behind each keyword is what separates SEO strategies that compound from those that plateau.",
    tags: ["Search Intent", "Keyword Strategy", "Content SEO"],
  },
  {
    slug: "optimize-for-chatgpt-and-claude",
    category: "GEO",
    readTime: "6 min",
    title: "How to Optimise Your Brand for ChatGPT and Claude AI Answers",
    excerpt:
      "ChatGPT and Claude are trained on a snapshot of the web — but they also use real-time retrieval. This guide explains how to build the entity authority, content structure, and co-citation signals that push your brand into AI-generated answers.",
    tags: ["ChatGPT", "Claude", "GEO", "AI Search"],
  },
  {
    slug: "content-clusters-vs-pillar-pages",
    category: "Content SEO",
    readTime: "8 min",
    title: "Content Clusters vs. Pillar Pages: Which Approach Wins in 2025?",
    excerpt:
      "Pillar pages dominated SEO strategy for half a decade. But with the rise of AI Overviews and topical authority signals, the cluster model has evolved. Here's an honest comparison of both approaches — and when to use each one.",
    tags: ["Content Clusters", "Pillar Pages", "Topical Authority"],
  },
  {
    slug: "local-seo-bangladesh",
    category: "Local SEO",
    readTime: "7 min",
    title: "Local SEO for Bangladesh: How to Dominate Google in Dhaka and Beyond",
    excerpt:
      "Local SEO in Bangladesh is underutilised, which means the opportunity is enormous for brands willing to invest properly. From Google Business Profile optimization to BD-specific search behaviour patterns — here's the complete playbook.",
    tags: ["Local SEO", "Bangladesh", "Google Business Profile"],
  },
  {
    slug: "google-search-console-for-seo-strategists",
    category: "Technical SEO",
    readTime: "9 min",
    title: "The Complete Google Search Console Guide for SEO Strategists",
    excerpt:
      "Most people use Search Console to check impressions and clicks. Smart SEOs use it to uncover crawl anomalies, indexation problems, core update impact, and new ranking opportunities. Here's how to actually use GSC as a strategic tool.",
    tags: ["Google Search Console", "Technical SEO", "Indexation"],
  },
  {
    slug: "geo-for-ecommerce",
    category: "Ecommerce SEO",
    readTime: "8 min",
    title: "GEO for Ecommerce: Optimising Product Pages for AI Search",
    excerpt:
      "Product pages that rank in Google are built differently from product pages that get cited in AI answers. This guide covers how to apply GEO principles to ecommerce — from product schema to entity-aligned descriptions — for brands that want to win in both.",
    tags: ["GEO", "Ecommerce SEO", "Product Schema", "AI Search"],
  },
  {
    slug: "technical-seo-audit-checklist",
    category: "Technical SEO",
    readTime: "11 min",
    title: "Technical SEO Audit Checklist: 40 Things to Check on Every Site",
    excerpt:
      "A complete technical SEO audit isn't just running Screaming Frog and calling it done. This checklist covers crawlability, indexation, rendering, Core Web Vitals, schema, internal linking, and AI-bot accessibility — the full stack, in order of priority.",
    tags: ["SEO Audit", "Technical SEO", "Checklist"],
  },
  {
    slug: "founders-guide-to-search-first-brand",
    category: "Strategy",
    readTime: "8 min",
    title: "The Founder's Guide to Building a Search-First Brand",
    excerpt:
      "Search is still the highest-intent acquisition channel in the world. But building a search-first brand in the AI era requires thinking beyond keywords — it requires entity authority, semantic content systems, and a long-term compounding mindset. Here's how founders should approach it.",
    tags: ["Founder Strategy", "Brand SEO", "GEO", "AI Search"],
  },
];

const categoryColors: Record<string, string> = {
  "GEO":                    "text-violet-400 bg-violet-400/10 border-violet-400/20",
  "Technical SEO":          "text-blue-400 bg-blue-400/10 border-blue-400/20",
  "AI Search":              "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  "Ecommerce SEO":          "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  "Schema & Structured Data": "text-orange-400 bg-orange-400/10 border-orange-400/20",
  "AI Overviews":           "text-pink-400 bg-pink-400/10 border-pink-400/20",
  "Content SEO":            "text-indigo-400 bg-indigo-400/10 border-indigo-400/20",
  "Local SEO":              "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  "Strategy":               "text-rose-400 bg-rose-400/10 border-rose-400/20",
};

export default function Insights() {
  return (
    <Layout>
      <Helmet>
        <title>SEO & GEO Insights | 20 Expert Articles | Utsa Das</title>
        <meta
          name="description"
          content="20 expert insights on SEO, GEO, AI search optimization, technical SEO, and ecommerce growth from Utsa Das — SEO & GEO Strategist since 2022."
        />
      </Helmet>

      <section className="py-20 pt-28 md:pt-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,oklch(0.70_0.24_272_/_0.07)_0,transparent_50%)] pointer-events-none" />
        <div className="container max-w-6xl mx-auto relative z-10 px-4 sm:px-6">

          {/* Header */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-primary text-sm font-medium mb-6 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Expert Perspectives · 20 Articles
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-tight">
              SEO & GEO Insights
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              In-depth perspectives on modern search strategy, AI visibility, and the future of digital discovery — written by a practitioner, not an algorithm.
            </p>
          </m.div>

          {/* Article grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-16">
            {articles.map((article, i) => (
              <m.article
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.07 }}
                className="glass-panel rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 group overflow-hidden flex flex-col"
                whileHover={{ y: -3 }}
              >
                <div className="p-6 flex flex-col flex-1">
                  {/* Category + read time */}
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${
                        categoryColors[article.category] ?? "text-primary bg-primary/10 border-primary/20"
                      }`}
                    >
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground ml-auto">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-base md:text-lg font-bold mb-3 tracking-tight group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-x-3 gap-y-1.5 mb-5">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="flex items-center gap-1 text-[10px] text-muted-foreground">
                        <Tag className="w-2.5 h-2.5" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-primary group-hover:gap-3 transition-all"
                  >
                    Discuss this topic
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </m.article>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center glass-panel rounded-2xl md:rounded-3xl p-8 md:p-12 border border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Want a Custom SEO Strategy?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-sm md:text-base">
                These insights are just the surface. Let's build a tailored strategy for your specific business goals.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
              >
                Chat on WhatsApp <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
