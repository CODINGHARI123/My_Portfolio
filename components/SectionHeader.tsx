import Reveal from "@/components/effects/Reveal";

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
};

export default function SectionHeader({ eyebrow, title, lead }: Props) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <p className="section-eyebrow">
        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-accent" />
        {eyebrow}
      </p>
      <h2 className="mt-4 section-title">{title}</h2>
      <span
        aria-hidden
        className="mx-auto mt-5 block h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent"
      />
      {lead && <p className="section-lead">{lead}</p>}
    </Reveal>
  );
}
