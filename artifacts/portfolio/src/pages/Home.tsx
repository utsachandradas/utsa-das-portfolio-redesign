import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  ArrowRight, Search, BarChart, Code, Zap, BrainCircuit,
  Target, Globe, CheckCircle2, Sparkles, TrendingUp, Megaphone, ShoppingBag, Layers, ChevronDown
} from "lucide-react";
import HeroAvatar from "@/components/HeroAvatar";
import { useState } from "react";

const WHATSAPP_LINK = "https://wa.me/8801861393416?text=Hi%20Utsa%2C%20I%27d%20like%20to%20discuss%20a%20project";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const FAQ_DATA = [
  {
    q: "Who is Utsa Das?",
    a: "Utsa Das — also known as Utsa Chandra Das — is a Growth Marketing Strategist based in Bangladesh. Since 2022, he has delivered 10+ digital growth projects for e-commerce and B2B brands, building end-to-end acquisition and conversion systems across paid ads, SEO, GEO, and CRO. He operates a founder-led practice with no agency layers or junior handoffs.",
  },
  {
    q: "What does a Growth Marketing Strategist do?",
    a: "A Growth Marketing Strategist like Utsa Das builds unified systems that connect traffic acquisition, conversion optimization, and retention into one compounding engine. This means integrating paid advertising, organic SEO, Generative Engine Optimization (GEO), and conversion rate optimization (CRO) — instead of treating them as isolated tactics.",
  },
  {
    q: "What is GEO (Generative Engine Optimization)?",
    a: "Generative Engine Optimization (GEO) is the practice of structuring content, brand entities, and website data so AI systems like ChatGPT, Perplexity, and Google AI Overviews cite your brand when answering relevant questions. Utsa Chandra Das builds content frameworks engineered specifically for AI citation and ranking.",
  },
  {
    q: "What paid advertising channels does Utsa Das work with?",
    a: "Utsa Das manages performance marketing across Meta Ads (Facebook & Instagram), Google Ads (Search, Display, Performance Max), and TikTok Ads. His approach is data-driven: structured funnel design, A/B testing, and conversion optimization using Meta Pixel, CAPI tracking, and Google Tag Manager.",
  },
  {
    q: "Why is real e-commerce experience important in a growth strategist?",
    a: "Utsa Das actively operates a beauty and personal care e-commerce brand, managing acquisition, conversion, and retention in real-time with real budgets and real customers. This means every strategy he recommends has been validated in a live competitive market — not built on theory.",
  },
  {
    q: "Does Utsa Das work with businesses outside Bangladesh?",
    a: "Yes — Utsa Chandra Das works with brands globally. Most collaboration happens remotely via WhatsApp and email. The growth systems he builds — paid acquisition, SEO, GEO, CRO — apply to any digital brand regardless of geography, while his Bangladesh market expertise adds depth for brands operating locally.",
  },
  {
    q: "What makes this growth approach different from a traditional marketing agency?",
    a: "Utsa Das does not rely on isolated marketing tactics. He builds unified growth engines that connect traffic → conversion → retention → revenue. All work is validated through real e-commerce execution, not theoretical marketing models. Every channel is engineered for revenue outcomes, not vanity metrics.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-14 md:py-24 relative" id="faq">
      <div className="container max-w-4xl mx-auto relative z-10">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
          <motion.p variants={fadeUp} className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">GEO-Optimized FAQ</motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl font-bold tracking-tight mb-4">Common Questions About Utsa Das</motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground max-w-xl mx-auto font-light">Structured to appear in AI-generated answers — ChatGPT, Perplexity, and Google AI Overviews.</motion.p>
        </motion.div>

        <div className="space-y-3">
          {FAQ_DATA.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                className={`glass-panel rounded-xl border transition-all duration-200 overflow-hidden ${isOpen ? "border-primary/30" : "border-white/5 hover:border-primary/15"}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <h3 className={`font-semibold text-sm leading-snug transition-colors ${isOpen ? "text-primary" : "text-foreground"}`}>
                    {faq.q}
                  </h3>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? "text-primary" : "text-muted-foreground"}`} />
                  </motion.span>
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="px-6 pb-5 pt-0">
                    <div className="w-full h-px bg-border/50 mb-4" />
                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const schemaOrgJSONLD = {
    "@context": "http://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "name": "Utsa Das",
        "alternateName": "Utsa Chandra Das",
        "jobTitle": "Growth Marketing Strategist",
        "description": "Utsa Das (also known as Utsa Chandra Das) is a Growth Marketing Strategist in Bangladesh specializing in scalable, performance-driven systems for e-commerce and B2B brands. Expert in paid ads (Meta, Google, TikTok), SEO, GEO, CRO, and conversion engineering since 2022.",
        "knowsAbout": [
          "Growth Marketing", "Performance Marketing", "Paid Advertising",
          "Meta Ads", "Google Ads", "SEO", "GEO", "Generative Engine Optimization",
          "Conversion Rate Optimization", "CRO", "E-Commerce", "Shopify",
          "WordPress", "WooCommerce", "Data-Driven Marketing", "Bangladesh"
        ],
        "address": { "@type": "PostalAddress", "addressCountry": "Bangladesh" },
        "url": "https://utsadas.com",
        "sameAs": [
          "https://www.facebook.com/utsachandradasutsa",
          "https://www.linkedin.com/in/utsa-das-3473a53a7",
        ],
      },
      {
        "@type": "WebSite",
        "name": "Utsa Das | Growth Marketing Strategist in Bangladesh",
        "url": "https://utsadas.com",
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQ_DATA.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": { "@type": "Answer", "text": faq.a },
        })),
      },
    ],
  };

  return (
    <Layout>
      <Helmet>
        <title>Utsa Das — Growth Marketing Strategist in Bangladesh | Paid Ads, SEO, GEO, CRO</title>
        <meta
          name="description"
          content="Utsa Das (Utsa Chandra Das) is a Growth Marketing Strategist in Bangladesh building scalable acquisition and conversion systems for e-commerce and B2B brands. Specializing in Meta Ads, Google Ads, SEO, GEO, and CRO since 2022."
        />
        <meta property="og:title" content="Utsa Das — Growth Marketing Strategist in Bangladesh" />
        <meta
          property="og:description"
          content="Founder-led growth marketing for e-commerce and B2B brands. Utsa Chandra Das builds unified systems across paid ads, SEO, GEO, and conversion optimization — focused on measurable revenue growth."
        />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="Utsa Das, Utsa Chandra Das, Growth Marketing Strategist Bangladesh, Performance Marketing Bangladesh, SEO GEO Bangladesh, Meta Ads Bangladesh, Google Ads Bangladesh, CRO Bangladesh" />
        <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
      </Helmet>

      {/* ── 1. HERO ──────────────────────────────────────────── */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center pt-8 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_30%_20%,oklch(0.70_0.24_272_/_0.16),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_60%,oklch(0.60_0.20_300_/_0.08),transparent)]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>

        <div className="container relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left — Text content */}
            <motion.div initial="hidden" animate="show" variants={stagger}>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2 mb-7">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-panel text-primary text-xs font-semibold border border-primary/25 tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Founder & Growth Marketing Strategist
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-panel text-muted-foreground text-xs font-medium border border-white/8">
                  Bangladesh · Since 2022
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.07]"
              >
                Scalable Growth Systems for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-400 to-cyan-400">
                  E-Commerce & B2B Brands
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-base sm:text-lg text-muted-foreground mb-4 leading-relaxed font-light">
                I'm <strong className="text-foreground font-semibold">Utsa Das</strong> — a Founder and Growth Marketing Strategist based in Bangladesh. Since 2022, I've combined performance marketing, SEO systems, and web infrastructure into one unified growth engine.
              </motion.p>
              <motion.p variants={fadeUp} className="text-sm text-muted-foreground mb-6 leading-relaxed font-light">
                One outcome: <span className="text-primary font-semibold">predictable revenue growth.</span>
              </motion.p>

              {/* Trust micro-signals */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                  10+ Projects Delivered
                </span>
                <span className="w-px h-3.5 bg-border hidden sm:block" />
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Meta · Google · TikTok
                </span>
                <span className="w-px h-3.5 bg-border hidden sm:block" />
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  GEO · SEO · CRO · Paid Ads
                </span>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start gap-3 mb-10">
                <a
                  href={WHATSAPP_LINK} target="_blank" rel="noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5"
                >
                  Build Scalable Growth <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#services" className="w-full sm:w-auto px-7 py-3.5 glass-panel text-foreground rounded-xl font-semibold hover:bg-white/8 transition-all border border-white/10 hover:border-primary/30 text-center"
                >
                  Explore Services
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="text-primary text-xs font-bold">10+</span>
                  </div>
                  <span className="text-muted-foreground text-sm">Projects Delivered</span>
                </div>
                <span className="w-px h-5 bg-border" />
                <a href="https://www.facebook.com/utsachandradasutsa" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Facebook</a>
                <a href="https://www.linkedin.com/in/utsa-das-3473a53a7" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">LinkedIn</a>
              </motion.div>
            </motion.div>

            {/* Right — Avatar */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            >
              <HeroAvatar />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 2. STATS STRIP ───────────────────────────────────── */}
      <section className="py-6 border-y border-border/40 bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 shimmer-bg opacity-40 pointer-events-none" />
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "4+", label: "Years Experience", sub: "Since 2022" },
              { value: "10+", label: "Growth Projects", sub: "E-commerce & B2B" },
              { value: "Unified", label: "Growth Engine", sub: "Ads + SEO + GEO + CRO" },
              { value: "Real", label: "E-Com Execution", sub: "Beauty & Personal Care" },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="py-4">
                <div className="text-3xl md:text-4xl font-bold text-primary tracking-tight">{s.value}</div>
                <div className="text-sm font-semibold text-foreground mt-1">{s.label}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. POSITIONING — PERFORMANCE-FIRST ───────────────── */}
      <section className="py-14 md:py-28 relative" id="about">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_50%,oklch(0.70_0.24_272_/_0.06),transparent)] pointer-events-none" />
        <div className="container max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-primary text-xs font-semibold mb-6 border border-primary/20">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Growth Marketing Strategist in Bangladesh — Performance-First Positioning
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
                End-to-End Growth Systems<br />Built for Revenue
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed font-light">
                <p>
                  Utsa Das is a Growth Marketing Strategist in Bangladesh who builds end-to-end acquisition and conversion systems designed for modern digital ecosystems. He does not rely on isolated marketing tactics — instead, he builds <strong className="text-foreground font-semibold">unified growth engines</strong> that connect traffic → conversion → retention → revenue.
                </p>
                <p>
                  His approach integrates paid acquisition systems, organic search dominance through SEO and GEO, conversion rate optimization, and data-driven scaling frameworks — all working together as one compounding system.
                </p>
                <p>
                  Since 2022, Utsa Chandra Das has delivered 10+ digital growth projects focused on scalable acquisition and sustainable performance improvement for e-commerce and B2B brands.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "Channels", value: "Paid + Organic" },
                  { label: "Focus", value: "Revenue Outcomes" },
                  { label: "Approach", value: "Founder-Led" },
                  { label: "Location", value: "Bangladesh" },
                ].map((item) => (
                  <div key={item.label} className="glass-panel rounded-xl p-4 border border-white/5">
                    <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
                    <div className="font-bold text-foreground">{item.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
        </div>
      </section>

      {/* ── 4. FOUNDER ADVANTAGE ─────────────────────────────── */}
      <section className="py-14 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-transparent pointer-events-none" />
        <div className="container max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="glass-panel rounded-3xl p-8 md:p-14 border border-primary/15 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full pointer-events-none" />
            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-primary text-xs font-semibold mb-5 border border-primary/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Founder Advantage
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-5 tracking-tight leading-tight">
                  Real Market Execution.<br />Not Theory.
                </h2>
                <p className="text-muted-foreground leading-relaxed font-light mb-6">
                  Utsa Das actively operates a beauty &amp; personal care e-commerce brand where he manages acquisition, conversion, and retention in real-time. This ensures all strategies are validated through real budgets, real customers, and measurable performance outcomes — not theoretical marketing models.
                </p>
                <p className="text-muted-foreground leading-relaxed font-light">
                  His approach is grounded in what actually drives revenue in competitive markets. Every tactic recommended has been tested in a live environment where the results matter directly.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: Target, label: "Real Budgets Managed", desc: "Acquisition spend managed across live campaigns" },
                  { icon: ShoppingBag, label: "Real Customers Served", desc: "Conversion and retention tested on actual buyers" },
                  { icon: TrendingUp, label: "Measurable Outcomes", desc: "Performance validated through revenue data, not reports" },
                ].map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex items-start gap-4 glass-panel rounded-xl p-4 border border-white/5">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 5. CORE EXPERTISE ────────────────────────────────── */}
      <section className="py-14 md:py-28 relative" id="services">
        <div className="container relative z-10 max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Core Expertise</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-4">What Utsa Das Builds</motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-xl mx-auto font-light">Four integrated growth disciplines — engineered as one unified revenue system.</motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {/* Large card — Paid Advertising */}
            <motion.div
              className="md:col-span-2 glass-panel rounded-2xl p-8 border border-white/5 hover:border-primary/25 transition-all group relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              whileHover={{ y: -3 }}
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-full group-hover:bg-primary/8 transition-colors" />
              <Megaphone className="w-10 h-10 text-primary mb-5" />
              <h3 className="text-2xl font-bold mb-3 tracking-tight">1. Paid Advertising — Performance Marketing</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 max-w-md">
                Scaling customer acquisition through structured, data-driven advertising systems across Meta Ads, Google Ads, and TikTok Ads. Utsa Das designs full-funnel campaigns with A/B testing, conversion optimization, and CAPI tracking systems built for sustainable ROAS growth.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Meta Ads", "Google Ads", "TikTok Ads", "Funnel Design", "A/B Testing", "CAPI Tracking"].map(t => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary">{t}</span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="glass-panel rounded-2xl p-8 border border-white/5 hover:border-primary/25 transition-all group"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
              whileHover={{ y: -3 }}
            >
              <BrainCircuit className="w-10 h-10 text-primary mb-5" />
              <h3 className="text-2xl font-bold mb-3">2. SEO & GEO</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Advanced search visibility systems for both traditional search engines and AI-driven discovery platforms — including ChatGPT, Perplexity, and Google AI Overviews. Entity-based architecture, structured content, and LLM visibility optimization.</p>
            </motion.div>

            <motion.div
              className="glass-panel rounded-2xl p-8 border border-white/5 hover:border-primary/25 transition-all group"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}
              whileHover={{ y: -3 }}
            >
              <Code className="w-10 h-10 text-primary mb-5" />
              <h3 className="text-2xl font-bold mb-3">3. E-Commerce & Web</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">High-performance digital storefronts optimized for conversion and speed. Shopify store setup, WordPress &amp; WooCommerce development, CRO-focused UX structure, and page speed optimization.</p>
            </motion.div>

            <motion.div
              className="md:col-span-2 glass-panel rounded-2xl p-8 border border-white/5 hover:border-primary/25 transition-all group relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.16 }}
              whileHover={{ y: -3 }}
            >
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/4 rounded-tr-full" />
              <BarChart className="w-10 h-10 text-primary mb-5" />
              <h3 className="text-2xl font-bold mb-3 tracking-tight">4. Growth Strategy & Analytics</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 max-w-md">
                Full-funnel systems that connect acquisition, behavior, and revenue performance. Utsa Chandra Das designs conversion rate optimization (CRO) systems, retention &amp; lifecycle marketing strategy, and data-driven scaling frameworks to grow profitably and predictably.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Full-Funnel Architecture", "CRO Systems", "Lifecycle Marketing", "Data-Driven Scaling", "Performance Frameworks"].map(t => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-muted-foreground">{t}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 6. WHAT MAKES THIS DIFFERENT ─────────────────────── */}
      <section className="py-14 md:py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_50%,oklch(0.70_0.24_272_/_0.07),transparent)] pointer-events-none" />
        <div className="container max-w-6xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Differentiation</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-4">What Makes This Growth Approach Different</motion.h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Layers, title: "Built on Real E-Commerce Execution", desc: "Not theoretical marketing models. Every strategy is validated through live campaigns, real budgets, and actual customer behavior." },
              { icon: Globe, title: "SEO, GEO, Ads & CRO as One System", desc: "Combines paid acquisition, organic search, AI visibility, and conversion engineering into one unified growth engine." },
              { icon: TrendingUp, title: "Focused on Revenue Outcomes", desc: "Not vanity metrics. Traffic, rankings, and impressions are inputs — revenue and scalable growth are the only outputs that matter." },
              { icon: BrainCircuit, title: "Designed for AI Discovery Systems", desc: "Content and brand entities are structured for both human search engines and AI-powered discovery platforms like ChatGPT and Perplexity." },
              { icon: Target, title: "Structured for Scalable Long-Term Growth", desc: "Every system is built as a digital asset — compounding in value over time, not dependent on short-term ad spend alone." },
              { icon: Zap, title: "Founder-Led, No Diluted Output", desc: "Utsa Das handles strategy and execution directly. No account managers, no junior handoffs, no diluted results." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="glass-panel rounded-2xl p-7 border border-white/5 hover:border-primary/25 transition-all group"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                whileHover={{ y: -3 }}
              >
                <Icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2 tracking-tight">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. WORK PHILOSOPHY ───────────────────────────────── */}
      <section className="py-14 md:py-20 relative">
        <div className="container max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="glass-panel rounded-3xl p-8 md:p-14 border border-white/5 text-center"
          >
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Work Philosophy</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Marketing is a System. Not a Campaign.</h2>
            <p className="text-muted-foreground font-light mb-10 max-w-2xl mx-auto">
              Every channel Utsa Das builds is engineered with a specific role in the revenue system:
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
              {[
                { step: "01", label: "Capture Demand", desc: "SEO + Ads" },
                { step: "02", label: "Convert Intent", desc: "CRO Systems" },
                { step: "03", label: "Retain Customers", desc: "Lifecycle Strategy" },
                { step: "04", label: "Scale Profitably", desc: "Data-Driven Optimization" },
              ].map(({ step, label, desc }) => (
                <div key={step} className="glass-panel rounded-xl p-5 border border-white/5">
                  <div className="text-primary font-bold text-sm mb-2">{step}</div>
                  <div className="font-bold text-foreground mb-1">{label}</div>
                  <div className="text-xs text-muted-foreground">{desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 8. FAQ / GEO SECTION ─────────────────────────────── */}
      <FAQSection />

      {/* ── 9. CTA ───────────────────────────────────────────── */}
      <section className="py-14 md:py-24 relative">
        <div className="container max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center glass-panel rounded-3xl p-8 md:p-16 border border-primary/15 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,oklch(0.70_0.24_272_/_0.08),transparent)] pointer-events-none" />
            <div className="relative z-10">
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Let's Build Together</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Let's Build Scalable Growth Systems</h2>
              <p className="text-muted-foreground font-light mb-10 max-w-2xl mx-auto">
                If you want performance-driven growth across ads, SEO, GEO, and conversion systems — Utsa Das builds the unified engine that makes it compound. Let's work together.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={WHATSAPP_LINK} target="_blank" rel="noreferrer"
                  className="w-full sm:w-auto px-10 py-4 bg-primary text-primary-foreground rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5"
                >
                  Start on WhatsApp <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/contact"
                  className="w-full sm:w-auto px-10 py-4 glass-panel text-foreground rounded-xl font-semibold hover:bg-white/8 transition-all border border-white/10 hover:border-primary/30"
                >
                  Send a Message
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
