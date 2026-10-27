"use client";

import { Reveal } from "../components/Reveal";
import { GlowOrb } from "../components/ui";
import { useLanguage } from "../i18n/LanguageContext";

export function FinalClosing() {
  const { t } = useLanguage();

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-[#fafaf8] px-6 py-24 text-center sm:px-10">
      <GlowOrb tone="light" className="start-1/2 top-0 h-80 w-80 -translate-x-1/2" />

      <Reveal>
        <img src="/images/puiux-logo-dark.svg" alt="PUIUX" className="mx-auto h-9 w-auto" />
      </Reveal>
      <Reveal delay={100}>
        <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight sm:text-3xl">{t.closing.tagline}</h3>
      </Reveal>
      <Reveal delay={180}>
        <p className="mt-3 text-xs uppercase tracking-[0.3em] text-black/45">{t.closing.studioLine}</p>
      </Reveal>
      <Reveal delay={240}>
        <a
          href="https://www.puiux.com"
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-block font-display text-sm text-black hover:underline"
        >
          {t.closing.website}
        </a>
      </Reveal>
      <Reveal delay={300}>
        <p className="mt-10 font-display text-lg font-semibold tracking-tight">{t.closing.thankYou}</p>
      </Reveal>
    </section>
  );
}
