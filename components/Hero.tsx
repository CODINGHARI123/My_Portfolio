import { profile } from "@/lib/profile";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary/25 blur-3xl animate-blob"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-blob"
        style={{ animationDelay: "3s" }}
      />

      <div className="container-content relative">
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="section-eyebrow opacity-0 animate-fade-in"
            style={{ animationDelay: "60ms" }}
          >
            Hello, I&apos;m
          </p>

          <h1
            className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl opacity-0 animate-fade-up"
            style={{ animationDelay: "180ms" }}
          >
            <span className="text-gradient">{profile.name}</span>
          </h1>

          <h2
            className="mt-4 text-xl font-medium text-muted sm:text-2xl opacity-0 animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            {profile.title}
          </h2>

          <p
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg opacity-0 animate-fade-up"
            style={{ animationDelay: "460ms" }}
          >
            {profile.tagline}
          </p>

          <div
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row opacity-0 animate-fade-up"
            style={{ animationDelay: "600ms" }}
          >
            <a href="#contact" className="btn-primary">
              Contact Me
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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

          <div
            className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.18em] text-muted opacity-0 animate-fade-in"
            style={{ animationDelay: "820ms" }}
          >
            <span>Python</span>
            <span className="text-border">/</span>
            <span>Machine Learning</span>
            <span className="text-border">/</span>
            <span>NLP</span>
            <span className="text-border">/</span>
            <span>Flask · Django</span>
            <span className="text-border">/</span>
            <span>Power BI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
