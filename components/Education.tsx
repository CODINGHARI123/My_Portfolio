import { profile } from "@/lib/profile";

export default function Education() {
  return (
    <section id="education" className="section bg-surface/30">
      <div className="container-content">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">Education</p>
          <h2 className="mt-3 section-title">Academic background</h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {profile.education.map((edu) => (
            <article key={edu.school} className="card flex flex-col p-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                {edu.period}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-text">{edu.school}</h3>
              <p className="mt-2 text-sm text-muted">{edu.degree}</p>
              <p className="mt-3 text-sm font-medium text-text">{edu.detail}</p>
              <p className="mt-auto pt-4 text-xs text-muted">{edu.location}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
