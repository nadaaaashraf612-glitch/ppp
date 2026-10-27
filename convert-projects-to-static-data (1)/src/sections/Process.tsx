"use client";

import { Reveal } from "../components/Reveal";
import { GlassCard, GlowOrb, IconBadge, Kicker, PageMeta } from "../components/ui";
import { SearchIcon, ClipboardIcon, PenToolIcon, CodeIcon, CheckCircleIcon, RocketIcon, RefreshIcon } from "../components/icons";
import { useLanguage } from "../i18n/LanguageContext";

const processIcons = [SearchIcon, ClipboardIcon, PenToolIcon, CodeIcon, CheckCircleIcon, RocketIcon, RefreshIcon];

export function Process() {
  const { t } = useLanguage();
  const idx = t.sectionIndex.findIndex((s) => s.id === "process");

  return (
    <section id="process" className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#fafaf8] px-6 py-28 sm:px-10 lg:px-16">
      <GlowOrb className="-start-10 top-1/3 h-80 w-80" />

      <Reveal>
        <Kicker>{t.process.kicker}</Kicker>
        <h2 className="mt-8 max-w-2xl font-display text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
          {t.process.heading}
        </h2>
      </Reveal>

      <div className="relative z-10 mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {t.process.steps.map((step, i) => {
          const Icon = processIcons[i % processIcons.length];
          return (
            <Reveal key={step.no} delay={i * 80}>
              <GlassCard tone="light" className="h-full p-6">
                <div className="flex items-center justify-between">
                  <IconBadge icon={<Icon />} tone="light" size="sm" />
                  <span className="font-display text-xs text-black/30">{step.no}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight sm:text-xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-black/65">{step.copy}</p>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>

      <PageMeta index={String(idx + 1).padStart(2, "0")} label={t.sectionIndex[idx].label} />
    </section>
  );
}
