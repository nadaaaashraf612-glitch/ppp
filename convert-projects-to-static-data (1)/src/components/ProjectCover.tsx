"use client";

import { cn } from "../utils/cn";

interface ProjectCoverProps {
  slug: string;
  coverImage: string | null;
  previewStatus: string;
  title: string;
  lang: "ar" | "en";
  className?: string;
  imgClassName?: string;
}

/**
 * Renders the real homepage screenshot (already composed inside a browser
 * mockup frame, generated once and bundled as a static asset) for a project.
 * Falls back to an elegant "Preview unavailable" placeholder when the target
 * site could not be captured (down, blocked, requires login, etc.).
 */
export function ProjectCover({
  coverImage,
  previewStatus,
  title,
  lang,
  className,
  imgClassName,
}: ProjectCoverProps) {
  const showFallback = !coverImage || previewStatus === "failed";

  if (showFallback) {
    return (
      <div
        className={cn(
          "relative flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#141418] to-[#0a0a0c] px-6 text-center",
          className
        )}
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/50">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M3 3l18 18M10.5 10.7A3 3 0 0012 15a3 3 0 002.6-1.5M6.3 6.4C4 8 2.5 10 1.8 12c1.6 4 5.6 7 10.2 7 1.7 0 3.3-.4 4.7-1.1M9.9 4.2A10.8 10.8 0 0112 4c4.6 0 8.6 3 10.2 7-.5 1.2-1.1 2.3-2 3.3" />
          </svg>
        </span>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">
          {lang === "ar" ? "المعاينة غير متاحة" : "Preview unavailable"}
        </p>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={coverImage ?? undefined}
      alt={title}
      loading="lazy"
      className={cn("h-full w-full object-cover object-top", imgClassName)}
    />
  );
}
