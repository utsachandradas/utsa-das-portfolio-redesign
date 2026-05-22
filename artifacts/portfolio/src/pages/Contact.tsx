import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import Hero from "@/components/Hero";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Calendar, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { getBreadcrumbSchema, getOrganizationSchema } from "@/lib/schema";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Send me an email and I'll get back to you within 24 hours",
      contact: "utsa@example.com",
      href: "mailto:utsa@example.com",
    },
    {
      icon: Phone,
      title: "WhatsApp",
      description: "Quick chat on WhatsApp for immediate questions",
      contact: "+1 (555) 123-4567",
      href: "https://wa.me/15551234567",
    },
    {
      icon: Calendar,
      title: "Schedule Call",
      description: "Book a consultation call at your convenience",
      contact: "Calendar Link",
      href: "https://calendly.com",
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Based in the United States, available globally",
      contact: "Remote",
      href: "#",
    },
  ];

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer:
        "Most projects take 3-6 months to show significant results, depending on the scope and current state of your website. I provide a detailed timeline during our initial consultation.",
    },
    {
      question: "How do you measure SEO success?",
      answer:
        "I track multiple metrics including organic traffic, keyword rankings, conversion rates, and ROI. Regular reporting ensures you always know the impact of our work.",
    },
    {
      question: "Do you offer ongoing support?",
      answer:
        "Yes, I offer both project-based and ongoing monthly retainer services. Most clients benefit from continuous optimization and monitoring.",
    },
    {
      question: "What's your approach to GEO optimization?",
      answer:
        "I optimize your content to appear in AI search engines like ChatGPT, Gemini, and Perplexity. This includes content structure, E-E-A-T signals, and AI-friendly formatting.",
    },
    {
      question: "Can you work with my existing team?",
      answer:
        "Absolutely! I collaborate with developers, designers, and marketing teams. Clear communication and documentation ensure seamless integration.",
    },
    {
      question: "How do you stay updated with SEO changes?",
      answer:
        "I continuously monitor algorithm updates, attend industry conferences, and test new strategies. This ensures my clients always benefit from the latest best practices.",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Contact", item: "/contact" }
  ];

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationSchema(),
      getBreadcrumbSchema(breadcrumbs)
    ]
  };

  return (
    <Layout>
      <SEO 
        title="Contact Utsa Das | SEO Consultation"
        description="Get in touch with Utsa Das for professional SEO and GEO consulting. Schedule a consultation to discuss your digital growth strategy."
        canonical="/contact"
        schemaMarkup={combinedSchema}
      />
      {/* Hero Section */}
      <Hero
        headline="Let's Work Together"
        subheadline="Get in Touch"
        ctaText="Send Message"
        ctaHref="#contact-form"
        secondaryCtaText="View Services"
        secondaryCtaHref="/services"
      />

      {/* Contact Methods */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="container">
          <SectionHeader
            subtitle="Get in Touch"
            title="Contact Methods"
            description="Choose the best way to reach out"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-card border border-border rounded-xl p-6 hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold mb-2 text-foreground">{method.title}</h3>
                  <p className="text-sm text-foreground/60 mb-4">{method.description}</p>
                  <p className="text-sm font-semibold text-accent">{method.contact}</p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 md:py-32 border-b border-border" id="contact-form">
        <div className="container max-w-2xl">
          <SectionHeader
            subtitle="Send a Message"
            title="Let's Discuss Your Project"
            description="Fill out the form below and I'll get back to you within 24 hours"
          />

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 space-y-6 bg-card border border-border rounded-xl p-5 sm:p-8"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-secondary border-border text-foreground placeholder:text-foreground/40"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="bg-secondary border-border text-foreground placeholder:text-foreground/40"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Subject
              </label>
              <Input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                required
                className="bg-secondary border-border text-foreground placeholder:text-foreground/40"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                rows={6}
                className="bg-secondary border-border text-foreground placeholder:text-foreground/40 resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32">
        <div className="container max-w-3xl">
          <SectionHeader
            subtitle="Common Questions"
            title="FAQ"
            description="Answers to frequently asked questions"
          />

          <div className="space-y-4 mt-12">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <h3 className="font-bold text-foreground mb-3">{faq.question}</h3>
                <p className="text-foreground/60 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
