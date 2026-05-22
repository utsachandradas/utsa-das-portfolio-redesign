import { motion } from "framer-motion";

export default function HeroAvatar() {
  return (
    <div className="relative w-full max-w-[340px] mx-auto select-none">
      {/* Outer glow ring */}
      <div className="absolute inset-[-2px] rounded-[2rem] bg-gradient-to-br from-primary/40 via-transparent to-primary/20 blur-xl opacity-60 pointer-events-none" />

      {/* Card */}
      <motion.div
        className="relative rounded-[2rem] overflow-hidden border border-primary/25 shadow-2xl shadow-primary/15"
        style={{ background: "linear-gradient(145deg, oklch(0.15 0.03 265), oklch(0.10 0.02 255))" }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* SVG portrait */}
        <svg
          viewBox="0 0 320 400"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          aria-label="Utsa Das - SEO & GEO Strategist"
        >
          <defs>
            <radialGradient id="avatarBg" cx="50%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#0f0f1a" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="skinGrad" cx="40%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#d4a574" />
              <stop offset="100%" stopColor="#b8874a" />
            </radialGradient>
            <radialGradient id="shirtGrad" cx="50%" cy="20%" r="70%">
              <stop offset="0%" stopColor="#2a2a4a" />
              <stop offset="100%" stopColor="#15152a" />
            </radialGradient>
            <linearGradient id="jacketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e1e3a" />
              <stop offset="100%" stopColor="#111126" />
            </linearGradient>
            <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" />
            </filter>
          </defs>

          {/* Background */}
          <rect width="320" height="400" fill="oklch(0.11 0.02 255)" />
          <rect width="320" height="400" fill="url(#avatarBg)" />

          {/* Subtle grid */}
          <g opacity="0.06" stroke="#6366f1" strokeWidth="1">
            {[64, 128, 192, 256].map((x) => (
              <line key={`v${x}`} x1={x} y1="0" x2={x} y2="400" />
            ))}
            {[80, 160, 240, 320].map((y) => (
              <line key={`h${y}`} x1="0" y1={y} x2="320" y2={y} />
            ))}
          </g>

          {/* Decorative circles */}
          <circle cx="160" cy="155" r="100" fill="none" stroke="#6366f1" strokeWidth="1" opacity="0.12" />
          <circle cx="160" cy="155" r="120" fill="none" stroke="#6366f1" strokeWidth="0.5" opacity="0.06" />

          {/* Body / Jacket */}
          <ellipse cx="160" cy="440" rx="170" ry="140" fill="url(#jacketGrad)" />
          <path
            d="M 60 400 Q 80 310, 120 290 L 160 310 L 200 290 Q 240 310, 260 400 Z"
            fill="url(#jacketGrad)"
          />

          {/* Shirt / inner */}
          <path
            d="M 120 290 Q 140 300, 160 310 Q 180 300, 200 290 L 195 340 L 160 360 L 125 340 Z"
            fill="url(#shirtGrad)"
          />

          {/* Collar v-shape */}
          <path
            d="M 135 290 L 160 320 L 185 290"
            stroke="#6366f1"
            strokeWidth="2.5"
            fill="none"
            opacity="0.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Jacket lapels */}
          <path
            d="M 60 400 Q 75 320, 110 295 L 135 290 L 160 340 L 135 370 Q 85 360, 60 400 Z"
            fill="oklch(0.17 0.03 265)"
            opacity="0.9"
          />
          <path
            d="M 260 400 Q 245 320, 210 295 L 185 290 L 160 340 L 185 370 Q 235 360, 260 400 Z"
            fill="oklch(0.17 0.03 265)"
            opacity="0.9"
          />

          {/* Neck */}
          <rect x="140" y="225" width="40" height="70" rx="8" fill="url(#skinGrad)" />

          {/* Head */}
          <ellipse cx="160" cy="175" rx="72" ry="82" fill="url(#skinGrad)" />

          {/* Hair */}
          <path
            d="M 88 155 Q 90 80, 160 75 Q 230 80, 232 155 Q 215 105, 160 100 Q 105 105, 88 155 Z"
            fill="#1a0a00"
          />
          <path
            d="M 88 155 Q 82 135, 85 110 Q 92 80, 115 72 Q 135 65, 160 65 Q 185 65, 205 72 Q 228 80, 235 110 Q 238 135, 232 155"
            fill="#1c0c00"
          />

          {/* Face features */}
          {/* Eyes */}
          <ellipse cx="136" cy="168" rx="11" ry="8" fill="#1a1a2e" />
          <ellipse cx="184" cy="168" rx="11" ry="8" fill="#1a1a2e" />
          <circle cx="138" cy="167" r="4.5" fill="#0a0a1a" />
          <circle cx="186" cy="167" r="4.5" fill="#0a0a1a" />
          <circle cx="140" cy="165" r="1.5" fill="white" opacity="0.8" />
          <circle cx="188" cy="165" r="1.5" fill="white" opacity="0.8" />
          {/* Eyebrows */}
          <path d="M 123 156 Q 136 150, 149 155" stroke="#1a0a00" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <path d="M 171 155 Q 184 150, 197 156" stroke="#1a0a00" strokeWidth="3.5" fill="none" strokeLinecap="round" />

          {/* Nose */}
          <path d="M 157 175 Q 152 195, 155 202 Q 160 207, 165 202 Q 168 195, 163 175" fill="#b8874a" opacity="0.5" />

          {/* Mouth / subtle smile */}
          <path d="M 145 215 Q 160 224, 175 215" stroke="#8a5a30" strokeWidth="2.5" fill="none" strokeLinecap="round" />

          {/* Subtle ear */}
          <ellipse cx="88" cy="180" rx="9" ry="13" fill="url(#skinGrad)" />
          <ellipse cx="232" cy="180" rx="9" ry="13" fill="url(#skinGrad)" />

          {/* Bottom fade */}
          <rect
            x="0"
            y="340"
            width="320"
            height="60"
            fill="url(#shirtGrad)"
            opacity="0.6"
          />
        </svg>

        {/* Name badge overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-6 py-5"
          style={{ background: "linear-gradient(to top, oklch(0.09 0.02 255) 60%, transparent)" }}>
          <p className="font-bold text-lg tracking-tight text-foreground leading-tight">Utsa Das</p>
          <p className="text-sm font-medium" style={{ color: "oklch(0.72 0.22 270)" }}>
            Founder · SEO & GEO Strategist
          </p>
        </div>
      </motion.div>

      {/* Floating stat badges */}
      <motion.div
        className="absolute -right-5 top-10 glass-panel px-4 py-3 rounded-2xl border border-primary/30 shadow-xl shadow-primary/10 backdrop-blur-xl"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Experience</p>
        <p className="text-2xl font-bold text-primary">10+</p>
        <p className="text-[10px] text-muted-foreground">Years</p>
      </motion.div>

      <motion.div
        className="absolute -left-5 bottom-20 glass-panel px-4 py-3 rounded-2xl border border-primary/30 shadow-xl shadow-primary/10 backdrop-blur-xl"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.55, duration: 0.5 }}
      >
        <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Projects</p>
        <p className="text-2xl font-bold text-primary">50+</p>
        <p className="text-[10px] text-muted-foreground">Completed</p>
      </motion.div>

      <motion.div
        className="absolute -right-5 bottom-28 glass-panel px-4 py-3 rounded-2xl border border-primary/30 shadow-xl shadow-primary/10 backdrop-blur-xl"
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
