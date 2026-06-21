"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface NumberTickerProps {
  value: number;
  className?: string;
  decimalPlaces?: number;
  suffix?: string;
}

/**
 * Magic UI — NumberTicker
 * Spring-animated counter that ticks up to its target value once
 * it enters the viewport. Used in the "sobre" metrics row.
 */
export function NumberTicker({
  value,
  className,
  decimalPlaces = 0,
  suffix = "",
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 36,
    stiffness: 90,
  });
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent =
          Intl.NumberFormat("pt-BR", {
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces,
          }).format(Number(latest.toFixed(decimalPlaces))) + suffix;
      }
    });
    return unsubscribe;
  }, [springValue, decimalPlaces, suffix]);

  return <span ref={ref} className={className}>0{suffix}</span>;
}
