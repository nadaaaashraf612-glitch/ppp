// One-off/offline tool: builds the static project list (src/data/projects.ts)
// used by the "Projects" section of the PUIUX profile, together with REAL
// screenshot covers (captured with Puppeteer, wrapped in a browser/phone
// mockup, exactly like the previous DB-backed pipeline) saved as static files
// under public/covers. No database or API route is required at runtime
// anymore — this script only needs to be re-run manually if the project list
// or the target sites change.
import fs from "node:fs/promises";
import path from "node:path";
import puppeteer from "puppeteer";

const COVERS_DIR = path.join(process.cwd(), "public", "covers");
const NAV_TIMEOUT = 15000;
const DESKTOP_VIEWPORT = { width: 1920, height: 1080 };
const MOBILE_VIEWPORT = { width: 414, height: 896 };
const CONCURRENCY = 5;

// Main work list (title/url/category), EN + AR, in the exact order shown on
// the website. Source: src/i18n/content.ts
const mainEn = [
  { title: "Green Dimensions", url: "puiux.org/green_dinemtions/", category: "website" },
  { title: "AL-Othaim", url: "othaim.puiux.org", category: "website" },
  { title: "Nawan", url: "nawan.co/ar", category: "website" },
  { title: "Riyadati", url: "riyadati.puiux.org", category: "website" },
  { title: "Fawq", url: "fawq.puiux.org", category: "website" },
  { title: "Bdaya", url: "bdaya.puiux.org", category: "website" },
  { title: "Ghaim", url: "ghiam.puiux.org/ar/", category: "website" },
  { title: "Drizoro", url: "drizoro.puiux.org", category: "website" },
  { title: "Rosokh", url: "rosokh.org.sa", category: "website" },
  { title: "Go Ahead", url: "goahead.puiux.org", category: "website" },
  { title: "Ahbahgirls", url: "a7bahgirls.com", category: "website" },
  { title: "Al-Malhim", url: "almalhim.com/ar", category: "website" },
  { title: "SKY", url: "skys.sa/ar", category: "website" },
  { title: "Al-Bir Charity Society — Yanbu", url: "beryanbu.org.sa", category: "website" },
  { title: "Al-Bir Charity Society — Al-Ras", url: "per-alras.org.sa", category: "website" },
  { title: "Merowe", url: "merowe.co", category: "website" },
  { title: "Iran Hajj Pilgrims Mutawifs", url: "ipmc.puiux.org/ar", category: "website" },
  { title: "Manasek", url: "manasek.puiux.org/en", category: "website" },
  { title: "A PLUS", url: "aplus.puiux.org", category: "website" },
  { title: "AMS", url: "ams.puiux.org", category: "website" },
  { title: "Sana", url: "puiux.org/sana/", category: "website" },
  { title: "Saudi Electronic University", url: "seu.puiux.org", category: "website" },
  { title: "GTEL", url: "gtel.puiux.org", category: "website" },
  { title: "Sfoof App", url: "app-1-eta-ruddy.vercel.app", category: "app" },
  { title: "AL-Ezbah App", url: "azbah-preview.vercel.app", category: "app" },
  { title: "My Coach App", url: "mycoach-1ce80b56.puiux.live", category: "app" },
  { title: "Ithraa Al-Tafawoq App", url: "ithraa-eltafawoq-app.vercel.app", category: "app" },
];

const mainAr = [
  "الأبعاد الخضراء", "العثيم", "ناوان", "رياضتى", "فوق", "بداية", "غيم", "درايزورو",
  "رسوخ", "جو أهيد", "بنات الأحبة", "أل ملحم", "سكاى", "جمعية البر بينبع",
  "جمعية البر الأهلية بالرس", "مروى", "مطوفى حجاج ايران", "مناسك المشاعر", "A+", "AMS",
  "سنا", "الجامعة الالكترونية السعودية", "GTEL", "تطبيق صفوف", "تطبيق العزبة",
  "تطبيق ماى كوتش", "تطبيق اثراء التفوق",
];

const main = mainEn.map((p, i) => ({ ...p, titleAr: mainAr[i] }));

// Signature collaborations list. Source: src/utils/projectVisuals.ts
const signature = [
  { titleAr: "جمعية البر بينبع", titleEn: "Al-Bir Society — Yanbu", url: "beryanbu.org.sa", groupAr: "الأثر المجتمعي والخيري", groupEn: "Community & Charity Impact", device: "browser" },
  { titleAr: "جمعية التنمية الأهلية بعنيزة", titleEn: "National Community Development — Onaizah", url: "ncd-sa.com", groupAr: "الأثر المجتمعي والخيري", groupEn: "Community & Charity Impact", device: "browser" },
  { titleAr: "الجمعية الخيرية لتحفيظ القرآن الكريم", titleEn: "Quran Memorization Charity Association", url: "charity.puiux.org/ar/", groupAr: "الأثر المجتمعي والخيري", groupEn: "Community & Charity Impact", device: "browser" },
  { titleAr: "هيلث كوميونيتي", titleEn: "Health Community", url: "healthcommunity.sa", groupAr: "الصحة والسفر ونمط الحياة", groupEn: "Health, Travel & Lifestyle", device: "mobile" },
  { titleAr: "سكايز لحجوزات الفنادق", titleEn: "SKYS Hotel Booking", url: "skys.sa/en", groupAr: "الصحة والسفر ونمط الحياة", groupEn: "Health, Travel & Lifestyle", device: "browser" },
  { titleAr: "هامبرجيني", titleEn: "Hamburgini", url: "front.puiux.org/Hamburgini/index.php", groupAr: "الصحة والسفر ونمط الحياة", groupEn: "Health, Travel & Lifestyle", device: "browser" },
  { titleAr: "أبو سرهد القابضة", titleEn: "Abu Sarhad Holding", url: "abusarhadhc.sa", groupAr: "القابضات والاستثمار", groupEn: "Holdings & Investment", device: "browser" },
  { titleAr: "مباني الجزيرة القابضة", titleEn: "Mabani Aljazeera Holding", url: "mahg.com.sa", groupAr: "القابضات والاستثمار", groupEn: "Holdings & Investment", device: "browser" },
  { titleAr: "مؤسسة محمد بن عبدالعزيز آل سعود", titleEn: "Mohammed Al Saud Foundation", url: "mfoundm.com", groupAr: "القابضات والاستثمار", groupEn: "Holdings & Investment", device: "browser" },
  { titleAr: "احتزم", titleEn: "Ehtazem", url: "ehtazem.com", groupAr: "العقار والحرفية الفاخرة", groupEn: "Real Estate & Premium Craft", device: "browser" },
  { titleAr: "طراز العربية للتطوير العقاري", titleEn: "Tiraz Al-Arabia", url: "tiraz.com.sa", groupAr: "العقار والحرفية الفاخرة", groupEn: "Real Estate & Premium Craft", device: "browser" },
  { titleAr: "فيجن المتحدة للصناعة", titleEn: "United Vision Industry (Doors)", url: "uvi.sa", groupAr: "العقار والحرفية الفاخرة", groupEn: "Real Estate & Premium Craft", device: "browser" },
  { titleAr: "إيفينتا لتنظيم الفعاليات", titleEn: "Eventa Events & Exhibitions", url: "eventa.com.sa", groupAr: "منصات تقنية ومبتكرة", groupEn: "Tech Platforms & Innovation", device: "browser" },
  { titleAr: "نموذج تفاعلي — Figma Sites", titleEn: "Interactive Prototype — Figma Sites", url: "parse-create-00055751.figma.site", groupAr: "منصات تقنية ومبتكرة", groupEn: "Tech Platforms & Innovation", device: "browser" },
  { titleAr: "منصة تجريبية — eSIM", titleEn: "PUIUX Dev — eSIM Marketplace", url: "dev.puiux.org", groupAr: "منصات تقنية ومبتكرة", groupEn: "Tech Platforms & Innovation", device: "mobile" },
];

function normalizeUrl(url) {
  return url
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/+$/, "");
}

function slugify(text) {
  return text
    .toString()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function toAbsoluteUrl(url) {
  return url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
}

function escapeHtml(input) {
  return input.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

const INTRO_KEYWORDS = [
  "تخطي", "ابدأ", "دخول", "متابعة", "استمرار", "التالي",
  "Skip", "Get Started", "Continue", "Start", "Enter", "Next",
];

async function dismissIntroScreens(page) {
  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      const clicked = await page.evaluate((keywords) => {
        const candidates = Array.from(
          document.querySelectorAll("button, a, [role='button'], [class*='skip'], [class*='next']")
        );
        const match = candidates.find((el) => {
          const text = (el.textContent || "").trim();
          return text.length > 0 && text.length < 30 && keywords.some((k) => text.includes(k));
        });
        if (match) {
          match.click();
          return true;
        }
        return false;
      }, INTRO_KEYWORDS);
      if (!clicked) break;
      await new Promise((r) => setTimeout(r, 1200));
    } catch {
      break;
    }
  }
}

async function captureViewportShot(browser, url, viewport, isApp) {
  const page = await browser.newPage();
  try {
    await page.setViewport({ ...viewport, deviceScaleFactor: 1 });
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36 PUIUX-CoverBot"
    );
    const response = await page.goto(url, { waitUntil: "networkidle2", timeout: NAV_TIMEOUT });
    const status = response ? response.status() : 0;
    if (status === 401 || status === 403) throw new Error(`Access blocked (HTTP ${status})`);
    if (status >= 400) throw new Error(`Page returned HTTP ${status}`);
    await new Promise((r) => setTimeout(r, isApp ? 2200 : 900));
    if (isApp) await dismissIntroScreens(page);
    return await page.screenshot({ type: "png" });
  } finally {
    await page.close();
  }
}

async function captureWithRetry(browser, url, viewport, isApp = false) {
  try {
    return await captureViewportShot(browser, url, viewport, isApp);
  } catch {
    return await captureViewportShot(browser, url, viewport, isApp);
  }
}

function browserMockupHtml(base64, displayUrl, w, h) {
  const chromeHeight = 54;
  return `<!doctype html><html><head><meta charset="utf-8" /><style>
  *{margin:0;padding:0;box-sizing:border-box;}
  body{width:${w}px;height:${h}px;background:#0a0a0c;font-family:'Manrope',Arial,sans-serif;}
  #frame{width:${w}px;height:${h}px;border-radius:18px;overflow:hidden;background:#0a0a0c;box-shadow:0 0 0 1px rgba(139,92,246,0.25);}
  #chrome{height:${chromeHeight}px;width:100%;display:flex;align-items:center;gap:10px;padding:0 18px;background:linear-gradient(180deg,#19191d,#121214);border-bottom:1px solid rgba(139,92,246,0.18);}
  .dot{width:12px;height:12px;border-radius:50%;flex-shrink:0;}
  .dot.red{background:#ff5f57;}.dot.yellow{background:#febc2e;}.dot.green{background:#28c840;}
  #bar{flex:1;margin:0 14px;height:28px;border-radius:999px;background:rgba(255,255,255,0.06);border:1px solid rgba(196,181,253,0.18);display:flex;align-items:center;justify-content:center;color:rgba(245,245,240,0.75);font-size:13px;gap:8px;overflow:hidden;}
  #bar span.url{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;direction:ltr;max-width:${w - 260}px;}
  #shot{width:${w}px;height:${h - chromeHeight}px;object-fit:cover;object-position:top center;display:block;}
  </style></head><body><div id="frame"><div id="chrome"><div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div><div id="bar"><span class="lock">&#128274;</span><span class="url">${escapeHtml(displayUrl)}</span></div></div><img id="shot" src="data:image/png;base64,${base64}" /></div></body></html>`;
}

function phoneMockupHtml(base64, w, h) {
  const bezel = 16;
  const notchW = Math.round(w * 0.38);
  return `<!doctype html><html><head><meta charset="utf-8" /><style>
  *{margin:0;padding:0;box-sizing:border-box;}
  body{width:${w}px;height:${h}px;background:transparent;}
  #phone{width:${w}px;height:${h}px;border-radius:46px;background:#0a0a0c;padding:${bezel}px;box-shadow:0 0 0 1px rgba(139,92,246,0.3),0 30px 60px -20px rgba(139,92,246,0.35);position:relative;}
  #screen{width:100%;height:100%;border-radius:32px;overflow:hidden;position:relative;background:#000;}
  #screen img{width:100%;height:100%;object-fit:cover;object-position:top center;display:block;}
  #notch{position:absolute;top:${bezel}px;left:50%;transform:translateX(-50%);width:${notchW}px;height:22px;background:#0a0a0c;border-radius:0 0 16px 16px;z-index:2;}
  </style></head><body><div id="phone"><div id="screen"><img src="data:image/png;base64,${base64}" /></div><div id="notch"></div></div></body></html>`;
}

async function renderHtmlToJpeg(browser, html, width, height) {
  const page = await browser.newPage();
  try {
    await page.setViewport({ width, height, deviceScaleFactor: 1.5 });
    await page.setContent(html, { waitUntil: "load" });
    return await page.screenshot({ type: "jpeg", quality: 90 });
  } finally {
    await page.close();
  }
}

async function processProject(browser, project) {
  await fs.mkdir(COVERS_DIR, { recursive: true });
  const desktopFile = path.join(COVERS_DIR, `${project.slug}.jpg`);
  const mobileFile = path.join(COVERS_DIR, `${project.slug}-mobile.jpg`);
  const absoluteUrl = toAbsoluteUrl(project.url);
  const isApp = project.category === "app";

  try {
    const desktopShot = await captureWithRetry(browser, absoluteUrl, DESKTOP_VIEWPORT, isApp);
    const desktopHtml = browserMockupHtml(desktopShot.toString("base64"), project.url, 1600, 1000);
    const desktopCover = await renderHtmlToJpeg(browser, desktopHtml, 1600, 1000);
    await fs.writeFile(desktopFile, desktopCover);

    let coverImageMobile = null;
    if (isApp) {
      const mobileShot = await captureWithRetry(browser, absoluteUrl, MOBILE_VIEWPORT, true);
      const mobileHtml = phoneMockupHtml(mobileShot.toString("base64"), 460, 940);
      const mobileCover = await renderHtmlToJpeg(browser, mobileHtml, 460, 940);
      await fs.writeFile(mobileFile, mobileCover);
      coverImageMobile = `/covers/${project.slug}-mobile.jpg`;
    }

    console.log(`OK    ${project.slug}`);
    return { ...project, coverImage: `/covers/${project.slug}.jpg`, coverImageMobile, previewStatus: "ok", previewError: null };
  } catch (err) {
    const message = String(err?.message || err).slice(0, 500);
    console.log(`FAIL  ${project.slug} — ${message}`);
    return { ...project, coverImage: null, coverImageMobile: null, previewStatus: "failed", previewError: message };
  }
}

async function run() {
  const merged = main.map((p) => ({
    titleEn: p.title,
    titleAr: p.titleAr,
    url: p.url,
    category: p.category,
    groupEn: null,
    groupAr: null,
    note: null,
  }));

  const byUrl = new Map(merged.map((p) => [normalizeUrl(p.url), p]));

  for (const s of signature) {
    const key = normalizeUrl(s.url);
    const existing = byUrl.get(key);
    if (existing) {
      existing.groupEn = s.groupEn;
      existing.groupAr = s.groupAr;
    } else {
      const entry = {
        titleEn: s.titleEn,
        titleAr: s.titleAr,
        url: s.url,
        category: s.device === "mobile" ? "app" : "website",
        groupEn: s.groupEn,
        groupAr: s.groupAr,
        note: null,
      };
      merged.push(entry);
      byUrl.set(key, entry);
    }
  }

  const usedSlugs = new Set();
  merged.forEach((p, i) => {
    const base = slugify(p.titleEn) || slugify(normalizeUrl(p.url)) || `project-${i}`;
    let slug = base;
    let n = 2;
    while (usedSlugs.has(slug)) {
      slug = `${base}-${n}`;
      n += 1;
    }
    usedSlugs.add(slug);
    p.slug = slug;
    p.sortOrder = i;
  });

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage", "--disable-gpu"],
  });

  const results = new Array(merged.length);
  let cursor = 0;
  async function worker() {
    while (cursor < merged.length) {
      const i = cursor;
      cursor += 1;
      results[i] = await processProject(browser, merged[i]);
    }
  }

  try {
    await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));
  } finally {
    await browser.close();
  }

  const tsContent = `// AUTO-GENERATED by scripts/generate-static-projects.mjs — do not edit by hand.
// Static replacement for the previous Drizzle/PostgreSQL-backed "projects"
// table. Each cover image is a REAL screenshot of the project's own homepage
// (captured once and cached under /public/covers), not a placeholder.
export type ProjectCategory = "website" | "app";

export interface Project {
  slug: string;
  titleEn: string;
  titleAr: string;
  url: string;
  category: ProjectCategory;
  groupEn: string | null;
  groupAr: string | null;
  note: string | null;
  sortOrder: number;
  coverImage: string | null;
  coverImageMobile: string | null;
  previewStatus: "ok" | "failed";
  previewError: string | null;
}

export const projects: Project[] = ${JSON.stringify(results, null, 2)};
`;

  await fs.writeFile(path.join(process.cwd(), "src", "data", "projects.ts"), tsContent, "utf8");
  console.log(`\nDone. Wrote ${results.length} projects to src/data/projects.ts`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
