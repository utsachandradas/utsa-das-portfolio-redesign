import { m, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SiWhatsapp } from "@/components/BrandIcons";
import { X } from "lucide-react";
import { useScroll } from "@/contexts/ScrollContext";

const WHATSAPP_LINK =
  "https://wa.me/8801861393416?text=Hi%20Utsa%2C%20I%27d%20like%20to%20discuss%20a%20project";

export default function WhatsAppFAB() {
  const [showLabel, setShowLabel] = useState(false);
  const { showWhatsAppFAB } = useScroll();

  return (
    <AnimatePresence>
      {showWhatsAppFAB && (
        <m.div
          className="fixed bottom-6 right-4 z-50 sm:hidden flex items-center gap-2"
          initial={{ opacity: 0, y: 24, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.85 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{ willChange: "transform, opacity" }}
        >
          <AnimatePresence>
            {showLabel && (
              <m.div
                initial={{ opacity: 0, x: 12, scale: 0.92 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 12, scale: 0.92 }}
                transition={{ duration: 0.18 }}
                className="flex items-center gap-2 bg-[oklch(0.09_0.018_258_/_0.97)] border border-white/10 rounded-2xl px-4 py-3 shadow-xl"
                style={{ backdropFilter: "blur(12px)" }}
              >
                <div>
                  <p className="text-xs font-semibold text-foreground leading-tight">Chat with Utsa</p>
                  <p className="text-[10px] text-muted-foreground">Replies fast on WhatsApp</p>
                </div>
                <button
                  onClick={() => setShowLabel(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors ml-1 flex-shrink-0"
                  aria-label="Dismiss"
                >
                  <X size={14} />
                </button>
              </m.div>
            )}
          </AnimatePresence>

          <m.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/30 flex-shrink-0"
            style={{ background: "#25D366", willChange: "transform" }}
            whileTap={{ scale: 0.92 }}
            onHoverStart={() => setShowLabel(true)}
            onClick={() => setShowLabel(false)}
          >
            <SiWhatsapp className="w-7 h-7 text-white" />
          </m.a>
        </m.div>
      )}
    </AnimatePresence>
  );
}
