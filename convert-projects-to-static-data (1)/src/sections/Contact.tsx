"use client";

import { useState, type FC } from "react";
import { Reveal } from "../components/Reveal";
import { Divider, GlassCard, GlowOrb, Kicker } from "../components/ui";
import { useLanguage } from "../i18n/LanguageContext";
import {
  BankIcon,
  BehanceIcon,
  CopyIcon,
  FacebookIcon,
  GlobeIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  XIcon,
} from "../components/icons";

const socialIcons: Record<string, FC<{ className?: string }>> = {
  Facebook: FacebookIcon,
  "فيسبوك": FacebookIcon,
  "X (Twitter)": XIcon,
  "إكس (تويتر)": XIcon,
  Instagram: InstagramIcon,
  "إنستغرام": InstagramIcon,
  Behance: BehanceIcon,
  "بيهانس": BehanceIcon,
};

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        } catch {
          setCopied(false);
        }
      }}
      className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-white/20 text-white/50 transition-all duration-300 hover:scale-110 hover:border-white hover:text-white"
      aria-label="Copy"
    >
      {copied ? <span className="text-[10px] font-semibold text-white">✓</span> : <CopyIcon className="h-3.5 w-3.5" />}
    </button>
  );
}

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-black px-6 pb-10 pt-28 text-white sm:px-10 lg:px-16">
      <GlowOrb tone="dark" className="end-10 top-10 h-96 w-96" />
      <div className="grain absolute inset-0 opacity-40" />

      <div className="relative z-10">
        <Reveal>
          <Kicker tone="light">{t.contact.kicker}</Kicker>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-10 max-w-3xl font-display text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
            {t.contact.heading}
          </h2>
          <p className="mt-4 font-display text-lg text-white/60 sm:text-xl">{t.contact.subheading}</p>
        </Reveal>

        <Divider tone="light" className="my-14" />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <Reveal delay={150} className="lg:col-span-3 space-y-5">
            <GlassCard tone="dark" className="group flex items-center gap-4 p-5 transition-transform duration-300 hover:-translate-y-1">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-transform duration-300 group-hover:scale-105">
                <MailIcon className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">{t.contact.emailLabel}</p>
                <a href={`mailto:${t.contact.email}`} className="mt-1 block truncate text-base font-medium text-white hover:underline">
                  {t.contact.email}
                </a>
              </div>
              <CopyButton value={t.contact.email} />
            </GlassCard>

            <GlassCard tone="dark" className="group flex items-center gap-4 p-5 transition-transform duration-300 hover:-translate-y-1">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-transform duration-300 group-hover:scale-105">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">{t.contact.phoneLabel}</p>
                <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1" dir="ltr">
                  {t.contact.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone}`} className="text-base font-medium text-white hover:underline">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </GlassCard>

            <GlassCard tone="dark" className="group flex items-center gap-4 p-5 transition-transform duration-300 hover:-translate-y-1">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-transform duration-300 group-hover:scale-105">
                <GlobeIcon className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">{t.contact.websiteLabel}</p>
                <a href="https://www.puiux.com" target="_blank" rel="noreferrer" className="mt-1 block text-base font-medium text-white hover:underline">
                  {t.contact.website}
                </a>
              </div>
            </GlassCard>

            <GlassCard tone="dark" className="group flex items-center gap-4 p-5 transition-transform duration-300 hover:-translate-y-1">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-transform duration-300 group-hover:scale-105">
                <GlobeIcon className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">{t.contact.ourWorkLabel}</p>
                <a href={t.contact.ourWorkUrl} target="_blank" rel="noreferrer" className="mt-1 block truncate text-base font-medium text-white hover:underline">
                  {t.contact.ourWorkUrl}
                </a>
              </div>
            </GlassCard>

            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-white/40">{t.contact.socialLabel}</p>
              <div className="flex flex-wrap gap-3">
                {t.contact.social.map((s) => {
                  const Icon = socialIcons[s.name] ?? GlobeIcon;
                  return (
                    <a
                      key={s.url}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3 rounded-full border border-white/15 px-4 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white"
                    >
                      <Icon className="h-4 w-4 text-white/70 transition-transform duration-300 group-hover:scale-110 group-hover:text-white" />
                      <span className="text-xs font-medium text-white/70 transition group-hover:text-white">{s.handle}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={250} className="lg:col-span-2">
            <GlassCard tone="dark" className="h-full p-6 sm:p-8 glow-ring">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white">
                  <BankIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-white">{t.contact.bankTitle}</h3>
                  <p className="text-xs text-white/40">{t.contact.bankSubtitle}</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {t.contact.bankFields.map((f) => (
                  <div key={f.label} className="flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">{f.label}</p>
                      <p className="mt-1 truncate font-display text-sm font-medium text-white sm:text-base" dir="ltr" style={{ unicodeBidi: "plaintext" }}>
                        {f.value}
                      </p>
                    </div>
                    <CopyButton value={f.value} />
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>

      <div className="relative z-10 mt-20 flex flex-col gap-4 border-t border-white/10 pt-8 text-[11px] uppercase tracking-[0.3em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <span className="flex items-center gap-3 font-display text-sm tracking-[0.3em] text-white">
          <img src="/images/puiux-logo.svg" alt="PUIUX" className="h-5 w-auto" />
        </span>
        <span>{t.contact.footerLine}</span>
        <span>© {new Date().getFullYear()} PUIUX. {t.contact.rights}</span>
      </div>
    </section>
  );
}
