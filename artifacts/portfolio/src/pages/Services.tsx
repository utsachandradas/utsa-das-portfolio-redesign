import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Zap, TrendingUp, Brain, Search, ShoppingCart, User, CheckCircle2, ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/8801861393416?text=Hi%20Utsa%2C%20I%27d%20like%20to%20discuss%20a%20project";

export default function Services() {
  const services = [
    {
      icon: Zap,
      title: "Technical SEO",
      description: "Optimize your website's technical foundation",
      benefits: ["Core Web Vitals optimization", "Site speed improvement", "Mobile-first indexing", "Structured data implementation"],
    },
    {
      icon: TrendingUp,
      title: "Local SEO",
      description: "Dominate local search results in your market",
      benefits: ["Google Business Profile optimization", "Local citation building", "Review management", "Local keyword targeting"],
    },
    {
      icon: Brain,
      title: "GEO Optimization",
      description: "Position your content for AI search engines",
      benefits: ["ChatGPT optimization", "Gemini visibility", "Perplexity ranking", "AI search strategy"],
    },
    {
      icon: Search,
      title: "Content Strategy",
      description: "Create content that ranks and converts",
      benefits: ["Keyword research & analysis", "Content planning", "SEO copywriting", "Content calendar management"],
    },
    {
      icon: ShoppingCart,
      title: "Ecommerce SEO",
      description: "Increase online sales through organic search",
      benefits: ["Product page optimization", "Category page strategy", "Conversion rate optimization", "Shopping feed optimization"],
    },
    {
      icon: User,
      title: "Personal Branding",
      description: "Build your authority and online presence",
      benefits: ["Personal brand strategy", "Thought leadership content", "Social media optimization", "Reputation management"],
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>SEO & GEO Services | Utsa Das</title>
        <meta name="description" content="Explore professional SEO and GEO services by Utsa Das. From Technical SEO audits to AI search optimization and Ecommerce growth strategies." />
      </Helmet>
      
      <section className="py-24 pt-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(var(--primary),0.05)_0,transparent_50%)] pointer-events-none" />
        <div className="container max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Strategic Services</h1>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Comprehensive frameworks designed for the modern visibility landscape.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-muted-foreground mb-8 text-sm font-light">{service.description}</p>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center bg-secondary/30 rounded-3xl p-12 border border-border">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your SEO?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Let's discuss which services are right for your business and create a customized strategy to achieve your goals.</p>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold items-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(var(--primary),0.3)]"
            >
              Discuss Your Strategy <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}