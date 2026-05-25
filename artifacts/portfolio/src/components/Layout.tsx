import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppFAB from "./WhatsAppFAB";
import ScrollToTop from "./ScrollToTop";
import { m } from "framer-motion";

/**
 * Layout Component
 * Design: Premium dark minimal wrapper with page transitions
 * - Fixed navbar at top
 * - Main content area with fade-in animation
 * - Footer at bottom
 */

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <m.main
        className="flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </m.main>
      <Footer />
      <WhatsAppFAB />
      <ScrollToTop />
    </div>
  );
};

export default Layout;

