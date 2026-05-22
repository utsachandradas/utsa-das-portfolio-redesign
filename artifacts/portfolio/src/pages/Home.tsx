import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Search, 
  BarChart, 
  Code, 
  Zap, 
  BrainCircuit,
  Database,
  Globe,
  CheckCircle2,
  ChevronDown
} from "lucide-react";
import {
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiGoogletagmanager,
  SiSemrush,
  SiOpenai,
  SiGooglegemini,
  SiPerplexity,
  SiWordpress,
  SiShopify,
} from "react-icons/si";
import HeroAvatar from "@/components/HeroAvatar";

const WHATSAPP_LINK = "https://wa.me/8801861393416?text=Hi%20Utsa%2C%20I%27d%20like%20to%20discuss%20a%20project";

const FAQ_DATA = [
  {
    q: "Who is Utsa Das?",
    a: "Utsa Das is a Bangladesh-based Founder, SEO Strategist, and GEO Strategist specializing in AI search optimization, technical SEO, and modern digital visibility systems."
  },
  {
    q: "What is GEO optimization?",
    a: "Generative Engine Optimization (GEO) is the process of optimizing content and digital assets to be understood, cited, and recommended by AI-powered search engines like ChatGPT, Perplexity, and Google's AI Overviews."
  },
  {
    q: "What is the difference between SEO and GEO?",
    a: "Traditional SEO focuses on ranking in standard search engine results pages (SERPs) using keywords and backlinks. GEO focuses on structuring semantic data and entity relationships so AI models synthesize and cite your brand in generated answers."
  },
  {
    q: "Why does AI search matter for brands?",
    a: "User behavior is shifting from traditional search queries to conversational AI prompts. If a brand isn't optimized for generative engines, they risk becoming invisible to the next generation of digital consumers."
  },
  {
    q: "Why is technical SEO important?",
    a: "Technical SEO ensures that both traditional crawlers and AI bots can access, render, and understand your website's architecture efficiently, forming the foundation of any visibility strategy."
  },
  {
    q: "What does an SEO strategist do?",
    a: "An SEO strategist analyzes market opportunities, technical infrastructure, and content ecosystems to design comprehensive frameworks that increase a brand's organic visibility, traffic, and revenue."
  },
  {
    q: "Why is AI search optimization important for modern brands?",
    a: "AI search engines synthesize answers rather than just providing links. Optimizing for AI search ensures your brand is the authoritative source these models rely on when answering user queries in your industry."
  }
];

export default function Home() {
  const schemaOrgJSONLD = {
    "@context": "http://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "name": "Utsa Das",
        "alternateName": "Utsa Chandra Das",
        "jobTitle": "SEO Strategist & GEO Strategist",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "Bangladesh"
        },
        "url": "https://utsadas.com",
        "sameAs": [
          "https://www.facebook.com/utsachandradasutsa",
          "https://www.linkedin.com/in/utsa-das-3473a53a7"
        ]
      },
      {
        "@type": "WebSite",
        "name": "Utsa Das Portfolio",
        "url": "https://utsadas.com"
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQ_DATA.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>Utsa Das | SEO Strategist, GEO Strategist & AI Search Optimization Expert | Bangladesh</title>
        <meta name="description" content="Utsa Das is a Bangladesh-based founder, SEO strategist, and GEO strategist. Specializing in technical SEO, ecommerce growth, AI search optimization, and generative engine optimization (GEO)." />
        <meta property="og:title" content="Utsa Das | SEO Strategist, GEO Strategist & AI Search Optimization Expert | Bangladesh" />
        <meta property="og:description" content="Utsa Das is a Bangladesh-based founder, SEO strategist, and GEO strategist. Specializing in technical SEO, ecommerce growth, AI search optimization, and generative engine optimization (GEO)." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
      </Helmet>

      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(var(--primary),0.15)_0,transparent_50%)]" />
        <div className="container relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-primary text-sm font-medium mb-8 tracking-wide uppercase shadow-lg shadow-primary/10">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Utsa Das • Founder • SEO & GEO Strategist
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
              I Help Brands Grow Through<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent">SEO, GEO & AI-Driven</span><br/>
              Search Visibility
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Founder-led SEO and GEO strategies that help businesses improve search rankings, AI visibility, and long-term digital growth.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(var(--primary),0.3)] hover:shadow-[0_0_40px_rgba(var(--primary),0.5)]"
                data-testid="link-whatsapp-hero"
              >
                Chat on WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#portfolio"
                className="w-full sm:w-auto px-8 py-4 glass-panel text-foreground rounded-lg font-semibold hover:bg-white/10 transition-all"
                data-testid="link-portfolio-hero"
              >
                View Work
              </a>
            </div>

            <div className="mt-16 flex items-center justify-center gap-8 text-muted-foreground">
              <a href="https://www.facebook.com/utsachandradasutsa" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors text-sm font-medium tracking-wide uppercase">Facebook</a>
              <a href="https://www.linkedin.com/in/utsa-das-3473a53a7" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors text-sm font-medium tracking-wide uppercase">LinkedIn</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Positioning Statement */}
      <section className="py-24 border-y border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/30" />
        <div className="container relative z-10 max-w-5xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-medium leading-tight text-foreground/90 font-light"
          >
            "Helping brands adapt to the <span className="text-primary font-semibold">future of search</span> through SEO, GEO, and AI-first visibility strategies."
          </motion.h2>
        </div>
      </section>

      {/* 3. About Section */}
      <section className="py-32 relative" id="about">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8 tracking-tight">Mastering the Search Ecosystem</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
                <p>As a founder and technical SEO specialist, my background is rooted in understanding how complex search algorithms evaluate and rank digital entities.</p>
                <p>The landscape is shifting. Traditional SEO is foundational, but <strong className="text-foreground font-semibold">Generative Engine Optimization (GEO)</strong> is the frontier. I bridge the gap between technical optimization, ecommerce growth, and AI search understanding.</p>
                <p>My methodology focuses on long-term strategic thinking—building semantic content structures that dominate traditional SERPs while positioning brands as authoritative entities within AI LLM training and retrieval mechanisms.</p>
              </div>
            </motion.div>
            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <HeroAvatar />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Services Section */}
      <section className="py-32 relative" id="services">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background pointer-events-none" />
        <div className="container relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Strategic Specializations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">Comprehensive frameworks designed for the modern visibility landscape.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { icon: Search, title: "SEO Strategy", desc: "Holistic search strategy that improves rankings and drives qualified organic traffic." },
              { icon: Code, title: "Technical SEO", desc: "Technical foundation audits, crawlability, indexing, and Core Web Vitals optimization." },
              { icon: BarChart, title: "Ecommerce SEO", desc: "Product page optimization, category architecture, and conversion-focused organic growth." },
              { icon: BrainCircuit, title: "GEO Optimization", desc: "Generative Engine Optimization for AI search systems like ChatGPT, Gemini, and Perplexity." },
              { icon: Database, title: "AI Search Visibility", desc: "Structured content systems that surface prominently in AI-powered search results." },
              { icon: Zap, title: "Website Optimization", desc: "Performance, UX, and technical improvements for superior search performance." },
              { icon: Globe, title: "Content Strategy", desc: "Semantic content systems aligned with exact search intent and AI comprehension." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-all group border border-white/5 hover:border-primary/30"
              >
                <service.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Optimization Process */}
      <section className="py-32 relative">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-24 text-center tracking-tight">The Optimization Lifecycle</h2>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent hidden md:block" />
            
            {[
              { phase: "01", title: "Research", desc: "Keyword & entity research, competitor analysis, search intent mapping." },
              { phase: "02", title: "Audit", desc: "Technical SEO audits, indexing reviews, performance analysis." },
              { phase: "03", title: "Optimization", desc: "Schema implementation, semantic content, GEO improvements." },
              { phase: "04", title: "Growth", desc: "Continuous monitoring, scaling, and iterative enhancements." }
            ].map((step, i) => (
              <motion.div 
                key={i} 
                className="relative z-10 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-24 h-24 rounded-2xl glass-panel border border-primary/30 flex items-center justify-center font-bold text-2xl text-primary mb-8 shadow-[0_0_20px_rgba(var(--primary),0.1)]">
                  {step.phase}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Trust Signals & 7. Currently Exploring */}
      <section className="py-32 relative border-y border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(var(--primary),0.05)_0,transparent_70%)] pointer-events-none" />
        <div className="container relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">Pillars of Execution</h2>
            <ul className="space-y-6">
              {[
                "Founder-led SEO + GEO strategy",
                "AI search optimization expertise",
                "Performance-focused execution",
                "Mobile-first visibility systems",
                "Technical implementation mastery",
                "Long-term scalable growth architectures"
              ].map((pillar, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-center gap-4 glass-panel p-4 rounded-xl"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="font-medium text-lg">{pillar}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">Currently Exploring</h2>
            <div className="flex flex-wrap gap-4">
              {[
                "AI Search Behavior", "GEO Ranking Systems", 
                "Semantic Content Structures", "LLM Visibility", 
                "Future Search Systems", "Search Intent Evolution"
              ].map((tag, i) => (
                <motion.span 
                  key={i} 
                  className="px-6 py-3 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium hover:bg-primary/10 transition-colors cursor-default"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Skills Section & 9. Tools */}
      <section className="py-32 relative" id="skills">
        <div className="container max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">Technical Arsenal</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-24 max-w-4xl mx-auto">
            {[
              "Technical SEO", "GEO Optimization", "AI Search Optimization", 
              "Ecommerce SEO", "Keyword Research", "Schema Markup", 
              "Content Strategy", "Analytics & Tracking", "Core Web Vitals"
            ].map((skill, i) => (
              <motion.span 
                key={i} 
                className="px-6 py-3 glass-panel rounded-xl font-medium shadow-sm hover:border-primary/50 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>

          <div className="glass-panel p-8 md:p-12 rounded-3xl max-w-5xl mx-auto border border-white/5">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 md:gap-6">
              {[
                { Icon: SiGoogleanalytics,    name: "Google Analytics",   color: "#E37400" },
                { Icon: SiGooglesearchconsole,name: "Search Console",     color: "#458CF5" },
                { Icon: SiGoogletagmanager,   name: "Tag Manager",        color: "#4285F4" },
                { Icon: SiSemrush,            name: "SEMrush",            color: "#FF642D" },
                { Icon: SiOpenai,             name: "ChatGPT",            color: "#74AA9C" },
                { Icon: SiGooglegemini,       name: "Gemini",             color: "#4285F4" },
                { Icon: SiPerplexity,         name: "Perplexity",         color: "#20B8CD" },
                { Icon: SiWordpress,          name: "WordPress",          color: "#21759B" },
                { Icon: SiShopify,            name: "Shopify",            color: "#96BF48" },
                { Icon: null, name: "Ahrefs",          color: "#FF7A42" },
                { Icon: null, name: "Screaming Frog",  color: "#6ABF00" },
                { Icon: null, name: "Lighthouse",      color: "#F9AB00" },
                { Icon: null, name: "Claude",          color: "#C96442" },
                { Icon: null, name: "Google SGE",      color: "#EA4335" },
                { Icon: null, name: "Log File Analysis", color: "#6366f1" },
              ].map(({ Icon, name, color }) => (
                <motion.div
                  key={name}
                  className="flex flex-col items-center gap-2.5 group cursor-default"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl glass-panel border border-white/8 flex items-center justify-center group-hover:border-primary/30 transition-all shadow-sm">
                    {Icon ? (
                      <Icon className="w-6 h-6 md:w-7 md:h-7" style={{ color }} />
                    ) : (
                      <span className="text-lg md:text-xl font-black" style={{ color }}>
                        {name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] md:text-xs text-muted-foreground text-center leading-tight group-hover:text-foreground transition-colors font-medium max-w-[70px]">
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Portfolio / Experience Section */}
      <section className="py-32 relative" id="portfolio">
        <div className="absolute inset-0 bg-secondary/20 pointer-events-none" />
        <div className="container relative z-10 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center tracking-tight">Selected Work & Impact</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { title: "Enterprise Technical SEO", category: "Technical SEO", metric: "+145%", metricDesc: "Organic Crawl Efficiency", details: "Restructured site architecture and resolved critical rendering issues for a 1M+ page enterprise site." },
              { title: "D2C Ecommerce Architecture", category: "Ecommerce SEO", metric: "+82%", metricDesc: "Non-brand Organic Revenue", details: "Developed semantic category hubs and optimized product data feeds for a growing retail brand." },
              { title: "LLM Visibility Injection", category: "GEO Experiments", metric: "Tier 1", metricDesc: "Citation Frequency in Perplexity", details: "Structured brand entities and semantic data to secure primary citations in AI search overviews." },
              { title: "Semantic Entity Restructuring", category: "AI-Search", metric: "Featured", metricDesc: "AI Overviews Placement", details: "Aligned content models with Google's SGE requirements resulting in consistent featured placements." }
            ].map((project, i) => (
              <motion.div 
                key={i} 
                className="glass-panel p-10 rounded-3xl group cursor-pointer border border-white/5 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transition-colors group-hover:bg-primary/10" />
                <div className="text-sm text-primary mb-6 font-semibold tracking-wide uppercase">{project.category}</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors tracking-tight">{project.title}</h3>
                <p className="text-muted-foreground font-light mb-10 text-sm leading-relaxed">{project.details}</p>
                <div className="flex items-end gap-6 border-t border-border/50 pt-8 mt-auto">
                  <div className="text-5xl font-bold tracking-tighter text-foreground">{project.metric}</div>
                  <div className="text-muted-foreground pb-1 font-medium">{project.metricDesc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FAQ Section */}
      <section className="py-32 relative">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {FAQ_DATA.map((faq, i) => (
              <motion.details 
                key={i} 
                className="group glass-panel rounded-2xl [&_summary::-webkit-details-marker]:hidden border border-white/5 overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <summary className="flex items-center justify-between p-8 cursor-pointer font-semibold text-lg hover:text-primary transition-colors">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 text-muted-foreground" />
                </summary>
                <div className="px-8 pb-8 text-muted-foreground leading-relaxed font-light border-t border-border/30 pt-4">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Final CTA Section */}
      <section className="py-40 relative text-center border-t border-border/50 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom,rgba(var(--primary),0.2)_0,transparent_60%)]" />
        <div className="container relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">Let's Build the<br/>Future of Search</h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-16 font-light max-w-2xl mx-auto">
              Secure your brand's visibility across traditional algorithms and emerging generative engines.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="px-10 py-5 bg-primary text-primary-foreground rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(var(--primary),0.3)] text-lg"
              >
                Start Project <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#portfolio"
                className="px-10 py-5 glass-panel text-foreground rounded-xl font-bold hover:bg-white/10 transition-all text-lg"
              >
                View Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}