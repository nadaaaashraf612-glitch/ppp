"use client";

import { motion } from "framer-motion";
import { useParallax, useMouseParallax } from "../hooks/useReveal";
import { ParallaxLayer } from "../components/Parallax";
import { OrbitEmblem } from "../components/OrbitEmblem";
import { PageMeta } from "../components/ui";
import { useLanguage } from "../i18n/LanguageContext";

export function Cover() {
  const bg = useParallax<HTMLDivElement>(0.08);
  const mouse = useMouseParallax(14);
  const { t, dir } = useLanguage();
  const edgeSign = dir === "rtl" ? -1 : 1;

  return (
    <section id="cover" className="relative flex min-h-screen flex-col overflow-hidden bg-black text-white">
      {/* Layer 0 — deep luxury photographic backdrop, slowest parallax */}
      <ParallaxLayer speed={0.06} scaleWithScroll className="absolute inset-0">
        <div
          className="absolute inset-0 animate-drift-slow bg-cover bg-center opacity-55"
          style={{ backgroundImage: "url(/images/hero-parallax-bg.jpg)" }}
        />
      </ParallaxLayer>
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/75 to-black" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

      {/* Layer 1 — fine particle field, medium parallax */}
      <div
        ref={bg.ref}
        className="absolute inset-0 opacity-[0.35]"
        style={{
          transform: `translateY(${bg.offset}px)`,
          backgroundImage:
            "radial-gradient(1px 1px at 20px 20px, rgba(255,255,255,0.5) 1px, transparent 0), radial-gradient(1px 1px at 60px 60px, rgba(255,255,255,0.35) 1px, transparent 0)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="grain absolute inset-0" />

      {/* Layer 2 — luxury gold + white glass glow accents, cursor-reactive */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -end-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ x: mouse.x * -2, y: mouse.y * -2 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -start-24 bottom-10 h-72 w-72 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.18), transparent 70%)", x: mouse.x * 2, y: mouse.y * 2 }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.08), transparent 70%)" }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex flex-1 flex-col px-6 pt-28 sm:px-10 sm:pt-32 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start justify-between gap-6 text-[11px] uppercase tracking-[0.35em] text-white/50 sm:flex-row sm:items-center"
        >
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-violet)] shadow-[0_0_10px_2px_rgba(139,92,246,0.7)]" />
            <span className="text-violet-accent font-semibold">{t.cover.badge}</span>
          </span>
          <span>{t.cover.tagline}</span>
        </motion.div>

        <div
          className="relative mt-16 flex flex-1 flex-col justify-center sm:mt-20"
          style={{ perspective: "1200px" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            style={{ x: mouse.x * -1.2, y: mouse.y * -1.2 }}
            className="relative mb-8 flex h-20 w-20 items-center justify-center rounded-2xl glass-dark gold-glow sm:h-24 sm:w-24"
          >
            {/* animated ring giving the logo badge mass / presence */}
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-[-10px] rounded-[1.4rem] border border-white/15"
              animate={{ scale: [1, 1.08, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-[-20px] rounded-[1.8rem] border"
              style={{ borderColor: "rgba(139,92,246,0.25)" }}
              animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            />
            <img src="/images/puiux-logo.svg" alt="PUIUX" className="relative z-10 h-10 w-auto sm:h-12" />
          </motion.div>

          <h1
            className="relative select-none font-display font-semibold leading-[0.82] tracking-tight"
            style={{ transform: `translate3d(${mouse.x * -0.6}px, ${mouse.y * -0.6}px, 0)` }}
          >
            {/* ghost / outline duplicate for depth & mass, placed behind the solid headline */}
            <motion.span
              aria-hidden
              initial={{ opacity: 0, x: 40 * edgeSign }}
              animate={{ opacity: 0.5, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-none absolute inset-0 block text-[20vw] text-transparent sm:text-[17vw] lg:text-[15vw]"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.14)", transform: `translate(${6 * edgeSign}px, 6px)` }}
            >
              PUIUX
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="shimmer-text relative block text-[20vw] sm:text-[17vw] lg:text-[15vw]"
            >
              PUIUX
            </motion.span>

            {/* bespoke animated emblem facing the PUIUX wordmark — a living motion signature instead of a static flourish */}
            <motion.div
              aria-hidden
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-none absolute -top-10 hidden h-40 w-40 sm:block sm:h-52 sm:w-52 lg:-top-14 lg:h-72 lg:w-72"
              style={{ [dir === "rtl" ? "left" : "right"]: "0%" }}
            >
              <OrbitEmblem className="h-full w-full" />
            </motion.div>

            {/* animated corner brackets — subtle structural accent, direction aware */}
            <motion.span
              aria-hidden
              className="pointer-events-none absolute -top-4 h-6 w-6 border-t sm:h-8 sm:w-8"
              style={{
                [dir === "rtl" ? "right" : "left"]: "-0.5rem",
                borderTopColor: "rgba(139,92,246,0.55)",
                borderInlineStart: "1px solid rgba(139,92,246,0.55)",
              }}
              animate={{ opacity: [0.3, 0.9, 0.3] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              aria-hidden
              className="pointer-events-none absolute -bottom-4 h-6 w-6 border-b sm:h-8 sm:w-8"
              style={{
                [dir === "rtl" ? "left" : "right"]: "-0.5rem",
                borderBottomColor: "rgba(139,92,246,0.55)",
                borderInlineEnd: "1px solid rgba(139,92,246,0.55)",
              }}
              animate={{ opacity: [0.3, 0.9, 0.3] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            />
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-10 grid max-w-3xl grid-cols-1 gap-6 border-t border-white/15 pt-8 sm:grid-cols-[1fr_auto] sm:items-end"
          >
            <p className="font-display text-xl font-light leading-snug text-white/85 sm:text-2xl">{t.cover.motto}</p>
            <a
              href="https://www.puiux.com"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 font-display text-sm uppercase tracking-[0.2em] text-white/60 transition hover:text-white"
            >
              <span className="relative">
                {t.cover.website}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--color-gold)] transition-all duration-500 group-hover:w-full" />
              </span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-10 flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-white/40"
        >
          <span className="hidden sm:inline">{t.cover.tags}</span>
          <span className="flex items-center gap-3">
            {t.cover.scroll}
            <span className="relative block h-8 w-px overflow-hidden bg-white/15">
              <motion.span
                className="absolute inset-x-0 top-0 h-1/2 bg-[var(--color-gold)]"
                animate={{ y: ["-100%", "200%"] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </span>
          </span>
        </motion.div>
      </div>

      <PageMeta index="01" label={t.sectionIndex[0].label} tone="light" />
    </section>
  );
}
