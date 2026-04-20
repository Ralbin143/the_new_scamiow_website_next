import Logo from "./Logo";

const InstagramIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const FacebookIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.3-1.6 1.6-1.6h1.7V4.5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.4H7.6V14h2.8v8h3.1z" />
  </svg>
);
const YoutubeIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4C3.3 5.6 2.6 6.3 2.4 7.2 2 8.8 2 12 2 12s0 3.2.4 4.8c.2.9.9 1.6 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5 3-5 3z" />
  </svg>
);
const LinkedinIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.3 18H5.7V9.8h2.6V18zM7 8.6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM18.3 18h-2.6v-4c0-1 0-2.2-1.3-2.2-1.4 0-1.6 1-1.6 2.1V18h-2.6V9.8h2.5v1.1h.1c.4-.7 1.2-1.4 2.5-1.4 2.7 0 3.2 1.8 3.2 4.1V18z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--ink-deep)] text-white">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      <div className="pointer-events-none absolute -top-20 right-1/4 h-72 w-72 rounded-full bg-[var(--brand)]/15 blur-3xl" />

      {/* Big wordmark */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <h2 className="font-display text-[18vw] font-bold leading-[0.85] tracking-tighter text-white/5 md:text-[14vw]">
            SCAJ<span className="text-[var(--brand)]/80">.</span>
          </h2>
          <div className="mt-[-8vw] grid grid-cols-1 items-end gap-6 md:mt-[-6vw] md:grid-cols-2">
            <p className="font-display max-w-xl text-balance text-2xl font-bold leading-tight md:text-4xl">
              Premium automobile accessories,
              <span className="text-neutral-400">
                {" "}
                engineered to make every drive cooler, safer, and unforgettable.
              </span>
            </p>
            <div className="md:justify-self-end">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-[var(--ink)]"
              >
                Book a free consultation →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-[15px] leading-[1.6] text-neutral-300">
              Based in Kochi, obsessed with every SCAJ film we install.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[InstagramIcon, FacebookIcon, YoutubeIcon, LinkedinIcon].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social link"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:border-[var(--brand)] hover:bg-[var(--brand)]"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ),
              )}
            </div>
          </div>

          <FooterCol
            title="Products"
            links={[
              { label: "Nano-Ceramic 80", href: "#products" },
              { label: "Carbon IR 60", href: "#products" },
              { label: "Shield 35", href: "#products" },
              { label: "Coming soon", href: "#products" },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { label: "Why SCAJ", href: "#why" },
              { label: "Process", href: "#process" },
              { label: "Reviews", href: "#reviews" },
              { label: "Contact", href: "#contact" },
            ]}
          />
          <FooterCol
            title="Support"
            links={[
              { label: "Warranty", href: "#" },
              { label: "Care guide", href: "#" },
              { label: "FAQs", href: "#" },
              { label: "Privacy", href: "#" },
            ]}
          />
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-6 text-[13px] text-neutral-400 md:flex-row md:items-center">
          <div>
            © {new Date().getFullYear()} SCAJ Automotive. Crafted with
            obsession in Kochi.
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400">
        {title}
      </h4>
      <ul className="mt-5 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-[15px] text-neutral-200 transition-colors hover:text-[var(--brand)]"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
