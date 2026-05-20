import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Technical SEO",
      description: "Optimize your website's technical foundation for better search engine crawlability and indexing.",
      benefits: ["Core Web Vitals optimization", "Site speed improvement", "Mobile optimization", "Structured data implementation"],
      icon: "⚙️",
    },
    {
      title: "Local SEO",
      description: "Dominate local search results and attract customers in your geographic area.",
      benefits: ["Google Business Profile optimization", "Local citation building", "Review management", "Local keyword targeting"],
      icon: "📍",
    },
    {
      title: "GEO Optimization",
      description: "Optimize your content for Generative Engine Optimization and AI search platforms.",
      benefits: ["ChatGPT optimization", "Gemini visibility", "Claude compatibility", "Perplexity ranking"],
      icon: "🤖",
    },
    {
      title: "AI Search Optimization",
      description: "Position your brand for the future of search with AI-powered optimization strategies.",
      benefits: ["E-E-A-T optimization", "Entity-rich content", "Semantic SEO", "AI-readable formatting"],
      icon: "✨",
    },
    {
      title: "SEO Audits",
      description: "Comprehensive analysis of your website's SEO performance and opportunities.",
      benefits: ["Technical audit", "On-page analysis", "Competitor research", "Action plan"],
      icon: "🔍",
    },
    {
      title: "E-commerce SEO",
      description: "Increase organic visibility and sales for your e-commerce store.",
      benefits: ["Product page optimization", "Category optimization", "Schema markup", "Conversion optimization"],
      icon: "🛍️",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Audit",
      description: "Comprehensive analysis of your current SEO performance and competitive landscape",
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Create a customized roadmap aligned with your business goals",
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute optimization strategies across all channels",
    },
    {
      step: "04",
      title: "Monitoring & Optimization",
      description: "Track results and continuously improve performance",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container relative z-10 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-['Space_Grotesk']">
              Services
            </h1>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Comprehensive SEO, GEO, and AI search optimization services designed to help your business grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="container">
          <SectionHeader
            subtitle="What I Offer"
            title="Service Offerings"
            description="Comprehensive solutions for modern search optimization"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-card border border-border rounded-lg p-8 hover:border-accent transition-all hover:shadow-lg"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/60 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button className="text-accent font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="container max-w-5xl">
          <SectionHeader
            subtitle="How It Works"
            title="My Process"
            description="A structured approach to delivering results"
          />

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connection line */}
                {index !== process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-gradient-to-r from-accent to-transparent" />
                )}

                <div className="relative z-10 bg-card border border-border rounded-lg p-6">
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/60">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="container max-w-4xl">
          <SectionHeader
            subtitle="Tools & Technologies"
            title="My Tech Stack"
            description="Industry-leading tools for SEO, GEO, and AI optimization"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                category: "SEO Tools",
                items: ["Ahrefs", "SEMrush", "Screaming Frog", "Google Search Console", "Google Analytics 4"],
              },
              {
                category: "AI & GEO Tools",
                items: ["ChatGPT", "Claude", "Gemini", "Perplexity", "Manus AI"],
              },
              {
                category: "Development Tools",
                items: ["Next.js", "Vercel", "GitHub", "Figma", "VS Code"],
              },
            ].map((toolGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <h3 className="font-bold mb-4">{toolGroup.category}</h3>
                <ul className="space-y-2">
                  {toolGroup.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk']">Ready to Get Started?</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Let us discuss which services are right for your business and how we can achieve your growth goals together.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold"
              asChild
            >
              <a href="/contact">Schedule a Consultation</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

