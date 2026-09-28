import { profile } from "@/lib/profile";
import Reveal from "@/components/effects/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { Brain, Chart, Database, Smartphone } from "@/components/Icons";

const highlights = [
  {
    icon: Smartphone,
    title: "Cross-platform Software",
    body: "Shipped a mobile APK from scratch and a Windows installer for field engineers.",
  },
  {
    icon: Brain,
    title: "Machine Learning & NLP",
    body: "Sentiment models and recommendation systems with Scikit-learn, NLTK, and spaCy.",
  },
  {
    icon: Database,
    title: "Big Data & SQL",
    body: "Pipelines on Hadoop, Spark, and Hive, backed by MySQL and PostgreSQL.",
  },
  {
    icon: Chart,
    title: "Analytics & BI",
    body: "Decision-ready Power BI and Tableau dashboards built from clean data.",
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-content">
        <SectionHeader
          eyebrow="About Me"
          title="Where software meets data"
          lead="Software Developer building real-world tools — with a deep interest in machine learning and analytics."
        />

        <div className="mt-16 grid items-start gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Reveal variant="left" className="card p-8 text-base leading-relaxed text-muted">
            <div className="space-y-5">
              {profile.about.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="mt-7 grid grid-cols-2 gap-4 border-t border-border pt-6 text-sm">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  Based in
                </p>
                <p className="mt-1 font-medium text-text">{profile.location}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  Degree
                </p>
                <p className="mt-1 font-medium text-text">B.Tech CSE · LPU</p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <Reveal
                key={h.title}
                delay={120 + i * 110}
                variant="zoom"
                className="card card-hover group p-6"
              >
                <span className="icon-tile transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                  <h.icon size={20} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-text">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{h.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
