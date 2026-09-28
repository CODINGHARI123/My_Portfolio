"use client";

import { useEffect, useRef, ReactNode } from "react";

type Props = {
  children: ReactNode;
  as?: "div" | "section" | "article" | "li" | "header" | "main";
  delay?: number;
  variant?: "up" | "left" | "right" | "zoom" | "curtain";
  className?: string;
};

const VARIANT_CLASS = {
  up: "",
  left: "reveal-left",
  right: "reveal-right",
  zoom: "reveal-zoom",
  curtain: "reveal-curtain",
};

export default function Reveal({
  children,
  as = "div",
  delay = 0,
  variant = "up",
  className = "",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.transitionDelay = `${delay}ms`;
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  const Tag = as as keyof JSX.IntrinsicElements;
  return (
    // @ts-expect-error — ref typed via union
    <Tag ref={ref} className={`reveal ${VARIANT_CLASS[variant]} ${className}`}>
      {children}
    </Tag>
  );
}
