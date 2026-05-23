import { motion } from "framer-motion";

export default function HeroAvatar() {
  return (
    <div className="relative w-full max-w-[340px] mx-auto select-none">
      {/* Outer ambient glow */}
      <div className="absolute inset-[-16px] rounded-[2.5rem] bg-gradient-to-br from-primary/30 via-violet-500/10 to-cyan-500/10 blur-2xl opacity-70 pointer-events-none animate-pulse" style={{ animationDuration: "4s" }} />
      <div className="absolute inset-[-4px] rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-lg opacity-60 pointer-events-none" />

      {/* Card wrapper */}
      <motion.div
        className="relative rounded-[2rem] overflow-hidden border border-primary/20 shadow-2xl shadow-primary/20"
        style={{ background: "linear-gradient(145deg, oklch(0.14 0.03 265), oklch(0.09 0.018 255))" }}
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -4, transition: { duration: 0.3 } }}
      >
        {/* Subtle floating animation wrapper */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* PNG Avatar image */}
          <img
            src="/assets/avatars/utsa-das-avatar.png"
            alt="Utsa Das — SEO & GEO Strategist"
            width={400}
            height={500}
            loading="eager"
            decoding="async"
            className="w-full block"
            style={{ aspectRatio: "4/5", objectFit: "cover" }}
          />
        </motion.div>

        {/* Name badge overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 px-6 py-5"
          style={{ background: "linear-gradient(to top, oklch(0.08 0.02 255 / 0.98) 60%, transparent)" }}
        >
          <p className="font-bold text-lg tracking-tight text-foreground leading-tight">Utsa Das</p>
          <p className="text-sm font-medium" style={{ color: "oklch(0.72 0.22 270)" }}>
            Founder · SEO & GEO Strategist
          </p>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/15 to-transparent pointer-events-none" />
      </motion.div>

      {/* Floating stat badges */}
      <motion.div
        className="absolute right-0 sm:-right-5 top-10 glass-panel px-4 py-3 rounded-2xl border border-primary/30 shadow-xl shadow-primary/10 backdrop-blur-xl"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Experience</p>
        <p className="text-2xl font-bold text-primary">4+</p>
        <p className="text-[10px] text-muted-foreground">Yrs · Since 2022</p>
      </motion.div>

      <motion.div
        className="absolute left-0 sm:-left-5 bottom-20 glass-panel px-4 py-3 rounded-2xl border border-primary/30 shadow-xl shadow-primary/10 backdrop-blur-xl"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.55, duration: 0.5 }}
      >
        <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Projects</p>
        <p className="text-2xl font-bold text-primary">50+</p>
        <p className="text-[10px] text-muted-foreground">Completed</p>
      </motion.div>

      <motion.div
        className="absolute right-0 sm:-right-5 bottom-28 glass-panel px-4 py-3 rounded-2xl border border-primary/30 shadow-xl shadow-primary/10 backdrop-blur-xl"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <p className="text-[10px] text-muted-foreground uppercase tracking-wide">AI Citations</p>
        <p className="text-2xl font-bold text-primary">Tier 1</p>
        <p className="text-[10px] text-muted-foreground">Ranked</p>
      </motion.div>
    </div>
  );
}
