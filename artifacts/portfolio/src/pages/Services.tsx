import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Megaphone, BrainCircuit, Code, BarChart, CheckCircle2, ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/8801861393416?text=Hi%20Utsa%2C%20I%27d%20like%20to%20discuss%20a%20project";

export default function Services() {
  const services = [
    {
      icon: Megaphone,
      title: "1. Paid Advertising — Performance Marketing",
      description: "Scaling customer acquisition through structured, data-driven advertising systems. Utsa Das builds full-funnel paid campaigns engineered for consistent ROAS growth and profitable acquisition — not just impressions.",
      benefits: [
        "Meta Ads (Facebook & Instagram) — full-funnel campaign architecture",
        "Google Ads — Search, Display, and Performance Max systems",
        "TikTok Ads scaling strategy",
        "Funnel design, A/B testing, and conversion optimization",
        "Meta Pixel & CAPI tracking systems",
        "Google Tag Manager (GTM) setup and management",
      ],
    },
    {
      icon: BrainCircuit,
      title: "2. SEO & GEO — Generative Engine Optimization",
      description: "Advanced search visibility systems for both traditional search engines and AI-driven discovery platforms. Utsa Chandra Das builds content frameworks engineered for AI citation by ChatGPT, Perplexity, and Google AI Overviews.",
      benefits: [
        "Keyword research and search intent mapping",
        "On-page SEO and technical SEO optimization",
        "Entity-based SEO architecture (semantic web structure)",
        "LLM visibility optimization for AI search readiness",
        "Structured content systems for generative engines",
        "Content frameworks engineered for AI citation and ranking",
      ],
    },
    {
      icon: Code,
      title: "3. E-Commerce & Web Development",
      description: "Building high-performance digital storefronts optimized for conversion and speed. From Shopify to WordPress, every build is engineered around one goal: turning traffic into revenue.",
      benefits: [
        "Shopify store setup and optimization",
        "WordPress and WooCommerce development",
        "High-conversion landing page design",
        "CRO-focused UX structure",
        "Page speed and performance optimization",
        "Conversion-first UI systems",
      ],
    },
    {
      icon: BarChart,
      title: "4. Growth Strategy & Analytics",
      description: "Full-funnel systems that connect acquisition, behavior, and revenue performance. Utsa Das designs data-driven scaling frameworks that make growth predictable and profitable — not guesswork.",
      benefits: [
        "Full-funnel growth architecture (paid + organic integration)",
        "Conversion Rate Optimization (CRO) systems",
        "Retention and lifecycle marketing strategy",
        "Performance scaling frameworks",
        "Data-driven decision systems",
        "Attribution and analytics setup",
      ],
    },
  ];

  const schemaJSONLD = {
    "@context": "http://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Person",
      "name": "Utsa Das",
      "alternateName": "Utsa Chandra Das",
      "jobTitle": "Growth Marketing Strategist",
      "address": { "@type": "PostalAddress", "addressCountry": "Bangladesh" }
    },
    "serviceType": "Growth Marketing Strategy",
    "description": "Utsa Das (Utsa Chandra Das) provides growth marketing services including paid advertising (Meta, Google, TikTok), SEO, GEO, e-commerce development, and full-funnel growth strategy for e-commerce and B2B brands in Bangladesh and globally.",
    "areaServed": "Worldwide"
  };

  return (
    <Layout>
      <Helmet>
        <title>Growth Marketing Services by Utsa Das | Paid Ads, SEO, GEO, CRO, E-Commerce</title>
        <meta
          name="description"
          content="Growth marketing services by Utsa Das (Utsa Chandra Das) — including paid advertising (Meta, Google, TikTok), SEO & GEO optimization, e-commerce development, and full-funnel growth strategy for brands in Bangladesh and globally."
        />
        <meta name="keywords" content="Utsa Das services, Utsa Chandra Das growth marketing, paid advertising Bangladesh, SEO GEO services Bangladesh, e-commerce growth Bangladesh, CRO Bangladesh" />
        <script type="application/ld+json">{JSON.stringify(schemaJSONLD)}</script>
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
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Founder-Led · Real E-Commerce Execution
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Growth Marketing Services</h1>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Four integrated service areas built by Utsa Das — designed to work as a unified growth system, not isolated tactics. Every channel is engineered for revenue outcomes.
            </p>
          </motion.div>

          <div className="space-y-6 mb-14 md:mb-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="glass-panel p-8 md:p-10 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group"
                >
                  <div className="grid md:grid-cols-3 gap-8 items-start">
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-4 mb-5">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold tracking-tight">{service.title}</h2>
                      </div>
                      <p className="text-muted-foreground mb-0 text-base font-light leading-relaxed">{service.description}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">What's Included</p>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm font-medium text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* What Makes This Different */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="glass-panel rounded-2xl p-8 md:p-12 border border-primary/15 mb-14 md:mb-24"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight text-center">What Makes This Growth Approach Different</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Built on real e-commerce execution — not theoretical marketing models",
                "Combines SEO, GEO, ads, and CRO into one unified system",
                "Focused on revenue outcomes, not vanity metrics",
                "Designed for both human search engines and AI discovery systems",
                "Structured for scalable long-term digital asset growth",
                "Founder-led by Utsa Das — no agency layers, no diluted output",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3 glass-panel rounded-xl p-4 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="text-center bg-secondary/30 rounded-3xl p-6 sm:p-12 border border-border">
            <h2 className="text-3xl font-bold mb-4">Ready to build a scalable growth system?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Tell Utsa Das where you are and what you're trying to achieve — he'll be direct about which growth systems will drive the most impact for your brand.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold items-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(var(--primary),0.3)]"
            >
              Let's Talk Growth Strategy <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
