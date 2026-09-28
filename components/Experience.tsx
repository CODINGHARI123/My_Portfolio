import { profile } from "@/lib/profile";
import Reveal from "@/components/effects/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { ArrowUpRight, MapPin } from "@/components/Icons";

// Dark section: sticky header on the left, timeline entries on the right.
export default function Experience() {
  return (
    <section id="experience" className="section relative overflow-hidden bg-ink text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 bg-primary/30 blur-3xl animate-morph"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container-content relative">
        <SectionHeader
          index="02"
          eyebrow="Experience"
          title="Where I've"
          accent="been building."
          lead="Shipping network diagnostic software in the telecom space — mobile, desktop and everything in between."
          dark
        />

        <ol className="relative mt-16 space-y-6">
          {profile.experience.map((job, idx) => (
            <Reveal key={`${job.company}-${job.period}`} as="li" delay={idx * 150} variant="up">
              <article className="group grid gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-500 hover:border-teal-300/40 hover:bg-white/[0.06] sm:p-9 lg:grid-cols-[14rem_1fr]">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-300">
                    {job.period}
                  </p>
                  <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-white/50">
                    <MapPin size={14} />
                    {job.location}
                  </p>
                  <span className="mt-5 hidden font-display text-7xl font-semibold text-white/[0.06] transition-colors duration-500 group-hover:text-accent/30 lg:block">
                    0{idx + 1}
                  </span>
                </div>
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl font-semibold">{job.role}</h3>
                      <p className="mt-1 font-serif text-xl italic text-accent">{job.company}</p>
                    </div>
                    <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full border border-white/15 text-white/60 transition duration-500 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                  <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/70 sm:text-[15px]">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3">
                        <span aria-hidden className="mt-[3px] text-teal-300">
                          ▹
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  {job.tags && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {job.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
