type Props = {
  items: string[];
  speed?: number;
  dark?: boolean;
};

// Pure-CSS infinite marquee. Items duplicated so animation loops seamlessly.
export default function Marquee({ items, speed = 40, dark = false }: Props) {
  return (
    <div className="group relative overflow-hidden">
      <div
        className="flex w-max animate-marquee gap-10 group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
      >
        {[...items, ...items].map((it, i) => (
          <span
            key={i}
            className={`flex shrink-0 items-center gap-10 font-display text-sm font-semibold uppercase tracking-[0.2em] ${
              dark ? "text-white/80" : "text-muted"
            }`}
          >
            {it}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
