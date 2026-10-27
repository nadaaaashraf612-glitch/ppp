"use client";

import type { MockupLayout, MockupSpec, MockupTheme } from "../utils/projectVisuals";

function Bar({ w, h = 8, c, r = 999 }: { w: string | number; h?: number; c: string; r?: number }) {
  return <div style={{ width: w, height: h, background: c, borderRadius: r }} />;
}

function LayoutBody({ layout, theme, monogram }: { layout: MockupLayout; theme: MockupTheme; monogram: string }) {
  const { primary, secondary, surface, text, muted } = theme;

  switch (layout) {
    case "charity":
      return (
        <div className="flex h-full flex-col gap-3 p-4" style={{ background: surface }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="flex h-5 w-5 items-center justify-center rounded-full text-[8px] font-bold text-white" style={{ background: primary }}>
                {monogram}
              </div>
              <Bar w={36} h={5} c={muted} />
            </div>
            <div className="flex gap-1.5">
              <Bar w={14} h={4} c={muted} />
              <Bar w={14} h={4} c={muted} />
              <Bar w={14} h={4} c={muted} />
            </div>
          </div>
          <div className="mt-1 flex flex-col gap-2 rounded-xl p-3" style={{ background: secondary }}>
            <Bar w="70%" h={9} c={text} />
            <Bar w="45%" h={7} c={muted} />
            <div className="mt-1.5 inline-flex w-fit items-center rounded-full px-3 py-1" style={{ background: primary }}>
              <Bar w={34} h={5} c="#ffffff" />
            </div>
          </div>
          <div className="mt-auto grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex flex-col items-center gap-1 rounded-lg py-2" style={{ background: secondary }}>
                <div className="h-5 w-5 rounded-full" style={{ background: primary, opacity: 0.85 }} />
                <Bar w={24} h={4} c={muted} />
              </div>
            ))}
          </div>
        </div>
      );

    case "islamic":
      return (
        <div className="flex h-full flex-col items-center gap-3 p-4 text-center" style={{ background: surface }}>
          <div
            className="flex h-10 w-16 items-center justify-center text-[10px] font-bold text-white"
            style={{ background: primary, borderRadius: "999px 999px 6px 6px" }}
          >
            {monogram}
          </div>
          <Bar w="60%" h={8} c={text} />
          <Bar w="80%" h={5} c={muted} />
          <div className="my-1 h-px w-2/3" style={{ background: secondary }} />
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-full px-3 py-1" style={{ background: secondary }}>
                <Bar w={28} h={4} c={text} />
              </div>
            ))}
          </div>
          <div className="mt-auto grid w-full grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex flex-col items-center gap-1 rounded-lg py-2" style={{ background: secondary }}>
                <Bar w={30} h={7} c={primary} />
                <Bar w={22} h={3} c={muted} />
              </div>
            ))}
          </div>
        </div>
      );

    case "corporate":
      return (
        <div className="flex h-full flex-col gap-3 p-4" style={{ background: surface }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="h-5 w-5 rounded-md text-[8px] font-bold text-white flex items-center justify-center" style={{ background: primary }}>
                {monogram}
              </div>
              <Bar w={30} h={5} c={muted} />
            </div>
            <div className="flex gap-1.5">
              <Bar w={12} h={4} c={muted} />
              <Bar w={12} h={4} c={muted} />
              <Bar w={12} h={4} c={muted} />
            </div>
          </div>
          <div className="grid flex-1 grid-cols-5 gap-3">
            <div className="col-span-3 flex flex-col justify-center gap-2">
              <Bar w="90%" h={10} c={text} />
              <Bar w="70%" h={10} c={text} />
              <Bar w="55%" h={6} c={muted} />
              <div className="mt-1 inline-flex w-fit items-center rounded-md px-3 py-1.5" style={{ background: primary }}>
                <Bar w={40} h={5} c="#fff" />
              </div>
            </div>
            <div className="col-span-2 rounded-xl" style={{ background: secondary }} />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex flex-col gap-1.5 rounded-lg p-2" style={{ background: secondary }}>
                <div className="h-3.5 w-3.5 rounded-full" style={{ background: primary }} />
                <Bar w="80%" h={4} c={muted} />
              </div>
            ))}
          </div>
        </div>
      );

    case "ecommerce":
      return (
        <div className="flex h-full flex-col gap-2.5 p-4" style={{ background: surface }}>
          <div className="flex items-center justify-between">
            <Bar w={34} h={6} c={text} />
            <div className="flex items-center gap-2">
              <div className="h-5 w-16 rounded-full" style={{ background: secondary }} />
              <div className="h-5 w-5 rounded-full" style={{ background: primary }} />
            </div>
          </div>
          <div className="flex items-center justify-between rounded-lg px-3 py-2" style={{ background: primary }}>
            <Bar w={60} h={6} c="#fff" />
            <Bar w={30} h={6} c="#ffffffaa" />
          </div>
          <div className="grid flex-1 grid-cols-2 gap-2.5">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col gap-1.5 rounded-lg p-2" style={{ background: secondary }}>
                <div className="aspect-square w-full rounded-md" style={{ background: `${primary}33` }} />
                <Bar w="70%" h={4} c={muted} />
                <Bar w={30} h={5} c={primary} />
              </div>
            ))}
          </div>
        </div>
      );

    case "travel":
      return (
        <div className="flex h-full flex-col gap-3 p-4" style={{ background: surface }}>
          <div className="flex items-center justify-between">
            <Bar w={32} h={6} c={text} />
            <Bar w={16} h={4} c={muted} />
          </div>
          <div className="h-16 rounded-xl" style={{ background: `linear-gradient(135deg, ${primary}, ${secondary})` }} />
          <div className="-mt-6 flex items-center gap-1.5 self-center rounded-full px-2 py-1.5 shadow-sm" style={{ background: "#ffffff" }}>
            <Bar w={38} h={5} c={muted} />
            <div className="h-3 w-px" style={{ background: muted }} />
            <Bar w={38} h={5} c={muted} />
            <div className="rounded-full px-2.5 py-1" style={{ background: primary }}>
              <Bar w={20} h={4} c="#fff" />
            </div>
          </div>
          <div className="mt-auto grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex flex-col gap-1 rounded-lg p-1.5" style={{ background: secondary }}>
                <div className="aspect-[4/3] rounded-md" style={{ background: `${primary}44` }} />
                <Bar w="70%" h={3.5} c={muted} />
              </div>
            ))}
          </div>
        </div>
      );

    case "food":
      return (
        <div className="relative flex h-full flex-col items-center justify-between overflow-hidden p-4" style={{ background: surface }}>
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-sm">🍔</span>
              <Bar w={34} h={5} c={text} />
            </div>
            <Bar w={16} h={4} c={muted} />
          </div>
          <div
            className="h-20 w-20 rounded-full"
            style={{ background: `radial-gradient(circle at 35% 30%, ${secondary}, ${primary})`, boxShadow: `0 10px 30px -8px ${primary}99` }}
          />
          <div className="flex w-full items-center justify-between rounded-full px-3 py-2" style={{ background: primary }}>
            <Bar w={60} h={6} c="#fff" />
            <Bar w={30} h={6} c="#fffbe0" />
          </div>
        </div>
      );

    case "realestate":
      return (
        <div className="flex h-full flex-col gap-2.5 p-0" style={{ background: surface }}>
          <div
            className="relative flex h-24 items-end p-3"
            style={{ background: `linear-gradient(160deg, ${primary}, ${secondary})` }}
          >
            <Bar w="55%" h={8} c="#ffffff" />
          </div>
          <div className="flex flex-1 flex-col gap-2 px-4 pb-4">
            <div className="-mt-5 flex items-center gap-2 self-center rounded-full bg-white px-3 py-1.5 shadow">
              <Bar w={60} h={5} c={muted} />
              <div className="rounded-full px-2 py-1" style={{ background: primary }}>
                <Bar w={16} h={4} c="#fff" />
              </div>
            </div>
            <div className="mt-auto grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex flex-col gap-1 rounded-lg p-1.5" style={{ background: secondary }}>
                  <div className="aspect-[4/3] rounded-md" style={{ background: `${primary}33` }} />
                  <Bar w="60%" h={3.5} c={muted} />
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case "health":
      return (
        <div className="flex h-full flex-col gap-3 p-4" style={{ background: surface }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="h-5 w-5 rounded-full" style={{ background: primary }} />
              <Bar w={30} h={5} c={text} />
            </div>
            <Bar w={16} h={4} c={muted} />
          </div>
          <div className="grid flex-1 grid-cols-5 gap-3">
            <div className="col-span-3 flex flex-col justify-center gap-2">
              <Bar w="85%" h={9} c={text} />
              <Bar w="60%" h={6} c={muted} />
              <div className="mt-1 inline-flex w-fit items-center rounded-full px-3 py-1.5" style={{ background: primary }}>
                <Bar w={44} h={5} c="#fff" />
              </div>
            </div>
            <div className="col-span-2 flex flex-col gap-1.5 rounded-xl p-2" style={{ background: secondary }}>
              <Bar w="80%" h={4} c={muted} />
              <Bar w="60%" h={4} c={muted} />
              <div className="mt-auto h-2 w-full rounded-full" style={{ background: primary }} />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-center rounded-lg py-2" style={{ background: secondary }}>
                <div className="h-3.5 w-3.5 rounded-full" style={{ background: primary }} />
              </div>
            ))}
          </div>
        </div>
      );

    case "finance":
      return (
        <div className="flex h-full flex-col gap-3 p-4" style={{ background: surface }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="h-5 w-5 rounded-md text-[8px] font-bold flex items-center justify-center" style={{ background: primary, color: "#0b0b0d" }}>
                {monogram}
              </div>
              <Bar w={30} h={5} c={muted} />
            </div>
            <Bar w={16} h={4} c={muted} />
          </div>
          <Bar w="60%" h={9} c={text} />
          <div className="flex flex-1 items-end gap-2 pb-1">
            {[40, 65, 50, 85, 60, 95].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-md" style={{ height: `${h}%`, background: i % 2 ? primary : secondary }} />
            ))}
          </div>
        </div>
      );

    case "industrial":
      return (
        <div className="flex h-full flex-col gap-3 p-4" style={{ background: surface }}>
          <div className="flex items-center justify-between">
            <Bar w={36} h={5} c={muted} />
            <Bar w={16} h={4} c={muted} />
          </div>
          <Bar w="70%" h={9} c={text} />
          <div className="mt-auto grid grid-cols-4 gap-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-[3/5] rounded-sm"
                style={{
                  background: i % 2 ? primary : secondary,
                  backgroundImage: "linear-gradient(transparent 46%, rgba(0,0,0,0.25) 48%, transparent 50%)",
                }}
              />
            ))}
          </div>
        </div>
      );

    case "events":
      return (
        <div className="flex h-full flex-col gap-3 p-4" style={{ background: surface }}>
          <div className="flex items-center justify-between">
            <Bar w={34} h={5} c={muted} />
            <div className="rounded-full px-2 py-0.5" style={{ background: primary }}>
              <Bar w={22} h={4} c="#0b0b0d" />
            </div>
          </div>
          <Bar w="75%" h={10} c={text} />
          <Bar w={60} h={2} c={primary} />
          <div className="mt-1 grid flex-1 grid-cols-4 gap-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-md"
                style={{ background: i % 2 ? `${primary}55` : `${secondary}` }}
              />
            ))}
          </div>
        </div>
      );

    case "figma":
      return (
        <div className="relative flex h-full flex-col justify-between overflow-hidden p-4" style={{ background: surface }}>
          <div
            className="absolute -left-6 -top-10 h-28 w-28 rounded-full opacity-60 blur-xl"
            style={{ background: primary }}
          />
          <div
            className="absolute -right-8 bottom-0 h-24 w-24 rounded-full opacity-50 blur-xl"
            style={{ background: secondary }}
          />
          <div className="relative flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full" style={{ background: primary }} />
            <div className="h-3 w-3 rounded-full" style={{ background: secondary }} />
            <Bar w={30} h={4} c={muted} />
          </div>
          <div className="relative grid grid-cols-2 gap-3">
            <div className="flex -rotate-3 flex-col gap-1.5 rounded-lg p-2 shadow-lg" style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(4px)" }}>
              <Bar w="80%" h={4} c={muted} />
              <Bar w="60%" h={10} c={primary} />
            </div>
            <div className="mt-4 flex rotate-2 flex-col gap-1.5 rounded-lg p-2 shadow-lg" style={{ background: "rgba(255,255,255,0.08)" }}>
              <Bar w="70%" h={4} c={muted} />
              <Bar w="50%" h={10} c={secondary} />
            </div>
          </div>
          <Bar w="40%" h={5} c={muted} />
        </div>
      );

    case "esim":
      return (
        <div className="flex h-full flex-col gap-3 p-4" style={{ background: surface }}>
          <div className="flex items-center justify-between">
            <Bar w={30} h={5} c={muted} />
            <div className="h-4 w-4 rounded-full" style={{ background: primary }} />
          </div>
          <div className="flex flex-1 flex-col gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center justify-between rounded-lg px-2.5 py-2" style={{ background: secondary }}>
                <div className="flex flex-col gap-1">
                  <Bar w={34} h={6} c={text} />
                  <Bar w={46} h={3.5} c={muted} />
                </div>
                <div className="rounded-full px-2 py-1" style={{ background: primary }}>
                  <Bar w={18} h={4} c="#fff" />
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case "holding":
      return (
        <div className="flex h-full flex-col gap-3 p-4" style={{ background: surface }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="h-5 w-5 rounded-sm text-[8px] font-bold flex items-center justify-center" style={{ background: primary, color: "#0b0b0d" }}>
                {monogram}
              </div>
              <Bar w={34} h={5} c={muted} />
            </div>
            <Bar w={16} h={4} c={muted} />
          </div>
          <Bar w="80%" h={9} c={text} />
          <Bar w="55%" h={6} c={muted} />
          <div className="mt-auto grid grid-cols-5 gap-1.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-md" style={{ background: i % 2 ? primary : secondary }} />
            ))}
          </div>
        </div>
      );

    case "education":
      return (
        <div className="flex h-full flex-col gap-3 p-4" style={{ background: surface }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="h-5 w-5 rounded-full text-[8px] font-bold text-white flex items-center justify-center" style={{ background: primary }}>
                {monogram}
              </div>
              <Bar w={30} h={5} c={muted} />
            </div>
            <Bar w={16} h={4} c={muted} />
          </div>
          <Bar w="75%" h={9} c={text} />
          <div className="mt-auto grid grid-cols-2 gap-2">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col gap-1.5 rounded-lg p-2" style={{ background: secondary }}>
                <div className="h-6 w-6 rounded-md" style={{ background: primary }} />
                <Bar w="70%" h={3.5} c={muted} />
              </div>
            ))}
          </div>
        </div>
      );

    case "appGeneric":
    default:
      return (
        <div className="flex h-full flex-col gap-3 p-3" style={{ background: surface }}>
          <div className="flex items-center justify-between px-1">
            <Bar w={26} h={5} c={text} />
            <div className="h-4 w-4 rounded-full" style={{ background: primary }} />
          </div>
          <div className="rounded-xl p-3" style={{ background: `linear-gradient(135deg, ${primary}, ${secondary})` }}>
            <Bar w="60%" h={6} c="#fff" />
            <div className="mt-1.5">
              <Bar w="40%" h={4} c="#ffffffcc" />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center gap-2 rounded-lg p-2" style={{ background: secondary }}>
                <div className="h-6 w-6 rounded-md" style={{ background: primary }} />
                <div className="flex flex-1 flex-col gap-1">
                  <Bar w="70%" h={4} c={muted} />
                  <Bar w="45%" h={3} c={muted} />
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-around rounded-full py-1.5" style={{ background: secondary }}>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="h-2.5 w-2.5 rounded-full" style={{ background: i === 0 ? primary : muted }} />
            ))}
          </div>
        </div>
      );
  }
}

function BrowserFrame({ spec, url, monogram }: { spec: MockupSpec; url: string; monogram: string }) {
  return (
    <div className="h-full w-full overflow-hidden rounded-t-xl" style={{ background: "#1c1c1f" }}>
      <div className="flex items-center gap-1.5 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <div className="mx-auto flex max-w-[70%] flex-1 items-center justify-center gap-1 rounded-full bg-[#2b2b30] px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
          <span className="truncate text-[9px] text-white/50" dir="ltr">
            {url}
          </span>
        </div>
      </div>
      <div className="h-[calc(100%-30px)]">
        <LayoutBody layout={spec.layout} theme={spec.theme} monogram={monogram} />
      </div>
    </div>
  );
}

function PhoneFrame({ spec, monogram }: { spec: MockupSpec; monogram: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center" style={{ background: "#0a0a0c" }}>
      <div className="relative h-full w-[62%] overflow-hidden rounded-[1.4rem] border-[3px] border-[#2b2b30] bg-black shadow-2xl">
        <div className="absolute left-1/2 top-1 z-10 h-2.5 w-14 -translate-x-1/2 rounded-full bg-[#111113]" />
        <div className="h-full pt-4">
          <LayoutBody layout={spec.layout} theme={spec.theme} monogram={monogram} />
        </div>
      </div>
    </div>
  );
}

export function ProjectMockup({ spec, title, url }: { spec: MockupSpec; title: string; url: string }) {
  const monogram = title.trim().charAt(0).toUpperCase();
  return (
    <div className="absolute inset-0">
      {spec.device === "browser" ? (
        <BrowserFrame spec={spec} url={url} monogram={monogram} />
      ) : (
        <PhoneFrame spec={spec} monogram={monogram} />
      )}
    </div>
  );
}
