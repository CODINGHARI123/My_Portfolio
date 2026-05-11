import { profile } from "@/lib/profile";
import NeuralBackground from "@/components/effects/NeuralBackground";
import GlitchText from "@/components/effects/GlitchText";
import RotatingTitle from "@/components/effects/RotatingTitle";
import Marquee from "@/components/effects/Marquee";

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

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16"
    >
      {/* Layered backdrop */}
      <NeuralBackground />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-blob"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-accent/15 blur-3xl animate-blob"
        style={{ animationDelay: "3s" }}
      />

      <div className="container-content relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Status badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.22em] text-muted opacity-0 animate-fade-in backdrop-blur"
            style={{ animationDelay: "60ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for work
          </div>

          <p
            className="mt-6 section-eyebrow opacity-0 animate-fade-in"
            style={{ animationDelay: "180ms" }}
          >
            &gt; init portfolio --user sree_hari
          </p>

          <h1
            className="mt-4 font-mono text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl opacity-0 animate-fade-up"
            style={{ animationDelay: "260ms" }}
          >
            <span className="text-gradient">
              <GlitchText text={profile.name} duration={1600} />
            </span>
          </h1>

          <h2
            className="mt-6 min-h-[2.5rem] text-xl font-medium text-muted sm:text-2xl opacity-0 animate-fade-up"
            style={{ animationDelay: "520ms" }}
          >
            <span className="text-muted">I am a </span>
            <RotatingTitle phrases={ROLES} />
          </h2>

          <p
            className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg opacity-0 animate-fade-up"
            style={{ animationDelay: "680ms" }}
          >
            {profile.tagline}
          </p>

          <div
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row opacity-0 animate-fade-up"
            style={{ animationDelay: "820ms" }}
          >
            <a href="#contact" className="btn-primary">
              Contact Me
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2c-3.34.73-4.04-1.6-4.04-1.6-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.31-.54-1.54.12-3.2 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.89.12 3.2.77.84 1.24 1.92 1.24 3.23 0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
              </svg>
              View GitHub
            </a>
          </div>

          {/* Scroll cue */}
          <div
            className="mt-16 flex justify-center opacity-0 animate-fade-in"
            style={{ animationDelay: "1100ms" }}
          >
            <a
              href="#about"
              aria-label="Scroll to about"
              className="group flex flex-col items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-muted transition hover:text-primary"
            >
              Scroll
              <span className="grid h-9 w-5 place-items-start rounded-full border border-border p-1 transition group-hover:border-primary">
                <span className="h-1.5 w-1 animate-bounce rounded-full bg-primary/80" />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Tech marquee — full bleed under hero */}
      <div className="relative mt-16 border-y border-border/70 bg-surface/40 py-5 backdrop-blur-sm">
        <Marquee items={MARQUEE_ITEMS} />
      </div>
    </section>
  );
}
