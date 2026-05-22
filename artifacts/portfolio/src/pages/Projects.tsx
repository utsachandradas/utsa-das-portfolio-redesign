import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/8801861393416?text=Hi%20Utsa%2C%20I%27d%20like%20to%20discuss%20a%20project";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Enterprise Technical SEO",
      category: "Technical SEO",
      metric: "+145%",
      metricLabel: "Organic Crawl Efficiency",
      description: "Restructured site architecture and resolved critical rendering issues for a 1M+ page enterprise site.",
      tags: ["Technical SEO", "Architecture", "Core Web Vitals"]
    },
    {
      id: 2,
      title: "D2C Ecommerce Architecture",
      category: "Ecommerce SEO",
      metric: "+82%",
      metricLabel: "Non-brand Organic Revenue",
      description: "Developed semantic category hubs and optimized product data feeds for a growing retail brand.",
      tags: ["Ecommerce", "Product SEO", "Revenue Growth"]
    },
    {
      id: 3,
      title: "LLM Visibility Injection",
      category: "GEO Experiments",
      metric: "Tier 1",
      metricLabel: "Citation Frequency in Perplexity",
      description: "Structured brand entities and semantic data to secure primary citations in AI search overviews.",
      tags: ["GEO", "Perplexity", "Entity SEO"]
    },
    {
      id: 4,
      title: "Semantic Entity Restructuring",
      category: "AI-Search",
      metric: "Featured",
      metricLabel: "AI Overviews Placement",
      description: "Aligned content models with Google's SGE requirements resulting in consistent featured placements.",
      tags: ["AI Search", "SGE", "Semantic Content"]
    },
    {
      id: 5,
      title: "SaaS Growth Strategy",
      category: "Strategic Growth",
      metric: "+380%",
      metricLabel: "Qualified Leads",
      description: "Implemented comprehensive SEO strategy for B2B SaaS platform driving enterprise leads.",
      tags: ["B2B SEO", "Lead Gen", "SaaS"]
    },
    {
      id: 6,
      title: "Local SEO Success",
      category: "Local SEO",
      metric: "+320%",
      metricLabel: "Inbound Calls",
      description: "Helped a service business rank #1 for 50+ local keywords dominating the regional market.",
      tags: ["Local SEO", "Google Business", "Conversion"]
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>SEO Case Studies & Projects | Utsa Das</title>
        <meta name="description" content="View featured SEO and GEO case studies by Utsa Das. Real results including traffic growth, lead generation, and AI search visibility improvements." />
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Selected Work & Impact</h1>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Case studies showcasing measurable results and strategic impact across traditional and AI search ecosystems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 mb-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel p-10 rounded-3xl border border-white/5 hover:border-primary/30 transition-all relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] transition-colors group-hover:bg-primary/10" />
                <span className="text-sm text-primary font-bold tracking-wider uppercase mb-6 block">
                  {project.category}
                </span>
                <h3 className="text-3xl font-bold text-foreground mb-4 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed mb-10 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-foreground/80 border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-end gap-6 border-t border-border/50 pt-8 mt-auto">
                  <div className="text-5xl font-bold tracking-tighter text-foreground">
                    {project.metric}
                  </div>
                  <div className="text-muted-foreground pb-1 font-medium">
                    {project.metricLabel}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center bg-secondary/30 rounded-3xl p-12 border border-border">
            <h2 className="text-3xl font-bold mb-6">Ready to Achieve Similar Results?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Let's discuss your goals and create a customized strategy to drive measurable growth for your business.</p>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold items-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(var(--primary),0.3)]"
            >
              Start Your Project <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}