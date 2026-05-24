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
      title: "Where It Started — Digital Growth & SEO",
      description: "Utsa Das began building hands-on expertise in SEO, technical search architecture, and paid acquisition fundamentals. From day one, he approached growth as a systems problem — not a checklist. The foundation was laid for what would become a unified growth methodology."
    },
    {
      year: "2023",
      title: "Performance Marketing & Paid Acquisition Systems",
      description: "Utsa Chandra Das expanded into performance marketing, building structured campaigns across Meta Ads and Google Ads. He developed expertise in funnel design, A/B testing, and conversion optimization — treating paid acquisition as an engineering problem with measurable inputs and outputs."
    },
    {
      year: "2024",
      title: "Founder-Led E-Commerce & GEO Optimization",
      description: "Utsa Das launched a beauty and personal care e-commerce brand, managing acquisition, conversion, and retention in real-time with real budgets. Simultaneously, he specialized in Generative Engine Optimization (GEO) — structuring content for AI systems like ChatGPT, Perplexity, and Google AI Overviews."
    },
    {
      year: "2025",
      title: "Unified Growth Marketing Systems",
      description: "Utsa Das now builds fully integrated growth engines for e-commerce and B2B brands — combining paid advertising, SEO, GEO, and CRO into one compounding system. His work is grounded in real execution, not theory, with every strategy validated through measurable revenue outcomes."
    }
  ];

  const schemaJSONLD = {
    "@context": "http://schema.org",
    "@type": "Person",
    "name": "Utsa Das",
    "alternateName": "Utsa Chandra Das",
    "jobTitle": "Growth Marketing Strategist",
    "description": "Utsa Das (Utsa Chandra Das) is a Growth Marketing Strategist based in Bangladesh. He builds end-to-end acquisition and conversion systems for e-commerce and B2B brands, specializing in paid advertising, SEO, GEO, CRO, and conversion engineering since 2022.",
    "address": { "@type": "PostalAddress", "addressCountry": "Bangladesh" },
    "url": "https://utsadas.com",
    "sameAs": [
      "https://www.facebook.com/utsachandradasutsa",
      "https://www.linkedin.com/in/utsa-das-3473a53a7"
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>About Utsa Das — Growth Marketing Strategist in Bangladesh</title>
        <meta
          name="description"
          content="Utsa Das (Utsa Chandra Das) is a Growth Marketing Strategist in Bangladesh with 4+ years of experience since 2022. He builds scalable acquisition and conversion systems for e-commerce and B2B brands through paid ads, SEO, GEO, and CRO."
        />
        <meta name="keywords" content="Utsa Das, Utsa Chandra Das, Growth Marketing Strategist Bangladesh, about Utsa Das, performance marketing Bangladesh" />
        <script type="application/ld+json">{JSON.stringify(schemaJSONLD)}</script>
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
                Growth Marketing Strategist
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-panel text-muted-foreground text-xs font-medium border border-white/8">
                Active since 2022
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-panel text-muted-foreground text-xs font-medium border border-white/8">
                Founder-Led · Bangladesh
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">About Utsa Das</h1>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Utsa Chandra Das is a Bangladesh-based Founder and Growth Marketing Strategist building end-to-end acquisition and conversion systems for e-commerce and B2B brands.
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
                  I'm Utsa Das, a Founder and Growth Marketing Strategist based in Bangladesh, specializing in building scalable and sustainable digital growth systems for e-commerce and B2B brands.
                </p>
                <p>
                  Since 2022, I have worked on 10+ digital projects, combining <strong className="text-foreground font-semibold">performance marketing, SEO systems, and web infrastructure</strong> into a unified growth engine focused on one outcome: predictable revenue growth.
                </p>
                <p>
                  I don't treat marketing channels separately. I design integrated systems where paid ads, organic search, and conversion optimization work together to maximize ROI — and every strategy I use is tested against real budgets, real customers, and real conversion data.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-2xl border border-white/5">
                <h3 className="text-lg font-bold mb-6 tracking-tight text-foreground">Core Principles</h3>
                <ul className="space-y-5">
                  {[
                    { title: "Revenue Outcomes Over Vanity Metrics", desc: "Traffic, rankings, and impressions only matter when they connect directly to measurable revenue and business growth." },
                    { title: "Systems Over Isolated Tactics", desc: "One-off campaigns fade. Utsa Das builds unified growth engines — paid + organic + CRO — that compound over time." },
                    { title: "Real Execution Over Theory", desc: "Every strategy is validated through live e-commerce operations, real budgets, and actual customer data — not theoretical models." }
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">The Growth Journey of Utsa Das</h2>
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
            <h2 className="text-3xl font-bold mb-4">Want to build scalable growth systems?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              If you want performance-driven growth across paid ads, SEO, GEO, and conversion systems — Utsa Das builds the unified engine that makes it compound. Let's talk.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold items-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(var(--primary),0.3)]"
            >
              Message Utsa on WhatsApp <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
