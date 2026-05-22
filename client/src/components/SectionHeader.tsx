import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Section Header Component
 * Design: Premium typography with accent highlights
 * - Subtitle with accent color
 * - Large bold heading using Space Grotesk
 * - Optional description text
 * - Flexible alignment (center/left)
 */

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

const SectionHeader = ({
  subtitle,
  title,
  description,
  align = "center",
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={cn("space-y-4", align === "center" && "text-center")}
    >
      {subtitle && (
        <p className="text-sm font-semibold text-accent uppercase tracking-wider">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] text-foreground">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-lg text-foreground/60 leading-relaxed",
            align === "center" && "max-w-2xl mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;

