import { profile } from "@/lib/profile";
import Reveal from "@/components/effects/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { Briefcase, Calendar, MapPin } from "@/components/Icons";

export default function Experience() {
  return (
    <section id="experience" className="section section-tint">
      <div className="container-content">
        <SectionHeader
          eyebrow="Experience"
          title="My professional journey"
          lead="Building and shipping network diagnostic software in the telecom space."
        />

        <ol className="relative mx-auto mt-16 max-w-4xl space-y-10 pl-10 sm:pl-14">
          {/* Timeline rail with a travelling pulse */}
          <span
            aria-hidden
            className="absolute left-[15px] top-2 h-[calc(100%-1rem)] w-0.5 overflow-hidden rounded-full bg-gradient-to-b from-primary/40 via-accent/40 to-transparent sm:left-[23px]"
          >
            <span className="absolute left-0 top-0 h-24 w-full bg-gradient-to-b from-transparent via-primary to-transparent animate-scan-line" />
          </span>

          {profile.experience.map((job, idx) => (
            <Reveal key={`${job.company}-${job.period}`} as="li" delay={idx * 140} variant="right">
              <div className="relative">
                <span
                  aria-hidden
                  className="absolute -left-10 top-6 grid h-8 w-8 place-items-center rounded-full border-4 border-surfaceAlt bg-gradient-to-br from-primary to-accent text-white shadow-glow sm:-left-14 sm:h-12 sm:w-12"
                >
                  <Briefcase size={16} />
                </span>
                <div className="card card-hover p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl font-bold text-text">{job.role}</h3>
                      <p className="mt-1 text-sm font-semibold text-primary">{job.company}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primaryDark">
                      <Calendar size={13} />
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted">
                    <MapPin size={14} />
                    {job.location}
                  </p>
                  <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3">
                        <span
                          aria-hidden
                          className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-primary to-accent"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  {job.tags && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {job.tags.map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
