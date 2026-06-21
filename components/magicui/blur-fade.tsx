"use client";

import { useRef } from "react";
import { AnimatePresence, motion, useInView, UseInViewOptions, type Variants } from "framer-motion";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  yOffset?: number;
  inViewMargin?: UseInViewOptions["margin"];
  blur?: string;
}

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
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });

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
        transition={{ delay, duration, ease: [0.16, 1, 0.3, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}