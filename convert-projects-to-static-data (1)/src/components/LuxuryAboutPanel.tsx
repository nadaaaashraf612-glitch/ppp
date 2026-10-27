"use client";

import { motion } from "framer-motion";
import { OrbitEmblem } from "./OrbitEmblem";

/**
 * A self-contained, luxury dark illustration panel for the About section.
 * Everything here (gradient wash, floating particles, orbit emblem, grid
 * texture) is isolated inside its own rounded/overflow-hidden card so the
 * animation never bleeds into or competes with the surrounding copy.
 */
export function LuxuryAboutPanel({ monogram = "P" }: { monogram?: string }) {
  const particles = [
    { top: "18%", left: "22%", size: 6, duration: 7, delay: 0 },
    { top: "72%", left: "16%", size: 4, duration: 9, delay: 1.1 },
    { top: "26%", left: "80%", size: 5, duration: 8, delay: 0.4 },
    { top: "64%", left: "78%", size: 7, duration: 10, delay: 1.8 },
    { top: "48%", left: "50%", size: 3, duration: 6.5, delay: 0.8 },
    { top: "85%", left: "55%", size: 4, duration: 8.5, delay: 2.2 },
  ];

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-[#07060a] shadow-[0_40px_90px_-30px_rgba(139,92,246,0.55)] ring-1 ring-white/10 sm:aspect-square lg:aspect-[4/5]">
      {/* Base luxury gradient wash — black fading into deep violet */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 20% 0%, rgba(139,92,246,0.35), transparent 55%), radial-gradient(100% 80% at 90% 100%, rgba(217,70,239,0.22), transparent 60%), linear-gradient(160deg, #0a0a0c 0%, #0c0a12 45%, #050406 100%)",
        }}
      />

      {/* Slow-drifting glow blobs */}
      <motion.div
        aria-hidden
        className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-[var(--color-violet)]/30 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-[var(--color-fuchsia)]/20 blur-3xl"
        animate={{ scale: [1.1, 0.95, 1.1], opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />

      {/* Faint luxury grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(196,181,253,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(196,181,253,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Fine grain for a premium, non-flat finish */}
      <div aria-hidden className="bg-noise absolute inset-0 opacity-[0.12] mix-blend-overlay" />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="absolute rounded-full bg-[var(--color-violet-soft)]"
          style={{ top: p.top, left: p.left, width: p.size, height: p.size, boxShadow: "0 0 10px 2px rgba(196,181,253,0.55)" }}
          animate={{ y: [0, -14, 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
        />
      ))}

      {/* Centrepiece: orbit emblem + monogram, perfectly centred so it never
          collides with any text sitting outside this card */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex h-[62%] w-[62%] items-center justify-center">
          <OrbitEmblem tone="dark" className="h-full w-full" />
          <span className="pointer-events-none absolute font-display text-[5.5rem] font-semibold tracking-tight text-white/[0.06] sm:text-[7rem]">
            {monogram}
          </span>
        </div>
      </div>

      {/* Bottom vignette so any caption placed below reads cleanly */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Thin gold/violet edge frame for a finished, luxury look */}
      <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />
    </div>
  );
}
