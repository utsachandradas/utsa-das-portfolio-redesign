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
    q: "What does the first step look like when working with Utsa Das?",
    a: "It starts with a conversation on WhatsApp or by email. Utsa Das will ask about your brand, your current channels, your goals, and where growth is stalling. From there, he recommends a focused strategy session so both sides have a clear picture of the highest-impact growth levers to pull first.",
  },
  {
    q: "What growth marketing services does Utsa Das provide?",
    a: "Utsa Chandra Das provides four integrated growth marketing services: paid advertising (Meta Ads, Google Ads, TikTok Ads), SEO and GEO optimization for traditional and AI search engines, e-commerce and web development (Shopify, WordPress, WooCommerce), and full-funnel growth strategy and analytics. These work as one unified system — not isolated tactics.",
  },
  {
    q: "How long does it take to see results from growth marketing?",
    a: "It depends on the channel. Paid advertising campaigns can show results within days. Technical SEO and CRO improvements often show meaningful movement within 4–8 weeks. Content and GEO optimization compounds over months. Most clients see substantial multi-channel results within 3–6 months of consistent system-level execution.",
  },
  {
    q: "What is GEO and why does it matter for my brand?",
    a: "Generative Engine Optimization (GEO) is the practice of structuring your content and brand entities so AI systems like ChatGPT, Perplexity, and Google AI Overviews cite your brand when answering relevant questions. As more people use AI tools to research and buy, brands not optimized for GEO are invisible to a fast-growing audience segment. Utsa Das builds content frameworks engineered specifically for AI citation.",
  },
  {
    q: "Does Utsa Das work with clients outside Bangladesh?",
    a: "Yes. Utsa Chandra Das works with e-commerce and B2B brands globally. Most collaboration happens remotely via WhatsApp and email. The growth systems he builds — paid acquisition, SEO, GEO, CRO — apply to any digital brand regardless of geography, while his Bangladesh market expertise adds additional depth for brands operating locally.",
  },
  {
    q: "How is working with Utsa Das different from hiring a marketing agency?",
    a: "With an agency, your work gets distributed across account managers, junior specialists, and handoffs you never see. With Utsa Das, you work directly with the person doing the strategy and execution. No diluted output, no account manager middlemen. Faster communication, more consistent thinking, and strategies validated through his own live e-commerce operations — not theory.",
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
      toast.success("Message sent! Utsa will get back to you within 24 hours.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact Utsa Das | Growth Marketing Strategy Consultation | Bangladesh</title>
        <meta
          name="description"
          content="Get in touch with Utsa Das (Utsa Chandra Das) for growth marketing consulting — paid ads, SEO, GEO, and conversion optimization. Available via WhatsApp or email for brands in Bangladesh and globally. Founder-led, no agency overhead."
        />
        <link rel="canonical" href="https://utsadas.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Utsa Das | Growth Marketing Strategist" />
        <meta property="og:title" content="Contact Utsa Das | Growth Marketing Strategy Consultation" />
        <meta property="og:description" content="Get in touch with Utsa Das for growth marketing consulting — paid ads, SEO, GEO, and conversion optimization. Available via WhatsApp or email. Founder-led, no agency overhead." />
        <meta property="og:url" content="https://utsadas.com/contact" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://utsadas.com/opengraph.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@utsadas" />
        <meta name="twitter:title" content="Contact Utsa Das | Growth Marketing Consultation" />
        <meta name="twitter:description" content="Reach Utsa Das via WhatsApp or email for paid ads, SEO, GEO, and CRO consulting. Founder-led, no agency overhead." />
        <meta name="twitter:image" content="https://utsadas.com/opengraph.jpg" />
        <meta name="keywords" content="contact Utsa Das, Utsa Chandra Das contact, growth marketing consultation Bangladesh, hire growth strategist Bangladesh" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": { "@type": "Answer", "text": faq.a }
          }))
        })}</script>
      </Helmet>

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Let's Build Scalable Growth</h1>
            <p className="text-xl text-muted-foreground font-light max-w-xl mx-auto">
              Whether you have a specific project in mind or want to explore how Utsa Das can build a unified growth system for your brand — reach out directly.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <div className="grid sm:grid-cols-3 gap-5 mb-16">
            {[
              {
                Icon: SiWhatsapp,
                title: "WhatsApp",
                desc: "The fastest way to reach Utsa Das. Most client conversations start here.",
                link: WHATSAPP_LINK,
                label: "Chat now",
                color: "text-[#25D366]",
              },
              {
                Icon: Mail,
                title: "Email",
                desc: "Good for detailed project briefs or formal growth marketing inquiries.",
                link: "mailto:hello@utsadas.com",
                label: "hello@utsadas.com",
                color: "text-primary",
              },
              {
                Icon: MapPin,
                title: "Location",
                desc: "Based in Bangladesh. Available globally for remote growth strategy work.",
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
            <h2 className="text-2xl font-bold mb-3">WhatsApp is the fastest way to start</h2>
            <p className="text-muted-foreground text-sm max-w-md mx-auto mb-6">
              Most growth strategy conversations start with a quick WhatsApp message. Utsa Das responds fast — and we can move from conversation to action without lengthy email back-and-forth.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all shadow-lg shadow-[#25D366]/20 hover:opacity-90"
              style={{ background: "#25D366" }}
            >
              <SiWhatsapp className="w-5 h-5" />
              Start a WhatsApp Chat with Utsa
            </a>
          </motion.div>

          {/* Contact Form */}
          <div className="grid md:grid-cols-2 gap-10 mb-20" id="contact-form">
            <div>
              <h2 className="text-3xl font-bold mb-4 tracking-tight">Send a Message</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Have a detailed brief or prefer email? Fill out the form and Utsa Das will reply within 24 hours with honest initial thoughts and recommended next steps.
              </p>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Tell Utsa about your brand, your growth channels, and where you're stuck</span>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>He'll respond with honest initial thoughts and a recommended approach</span>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>No sales pitch — just a direct conversation about what your brand needs</span>
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
                <Input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="e.g. Growth marketing strategy for e-commerce brand" required className="bg-secondary border-border" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell Utsa about your brand, your current marketing channels, revenue goals, and where growth is stalling..." required rows={5} className="bg-secondary border-border resize-none" />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </motion.form>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-bold mb-3 tracking-tight text-center">Common Questions</h2>
            <p className="text-muted-foreground text-center mb-10 text-sm">Straight answers to what most people ask before working with Utsa Das.</p>
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
