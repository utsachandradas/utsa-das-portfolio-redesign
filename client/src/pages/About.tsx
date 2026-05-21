import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import Hero from "@/components/Hero";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { getBreadcrumbSchema, getPersonSchema } from "@/lib/schema";

const About = () => {
  const expertise = [
    "Technical SEO & Core Web Vitals",
    "Local SEO & GEO Optimization",
    "AI Search Engine Optimization",
    "Content Strategy & Optimization",
    "E-commerce SEO",
    "Personal Branding",
  ];

  const timeline = [
    {
      year: "2014",
      title: "Started Digital Journey",
      description: "Began exploring digital marketing and SEO fundamentals",
    },
    {
      year: "2016",
      title: "Specialized in SEO",
      description: "Focused expertise on technical SEO and search optimization",
    },
    {
      year: "2019",
      title: "GEO Pioneer",
      description: "Started exploring Generative Engine Optimization strategies",
    },
    {
      year: "2024",
      title: "AI Search Expert",
      description: "Leading authority in AI-powered search optimization",
    },
  ];

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "About", item: "/about" }
  ];

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      getPersonSchema(),
      getBreadcrumbSchema(breadcrumbs)
    ]
  };

  return (
    <Layout>
      <SEO 
        title="About Utsa Das | SEO & GEO Strategist"
        description="Learn more about Utsa Das, an expert SEO Strategist and GEO Architect with over 10 years of experience in digital growth and search optimization."
        canonical="/about"
        schemaMarkup={combinedSchema}
      />
      {/* Hero Section */}
      <Hero
        headline="About Utsa Das"
        subheadline="Digital Strategist & SEO Expert"
        ctaText="Get in Touch"
        ctaHref="/contact"
        secondaryCtaText="View Services"
        secondaryCtaHref="/services"
        trustIndicators={[
          "10+ Years Experience",
          "50+ Projects Completed",
          "98% Client Satisfaction",
        ]}
      />

      {/* Story Section */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="container max-w-4xl">
          <SectionHeader
            subtitle="My Story"
            title="From Curiosity to Expertise"
            description="How I became a leading voice in SEO and GEO optimization"
          />

          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 text-foreground/70"
            >
              <p>
                My journey into digital marketing began with a simple curiosity about
                how search engines work. What started as a hobby evolved into a
                professional passion for understanding and optimizing the digital
                landscape.
              </p>
              <p>
                Over the years, I have helped dozens of businesses improve their online
                visibility, increase organic traffic, and achieve sustainable growth. My
                approach combines technical expertise with strategic thinking, ensuring
                that every optimization serves a larger business goal.
              </p>
              <p>
                Today, I am focused on the intersection of SEO, Generative Engine
                Optimization (GEO), and AI-powered search optimization—helping brands
                stay ahead in an increasingly AI-driven search landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-8"
            >
              <h3 className="font-bold text-lg mb-6 text-foreground">Core Values</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Transparency</p>
                    <p className="text-sm text-foreground/60">
                      Clear communication and honest reporting
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Innovation</p>
                    <p className="text-sm text-foreground/60">
                      Always exploring new strategies and tools
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Results-Driven</p>
                    <p className="text-sm text-foreground/60">
                      Focused on measurable business outcomes
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="container max-w-4xl">
          <SectionHeader
            subtitle="Career Timeline"
            title="Key Milestones"
            description="My journey in digital marketing and SEO"
          />

          <div className="mt-12 space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 md:gap-12"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm flex-shrink-0">
                    {item.year.slice(-2)}
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-1 h-20 bg-gradient-to-b from-accent to-transparent mt-4" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-sm font-semibold text-accent mb-1">{item.year}</p>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-foreground/60">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="container max-w-4xl">
          <SectionHeader
            subtitle="Expertise"
            title="What I Specialize In"
            description="Core competencies and areas of focus"
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-accent transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-medium text-foreground">{item}</span>
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
              Ready to Grow?
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Let's discuss how I can help your business achieve better visibility and
              sustainable growth through strategic SEO and GEO optimization.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Get in Touch
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

export default About;
