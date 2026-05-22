import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import HeroAvatar from "@/components/HeroAvatar";

const WHATSAPP_LINK = "https://wa.me/8801861393416?text=Hi%20Utsa%2C%20I%27d%20like%20to%20discuss%20a%20project";

export default function About() {
  const timeline = [
    {
      year: "2022",
      title: "Started the SEO Journey",
      description: "Began building deep expertise in technical SEO, keyword research, and on-page optimization — approaching search as a systems problem from day one."
    },
    {
      year: "2023",
      title: "GEO & AI Search Discovery",
      description: "As AI search systems emerged, shifted focus to Generative Engine Optimization (GEO) — structuring content and entities for AI-powered discovery platforms."
    },
    {
      year: "2024",
      title: "Founder-Led Strategy Practice",
      description: "Launched a founder-led consultancy, delivering technical SEO, GEO optimization, and AI-search readiness strategies for brands across industries."
    },
    {
      year: "2025",
      title: "AI-Era SEO Authority",
      description: "Building comprehensive AI-search optimization frameworks that help brands achieve Tier 1 citations in ChatGPT, Perplexity, Gemini, and Google AI Overviews."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>About Utsa Das | SEO & GEO Strategist</title>
        <meta name="description" content="Learn more about Utsa Das, an expert SEO Strategist and GEO Architect with over 10 years of experience in digital growth and search optimization." />
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
            <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-panel text-primary text-xs font-semibold border border-primary/25">
                4+ Years Experience
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-panel text-muted-foreground text-xs font-medium border border-white/8">
                SEO & GEO Strategist Since 2022
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-panel text-muted-foreground text-xs font-medium border border-white/8">
                Founder-Led Growth Systems
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">About Utsa Das</h1>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Bangladesh-based Founder, SEO & GEO Strategist with 4+ years of experience building AI-era search visibility systems since 2022.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-14 md:mb-24">
            {/* Avatar column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <HeroAvatar />
            </motion.div>

            {/* Text + values column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-5 text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  My journey into digital marketing began with a simple curiosity about how search engines work. What started as a hobby evolved into a professional passion for understanding and optimizing the digital landscape.
                </p>
                <p>
                  Over the years, I have helped dozens of businesses improve their online visibility, increase organic traffic, and achieve sustainable growth. My approach combines technical expertise with strategic thinking—ensuring every optimization serves a real business outcome.
                </p>
                <p>
                  Today, I'm focused on the intersection of SEO, <strong className="text-foreground font-semibold">Generative Engine Optimization (GEO)</strong>, and AI-powered search—helping brands stay ahead in an increasingly AI-driven world.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-2xl border border-white/5">
                <h3 className="text-lg font-bold mb-6 tracking-tight text-foreground">Core Values</h3>
                <ul className="space-y-5">
                  {[
                    { title: "Transparency", desc: "Clear communication and honest reporting at every stage." },
                    { title: "Innovation", desc: "Always exploring emerging strategies and AI-era tools." },
                    { title: "Results-Driven", desc: "Focused on measurable business outcomes, not vanity metrics." }
                  ].map((val, i) => (
                    <li key={i} className="flex gap-4">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-0.5">{val.title}</h4>
                        <p className="text-sm text-muted-foreground">{val.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="mb-14 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">Career Timeline</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 md:gap-8"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-lg flex-shrink-0 shadow-lg shadow-primary/5">
                      {item.year}
                    </div>
                    {index !== timeline.length - 1 && (
                      <div className="w-[1px] h-full bg-border my-4" />
                    )}
                  </div>
                  <div className="pb-8 pt-4">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground font-light">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="text-center bg-secondary/30 rounded-3xl p-6 sm:p-12 border border-border">
            <h2 className="text-3xl font-bold mb-6">Ready to work together?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Let's discuss how I can help your business achieve better visibility and sustainable growth.</p>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold items-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(var(--primary),0.3)]"
            >
              Contact me on WhatsApp <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}