import { m } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

/**
 * Hero Component
 * Design: Premium dark hero with background image, overlay, and floating elements
 * - Full-screen hero section
 * - Optional background image with overlay
 * - Animated headline with gradient accent
 * - Trust indicators
 * - Scroll indicator animation
 */

interface HeroProps {
  backgroundImage?: string;
  badge?: string;
  headline: string;
  subheadline: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  trustIndicators?: string[];
}

const Hero = ({
  backgroundImage,
  badge = "Founder & SEO Expert",
  headline,
  subheadline,
  ctaText = "Get Started",
  ctaHref = "/contact",
  secondaryCtaText = "Learn More",
  secondaryCtaHref = "/about",
  trustIndicators = [
    "50+ Projects Completed",
    "280% Avg Traffic Growth",
    "98% Client Satisfaction",
  ],
}: HeroProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />

      {/* Floating Decorative Elements */}
      <m.div
        className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <m.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Content */}
      <m.div
        className="container relative z-10 max-w-4xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <m.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-sm font-medium text-accent">{badge}</span>
        </m.div>

        {/* Headline */}
        <m.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold font-['Space_Grotesk'] text-foreground mb-6 leading-tight">
          {headline}
          <span className="block bg-gradient-to-r from-accent via-cyan-500 to-accent bg-clip-text text-transparent mt-2">
            {subheadline}
          </span>
        </m.h1>

        {/* Description */}
        <m.p
          variants={itemVariants}
          className="text-xl text-foreground/60 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Helping founders and businesses achieve exceptional visibility and sustainable growth through strategic SEO, GEO optimization, and AI search expertise.
        </m.p>

        {/* CTA Buttons */}
        <m.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link href={ctaHref}>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold group"
            >
              {ctaText}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href={secondaryCtaHref}>
            <Button
              size="lg"
              variant="outline"
              className="border-foreground/20 hover:border-accent hover:text-accent"
            >
              {secondaryCtaText}
            </Button>
          </Link>
        </m.div>

        {/* Trust Indicators */}
        <m.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-foreground/60 mb-12"
        >
          {trustIndicators.map((indicator, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              {indicator}
            </div>
          ))}
        </m.div>
      </m.div>

      {/* Scroll Indicator */}
      <m.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-foreground/40" />
      </m.div>
    </section>
  );
};

export default Hero;

