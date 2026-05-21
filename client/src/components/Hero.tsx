import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
  backgroundImage?: string;
}

export default function Hero({ backgroundImage }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.1 },
    }),
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/90" />

      {/* Animated geometric accent shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border-2 border-accent/20 rounded-full"
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 border-2 border-accent/10 transform rotate-45"
        animate={{
          rotate: [45, 65, 45],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10 container max-w-4xl mx-auto px-4 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div custom={0} variants={itemVariants} className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-foreground/80">
                Helping Brands Grow
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div custom={1} variants={itemVariants}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-['Space_Grotesk'] leading-tight">
              <span className="text-foreground">Helping Brands Grow</span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                Through SEO, GEO & AI
              </motion.span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            custom={2}
            variants={itemVariants}
            className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto leading-relaxed"
          >
            I help businesses improve visibility across Google and AI-powered search platforms using advanced SEO, Generative Engine Optimization, and modern digital growth strategies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={3}
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold group"
              asChild
            >
              <a href="#contact" className="flex items-center gap-2">
                Work With Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-foreground/20 hover:border-accent hover:text-accent"
              asChild
            >
              <a href="#portfolio">View Portfolio</a>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            custom={4}
            variants={itemVariants}
            className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-foreground/60"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>10+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>50+ Projects Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Global Clients</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-foreground/60 uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-foreground/30 rounded-full mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

