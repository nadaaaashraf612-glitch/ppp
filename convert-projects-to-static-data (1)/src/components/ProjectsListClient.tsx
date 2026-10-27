"use client";

import Link from "next/link";
import { LanguageProvider, useLanguage } from "../i18n/LanguageContext";
import { Logo } from "./ui";
import { GlobeIcon, DeviceIcon, LinkIcon } from "./icons";
import { ProjectCover } from "./ProjectCover";
import type { Project as ProjectRow } from "@/data/projects";

function ListBody({ projects }: { projects: ProjectRow[] }) {
  const { lang, toggleLang, dir } = useLanguage();
  const websites = projects.filter((p) => p.category === "website");
  const apps = projects.filter((p) => p.category === "app");

  return (
    <div dir={dir} className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-white/10 bg-black/80 px-6 py-4 backdrop-blur-xl sm:px-10 lg:px-16">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:text-white">
          <span>{dir === "rtl" ? "→" : "←"}</span>
          {lang === "ar" ? "الرئيسية" : "Home"}
        </Link>
        <Logo tone="dark" />
        <button
          type="button"
          onClick={toggleLang}
          className="rounded-full border border-white/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:border-[var(--color-violet)] hover:text-white"
        >
          {lang === "ar" ? "EN" : "AR"}
        </button>
      </header>

      <main className="px-6 py-16 sm:px-10 lg:px-16">
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-violet-accent">
          {lang === "ar" ? "كل الأعمال" : "All Work"}
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {lang === "ar" ? "قائمة كاملة بكل المشاريع والمعاينات الحقيقية" : "Full list of projects with real live previews"}
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base">
          {lang === "ar"
            ? "كل بطاقة هنا تعرض لقطة حقيقية من الصفحة الرئيسية للمشروع داخل موكب متصفح أنيق. اضغط على أي مشروع لعرض التفاصيل أو تحديث صورة المعاينة."
            : "Every card shows a real screenshot of the project's homepage inside an elegant browser mockup. Open any project to view details or refresh its preview."}
        </p>

        <Section title={lang === "ar" ? "المواقع" : "Websites"} icon="globe" items={websites} lang={lang} />
        <Section title={lang === "ar" ? "التطبيقات" : "Apps"} icon="device" items={apps} lang={lang} />
      </main>
    </div>
  );
}

function Section({
  title,
  icon,
  items,
  lang,
}: {
  title: string;
  icon: "globe" | "device";
  items: ProjectRow[];
  lang: "ar" | "en";
}) {
  const Icon = icon === "globe" ? GlobeIcon : DeviceIcon;
  if (items.length === 0) return null;
  return (
    <div className="mt-16 first:mt-10">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[var(--color-gold-soft)]">
          <Icon className="h-4 w-4" />
        </span>
        <h2 className="font-display text-xl font-semibold tracking-tight text-white/90 sm:text-2xl">{title}</h2>
        <span className="h-px flex-1 bg-white/10" />
        <span className="text-[11px] uppercase tracking-[0.2em] text-white/35">{String(items.length).padStart(2, "0")}</span>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((p) => {
          const title2 = lang === "ar" ? p.titleAr : p.titleEn;
          return (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:border-[var(--color-violet)]/50 hover:shadow-[0_30px_60px_-20px_rgba(139,92,246,0.3)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <ProjectCover slug={p.slug} coverImage={p.coverImage} previewStatus={p.previewStatus} title={title2} lang={lang} />
              </div>
              <div className="flex items-center justify-between gap-2 p-4">
                <h3 className="font-display text-sm font-medium leading-snug tracking-tight">{title2}</h3>
                <LinkIcon className="h-3.5 w-3.5 flex-shrink-0 text-white/40 transition group-hover:translate-x-0.5 group-hover:text-[var(--color-gold-soft)]" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function ProjectsListClient({ projects }: { projects: ProjectRow[] }) {
  return (
    <LanguageProvider>
      <ListBody projects={projects} />
    </LanguageProvider>
  );
}
