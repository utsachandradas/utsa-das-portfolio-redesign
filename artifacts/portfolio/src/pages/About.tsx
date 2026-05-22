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
      title: "Where It Started — Technical SEO",
      description: "I started building hands-on expertise in technical SEO: crawl architecture, indexation analysis, on-page structure, and keyword intent mapping. From day one, I approached search as a systems problem — not a checklist."
    },
    {
      year: "2023",
      title: "Discovering Generative Engine Optimization",
      description: "As AI search systems began reshaping how people find information, I shifted part of my focus toward Generative Engine Optimization (GEO) — learning how LLMs like ChatGPT and Perplexity retrieve, rank, and cite sources."
    },
    {
      year: "2024",
      title: "Building a Founder-Led Practice",
      description: "I launched my own consulting practice, working directly with brand owners and marketers. No agency overhead, no junior handoffs — just focused SEO and GEO strategy built around each client's actual goals."
    },
    {
      year: "2025",
      title: "Specializing in AI-Era Search Visibility",
      description: "I now build integrated SEO and GEO frameworks that help brands rank in traditional search and get cited by AI systems — ChatGPT, Gemini, Perplexity, and Google AI Overviews — as authoritative sources."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>About Utsa Das — SEO & GEO Strategist from Bangladesh</title>
        <meta name="description" content="Utsa Das is a Bangladesh-based SEO and GEO Strategist with 4+ years of experience since 2022. He specializes in AI search optimization, technical SEO, and helping brands get cited by ChatGPT, Perplexity, and Google AI Overviews." />
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
                4+ Years of SEO & GEO Experience
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-panel text-muted-foreground text-xs font-medium border border-white/8">
                Active since 2022
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-panel text-muted-foreground text-xs font-medium border border-white/8">
                Founder-Led Strategy
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">About Utsa Das</h1>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Bangladesh-based SEO and GEO Strategist helping brands build search visibility that works in both traditional and AI-powered discovery systems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-14 md:mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <HeroAvatar />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-5 text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  I started in SEO because I wanted to understand why some websites consistently show up when people search — and others don't. That curiosity became a craft. Since 2022, I've spent every year going deeper into both the technical infrastructure of search and the strategic layer above it.
                </p>
                <p>
                  The part I care most about is the intersection of <strong className="text-foreground font-semibold">how search engines understand content</strong> and how brands can genuinely earn their place at the top. That's true for traditional SEO, and it's increasingly true for AI-powered systems like ChatGPT, Perplexity, and Google's AI Overviews — which is what <strong className="text-foreground font-semibold">Generative Engine Optimization (GEO)</strong> is about.
                </p>
                <p>
                  I work directly with founders and brand teams — no layers, no diluted strategy. The work I do for one client doesn't get handed off to someone junior. That's a deliberate choice, and it's why my clients see results that actually stick.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-2xl border border-white/5">
                <h3 className="text-lg font-bold mb-6 tracking-tight text-foreground">What I Believe In</h3>
                <ul className="space-y-5">
                  {[
                    { title: "Honesty Over Hype", desc: "I'll tell you what your site actually needs — not what sounds impressive in a pitch deck." },
                    { title: "Systems Over Tactics", desc: "One-off optimizations fade. I build structures that keep compounding over time." },
                    { title: "Outcomes, Not Outputs", desc: "Traffic, rankings, and citations only matter if they connect to real business results." }
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">How I Got Here</h2>
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
            <h2 className="text-3xl font-bold mb-4">Want to work together?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              If you're trying to grow organic visibility — in traditional search or in AI systems — I'd love to hear what you're working on.
            </p>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold items-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(var(--primary),0.3)]"
            >
              Message me on WhatsApp <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
