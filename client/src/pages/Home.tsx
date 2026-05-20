import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, TrendingUp, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  const services = [
    {
      icon: Zap,
      title: "Technical SEO",
      description: "Optimize your website's technical foundation for better performance and search visibility",
    },
    {
      icon: TrendingUp,
      title: "GEO Optimization",
      description: "Position your content for AI search engines like ChatGPT, Gemini, and Perplexity",
    },
    {
      icon: Users,
      title: "Strategic Growth",
      description: "Build sustainable organic growth through data-driven SEO and content strategies",
    },
    {
      icon: Award,
      title: "Expert Consulting",
      description: "Get personalized guidance from an experienced SEO and digital growth strategist",
    },
  ];

  const benefits = [
    "Increased organic traffic and visibility",
    "Higher search engine rankings",
    "Better user experience and engagement",
    "Sustainable long-term growth",
    "Improved conversion rates",
    "Data-driven decision making",
  ];

  const stats = [
    { label: "Projects Completed", value: "50+" },
    { label: "Average Traffic Growth", value: "280%" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "Years of Experience", value: "10+" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero backgroundImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663671703947/ByE3kmzuQb5KTYZxGpjf2U/hero-bg-geometric-iVmymKPskEAwVgbBFZ5cLP.webp" />

      {/* Services Overview */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="container">
          <SectionHeader
            subtitle="Services"
            title="What I Offer"
            description="Comprehensive solutions for modern search optimization"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-card border border-border rounded-lg p-6 hover:border-accent transition-all hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-foreground/60">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionHeader
                align="left"
                subtitle="Why Choose Me"
                title="Results-Driven SEO Strategy"
                description="I combine technical expertise with strategic thinking to deliver measurable results"
              />

              <ul className="space-y-4 mt-8">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/70">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent/10 to-blue-400/10 rounded-lg p-8 border border-accent/20"
            >
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-accent font-semibold mb-2">Approach</p>
                  <p className="text-foreground/70">
                    I don't believe in quick fixes. My strategies are built on thorough research, technical expertise, and a deep understanding of search engine algorithms.
                  </p>
                </div>
                <div>
                  <p className="text-sm text-accent font-semibold mb-2">Transparency</p>
                  <p className="text-foreground/70">
                    You'll always know what I'm doing and why. Regular reporting and clear communication are fundamental to my process.
                  </p>
                </div>
                <div>
                  <p className="text-sm text-accent font-semibold mb-2">Results</p>
                  <p className="text-foreground/70">
                    My success is measured by your success. I'm committed to delivering tangible results that impact your bottom line.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 border-b border-border bg-card/50">
        <div className="container">
          <SectionHeader
            subtitle="Track Record"
            title="Proven Results"
            description="Real numbers from real projects"
          />

          <div className="grid md:grid-cols-4 gap-8 mt-12">
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

      {/* Featured Work */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="container">
          <SectionHeader
            subtitle="Portfolio"
            title="Featured Projects"
            description="Recent case studies and success stories"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "E-commerce Growth",
                metric: "+250% Traffic",
                description: "Increased organic traffic and revenue for an online retail store",
              },
              {
                title: "Local SEO Success",
                metric: "+320% Calls",
                description: "Helped a service business rank #1 for 50+ local keywords",
              },
              {
                title: "AI Search Visibility",
                metric: "+95% Visibility",
                description: "Optimized content for ChatGPT, Gemini, and Perplexity",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-card border border-border rounded-lg p-6 hover:border-accent transition-all hover:shadow-lg"
              >
                <div className="text-2xl font-bold text-accent mb-2">{project.metric}</div>
                <h3 className="font-bold mb-2 text-lg">{project.title}</h3>
                <p className="text-foreground/60 text-sm mb-4">{project.description}</p>
                <button className="text-accent font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Case Study
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-foreground/20 hover:border-accent hover:text-accent"
              asChild
            >
              <a href="/portfolio">View All Projects</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
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
                quote: "The GEO optimization strategy was game-changing. We're now appearing in ChatGPT results.",
                author: "Sarah Johnson",
                role: "Marketing Director, SaaS",
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

      {/* Process Section */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="container max-w-5xl">
          <SectionHeader
            subtitle="How It Works"
            title="My Process"
            description="A structured approach to delivering results"
          />

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Comprehensive audit of your current SEO performance",
              },
              {
                step: "02",
                title: "Strategy",
                description: "Create a customized roadmap aligned with your goals",
              },
              {
                step: "03",
                title: "Implementation",
                description: "Execute optimization strategies across all channels",
              },
              {
                step: "04",
                title: "Optimization",
                description: "Track results and continuously improve performance",
              },
            ].map((item, index) => (
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
                <div className="relative z-10 bg-card border border-border rounded-lg p-6">
                  <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold mb-3 text-sm">
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

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(https://d2xsxph8kpxj0f.cloudfront.net/310519663671703947/ByE3kmzuQb5KTYZxGpjf2U/cta-gradient-accent-6J8yDQAr5HeeKCMikTRoD3.webp)",
            backgroundSize: "cover",
          }}
        />
        <div className="container relative z-10 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk']">Ready to Grow?</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Let's discuss how I can help your business achieve better visibility and sustainable growth through strategic SEO and GEO optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-semibold"
                asChild
              >
                <a href="/contact">Work With Me</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-foreground/20 hover:border-accent hover:text-accent"
                asChild
              >
                <a href="/portfolio">View Portfolio</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;

