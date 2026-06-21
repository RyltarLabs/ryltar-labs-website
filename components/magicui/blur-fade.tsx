"use client";

import { useRef } from "react";
import { AnimatePresence, motion, useInView, type Variants } from "framer-motion";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number; opacity: number };
    visible: { y: number; opacity: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: string;
  blur?: string;
}

/**
 * Magic UI — BlurFade
 * Scroll reveal primitive: opacity 0→1 + translateY + slight blur dissolve.
 * This is the single reveal pattern used across the entire site, per the
 * espresso-labs DNA report (ease-out-expo, ~0.8s, threshold ~0.08).
 */
export function BlurFade({
  children,
  className,
  duration = 0.8,
  delay = 0,
  yOffset = 24,
  inViewMargin = "-80px",
  blur = "4px",
}: BlurFadeProps) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin as any });

  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inViewResult ? "visible" : "hidden"}
        variants={defaultVariants}
        transition={{
          delay,
          duration,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
