import { profile } from "@/lib/profile";
import Reveal from "@/components/effects/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { Cap, MapPin } from "@/components/Icons";

// Three cards connected by a horizontal "path" on large screens.
export default function Education() {
  return (
    <section id="education" className="section section-tint">
      <div className="container-content">
        <SectionHeader
          index="06"
          eyebrow="Education"
          title="Academic"
          accent="path."
          lead="From Vempalli to Tirupati to Jalandhar — a strong foundation in maths and computer science."
        />

        <div className="relative mt-16">
          <span
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {profile.education.map((edu, i) => {
              const score = edu.detail.split(":").pop()?.trim();
              return (
                <Reveal key={edu.school} delay={i * 150} variant="up" as="article">
                  <div className="relative">
                    <span className="relative z-10 mx-auto mb-6 hidden h-14 w-14 place-items-center rounded-full border-4 border-surfaceAlt bg-ink text-accent lg:grid">
                      <Cap size={22} />
                    </span>
                    <div className="card card-hover group h-full p-7">
                      <div className="flex items-baseline justify-between gap-3">
                        <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                          {edu.period}
                        </p>
                        <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-[11px] font-semibold text-amber-700 dark:text-amber-300">
                          {edu.detail.split(":")[0]}
                        </span>
                      </div>
                      <p className="mt-5 font-display text-5xl font-semibold text-text transition-colors duration-500 group-hover:text-primary">
                        {score}
                      </p>
                      <h3 className="mt-5 font-display text-lg font-semibold text-text">
                        {edu.school}
                      </h3>
                      <p className="mt-1 font-serif text-lg italic text-muted">{edu.degree}</p>
                      <p className="mt-5 inline-flex items-center gap-1.5 border-t border-border pt-4 text-xs text-muted">
                        <MapPin size={13} />
                        {edu.location}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
