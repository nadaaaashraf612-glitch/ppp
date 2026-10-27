"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useActiveSection } from "../hooks/useActiveSection";
import { cn } from "../utils/cn";
import { useLanguage } from "../i18n/LanguageContext";
import { Logo } from "./ui";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-[3px] bg-black/5">
      <div
        className="h-full bg-gradient-to-r from-black via-[var(--color-gold)] to-black transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export function Chrome() {
  const { t, lang, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ids = t.sectionIndex.map((s) => s.id);
  const active = useActiveSection(ids);
  const activeMeta = t.sectionIndex.find((s) => s.id === active) ?? t.sectionIndex[0];
  const activeNumber = String(t.sectionIndex.findIndex((s) => s.id === active) + 1).padStart(2, "0");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <ScrollProgress />

      <a
        href="#cover"
        className="logo-auto-contrast fixed start-5 top-5 z-50 sm:start-8 sm:top-7"
        aria-label="PUIUX"
      >
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.06 }}
          className="group flex items-center"
        >
          <img src="/images/puiux-logo.svg" alt="PUIUX" className="h-6 w-auto sm:h-7" />
        </motion.span>
      </a>

      <div className="fixed end-5 top-5 z-50 flex items-center gap-3 sm:end-8 sm:top-7">
        <span className="hidden font-display text-[11px] uppercase tracking-[0.3em] text-black/50 sm:inline">
          {activeNumber} — {activeMeta.label}
        </span>
        <button
          type="button"
          onClick={toggleLang}
          className="glass-light flex h-10 items-center justify-center rounded-full px-4 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-black hover:text-white"
          aria-label="Switch language"
        >
          {t.nav.langSwitch}
        </button>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="glass-light flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full transition hover:border-black/40"
          aria-label="Open navigation menu"
          aria-expanded={open}
        >
          <span className="h-px w-4 bg-black" />
          <span className="h-px w-4 bg-black" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-black text-white"
          >
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -end-20 -top-20 h-72 w-72 rounded-full bg-[var(--color-violet)]/20 blur-3xl"
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -start-16 bottom-0 h-80 w-80 rounded-full bg-[var(--color-fuchsia)]/10 blur-3xl"
              animate={{ scale: [1.1, 0.95, 1.1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <div className="flex h-full flex-col px-6 py-6 sm:px-12 sm:py-10">
              <div className="flex items-center justify-between">
                <Logo tone="dark" />
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={toggleLang}
                    className="flex h-10 items-center justify-center rounded-full border border-white/20 px-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                  >
                    {t.nav.langSwitch}
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-white/50"
                    aria-label={t.nav.menuClose}
                  >
                    <span className="relative block h-3 w-3">
                      <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                      <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white" />
                    </span>
                  </button>
                </div>
              </div>

              <nav className="mt-10 flex flex-1 flex-col justify-center overflow-y-auto">
                <ol className="grid grid-cols-1 gap-x-10 gap-y-1 sm:grid-cols-2">
                  {t.sectionIndex.map((item, i) => (
                    <motion.li
                      key={item.id}
                      className="relative overflow-hidden border-b border-white/10"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.04 * i, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <a
                        href={`#${item.id}`}
                        onClick={() => setOpen(false)}
                        className="group relative flex items-center gap-4 py-3 sm:py-3.5"
                      >
                        <span
                          aria-hidden
                          className="pointer-events-none absolute inset-y-0 start-0 w-0 bg-white/5 transition-all duration-500 group-hover:w-full"
                        />
                        <span className="relative font-display text-xs tabular-nums text-[var(--color-gold)]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={cn(
                            "relative font-display text-lg text-white/80 transition group-hover:text-white sm:text-xl",
                            lang === "ar" ? "group-hover:-translate-x-1" : "group-hover:translate-x-1"
                          )}
                        >
                          {item.label}
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ol>
              </nav>

              <div className="flex items-center justify-between border-t border-white/10 pt-5 text-[11px] uppercase tracking-[0.3em] text-white/40">
                <span>{t.nav.studioLine}</span>
                <span>{t.cover.website}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
