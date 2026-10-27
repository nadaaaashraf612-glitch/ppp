"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { content, type ContentShape, type Lang } from "./content";

interface LanguageContextValue {
  lang: Lang;
  dir: "ltr" | "rtl";
  t: ContentShape;
  toggleLang: () => void;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "ar";
  const stored = window.localStorage.getItem("puiux-lang");
  if (stored === "en" || stored === "ar") return stored;
  return "ar";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const dir: "ltr" | "rtl" = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.title = content[lang].meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", content[lang].meta.description);
    window.localStorage.setItem("puiux-lang", lang);
  }, [lang, dir]);

  const setLang = (next: Lang) => setLangState(next);
  const toggleLang = () => setLangState((prev) => (prev === "en" ? "ar" : "en"));

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, dir, t: content[lang], toggleLang, setLang }),
    [lang, dir]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
