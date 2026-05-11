import { profile } from "@/lib/profile";
import Reveal from "@/components/effects/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-content">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">// experience</p>
          <h2 className="mt-3 section-title">Where I&apos;ve worked</h2>
        </Reveal>

        <ol className="relative mt-14 ml-3 space-y-10 pl-8 sm:ml-6">
          {/* Animated rail with traveling signal */}
          <span
            aria-hidden
            className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary/0 via-primary/60 to-primary/0"
          />
          <span
            aria-hidden
            className="absolute left-0 top-0 h-16 w-px bg-primary/80"
            style={{
              animation: "scan-line 6s linear infinite",
            }}
          />

          {profile.experience.map((job, idx) => (
            <Reveal key={`${job.company}-${job.period}`} as="li" delay={idx * 120}>
              <div className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[34px] top-3 grid h-4 w-4 place-items-center rounded-full border-2 border-background bg-primary"
                >
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                </span>
                <div className="card p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold text-text">
                      {job.role}{" "}
                      <span className="text-primary">@ {job.company}</span>
                    </h3>
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                      {job.period}
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-muted">{job.location}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3">
                        <span
                          aria-hidden
                          className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
