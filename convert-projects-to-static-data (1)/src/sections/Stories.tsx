"use client";

import { motion } from "framer-motion";
import { Reveal } from "../components/Reveal";
import { GlowOrb, Kicker, PageMeta } from "../components/ui";
import { useLanguage } from "../i18n/LanguageContext";

export function Stories() {
  const { t, dir } = useLanguage();
  const idx = t.sectionIndex.findIndex((s) => s.id === "stories");
  const edgeSign = dir === "rtl" ? -1 : 1;

  return (
    <section id="stories" className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#fafaf8] px-6 py-28 sm:px-10 lg:px-16">
      <GlowOrb className="end-0 top-1/3 h-80 w-80" />
      <GlowOrb className="start-0 bottom-0 h-72 w-72" />

      <Reveal>
        <Kicker>{t.stories.kicker}</Kicker>
        <h2 className="mt-8 max-w-2xl font-display text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
          {t.stories.heading}
        </h2>
      </Reveal>

      {/* Creative "journey" layout — each story unfolds like a chapter along a
          single violet thread, framed by an oversized decorative quote mark,
          rather than sitting in a flat grid of matching cards. */}
      <div className="relative z-10 mt-16">
        <span
          aria-hidden
          className="absolute bottom-6 top-6 hidden w-px bg-gradient-to-b from-transparent via-[var(--color-violet)]/50 to-transparent sm:block"
          style={{ insetInlineStart: "2.4rem" }}
        />

        <div className="flex flex-col gap-16 sm:gap-20">
          {t.stories.items.map((story, i) => (
            <Reveal key={story.title} delay={i * 140}>
              <motion.div
                className="relative grid grid-cols-1 gap-6 sm:grid-cols-[5rem_1fr] sm:gap-10"
                whileHover={{ x: edgeSign * 4 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-4 sm:flex-col sm:items-center sm:gap-3">
                  <span className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-black text-white shadow-[0_10px_30px_-10px_rgba(139,92,246,0.55)] sm:h-16 sm:w-16">
                    <span className="font-display text-lg font-semibold sm:text-xl">{String(i + 1).padStart(2, "0")}</span>
                    <motion.span
                      aria-hidden
                      className="pointer-events-none absolute inset-[-6px] rounded-full border border-[var(--color-violet)]/40"
                      animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.9, 0.4] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                    />
                  </span>
                  <span className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-black/40 sm:hidden">
                    {story.title}
                  </span>
                </div>

                <div className="relative overflow-hidden rounded-3xl glass-light p-7 sm:p-10">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-6 font-display text-[7rem] font-bold leading-none text-[var(--color-violet)]/10 sm:text-[9rem]"
                    style={{ [dir === "rtl" ? "left" : "right"]: "0.5rem" }}
                  >
                    “
                  </span>
                  <h3 className="relative hidden font-display text-2xl font-semibold tracking-tight text-black sm:block sm:text-3xl">
                    {story.title}
                  </h3>
                  <p className="relative mt-4 max-w-2xl text-base leading-relaxed text-black/70 sm:mt-5 sm:text-lg">
                    {story.copy}
                  </p>
                  {story.closing && (
                    <p className="relative mt-5 inline-flex items-center gap-2 font-display text-base font-semibold italic text-[var(--color-violet)] sm:text-lg">
                      <span className="h-px w-6 bg-[var(--color-violet)]" />
                      {story.closing}
                    </p>
                  )}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      <PageMeta index={String(idx + 1).padStart(2, "0")} label={t.sectionIndex[idx].label} />
    </section>
  );
}
