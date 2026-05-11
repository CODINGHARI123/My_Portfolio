import { profile } from "@/lib/profile";
import Reveal from "@/components/effects/Reveal";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container-content">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">// education</p>
          <h2 className="mt-3 section-title">Academic background</h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {profile.education.map((edu, i) => (
            <Reveal
              key={edu.school}
              delay={i * 120}
              as="article"
              className="card flex flex-col p-6"
            >
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                {edu.period}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-text">{edu.school}</h3>
              <p className="mt-2 text-sm text-muted">{edu.degree}</p>
              <p className="mt-3 text-sm font-medium text-text">{edu.detail}</p>
              <p className="mt-auto pt-4 text-xs text-muted">{edu.location}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
