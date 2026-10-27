"use client";

import { Reveal } from "../components/Reveal";
import { GlowOrb, Kicker, PageMeta } from "../components/ui";
import { LuxuryAboutPanel } from "../components/LuxuryAboutPanel";
import { useLanguage } from "../i18n/LanguageContext";

export function About() {
  const { t } = useLanguage();
  const idx = t.sectionIndex.findIndex((s) => s.id === "about");

  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#fafaf8] px-6 py-28 sm:px-10 lg:px-16"
    >
      <GlowOrb className="-end-20 top-10 h-80 w-80" />
      <GlowOrb className="-start-20 bottom-0 h-72 w-72" />

      {/* Luxury layout: the animated purple/black illustration lives inside its
          own isolated, rounded card (LuxuryAboutPanel) on one side, fully
          isolated from the copy. The title sits directly above the
          description on the other side. */}
      <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10 lg:items-center">
        <Reveal className="relative lg:sticky lg:top-24 lg:self-start">
          <LuxuryAboutPanel monogram="P" />
        </Reveal>

        <Reveal delay={100}>
          <Kicker>{t.about.kicker}</Kicker>
          <h2 className="mt-8 font-display text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
            {t.about.heading}
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            {t.about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={160 + i * 100}>
                <p className="max-w-2xl text-base leading-relaxed text-black/75 sm:text-lg">{p}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>

      <PageMeta index={String(idx + 1).padStart(2, "0")} label={t.sectionIndex[idx].label} />
    </section>
  );
}
