import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Growth Campaign",
      category: "E-commerce SEO",
      description: "Increased organic traffic by 250% and revenue by 180% for an online retail store",
      metrics: [
        { label: "Traffic Growth", value: "+250%" },
        { label: "Revenue Increase", value: "+180%" },
        { label: "Keyword Rankings", value: "+45 Top 10" },
      ],
      image: "https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=800&h=500&fit=crop",
      tags: ["Technical SEO", "Content Strategy", "Link Building"],
    },
    {
      id: 2,
      title: "Local Business Domination",
      category: "Local SEO",
      description: "Helped a local service business rank #1 for 50+ local keywords",
      metrics: [
        { label: "Local Rankings", value: "50+ Top 3" },
        { label: "Calls Increase", value: "+320%" },
        { label: "Website Traffic", value: "+420%" },
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
      tags: ["Local SEO", "Google Business", "Citations"],
    },
    {
      id: 3,
      title: "AI Search Visibility",
      category: "GEO Optimization",
      description: "Optimized content for ChatGPT, Gemini, and Perplexity with 95% visibility increase",
      metrics: [
        { label: "AI Visibility", value: "+95%" },
        { label: "Featured Snippets", value: "+38" },
        { label: "Organic Traffic", value: "+165%" },
      ],
      image: "https://images.unsplash.com/photo-1677442d019cecf8d5a1897ca8b64d2e1b5e8b7f?w=800&h=500&fit=crop",
      tags: ["GEO Optimization", "AI Search", "Content Strategy"],
    },
    {
      id: 4,
      title: "SaaS Growth Strategy",
      category: "Technical SEO",
      description: "Implemented comprehensive SEO strategy for a B2B SaaS platform",
      metrics: [
        { label: "Organic Leads", value: "+280%" },
        { label: "MRR Growth", value: "+$45K" },
        { label: "Keyword Rankings", value: "+120 Top 10" },
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
      tags: ["Technical SEO", "Content Marketing", "Link Building"],
    },
    {
      id: 5,
      title: "Personal Brand Launch",
      category: "Personal Branding",
      description: "Built personal brand from scratch to 10K+ organic monthly visitors",
      metrics: [
        { label: "Monthly Visitors", value: "10K+" },
        { label: "Domain Authority", value: "DA 45" },
        { label: "Branded Keywords", value: "Top 1-3" },
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
      tags: ["Personal Branding", "Content Strategy", "Link Building"],
    },
    {
      id: 6,
      title: "Content Optimization Audit",
      category: "SEO Audit",
      description: "Comprehensive SEO audit resulting in 40+ optimization recommendations",
      metrics: [
        { label: "Issues Found", value: "40+" },
        { label: "Traffic Impact", value: "+210%" },
        { label: "Implementation ROI", value: "450%" },
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
      tags: ["SEO Audit", "Technical SEO", "Content Strategy"],
    },
  ];

  const stats = [
    { label: "Projects Completed", value: "50+" },
    { label: "Average Traffic Growth", value: "280%" },
    { label: "Average ROI", value: "420%" },
    { label: "Client Satisfaction", value: "98%" },
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
              Portfolio
            </h1>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Real results from real projects. See how I've helped businesses achieve their growth goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 border-b border-border bg-card/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-foreground/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="container">
          <SectionHeader
            subtitle="Case Studies"
            title="Featured Projects"
            description="Successful campaigns and optimization strategies"
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-all hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-foreground/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/60 text-sm mb-4">{project.description}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-t border-b border-border">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="text-lg font-bold text-accent">{metric.value}</div>
                        <p className="text-xs text-foreground/60 mt-1">{metric.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg border border-accent/30 hover:border-accent hover:bg-accent/5 transition-colors text-sm font-medium">
                    View Case Study
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="container max-w-4xl">
          <SectionHeader
            subtitle="Client Feedback"
            title="What Clients Say"
            description="Real testimonials from satisfied clients"
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {[
              {
                quote: "Utsa's SEO expertise helped us increase organic traffic by 300%. Highly recommended!",
                author: "John Smith",
                role: "CEO, E-commerce Store",
              },
              {
                quote: "The GEO optimization strategy was game-changing. We're now appearing in ChatGPT and Gemini results.",
                author: "Sarah Johnson",
                role: "Marketing Director, SaaS Company",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent">★</span>
                  ))}
                </div>
                <p className="text-foreground/70 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
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
            <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk']">Ready to Achieve Similar Results?</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Let's discuss your project and create a custom strategy to help your business grow.
            </p>
            <button className="inline-block px-8 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-colors">
              Start Your Project
            </button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;

