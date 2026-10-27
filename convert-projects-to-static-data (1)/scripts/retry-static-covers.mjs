// Targeted retry for a handful of projects that failed on the first pass
// (slow/flaky sites or self-signed/expired TLS certs). Reuses the same
// mockup-rendering approach as generate-static-projects.mjs but with a longer
// timeout and HTTPS errors ignored, then patches src/data/projects.ts in place.
import fs from "node:fs/promises";
import path from "node:path";
import puppeteer from "puppeteer";

const COVERS_DIR = path.join(process.cwd(), "public", "covers");
const NAV_TIMEOUT = 30000;
const DESKTOP_VIEWPORT = { width: 1920, height: 1080 };
const MOBILE_VIEWPORT = { width: 414, height: 896 };
const ONLY = new Set(process.argv.slice(2));

function toAbsoluteUrl(url) {
  return url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
}
function escapeHtml(input) {
  return input.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
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

async function captureViewportShot(browser, url, viewport) {
  const page = await browser.newPage();
  try {
    await page.setViewport({ ...viewport, deviceScaleFactor: 1 });
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36 PUIUX-CoverBot"
    );
    await page.goto(url, { waitUntil: "networkidle2", timeout: NAV_TIMEOUT });
    await new Promise((r) => setTimeout(r, 900));
    return await page.screenshot({ type: "png" });
  } finally {
    await page.close();
  }
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

async function run() {
  const dataPath = path.join(process.cwd(), "src", "data", "projects.ts");
  const raw = await fs.readFile(dataPath, "utf8");
  const match = raw.match(/export const projects: Project\[\] = (\[[\s\S]*\]);\n?$/);
  if (!match) throw new Error("Could not locate projects array in src/data/projects.ts");
  const list = JSON.parse(match[1]);

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage", "--disable-gpu", "--ignore-certificate-errors"],
  });

  await fs.mkdir(COVERS_DIR, { recursive: true });

  for (const project of list) {
    if (ONLY.size > 0 && !ONLY.has(project.slug)) continue;
    const absoluteUrl = toAbsoluteUrl(project.url);
    const desktopFile = path.join(COVERS_DIR, `${project.slug}.jpg`);
    const mobileFile = path.join(COVERS_DIR, `${project.slug}-mobile.jpg`);
    try {
      const desktopShot = await captureViewportShot(browser, absoluteUrl, DESKTOP_VIEWPORT);
      const desktopHtml = browserMockupHtml(desktopShot.toString("base64"), project.url, 1600, 1000);
      const desktopCover = await renderHtmlToJpeg(browser, desktopHtml, 1600, 1000);
      await fs.writeFile(desktopFile, desktopCover);

      let coverImageMobile = null;
      if (project.category === "app") {
        const mobileShot = await captureViewportShot(browser, absoluteUrl, MOBILE_VIEWPORT);
        const mobileHtml = phoneMockupHtml(mobileShot.toString("base64"), 460, 940);
        const mobileCover = await renderHtmlToJpeg(browser, mobileHtml, 460, 940);
        await fs.writeFile(mobileFile, mobileCover);
        coverImageMobile = `/covers/${project.slug}-mobile.jpg`;
      }

      project.coverImage = `/covers/${project.slug}.jpg`;
      project.coverImageMobile = coverImageMobile;
      project.previewStatus = "ok";
      project.previewError = null;
      console.log(`OK    ${project.slug}`);
    } catch (err) {
      const message = String(err?.message || err).slice(0, 500);
      console.log(`FAIL  ${project.slug} — ${message}`);
    }
  }

  await browser.close();

  const tsContent = raw.replace(match[1], JSON.stringify(list, null, 2));
  await fs.writeFile(dataPath, tsContent, "utf8");
  console.log("Patched src/data/projects.ts");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
