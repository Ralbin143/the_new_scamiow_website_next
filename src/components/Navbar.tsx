"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import clsx from "clsx";

const links = [
  { label: "Products", href: "#products" },
  { label: "Why SKAJ", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Locations", href: "#service-areas" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDark = !scrolled;

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-[100] transition-all duration-500 ease-out",
        scrolled
          ? "border-b border-[var(--line)] bg-[var(--glass-light)] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)] backdrop-blur-2xl backdrop-saturate-150"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex min-h-[3.75rem] max-w-7xl items-center justify-between px-5 py-3.5 md:min-h-[4.25rem] md:px-10 md:py-4">
        <Logo variant={onDark ? "light" : "dark"} priority />

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={clsx(
                "nav-link text-[13px] font-semibold tracking-wide transition-colors",
                onDark
                  ? "text-white/85 hover:text-white"
                  : "text-[var(--muted-strong)] hover:text-[var(--ink)]",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className={clsx(
              "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13px] font-semibold tracking-wide shadow-[0_12px_32px_-8px_rgba(209,10,4,0.45)] transition-all duration-300",
              onDark
                ? "bg-[var(--brand)] text-white hover:bg-white hover:text-[var(--ink)] hover:shadow-[0_16px_40px_-10px_rgba(255,255,255,0.25)]"
                : "bg-[var(--ink)] text-white hover:bg-[var(--brand)] hover:shadow-[0_12px_32px_-8px_rgba(209,10,4,0.5)]",
            )}
          >
            Get a Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className={clsx(
            "inline-flex h-10 w-10 items-center justify-center rounded-lg border md:hidden",
            onDark
              ? "border-white/20 bg-white/5 text-white"
              : "border-black/10 bg-white text-[var(--ink)]",
          )}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={clsx(
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="mx-5 mb-4 rounded-2xl border border-[var(--line)] bg-white/95 p-4 shadow-[0_24px_48px_-20px_rgba(0,0,0,0.18)] backdrop-blur-xl">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--ink)]/80 hover:bg-black/5 hover:text-[var(--ink)]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--ink)] px-3 py-2.5 text-sm font-medium text-white hover:bg-[var(--brand)]"
            >
              Get a Quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
