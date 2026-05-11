import { profile } from "@/lib/profile";

const highlights = [
  { label: "Current Role", value: "Software Developer @ Bixbi Systems" },
  { label: "Based In", value: profile.location },
  { label: "Degree", value: "B.Tech CSE · LPU (CGPA 7.83)" },
  { label: "Focus", value: "Software · ML · NLP · Analytics" },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-content">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">About</p>
          <h2 className="mt-3 section-title">A quick introduction</h2>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3 space-y-5 text-base leading-relaxed text-muted">
            {profile.about.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <dl className="lg:col-span-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {highlights.map((item) => (
              <div key={item.label} className="card p-5">
                <dt className="text-xs uppercase tracking-[0.18em] text-primary">
                  {item.label}
                </dt>
                <dd className="mt-2 text-sm font-medium text-text">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
