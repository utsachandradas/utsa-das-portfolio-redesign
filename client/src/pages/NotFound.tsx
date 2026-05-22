import { Link } from "wouter";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * 404 Not Found Page
 * Design: Premium dark minimal with centered layout
 * - Large 404 heading
 * - Helpful message
 * - Navigation buttons
 * - Floating decorative elements
 */

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center relative overflow-hidden">
      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container relative z-10 max-w-2xl text-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="text-9xl md:text-[10rem] font-bold font-['Space_Grotesk'] bg-gradient-to-r from-accent via-cyan-500 to-accent bg-clip-text text-transparent">
            404
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4 mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Page Not Found
          </h1>
          <p className="text-lg text-foreground/60">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold group"
            >
              <Home className="mr-2 w-4 h-4" />
              Go Home
            </Button>
          </Link>
          <motion.button
            onClick={() => window.history.back()}
            className="px-8 py-3 rounded-lg border border-foreground/20 hover:border-accent hover:text-accent text-foreground font-semibold transition-all flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </motion.button>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-border"
        >
          <p className="text-sm text-foreground/60 mb-4">Quick Links:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/">
              <a className="text-sm text-accent hover:text-accent/80 transition-colors cursor-pointer">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="text-sm text-accent hover:text-accent/80 transition-colors cursor-pointer">
                About
              </a>
            </Link>
            <Link href="/services">
              <a className="text-sm text-accent hover:text-accent/80 transition-colors cursor-pointer">
                Services
              </a>
            </Link>
            <Link href="/projects">
              <a className="text-sm text-accent hover:text-accent/80 transition-colors cursor-pointer">
                Projects
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-sm text-accent hover:text-accent/80 transition-colors cursor-pointer">
                Contact
              </a>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
