import { profile } from "@/lib/profile";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-content">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">Experience</p>
          <h2 className="mt-3 section-title">Where I&apos;ve worked</h2>
        </div>

        <ol className="relative mt-14 ml-3 space-y-10 border-l border-border pl-8 sm:ml-6">
          {profile.experience.map((job) => (
            <li key={`${job.company}-${job.period}`} className="relative">
              <span
                aria-hidden
                className="absolute -left-[33px] top-2 grid h-4 w-4 place-items-center rounded-full border-2 border-background bg-primary"
              />
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
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
