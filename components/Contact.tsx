import { profile } from "@/lib/profile";
import Reveal from "@/components/effects/Reveal";
import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "@/components/Icons";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", value: "yanamala-sree-hari", href: profile.links.linkedin, icon: Linkedin },
  { label: "GitHub", value: "CODINGHARI123", href: profile.links.github, icon: Github },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    icon: Phone,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-content">
        <Reveal
          variant="zoom"
          className="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-primaryDark via-primary to-accent px-6 py-16 text-center text-white shadow-lift sm:px-12 sm:py-20"
        >
          {/* Animated decoration inside the banner */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-2xl animate-blob" />
            <div
              className="absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl animate-blob"
              style={{ animationDelay: "5s" }}
            />
            <div className="absolute right-[12%] top-10 h-16 w-16 rounded-full border-4 border-white/20 animate-float" />
            <div
              className="absolute bottom-12 left-[10%] h-10 w-10 rotate-12 rounded-lg border-2 border-white/25 animate-float-rotate"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
              }}
            />
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
            Contact
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-bold leading-tight sm:text-5xl">
            Let&apos;s build something great
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/85 sm:text-lg">
            I&apos;m open to roles and collaborations around software engineering, machine
            learning, and data analytics. Drop me a line and let&apos;s talk.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primaryDark shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <Mail size={16} />
              Say Hello
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/20"
            >
              <Linkedin size={16} />
              Connect on LinkedIn
            </a>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 100}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="card card-hover group flex h-full items-center gap-4 p-5"
              >
                <span className="icon-tile transition-transform duration-500 group-hover:scale-110">
                  <c.icon size={18} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    {c.label}
                  </span>
                  <span className="mt-0.5 block truncate text-sm font-semibold text-text">
                    {c.value}
                  </span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="flex-shrink-0 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
