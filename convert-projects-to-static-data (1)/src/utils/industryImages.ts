import {
  BriefcaseIcon,
  CpuIcon,
  GraduationCapIcon,
  HeartPulseIcon,
  HomeIcon,
  HotelIcon,
} from "../components/icons";
import type { ComponentType, SVGProps } from "react";

export type IndustryKey = "realestate" | "healthcare" | "hospitality" | "education" | "corporate" | "tech";

export interface IndustryVisual {
  key: IndustryKey;
  image: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  labelEn: string;
  labelAr: string;
  shade: string;
}

export const industryVisuals: Record<IndustryKey, IndustryVisual> = {
  realestate: {
    key: "realestate",
    image: "/images/industry-realestate.jpg",
    icon: HomeIcon,
    labelEn: "Real Estate",
    labelAr: "العقارات",
    shade: "#1c1c22",
  },
  healthcare: {
    key: "healthcare",
    image: "/images/industry-healthcare.jpg",
    icon: HeartPulseIcon,
    labelEn: "Healthcare",
    labelAr: "الرعاية الصحية",
    shade: "#1a1f26",
  },
  hospitality: {
    key: "hospitality",
    image: "/images/industry-hospitality.jpg",
    icon: HotelIcon,
    labelEn: "Hospitality & Lifestyle",
    labelAr: "الضيافة ونمط الحياة",
    shade: "#211f2a",
  },
  education: {
    key: "education",
    image: "/images/industry-education.jpg",
    icon: GraduationCapIcon,
    labelEn: "Education & Non-profit",
    labelAr: "التعليم والعمل الخيري",
    shade: "#20212b",
  },
  corporate: {
    key: "corporate",
    image: "/images/industry-corporate.jpg",
    icon: BriefcaseIcon,
    labelEn: "Corporate & Government",
    labelAr: "الشركات والجهات الحكومية",
    shade: "#1e2228",
  },
  tech: {
    key: "tech",
    image: "/images/industry-tech.jpg",
    icon: CpuIcon,
    labelEn: "Technology & E-Commerce",
    labelAr: "التقنية والتجارة الإلكترونية",
    shade: "#232024",
  },
};

export const industryOrder: IndustryKey[] = ["realestate", "healthcare", "hospitality", "education", "corporate", "tech"];

/** Deterministically assigns an industry visual based on a string key (project name/index). */
export function pickIndustry(seed: string | number): IndustryVisual {
  const str = String(seed);
  let hash = 0;
  for (let i = 0; i < str.length; i++) hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  const key = industryOrder[hash % industryOrder.length];
  return industryVisuals[key];
}

const keywordMap: { pattern: RegExp; key: IndustryKey }[] = [
  { pattern: /(hotel|hospitality|hospitalit|resort|fundicum|nail|spa|bride|wedding|fawzia|asiri|sky\b|سكاى|^sky$)/i, key: "hospitality" },
  { pattern: /(travel|tourism|skys|tourisme|hajj|pilgrim|mutawif|manasek|hogag|eran|سفر|سياح|حجاج|مطوفى|مناسك)/i, key: "hospitality" },
  { pattern: /(health|hospital|medical|clinic|صحة|مستشفى)/i, key: "healthcare" },
  { pattern: /(real estate|developments|realty|tiraz|othaim|عقار|^تطوير$)/i, key: "realestate" },
  { pattern: /(education|academy|school|university|foundation|charity|quran|memorization|miftah|bidaya|osos|jaffa|pioneers|rosokh|yanbu|al-ras|al bir|seu|electronic university|gtel|global trends forum|تعليم|جامعة|خيري|وقف|رسوخ|جمعية|بر ينبع|بالرس|التوجهات العالمية|الجامعة الالكترونية)/i, key: "education" },
  { pattern: /(industrial|factory|manufactur|vision industrial|مصنع|صناع)/i, key: "corporate" },
  { pattern: /(gov|ministry|pcbs|holding|group|abu sarhad|mahg|methods|tatweer|eventa|merowe|go ahead|goahead|logistic|sana\b|al-malhim|almalhim|حكوم|مجموعة|قابضة|مروى|جو أهيد|لوجستي|سنا|ملحم)/i, key: "corporate" },
  { pattern: /(tech|platform|app|software|aquaculture|expert key|fawq|colab|dev\.|onet|hamburgini|riyadati|5 points|a plus|^a\+$|aplus|^ams$|ithraa|eltafawoq|ahbah|تقنية|منصة|اثراء التفوق|بنات الأحبة)/i, key: "tech" },
];

/** Guesses an industry from a project / client name using keyword heuristics, falling back to a stable hash. */
export function guessIndustry(title: string): IndustryVisual {
  for (const { pattern, key } of keywordMap) {
    if (pattern.test(title)) return industryVisuals[key];
  }
  return pickIndustry(title);
}
