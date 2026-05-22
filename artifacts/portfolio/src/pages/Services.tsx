import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import Hero from "@/components/Hero";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import {
  Zap,
  TrendingUp,
  Brain,
  Search,
  ShoppingCart,
  User,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/schema";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Technical SEO",
      description: "Optimize your website's technical foundation",
      benefits: [
        "Core Web Vitals optimization",
        "Site speed improvement",
        "Mobile-first indexing",
        "Structured data implementation",
      ],
    },
    {
      icon: TrendingUp,
      title: "Local SEO",
      description: "Dominate local search results in your market",
      benefits: [
        "Google Business Profile optimization",
        "Local citation building",
        "Review management",
        "Local keyword targeting",
      ],
    },
    {
      icon: Brain,
      title: "GEO Optimization",
      description: "Position your content for AI search engines",
      benefits: [
        "ChatGPT optimization",
        "Gemini visibility",
        "Perplexity ranking",
        "AI search strategy",
      ],
    },
    {
      icon: Search,
      title: "Content Strategy",
      description: "Create content that ranks and converts",
      benefits: [
        "Keyword research & analysis",
        "Content planning",
        "SEO copywriting",
        "Content calendar management",
      ],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce SEO",
      description: "Increase online sales through organic search",
      benefits: [
        "Product page optimization",
        "Category page strategy",
        "Conversion rate optimization",
        "Shopping feed optimization",
      ],
    },
    {
      icon: User,
      title: "Personal Branding",
      description: "Build your authority and online presence",
      benefits: [
        "Personal brand strategy",
        "Thought leadership content",
        "Social media optimization",
        "Reputation management",
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Audit",
      description: "Comprehensive analysis of your current SEO performance and opportunities",
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

  const tools = [
    {
      category: "SEO Tools",
      items: ["SEMrush", "Ahrefs", "Moz", "Google Search Console", "Google Analytics"],
    },
    {
      category: "AI & GEO Tools",
      items: ["ChatGPT", "Gemini", "Perplexity", "Claude", "Custom AI Models"],
    },
    {
      category: "Development",
      items: ["Next.js", "React", "Tailwind CSS", "Vercel", "GitHub"],
    },
  ];

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" }
  ];

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      getServiceSchema(),
      getBreadcrumbSchema(breadcrumbs)
    ]
  };

  return (
    <Layout>
      <SEO 
        title="SEO & GEO Services | Utsa Das"
        description="Explore professional SEO and GEO services by Utsa Das. From Technical SEO audits to AI search optimization and Ecommerce growth strategies."
        canonical="/services"
        schemaMarkup={combinedSchema}
      />
      <Hero
        headline="Services"
        subheadline="Strategic SEO & GEO Solutions"
        ctaText="Schedule Consultation"
        ctaHref="/contact"
        secondaryCtaText="View Portfolio"
        secondaryCtaHref="/projects"
      />

      <section className="py-20 md:py-32 border-b border-border">
        <div className="container">
          <SectionHeader
            subtitle="What I Offer"
            title="Comprehensive Solutions"
            description="Strategic services designed to boost your visibility and drive sustainable growth"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-card border border-border rounded-xl p-8 hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-foreground/60 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                        <span className="text-sm text-foreground/70">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 border-b border-border">
        <div className="container max-w-5xl">
          <SectionHeader
            subtitle="How It Works"
            title="My Process"
            description="A structured approach to delivering exceptional results"
          />

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {index !== 3 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-1 bg-gradient-to-r from-accent to-transparent" />
                )}
                <div className="relative z-10 bg-card border border-border rounded-xl p-6">
                  <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold mb-4 text-sm">
                    {item.step}
                  </div>
                  <h3 className="font-bold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-foreground/60">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 border-b border-border">
        <div className="container">
          <SectionHeader
            subtitle="Tools & Technologies"
            title="What I Use"
            description="Industry-leading tools and platforms for optimal results"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {tools.map((toolGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-8"
              >
                <h3 className="font-bold text-lg mb-6 text-foreground">
                  {toolGroup.category}
                </h3>
                <ul className="space-y-3">
                  {toolGroup.items.map((tool, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-foreground/70"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] text-foreground">
              Ready to Transform Your SEO?
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Let's discuss which services are right for your business and create a
              customized strategy to achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-foreground/20 hover:border-accent hover:text-accent"
                >
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
