"use client";

import { motion } from "framer-motion";

/**
 * ReactBits — ScrollDot
 * Minimal scroll affordance for the hero, per spec: a single dot
 * with a slow vertical breathing motion. No chevrons, no mouse icon.
 */
export function ScrollDot() {
  return (
    <motion.div
      className="h-[5px] w-[5px] rounded-full bg-text-tertiary"
      animate={{ y: [0, 8, 0], opacity: [1, 0.4, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
