import { profile } from "@/lib/profile";
import RotatingTitle from "@/components/effects/RotatingTitle";
import Marquee from "@/components/effects/Marquee";
import CountUp from "@/components/effects/CountUp";
import CodeWindow from "@/components/effects/CodeWindow";
import { Activity, ArrowRight, Github, Linkedin, Mail } from "@/components/Icons";

const ROLES = [
  "Software Developer",
  "Data Scientist",
  "Machine Learning Engineer",
  "Full Stack Engineer",
  "Data Analyst",
];

const MARQUEE_ITEMS = [
  "Python",
  "Machine Learning",
  "NLP",
  "Scikit-learn",
  "PySpark",
  "Hadoop",
  "Hive",
  "Power BI",
  "Tableau",
  "Django",
  "Flask",
  "REST APIs",
  "MySQL",
  "PostgreSQL",
  "Android Studio",
  "Linux",
];

const STATS = [
  { to: 1, suffix: "+", label: "Years in industry" },
  { to: 4, suffix: "", label: "Shipped projects" },
  { to: 7.83, suffix: "", decimals: 2, label: "B.Tech CGPA" },
];

// Tech badges orbiting the code window.
const ORBIT = [
  { label: "Python", r: "16.5rem", delay: "0s" },
  { label: "SQL", r: "16.5rem", delay: "-5.5s" },
  { label: "NLP", r: "16.5rem", delay: "-11s" },
  { label: "Power BI", r: "16.5rem", delay: "-16.5s" },
];

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 sm:pt-36 lg:pt-40">
      {/* Backdrop: dotted field + morphing colour blobs */}
      <div aria-hidden className="dot-bg pointer-events-none absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-10 -z-10 h-[34rem] w-[34rem] bg-gradient-to-br from-teal-200/60 to-emerald-100/40 blur-3xl animate-morph"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-[26rem] w-[26rem] bg-gradient-to-tr from-amber-200/50 to-orange-100/30 blur-3xl animate-morph"
        style={{ animationDelay: "-6s" }}
      />

      <div className="container-content grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        {/* Left column — intro */}
        <div>
          <div
            className="inline-flex items-center gap-3 rounded-full border border-border bg-surface/80 py-1 pl-1 pr-4 text-xs font-medium text-text backdrop-blur animate-fade-in"
            style={{ animationDelay: "60ms" }}
          >
            <span className="flex items-center gap-1.5 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
              Available
            </span>
            Open to new roles · {profile.location.split(",")[0]}
          </div>

          <h1
            className="mt-7 font-display text-[2.7rem] font-semibold leading-[1.02] tracking-tight text-text sm:text-6xl lg:text-7xl animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            Yanamala
            <br />
            <span className="font-serif font-normal italic text-primary">SreeHari</span>
            <span className="text-accent">.</span>
          </h1>

          <p
            className="mt-6 flex min-h-[2.25rem] flex-wrap items-baseline gap-x-3 font-display text-xl font-medium sm:text-2xl animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            <span className="font-mono text-sm text-muted">~/</span>
            <RotatingTitle phrases={ROLES} />
          </p>

          <p
            className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg animate-fade-up"
            style={{ animationDelay: "420ms" }}
          >
            I turn <span className="marker font-semibold text-text">raw data</span> and{" "}
            <span className="marker font-semibold text-text">real-world problems</span> into
            shipped software — from cross-platform network diagnostic tools to ML models and
            analytics dashboards.
          </p>

          <div
            className="mt-9 flex flex-wrap items-center gap-3 animate-fade-up"
            style={{ animationDelay: "540ms" }}
          >
            <a href="#projects" className="btn-primary">
              Explore my work
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-ghost">
              Contact
            </a>
            <div className="ml-1 flex items-center gap-1">
              {[
                { href: profile.links.github, icon: Github, label: "GitHub" },
                { href: profile.links.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: profile.links.email, icon: Mail, label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="grid h-11 w-11 place-items-center rounded-full text-muted transition duration-300 hover:-translate-y-1 hover:bg-ink hover:text-white"
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <dl
            className="mt-12 grid max-w-md grid-cols-3 divide-x divide-border border-y border-border animate-fade-up"
            style={{ animationDelay: "660ms" }}
          >
            {STATS.map((s) => (
              <div key={s.label} className="px-4 py-4 first:pl-0">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-semibold text-text">
                  <CountUp to={s.to} suffix={s.suffix} decimals={s.decimals} />
                </dd>
                <p className="mt-1 text-xs text-muted">{s.label}</p>
              </div>
            ))}
          </dl>
        </div>

        {/* Right column — live code window with orbiting badges */}
        <div
          className="relative mx-auto w-full max-w-lg animate-scale-in"
          style={{ animationDelay: "300ms" }}
        >
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 -z-10 h-[33rem] w-[33rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary/20"
          />
          <div aria-hidden className="absolute left-1/2 top-1/2 z-20 hidden h-0 w-0 md:block">
            {ORBIT.map((o) => (
              <span
                key={o.label}
                className="absolute -ml-10 -mt-4 flex w-20 justify-center animate-orbit"
                style={{ ["--r" as string]: o.r, animationDelay: o.delay }}
              >
                <span className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-text shadow-lift">
                  {o.label}
                </span>
              </span>
            ))}
          </div>

          <div className="rotate-[-2deg] transition-transform duration-700 hover:rotate-0">
            <CodeWindow />
          </div>

          <div className="glass absolute -bottom-16 left-2 z-30 flex items-center gap-3 rounded-2xl border border-border px-4 py-3 shadow-lift animate-float sm:-left-10">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/20 text-amber-700">
              <Activity size={18} />
            </span>
            <div>
              <p className="text-xs font-bold text-text">Currently building</p>
              <p className="text-[11px] text-muted">COTS network diagnostics</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tech marquee — tilted ribbon */}
      <div className="relative mt-28 -rotate-1 bg-ink py-4 sm:mt-32">
        <Marquee items={MARQUEE_ITEMS} dark />
      </div>
    </section>
  );
}
