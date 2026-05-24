import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface ScrollContextType {
  scrollY: number;
  isScrolled: boolean;
  showScrollToTop: boolean;
  showWhatsAppFAB: boolean;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolled = scrollY > 10;
  const showScrollToTop = scrollY > 400;
  const showWhatsAppFAB = scrollY > 200;

  return (
    <ScrollContext.Provider value={{ scrollY, isScrolled, showScrollToTop, showWhatsAppFAB }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within ScrollProvider");
  }
  return context;
}
