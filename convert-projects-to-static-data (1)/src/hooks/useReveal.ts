"use client";

import { useEffect, useRef, useState } from "react";

export function useParallax<T extends HTMLElement = HTMLDivElement>(speed = 0.15) {
  const ref = useRef<T | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let ticking = false;

    const update = () => {
      const rect = node.getBoundingClientRect();
      const windowH = window.innerHeight || 1;
      const center = rect.top + rect.height / 2 - windowH / 2;
      setOffset(center * speed * -1);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return { ref, offset };
}

/**
 * useMouseParallax — tracks pointer position within the viewport and
 * returns a normalized -1..1 value on each axis, used to drive subtle
 * cursor-reactive parallax (depth) effects on hero/cover sections.
 */
export function useMouseParallax(strength = 1) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      setPos({ x: nx * strength, y: ny * strength });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [strength]);

  return pos;
}
