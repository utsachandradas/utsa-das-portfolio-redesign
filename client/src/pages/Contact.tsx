import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "hello@utsadas.com",
      href: "mailto:hello@utsadas.com",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Chat with me directly",
      href: "https://wa.me/1234567890",
    },
    {
      icon: Phone,
      title: "Schedule Call",
      description: "Book a consultation",
      href: "#",
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Bangladesh",
      href: "#",
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
              Get in Touch
            </h1>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Have a question or ready to start your SEO journey? I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={index}
                  href={method.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-card border border-border rounded-lg p-6 hover:border-accent transition-all text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <h3 className="font-bold mb-2">{method.title}</h3>
                  <p className="text-sm text-foreground/60 group-hover:text-accent transition-colors">
                    {method.description}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="container max-w-2xl">
          <SectionHeader
            subtitle="Contact Form"
            title="Send Me a Message"
            description="Fill out the form below and I'll get back to you as soon as possible"
          />

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <Input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                required
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or question..."
                required
                rows={6}
                className="w-full"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent hover:bg-accent/90 text-white font-semibold"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="container max-w-3xl">
          <SectionHeader
            subtitle="FAQ"
            title="Frequently Asked Questions"
            description="Common questions about my services and process"
          />

          <div className="space-y-6 mt-12">
            {[
              {
                question: "What's your typical project timeline?",
                answer: "Most SEO projects show initial results within 3-6 months, with significant improvements visible within 6-12 months. The timeline depends on your current SEO status and competition level.",
              },
              {
                question: "Do you offer ongoing support?",
                answer: "Yes, I offer both one-time audits and ongoing optimization services. Most clients benefit from continuous monitoring and optimization to maintain and improve rankings.",
              },
              {
                question: "How do you measure success?",
                answer: "Success is measured through organic traffic growth, keyword rankings, conversion improvements, and business metrics like revenue or leads generated through organic search.",
              },
              {
                question: "What industries do you specialize in?",
                answer: "I've worked with e-commerce, SaaS, local businesses, agencies, and personal brands. My strategies are adaptable to any industry.",
              },
              {
                question: "Can you guarantee rankings?",
                answer: "No one can guarantee rankings, but I can guarantee a strategic, data-driven approach that follows Google's best practices and delivers measurable results.",
              },
              {
                question: "How do I get started?",
                answer: "Simply reach out through this form or contact me directly. We'll schedule a consultation to discuss your goals and create a custom strategy.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <h3 className="font-bold mb-2">{faq.question}</h3>
                <p className="text-foreground/60 text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32">
        <div className="container max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk']">Let's Grow Your Business</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Whether you need a comprehensive SEO audit, GEO optimization, or ongoing digital growth strategy, I'm here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-semibold"
                asChild
              >
                <a href="#contact">Schedule Consultation</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-foreground/20 hover:border-accent hover:text-accent"
                asChild
              >
                <a href="mailto:hello@utsadas.com">Send Email</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

