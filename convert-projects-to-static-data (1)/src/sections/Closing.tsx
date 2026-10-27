"use client";

import { Reveal } from "../components/Reveal";
import { AccentButton, GlowOrb, Kicker, PageMeta } from "../components/ui";
import { useLanguage } from "../i18n/LanguageContext";

export function Closing() {
  const { t } = useLanguage();
  const idx = t.sectionIndex.findIndex((s) => s.id === "contact");

  return (
    <section id="closing" className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#fafaf8] px-6 py-28 sm:px-10 lg:px-16">
      <GlowOrb className="start-1/3 top-1/4 h-96 w-96" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="space-y-2">
            {t.impact.lines.map((line) => (
              <p key={line} className="font-display text-xl text-black/50 sm:text-2xl">
                {line}
              </p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-8 font-display text-2xl font-semibold tracking-tight sm:text-3xl">{t.impact.joiner}</p>
        </Reveal>
        <Reveal delay={250}>
          <p className="relative mt-6 inline-block font-display text-4xl font-semibold tracking-tight text-black sm:text-5xl">
            {t.impact.final}
            <span className="absolute -bottom-2 start-0 h-[3px] w-full rounded-full bg-black/70" />
          </p>
        </Reveal>
      </div>

      <div className="relative z-10 mx-auto mt-24 max-w-2xl text-center">
        <Reveal>
          <Kicker className="justify-center">{t.cta.kicker}</Kicker>
          <h2 className="mt-8 font-display text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">{t.cta.heading}</h2>
          <p className="mt-6 text-sm leading-relaxed text-black/65 sm:text-base">{t.cta.copy}</p>
        </Reveal>
        <Reveal delay={150} className="mt-10 flex justify-center">
          <AccentButton href="#contact" tone="dark">
            {t.cta.button}
          </AccentButton>
        </Reveal>
      </div>

      <PageMeta index={String(idx).padStart(2, "0")} label="Closing" />
    </section>
  );
}
