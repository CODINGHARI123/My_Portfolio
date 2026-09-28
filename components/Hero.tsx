import { profile } from "@/lib/profile";
import RotatingTitle from "@/components/effects/RotatingTitle";
import Marquee from "@/components/effects/Marquee";
import CountUp from "@/components/effects/CountUp";
import TiltCard from "@/components/effects/TiltCard";
import { Activity, ArrowRight, Brain, Github, Mail, MapPin } from "@/components/Icons";

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
  { to: 1, suffix: "+", label: "Years Experience" },
  { to: 4, suffix: "", label: "Projects Built" },
  { to: 7.83, suffix: "", decimals: 2, label: "B.Tech CGPA" },
];

export default function Hero() {
  const [first, ...rest] = profile.name.split(" ");

  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      {/* Backdrop: grid + soft gradient blobs */}
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-24 -z-10 h-[26rem] w-[26rem] rounded-full bg-accent/15 blur-3xl animate-blob"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 -z-10 h-[30rem] w-[30rem] rounded-full bg-primary/15 blur-3xl animate-blob"
        style={{ animationDelay: "4s" }}
      />

      {/* Floating decorations */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
        <div className="glass-cube absolute left-[40%] top-24 h-16 w-16 rounded-xl animate-float-rotate" />
        <div
          className="glass-cube absolute left-[6%] top-[62%] h-10 w-10 rounded-lg animate-float-rotate"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute right-[8%] top-28 h-20 w-20 rounded-full border-[5px] border-accent/30 animate-float" />
        <div
          className="absolute right-[18%] bottom-40 h-5 w-5 rounded-full bg-gradient-to-br from-primary/60 to-accent/60 animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        <span className="absolute left-[30%] top-[30%] font-mono text-2xl font-bold text-primary/20 animate-float">
          &lt;/&gt;
        </span>
        <span
          className="absolute left-[33%] top-[70%] font-mono text-2xl font-bold text-accent/30 animate-float"
          style={{ animationDelay: "2.5s" }}
        >
          {"{ }"}
        </span>
        <span
          className="absolute right-[42%] bottom-24 font-mono text-xl font-bold text-primary/20 animate-float"
          style={{ animationDelay: "1s" }}
        >
          ( )
        </span>
      </div>

      <div className="container-content grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        {/* Left column — intro */}
        <div>
          <div
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-text shadow-soft animate-fade-in"
            style={{ animationDelay: "60ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to opportunities · {profile.location.split(",")[0]}
          </div>

          <h1
            className="mt-6 font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-text sm:text-6xl lg:text-[4.25rem] animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            Hi, I&apos;m <span className="text-gradient">{first}</span>
            <br />
            <span className="text-gradient">{rest.join(" ")}</span>
          </h1>

          <p
            className="mt-6 flex min-h-[2.25rem] flex-wrap items-baseline gap-x-3 font-display text-xl font-semibold sm:text-2xl animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            <span className="text-sm font-medium text-muted">I&apos;m a</span>
            <RotatingTitle phrases={ROLES} />
          </p>

          <p
            className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg animate-fade-up"
            style={{ animationDelay: "440ms" }}
          >
            I build <strong className="font-semibold text-text">production software</strong>{" "}
            and <strong className="font-semibold text-text">data-driven systems</strong> —
            from cross-platform network diagnostic tools to ML models, NLP pipelines, and
            analytics dashboards.
          </p>

          <div
            className="mt-8 flex flex-wrap gap-3 animate-fade-up"
            style={{ animationDelay: "560ms" }}
          >
            <a href="#projects" className="btn-primary">
              View My Work
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-ghost">
              Get in Touch
              <Mail size={16} />
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>

          <dl
            className="mt-10 flex flex-wrap gap-x-10 gap-y-4 animate-fade-up"
            style={{ animationDelay: "680ms" }}
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-bold text-gradient">
                  <CountUp to={s.to} suffix={s.suffix} decimals={s.decimals} />
                </dd>
                <p className="mt-1 text-xs font-medium text-muted">{s.label}</p>
              </div>
            ))}
          </dl>
        </div>

        {/* Right column — profile card */}
        <div className="relative mx-auto w-full max-w-md animate-scale-in" style={{ animationDelay: "300ms" }}>
          {/* Floating badges */}
          <div className="glass absolute -left-4 -top-6 z-20 flex items-center gap-2 rounded-xl border border-border px-3 py-2 text-xs font-semibold text-text shadow-lift animate-float sm:-left-10">
            <Activity size={14} className="text-primary" />
            Real-time
          </div>
          <div
            className="glass absolute -bottom-5 -right-3 z-20 flex items-center gap-2 rounded-xl border border-border px-3 py-2 text-xs font-semibold text-text shadow-lift animate-float sm:-right-8"
            style={{ animationDelay: "2s" }}
          >
            <Brain size={14} className="text-accent" />
            ML &amp; NLP
          </div>

          {/* Rotating dashed ring behind card */}
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2rem] border-2 border-dashed border-primary/15 animate-spin-slow"
            style={{ animationDuration: "60s" }}
          />

          <TiltCard maxTilt={7}>
            <div className="card gradient-border overflow-hidden p-7 shadow-lift">
              <div
                aria-hidden
                className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl"
              />
              <div className="relative grid h-[4.5rem] w-[4.5rem] place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent font-display text-2xl font-bold text-white shadow-glow">
                {profile.initials}
                <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-[3px] border-white bg-emerald-500" />
              </div>

              <h3 className="mt-5 font-display text-xl font-bold text-text">{profile.name}</h3>
              <p className="mt-1 text-sm font-semibold text-primary">
                Software Developer @ Bixbi Systems
              </p>

              <div className="my-5 h-px bg-border" />

              <ul className="space-y-3 text-sm text-muted">
                <li className="flex items-center gap-2.5">
                  <MapPin size={16} className="text-accent" />
                  {profile.location}
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail size={16} className="text-accent" />
                  <a href={profile.links.email} className="truncate hover:text-primary">
                    {profile.email}
                  </a>
                </li>
              </ul>

              {/* Mini live-signal visual */}
              <div className="mt-5 flex h-12 items-end gap-1 rounded-xl bg-surfaceAlt p-2">
                {[40, 65, 50, 80, 55, 90, 70, 45, 85, 60, 75, 95, 50, 70].map((h, i) => (
                  <span
                    key={i}
                    className="flex-1 origin-bottom rounded-sm bg-gradient-to-t from-primary to-accent animate-bar-grow"
                    style={{ height: `${h}%`, animationDelay: `${i * 90}ms` }}
                  />
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Python", "SQL", "Django", "NLP"].map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </TiltCard>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="mt-16 flex justify-center animate-fade-in" style={{ animationDelay: "1000ms" }}>
        <a
          href="#about"
          aria-label="Scroll to about"
          className="group flex flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-muted transition hover:text-primary"
        >
          Scroll
          <span className="grid h-9 w-5 place-items-start rounded-full border-2 border-border p-1 transition group-hover:border-primary">
            <span className="h-1.5 w-1 animate-bounce rounded-full bg-primary" />
          </span>
        </a>
      </div>

      {/* Tech marquee */}
      <div className="relative mt-12 border-y border-border bg-surface py-5">
        <Marquee items={MARQUEE_ITEMS} />
      </div>
    </section>
  );
}
