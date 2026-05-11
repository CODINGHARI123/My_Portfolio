import { profile } from "@/lib/profile";

export default function Certifications() {
  return (
    <section id="training" className="section">
      <div className="container-content">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">Training</p>
          <h2 className="mt-3 section-title">Internships & coursework</h2>
          <p className="mt-4 text-muted">
            Hands-on training programs that have shaped my data and engineering
            fundamentals.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {profile.training.map((t) => (
            <article key={t.title} className="card p-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                {t.period}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-text">{t.title}</h3>
              <p className="mt-1 text-sm text-muted">{t.issuer}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {t.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
