import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import Hero from "@/components/Hero";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Code2, Zap, Brain, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { getBreadcrumbSchema } from "@/lib/schema";

const Skills = () => {
  const skillCategories = [
    {
      icon: Zap,
      title: "Technical SEO",
      skills: [
        "Core Web Vitals Optimization",
        "Site Architecture & Structure",
        "XML Sitemaps & Robots.txt",
        "Schema Markup & Structured Data",
        "Mobile-First Indexing",
        "Page Speed Optimization",
        "Crawl Budget Management",
        "Technical Audits",
      ],
    },
    {
      icon: Brain,
      title: "GEO & AI Search",
      skills: [
        "ChatGPT Optimization",
        "Gemini Visibility",
        "Perplexity Ranking",
        "AI Search Strategy",
        "Generative Engine Optimization",
        "AI Content Optimization",
        "LLM-Friendly Content",
        "AI Search Analytics",
      ],
    },
    {
      icon: BarChart3,
      title: "Content & Strategy",
      skills: [
        "Keyword Research & Analysis",
        "Content Strategy",
        "SEO Copywriting",
        "Content Calendar Management",
        "Topic Clustering",
        "Competitive Analysis",
        "User Intent Mapping",
        "Content Gap Analysis",
      ],
    },
    {
      icon: Code2,
      title: "Development & Tools",
      skills: [
        "Next.js & React",
        "TypeScript",
        "Tailwind CSS",
        "SEO Implementation",
        "Web Performance",
        "API Integration",
        "Database Design",
        "DevOps & Deployment",
      ],
    },
  ];

  const tools = [
    {
      category: "SEO & Analytics",
      items: [
        "SEMrush",
        "Ahrefs",
        "Moz",
        "Google Search Console",
        "Google Analytics 4",
        "Screaming Frog",
        "Lighthouse",
        "GTmetrix",
      ],
    },
    {
      category: "AI & GEO Tools",
      items: [
        "ChatGPT",
        "Gemini",
        "Perplexity",
        "Claude",
        "Copilot",
        "Custom AI Models",
        "LLM APIs",
        "AI Testing Tools",
      ],
    },
    {
      category: "Content & Collaboration",
      items: [
        "Notion",
        "Airtable",
        "Slack",
        "Figma",
        "Google Workspace",
        "Zapier",
        "Make",
        "GitHub",
      ],
    },
    {
      category: "Development Stack",
      items: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "PostgreSQL",
        "Vercel",
        "Docker",
      ],
    },
  ];

  const certifications = [
    {
      title: "Google Analytics Certification",
      issuer: "Google",
      year: "2023",
    },
    {
      title: "Google Search Central Certification",
      issuer: "Google",
      year: "2023",
    },
    {
      title: "Advanced SEO Certification",
      issuer: "Moz Academy",
      year: "2022",
    },
    {
      title: "Technical SEO Specialist",
      issuer: "SEMrush Academy",
      year: "2022",
    },
  ];

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Skills", item: "/skills" }
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
        title="SEO & GEO Expertise | Utsa Das"
        description="Deep dive into the technical SEO, GEO, and digital growth skills of Utsa Das. Expert in AI search optimization, content strategy, and modern web development."
        canonical="/skills"
        schemaMarkup={combinedSchema}
      />
      <Hero
        headline="Skills & Expertise"
        subheadline="Technical Mastery & Strategic Knowledge"
        ctaText="Work Together"
        ctaHref="/contact"
        secondaryCtaText="View Services"
        secondaryCtaHref="/services"
      />

      <section className="py-20 md:py-32 border-b border-border">
        <div className="container">
          <SectionHeader
            subtitle="Expertise Areas"
            title="Core Competencies"
            description="Deep expertise across technical SEO, GEO optimization, content strategy, and modern development"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-accent transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg mb-4 text-foreground">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        <span className="text-foreground/70">{skill}</span>
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
        <div className="container">
          <SectionHeader
            subtitle="Tools & Technologies"
            title="What I Use"
            description="Industry-leading platforms and tools for optimal results"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {tools.map((toolGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <h3 className="font-bold text-lg mb-4 text-foreground">
                  {toolGroup.category}
                </h3>
                <ul className="space-y-2">
                  {toolGroup.items.map((tool, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-foreground/70">{tool}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 border-b border-border">
        <div className="container max-w-4xl">
          <SectionHeader
            subtitle="Credentials"
            title="Certifications"
            description="Industry-recognized certifications and continuous learning"
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{cert.title}</h3>
                    <p className="text-sm text-foreground/60 mb-2">{cert.issuer}</p>
                  </div>
                  <span className="text-xs font-semibold text-accent">{cert.year}</span>
                </div>
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
              Ready to Leverage This Expertise?
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Let's discuss how my skills and experience can help your business achieve
              exceptional results.
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
                  View Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
