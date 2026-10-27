"use client";

import { motion } from "framer-motion";
import { Reveal } from "../components/Reveal";
import { GlowOrb, Kicker, PageMeta } from "../components/ui";
import { getTechLogo } from "../utils/techLogos";
import { useLanguage } from "../i18n/LanguageContext";

function TechTile({ name, delay }: { name: string; delay: number }) {
  const logo = getTechLogo(name);
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      whileHover={{ y: -6, scale: 1.05 }}
      transition={{ duration: 0.5, delay: delay * 0.04, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col items-center gap-3 rounded-2xl glass-light p-4 text-center"
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-2xl opacity-80 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: logo.bg }}
      />
      <span
        className={
          "relative flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-3 sm:h-14 sm:w-14 " +
          (logo.invert ? "bg-black" : "bg-white shadow-[0_6px_18px_-6px_rgba(10,10,10,0.25)]")
        }
      >
        {logo.src ? (
          <img src={logo.src} alt={logo.name} className="h-6 w-6 object-contain sm:h-7 sm:w-7" />
        ) : (
          <span className="font-display text-base font-bold text-[var(--color-violet)] sm:text-lg">{logo.monogram}</span>
        )}
      </span>
      <span className="relative font-display text-[11px] font-semibold tracking-tight text-black/75 sm:text-xs">
        {name}
      </span>
    </motion.div>
  );
}

export function Expertise() {
  const { t } = useLanguage();
  const idx = t.sectionIndex.findIndex((s) => s.id === "expertise");
  let tileCounter = 0;

  return (
    <section id="expertise" className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#fafaf8] px-6 py-28 sm:px-10 lg:px-16">
      <GlowOrb className="start-10 top-10 h-72 w-72" />
      <GlowOrb className="end-0 bottom-0 h-80 w-80" />

      <Reveal>
        <Kicker>{t.expertise.kicker}</Kicker>
        <h2 className="mt-8 max-w-2xl font-display text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
          {t.expertise.heading}
        </h2>
      </Reveal>

      <div className="relative z-10 mt-14 flex flex-col gap-10">
        {t.expertise.groups.map((g, gi) => (
          <Reveal key={g.group} delay={gi * 60}>
            <div className="flex items-center gap-3">
              <span className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-violet)]">
                {String(gi + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-black/80">{g.group}</h3>
              <span className="h-px flex-1 bg-black/10" />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
              {g.items.map((item) => {
                tileCounter += 1;
                return <TechTile key={item} name={item} delay={tileCounter} />;
              })}
            </div>
          </Reveal>
        ))}
      </div>

      <PageMeta index={String(idx + 1).padStart(2, "0")} label={t.sectionIndex[idx].label} />
    </section>
  );
}
