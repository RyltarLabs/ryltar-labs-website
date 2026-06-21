"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TextRotateProps {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseAfterType?: number;
  pauseBeforeType?: number;
}

/**
 * ReactBits — TextRotate (typewriter variant)
 * Drives the hero headline word rotation per the espresso-labs spec:
 * "beyond great [word]" with character-by-character type/delete.
 */
export function TextRotate({
  words,
  className,
  typeSpeed = 90,
  deleteSpeed = 50,
  pauseAfterType = 2200,
  pauseBeforeType = 350,
}: TextRotateProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), typeSpeed);
    } else if (!isDeleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseAfterType);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), deleteSpeed);
    } else if (isDeleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((w) => (w + 1) % words.length);
      }, pauseBeforeType);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseAfterType, pauseBeforeType]);

  return (
    <span className={className}>
      {words[wordIndex].slice(0, charIndex)}
      <motion.span
        className="ml-1 inline-block h-[0.85em] w-[2px] translate-y-[0.1em] bg-text-primary align-middle"
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1], ease: "linear" }}
      />
    </span>
  );
}
