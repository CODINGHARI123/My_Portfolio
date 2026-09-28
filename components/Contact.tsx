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
    <section id="contact" className="section overflow-hidden">
      <div className="container-content">
        <Reveal variant="curtain">
          <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-ink px-6 dark:border dark:border-border py-14 text-white sm:px-12 sm:py-20 lg:px-16">
            <div
              aria-hidden
              className="absolute -right-24 -top-24 -z-10 h-[28rem] w-[28rem] bg-primary/50 blur-3xl animate-morph"
            />
            <div
              aria-hidden
              className="absolute -bottom-32 left-1/3 -z-10 h-80 w-80 bg-accent/25 blur-3xl animate-morph"
              style={{ animationDelay: "-5s" }}
            />

            <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
              <div>
                <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-teal-300">
                  <span className="font-semibold">07</span>
                  <span className="h-px w-10 bg-teal-300/60" />
                  Contact
                </p>
                <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
                  Have an idea?
                  <br />
                  <span className="font-serif font-normal italic text-accent">
                    Let&apos;s build it.
                  </span>
                </h2>
                <p className="mt-6 max-w-md text-base leading-relaxed text-white/65 sm:text-lg">
                  Open to roles and collaborations in software engineering, machine learning
                  and data analytics. My inbox is always open.
                </p>
                <div className="mt-9 flex items-center gap-6">
                  <a
                    href={`mailto:${profile.email}`}
                    className="group inline-flex items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 text-sm font-semibold text-ink transition duration-300 hover:bg-accent"
                  >
                    Say hello
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white transition-transform duration-500 group-hover:rotate-45">
                      <ArrowUpRight size={16} />
                    </span>
                  </a>
                  <div aria-hidden className="relative hidden h-24 w-24 flex-shrink-0 sm:block">
                    <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow">
                      <defs>
                        <path id="circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                      </defs>
                      <text className="fill-white/60 font-mono text-[9.5px] uppercase tracking-[0.3em]">
                        <textPath href="#circle">open to work • open to work • </textPath>
                      </text>
                    </svg>
                    <span className="absolute inset-0 m-auto h-3 w-3 animate-pulse rounded-full bg-accent" />
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {channels.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:translate-x-1 hover:border-teal-300/50 hover:bg-white/[0.08]"
                    >
                      <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-white/10 text-teal-300 transition-colors group-hover:bg-teal-300 group-hover:text-ink">
                        <c.icon size={18} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                          {c.label}
                        </span>
                        <span className="mt-0.5 block truncate text-sm font-semibold">
                          {c.value}
                        </span>
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="flex-shrink-0 text-white/40 transition group-hover:text-accent"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
