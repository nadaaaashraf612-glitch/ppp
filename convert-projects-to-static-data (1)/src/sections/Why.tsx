"use client";

import { Reveal } from "../components/Reveal";
import { GlassCard, GlowOrb, IconBadge, Kicker, PageMeta } from "../components/ui";
import { PuzzleIcon, CodeIcon, CompassIcon, SparklesIcon, RocketIcon } from "../components/icons";
import { useLanguage } from "../i18n/LanguageContext";

const whyIcons = [PuzzleIcon, CodeIcon, CompassIcon, SparklesIcon, RocketIcon];

export function Why() {
  const { t } = useLanguage();
  const idx = t.sectionIndex.findIndex((s) => s.id === "why");

  return (
    <section id="why" className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-black px-6 py-28 text-white sm:px-10 lg:px-16">
      <GlowOrb tone="dark" className="start-1/4 bottom-0 h-96 w-96" />
      <div className="grain absolute inset-0 opacity-50" />

      <Reveal>
        <Kicker tone="light">{t.why.kicker}</Kicker>
        <h2 className="mt-8 max-w-2xl font-display text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
          {t.why.heading}
        </h2>
      </Reveal>

      <div className="relative z-10 mt-14 space-y-4">
        {t.why.items.map((item, i) => {
          const Icon = whyIcons[i % whyIcons.length];
          return (
            <Reveal key={item.title} delay={i * 90}>
              <GlassCard tone="dark" className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-7">
                <IconBadge icon={<Icon />} tone="dark" className="sm:mx-0" />
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight sm:text-xl">{item.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/65">{item.copy}</p>
                </div>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>

      <PageMeta index={String(idx + 1).padStart(2, "0")} label={t.sectionIndex[idx].label} tone="light" />
    </section>
  );
}
