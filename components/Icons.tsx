// Shared inline SVG icons (stroke icons inherit currentColor).
type P = { size?: number; className?: string };

const stroke = (size: number, className?: string) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className,
});

export const ArrowRight = ({ size = 16, className }: P) => (
  <svg {...stroke(size, className)}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export const ArrowUpRight = ({ size = 16, className }: P) => (
  <svg {...stroke(size, className)}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const Mail = ({ size = 16, className }: P) => (
  <svg {...stroke(size, className)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const Phone = ({ size = 16, className }: P) => (
  <svg {...stroke(size, className)}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.81a2 2 0 0 1-.45 2.11L8.1 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.92Z" />
  </svg>
);

export const MapPin = ({ size = 16, className }: P) => (
  <svg {...stroke(size, className)}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const Activity = ({ size = 16, className }: P) => (
  <svg {...stroke(size, className)}>
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

export const Brain = ({ size = 16, className }: P) => (
  <svg {...stroke(size, className)}>
    <path d="M9.5 2A2.5 2.5 0 0 0 7 4.5v.1A3 3 0 0 0 4.5 9a3 3 0 0 0 .6 5.4A3 3 0 0 0 9 18.9V19a3 3 0 0 0 3 3V4.5A2.5 2.5 0 0 0 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 1 17 4.5v.1A3 3 0 0 1 19.5 9a3 3 0 0 1-.6 5.4A3 3 0 0 1 15 18.9V19a3 3 0 0 1-3 3" />
  </svg>
);

export const Smartphone = ({ size = 16, className }: P) => (
  <svg {...stroke(size, className)}>
    <rect x="6" y="2" width="12" height="20" rx="2.5" />
    <path d="M11 18h2" />
  </svg>
);

export const Chart = ({ size = 16, className }: P) => (
  <svg {...stroke(size, className)}>
    <path d="M3 3v18h18" />
    <path d="M7 15v2M11 11v6M15 7v10M19 12v5" />
  </svg>
);

export const Database = ({ size = 16, className }: P) => (
  <svg {...stroke(size, className)}>
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
    <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
  </svg>
);

export const Code = ({ size = 16, className }: P) => (
  <svg {...stroke(size, className)}>
    <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
  </svg>
);

export const Server = ({ size = 16, className }: P) => (
  <svg {...stroke(size, className)}>
    <rect x="3" y="3" width="18" height="7" rx="2" />
    <rect x="3" y="14" width="18" height="7" rx="2" />
    <path d="M7 6.5h.01M7 17.5h.01" />
  </svg>
);

export const Wrench = ({ size = 16, className }: P) => (
  <svg {...stroke(size, className)}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z" />
  </svg>
);

export const Briefcase = ({ size = 16, className }: P) => (
  <svg {...stroke(size, className)}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

export const Cap = ({ size = 16, className }: P) => (
  <svg {...stroke(size, className)}>
    <path d="M22 10 12 5 2 10l10 5 10-5Z" />
    <path d="M6 12v5c3 2 9 2 12 0v-5" />
  </svg>
);

export const Award = ({ size = 16, className }: P) => (
  <svg {...stroke(size, className)}>
    <circle cx="12" cy="8" r="6" />
    <path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11" />
  </svg>
);

export const Calendar = ({ size = 16, className }: P) => (
  <svg {...stroke(size, className)}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

export const Github = ({ size = 16, className }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2c-3.34.73-4.04-1.6-4.04-1.6-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.31-.54-1.54.12-3.2 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.89.12 3.2.77.84 1.24 1.92 1.24 3.23 0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
  </svg>
);

export const Linkedin = ({ size = 16, className }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05a4.17 4.17 0 0 1 3.75-2.06c4 0 4.74 2.63 4.74 6.05V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21h-4V9Z" />
  </svg>
);
