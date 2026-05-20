import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-['Space_Grotesk']">
              About Utsa Das
            </h1>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              A digital strategist passionate about helping businesses achieve visibility and growth through modern SEO, GEO, and AI search optimization techniques.
            </p>
          </motion.div>
        </div>
      </section>

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
                My journey into digital marketing began with a simple curiosity about how search engines work. What started as a hobby evolved into a professional passion for understanding and optimizing the digital landscape.
              </p>
              <p>
                Over the years, I have helped dozens of businesses improve their online visibility, increase organic traffic, and achieve sustainable growth. My approach combines technical expertise with strategic thinking, ensuring that every optimization serves a larger business goal.
              </p>
              <p>
                Today, I am focused on the intersection of SEO, Generative Engine Optimization (GEO), and AI-powered search optimization—helping brands stay ahead in an increasingly AI-driven search landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-8"
            >
              <h3 className="font-bold text-lg mb-6">Core Values</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Transparency</p>
                    <p className="text-sm text-foreground/60">Clear communication and honest reporting</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Innovation</p>
                    <p className="text-sm text-foreground/60">Always exploring new strategies and tools</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Results-Driven</p>
                    <p className="text-sm text-foreground/60">Focused on measurable business outcomes</p>
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
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {item.year.slice(-2)}
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-1 h-20 bg-gradient-to-b from-accent to-transparent mt-4" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-sm font-semibold text-accent mb-1">{item.year}</p>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
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
                <span className="font-medium">{item}</span>
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
            <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk']">Ready to Grow?</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Let us discuss how I can help your business achieve better visibility and sustainable growth through strategic SEO and GEO optimization.
            </p>
            <button className="inline-block px-8 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-colors">
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

