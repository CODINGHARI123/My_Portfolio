import { profile } from "@/lib/profile";
import Reveal from "@/components/effects/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { Award, Calendar } from "@/components/Icons";

export default function Certifications() {
  return (
    <section id="training" className="section">
      <div className="container-content">
        <SectionHeader
          eyebrow="Training"
          title="Internships & coursework"
          lead="Hands-on training programs that shaped my data and engineering fundamentals."
        />

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
          {profile.training.map((t, i) => (
            <Reveal
              key={t.title}
              delay={i * 140}
              variant={i % 2 ? "right" : "left"}
              as="article"
              className="card card-hover group flex gap-5 p-7"
            >
              <span className="icon-tile h-14 w-14 rounded-2xl transition-transform duration-500 group-hover:scale-110">
                <Award size={24} />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-text">{t.title}</h3>
                <p className="mt-1 text-sm font-semibold text-primary">{t.issuer}</p>
                <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-muted">
                  <Calendar size={13} />
                  {t.period}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{t.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
