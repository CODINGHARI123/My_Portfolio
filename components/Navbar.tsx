"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/profile";
import { ArrowUpRight } from "@/components/Icons";
import ThemeToggle from "@/components/effects/ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#training", label: "Training" },
  { href: "#education", label: "Education" },
];

// Floating capsule navbar with a sliding active indicator.
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const targets = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => Boolean(el));
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    targets.forEach((t) => obs.observe(t));

    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-500 ${
          scrolled
            ? "border-border bg-surface/80 shadow-lift backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href="#top" className="group flex items-center gap-2.5 pl-1">
          <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-full bg-ink font-display text-[11px] font-bold text-white">
            <span className="absolute inset-0 origin-bottom scale-y-0 bg-primary transition-transform duration-500 group-hover:scale-y-100" />
            <span className="relative">{profile.initials}</span>
          </span>
          <span className="hidden font-display text-sm font-semibold text-text sm:inline">
            SreeHari<span className="text-accent">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-white" : "text-muted hover:text-text"
                  }`}
                >
                  <span
                    className={`absolute inset-0 -z-10 rounded-full bg-ink transition-all duration-500 ${
                      isActive ? "scale-100 opacity-100" : "scale-75 opacity-0"
                    }`}
                  />
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="#contact" className="btn-primary hidden !py-2.5 lg:inline-flex">
            Let&apos;s talk
            <ArrowUpRight size={15} />
          </a>

          <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 8h16M8 16h12" />}
          </svg>
          </button>
        </div>
      </nav>

      <div
        className={`mx-auto mt-2 max-w-5xl overflow-hidden rounded-3xl border bg-surface/95 shadow-lift backdrop-blur-xl transition-all duration-500 lg:hidden ${
          open ? "max-h-96 border-border opacity-100" : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 p-3">
          {[...links, { href: "#contact", label: "Contact" }].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-2.5 text-sm font-medium text-muted hover:bg-surfaceAlt hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
