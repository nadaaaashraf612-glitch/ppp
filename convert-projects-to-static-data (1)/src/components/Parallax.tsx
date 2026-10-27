"use client";

import { type CSSProperties, type ReactNode } from "react";
import { useParallax } from "../hooks/useReveal";
import { cn } from "../utils/cn";

/**
 * ParallaxLayer — wraps children in a layer that drifts vertically (and
 * optionally scales) relative to scroll position, used to build a
 * multi-depth, "luxury" cinematic feel across the profile.
 */
export function ParallaxLayer({
  children,
  speed = 0.15,
  className,
  style,
  scaleWithScroll = false,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
  style?: CSSProperties;
  scaleWithScroll?: boolean;
}) {
  const { ref, offset } = useParallax<HTMLDivElement>(speed);
  const scale = scaleWithScroll ? 1 + Math.min(Math.abs(offset) / 900, 0.08) : 1;

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        ...style,
        transform: `translate3d(0, ${offset}px, 0) scale(${scale})`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
