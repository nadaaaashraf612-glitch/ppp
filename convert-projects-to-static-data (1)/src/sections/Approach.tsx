"use client";

import { Reveal } from "../components/Reveal";
import { GlassCard, GlowOrb, IconBadge, Kicker, PageMeta } from "../components/ui";
import { UsersIcon, BriefcaseIcon, TrendingUpIcon, ShieldCheckIcon, CompassIcon } from "../components/icons";
import { useLanguage } from "../i18n/LanguageContext";

const approachIcons = [UsersIcon, BriefcaseIcon, TrendingUpIcon, ShieldCheckIcon, CompassIcon];

export function Approach() {
  const { t } = useLanguage();
  const idx = t.sectionIndex.findIndex((s) => s.id === "approach");

  return (
    <section id="approach" className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-black px-6 py-28 text-white sm:px-10 lg:px-16">
      <GlowOrb tone="dark" className="end-10 bottom-0 h-96 w-96" />
      <div className="grain absolute inset-0 opacity-50" />

      <Reveal>
        <Kicker tone="light">{t.approach.kicker}</Kicker>
        <h2 className="mt-8 max-w-2xl font-display text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
          {t.approach.heading}
        </h2>
      </Reveal>

      <div className="relative z-10 mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {t.approach.items.map((item, i) => {
          const Icon = approachIcons[i % approachIcons.length];
          return (
            <Reveal key={item.title} delay={i * 90}>
              <GlassCard tone="dark" className="h-full p-6">
                <IconBadge icon={<Icon />} tone="dark" size="sm" />
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight sm:text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{item.copy}</p>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>

      <PageMeta index={String(idx + 1).padStart(2, "0")} label={t.sectionIndex[idx].label} tone="light" />
    </section>
  );
}
