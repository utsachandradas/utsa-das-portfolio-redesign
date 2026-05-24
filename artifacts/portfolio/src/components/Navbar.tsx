import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll } from "@/contexts/ScrollContext";

const WHATSAPP_LINK = "https://wa.me/8801861393416?text=Hi%20Utsa%2C%20I%27d%20like%20to%20discuss%20a%20project";

const navItems = [
  { label: "Home",         href: "/" },
  { label: "About",        href: "/about" },
  { label: "Services",     href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog",         href: "/blog" },
  { label: "Contact",      href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { isScrolled } = useScroll();

  useEffect(() => { setIsOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isOpen
            ? "bg-[oklch(0.09_0.018_258_/_0.97)] backdrop-blur-xl border-b border-border/60"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ willChange: isScrolled || isOpen ? "background-color, border-color" : "auto" }}
      >
        <div className="h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 max-w-full">

          {/* Logo — "Utsa Das" text brand */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group flex-shrink-0" data-testid="nav-logo">
              {/* Wordmark */}
              <div className="flex flex-col leading-none">
                <span
                  className="font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200"
                  style={{
                    fontSize: "clamp(0.95rem, 2.5vw, 1.5rem)",
                    fontFamily: "'Space Grotesk', system-ui, -apple-system, sans-serif",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  Utsa Das
                </span>
                <span
                  className="font-medium tracking-widest uppercase hidden sm:block"
                  style={{
                    fontSize: "0.45rem",
                    color: "oklch(0.68 0.22 272)",
                    letterSpacing: "0.2em",
                    lineHeight: 1.4,
                    marginTop: "0.2rem",
                  }}
                >
                  Founder · Strategist
                </span>
              </div>

              {/* Separator dot accent */}
              <div
                className="hidden sm:block w-1 h-1 rounded-full opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0"
                style={{ background: "oklch(0.70 0.24 272)" }}
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center px-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    isActive(item.href)
                      ? "text-primary bg-primary/8"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/6"
                  }`}
                  data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Right: CTA + hamburger */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              data-testid="nav-whatsapp-btn"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-lg bg-primary text-primary-foreground text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-all shadow-md shadow-primary/20 flex-shrink-0"
            >
              <MessageCircle className="w-4 h-4 flex-shrink-0" />
              <span className="hidden md:inline">Let's Chat</span>
            </a>

            <button
              onClick={() => setIsOpen(v => !v)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl text-foreground hover:bg-white/8 transition-colors border border-white/10 flex-shrink-0"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              data-testid="nav-mobile-toggle"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen
                  ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X size={20} /></motion.span>
                  : <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Menu size={20} /></motion.span>
                }
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-x-0 bottom-0 z-40 lg:hidden flex flex-col"
            style={{
              top: "64px",
              background: "oklch(0.09 0.018 258 / 0.98)",
              WebkitBackdropFilter: "blur(24px)",
              backdropFilter: "blur(24px)",
              willChange: "transform",
            }}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
          >
            <div className="border-t border-white/8" />
            <nav className="flex-1 overflow-y-auto">
              <div className="px-4 py-3 space-y-1">
                {navItems.map((item, i) => {
                  const active = isActive(item.href);
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link href={item.href}>
                        <div
                          className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors cursor-pointer touch-target ${
                            active
                              ? "bg-primary/10 text-primary border border-primary/20"
                              : "text-foreground/90 hover:bg-white/6 hover:text-foreground"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                          {active && <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />}
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="px-4 pb-6 pt-2 border-t border-white/8 mt-2">
                <motion.a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: navItems.length * 0.04 + 0.05 }}
                  className="flex items-center justify-center gap-3 w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-base shadow-lg shadow-primary/25 hover:bg-primary/90 transition-colors touch-target"
                >
                  <MessageCircle className="w-5 h-5 flex-shrink-0" />
                  Chat on WhatsApp
                </motion.a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;
