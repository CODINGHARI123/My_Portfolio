"use client";

import { useEffect, useState } from "react";

type Seg = [string, string]; // [text, className]

// Syntax-highlighted lines typed out character by character, then looped.
const LINES: Seg[][] = [
  [["from", "text-rose-300"], [" career ", "text-slate-200"], ["import", "text-rose-300"], [" Developer", "text-amber-300"]],
  [],
  [["class", "text-rose-300"], [" SreeHari", "text-amber-300"], ["(Developer):", "text-slate-200"]],
  [["    role ", "text-slate-200"], ["= ", "text-teal-300"], ['"Software Developer"', "text-emerald-300"]],
  [["    company ", "text-slate-200"], ["= ", "text-teal-300"], ['"Bixbi Systems"', "text-emerald-300"]],
  [["    stack ", "text-slate-200"], ["= ", "text-teal-300"], ["[", "text-slate-400"], ['"Python"', "text-emerald-300"], [", ", "text-slate-400"], ['"SQL"', "text-emerald-300"], [", ", "text-slate-400"], ['"NLP"', "text-emerald-300"], ["]", "text-slate-400"]],
  [],
  [["    def ", "text-rose-300"], ["solve", "text-sky-300"], ["(self, problem):", "text-slate-200"]],
  [["        return ", "text-rose-300"], ["self", "text-slate-400"], [".ship(", "text-slate-200"], ["data", "text-amber-300"], [" + ", "text-teal-300"], ["code", "text-amber-300"], [")", "text-slate-200"]],
];

const TOTAL = LINES.reduce((n, l) => n + l.reduce((m, [t]) => m + t.length, 0) + 1, 0);

export default function CodeWindow() {
  const [count, setCount] = useState(TOTAL);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let n = 0;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      n += 1;
      setCount(n);
      if (n < TOTAL) t = setTimeout(tick, 28);
      else t = setTimeout(() => ((n = 0), tick()), 4000);
    };
    setCount(0);
    t = setTimeout(tick, 700);
    return () => clearTimeout(t);
  }, []);

  let budget = count;
  let caretPlaced = false;

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-ink shadow-2xl shadow-primary/20">
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-white/50">sreehari.py</span>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-teal-300">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-300" />
          running
        </span>
      </div>
      <pre className="min-h-[17rem] overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-6 sm:text-[13px]">
        {LINES.map((line, i) => {
          const segs: JSX.Element[] = [];
          line.forEach(([text, cls], j) => {
            if (budget <= 0) return;
            const shown = text.slice(0, budget);
            budget -= shown.length;
            segs.push(
              <span key={j} className={cls}>
                {shown}
              </span>
            );
          });
          const lineDone = budget > 0;
          budget -= 1; // newline
          const showCaret = !caretPlaced && !lineDone;
          if (showCaret) caretPlaced = true;
          return (
            <div key={i} className="flex">
              <span className="mr-5 w-4 select-none text-right text-white/20">{i + 1}</span>
              <span>
                {segs}
                {(showCaret || (i === LINES.length - 1 && !caretPlaced)) && (
                  <span className="ml-px inline-block h-4 w-[7px] translate-y-[3px] bg-accent animate-caret" />
                )}
              </span>
            </div>
          );
        })}
      </pre>
    </div>
  );
}
