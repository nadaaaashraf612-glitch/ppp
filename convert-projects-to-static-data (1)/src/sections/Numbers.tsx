"use client";

import { Reveal } from "../components/Reveal";
import { GlassCard, GlowOrb, IconBadge, Kicker, PageMeta } from "../components/ui";
import { LayersIcon, UsersIcon, ClockIcon, FlagIcon } from "../components/icons";
import { useLanguage } from "../i18n/LanguageContext";

const numberIcons = [LayersIcon, UsersIcon, ClockIcon, FlagIcon];

export function Numbers() {
  const { t } = useLanguage();
  const idx = t.sectionIndex.findIndex((s) => s.id === "numbers");

  return (
    <section id="numbers" className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-black px-6 py-28 text-white sm:px-10 lg:px-16">
      <GlowOrb tone="dark" className="end-10 top-1/4 h-96 w-96" />
      <div className="grain absolute inset-0 opacity-50" />

      <Reveal>
        <Kicker tone="light">{t.numbers.kicker}</Kicker>
        <h2 className="mt-8 max-w-2xl font-display text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
          {t.numbers.heading}
        </h2>
      </Reveal>

      <div className="relative z-10 mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {t.numbers.stats.map((s, i) => {
          const Icon = numberIcons[i % numberIcons.length];
          return (
            <Reveal key={s.label} delay={i * 110}>
              <GlassCard tone="dark" className="flex h-full flex-col justify-between p-7 sm:p-8">
                <IconBadge icon={<Icon />} tone="dark" size="sm" />
                <span className="mt-6 font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl">{s.value}</span>
                <span className="mt-6 text-sm uppercase tracking-[0.2em] text-white/55">{s.label}</span>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>

      <PageMeta index={String(idx + 1).padStart(2, "0")} label={t.sectionIndex[idx].label} tone="light" />
    </section>
  );
}
