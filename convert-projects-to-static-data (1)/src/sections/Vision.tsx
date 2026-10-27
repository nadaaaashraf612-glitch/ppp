"use client";

import { Reveal } from "../components/Reveal";
import { Divider, GlassCard, GlowOrb, IconBadge, Kicker, PageMeta } from "../components/ui";
import { EyeIcon, TargetIcon } from "../components/icons";
import { useLanguage } from "../i18n/LanguageContext";

export function Vision() {
  const { t } = useLanguage();
  const idx = t.sectionIndex.findIndex((s) => s.id === "vision");
  const plus = "+";

  return (
    <section id="vision" className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#fafaf8] px-6 py-28 sm:px-10 lg:px-16">
      <GlowOrb className="start-1/3 top-0 h-80 w-80" />

      <Reveal>
        <Kicker>{t.vision.kicker}</Kicker>
      </Reveal>

      <div className="relative z-10 mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Reveal>
          <GlassCard tone="light" className="h-full p-8 sm:p-10">
            <IconBadge icon={<EyeIcon />} tone="light" />
            <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-black sm:text-3xl">
              {t.vision.visionTitle}
            </h3>
            <p className="mt-6 text-base leading-relaxed text-black/75 sm:text-lg">{t.vision.visionCopy}</p>
          </GlassCard>
        </Reveal>
        <Reveal delay={150}>
          <GlassCard tone="light" className="h-full p-8 sm:p-10">
            <IconBadge icon={<TargetIcon />} tone="light" />
            <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-black sm:text-3xl">
              {t.vision.missionTitle}
            </h3>
            <p className="mt-6 text-base leading-relaxed text-black/75 sm:text-lg">{t.vision.missionCopy}</p>
          </GlassCard>
        </Reveal>
      </div>

      <Reveal delay={250} className="relative z-10 mt-10">
        <GlassCard tone="light" className="p-7 sm:p-9">
          <Divider className="mb-6" />
          <div className="flex flex-wrap items-center justify-center gap-4 text-center sm:gap-6">
            {t.vision.equationParts.map((part, i) => (
              <span key={part} className="flex items-center gap-4 sm:gap-6">
                {i > 0 && <span className="font-display text-xl text-black/40">{plus}</span>}
                <span className="font-display text-base font-medium text-black sm:text-lg">{part}</span>
              </span>
            ))}
            <span className="font-display text-xl text-black/40">=</span>
            <span className="font-display text-base font-semibold text-black sm:text-lg">
              {t.vision.equationResult}
            </span>
          </div>
        </GlassCard>
      </Reveal>

      <PageMeta index={String(idx + 1).padStart(2, "0")} label={t.sectionIndex[idx].label} />
    </section>
  );
}
