import { motion } from "framer-motion";

export default function HeroAvatar() {
  return (
    <div className="relative w-full max-w-[380px] mx-auto select-none">

      {/* Outer ambient glow */}
      <div
        className="absolute inset-[-30px] rounded-full pointer-events-none opacity-50"
        style={{
          background: "radial-gradient(ellipse, oklch(0.70 0.24 272 / 0.35) 0%, oklch(0.60 0.20 300 / 0.15) 50%, transparent 75%)",
          filter: "blur(40px)",
        }}
      />

      {/* Gradient ring border */}
      <motion.div
        className="relative p-[3px] rounded-[2rem]"
        style={{
          background: "linear-gradient(135deg, oklch(0.70 0.24 272), oklch(0.65 0.22 295), oklch(0.72 0.18 200), oklch(0.70 0.24 272))",
        }}
        initial={{ opacity: 0, scale: 0.9, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.02, transition: { duration: 0.35, ease: "easeOut" } }}
      >
        {/* Inner card */}
        <div
          className="relative rounded-[1.75rem] overflow-hidden"
          style={{ background: "linear-gradient(160deg, oklch(0.14 0.035 265), oklch(0.10 0.02 255))" }}
        >
          {/* Corner glow accent */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-violet-500/10 to-transparent pointer-events-none" />

          {/* Photo */}
          <motion.img
            src="/assets/avatars/utsa-das-avatar.png"
            alt="Utsa Das — Founder & Growth Marketing Strategist"
            width={400}
            height={480}
            loading="eager"
            decoding="async"
            className="w-full block"
            style={{
              aspectRatio: "5/6",
              objectFit: "cover",
              objectPosition: "center top",
            }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Name overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 px-5 py-4"
            style={{ background: "linear-gradient(to top, oklch(0.08 0.02 255 / 0.97) 55%, transparent)" }}
          >
            <p className="font-bold text-base tracking-tight text-white leading-tight">Utsa Das</p>
            <p className="text-xs font-medium mt-0.5" style={{ color: "oklch(0.75 0.20 272)" }}>
              Founder &amp; Growth Marketing Strategist
            </p>
          </div>
        </div>
      </motion.div>

      {/* Stats row — below the card, always visible */}
      <motion.div
        className="grid grid-cols-3 gap-3 mt-4"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
      >
        {[
          { value: "4+", label: "Years", sub: "Since 2022" },
          { value: "10+", label: "Projects", sub: "E-com & B2B" },
          { value: "3", label: "Ad Channels", sub: "Meta·Google·TikTok" },
        ].map((s) => (
          <div
            key={s.label}
            className="glass-panel rounded-xl px-3 py-3 border border-white/8 text-center"
          >
            <div className="text-xl font-bold text-primary leading-none">{s.value}</div>
            <div className="text-[10px] font-semibold text-foreground mt-1">{s.label}</div>
            <div className="text-[9px] text-muted-foreground mt-0.5 leading-tight">{s.sub}</div>
          </div>
        ))}
      </motion.div>

    </div>
  );
}
