import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/8801861393416?text=Hi%20Utsa%2C%20I%27d%20like%20to%20discuss%20a%20project";

export default function Skills() {
  const skills = [
    "Technical SEO", "GEO Optimization", "AI Search Optimization", 
    "Ecommerce SEO", "Keyword Research", "Schema Markup", 
    "Content Strategy", "Analytics & Tracking", "Core Web Vitals",
    "Entity SEO", "Log File Analysis", "JavaScript SEO",
    "Local SEO", "Migration Strategy", "SGE Readiness"
  ];

  return (
    <Layout>
      <Helmet>
        <title>SEO & GEO Expertise | Utsa Das</title>
        <meta name="description" content="Deep dive into the technical SEO, GEO, and digital growth skills of Utsa Das. Expert in AI search optimization, content strategy, and modern web development." />
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Technical Arsenal</h1>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Deep expertise across technical SEO, GEO optimization, content strategy, and modern digital visibility systems.
            </p>
          </motion.div>

          <div className="mb-24">
            <h2 className="text-2xl font-bold mb-10 text-center">Core Competencies</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-6 py-4 glass-panel rounded-2xl font-medium shadow-sm hover:border-primary/50 transition-colors border border-white/5"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-2xl font-bold mb-10 text-center">Tools & Technologies</h2>
            <div className="glass-panel p-12 rounded-3xl flex flex-wrap justify-center items-center gap-6 border border-white/5">
              {["Google Search Console", "Google Analytics 4", "Ahrefs", "SEMrush", "Screaming Frog", "ChatGPT", "Gemini", "Claude", "Perplexity", "Lighthouse"].map((tool) => (
                <span
                  key={tool}
                  className="px-5 py-2.5 rounded-xl border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200 font-medium text-sm cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center bg-secondary/30 rounded-3xl p-12 border border-border">
            <h2 className="text-3xl font-bold mb-6">Ready to Leverage This Expertise?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Let's discuss how my skills and experience can help your business achieve exceptional results.</p>
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