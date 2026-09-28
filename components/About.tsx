import { profile } from "@/lib/profile";
import Reveal from "@/components/effects/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { Brain, Chart, Database, MapPin, Smartphone } from "@/components/Icons";

const highlights = [
  {
    icon: Smartphone,
    title: "Cross-platform software",
    body: "Mobile APK built from scratch plus a Windows installer for field engineers.",
  },
  {
    icon: Brain,
    title: "ML & NLP",
    body: "Sentiment and recommendation models with Scikit-learn, NLTK and spaCy.",
  },
  {
    icon: Database,
    title: "Big data & SQL",
    body: "Hadoop, Spark and Hive pipelines backed by MySQL and PostgreSQL.",
  },
  {
    icon: Chart,
    title: "Analytics & BI",
    body: "Decision-ready Power BI and Tableau dashboards from clean data.",
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-content">
        <SectionHeader
          index="01"
          eyebrow="About"
          title="Engineer by trade,"
          accent="data nerd by heart."
          lead="A Software Developer building real-world tools — with a deep interest in machine learning and analytics."
        />

        {/* Bento grid */}
        <div className="mt-16 grid gap-5 lg:grid-cols-6">
          <Reveal variant="curtain" className="card p-8 lg:col-span-4 lg:row-span-2 sm:p-10">
            <span className="font-serif text-7xl leading-none text-accent">&ldquo;</span>
            <div className="-mt-6 space-y-5 text-base leading-relaxed text-muted sm:text-[17px]">
              {profile.about.map((para, i) => (
                <p key={i} className={i === 0 ? "text-text" : ""}>
                  {para}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal
            delay={120}
            variant="zoom"
            className="relative overflow-hidden rounded-3xl bg-ink p-8 text-white lg:col-span-2"
          >
            <div
              aria-hidden
              className="absolute -right-12 -top-12 h-40 w-40 bg-primary/50 blur-2xl animate-morph"
            />
            <p className="relative font-mono text-[11px] uppercase tracking-[0.25em] text-teal-300">
              Currently
            </p>
            <p className="relative mt-3 font-display text-2xl font-semibold leading-snug">
              Software Developer at{" "}
              <span className="font-serif font-normal italic text-accent">Bixbi Systems</span>
            </p>
            <p className="relative mt-4 inline-flex items-center gap-1.5 text-sm text-white/60">
              <MapPin size={14} /> {profile.location}
            </p>
          </Reveal>

          <Reveal
            delay={220}
            variant="zoom"
            className="rounded-3xl bg-gradient-to-br from-primary to-teal-500 p-8 text-white lg:col-span-2"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/70">
              Education
            </p>
            <p className="mt-3 font-display text-5xl font-semibold">7.83</p>
            <p className="mt-2 text-sm text-white/80">CGPA · B.Tech CSE, Lovely Professional University</p>
          </Reveal>

          {highlights.map((h, i) => (
            <Reveal
              key={h.title}
              delay={120 + i * 100}
              variant="up"
              className="card card-hover group p-6 sm:col-span-1 lg:col-span-3 xl:col-span-3"
            >
              <div className="flex items-start gap-5">
                <span className="icon-tile">
                  <h.icon size={20} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-text">{h.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{h.body}</p>
                </div>
                <span className="ml-auto font-mono text-xs text-muted/60">0{i + 1}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
