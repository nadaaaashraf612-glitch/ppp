"use client";

import { Reveal } from "../components/Reveal";
import { Divider, GlassCard, GlowOrb, IconBadge, Kicker, PageMeta, TagPill } from "../components/ui";
import { HandshakeIcon } from "../components/icons";
import { useLanguage } from "../i18n/LanguageContext";

export function Partner() {
  const { t } = useLanguage();
  const idx = t.sectionIndex.findIndex((s) => s.id === "partner");

  return (
    <section id="partner" className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#fafaf8] px-6 py-28 sm:px-10 lg:px-16">
      <GlowOrb className="end-10 top-10 h-80 w-80" />

      <Reveal>
        <IconBadge icon={<HandshakeIcon />} tone="light" className="mb-6" />
        <Kicker>{t.partner.kicker}</Kicker>
        <h2 className="mt-8 max-w-2xl font-display text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
          {t.partner.heading}
        </h2>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-black/65 sm:text-base">{t.partner.copy}</p>
      </Reveal>

      <Reveal delay={150} className="relative z-10 mt-10">
        <GlassCard tone="light" className="p-7 sm:p-9">
          <div className="flex flex-wrap items-center justify-center gap-3 text-center sm:gap-5">
            {t.partner.equationParts.map((part, i) => (
              <span key={part} className="flex items-center gap-3 sm:gap-5">
                {i > 0 && <span className="font-display text-lg text-black/40">+</span>}
                <span className="font-display text-sm font-medium text-black sm:text-base">{part}</span>
              </span>
            ))}
            <span className="font-display text-lg text-black/40">=</span>
            <span className="font-display text-sm font-semibold text-black sm:text-base">
              {t.partner.equationResult}
            </span>
          </div>
        </GlassCard>
      </Reveal>

      <Divider className="relative z-10 my-14" />

      <Reveal className="relative z-10">
        <Kicker>{t.partner.qualityKicker}</Kicker>
        <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight sm:text-3xl">{t.partner.qualityHeading}</h3>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/65 sm:text-base">{t.partner.qualityCopy}</p>
      </Reveal>

      <Reveal delay={120} className="relative z-10 mt-8 flex flex-wrap gap-3">
        {t.partner.qualityTags.map((tag) => (
          <TagPill key={tag}>{tag}</TagPill>
        ))}
      </Reveal>

      <PageMeta index={String(idx + 1).padStart(2, "0")} label={t.sectionIndex[idx].label} />
    </section>
  );
}
