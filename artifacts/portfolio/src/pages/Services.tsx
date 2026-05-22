import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Zap, TrendingUp, Brain, Search, ShoppingCart, User, CheckCircle2, ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/8801861393416?text=Hi%20Utsa%2C%20I%27d%20like%20to%20discuss%20a%20project";

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: "GEO Optimization",
      description: "Generative Engine Optimization (GEO) is about making your brand the source AI systems like ChatGPT, Perplexity, and Google AI Overviews choose to cite when users ask questions in your industry.",
      benefits: [
        "Entity and brand definition for AI knowledge systems",
        "Citation-worthy content architecture",
        "Semantic relationship mapping",
        "AI Overviews and answer engine positioning",
      ],
    },
    {
      icon: Zap,
      title: "Technical SEO",
      description: "A technically clean website is the foundation everything else is built on. I audit and fix the issues that prevent crawlers — and AI bots — from properly accessing, rendering, and understanding your site.",
      benefits: [
        "Crawlability and indexation audits",
        "Core Web Vitals and rendering performance",
        "JavaScript SEO and structured data",
        "Site architecture and internal linking",
      ],
    },
    {
      icon: Search,
      title: "SEO Strategy",
      description: "Effective SEO strategy connects keyword research, competitive positioning, and content planning into a coherent roadmap with predictable compounding returns over time.",
      benefits: [
        "Keyword and search intent research",
        "Competitive gap analysis",
        "Topic cluster and authority planning",
        "Ongoing performance tracking",
      ],
    },
    {
      icon: ShoppingCart,
      title: "Ecommerce SEO",
      description: "Ecommerce SEO is its own discipline. I build category architectures, product schema systems, and semantic content hubs that drive non-brand organic traffic to revenue-generating pages.",
      benefits: [
        "Category page architecture and optimization",
        "Product and Offer schema implementation",
        "Shopping feed and search visibility",
        "Conversion-focused organic growth",
      ],
    },
    {
      icon: TrendingUp,
      title: "Content Strategy",
      description: "Content needs to serve both human readers and search systems. I design content frameworks that align with real search intent, build topical authority, and are structured for AI citation.",
      benefits: [
        "Search-intent aligned content planning",
        "Topical authority and cluster development",
        "AI-friendly content formatting",
        "Editorial calendar and production support",
      ],
    },
    {
      icon: User,
      title: "Personal Brand SEO",
      description: "If you're building a personal brand or consultancy, your name is an entity — and it needs to be optimized. I help founders and professionals build search and AI visibility around who they are and what they do.",
      benefits: [
        "Personal brand entity optimization",
        "Knowledge panel and authority signals",
        "Thought leadership content strategy",
        "LinkedIn and social SEO alignment",
      ],
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>SEO & GEO Services by Utsa Das | Technical SEO, GEO Optimization, Ecommerce SEO</title>
        <meta name="description" content="SEO and GEO services by Utsa Das — including technical SEO audits, Generative Engine Optimization, ecommerce SEO, content strategy, and AI search visibility for brands in Bangladesh and globally." />
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
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Founder-Led · No Agency Layers
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">SEO & GEO Services</h1>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Six service areas built around one goal: making your brand visible where your customers are actually searching — in Google, and increasingly, in AI systems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 mb-14 md:mb-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-3 tracking-tight">{service.title}</h2>
                  <p className="text-muted-foreground mb-7 text-sm font-light leading-relaxed">{service.description}</p>
                  <ul className="space-y-3.5">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center bg-secondary/30 rounded-3xl p-6 sm:p-12 border border-border">
            <h2 className="text-3xl font-bold mb-4">Not sure which service fits?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Most brands need a combination. Tell me where you are and what you're trying to achieve — I'll tell you honestly what makes sense to focus on first.
            </p>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold items-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(var(--primary),0.3)]"
            >
              Let's Talk Strategy <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
