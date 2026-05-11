import { profile } from "@/lib/profile";
import Reveal from "@/components/effects/Reveal";
import TiltCard from "@/components/effects/TiltCard";

export default function Projects() {
  return (
    <section id="projects" className="section bg-surface/30">
      <div className="container-content">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">// projects</p>
          <h2 className="mt-3 section-title">Selected work</h2>
          <p className="mt-4 text-muted">
            A mix of production software, machine-learning systems, and analytics
            dashboards I&apos;ve built across roles and personal work.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {profile.projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 110}>
              <TiltCard className="h-full">
                <article className="card flex h-full flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-text">{p.title}</h3>
                    <span
                      aria-hidden
                      className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-primary/10 text-primary"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path d="M20 7 9 18l-5-5" />
                      </svg>
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-primary">
                    {p.period}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                    {p.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
