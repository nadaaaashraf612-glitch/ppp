"use client";

import { Reveal } from "../components/Reveal";
import { GlassCard, GlowOrb, IconBadge, Kicker, PageMeta } from "../components/ui";
import { CrosshairIcon, GemIcon, UsersIcon, RefreshIcon, ShieldCheckIcon } from "../components/icons";
import { useLanguage } from "../i18n/LanguageContext";

const valueIcons = [CrosshairIcon, GemIcon, UsersIcon, RefreshIcon, ShieldCheckIcon];

export function Values() {
  const { t } = useLanguage();
  const idx = t.sectionIndex.findIndex((s) => s.id === "values");

  return (
    <section id="values" className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#fafaf8] px-6 py-28 sm:px-10 lg:px-16">
      <GlowOrb className="end-0 bottom-10 h-80 w-80" />

      <Reveal>
        <Kicker>{t.values.kicker}</Kicker>
        <h2 className="mt-8 max-w-2xl font-display text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
          {t.values.heading}
        </h2>
      </Reveal>

      <div className="relative z-10 mt-14 space-y-4">
        {t.values.items.map((item, i) => {
          const Icon = valueIcons[i % valueIcons.length];
          return (
            <Reveal key={item.title} delay={i * 90}>
              <GlassCard tone="light" className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-8">
                <IconBadge icon={<Icon />} tone="light" />
                <div className="h-px w-full bg-black/10 sm:h-12 sm:w-px" />
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">{item.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-black/65 sm:text-base">{item.copy}</p>
                </div>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>

      <PageMeta index={String(idx + 1).padStart(2, "0")} label={t.sectionIndex[idx].label} />
    </section>
  );
}
