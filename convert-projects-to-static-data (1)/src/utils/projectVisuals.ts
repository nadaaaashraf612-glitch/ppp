// Visual identity specs used to render realistic browser/mobile mockups for each
// project instead of generic placeholder imagery. Colors and layout choices are
// derived from the real brand/sector of each project.

export type MockupLayout =
  | "charity"
  | "islamic"
  | "corporate"
  | "ecommerce"
  | "travel"
  | "food"
  | "realestate"
  | "health"
  | "finance"
  | "industrial"
  | "events"
  | "figma"
  | "esim"
  | "holding"
  | "education"
  | "appGeneric";

export interface MockupTheme {
  bg: string; // page background
  surface: string; // card/section surface
  primary: string; // primary brand color
  secondary: string; // secondary brand color
  text: string; // heading text color
  muted: string; // muted text color
  mode: "light" | "dark";
}

export interface MockupSpec {
  device: "browser" | "mobile";
  layout: MockupLayout;
  theme: MockupTheme;
}

const dark = (primary: string, secondary: string): MockupTheme => ({
  bg: "#0b0b0d",
  surface: "#15151a",
  primary,
  secondary,
  text: "#f5f5f0",
  muted: "rgba(245,245,240,0.55)",
  mode: "dark",
});

const light = (primary: string, secondary: string): MockupTheme => ({
  bg: "#fbfaf7",
  surface: "#ffffff",
  primary,
  secondary,
  text: "#15151a",
  muted: "rgba(10,10,10,0.5)",
  mode: "light",
});

// Keyed by the project URL as used in content.ts (existing PUIUX work list)
export const existingProjectVisuals: Record<string, MockupSpec> = {
  "puiux.org/green_dinemtions/": { device: "browser", layout: "corporate", theme: light("#2f7d5a", "#bfe3cf") },
  "othaim.puiux.org": { device: "browser", layout: "ecommerce", theme: light("#c8102e", "#ffd9dd") },
  "nawan.co/ar": { device: "browser", layout: "corporate", theme: light("#6d4aff", "#e3dbff") },
  "riyadati.puiux.org": { device: "browser", layout: "education", theme: light("#ef7f1a", "#ffe3c2") },
  "fawq.puiux.org": { device: "browser", layout: "corporate", theme: light("#3451c6", "#dbe3ff") },
  "bdaya.puiux.org": { device: "browser", layout: "health", theme: light("#1f9e93", "#cdf2ee") },
  "ghiam.puiux.org/ar/": { device: "browser", layout: "corporate", theme: light("#2f8fd1", "#d8eefb") },
  "drizoro.puiux.org": { device: "browser", layout: "industrial", theme: dark("#ff7a1a", "#2f6fb5") },
  "rosokh.org.sa": { device: "browser", layout: "charity", theme: light("#2f7d5a", "#cfe9da") },
  "goahead.puiux.org": { device: "browser", layout: "corporate", theme: dark("#8b5cf6", "#2a2a33") },
  "a7bahgirls.com": { device: "browser", layout: "charity", theme: light("#d1548f", "#fbdbe9") },
  "almalhim.com/ar": { device: "browser", layout: "corporate", theme: light("#9a6a34", "#efdcc2") },
  "skys.sa/ar": { device: "browser", layout: "travel", theme: light("#0e7bb5", "#d7f0fb") },
  "beryanbu.org.sa": { device: "browser", layout: "charity", theme: light("#0f8a6b", "#cdeee3") },
  "per-alras.org.sa": { device: "browser", layout: "charity", theme: light("#2f7d5a", "#d8ecd9") },
  "merowe.co": { device: "browser", layout: "realestate", theme: light("#b9802f", "#f3e3c8") },
  "ipmc.puiux.org/ar": { device: "browser", layout: "islamic", theme: dark("#8b5cf6", "#1f5c42") },
  "manasek.puiux.org/en": { device: "browser", layout: "islamic", theme: light("#1f5c42", "#dcefe2") },
  "aplus.puiux.org": { device: "browser", layout: "corporate", theme: light("#2456c7", "#dbe6ff") },
  "ams.puiux.org": { device: "browser", layout: "corporate", theme: dark("#8891a3", "#1c1f26") },
  "puiux.org/sana/": { device: "browser", layout: "health", theme: light("#c9748f", "#f8e2e8") },
  "seu.puiux.org": { device: "browser", layout: "education", theme: light("#0f7a4a", "#d6efdd") },
  "gtel.puiux.org": { device: "browser", layout: "finance", theme: dark("#20c3d6", "#17384a") },
  "app-1-eta-ruddy.vercel.app": { device: "mobile", layout: "appGeneric", theme: light("#2f6fd6", "#dbe6ff") },
  "azbah-preview.vercel.app": { device: "mobile", layout: "appGeneric", theme: light("#3c8a4e", "#d9efdd") },
  "mycoach-1ce80b56.puiux.live": { device: "mobile", layout: "appGeneric", theme: dark("#ff7a1a", "#1c1c20") },
  "ithraa-eltafawoq-app.vercel.app": { device: "mobile", layout: "appGeneric", theme: light("#6d4aff", "#e4dcff") },
};

export interface SignatureProject {
  id: string;
  titleAr: string;
  titleEn: string;
  url: string;
  groupAr: string;
  groupEn: string;
  spec: MockupSpec;
}

// The 15 requested projects researched individually and organised creatively
// into five identity-driven clusters.
export const signatureProjects: SignatureProject[] = [
  // Cluster 1 — Community & Charity Impact
  {
    id: "beryanbu",
    titleAr: "جمعية البر بينبع",
    titleEn: "Al-Bir Society — Yanbu",
    url: "beryanbu.org.sa",
    groupAr: "الأثر المجتمعي والخيري",
    groupEn: "Community & Charity Impact",
    spec: { device: "browser", layout: "charity", theme: light("#0f8a6b", "#cdeee3") },
  },
  {
    id: "ncd-sa",
    titleAr: "جمعية التنمية الأهلية بعنيزة",
    titleEn: "National Community Development — Onaizah",
    url: "ncd-sa.com",
    groupAr: "الأثر المجتمعي والخيري",
    groupEn: "Community & Charity Impact",
    spec: { device: "browser", layout: "charity", theme: light("#2f6b8f", "#d8ebf4") },
  },
  {
    id: "charity-puiux",
    titleAr: "الجمعية الخيرية لتحفيظ القرآن الكريم",
    titleEn: "Quran Memorization Charity Association",
    url: "charity.puiux.org/ar/",
    groupAr: "الأثر المجتمعي والخيري",
    groupEn: "Community & Charity Impact",
    spec: { device: "browser", layout: "islamic", theme: light("#1f5c42", "#e3d9b8") },
  },
  // Cluster 2 — Health, Travel & Lifestyle
  {
    id: "healthcommunity",
    titleAr: "هيلث كوميونيتي",
    titleEn: "Health Community",
    url: "healthcommunity.sa",
    groupAr: "الصحة والسفر ونمط الحياة",
    groupEn: "Health, Travel & Lifestyle",
    spec: { device: "mobile", layout: "health", theme: light("#1f9e93", "#cdf2ee") },
  },
  {
    id: "skys",
    titleAr: "سكايز لحجوزات الفنادق",
    titleEn: "SKYS Hotel Booking",
    url: "skys.sa/en",
    groupAr: "الصحة والسفر ونمط الحياة",
    groupEn: "Health, Travel & Lifestyle",
    spec: { device: "browser", layout: "travel", theme: light("#0e7bb5", "#d7f0fb") },
  },
  {
    id: "hamburgini",
    titleAr: "هامبرجيني",
    titleEn: "Hamburgini",
    url: "front.puiux.org/Hamburgini/index.php",
    groupAr: "الصحة والسفر ونمط الحياة",
    groupEn: "Health, Travel & Lifestyle",
    spec: { device: "browser", layout: "food", theme: dark("#ffb020", "#c8102e") },
  },
  // Cluster 3 — Holdings & Investment
  {
    id: "abusarhad",
    titleAr: "أبو سرهد القابضة",
    titleEn: "Abu Sarhad Holding",
    url: "abusarhadhc.sa",
    groupAr: "القابضات والاستثمار",
    groupEn: "Holdings & Investment",
    spec: { device: "browser", layout: "holding", theme: dark("#8b5cf6", "#13263f") },
  },
  {
    id: "mahg",
    titleAr: "مباني الجزيرة القابضة",
    titleEn: "Mabani Aljazeera Holding",
    url: "mahg.com.sa",
    groupAr: "القابضات والاستثمار",
    groupEn: "Holdings & Investment",
    spec: { device: "browser", layout: "holding", theme: dark("#20c3d6", "#0d2233") },
  },
  {
    id: "mfoundm",
    titleAr: "مؤسسة محمد بن عبدالعزيز آل سعود",
    titleEn: "Mohammed Al Saud Foundation",
    url: "mfoundm.com",
    groupAr: "القابضات والاستثمار",
    groupEn: "Holdings & Investment",
    spec: { device: "browser", layout: "finance", theme: dark("#8b5cf6", "#101a33") },
  },
  // Cluster 4 — Real Estate & Premium Craft
  {
    id: "ehtazem",
    titleAr: "احتزم",
    titleEn: "Ehtazem",
    url: "ehtazem.com",
    groupAr: "العقار والحرفية الفاخرة",
    groupEn: "Real Estate & Premium Craft",
    spec: { device: "browser", layout: "realestate", theme: light("#0f8a6b", "#e3d9b8") },
  },
  {
    id: "tiraz",
    titleAr: "طراز العربية للتطوير العقاري",
    titleEn: "Tiraz Al-Arabia",
    url: "tiraz.com.sa",
    groupAr: "العقار والحرفية الفاخرة",
    groupEn: "Real Estate & Premium Craft",
    spec: { device: "browser", layout: "realestate", theme: light("#9a6a34", "#efdcc2") },
  },
  {
    id: "uvi",
    titleAr: "فيجن المتحدة للصناعة",
    titleEn: "United Vision Industry (Doors)",
    url: "uvi.sa",
    groupAr: "العقار والحرفية الفاخرة",
    groupEn: "Real Estate & Premium Craft",
    spec: { device: "browser", layout: "industrial", theme: dark("#8b5cf6", "#241a12") },
  },
  // Cluster 5 — Tech Platforms & Innovation
  {
    id: "eventa",
    titleAr: "إيفينتا لتنظيم الفعاليات",
    titleEn: "Eventa Events & Exhibitions",
    url: "eventa.com.sa",
    groupAr: "منصات تقنية ومبتكرة",
    groupEn: "Tech Platforms & Innovation",
    spec: { device: "browser", layout: "events", theme: dark("#8b5cf6", "#15151a") },
  },
  {
    id: "figma-prototype",
    titleAr: "نموذج تفاعلي — Figma Sites",
    titleEn: "Interactive Prototype — Figma Sites",
    url: "parse-create-00055751.figma.site",
    groupAr: "منصات تقنية ومبتكرة",
    groupEn: "Tech Platforms & Innovation",
    spec: { device: "browser", layout: "figma", theme: dark("#a855f7", "#38bdf8") },
  },
  {
    id: "dev-puiux",
    titleAr: "منصة تجريبية — eSIM",
    titleEn: "PUIUX Dev — eSIM Marketplace",
    url: "dev.puiux.org",
    groupAr: "منصات تقنية ومبتكرة",
    groupEn: "Tech Platforms & Innovation",
    spec: { device: "mobile", layout: "esim", theme: dark("#6d4aff", "#1c1430") },
  },
];

// Deterministic fallback for any project without an explicit spec.
export function fallbackSpec(title: string): MockupSpec {
  const palette: [string, string][] = [
    ["#2f7d5a", "#bfe3cf"],
    ["#3451c6", "#dbe3ff"],
    ["#8b5cf6", "#2a2a33"],
    ["#0e7bb5", "#d7f0fb"],
    ["#b9802f", "#f3e3c8"],
  ];
  let hash = 0;
  for (let i = 0; i < title.length; i += 1) hash = (hash * 31 + title.charCodeAt(i)) >>> 0;
  const [primary, secondary] = palette[hash % palette.length];
  return { device: "browser", layout: "corporate", theme: light(primary, secondary) };
}
