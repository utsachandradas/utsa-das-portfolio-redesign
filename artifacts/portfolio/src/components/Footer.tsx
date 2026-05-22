import { Link } from "wouter";
import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/8801861393416?text=Hi%20Utsa%2C%20I%27d%20like%20to%20discuss%20a%20project";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(var(--primary),0.05)_0,transparent_70%)] pointer-events-none" />
      <div className="container relative z-10 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-primary-foreground font-bold tracking-tight">UD</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground">Utsa Das</span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Utsa Das is a Bangladesh-based founder, SEO strategist, and GEO strategist specializing in AI search optimization, technical SEO, ecommerce growth, and modern digital visibility systems. He helps brands improve organic search performance and build AI-ready content systems for the future of search.
            </p>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h3 className="font-bold text-foreground tracking-wide uppercase text-sm">Navigation</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Projects', 'Skills'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>
                    <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-3 space-y-4">
            <h3 className="font-bold text-foreground tracking-wide uppercase text-sm">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/utsachandradasutsa" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/utsa-das-3473a53a7" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Utsa Das. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;