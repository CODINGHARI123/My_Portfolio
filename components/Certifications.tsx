import { profile } from "@/lib/profile";
import Reveal from "@/components/effects/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { ArrowUpRight } from "@/components/Icons";

// Row-style list with a teal fill sweeping in on hover.
export default function Certifications() {
  return (
    <section id="training" className="section">
      <div className="container-content">
        <SectionHeader
          index="05"
          eyebrow="Training"
          title="Internships &"
          accent="coursework."
          lead="Hands-on programs that shaped my data and engineering fundamentals."
        />

        <ul className="mt-14 border-t border-border">
          {profile.training.map((t, i) => (
            <Reveal key={t.title} as="li" delay={i * 120} variant="up">
              <div className="group relative overflow-hidden border-b border-border">
                <span
                  aria-hidden
                  className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-y-100"
                />
                <div className="relative grid gap-4 px-2 py-8 transition-colors duration-500 sm:px-6 lg:grid-cols-[5rem_1.2fr_1.5fr_auto] lg:items-center">
                  <span className="font-mono text-sm text-muted transition-colors group-hover:text-accent">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-text transition-colors group-hover:text-white sm:text-2xl">
                      {t.title}
                    </h3>
                    <p className="mt-1 font-serif text-lg italic text-primary transition-colors group-hover:text-teal-300">
                      {t.issuer}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted transition-colors group-hover:text-white/70">
                    {t.description}
                  </p>
                  <div className="flex items-center gap-4 lg:justify-end">
                    <span className="whitespace-nowrap font-mono text-xs uppercase tracking-wider text-muted transition-colors group-hover:text-white/60">
                      {t.period}
                    </span>
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted transition duration-500 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
