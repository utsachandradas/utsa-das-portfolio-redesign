import { Link } from "wouter";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "mailto:hello@utsadas.com", label: "Email" },
  ];

  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">UD</span>
              </div>
              <span className="font-bold">Utsa Das</span>
            </div>
            <p className="text-sm text-foreground/60">
              SEO Strategist, GEO Expert, and AI Search Optimization Specialist
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h3>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a className="text-sm text-foreground/60 hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-sm text-foreground/60 hover:text-accent transition-colors">
                Technical SEO
              </a>
              <a href="#" className="text-sm text-foreground/60 hover:text-accent transition-colors">
                GEO Optimization
              </a>
              <a href="#" className="text-sm text-foreground/60 hover:text-accent transition-colors">
                AI Search Optimization
              </a>
              <a href="#" className="text-sm text-foreground/60 hover:text-accent transition-colors">
                SEO Audits
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, color: "#06B6D4" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-foreground/60 hover:border-accent transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-foreground/60">
              © {currentYear} Utsa Das. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-foreground/60 hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

