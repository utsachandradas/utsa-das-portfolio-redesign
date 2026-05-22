import { Link } from "wouter";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Premium Footer Component
 * Design: Dark minimal with asymmetric multi-column layout
 * - Brand section with mission statement
 * - Navigation links
 * - Social links with hover animations
 * - Copyright and legal links
 */

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Projects", href: "/projects" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Technical SEO", href: "/services" },
        { label: "GEO Optimization", href: "/services" },
        { label: "AI Search", href: "/services" },
        { label: "Consulting", href: "/services" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Mail, href: "mailto:utsa@example.com", label: "Email" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-16 md:py-24">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-12 gap-12 mb-12">
          {/* Brand Section - Spans 4 columns */}
          <motion.div
            className="md:col-span-4 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-cyan-500 flex items-center justify-center">
                <span className="text-accent-foreground font-bold">UD</span>
              </div>
              <span className="font-semibold text-lg text-foreground">Utsa Das</span>
            </div>
            <p className="text-sm text-foreground/60 leading-relaxed">
              SEO Strategist & GEO Expert helping founders and businesses achieve visibility and sustainable growth through modern search optimization.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground flex items-center justify-center text-foreground/60 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, idx) => (
            <motion.div
              key={section.title}
              className="md:col-span-4 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (idx + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <a className="text-sm text-foreground/60 hover:text-accent transition-colors cursor-pointer">
                        {link.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-foreground/50">
            © {currentYear} Utsa Das. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-foreground/50">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

