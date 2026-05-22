import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/8801861393416?text=Hi%20Utsa%2C%20I%27d%20like%20to%20discuss%20a%20project";

const navItems = [
  { label: "Home",         href: "/" },
  { label: "About",        href: "/about" },
  { label: "Services",     href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights",     href: "/insights" },
  { label: "Contact",      href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-sm shadow-primary/5"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container flex items-center justify-between h-18 py-4">
          {/* Logo — text wordmark only */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group" data-testid="nav-logo">
              <span className="font-bold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">
                Utsa Das
              </span>
              <span
                className="hidden sm:inline text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full border"
                style={{
                  color: "oklch(0.70 0.24 272)",
                  borderColor: "oklch(0.70 0.24 272 / 0.3)",
                  background: "oklch(0.70 0.24 272 / 0.08)",
                }}
              >
                SEO · GEO
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const active = location === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all cursor-pointer ${
                      active
                        ? "text-primary bg-primary/8"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                    }`}
                    data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              data-testid="nav-whatsapp-btn"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all shadow-md shadow-primary/25 glow-primary"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden md:inline">Let's Chat</span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
              data-testid="nav-mobile-toggle"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 top-[4.5rem] lg:hidden z-40 border-t border-border/60"
            style={{ background: "oklch(0.09 0.018 258 / 0.97)", backdropFilter: "blur(20px)" }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
          >
            <div className="container py-6 flex flex-col gap-1">
              {navItems.map((item, index) => {
                const active = location === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <Link href={item.href}>
                      <span
                        className={`block px-4 py-3.5 rounded-xl text-base font-medium transition-colors cursor-pointer ${
                          active
                            ? "bg-primary/10 text-primary"
                            : "text-foreground hover:bg-secondary"
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navItems.length * 0.04 }}
                className="pt-5 mt-3 border-t border-border/50"
              >
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-base shadow-lg shadow-primary/25"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-[4.5rem]" />
    </>
  );
};

export default Navbar;
