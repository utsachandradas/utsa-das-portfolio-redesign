import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  align = "center",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`mb-12 ${alignClass}`}
    >
      {subtitle && (
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Space_Grotesk']">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}

