"use client";

import { useMemo } from "react";

// Deterministic pseudo-random so SSR matches client. Mulberry32 PRNG.
function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Node = { x: number; y: number; r: number; delay: number };
type Edge = { a: number; b: number; len: number; delay: number };

const WIDTH = 1200;
const HEIGHT = 700;
const NODE_COUNT = 28;

function build() {
  const rand = mulberry32(42);
  const nodes: Node[] = [];

  // Generate nodes via Poisson-ish jittered grid for a balanced spread.
  const cols = 7;
  const rows = 4;
  const cellW = WIDTH / cols;
  const cellH = HEIGHT / rows;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (nodes.length >= NODE_COUNT) break;
      const jitterX = (rand() - 0.5) * cellW * 0.7;
      const jitterY = (rand() - 0.5) * cellH * 0.7;
      nodes.push({
        x: c * cellW + cellW / 2 + jitterX,
        y: r * cellH + cellH / 2 + jitterY,
        r: 2 + rand() * 2.5,
        delay: rand() * 3,
      });
    }
  }

  // Connect each node to its 2 nearest neighbours, dedup, cap edge length.
  const edges: Edge[] = [];
  const seen = new Set<string>();
  nodes.forEach((n, i) => {
    const distances = nodes
      .map((m, j) => ({
        j,
        d: Math.hypot(n.x - m.x, n.y - m.y),
      }))
      .filter((d) => d.j !== i)
      .sort((a, b) => a.d - b.d)
      .slice(0, 2);

    for (const { j, d } of distances) {
      if (d > 340) continue;
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (seen.has(key)) continue;
      seen.add(key);
      edges.push({ a: i < j ? i : j, b: i < j ? j : i, len: d, delay: rand() * 4 });
    }
  });

  return { nodes, edges };
}

export default function NeuralBackground() {
  const { nodes, edges } = useMemo(build, []);

  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
    >
      <defs>
        <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.0" />
          <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.0" />
        </linearGradient>
        <radialGradient id="nodeGlow">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="1" />
          <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </radialGradient>
        <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" />
        </filter>
      </defs>

      {/* Edges */}
      <g stroke="url(#edgeGrad)" strokeWidth="1" fill="none">
        {edges.map((e, i) => {
          const a = nodes[e.a];
          const b = nodes[e.b];
          return (
            <line
              key={`e${i}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              strokeDasharray="4 8"
              className="animate-edge-flow"
              style={{
                animationDelay: `${e.delay}s`,
                animationDuration: `${4 + (e.len % 3)}s`,
              }}
            />
          );
        })}
      </g>

      {/* Data packets traveling along a subset of edges */}
      <g>
        {edges
          .filter((_, i) => i % 4 === 0)
          .map((e, i) => {
            const a = nodes[e.a];
            const b = nodes[e.b];
            const dur = 3.6 + (i % 5) * 0.7;
            return (
              <circle
                key={`p${i}`}
                r="2.4"
                fill="#a78bfa"
                opacity="0.9"
                filter="url(#soft)"
              >
                <animateMotion dur={`${dur}s`} repeatCount="indefinite" begin={`${i * 0.4}s`}>
                  <mpath />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.15;0.85;1"
                  dur={`${dur}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.4}s`}
                />
                <path
                  d={`M${a.x},${a.y} L${b.x},${b.y}`}
                  style={{ display: "none" }}
                />
              </circle>
            );
          })}
      </g>

      {/* Node halos */}
      <g>
        {nodes.map((n, i) => (
          <g key={`g${i}`}>
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r * 6}
              fill="url(#nodeGlow)"
              opacity="0.3"
              className="animate-node-pulse origin-center"
              style={{
                animationDelay: `${n.delay}s`,
                transformOrigin: `${n.x}px ${n.y}px`,
              }}
            />
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill="#7dd3fc"
              className="animate-node-pulse"
              style={{
                animationDelay: `${n.delay}s`,
                transformOrigin: `${n.x}px ${n.y}px`,
              }}
            />
          </g>
        ))}
      </g>
    </svg>
  );
}
