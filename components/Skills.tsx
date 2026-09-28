"use client";

import { useState } from "react";
import { profile } from "@/lib/profile";
import Reveal from "@/components/effects/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { Brain, Chart, Code, Database, Server, Wrench } from "@/components/Icons";

const ICONS: Record<string, typeof Code> = {
  Languages: Code,
  "Data Science & ML": Brain,
  "Big Data & Databases": Database,
  "Visualization & Reporting": Chart,
  "Frameworks & Backend": Server,
  "Tools & Platforms": Wrench,
};

// Tabbed skills explorer: categories on the left, animated skill tiles on the right.
export default function Skills() {
  const [active, setActive] = useState(1);
  const group = profile.skillGroups[active];
  const ActiveIcon = ICONS[group.title] ?? Code;

  return (
    <section id="skills" className="section section-tint">
      <div className="container-content">
        <SectionHeader
          index="04"
          eyebrow="Skills"
          title="The"
          accent="toolkit."
          lead="Pick a category to explore — a practical stack spanning the full data lifecycle and the software workflow."
        />

        <Reveal variant="up" className="mt-16 grid gap-5 lg:grid-cols-[20rem_1fr]">
          <div role="tablist" aria-label="Skill categories" className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {profile.skillGroups.map((g, i) => {
              const Icon = ICONS[g.title] ?? Code;
              const isActive = i === active;
              return (
                <button
                  key={g.title}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={`group relative flex flex-shrink-0 items-center gap-3 overflow-hidden rounded-2xl border px-4 py-3.5 text-left text-sm font-semibold transition-all duration-500 ${
                    isActive
                      ? "border-ink bg-ink text-white shadow-lift"
                      : "border-border bg-surface text-text hover:border-primary/40"
                  }`}
                >
                  <span
                    className={`grid h-9 w-9 place-items-center rounded-xl transition-colors duration-500 ${
                      isActive ? "bg-accent text-ink" : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Icon size={17} />
                  </span>
                  <span className="whitespace-nowrap">{g.title}</span>
                  <span
                    className={`ml-auto hidden font-mono text-xs lg:inline ${
                      isActive ? "text-white/60" : "text-muted"
                    }`}
                  >
                    {String(g.items.length).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="card relative min-h-[20rem] overflow-hidden p-8 sm:p-10">
            <div aria-hidden className="dot-bg absolute inset-0 opacity-70" />
            <ActiveIcon
              size={220}
              className="pointer-events-none absolute -bottom-10 -right-10 text-primary/[0.06]"
            />
            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                {String(active + 1).padStart(2, "0")} / {String(profile.skillGroups.length).padStart(2, "0")}
              </p>
              <h3 key={group.title} className="mt-3 font-display text-3xl font-semibold text-text animate-fade-up">
                {group.title}
              </h3>
              <div key={`items-${active}`} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                {group.items.map((item, j) => (
                  <div
                    key={item}
                    className="group/skill flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-4 transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lift animate-scale-in"
                    style={{ animationDelay: `${j * 60}ms` }}
                  >
                    <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg bg-surfaceAlt font-display text-sm font-bold text-primary transition-colors group-hover/skill:bg-primary group-hover/skill:text-white">
                      {item.charAt(0)}
                    </span>
                    <span className="text-sm font-semibold text-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
