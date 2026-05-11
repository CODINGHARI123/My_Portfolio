"use client";

import { useEffect, useState } from "react";

const SCRAMBLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*+=";

type Props = {
  text: string;
  className?: string;
  duration?: number; // ms — total decode time
};

// Decode-text animation: characters scramble briefly, then settle.
export default function GlitchText({
  text,
  className = "",
  duration = 1500,
}: Props) {
  const [display, setDisplay] = useState(() => text);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReduced(true);
      setDisplay(text);
      return;
    }

    // Start fully scrambled.
    const scramble = (n: number) =>
      Array.from(
        { length: n },
        () => SCRAMBLE[Math.floor(Math.random() * SCRAMBLE.length)]
      ).join("");
    setDisplay(scramble(text.length));

    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // Each char settles when our progress passes its threshold.
      const out = text
        .split("")
        .map((ch, i) => {
          if (ch === " ") return " ";
          const threshold = i / text.length;
          if (t >= threshold + 0.02) return ch;
          return SCRAMBLE[Math.floor(Math.random() * SCRAMBLE.length)];
        })
        .join("");
      setDisplay(out);
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [text, duration]);

  return (
    <span
      className={`${className} ${reduced ? "" : "glow-text"}`}
      aria-label={text}
    >
      {display}
    </span>
  );
}
