"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "top", label: "Top" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "training", label: "Training" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function SectionNav() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const obs = new IntersectionObserver(
      (entries) => {
        // Use the entry whose top is closest to the upper third of viewport.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top - 80) -
              Math.abs(b.boundingClientRect.top - 80)
          );
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.6, 1] }
    );

    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="pointer-events-none fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
    >
      <ul className="pointer-events-auto flex flex-col items-end gap-3">
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-label={`Jump to ${s.label}`}
                className="group flex items-center gap-3"
              >
                <span
                  className={`text-[10px] font-mono uppercase tracking-[0.2em] transition-all duration-300 ${
                    isActive
                      ? "translate-x-0 text-primary opacity-100"
                      : "translate-x-1 text-muted opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {s.label}
                </span>
                <span
                  className={`relative grid place-items-center transition-all duration-300 ${
                    isActive ? "h-3.5 w-3.5" : "h-2.5 w-2.5"
                  }`}
                >
                  <span
                    className={`absolute inset-0 rounded-full border transition-all duration-300 ${
                      isActive
                        ? "border-primary"
                        : "border-border group-hover:border-primary/70"
                    }`}
                  />
                  <span
                    className={`rounded-full bg-primary transition-all duration-300 ${
                      isActive ? "h-1.5 w-1.5 opacity-100" : "h-1 w-1 opacity-60"
                    }`}
                  />
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
