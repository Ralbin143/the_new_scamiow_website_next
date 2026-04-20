"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  ShieldCheck,
  Sun,
  Snowflake,
  Thermometer,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[var(--ink-deep)] text-white"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-lines opacity-70" />
        <div className="absolute left-1/2 top-[55%] h-[720px] w-[720px] -translate-x-1/2 rounded-full radial-brand blur-3xl" />
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-[var(--brand)]/20 blur-[120px]" />
        <div className="absolute -right-40 -bottom-20 h-[520px] w-[520px] rounded-full bg-[var(--brand)]/10 blur-[130px]" />
        <div className="absolute inset-0 noise opacity-[0.06]" />
      </div>

      {/* Top status bar */}
      <div className="relative mx-auto mt-28 flex max-w-7xl items-center justify-between px-5 text-[11px] uppercase tracking-[0.25em] text-neutral-400 md:mt-32 md:px-8">
        <span className="inline-flex items-center gap-2">
          <span className="h-px w-8 bg-neutral-500" />
          SCAJ / 001
        </span>
        <span className="hidden md:inline-flex items-center gap-2">
          Kochi · India
          <span className="h-px w-8 bg-neutral-500" />
        </span>
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 pt-10 pb-24 md:px-8 md:pt-14 md:pb-32 lg:grid-cols-12 lg:gap-8">
        {/* Left: Headline */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-200 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--brand)]" />
            </span>
            Now installing · Nano-Ceramic 80
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display mt-7 text-balance text-[56px] font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-[96px] lg:text-[108px]"
          >
            Feel the
            <br />
            <span className="relative inline-block">
              <span className="shimmer-text">silence</span>
              <span className="absolute -bottom-1.5 left-0 h-1.5 w-full rounded-full bg-[var(--brand)]" />
            </span>
            <br />
            of cool air.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-neutral-300 md:text-xl"
          >
            SCAJ crafts premium automobile accessories — starting with our
            flagship nano-ceramic cooling film that slashes cabin heat, blocks
            99.9% of UV, and keeps your interior showroom-fresh for a decade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_40px_rgb(225,6,0,0.45)] transition-all hover:bg-white hover:text-[var(--ink)] hover:shadow-[0_14px_50px_rgb(255,255,255,0.15)]"
            >
              Explore the lineup
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#process"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur hover:border-white/40 hover:bg-white/10"
            >
              <PlayCircle className="h-5 w-5 text-[var(--brand)]" />
              Watch installation
            </a>
          </motion.div>

          {/* Stat strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 grid max-w-xl grid-cols-3 divide-x divide-white/15 rounded-2xl border border-white/15 bg-white/[0.03] backdrop-blur"
          >
            <StatCell label="Heat rejection" value="99%" />
            <StatCell label="UV blocked" value="99.9%" />
            <StatCell label="Warranty" value="10 yrs" />
          </motion.div>
        </div>

        {/* Right: Visual */}
        <div className="relative lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-md"
          >
            <FilmWindow />

            {/* Floating chips */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute -left-6 top-16 float-y rounded-2xl border border-white/15 bg-[var(--ink-soft)]/95 p-3.5 shadow-2xl backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand)]/20 text-[var(--brand)]">
                  <Thermometer className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-medium uppercase tracking-widest text-neutral-400">
                    Cabin drop
                  </div>
                  <div className="font-display text-base font-semibold text-white">
                    −18°C
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="absolute -right-4 bottom-24 float-y rounded-2xl border border-white/15 bg-[var(--ink-soft)]/95 p-3.5 shadow-2xl backdrop-blur-md"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[var(--ink)]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-medium uppercase tracking-widest text-neutral-400">
                    Certified
                  </div>
                  <div className="font-display text-base font-semibold text-white">
                    Nano-Ceramic
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll ticker */}
      <div className="relative border-t border-white/10 bg-black/30 py-5 backdrop-blur">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />
        <div className="overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
            {[
              "NANO-CERAMIC",
              "99% IR REJECTION",
              "99.9% UV BLOCK",
              "SIGNAL-FRIENDLY",
              "10-YEAR WARRANTY",
              "MADE FOR INDIAN SUMMERS",
              "CERTIFIED INSTALLERS",
              "SHOWROOM FINISH",
            ].flatMap((t) => [t, t]).map((t, i) => (
              <span
                key={i}
                className="flex items-center gap-10 font-display text-xs font-semibold uppercase tracking-[0.35em] text-neutral-300"
              >
                {t}
                <span className="inline-block h-1 w-1 rounded-full bg-[var(--brand)]" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-5 py-4">
      <div className="font-display text-3xl font-bold tracking-tight text-white">
        {value}
      </div>
      <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
        {label}
      </div>
    </div>
  );
}

function FilmWindow() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-[0_40px_100px_-20px_rgba(225,6,0,0.35)]">
      {/* Scene SVG */}
      <svg
        viewBox="0 0 400 500"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a0f0f" />
            <stop offset="60%" stopColor="#1a0707" />
            <stop offset="100%" stopColor="#0a0000" />
          </linearGradient>
          <radialGradient id="sun" cx="0.75" cy="0.3" r="0.5">
            <stop offset="0%" stopColor="#ffb070" />
            <stop offset="40%" stopColor="#ff5a00" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ff5a00" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="filmTop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a1a1a" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#050505" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="shine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect width="400" height="500" fill="url(#sky)" />
        <circle cx="300" cy="150" r="180" fill="url(#sun)" />

        {/* Distant skyline */}
        <g opacity="0.3">
          <rect x="10" y="280" width="30" height="80" fill="#3a1515" />
          <rect x="48" y="250" width="24" height="110" fill="#4a1a1a" />
          <rect x="80" y="270" width="28" height="90" fill="#361212" />
          <rect x="116" y="240" width="22" height="120" fill="#4a1a1a" />
          <rect x="146" y="260" width="30" height="100" fill="#3a1515" />
          <rect x="186" y="225" width="20" height="135" fill="#5a2020" />
          <rect x="214" y="265" width="26" height="95" fill="#361212" />
          <rect x="248" y="245" width="30" height="115" fill="#4a1a1a" />
          <rect x="288" y="260" width="22" height="100" fill="#3a1515" />
          <rect x="318" y="230" width="28" height="130" fill="#4a1a1a" />
          <rect x="354" y="255" width="26" height="105" fill="#3a1515" />
        </g>

        {/* Car frame top */}
        <path
          d="M0 60 Q200 10 400 60 L400 70 L0 70 Z"
          fill="#000"
        />

        {/* Window area with film */}
        <path
          d="M30 80 Q200 50 370 80 L370 340 Q200 360 30 340 Z"
          fill="url(#filmTop)"
        />

        {/* Brand red stripe across film */}
        <path
          d="M30 80 Q200 50 370 80 L370 95 Q200 70 30 95 Z"
          fill="#e10600"
          opacity="0.85"
        />

        {/* Horizontal film lines */}
        <g opacity="0.12" stroke="#ffffff" strokeWidth="0.5">
          <line x1="40" y1="140" x2="360" y2="140" />
          <line x1="40" y1="180" x2="360" y2="180" />
          <line x1="40" y1="220" x2="360" y2="220" />
          <line x1="40" y1="260" x2="360" y2="260" />
          <line x1="40" y1="300" x2="360" y2="300" />
        </g>

        {/* Moving shine */}
        <rect
          x="-100"
          y="80"
          width="200"
          height="260"
          fill="url(#shine)"
          opacity="0.6"
        >
          <animate
            attributeName="x"
            from="-200"
            to="400"
            dur="5s"
            repeatCount="indefinite"
          />
        </rect>

        {/* Car body */}
        <path
          d="M0 350 Q200 330 400 350 L400 500 L0 500 Z"
          fill="#000"
        />
        <rect x="0" y="348" width="400" height="2" fill="#e10600" />

        {/* Door handle hint */}
        <rect x="280" y="410" width="40" height="4" rx="2" fill="#1a1a1a" />
      </svg>

      {/* Temp chips */}
      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/70 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md">
        <Sun className="h-3.5 w-3.5 text-[#ffb070]" />
        Outside 42°C
      </div>
      <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-[var(--brand)] px-3 py-1.5 text-[11px] font-semibold text-white shadow-lg">
        <Snowflake className="h-3.5 w-3.5" />
        Cabin 24°C
      </div>

      {/* Bottom spec chip */}
      <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/15 bg-black/75 p-3 backdrop-blur-md">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-300">
            Signature Series
          </div>
          <div className="font-display text-base font-semibold text-white">
            Nano-Ceramic 80
          </div>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand)] text-white">
          <ShieldCheck className="h-5 w-5" />
        </div>
      </div>

      {/* Heatwave accent */}
      <div className="heatwave pointer-events-none absolute inset-x-6 bottom-20 h-10 rounded-full bg-gradient-to-t from-[var(--brand)]/25 to-transparent blur-2xl" />
    </div>
  );
}
