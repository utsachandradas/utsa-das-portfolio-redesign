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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close on route change */
  useEffect(() => { setIsOpen(false); }, [location]);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isOpen
            ? "bg-[oklch(0.09_0.018_258_/_0.96)] backdrop-blur-xl border-b border-border/60 shadow-sm shadow-primary/5"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-18">

          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group" data-testid="nav-logo">
              <span className="font-bold text-lg md:text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">
                Utsa Das
              </span>
              <span
                className="text-[9px] md:text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full border"
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

          {/* Right side: CTA + hamburger */}
          <div className="flex items-center gap-2 md:gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              data-testid="nav-whatsapp-btn"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all shadow-md shadow-primary/25"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden md:inline">Let's Chat</span>
            </a>

            {/* Hamburger — visible below lg */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl text-foreground hover:bg-white/8 transition-colors border border-white/8"
              data-testid="nav-mobile-toggle"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer — full screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden flex flex-col"
            style={{
              background: "oklch(0.09 0.018 258 / 0.98)",
              WebkitBackdropFilter: "blur(20px)",
              backdropFilter: "blur(20px)",
              top: "4rem",
            }}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="border-t border-border/50" />
            <nav className="flex-1 overflow-y-auto px-4 pt-4 pb-8 flex flex-col gap-1">
              {navItems.map((item, index) => {
                const active = location === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <Link href={item.href}>
                      <div
                        className={`flex items-center px-4 py-4 rounded-xl text-base font-medium transition-colors cursor-pointer ${
                          active
                            ? "bg-primary/10 text-primary border border-primary/20"
                            : "text-foreground hover:bg-white/6"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                        {active && (
                          <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                        )}
                      </div>
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navItems.length * 0.04 + 0.05 }}
                className="pt-4 mt-2 border-t border-border/40"
              >
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-base shadow-lg shadow-primary/25 hover:bg-primary/90 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar height spacer */}
      <div className="h-16 md:h-18" />
    </>
  );
};

export default Navbar;
