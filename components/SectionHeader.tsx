import Reveal from "@/components/effects/Reveal";

type Props = {
  index: string;
  eyebrow: string;
  title: string;
  accent?: string; // word(s) rendered in italic serif after the title
  lead?: string;
  dark?: boolean;
};

// Editorial, left-aligned header: "01 / About" index, big title, lead on the right.
export default function SectionHeader({ index, eyebrow, title, accent, lead, dark }: Props) {
  return (
    <div className="grid items-end gap-6 lg:grid-cols-[1.4fr_1fr]">
      <Reveal>
        <p
          className={`flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] ${
            dark ? "text-teal-300" : "text-primary"
          }`}
        >
          <span className="font-semibold">{index}</span>
          <span className={`h-px w-10 ${dark ? "bg-teal-300/60" : "bg-primary/50"}`} />
          {eyebrow}
        </p>
        <h2 className={`mt-5 section-title ${dark ? "!text-white" : ""}`}>
          {title}{" "}
          {accent && (
            <span className={`accent-serif ${dark ? "!text-accent" : ""}`}>{accent}</span>
          )}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={150}>
          <p
            className={`text-base leading-relaxed lg:text-right ${
              dark ? "text-white/60" : "text-muted"
            }`}
          >
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}
