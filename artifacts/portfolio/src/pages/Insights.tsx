import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { Link } from "wouter";

const WHATSAPP_LINK = "https://wa.me/8801861393416?text=Hi%20Utsa%2C%20I%27d%20like%20to%20discuss%20a%20project";

const articles = [
  {
    slug: "what-is-geo-optimization",
    category: "GEO",
    readTime: "7 min",
    title: "What Is Generative Engine Optimization (GEO)?",
    excerpt:
      "GEO is the discipline of structuring your content and entity data so AI search engines — ChatGPT, Perplexity, Gemini — cite your brand as the authoritative answer. Here's a complete breakdown.",
    tags: ["GEO", "AI Search", "Content Strategy"],
  },
  {
    slug: "technical-seo-in-2025",
    category: "Technical SEO",
    readTime: "9 min",
    title: "Technical SEO in 2025: What's Actually Changed",
    excerpt:
      "From INP replacing FID to AI bot crawling patterns — this guide covers every technical shift you need to account for in your SEO architecture this year.",
    tags: ["Technical SEO", "Core Web Vitals", "Crawling"],
  },
  {
    slug: "ai-search-visibility-brands",
    category: "AI Search",
    readTime: "6 min",
    title: "How Brands Become Visible in AI Search Results",
    excerpt:
      "AI models don't rank pages — they synthesize entities. Understanding how LLMs retrieve and cite brand information is the key to winning AI-era visibility.",
    tags: ["AI Search", "GEO", "Branding"],
  },
  {
    slug: "ecommerce-seo-category-architecture",
    category: "Ecommerce SEO",
    readTime: "8 min",
    title: "Category Architecture for Ecommerce SEO: A Strategic Guide",
    excerpt:
      "Poor category structure is the silent killer of ecommerce organic growth. This guide walks through semantic hub models, internal linking, and product hierarchy best practices.",
    tags: ["Ecommerce SEO", "Architecture", "Internal Linking"],
  },
  {
    slug: "schema-markup-structured-data-guide",
    category: "Schema & Structured Data",
    readTime: "10 min",
    title: "Schema Markup: The Definitive Guide for 2025",
    excerpt:
      "Structured data is no longer optional — it's the bridge between your content and AI comprehension. Learn how to implement FAQPage, HowTo, Person, and Article schema effectively.",
    tags: ["Schema", "Structured Data", "Technical SEO"],
  },
  {
    slug: "google-ai-overviews-strategy",
    category: "AI Overviews",
    readTime: "7 min",
    title: "Getting Featured in Google AI Overviews: A Practical Strategy",
    excerpt:
      "Google's AI Overviews (formerly SGE) synthesize answers from highly authoritative sources. Here's how to structure your content to become the go-to source.",
    tags: ["Google AI Overviews", "SGE", "Content Strategy"],
  },
];

const categoryColors: Record<string, string> = {
  "GEO": "text-violet-400 bg-violet-400/10 border-violet-400/20",
  "Technical SEO": "text-blue-400 bg-blue-400/10 border-blue-400/20",
  "AI Search": "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  "Ecommerce SEO": "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  "Schema & Structured Data": "text-orange-400 bg-orange-400/10 border-orange-400/20",
  "AI Overviews": "text-pink-400 bg-pink-400/10 border-pink-400/20",
};

export default function Insights() {
  return (
    <Layout>
      <Helmet>
        <title>SEO & GEO Insights | Utsa Das</title>
        <meta
          name="description"
          content="Expert insights on SEO, GEO, AI search optimization, technical SEO, and ecommerce growth from Utsa Das — Bangladesh's leading SEO & GEO Strategist."
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
              <span className="w-2 h-2 rounded-full bg-primary" />
              Expert Perspectives
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              SEO & GEO Insights
            </h1>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              In-depth perspectives on modern search strategy, AI visibility, and the future of digital discovery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {articles.map((article, i) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-panel rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 group overflow-hidden flex flex-col"
              >
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                        categoryColors[article.category] ?? "text-primary bg-primary/10 border-primary/20"
                      }`}
                    >
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {article.readTime} read
                    </span>
                  </div>

                  <h2 className="text-xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.map((tag) => (
                      <span key={tag} className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all"
                  >
                    Discuss this topic
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center glass-panel rounded-3xl p-12 border border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Want a Custom SEO Strategy?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                These insights are just the surface. Let's build a tailored strategy for your specific business.
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
