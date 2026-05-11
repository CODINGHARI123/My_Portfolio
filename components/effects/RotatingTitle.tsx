"use client";

import { useEffect, useState } from "react";

type Props = {
  phrases: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
};

export default function RotatingTitle({
  phrases,
  className = "",
  typeSpeed = 65,
  deleteSpeed = 35,
  pause = 1400,
}: Props) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const target = phrases[idx % phrases.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < target.length) {
        timeout = setTimeout(() => setText(target.slice(0, text.length + 1)), typeSpeed);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), pause);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), pause);
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), deleteSpeed);
      } else {
        setIdx((i) => (i + 1) % phrases.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, idx, phrases, typeSpeed, deleteSpeed, pause]);

  return (
    <span className={className}>
      <span className="text-gradient-soft">{text}</span>
      <span
        aria-hidden
        className="ml-0.5 inline-block w-[2px] translate-y-[2px] bg-primary align-middle animate-caret"
        style={{ height: "0.9em" }}
      />
    </span>
  );
}
