"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, Check } from "lucide-react";

type Product = {
  tag: string;
  name: string;
  vlt: string;
  heat: string;
  uv: string;
  clarity: string;
  desc: string;
  features: string[];
  tier: "signature" | "performance" | "classic";
};

const products: Product[] = [
  {
    tag: "Signature Series",
    tier: "signature",
    name: "Nano-Ceramic 80",
    vlt: "80% VLT",
    heat: "99%",
    uv: "99.9%",
    clarity: "Crystal",
    desc: "Flagship crystal-clear film. Maximum heat rejection with almost no visible tint — the choice for drivers who want performance without the dark look.",
    features: [
      "Nano-ceramic multi-layer tech",
      "Signal-safe, zero interference",
      "Showroom-grade clarity",
      "10-year SCAJ warranty",
    ],
  },
  {
    tag: "Performance",
    tier: "performance",
    name: "Carbon IR 60",
    vlt: "60% VLT",
    heat: "94%",
    uv: "99%",
    clarity: "Bright",
    desc: "Carbon-blended film with a refined charcoal finish. Serious heat control, a touch of privacy, and a premium matte look that ages beautifully.",
    features: [
      "Carbon-infused core",
      "Non-fading matte tone",
      "Excellent night visibility",
      "10-year SCAJ warranty",
    ],
  },
  {
    tag: "Classic",
    tier: "classic",
    name: "Shield 35",
    vlt: "35% VLT",
    heat: "88%",
    uv: "99%",
    clarity: "Smooth",
    desc: "The smart daily driver. Smooth dark finish with solid privacy, reliable UV protection, and dependable heat control at everyday pricing.",
    features: [
      "Balanced tint for daily use",
      "Scratch-resistant top coat",
      "Anti-glare finish",
      "10-year SCAJ warranty",
    ],
  },
];

const upcoming = [
  { name: "Paint Protection Film (PPF)", eta: "Q3" },
  { name: "Ceramic Coating Kits", eta: "Q3" },
  { name: "Premium Car Mats", eta: "Q4" },
  { name: "Interior Detailing Kits", eta: "Q4" },
  { name: "Headlight Restoration", eta: "2027" },
  { name: "Custom Dashcams", eta: "2027" },
];

export default function Products() {
  const [active, setActive] = useState(0);
  const p = products[active];

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[var(--ink-deep)] py-24 text-white md:py-32"
    >
      <div className="absolute inset-0 grid-lines opacity-60 pointer-events-none" />
      <div className="absolute left-1/2 top-10 h-80 w-[70%] -translate-x-1/2 rounded-full radial-brand blur-3xl opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div className="mb-14 grid grid-cols-1 items-end gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-6">
            <span className="section-num text-[var(--brand)]">
              03 · The lineup
            </span>
            <h2 className="font-display mt-4 text-balance text-4xl font-bold leading-[1.02] md:text-[56px]">
              Three films.
              <br />
              <span className="text-[var(--brand)]">
                Engineered for every driver.
              </span>
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-lg leading-[1.65] text-neutral-300">
              Pick by how dark you want it. Every tier ships with the same
              10-year warranty and certified install.
            </p>
          </div>
        </div>

        {/* Editorial featured product layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Left: Tier selector */}
          <div className="lg:col-span-4">
            <div className="flex flex-col gap-3">
              {products.map((prod, i) => (
                <button
                  key={prod.name}
                  onClick={() => setActive(i)}
                  className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition-all ${
                    active === i
                      ? "border-[var(--brand)] bg-gradient-to-br from-[#1a0000] to-[#0a0000]"
                      : "border-white/15 bg-white/[0.04] hover:border-white/40 hover:bg-white/[0.08]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${
                        active === i ? "text-[var(--brand)]" : "text-neutral-300"
                      }`}
                    >
                      {prod.tag}
                    </span>
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                        active === i
                          ? "bg-[var(--brand)] text-white"
                          : "bg-white/15 text-neutral-100"
                      }`}
                    >
                      0{i + 1}
                    </span>
                  </div>
                  <div className="mt-2 flex items-baseline justify-between">
                    <h3 className="font-display text-xl font-bold text-white">
                      {prod.name}
                    </h3>
                    <span className="font-display text-sm font-semibold text-neutral-200">
                      {prod.vlt}
                    </span>
                  </div>
                  {active === i && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute inset-y-0 left-0 w-1 bg-[var(--brand)]"
                    />
                  )}
                </button>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-5 inline-flex w-full items-center justify-between rounded-2xl border border-white/15 bg-white/[0.05] px-5 py-4 text-sm font-medium text-neutral-100 transition-colors hover:border-white/40 hover:bg-white/[0.08] hover:text-white"
            >
              Not sure? Let us pick for you.
              <ArrowUpRight className="h-4 w-4 text-[var(--brand)]" />
            </a>
          </div>

          {/* Right: Featured detail */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f0f0f] to-black p-6 md:p-10"
              >
                {p.tier === "signature" && (
                  <div className="absolute right-6 top-6 rounded-full bg-[var(--brand)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                    Best seller
                  </div>
                )}

                {/* Film preview strip */}
                <div className="relative mb-8 h-44 overflow-hidden rounded-2xl border border-white/10 md:h-56">
                  <div
                    className={`absolute inset-0 ${
                      p.tier === "signature"
                        ? "bg-gradient-to-br from-[#2a0000] via-[#100000] to-black"
                        : p.tier === "performance"
                          ? "bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-black"
                          : "bg-gradient-to-br from-[#060606] via-black to-black"
                    }`}
                  />
                  <svg
                    viewBox="0 0 800 200"
                    preserveAspectRatio="none"
                    className="absolute inset-0 h-full w-full"
                  >
                    <defs>
                      <linearGradient
                        id="filmShine"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="0"
                      >
                        <stop offset="0%" stopColor="#fff" stopOpacity="0" />
                        <stop offset="50%" stopColor="#fff" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <g opacity="0.15" stroke="#ffffff" strokeWidth="0.5">
                      {Array.from({ length: 12 }).map((_, idx) => (
                        <line
                          key={idx}
                          x1="0"
                          y1={idx * 18}
                          x2="800"
                          y2={idx * 18}
                        />
                      ))}
                    </g>
                    <rect
                      x="-100"
                      y="0"
                      width="300"
                      height="200"
                      fill="url(#filmShine)"
                    >
                      <animate
                        attributeName="x"
                        from="-300"
                        to="900"
                        dur="4s"
                        repeatCount="indefinite"
                      />
                    </rect>
                  </svg>
                  <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-300">
                        Visible Light
                      </div>
                      <div className="font-display text-5xl font-bold text-white md:text-6xl">
                        {p.vlt}
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/15 bg-black/65 px-4 py-2 backdrop-blur">
                      <div className="text-[10px] font-semibold uppercase tracking-widest text-neutral-300">
                        Clarity
                      </div>
                      <div className="font-display text-lg font-semibold text-white">
                        {p.clarity}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
                  <div className="md:col-span-3">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--brand)]">
                      {p.tag}
                    </div>
                    <h3 className="font-display mt-2 text-3xl font-bold md:text-4xl">
                      {p.name}
                    </h3>
                    <p className="mt-4 text-base leading-[1.65] text-neutral-300 md:text-lg">
                      {p.desc}
                    </p>

                    <ul className="mt-6 space-y-2.5">
                      {p.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2.5 text-[15px] text-neutral-100"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand)]/15 text-[var(--brand)]">
                            <Check className="h-3 w-3" />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:col-span-2">
                    <div className="grid grid-cols-2 gap-3">
                      <Metric label="Heat rejection" value={p.heat} />
                      <Metric label="UV blocked" value={p.uv} />
                      <Metric label="VLT" value={p.vlt} />
                      <Metric label="Warranty" value="10 yrs" />
                    </div>

                    <a
                      href="#contact"
                      className="group mt-5 inline-flex w-full items-center justify-between rounded-2xl bg-[var(--brand)] px-5 py-4 text-sm font-semibold text-white transition-all hover:bg-white hover:text-[var(--ink)]"
                    >
                      Book {p.name}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Coming soon */}
        <div className="mt-20 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-neutral-100">
                <Sparkles className="h-3.5 w-3.5 text-[var(--brand)]" />
                Coming soon
              </div>
              <h3 className="font-display mt-4 text-2xl font-bold md:text-4xl">
                The accessory lineup is expanding.
              </h3>
              <p className="mt-3 text-base leading-[1.65] text-neutral-300">
                Films are just the beginning. Join the early list for launch
                pricing on every new SCAJ product.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-[var(--ink)]"
            >
              Notify me
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((u) => (
              <div
                key={u.name}
                className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/[0.05] px-4 py-3.5 text-[15px] font-medium text-neutral-100 transition-colors hover:border-[var(--brand)]/50 hover:bg-white/[0.08] hover:text-white"
              >
                <span>{u.name}</span>
                <span className="rounded-full bg-[var(--brand)]/20 px-2.5 py-0.5 text-[11px] font-semibold text-[var(--brand)]">
                  {u.eta}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/15 bg-white/[0.05] p-4">
      <div className="font-display text-2xl font-bold text-white">{value}</div>
      <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-neutral-300">
        {label}
      </div>
    </div>
  );
}
