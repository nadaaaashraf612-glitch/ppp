"use client";

import { Reveal } from "../components/Reveal";
import { GlassCard, GlowOrb, IconBadge, Kicker, PageMeta, TagPill } from "../components/ui";
import {
  PenToolIcon,
  CodeIcon,
  DeviceIcon,
  CartIcon,
  CloudIcon,
  SettingsIcon,
  BrainIcon,
  PaletteIcon,
} from "../components/icons";
import { useLanguage } from "../i18n/LanguageContext";

const serviceIcons = [PenToolIcon, CodeIcon, DeviceIcon, CartIcon, CloudIcon, SettingsIcon, BrainIcon, PaletteIcon];

export function Services() {
  const { t } = useLanguage();
  const idx = t.sectionIndex.findIndex((s) => s.id === "services");

  return (
    <section id="services" className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-black px-6 py-28 text-white sm:px-10 lg:px-16">
      <GlowOrb tone="dark" className="end-1/4 -top-10 h-96 w-96" />
      <div className="grain absolute inset-0 opacity-50" />

      <Reveal>
        <Kicker tone="light">{t.services.kicker}</Kicker>
        <h2 className="mt-8 max-w-2xl font-display text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
          {t.services.heading}
        </h2>
      </Reveal>

      <div className="relative z-10 mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {t.services.items.map((s, i) => {
          const Icon = serviceIcons[i % serviceIcons.length];
          return (
            <Reveal key={s.title} delay={(i % 2) * 100}>
              <GlassCard tone="dark" className="h-full p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <IconBadge icon={<Icon />} tone="dark" size="sm" />
                  <span className="font-display text-xs text-white/35">{s.no}</span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{s.copy}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <TagPill key={tag} tone="light">
                      {tag}
                    </TagPill>
                  ))}
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
