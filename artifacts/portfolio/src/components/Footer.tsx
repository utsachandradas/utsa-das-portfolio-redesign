import { Link } from "wouter";
import { Linkedin } from "lucide-react";
import { SiWhatsapp, SiFacebook } from "@/components/BrandIcons";

const WHATSAPP_LINK = "https://wa.me/8801861393416?text=Hi%20Utsa%2C%20I%27d%20like%20to%20discuss%20a%20project";
const FACEBOOK_URL  = "https://www.facebook.com/utsachandradasutsa";
const LINKEDIN_URL  = "https://www.linkedin.com/in/utsa-das-3473a53a7";

const navLinks = [
  { label: "Home",         href: "/" },
  { label: "About",        href: "/about" },
  { label: "Services",     href: "/services" },
  { label: "Projects",     href: "/projects" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights",     href: "/insights" },
  { label: "Contact",      href: "/contact" },
];

const specializations = [
  "Performance Marketing",
  "Meta, Google & TikTok Ads",
  "SEO & GEO Optimization",
  "AI Search Visibility",
  "E-Commerce Development",
  "Shopify & WooCommerce",
  "Growth Strategy & Analytics",
  "Conversion Rate Optimization",
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.70_0.24_272_/_0.04)_0,transparent_70%)] pointer-events-none" />

      <div className="container relative z-10 py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-10 mb-14">

          {/* Brand column */}
          <div className="md:col-span-5 space-y-5">
            <div>
              <span className="font-bold text-2xl tracking-tight text-foreground">Utsa Das</span>
              <div
                className="inline-block ml-3 text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full border"
                style={{
                  color: "oklch(0.70 0.24 272)",
                  borderColor: "oklch(0.70 0.24 272 / 0.3)",
                  background: "oklch(0.70 0.24 272 / 0.08)",
                }}
              >
                Founder · Strategist
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed text-sm max-w-sm">
              Founder & Growth Marketing Strategist based in Bangladesh, specializing in building scalable and sustainable digital growth systems for e-commerce and B2B brands. Since 2022, combining performance marketing, SEO systems, and web infrastructure into a unified growth engine focused on predictable revenue growth.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-muted-foreground hover:text-[#25D366] hover:border-[#25D366]/30 transition-all"
              >
                <SiWhatsapp className="w-5 h-5" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-muted-foreground hover:text-[#1877F2] hover:border-[#1877F2]/30 transition-all"
              >
                <SiFacebook className="w-5 h-5" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-muted-foreground hover:text-[#0A66C2] hover:border-[#0A66C2]/30 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="font-bold text-foreground tracking-wide uppercase text-xs">Pages</h3>
            <ul className="space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-bold text-foreground tracking-wide uppercase text-xs">Specializations</h3>
            <ul className="space-y-2.5">
              {specializations.map((s) => (
                <li key={s}>
                  <span className="text-muted-foreground text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SEO paragraph */}
        <div className="border-t border-border/40 pt-8 mb-6">
          <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
            Utsa Das is a Founder & Growth Marketing Strategist based in Bangladesh building scalable digital growth systems for e-commerce and B2B brands. He designs integrated systems where paid ads (Meta, Google, TikTok), organic search (SEO/GEO), and conversion optimization work together to drive predictable revenue growth. Available for international projects via WhatsApp.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {year} Utsa Das. All rights reserved.</p>
          <p>Bangladesh · Founder & Growth Marketing Strategist</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
