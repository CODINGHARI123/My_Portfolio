import { profile } from "@/lib/profile";
import Reveal from "@/components/effects/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { Brain, Chart, Code, Database, Server, Wrench } from "@/components/Icons";

const ICONS: Record<string, typeof Code> = {
  Languages: Code,
  "Data Science & ML": Brain,
  "Big Data & Databases": Database,
  "Visualization & Reporting": Chart,
  "Frameworks & Backend": Server,
  "Tools & Platforms": Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="section section-tint">
      <div className="container-content">
        <SectionHeader
          eyebrow="Skills"
          title="My technical toolkit"
          lead="A practical toolkit covering the full data lifecycle and the software engineering workflow."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profile.skillGroups.map((group, i) => {
            const Icon = ICONS[group.title] ?? Code;
            return (
              <Reveal
                key={group.title}
                delay={(i % 3) * 120}
                variant="zoom"
                className="card card-hover group overflow-hidden p-7"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary to-accent transition-transform duration-500 group-hover:scale-x-100"
                />
                <div className="flex items-center gap-4">
                  <span className="icon-tile transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-110">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-text">{group.title}</h3>
                    <p className="text-xs font-medium text-muted">{group.items.length} skills</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium text-text transition duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
