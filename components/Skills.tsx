import { profile } from "@/lib/profile";
import Reveal from "@/components/effects/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-content">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">// skills</p>
          <h2 className="mt-3 section-title">Tools I work with</h2>
          <p className="mt-4 text-muted">
            A practical toolkit covering the full data lifecycle and the software
            engineering workflow — from ingestion and modeling through APIs,
            visualization, and deployment.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profile.skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 100} as="div" className="card p-6">
              <h3 className="text-lg font-semibold text-text">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <span
                    key={item}
                    className="chip"
                    style={{
                      animation: "fade-up 0.5s ease-out both",
                      animationDelay: `${i * 100 + j * 40}ms`,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
