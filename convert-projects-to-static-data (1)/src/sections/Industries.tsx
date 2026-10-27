"use client";

import { ParallaxLayer } from "../components/Parallax";
import { Reveal } from "../components/Reveal";
import { GlassCard, GlowOrb, IconBadge, Kicker, PageMeta } from "../components/ui";
import {
  HomeIcon,
  HeartPulseIcon,
  GraduationCapIcon,
  HotelIcon,
  PlaneIcon,
  UtensilsIcon,
  FactoryIcon,
  CartIcon,
  BriefcaseIcon,
  LandmarkIcon,
  CpuIcon,
  HandshakeIcon,
} from "../components/icons";
import { useLanguage } from "../i18n/LanguageContext";

const industryIcons = [
  HomeIcon,
  HeartPulseIcon,
  GraduationCapIcon,
  HotelIcon,
  PlaneIcon,
  UtensilsIcon,
  FactoryIcon,
  CartIcon,
  BriefcaseIcon,
  LandmarkIcon,
  CpuIcon,
  HandshakeIcon,
];

export function Industries() {
  const { t } = useLanguage();
  const idx = t.sectionIndex.findIndex((s) => s.id === "industries");

  return (
    <section id="industries" className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-black px-6 py-28 text-white sm:px-10 lg:px-16">
      {/* Soft parallax collage of industry imagery, kept subtle behind the grid */}
      <ParallaxLayer speed={0.1} className="pointer-events-none absolute inset-0 opacity-[0.16]">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: "url(/images/industry-corporate.jpg)" }}
        />
      </ParallaxLayer>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      <GlowOrb tone="dark" className="end-0 top-0 h-96 w-96" />
      <div className="grain absolute inset-0 opacity-50" />

      <Reveal className="relative z-10">
        <Kicker tone="light">{t.industries.kicker}</Kicker>
        <h2 className="mt-8 max-w-2xl font-display text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
          {t.industries.heading}
        </h2>
      </Reveal>

      <div className="relative z-10 mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {t.industries.items.map((item, i) => {
          const Icon = industryIcons[i % industryIcons.length];
          return (
            <Reveal key={item} delay={i * 50}>
              <GlassCard
                tone="dark"
                className="group flex h-28 flex-col items-center justify-center gap-2 p-4 text-center transition-all duration-500 hover:ring-1 hover:ring-[var(--color-gold)]/40"
              >
                <IconBadge icon={<Icon />} tone="dark" size="sm" withDot={false} />
                <span className="font-display text-sm font-medium transition-colors duration-300 group-hover:text-[var(--color-gold-soft)] sm:text-base">
                  {item}
                </span>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={200} className="relative z-10 mt-10 max-w-3xl">
        <p className="text-sm leading-relaxed text-white/60 sm:text-base">{t.industries.copy}</p>
      </Reveal>

      <PageMeta index={String(idx + 1).padStart(2, "0")} label={t.sectionIndex[idx].label} tone="light" />
    </section>
  );
}
