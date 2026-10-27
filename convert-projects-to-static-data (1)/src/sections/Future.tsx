"use client";

import { Reveal } from "../components/Reveal";
import { Divider, GlassCard, GlowOrb, IconBadge, Kicker, PageMeta } from "../components/ui";
import { BrainIcon, BoltIcon, LayersIcon, RefreshIcon, TrendingUpIcon } from "../components/icons";
import { useLanguage } from "../i18n/LanguageContext";

const futureIcons = [BrainIcon, BoltIcon, LayersIcon, RefreshIcon, TrendingUpIcon];

export function Future() {
  const { t } = useLanguage();
  const idx = t.sectionIndex.findIndex((s) => s.id === "future");

  return (
    <section id="future" className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-black px-6 py-28 text-white sm:px-10 lg:px-16">
      <GlowOrb tone="dark" className="start-0 top-0 h-96 w-96" />
      <div className="grain absolute inset-0 opacity-50" />

      <Reveal>
        <Kicker tone="light">{t.future.kicker}</Kicker>
        <h2 className="mt-8 max-w-2xl font-display text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
          {t.future.heading}
        </h2>
      </Reveal>

      <div className="relative z-10 mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {t.future.items.map((item, i) => {
          const Icon = futureIcons[i % futureIcons.length];
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

      <Divider tone="light" className="relative z-10 my-14" />

      <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <Kicker tone="light">{t.future.partnershipsKicker}</Kicker>
          <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            {t.future.partnershipsHeading}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">{t.future.partnershipsCopy}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-3">
          {t.future.testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 120}>
              <GlassCard tone="dark" className="flex h-full flex-col justify-between p-6 sm:p-7">
                <p className="font-display text-base leading-relaxed text-white/85 sm:text-lg">“{item.quote}”</p>
                <div className="mt-6">
                  <p className="font-display text-sm font-semibold">{item.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/55">{item.role}</p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>

      <PageMeta index={String(idx + 1).padStart(2, "0")} label={t.sectionIndex[idx].label} tone="light" />
    </section>
  );
}
