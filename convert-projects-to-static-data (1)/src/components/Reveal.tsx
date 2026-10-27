"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "span" | "li";
  y?: number;
}) {
  const MotionComponent = motion[as as "div"];
  return (
    <MotionComponent
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: delay / 1000 },
        },
      }}
    >
      {children}
    </MotionComponent>
  );
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};
