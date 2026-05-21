import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import Hero from "@/components/Hero";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { TrendingUp, Users, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { getBreadcrumbSchema } from "@/lib/schema";

const Projects = () => {
  const stats = [
    { label: "Projects Completed", value: "50+" },
    { label: "Average Traffic Growth", value: "280%" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "Years of Experience", value: "10+" },
  ];

  const projects = [
    {
      id: 1,
      title: "E-commerce Growth",
      category: "E-commerce SEO",
      metric: "+250% Traffic",
      description: "Increased organic traffic and revenue for an online retail store",
      metrics: [
        { label: "Organic Traffic", value: "+250%" },
        { label: "Revenue Growth", value: "+180%" },
        { label: "Keyword Rankings", value: "150+" },
      ],
      tags: ["Technical SEO", "Content Strategy", "Link Building"],
    },
    {
      id: 2,
      title: "Local SEO Success",
      category: "Local SEO",
      metric: "+320% Calls",
      description: "Helped a service business rank #1 for 50+ local keywords",
      metrics: [
        { label: "Local Keywords", value: "50+" },
        { label: "Phone Calls", value: "+320%" },
        { label: "Google Reviews", value: "4.8★" },
      ],
      tags: ["Local SEO", "Google Business", "Review Management"],
    },
    {
      id: 3,
      title: "AI Search Visibility",
      category: "GEO Optimization",
      metric: "+95% Visibility",
      description: "Optimized content for ChatGPT, Gemini, and Perplexity",
      metrics: [
        { label: "AI Search Appearances", value: "+95%" },
        { label: "Referral Traffic", value: "+420%" },
        { label: "Brand Mentions", value: "+280%" },
      ],
      tags: ["GEO Optimization", "AI Search", "Content Optimization"],
    },
    {
      id: 4,
      title: "SaaS Growth Strategy",
      category: "Strategic Growth",
      metric: "+380% Leads",
      description: "Implemented comprehensive SEO strategy for B2B SaaS platform",
      metrics: [
        { label: "Qualified Leads", value: "+380%" },
        { label: "Organic Revenue", value: "+520%" },
        { label: "Conversion Rate", value: "+45%" },
      ],
      tags: ["B2B SEO", "Content Marketing", "Lead Generation"],
    },
    {
      id: 5,
      title: "Personal Brand Launch",
      category: "Personal Branding",
      metric: "+150K Followers",
      description: "Built personal brand authority and online presence",
      metrics: [
        { label: "Social Followers", value: "+150K" },
        { label: "Monthly Reach", value: "2M+" },
        { label: "Speaking Invitations", value: "25+" },
      ],
      tags: ["Personal Branding", "Content Creation", "Social Media"],
    },
    {
      id: 6,
      title: "E-commerce Marketplace",
      category: "E-commerce SEO",
      metric: "+420% Sales",
      description: "Optimized product pages and category structure for major marketplace",
      metrics: [
        { label: "Product Sales", value: "+420%" },
        { label: "Average Order Value", value: "+65%" },
        { label: "Customer Lifetime Value", value: "+180%" },
      ],
      tags: ["E-commerce", "Product SEO", "Conversion Optimization"],
    },
  ];

  const testimonials = [
    {
      quote:
        "Utsa's SEO expertise helped us increase organic traffic by 300%. The strategic approach and transparent communication made all the difference.",
      author: "John Smith",
      role: "CEO, E-commerce Store",
      metric: "+300% Traffic",
    },
    {
      quote:
        "The GEO optimization strategy was game-changing. We're now appearing in ChatGPT results and seeing significant referral traffic.",
      author: "Sarah Johnson",
      role: "Marketing Director, SaaS",
      metric: "+420% Referrals",
    },
    {
      quote:
        "Working with Utsa transformed our local SEO presence. We went from page 5 to page 1 for all our target keywords in just 6 months.",
      author: "Michael Chen",
      role: "Founder, Service Business",
      metric: "Page 1 Rankings",
    },
  ];

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Projects", item: "/projects" }
  ];

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      getBreadcrumbSchema(breadcrumbs)
    ]
  };

  return (
    <Layout>
      <SEO 
        title="SEO Case Studies & Projects | Utsa Das"
        description="View featured SEO and GEO case studies by Utsa Das. Real results including traffic growth, lead generation, and AI search visibility improvements."
        canonical="/projects"
        schemaMarkup={combinedSchema}
      />
      {/* Hero Section */}
      <Hero
        headline="Case Studies"
        subheadline="Real Results, Real Impact"
        ctaText="Start Your Project"
        ctaHref="/contact"
        secondaryCtaText="View Services"
        secondaryCtaHref="/services"
      />

      {/* Stats Section */}
      <section className="py-20 md:py-32 border-b border-border bg-card/50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <p className="text-foreground/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="container">
          <SectionHeader
            subtitle="Portfolio"
            title="Featured Case Studies"
            description="Recent projects showcasing measurable results and strategic impact"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-card border border-border rounded-xl p-6 hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="text-3xl font-bold text-accent mb-2">
                    {project.metric}
                  </div>
                  <p className="text-xs font-semibold text-accent/60 uppercase tracking-wider">
                    {project.category}
                  </p>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-foreground/60 text-sm mb-6">{project.description}</p>

                {/* Metrics */}
                <div className="space-y-3 mb-6 pb-6 border-b border-border">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span className="text-foreground/60">{m.label}</span>
                      <span className="font-semibold text-accent">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="container max-w-5xl">
          <SectionHeader
            subtitle="Client Feedback"
            title="What Clients Say"
            description="Real testimonials from satisfied clients"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/70 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div className="mb-4 pb-4 border-b border-border">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
                <p className="text-sm font-semibold text-accent">{testimonial.metric}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] text-foreground">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Let's discuss your goals and create a customized strategy to drive
              measurable growth for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-foreground/20 hover:border-accent hover:text-accent"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
