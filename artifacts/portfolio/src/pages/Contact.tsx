import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Mail, MessageSquare, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { SiWhatsapp } from "react-icons/si";

const WHATSAPP_LINK = "https://wa.me/8801861393416?text=Hi%20Utsa%2C%20I%27d%20like%20to%20discuss%20a%20project";

const faqs = [
  {
    q: "What does the first step look like?",
    a: "It starts with a conversation on WhatsApp or by email. I'll ask about your website, your goals, and where you're struggling. From there, I usually recommend starting with a focused audit so we both have a clear picture of what's actually holding you back.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "Honestly, it depends on where you're starting from. Technical fixes and crawl improvements can show results within weeks. Content and authority-building compounds over months. Most clients see meaningful movement within 3–4 months, and substantial results within 6–12 months.",
  },
  {
    q: "What is GEO and do I need it?",
    a: "Generative Engine Optimization (GEO) is about making your brand the source AI systems like ChatGPT, Perplexity, and Google AI Overviews cite when answering questions in your industry. If your audience uses AI tools to research, buy, or decide — yes, GEO matters for you.",
  },
  {
    q: "Do you work with clients outside Bangladesh?",
    a: "Yes. I work with brands globally. Most client communication happens over WhatsApp or email, and the work I do — technical SEO, content strategy, GEO optimization — applies to any website regardless of geography.",
  },
  {
    q: "Do you offer ongoing support or just one-off projects?",
    a: "Both. Some clients need a one-time audit or strategy session. Others prefer a monthly retainer where I handle ongoing optimization, content planning, and performance tracking. I'm flexible depending on what stage your brand is at.",
  },
  {
    q: "How is working with you different from hiring an agency?",
    a: "With an agency, your work gets distributed across account managers, juniors, and specialists you never talk to. With me, you work directly with the person doing the strategy and implementation. That means faster communication, more consistent thinking, and no diluted output.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Message sent! I'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact Utsa Das | SEO & GEO Strategy Consultation</title>
        <meta name="description" content="Get in touch with Utsa Das for SEO and GEO consulting. Available via WhatsApp or email for brands in Bangladesh and globally. Founder-led strategy — no agency overhead." />
      </Helmet>

      {/* Hero */}
      <section className="py-24 pt-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(var(--primary),0.05)_0,transparent_50%)] pointer-events-none" />
        <div className="container max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-panel text-primary text-xs font-semibold border border-primary/25 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Usually responds within a few hours
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Get in Touch</h1>
            <p className="text-xl text-muted-foreground font-light max-w-xl mx-auto">
              Whether you have a specific project in mind or just want to ask a question — I'm available and responsive.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <div className="grid sm:grid-cols-3 gap-5 mb-16">
            {[
              {
                Icon: SiWhatsapp,
                title: "WhatsApp",
                desc: "The fastest way to reach me. Most clients start here.",
                link: WHATSAPP_LINK,
                label: "Chat now",
                color: "text-[#25D366]",
              },
              {
                Icon: Mail,
                title: "Email",
                desc: "Good for detailed project briefs or formal inquiries.",
                link: "mailto:hello@utsadas.com",
                label: "hello@utsadas.com",
                color: "text-primary",
              },
              {
                Icon: MapPin,
                title: "Location",
                desc: "Based in Bangladesh. Available globally for remote work.",
                link: null,
                label: "Dhaka, Bangladesh",
                color: "text-muted-foreground",
              },
            ].map(({ Icon, title, desc, link, label, color }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-primary/25 transition-all"
              >
                <Icon className={`w-6 h-6 mb-4 ${color}`} />
                <h3 className="font-bold text-foreground mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{desc}</p>
                {link ? (
                  <a href={link} target="_blank" rel="noreferrer" className={`text-sm font-semibold ${color} hover:underline`}>
                    {label}
                  </a>
                ) : (
                  <span className="text-sm font-semibold text-muted-foreground">{label}</span>
                )}
              </motion.div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-2xl p-7 md:p-10 border border-[#25D366]/20 bg-[#25D366]/3 mb-16 text-center"
          >
            <SiWhatsapp className="w-8 h-8 text-[#25D366] mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-3">WhatsApp is the fastest way</h2>
            <p className="text-muted-foreground text-sm max-w-md mx-auto mb-6">
              Most project conversations start with a quick WhatsApp message. I respond fast and we can move from conversation to strategy without the back-and-forth of email threads.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all shadow-lg shadow-[#25D366]/20 hover:opacity-90"
              style={{ background: "#25D366" }}
            >
              <SiWhatsapp className="w-5 h-5" />
              Start a WhatsApp Chat
            </a>
          </motion.div>

          {/* Contact Form */}
          <div className="grid md:grid-cols-2 gap-10 mb-20" id="contact-form">
            <div>
              <h2 className="text-3xl font-bold mb-4 tracking-tight">Send a Message</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Prefer email or have a detailed brief to share? Fill out the form and I'll reply within 24 hours.
              </p>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Tell me about your website, your goals, and what's not working</span>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>I'll respond with honest initial thoughts and next steps</span>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>No sales pitch — just a straight conversation about what you need</span>
                </div>
              </div>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-5 bg-card border border-border rounded-2xl p-5 sm:p-8"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required className="bg-secondary border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required className="bg-secondary border-border" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <Input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="e.g. Technical SEO audit for ecommerce site" required className="bg-secondary border-border" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your site, what you're trying to achieve, and where things are going wrong..." required rows={5} className="bg-secondary border-border resize-none" />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </motion.form>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-bold mb-3 tracking-tight text-center">Common Questions</h2>
            <p className="text-muted-foreground text-center mb-10 text-sm">Straight answers to what most people ask before reaching out.</p>
            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="glass-panel rounded-xl border border-white/5 overflow-hidden hover:border-primary/20 transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left font-semibold hover:text-primary transition-colors text-sm"
                  >
                    <span className="pr-4">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/30 pt-4">
                      {faq.a}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
