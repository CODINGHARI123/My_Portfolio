import { profile } from "@/lib/profile";
import Reveal from "@/components/effects/Reveal";
import TiltCard from "@/components/effects/TiltCard";
import SectionHeader from "@/components/SectionHeader";
import { Activity, ArrowUpRight, Calendar } from "@/components/Icons";

// Small animated mock-ups that sit beside each project description.
function Visual({ kind }: { kind: string }) {
  if (kind === "network") {
    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-semibold text-text">
          <span className="inline-flex items-center gap-1.5">
            <Activity size={14} className="text-primary" /> COTS · Live
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-emerald-600">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" /> Connected
          </span>
        </div>
        {[
          { k: "RSRP", v: "-86 dBm", w: "72%" },
          { k: "iPerf DL", v: "142 Mbps", w: "88%" },
          { k: "Ping", v: "24 ms", w: "35%" },
        ].map((m, i) => (
          <div key={m.k} className="rounded-xl bg-white p-3 shadow-soft">
            <div className="flex justify-between text-xs">
              <span className="text-muted">{m.k}</span>
              <span className="font-semibold text-text">{m.v}</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surfaceAlt">
              <div
                className="h-full origin-left rounded-full bg-gradient-to-r from-primary to-accent animate-grow-x"
                style={{ width: m.w, animationDelay: `${i * 300}ms` }}
              />
            </div>
          </div>
        ))}
        <svg viewBox="0 0 200 40" preserveAspectRatio="none" className="h-12 w-full">
          <path
            d="M0 30 L20 22 L40 26 L60 12 L80 18 L100 8 L120 20 L140 14 L160 24 L180 10 L200 16"
            fill="none"
            stroke="url(#lg1)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="300"
            className="animate-dash"
          />
          <defs>
            <linearGradient id="lg1" x1="0" x2="1">
              <stop offset="0" stopColor="#2563eb" />
              <stop offset="1" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (kind === "sentiment") {
    return (
      <div className="space-y-3">
        {[
          { t: "“Battery life is amazing, totally worth it!”", s: "Positive", c: "bg-emerald-500/10 text-emerald-600", p: "94%" },
          { t: "“It does the job, nothing special.”", s: "Neutral", c: "bg-amber-500/10 text-amber-600", p: "81%" },
          { t: "“Stopped working after two days.”", s: "Negative", c: "bg-rose-500/10 text-rose-600", p: "97%" },
        ].map((r, i) => (
          <div
            key={r.s}
            className="rounded-xl bg-white p-3 shadow-soft animate-fade-up"
            style={{ animationDelay: `${i * 250}ms` }}
          >
            <p className="text-xs italic text-muted">{r.t}</p>
            <div className="mt-2 flex items-center justify-between">
              <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${r.c}`}>{r.s}</span>
              <span className="text-[11px] font-semibold text-text">{r.p} conf.</span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (kind === "crop") {
    return (
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-2 text-center">
          {[
            ["pH", "6.5"],
            ["N", "90"],
            ["P", "42"],
            ["K", "43"],
            ["Temp", "21°C"],
            ["Rain", "203mm"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-lg bg-white px-2 py-2 shadow-soft">
              <p className="text-[10px] uppercase tracking-wider text-muted">{k}</p>
              <p className="text-sm font-bold text-text">{v}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-gradient-to-br from-primary to-accent p-4 text-white shadow-glow">
          <p className="text-[11px] uppercase tracking-[0.18em] opacity-80">Recommended crop</p>
          <p className="mt-1 font-display text-2xl font-bold">🌾 Rice</p>
          <p className="mt-1 text-xs opacity-90">Random Forest · best of 4 models</p>
        </div>
      </div>
    );
  }

  // dashboard
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-2">
        {[
          ["Total Sales", "$1.20M"],
          ["Avg Rating", "3.9 ★"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-xl bg-white p-3 shadow-soft">
            <p className="text-[10px] uppercase tracking-wider text-muted">{k}</p>
            <p className="font-display text-lg font-bold text-text">{v}</p>
          </div>
        ))}
      </div>
      <div className="flex h-28 items-end gap-2 rounded-xl bg-white p-3 shadow-soft">
        {[55, 80, 45, 95, 65, 70, 40].map((h, i) => (
          <span
            key={i}
            className="flex-1 origin-bottom rounded-t-md bg-gradient-to-t from-primary to-accent animate-bar-grow"
            style={{ height: `${h}%`, animationDelay: `${i * 150}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-content">
        <SectionHeader
          eyebrow="Projects"
          title="Things I've built"
          lead="A mix of production software, machine-learning systems, and analytics dashboards across roles and personal work."
        />

        <div className="mt-16 space-y-10">
          {profile.projects.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={p.title} variant={flip ? "right" : "left"}>
                <TiltCard maxTilt={2.5}>
                  <article
                    className={`card card-hover grid overflow-hidden lg:grid-cols-[1.35fr_1fr] ${
                      flip ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="flex flex-col p-7 sm:p-9">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
                          {p.label}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted">
                          <Calendar size={13} />
                          {p.period}
                        </span>
                      </div>
                      <h3 className="mt-4 font-display text-2xl font-bold text-text">{p.title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                        {p.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {p.stack.map((tech) => (
                          <span key={tech} className="chip">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={profile.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary"
                      >
                        More on GitHub
                        <ArrowUpRight
                          size={15}
                          className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                        />
                      </a>
                    </div>
                    <div className="relative flex items-center border-t border-border bg-gradient-to-br from-surfaceAlt to-[#e3ecfb] p-7 lg:border-l lg:border-t-0">
                      <div aria-hidden className="grid-bg absolute inset-0 opacity-70" />
                      <div className="relative w-full">
                        <Visual kind={p.visual} />
                      </div>
                    </div>
                  </article>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
