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
    <footer className="overflow-hidden">
      <div className="container-content">
        <p
          aria-hidden
          className="select-none text-center font-display text-[17vw] font-semibold leading-none tracking-tighter text-text/[0.05] lg:text-[11rem]"
        >
          SreeHari<span className="text-accent/40">.</span>
        </p>
        <div className="flex flex-col items-center justify-between gap-5 border-t border-border py-8 sm:flex-row">
          <p className="text-sm text-muted">
            &copy; {year} {profile.name} · Designed &amp; built with care.
          </p>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.external ? "_blank" : undefined}
                rel={s.external ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted transition duration-300 hover:-translate-y-1 hover:border-ink hover:bg-ink hover:text-white"
              >
                <s.icon size={16} />
              </a>
            ))}
            <a
              href="#top"
              className="ml-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-text transition hover:border-primary hover:text-primary"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
