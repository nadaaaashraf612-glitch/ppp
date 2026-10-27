"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import { useLanguage } from "../i18n/LanguageContext";

export function Logo({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <span className={cn("group inline-flex items-center gap-3", className)}>
      <span
        className={cn(
          "relative flex h-9 w-9 items-center justify-center rounded-xl transition-transform duration-500 group-hover:scale-105",
          tone === "light"
            ? "bg-black shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5)]"
            : "bg-white/10 ring-1 ring-white/20"
        )}
      >
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-[-3px] rounded-[0.85rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100",
            "gold-line"
          )}
          style={{ padding: 1 }}
        />
        <img src="/images/puiux-logo.svg" alt="PUIUX" className="relative z-10 h-4 w-auto" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-sm font-semibold tracking-[0.3em]",
            tone === "light" ? "text-black" : "text-white"
          )}
        >
          PUIUX
        </span>
        <span
          className={cn(
            "mt-1 h-px w-full scale-x-0 transform bg-[var(--color-gold)] transition-transform duration-500 group-hover:scale-x-100",
            tone === "light" ? "origin-left" : "origin-left"
          )}
        />
      </span>
    </span>
  );
}

export function Kicker({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em]",
        className
      )}
    >
      <span
        className={cn(
          "h-px w-8 bg-gradient-to-r from-[var(--color-violet)] to-[var(--color-fuchsia)]",
          tone === "light" && "opacity-90"
        )}
      />
      <span className="text-violet-accent">{children}</span>
    </div>
  );
}

export function PageMeta({
  index,
  label,
  tone = "dark",
}: {
  index: string;
  label: string;
  tone?: "dark" | "light";
}) {
  const { t } = useLanguage();
  const total = String(t.sectionIndex.length).padStart(2, "0");
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-center justify-between px-6 py-5 text-[10px] font-medium uppercase tracking-[0.3em] sm:px-10 lg:px-16",
        tone === "dark" ? "text-black/40" : "text-white/40"
      )}
    >
      <span>PUIUX</span>
      <span className="hidden sm:inline">{label}</span>
      <span>
        {index} / {total}
      </span>
    </div>
  );
}

export function GlassCard({
  children,
  className,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-3xl", tone === "light" ? "glass-light" : "glass-dark", className)}>
      {children}
    </div>
  );
}

export function TagPill({ children, tone = "dark" }: { children: ReactNode; tone?: "dark" | "light" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] transition-colors duration-300 hover:border-[var(--color-violet)]/60 hover:text-[var(--color-violet)]",
        tone === "dark" ? "border-[var(--color-violet)]/15 text-black/70" : "border-[var(--color-violet-soft)]/25 text-white/70"
      )}
    >
      {children}
    </span>
  );
}

export function Divider({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return <div className={cn("h-px w-full", tone === "dark" ? "bg-black/10" : "bg-white/15", className)} />;
}

export function AccentButton({
  href,
  children,
  onClick,
  tone = "light",
  className,
}: {
  href?: string;
  children: ReactNode;
  onClick?: () => void;
  tone?: "light" | "dark";
  className?: string;
}) {
  const classes = cn(
    "group inline-flex items-center gap-3 rounded-full border px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] transition-all duration-300",
    tone === "light"
      ? "border-white/25 text-white hover:border-[var(--color-violet)] hover:bg-white hover:text-black hover:shadow-[0_0_30px_-8px_rgba(139,92,246,0.6)]"
      : "border-black/20 text-black hover:border-black hover:bg-black hover:text-white hover:shadow-[0_0_30px_-8px_rgba(139,92,246,0.45)]",
    className
  );
  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export function GlowOrb({ className, tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  return (
    <span aria-hidden className={cn("pointer-events-none absolute", className)}>
      <motion.span
        className={cn(
          "absolute inset-0 rounded-full blur-3xl",
          tone === "dark" ? "bg-[var(--color-violet)]/25" : "bg-[var(--color-violet)]/[0.14]"
        )}
        animate={{ scale: [1, 1.18, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className={cn(
          "absolute inset-[18%] rounded-full blur-2xl",
          tone === "dark" ? "bg-[var(--color-fuchsia)]/20" : "bg-[var(--color-fuchsia)]/[0.1]"
        )}
        animate={{ scale: [1.1, 0.95, 1.1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />
    </span>
  );
}

export function IconBadge({
  icon,
  tone = "light",
  size = "md",
  withDot = true,
  className,
}: {
  icon: ReactNode;
  tone?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  withDot?: boolean;
  className?: string;
}) {
  const sizes = {
    sm: "h-9 w-9 [&_svg]:h-4 [&_svg]:w-4",
    md: "h-12 w-12 [&_svg]:h-5 [&_svg]:w-5",
    lg: "h-14 w-14 [&_svg]:h-6 [&_svg]:w-6",
  } as const;

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8, y: 6 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      whileHover={{ y: -4, scale: 1.06, rotate: -2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "icon-badge",
        tone === "light" ? "icon-badge-light" : "icon-badge-dark",
        !withDot && "after:hidden",
        sizes[size],
        className
      )}
    >
      <motion.span
        aria-hidden
        className="flex items-center justify-center"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
      >
        {icon}
      </motion.span>
    </motion.span>
  );
}
