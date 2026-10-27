"use client";

import { motion } from "framer-motion";

/**
 * OrbitEmblem — a bespoke animated constellation mark placed beside the
 * PUIUX wordmark on the cover section. Built from layered rotating rings,
 * counter-orbiting nodes and a pulsing core, it replaces a conventional
 * static logo flourish with a living, premium piece of motion design.
 *
 * `tone="light"` recolors the mark so it reads clearly on light (#fafaf8)
 * backgrounds — reused inside the About section as a creative companion
 * shape instead of a static grid of boxes.
 */
export function OrbitEmblem({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const orbits = [
    { radius: 138, size: 10, duration: 14, reverse: false, delay: 0 },
    { radius: 138, size: 7, duration: 14, reverse: false, delay: 2.4, angle: 150 },
    { radius: 93, size: 9, duration: 10, reverse: true, delay: 0.6 },
    { radius: 179, size: 6, duration: 20, reverse: true, delay: 1.2, angle: 60 },
  ];

  const ringColor = tone === "dark" ? "rgba(255,255,255,0.14)" : "rgba(91,33,182,0.18)";
  const coreBg = tone === "dark" ? "#ffffff" : "linear-gradient(135deg,#8b5cf6,#5b21b6)";

  return (
    <div className={className} aria-hidden style={{ perspective: 800 }}>
      <div className="relative h-full w-full">
        {/* outer dashed ring — slow clockwise drift */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ border: "1px dashed rgba(139,92,246,0.35)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        />
        {/* middle solid ring — slow counter-clockwise */}
        <motion.div
          className="absolute rounded-full"
          style={{ inset: "14%", border: `1px solid ${ringColor}` }}
          animate={{ rotate: -360 }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        />
        {/* inner glow ring, breathing */}
        <motion.div
          className="absolute rounded-full"
          style={{
            inset: "32%",
            background: "radial-gradient(circle, rgba(139,92,246,0.14), transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* orbiting nodes */}
        {orbits.map((o, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2"
            style={{ width: 0, height: 0, rotate: o.angle ?? 0 }}
            animate={{ rotate: (o.angle ?? 0) + (o.reverse ? -360 : 360) }}
            transition={{ duration: o.duration, repeat: Infinity, ease: "linear", delay: o.delay }}
          >
            <motion.span
              className="absolute rounded-full"
              style={{
                width: o.size,
                height: o.size,
                left: o.radius,
                top: -(o.size / 2),
                background: tone === "dark" ? "var(--color-violet-soft)" : "var(--color-violet)",
                boxShadow: "0 0 12px 2px rgba(139,92,246,0.55)",
              }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: o.delay }}
            />
          </motion.div>
        ))}

        {/* connecting trace lines, subtly rotating */}
        <motion.svg
          viewBox="0 0 200 200"
          className="absolute inset-0 h-full w-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <polygon
            points="100,46 146,74 146,126 100,154 54,126 54,74"
            fill="none"
            stroke="rgba(139,92,246,0.25)"
            strokeWidth="0.6"
          />
        </motion.svg>

        {/* core */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: coreBg, boxShadow: "0 0 32px 10px rgba(139,92,246,0.65)" }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
