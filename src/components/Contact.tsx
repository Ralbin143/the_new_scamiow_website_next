"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

const InstagramIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitted(false);
    setSubmitError(null);
    setLoading(true);

    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      car: String(fd.get("car") ?? "").trim(),
      film: String(fd.get("film") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!res.ok) {
        setSubmitError(
          data.error ??
            "Something went wrong. Please try again or email sales@skaj.co.in.",
        );
        return;
      }

      form.reset();
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setSubmitError(
        "Could not reach the server. Check your connection or email sales@skaj.co.in.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-0 -z-10 dot-grid-dark opacity-55" />
      <div className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-[var(--brand)]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[var(--brand)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        {/* Header */}
        <div className="mb-14 grid grid-cols-1 items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <span className="section-num text-[var(--brand)]">
              08 · Get in touch
            </span>
            <h2 className="font-display mt-4 text-balance text-4xl font-bold leading-[1.02] md:text-[72px]">
              Let&apos;s make your car
              <br />
              <span className="text-[var(--brand)]">unforgettable.</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-lg leading-[1.65] text-[var(--muted-strong)]">
              Book a free consultation. We&apos;ll match you with the perfect
              SKAJ film for your car, budget, and climate.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Left: Info cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-1 gap-4">
              <ContactRow
                icon={<MapPin className="h-5 w-5" />}
                label="SKAJ Studio"
                value="Kochi"
                sub="Walk-ins welcome · 10am – 8pm"
              />
              <ContactRow
                icon={<Phone className="h-5 w-5" />}
                label="Call us"
                value="+91 98476 30088"
                href="tel:+919847630088"
                sub="Mon – Sat"
              />
              <ContactRow
                icon={<Mail className="h-5 w-5" />}
                label="Email"
                value="sales@skaj.co.in"
                href="mailto:sales@skaj.co.in"
                sub="We reply within 2 business hours"
              />
              <ContactRow
                icon={<InstagramIcon className="h-5 w-5" />}
                label="Instagram"
                value="@skaj.official"
                href="https://instagram.com"
                sub="Peek into our studio"
              />
            </div>

            <div className="mt-6 overflow-hidden rounded-[28px] border border-white/[0.08] bg-[var(--ink)] p-6 text-white shadow-[0_32px_64px_-20px_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.06)] md:p-9">
              <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-300">
                Hotline
              </div>
              <a
                href="tel:+919847630088"
                className="font-display mt-2 block text-3xl font-bold md:text-4xl hover:text-[var(--brand)]"
              >
                +91 98476 30088
              </a>
              <p className="mt-3 text-[15px] leading-[1.6] text-neutral-200">
                Prefer to talk? Call us directly — we&apos;re happy to walk you
                through every option.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-[28px] border border-[var(--line)] bg-white p-6 shadow-[0_32px_80px_-28px_rgba(0,0,0,0.14),0_0_0_1px_rgba(255,255,255,0.8)_inset] md:p-11 lg:col-span-7"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl font-bold md:text-3xl">
                  Request a quote
                </h3>
                <p className="mt-1.5 text-[15px] text-[var(--muted-strong)]">
                  Share a few details, we&apos;ll send a quote within 2 hours.
                </p>
              </div>
              <div className="hidden rounded-full bg-[var(--brand)]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[var(--brand)] sm:inline-flex">
                Free
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Input label="Full name" name="name" placeholder="John Doe" required />
                <Input
                  label="Phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  required
                />
              </div>
              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="you@domain.com"
                required
              />
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Input
                  label="Car model"
                  name="car"
                  placeholder="e.g. Hyundai Creta 2024"
                  required
                />
                <div>
                  <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--muted-strong)]">
                    Film interest
                  </label>
                  <select
                    name="film"
                    className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-[15px] text-[var(--ink)] outline-none transition-colors focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/15"
                    required
                  >
                    <option value="Nano-Ceramic 80 (Signature)">
                      Nano-Ceramic 80 (Signature)
                    </option>
                    <option value="Carbon IR 60 (Performance)">
                      Carbon IR 60 (Performance)
                    </option>
                    <option value="Shield 35 (Classic)">
                      Shield 35 (Classic)
                    </option>
                    <option value="Not sure — help me choose">
                      Not sure — help me choose
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--muted-strong)]">
                  Message (optional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Tell us anything that helps us prepare your quote…"
                  className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-[15px] text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--muted-soft)] focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/15"
                />
              </div>

              {submitError && (
                <p
                  className="rounded-xl border border-[var(--brand)]/25 bg-[var(--brand)]/8 px-4 py-3 text-[13px] text-[var(--ink)]"
                  role="alert"
                >
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--ink)] px-5 py-4 text-[13px] font-semibold tracking-wide text-white shadow-[0_16px_40px_-12px_rgba(0,0,0,0.3)] transition-all hover:bg-[var(--brand)] hover:shadow-[0_20px_48px_-12px_rgba(209,10,4,0.4)] disabled:pointer-events-none disabled:opacity-60"
              >
                {loading
                  ? "Sending…"
                  : submitted
                    ? "Thanks — we'll be in touch!"
                    : "Send request"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <p className="text-center text-[12px] text-[var(--muted-soft)]">
                By submitting, you agree to our terms. We never share your
                information.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  sub,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
  href?: string;
}) {
  const Tag = href ? "a" : "div";
  return (
    <Tag
      {...(href ? { href } : {})}
      className="group flex items-start gap-4 rounded-[22px] border border-[var(--line)] bg-white p-5 shadow-[0_8px_28px_-12px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--brand)]/35 hover:shadow-[0_24px_48px_-20px_rgba(209,10,4,0.18)]"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)] transition-colors group-hover:bg-[var(--brand)] group-hover:text-white">
        {icon}
      </div>
      <div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--muted-soft)]">
          {label}
        </div>
        <div className="font-display mt-0.5 text-base font-semibold text-[var(--ink)]">
          {value}
        </div>
        {sub && (
          <div className="mt-1 text-[13px] text-[var(--muted-strong)]">
            {sub}
          </div>
        )}
      </div>
    </Tag>
  );
}

function Input({
  label,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--muted-strong)]">
        {label}
      </label>
      <input
        {...rest}
        className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-[15px] text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--muted-soft)] focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/15"
      />
    </div>
  );
}
