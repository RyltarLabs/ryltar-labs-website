"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Phase = "typing" | "pausing" | "deleting" | "waiting";

interface TextRotateProps {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseAfterType?: number;
  pauseBeforeType?: number;
}

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
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    switch (phase) {
      case "typing":
        if (charIndex < currentWord.length) {
          timeout = setTimeout(() => setCharIndex((c) => c + 1), typeSpeed);
        } else {
          timeout = setTimeout(() => setPhase("pausing"), typeSpeed);
        }
        break;
      case "pausing":
        timeout = setTimeout(() => setPhase("deleting"), pauseAfterType);
        break;
      case "deleting":
        if (charIndex > 0) {
          timeout = setTimeout(() => setCharIndex((c) => c - 1), deleteSpeed);
        } else {
          timeout = setTimeout(() => setPhase("waiting"), deleteSpeed);
        }
        break;
      case "waiting":
        timeout = setTimeout(() => {
          setWordIndex((w) => (w + 1) % words.length);
          setPhase("typing");
        }, pauseBeforeType);
        break;
    }

    return () => clearTimeout(timeout);
  }, [charIndex, phase, wordIndex, words, typeSpeed, deleteSpeed, pauseAfterType, pauseBeforeType]);

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