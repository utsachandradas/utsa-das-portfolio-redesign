import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  ArrowRight, Search, BarChart, Code, Zap, BrainCircuit,
  Database, Globe, CheckCircle2, ChevronDown, Sparkles,
  TrendingUp, Shield, Eye, Cpu, MessageSquare, BookOpen, Layers
} from "lucide-react";
import {
  SiGoogleanalytics, SiGooglesearchconsole, SiGoogletagmanager,
  SiSemrush, SiOpenai, SiGooglegemini, SiPerplexity,
  SiWordpress, SiShopify, SiGoogle,
} from "react-icons/si";
import HeroAvatar from "@/components/HeroAvatar";

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
  { q: "Who is Utsa Das?", a: "Utsa Das is a Bangladesh-based SEO and GEO Strategist with 4+ years of experience since 2022. He works directly with brand owners and founders to build organic visibility in both traditional search engines and AI-powered platforms like ChatGPT, Perplexity, and Google AI Overviews — no agency layers, no junior handoffs." },
  { q: "What is GEO optimization?", a: "Generative Engine Optimization (GEO) is the practice of structuring your content, brand entities, and website data so AI systems like ChatGPT, Perplexity, and Google's AI Overviews choose to cite your brand when answering relevant questions. It's different from traditional SEO — instead of optimizing for ranking positions, you're optimizing to become the source an AI system trusts and references." },
  { q: "What is the difference between SEO and GEO?", a: "Traditional SEO gets your website into Google's top organic results through keyword targeting, backlinks, and technical optimization. GEO gets your brand cited inside AI-generated answers — the responses ChatGPT, Perplexity, or Gemini produce when a user asks a question in your niche. Both matter, and the best foundation for GEO is a technically sound SEO setup." },
  { q: "Why does AI search matter for my brand?", a: "More and more people are getting answers directly from AI tools without clicking through to websites. If your brand isn't structured to appear in those answers, you're invisible to a growing segment of your audience. GEO is the discipline that fixes that — and the brands investing in it now are building a compounding advantage that will be hard to replicate later." },
  { q: "Why is technical SEO still important?", a: "Technical SEO is the foundation everything else is built on. If search crawlers and AI bots can't properly access, render, and understand your site — your content strategy and GEO work won't deliver results. A clean technical foundation means faster indexation, better crawl coverage, and more accurate AI interpretation of your content." },
  { q: "What does an SEO strategist actually do?", a: "A good SEO strategist translates your business goals into a search visibility system. That means identifying what your audience is searching for, finding where you're missing out to competitors, fixing the technical issues holding you back, and building a content and entity strategy that compounds over time. The output is sustainable organic traffic that isn't dependent on paid ads." },
  { q: "Do you work with businesses outside Bangladesh?", a: "Yes — I work with brands globally. Most work is done remotely via WhatsApp and email. The SEO and GEO work I do applies to any website regardless of location, though I also have deep familiarity with Bangladeshi consumer search behaviour for brands operating in that market." },
];

/* ── Proof of Expertise: analytics bento data ───────────── */
const PROOF_BARS = [28, 35, 30, 48, 44, 62, 57, 78, 73, 90, 85, 112];

function TrafficChart() {
  const max = Math.max(...PROOF_BARS);
  return (
    <svg viewBox="0 0 300 90" className="w-full" aria-hidden>
      <defs>
        <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.70 0.24 272)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="oklch(0.70 0.24 272)" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      {PROOF_BARS.map((v, i) => {
        const h = (v / max) * 82;
        return <rect key={i} x={i * 24 + 4} y={88 - h} width={18} height={h} rx={4} fill="url(#barGrad)" />;
      })}
    </svg>
  );
}

function SparkLine() {
  const pts = [60, 55, 62, 50, 58, 45, 52, 40, 35, 28, 22, 15];
  const scaled = pts.map((v, i) => `${i * 24},${v}`).join(" ");
  return (
    <svg viewBox="0 0 280 70" className="w-full" aria-hidden>
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(0.70 0.24 272)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="oklch(0.70 0.24 272)" stopOpacity="1" />
        </linearGradient>
      </defs>
      <polyline points={scaled} fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {pts.map((v, i) => i === pts.length - 1 && (
        <circle key={i} cx={i * 24} cy={v} r="4" fill="oklch(0.70 0.24 272)" />
      ))}
    </svg>
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
        "jobTitle": "SEO Strategist & GEO Strategist",
        "description": "Bangladesh-based Founder, SEO Strategist, and GEO Strategist with 4+ years of experience since 2022. Expert in AI search optimization, technical SEO, ecommerce growth, and generative engine optimization (GEO).",
        "knowsAbout": ["SEO", "GEO", "Generative Engine Optimization", "AI Search Optimization", "Technical SEO", "Ecommerce SEO", "Content Strategy", "Schema Markup"],
        "address": { "@type": "PostalAddress", "addressCountry": "Bangladesh" },
        "url": "https://utsadas.com",
        "sameAs": ["https://www.facebook.com/utsachandradasutsa", "https://www.linkedin.com/in/utsa-das-3473a53a7"],
      },
      { "@type": "WebSite", "name": "Utsa Das | SEO & GEO Strategist", "url": "https://utsadas.com" },
      {
        "@type": "FAQPage",
        "mainEntity": FAQ_DATA.map(faq => ({ "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a } })),
      },
    ],
  };

  return (
    <Layout>
      <Helmet>
        <title>Utsa Das | SEO & GEO Strategist | AI Search Optimization Expert | Bangladesh</title>
        <meta name="description" content="Utsa Das — Bangladesh-based Founder, SEO & GEO Strategist with 4+ years of experience since 2022. Expert in technical SEO, AI search optimization, ecommerce growth, and generative engine optimization (GEO) for modern brands." />
        <meta property="og:title" content="Utsa Das | SEO & GEO Strategist | AI Search Optimization Expert" />
        <meta property="og:description" content="Founder-led SEO and GEO strategies for the AI era. 4+ years of experience optimizing brands for both traditional search and AI-powered discovery systems." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
      </Helmet>

      {/* ── 1. HERO ──────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-20 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,oklch(0.70_0.24_272_/_0.18),transparent)]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>

        <div className="container relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
          <motion.div initial="hidden" animate="show" variants={stagger} className="w-full max-w-4xl">

            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-2 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-panel text-primary text-xs font-semibold border border-primary/25 tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                4+ Years of SEO & GEO Experience
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-panel text-muted-foreground text-xs font-medium border border-white/8">
                Strategist Since 2022
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-panel text-muted-foreground text-xs font-medium border border-white/8">
                <Sparkles className="w-3 h-3" /> AI-Search Focused
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight mb-7 leading-[1.05]"
            >
              Helping Brands Get Found<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-400 to-cyan-400">
                In Google, ChatGPT &
              </span>
              <br />Every AI Search Engine
            </motion.h1>

            <motion.p variants={fadeUp} className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              I build SEO and GEO systems for brands that want to rank in Google <em>and</em> get cited by AI systems like ChatGPT, Perplexity, and Gemini — not just one or the other.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
              <a
                href={WHATSAPP_LINK} target="_blank" rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5"
                data-testid="link-whatsapp-hero"
              >
                Chat on WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#proof" className="w-full sm:w-auto px-8 py-4 glass-panel text-foreground rounded-xl font-semibold hover:bg-white/8 transition-all border border-white/10 hover:border-primary/30"
                data-testid="link-portfolio-hero"
              >
                See Results
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center justify-center gap-6 text-muted-foreground text-sm">
              <a href="https://www.facebook.com/utsachandradasutsa" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors font-medium">Facebook</a>
              <span className="w-1 h-1 rounded-full bg-border" />
              <a href="https://www.linkedin.com/in/utsa-das-3473a53a7" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors font-medium">LinkedIn</a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. STATS STRIP ───────────────────────────────────── */}
      <section className="py-6 border-y border-border/40 bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 shimmer-bg opacity-40 pointer-events-none" />
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "4+", label: "Years Experience", sub: "Since 2022" },
              { value: "50+", label: "Projects Delivered", sub: "Across industries" },
              { value: "Tier 1", label: "AI Citation Rank", sub: "Perplexity & ChatGPT" },
              { value: "100%", label: "AI-Optimized", sub: "GEO-ready systems" },
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

      {/* ── 3. ABOUT / WHO IS UTSA DAS ───────────────────────── */}
      <section className="py-14 md:py-28 relative" id="about">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_50%,oklch(0.70_0.24_272_/_0.06),transparent)] pointer-events-none" />
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-primary text-xs font-semibold mb-6 border border-primary/20">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Founder-Led Growth Strategy
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
                Building Visibility<br />That Compounds
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed font-light">
                <p>
                  I'm Utsa Das — a Bangladesh-based SEO and GEO Strategist working since 2022. My focus is helping brands show up where their customers actually search, which increasingly means both Google <strong className="text-foreground font-semibold">and</strong> AI tools like ChatGPT, Perplexity, and Gemini.
                </p>
                <p>
                  Most SEO work treats these as separate problems. I think that's a mistake. <strong className="text-foreground font-semibold">Generative Engine Optimization (GEO)</strong> and traditional SEO share the same foundation: clean structure, clear entities, and content that genuinely answers what people are looking for. Build that once, and it performs everywhere.
                </p>
                <p>
                  I work directly with every client — no account managers, no junior handoffs. That's a deliberate choice that keeps the strategy sharp and the execution consistent.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "Journey Started", value: "2022" },
                  { label: "Focus Area", value: "AI-Era SEO" },
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

            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <HeroAvatar />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. SERVICES ──────────────────────────────────────── */}
      <section className="py-14 md:py-28 relative" id="services">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-transparent pointer-events-none" />
        <div className="container relative z-10 max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Strategic Specializations</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-4">What I Build For You</motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-xl mx-auto font-light">Comprehensive frameworks designed for the modern visibility landscape — traditional and AI-first.</motion.p>
          </motion.div>

          {/* Bento grid */}
          <div className="grid md:grid-cols-3 gap-5">
            {/* Large card */}
            <motion.div
              className="md:col-span-2 glass-panel rounded-2xl p-8 border border-white/5 hover:border-primary/25 transition-all group relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              whileHover={{ y: -3 }}
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-full group-hover:bg-primary/8 transition-colors" />
              <BrainCircuit className="w-10 h-10 text-primary mb-5" />
              <h3 className="text-2xl font-bold mb-3 tracking-tight">GEO Optimization</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 max-w-md">Generative Engine Optimization is about becoming the source AI systems choose to cite. I structure your brand entities, content, and data so that when someone asks ChatGPT, Gemini, or Perplexity a question in your field — your brand is the answer they get.</p>
              <div className="flex flex-wrap gap-2">
                {["Entity SEO", "AI Citations", "Answer Engine Visibility", "Semantic Structure"].map(t => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary">{t}</span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="glass-panel rounded-2xl p-8 border border-white/5 hover:border-primary/25 transition-all group"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
              whileHover={{ y: -3 }}
            >
              <Code className="w-10 h-10 text-primary mb-5" />
              <h3 className="text-2xl font-bold mb-3">Technical SEO</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Crawlability, rendering, Core Web Vitals, schema markup, JavaScript SEO, and site architecture — audited and fixed so both search crawlers and AI bots can properly access your content.</p>
            </motion.div>

            <motion.div
              className="glass-panel rounded-2xl p-8 border border-white/5 hover:border-primary/25 transition-all group"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}
              whileHover={{ y: -3 }}
            >
              <Database className="w-10 h-10 text-primary mb-5" />
              <h3 className="text-2xl font-bold mb-3">AI Search Visibility</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Content systems built to appear in AI-generated responses — structured so that when a user asks an AI tool a question in your space, your brand is what gets surfaced.</p>
            </motion.div>

            <motion.div
              className="md:col-span-2 glass-panel rounded-2xl p-8 border border-white/5 hover:border-primary/25 transition-all group relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.16 }}
              whileHover={{ y: -3 }}
            >
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/4 rounded-tr-full" />
              <BarChart className="w-10 h-10 text-primary mb-5" />
              <h3 className="text-2xl font-bold mb-3 tracking-tight">Ecommerce SEO</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 max-w-md">Ecommerce SEO is its own discipline. I build category architectures that rank, product schema systems that win rich results, and semantic content hubs that turn informational traffic into product page visits and revenue.</p>
              <div className="flex flex-wrap gap-2">
                {["Category Architecture", "Product Schema", "Internal Linking", "Shopping Feeds"].map(t => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-muted-foreground">{t}</span>
                ))}
              </div>
            </motion.div>

            {[
              { Icon: Globe,   title: "Content Strategy",    desc: "Topic clusters and content frameworks that build topical authority, match real search intent, and are structured to be cited by AI systems." },
              { Icon: Zap,     title: "Core Web Vitals",     desc: "LCP, CLS, and INP fixes that improve page experience scores — and signal quality to both Google and AI crawlers." },
              { Icon: Search,  title: "SEO Strategy",        desc: "Keyword research, competitive gap analysis, and long-term content roadmaps that turn search visibility into compounding organic growth." },
            ].map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="glass-panel rounded-2xl p-8 border border-white/5 hover:border-primary/25 transition-all group"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i + 0.25) * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <Icon className="w-10 h-10 text-primary mb-5" />
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PROOF OF EXPERTISE ────────────────────────────── */}
      <section className="py-14 md:py-28 relative" id="proof">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_50%,oklch(0.70_0.24_272_/_0.07),transparent)] pointer-events-none" />
        <div className="container max-w-7xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Technical Capability</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Proof of Expertise</motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-xl mx-auto font-light">Real optimization outcomes — across crawlability, AI visibility, schema coverage, and organic growth systems.</motion.p>
          </motion.div>

          {/* Bento analytics grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-auto">

            {/* Large: Traffic Growth chart */}
            <motion.div
              className="col-span-2 row-span-1 glass-panel rounded-2xl p-7 border border-white/5 hover:border-primary/20 transition-all relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Organic Sessions</p>
                  <p className="text-3xl font-bold text-foreground">+210%</p>
                  <p className="text-xs text-primary font-medium mt-0.5">↑ 12-month growth window</p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">Ecommerce SEO</span>
              </div>
              <TrafficChart />
              <p className="text-[10px] text-muted-foreground mt-2 text-right">Jan → Dec · Non-brand organic sessions</p>
            </motion.div>

            {/* Core Web Vitals */}
            <motion.div
              className="col-span-1 glass-panel rounded-2xl p-6 border border-white/5 hover:border-emerald-400/20 transition-all"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              whileHover={{ y: -2 }}
            >
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Core Web Vitals</p>
              {[
                { label: "LCP", value: "1.8s", color: "text-emerald-400", bar: 90 },
                { label: "CLS", value: "0.04", color: "text-emerald-400", bar: 95 },
                { label: "INP", value: "72ms", color: "text-emerald-400", bar: 88 },
              ].map(({ label, value, color, bar }) => (
                <div key={label} className="mb-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-semibold text-foreground">{label}</span>
                    <span className={`text-xs font-bold ${color}`}>{value} ✓</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full">
                    <div className="h-1.5 rounded-full bg-emerald-400" style={{ width: `${bar}%` }} />
                  </div>
                </div>
              ))}
              <p className="text-[10px] text-emerald-400 mt-3 font-medium">All metrics: Good range</p>
            </motion.div>

            {/* AI Citation */}
            <motion.div
              className="col-span-1 glass-panel rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-all flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
              whileHover={{ y: -2 }}
            >
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">AI Citation Rank</p>
                <div className="text-5xl font-black text-primary mb-2">T1</div>
                <p className="text-xs text-foreground font-semibold">Tier 1 Citation</p>
                <p className="text-[11px] text-muted-foreground mt-1">Perplexity · ChatGPT · AI Overviews</p>
              </div>
              <div className="mt-4 flex gap-1">
                {[1,2,3,4,5].map(s => <div key={s} className="flex-1 h-1.5 rounded-full bg-primary opacity-90" />)}
              </div>
            </motion.div>

            {/* Indexation */}
            <motion.div
              className="col-span-1 glass-panel rounded-2xl p-6 border border-white/5 hover:border-blue-400/20 transition-all"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              whileHover={{ y: -2 }}
            >
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Indexation Recovery</p>
              <div className="text-4xl font-bold text-blue-400 mb-1">+62%</div>
              <p className="text-xs text-foreground font-medium mb-3">Pages Indexed</p>
              <div className="space-y-1.5">
                <div className="flex gap-2 items-center text-xs"><div className="w-2 h-2 rounded-full bg-blue-400/40" /> Before: 38% indexed</div>
                <div className="flex gap-2 items-center text-xs"><div className="w-2 h-2 rounded-full bg-blue-400" /> After: 100% indexed</div>
              </div>
            </motion.div>

            {/* Crawl Efficiency */}
            <motion.div
              className="col-span-1 glass-panel rounded-2xl p-6 border border-white/5 hover:border-violet-400/20 transition-all"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}
              whileHover={{ y: -2 }}
            >
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Crawl Efficiency</p>
              <div className="text-4xl font-bold text-violet-400 mb-1">+145%</div>
              <p className="text-xs text-foreground font-medium mb-3">Enterprise Site Optimization</p>
              <div className="flex gap-1 items-end h-8">
                {[20, 35, 30, 50, 45, 70, 65, 90].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: `oklch(0.70 0.24 272 / ${0.3 + i * 0.09})` }} />
                ))}
              </div>
            </motion.div>

            {/* Search Rank drop — sparkline */}
            <motion.div
              className="col-span-2 glass-panel rounded-2xl p-7 border border-white/5 hover:border-primary/20 transition-all relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.28 }}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Avg. Ranking Position</p>
                  <p className="text-3xl font-bold text-foreground">Pos. 3.2</p>
                  <p className="text-xs text-emerald-400 font-medium mt-0.5">↓ From Pos. 18.4 (dropped = improved)</p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 font-medium">Technical SEO</span>
              </div>
              <SparkLine />
              <p className="text-[10px] text-muted-foreground mt-2 text-right">Lower = Better · 12-week optimization window</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 6. AI SEARCH READINESS ───────────────────────────── */}
      <section className="py-14 md:py-28 relative border-y border-border/40">
        <div className="absolute inset-0 bg-secondary/20 pointer-events-none" />
        <div className="container max-w-6xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Future-Ready Optimization</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-4">AI Search Readiness</motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl mx-auto font-light">
              Modern websites must be structured for <strong className="text-foreground">two audiences simultaneously</strong>: human readers and AI retrieval systems. I architect content that performs in both.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {[
              {
                Icon: Layers,
                title: "Semantic Content Structure",
                desc: "Content organized with semantic heading hierarchies, entity-rich paragraphs, and topical clustering that AI models can extract and synthesize accurately.",
                badge: "Foundation",
              },
              {
                Icon: Eye,
                title: "Entity Recognition",
                desc: "Brand entities, people, products, and services explicitly defined through structured data and contextual co-citations so knowledge graphs recognize your authority.",
                badge: "Visibility",
              },
              {
                Icon: MessageSquare,
                title: "Answer Engine Optimization",
                desc: "Content formatted to directly answer conversational queries — concise definitions, FAQs, and position-zero structures that AI systems prefer as sources.",
                badge: "Citation",
              },
              {
                Icon: Cpu,
                title: "AI-Readable Architecture",
                desc: "Technical foundations — clean HTML semantics, schema markup, crawl accessibility, and rendering — that allow AI bots to efficiently parse and trust your content.",
                badge: "Technical",
              },
            ].map(({ Icon, title, desc, badge }, i) => (
              <motion.div
                key={title}
                className="glass-panel rounded-2xl p-7 border border-white/5 hover:border-primary/25 transition-all group"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{badge}</span>
                </div>
                <h3 className="text-base font-bold mb-2 tracking-tight">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Readiness checklist */}
          <motion.div
            className="glass-panel rounded-2xl p-8 border border-primary/15 bg-primary/3"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 tracking-tight">AI Search Readiness Checklist</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "Schema markup implemented", "Entity definitions in content", "FAQ schema structured",
                "Conversational query targeting", "Topical authority clusters", "Knowledge panel optimized",
                "Co-citation signals built", "AI-crawl accessibility", "Semantic heading hierarchy",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 7. SEARCH SYSTEMS I OPTIMIZE FOR ────────────────── */}
      <section className="py-14 md:py-28 relative">
        <div className="container max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Multi-Platform Visibility</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Search Systems I Optimize For</motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-xl mx-auto font-light">
              Modern search happens across multiple AI and traditional platforms. I build visibility that works across all of them.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {[
              { Icon: SiGoogle, name: "Google Search", color: "#4285F4", approach: "Traditional SERP dominance", detail: "Keyword strategy, technical SEO, E-E-A-T signals, featured snippets, and Core Web Vitals optimization for top organic positions." },
              { Icon: SiOpenai, name: "ChatGPT / OpenAI", color: "#74AA9C", approach: "Conversational AI citation", detail: "Entity-rich content, semantic definitions, and authoritative source positioning to become ChatGPT's preferred reference for industry queries." },
              { Icon: SiGooglegemini, name: "Google Gemini", color: "#4285F4", approach: "AI Overviews & answer synthesis", detail: "SGE-aligned content structure, structured data, and topical authority to secure Featured Placement in Google's generative AI results." },
              { Icon: SiPerplexity, name: "Perplexity AI", color: "#20B8CD", approach: "Answer engine citation", detail: "Source-quality signals, citation-worthy content formats, and entity authority building to achieve Tier 1 citation frequency in Perplexity answers." },
            ].map(({ Icon, name, color, approach, detail }, i) => (
              <motion.div
                key={name}
                className="glass-panel rounded-2xl p-7 border border-white/5 hover:border-primary/25 transition-all group"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl glass-panel border border-white/10 flex items-center justify-center group-hover:border-primary/30 transition-all">
                    <Icon className="w-6 h-6" style={{ color }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{name}</h3>
                    <p className="text-xs text-primary font-medium">{approach}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{detail}</p>
              </motion.div>
            ))}
          </div>

          {/* Smaller platform chips */}
          <motion.div
            className="glass-panel rounded-2xl p-6 border border-white/5"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <p className="text-sm text-muted-foreground mb-4 font-medium">Also optimized for:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Claude (Anthropic)", color: "#C96442" },
                { name: "Bing AI / Copilot", color: "#00A2E8" },
                { name: "DuckDuckGo AI Chat", color: "#DE5833" },
                { name: "You.com", color: "#6366f1" },
                { name: "Semantic Search Systems", color: "#64748b" },
                { name: "AI Answer Engines", color: "#64748b" },
              ].map(({ name, color }) => (
                <span key={name} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/8 text-sm text-muted-foreground hover:text-foreground hover:border-primary/25 transition-all cursor-default">
                  <span className="w-2 h-2 rounded-full" style={{ background: color }} />
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 8. PROCESS ───────────────────────────────────────── */}
      <section className="py-14 md:py-28 relative border-y border-border/40">
        <div className="absolute inset-0 bg-secondary/20 pointer-events-none" />
        <div className="container max-w-6xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">How I Work</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-4">The Optimization Lifecycle</motion.h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 relative">
            <div className="absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent hidden md:block" />
            {[
              { phase: "01", title: "Research & Discovery", desc: "I map your keyword landscape, analyze competitors, identify search intent patterns, and assess where you stand across both Google and AI search platforms." },
              { phase: "02", title: "Technical Audit", desc: "I audit crawlability, indexation, rendering, Core Web Vitals, schema coverage, and AI-bot accessibility — finding every technical issue that's limiting your visibility." },
              { phase: "03", title: "Optimization & GEO", desc: "I implement fixes, restructure content for semantic clarity, build entity signals, and apply GEO frameworks so AI systems recognize your brand as an authoritative source." },
              { phase: "04", title: "Track & Compound", desc: "I monitor performance across traditional SERPs and AI citation platforms, iterate based on data, and keep refining the system as search evolves." },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="relative z-10 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              >
                <div className="w-20 h-20 rounded-2xl glass-panel border border-primary/25 flex items-center justify-center font-bold text-2xl text-primary mb-6 shadow-lg shadow-primary/10">
                  {step.phase}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FOUNDER PERSPECTIVE ───────────────────────────── */}
      <section className="py-14 md:py-28 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_50%,oklch(0.70_0.24_272_/_0.06),transparent)] pointer-events-none" />
        <div className="container max-w-6xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mb-16">
            <motion.p variants={fadeUp} className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Founder Perspective</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-4 max-w-2xl">On the Future of Search & Digital Visibility</motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-xl font-light">Thoughts from the front lines of AI-era SEO strategy — written by someone building in this space since 2022.</motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: "💡",
                title: "SEO isn't dying — it's splitting in two",
                quote: "Traditional search rankings still matter enormously. But there's now a parallel game inside AI systems, and most brands aren't playing it. The ones that figure this out early will be very hard to displace later.",
                tag: "Search Evolution",
              },
              {
                icon: "🌐",
                title: "GEO compounds like SEO used to",
                quote: "Every entity signal, schema implementation, and citation-worthy content piece you add today makes your brand harder to ignore tomorrow — by both search crawlers and AI models. The brands starting this work now are building structural advantages that take years to replicate.",
                tag: "GEO Strategy",
              },
              {
                icon: "🧠",
                title: "AI systems reward clarity, not volume",
                quote: "LLMs don't count backlinks. They synthesize meaning. The brands that get cited consistently in AI answers are the ones whose content is unambiguous about what they do, who they serve, and why they're the right answer. That's a very different optimization problem than traditional SEO.",
                tag: "AI Search",
              },
            ].map(({ icon, title, quote, tag }, i) => (
              <motion.div
                key={i}
                className="glass-panel rounded-2xl p-8 border border-white/5 hover:border-primary/25 transition-all flex flex-col relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                whileHover={{ y: -3 }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                <div className="text-3xl mb-4">{icon}</div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-3">{tag}</span>
                <h3 className="text-lg font-bold mb-4 tracking-tight leading-snug">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 italic">"{quote}"</p>
                <div className="mt-6 pt-5 border-t border-border/40">
                  <p className="text-xs font-semibold text-foreground">— Utsa Das</p>
                  <p className="text-xs text-muted-foreground">Founder · SEO & GEO Strategist</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. TRUST + EXPLORING ────────────────────────────── */}
      <section className="py-14 md:py-28 relative border-y border-border/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,oklch(0.70_0.24_272_/_0.05)_0,transparent_70%)] pointer-events-none" />
        <div className="container relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-20">
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Why Work With Me</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">Pillars of Execution</h2>
            <ul className="space-y-4">
              {[
                "4+ years of founder-led SEO & GEO strategy",
                "AI search optimization since 2022",
                "Performance-focused execution — no vanity metrics",
                "Mobile-first visibility systems",
                "Semantic content architecture expertise",
                "Technical implementation mastery",
                "Long-term scalable growth architectures",
              ].map((pillar, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-4 glass-panel p-4 rounded-xl border border-white/5 hover:border-primary/20 transition-all"
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-sm">{pillar}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Research & Innovation</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">Currently Exploring</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "AI Search Behavior Patterns", "GEO Ranking Systems",
                "Semantic Content Structures", "LLM Visibility Engineering",
                "Future Search Systems", "Search Intent Evolution",
                "Answer Engine Architecture", "Entity Authority Building",
              ].map((tag, i) => (
                <motion.span
                  key={i}
                  className="px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium hover:bg-primary/10 transition-colors cursor-default"
                  initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. SKILLS + TOOLS ───────────────────────────────── */}
      <section className="py-14 md:py-28 relative" id="skills">
        <div className="container max-w-6xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mb-16">
            <motion.p variants={fadeUp} className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Technical Arsenal</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Skills & Tools</motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-xl mx-auto font-light">Built for modern search visibility — from crawlers to LLMs.</motion.p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto">
            {[
              "Technical SEO", "GEO Optimization", "AI Search Optimization",
              "Ecommerce SEO", "Keyword Research", "Schema Markup",
              "Content Strategy", "Analytics & Tracking", "Core Web Vitals",
              "Entity SEO", "Log File Analysis", "JavaScript SEO",
            ].map((skill, i) => (
              <motion.span
                key={i}
                className="px-5 py-2.5 glass-panel rounded-xl font-medium text-sm border border-white/5 hover:border-primary/30 transition-all cursor-default hover:-translate-y-0.5"
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>

          <motion.div
            className="glass-panel p-8 md:p-10 rounded-2xl max-w-5xl mx-auto border border-white/5"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-8 font-semibold">Tools & Platforms</p>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-5 md:gap-6">
              {[
                { Icon: SiGoogleanalytics,    name: "Google Analytics",  color: "#E37400" },
                { Icon: SiGooglesearchconsole, name: "Search Console",   color: "#458CF5" },
                { Icon: SiGoogletagmanager,   name: "Tag Manager",       color: "#4285F4" },
                { Icon: SiSemrush,            name: "SEMrush",           color: "#FF642D" },
                { Icon: SiOpenai,             name: "ChatGPT",           color: "#74AA9C" },
                { Icon: SiGooglegemini,       name: "Gemini",            color: "#4285F4" },
                { Icon: SiPerplexity,         name: "Perplexity",        color: "#20B8CD" },
                { Icon: SiWordpress,          name: "WordPress",         color: "#21759B" },
                { Icon: SiShopify,            name: "Shopify",           color: "#96BF48" },
                { Icon: null, name: "Ahrefs",         color: "#FF7A42" },
                { Icon: null, name: "Screaming Frog", color: "#6ABF00" },
                { Icon: null, name: "Lighthouse",     color: "#F9AB00" },
                { Icon: null, name: "Claude",         color: "#C96442" },
                { Icon: null, name: "Google SGE",     color: "#EA4335" },
                { Icon: null, name: "Log Analysis",   color: "#6366f1" },
              ].map(({ Icon, name, color }) => (
                <motion.div
                  key={name}
                  className="flex flex-col items-center gap-2 group cursor-default"
                  whileHover={{ y: -3 }} transition={{ duration: 0.18 }}
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl glass-panel border border-white/8 flex items-center justify-center group-hover:border-primary/30 transition-all">
                    {Icon
                      ? <Icon className="w-6 h-6 md:w-7 md:h-7" style={{ color }} />
                      : <span className="text-lg font-black" style={{ color }}>{name.charAt(0)}</span>
                    }
                  </div>
                  <span className="text-[10px] md:text-xs text-muted-foreground text-center leading-tight group-hover:text-foreground transition-colors font-medium max-w-[72px]">
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 12. PORTFOLIO / WORK ─────────────────────────────── */}
      <section className="py-14 md:py-28 relative border-t border-border/40" id="portfolio">
        <div className="absolute inset-0 bg-secondary/20 pointer-events-none" />
        <div className="container relative z-10 max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Selected Work</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Real Impact Delivered</motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Enterprise Technical SEO Overhaul", category: "Technical SEO", metric: "+145%", metricDesc: "Crawl Efficiency", details: "A 1M+ page site was bleeding crawl budget on low-value pages. I restructured the crawl architecture, resolved rendering blockers, and rebuilt internal linking to prioritize revenue pages." },
              { title: "D2C Ecommerce Organic Growth", category: "Ecommerce SEO", metric: "+82%", metricDesc: "Non-brand Organic Revenue", details: "Built semantic category hubs, implemented Product and Offer schema across the full catalogue, and developed a keyword strategy targeting high-intent non-brand queries." },
              { title: "AI Citation Visibility Program", category: "GEO Strategy", metric: "Tier 1", metricDesc: "Citation Rate in Perplexity", details: "Structured brand entities, rewrote key pages for AI readability, and built semantic co-citation signals. The brand now appears consistently in Perplexity and ChatGPT answers." },
              { title: "Google AI Overviews Positioning", category: "AI Search", metric: "Featured", metricDesc: "AI Overviews Placement", details: "Aligned the content model with SGE requirements — restructuring answers, adding FAQ schema, and building entity authority. Now consistently featured in AI Overview panels." },
            ].map((project, i) => (
              <motion.div
                key={i}
                className="glass-panel p-8 md:p-10 rounded-2xl group border border-white/5 hover:border-primary/40 transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-primary/4 rounded-bl-full group-hover:bg-primary/8 transition-colors" />
                <div className="text-xs text-primary mb-5 font-bold tracking-widest uppercase">{project.category}</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors tracking-tight">{project.title}</h3>
                <p className="text-muted-foreground font-light mb-10 text-sm leading-relaxed">{project.details}</p>
                <div className="flex items-end gap-4 border-t border-border/40 pt-6">
                  <div className="text-5xl font-bold tracking-tighter text-foreground">{project.metric}</div>
                  <div className="text-muted-foreground pb-1 font-medium text-sm">{project.metricDesc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 13. FAQ ──────────────────────────────────────────── */}
      <section className="py-14 md:py-28 relative">
        <div className="container max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Common Questions</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight">Frequently Asked</motion.h2>
          </motion.div>
          <div className="space-y-4">
            {FAQ_DATA.map((faq, i) => (
              <motion.details
                key={i}
                className="group glass-panel rounded-2xl [&_summary::-webkit-details-marker]:hidden border border-white/5 overflow-hidden hover:border-primary/20 transition-all"
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              >
                <summary className="flex items-center justify-between p-5 sm:p-7 cursor-pointer font-semibold hover:text-primary transition-colors">
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 text-muted-foreground flex-shrink-0" />
                </summary>
                <div className="px-5 sm:px-7 pb-5 sm:pb-7 text-muted-foreground leading-relaxed font-light border-t border-border/30 pt-5">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 14. FINAL CTA ────────────────────────────────────── */}
      <section className="py-14 md:py-28 relative border-t border-border/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,oklch(0.70_0.24_272_/_0.12),transparent)] pointer-events-none" />
        <div className="container max-w-4xl mx-auto relative z-10 text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Let's Build Something That Lasts</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Ready to Show Up<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Everywhere Customers Search?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base sm:text-xl text-muted-foreground mb-10 font-light max-w-xl mx-auto">
              Whether it's Google rankings, AI citations, or both — I'll tell you honestly what your brand needs and build a strategy to get there.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WHATSAPP_LINK} target="_blank" rel="noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-primary text-primary-foreground rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1"
              >
                Message on WhatsApp <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#proof"
                className="w-full sm:w-auto px-10 py-5 glass-panel text-foreground rounded-xl font-bold text-lg border border-white/10 hover:border-primary/30 hover:-translate-y-1 transition-all text-center"
              >
                See the Results
              </a>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-10 text-xs text-muted-foreground">
              SEO & GEO strategy for the AI era · Technical SEO · Entity optimization · AI search citations · Based in Bangladesh, serving brands globally
            </motion.p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
