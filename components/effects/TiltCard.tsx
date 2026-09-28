"use client";

import { ReactNode, useRef } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  maxTilt?: number; // degrees
};

export default function TiltCard({
  children,
  className = "",
  maxTilt = 6,
}: Props) {
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const tiltX = (0.5 - y) * (maxTilt * 2);
    const tiltY = (x - 0.5) * (maxTilt * 2);

    el.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(0)`;
    el.style.setProperty("--spot-x", `${x * 100}%`);
    el.style.setProperty("--spot-y", `${y * 100}%`);
  };

  const reset = () => {
    const el = wrapRef.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`group relative transition-transform duration-200 ease-out [transform-style:preserve-3d] ${className}`}
    >
      {children}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(380px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(37, 99, 235, 0.08), transparent 60%)",
        }}
      />
    </div>
  );
}
