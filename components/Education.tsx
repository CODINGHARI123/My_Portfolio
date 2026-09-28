import { profile } from "@/lib/profile";
import Reveal from "@/components/effects/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { Cap, Calendar, MapPin } from "@/components/Icons";

export default function Education() {
  return (
    <section id="education" className="section section-tint">
      <div className="container-content">
        <SectionHeader eyebrow="Education" title="Academic background" />

        <div className="mx-auto mt-16 max-w-4xl space-y-6">
          {profile.education.map((edu, i) => {
            const score = edu.detail.split(":").pop()?.trim();
            return (
              <Reveal
                key={edu.school}
                delay={i * 120}
                variant="up"
                as="article"
                className="card card-hover group flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:p-7"
              >
                <span className="icon-tile h-14 w-14 rounded-2xl transition-transform duration-500 group-hover:-rotate-6">
                  <Cap size={24} />
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-text">{edu.school}</h3>
                  <p className="mt-1 text-sm font-semibold text-primary">{edu.degree}</p>
                  <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-xs font-medium text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={13} />
                      {edu.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={13} />
                      {edu.location}
                    </span>
                  </div>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 px-5 py-3 text-center">
                  <p className="font-display text-2xl font-bold text-gradient">{score}</p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                    {edu.detail.split(":")[0]}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
