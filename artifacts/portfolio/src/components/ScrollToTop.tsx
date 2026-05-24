import { m, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useScroll } from "@/contexts/ScrollContext";

export default function ScrollToTop() {
  const { showScrollToTop } = useScroll();

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {showScrollToTop && (
        <m.button
          onClick={scrollUp}
          aria-label="Scroll to top"
          className="fixed bottom-24 right-4 z-50 sm:hidden w-11 h-11 rounded-full glass-panel border border-white/15 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors shadow-lg"
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.85 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          whileTap={{ scale: 0.9 }}
          style={{ willChange: "transform, opacity" }}
        >
          <ArrowUp className="w-4 h-4" />
        </m.button>
      )}
    </AnimatePresence>
  );
}
