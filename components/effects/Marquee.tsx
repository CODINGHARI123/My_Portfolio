type Props = {
  items: string[];
  speed?: number;
};

// Pure-CSS infinite marquee. Items duplicated so animation loops seamlessly.
export default function Marquee({ items, speed = 38 }: Props) {
  return (
    <div className="group relative overflow-hidden">
      {/* Edge fades */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent"
      />

      <div
        className="flex w-max animate-marquee gap-10 group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
      >
        {[...items, ...items].map((it, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-3 font-mono text-sm text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
            <span className="tracking-wider uppercase">{it}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
