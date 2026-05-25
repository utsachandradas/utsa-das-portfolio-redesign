import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { m } from "framer-motion";
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
      "https://www.linkedin.com/in/utsa-das-3473a53a7",
      "https://medium.com/@utsadas_growth_marketer"
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
        <link rel="canonical" href="https://utsadas.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Utsa Das | Growth Marketing Strategist" />
        <meta property="og:title" content="About Utsa Das — Growth Marketing Strategist in Bangladesh" />
        <meta property="og:description" content="Utsa Das (Utsa Chandra Das) is a Growth Marketing Strategist in Bangladesh with 4+ years of experience since 2022. He builds scalable acquisition and conversion systems for e-commerce and B2B brands through paid ads, SEO, GEO, and CRO." />
        <meta property="og:url" content="https://utsadas.com/about" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://utsadas.com/opengraph.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@utsadas" />
        <meta name="twitter:title" content="About Utsa Das — Growth Marketing Strategist in Bangladesh" />
        <meta name="twitter:description" content="Utsa Das is a Founder and Growth Marketing Strategist in Bangladesh. 4+ years building scalable paid ads, SEO, GEO, and CRO systems for e-commerce and B2B brands." />
        <meta name="twitter:image" content="https://utsadas.com/opengraph.jpg" />
        <meta name="keywords" content="Utsa Das, Utsa Chandra Das, Growth Marketing Strategist Bangladesh, about Utsa Das, performance marketing Bangladesh" />
        <script type="application/ld+json">{JSON.stringify(schemaJSONLD)}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://utsadas.com/" },
            { "@type": "ListItem", "position": 2, "name": "About", "item": "https://utsadas.com/about" }
          ]
        })}</script>
      </Helmet>

      <section className="py-24 pt-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(var(--primary),0.05)_0,transparent_50%)] pointer-events-none" />
        <div className="container max-w-5xl mx-auto relative z-10">
          <m.div
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
          </m.div>

          <div className="mb-14 md:mb-24">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">

              {/* Left — Photo card */}
              <m.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center"
              >
                {/* Gradient ring frame */}
                <div
                  className="w-full max-w-[320px] p-[3px] rounded-[2rem] mx-auto"
                  style={{
                    background: "linear-gradient(135deg, oklch(0.70 0.24 272), oklch(0.65 0.22 295), oklch(0.72 0.18 200), oklch(0.70 0.24 272))",
                    boxShadow: "0 0 60px oklch(0.70 0.24 272 / 0.25)",
                  }}
                >
                  <div
                    className="relative rounded-[1.75rem] overflow-hidden"
                    style={{ background: "linear-gradient(160deg, oklch(0.16 0.04 265), oklch(0.11 0.02 255))" }}
                  >
                    <div className="absolute top-0 left-0 w-28 h-28 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" />
                    <img
                      src="/assets/avatars/utsa-das-avatar.png"
                      alt="Utsa Das — Founder & Growth Marketing Strategist"
                      className="w-full block"
                      style={{ aspectRatio: "4/5", objectFit: "cover", objectPosition: "center top" }}
                    />
                    <div
                      className="absolute bottom-0 left-0 right-0 px-5 py-4"
                      style={{ background: "linear-gradient(to top, oklch(0.08 0.02 255 / 0.97) 55%, transparent)" }}
                    >
                      <p className="font-bold text-base text-white leading-tight">Utsa Das</p>
                      <p className="text-xs font-medium mt-0.5" style={{ color: "oklch(0.75 0.20 272)" }}>
                        Founder &amp; Growth Marketing Strategist
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats below photo */}
                <div className="grid grid-cols-3 gap-3 mt-5 w-full max-w-[320px]">
                  {[
                    { value: "4+", label: "Years", sub: "Since 2022" },
                    { value: "10+", label: "Projects", sub: "E-com & B2B" },
                    { value: "3", label: "Channels", sub: "Meta·Google·TikTok" },
                  ].map((s) => (
                    <div key={s.label} className="glass-panel rounded-xl px-3 py-3 border border-white/8 text-center">
                      <div className="text-xl font-bold text-primary leading-none">{s.value}</div>
                      <div className="text-[10px] font-semibold text-foreground mt-1">{s.label}</div>
                      <div className="text-[9px] text-muted-foreground mt-0.5 leading-tight">{s.sub}</div>
                    </div>
                  ))}
                </div>
              </m.div>

              {/* Right — Bio & Core Principles */}
              <m.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="space-y-6 pt-2"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-primary text-xs font-semibold border border-primary/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Founder &amp; Growth Marketing Strategist
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed font-light">
                  <p>
                    I'm Utsa Das, a Founder and Growth Marketing Strategist based in Bangladesh, specializing in building scalable and sustainable digital growth systems for e-commerce and B2B brands.
                  </p>
                  <p>
                    Since 2022, I have worked on 10+ digital projects — combining <strong className="text-foreground font-medium">performance marketing, SEO systems, and web infrastructure</strong> into a unified growth engine focused on one outcome: <span className="text-primary font-semibold">predictable revenue growth.</span>
                  </p>
                  <p>
                    I don't treat marketing channels separately. I design integrated systems where paid ads, organic search, and conversion optimization work together to maximize ROI.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-2xl border border-white/5">
                  <h3 className="text-sm font-bold mb-5 tracking-tight text-foreground uppercase tracking-widest">Core Principles</h3>
                  <ul className="space-y-4">
                    {[
                      { title: "Revenue Outcomes Over Vanity Metrics", desc: "Traffic, rankings, and impressions only matter when they connect directly to measurable revenue and business growth." },
                      { title: "Systems Over Isolated Tactics", desc: "One-off campaigns fade. Integrated growth engines — paid + organic + CRO — compound over time." },
                      { title: "Real Execution Over Theory", desc: "Every strategy is validated through live e-commerce operations, real budgets, and actual customer data." }
                    ].map((val, i) => (
                      <li key={i} className="flex gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-0.5">{val.title}</h4>
                        <p className="text-sm text-muted-foreground">{val.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </m.div>
            </div>{/* end grid */}
          </div>{/* end mb-14 */}

          <div className="mb-14 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">The Growth Journey of Utsa Das</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              {timeline.map((item, index) => (
                <m.div
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
                </m.div>
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
