import { profile } from "@/lib/profile";
import { Github, Linkedin, Mail } from "@/components/Icons";

const socials = [
  { href: profile.links.github, label: "GitHub", icon: Github, external: true },
  { href: profile.links.linkedin, label: "LinkedIn", icon: Linkedin, external: true },
  { href: `mailto:${profile.email}`, label: "Email", icon: Mail, external: false },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-content flex flex-col items-center justify-between gap-5 py-8 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent font-display text-[10px] font-bold text-white">
            {profile.initials}
          </span>
          <p className="text-sm text-muted">
            &copy; {year} {profile.name}. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.external ? "_blank" : undefined}
              rel={s.external ? "noopener noreferrer" : undefined}
              aria-label={s.label}
              className="grid h-10 w-10 place-items-center rounded-xl border border-border text-muted transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
            >
              <s.icon size={17} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
