"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  ShieldCheck,
  Snowflake,
  Sun,
  Thermometer,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[var(--ink-deep)] text-white"
    >
      {/* Cinematic background image — anchored right, faded into ink on the left */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/skaj_building.png"
          alt="SKAJ headquarters facade with branded glass"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[80%_center] lg:object-[65%_center]"
        />

        {/* Color / mood layers — kept light so the building stays visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink-deep)] from-0% via-[var(--ink-deep)]/55 via-45% to-transparent to-75%" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--ink-deep)] to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[var(--ink-deep)]/70 to-transparent" />
        <div className="absolute inset-0 noise opacity-[0.05]" />
      </div>

      {/* Top status bar */}
      <div className="relative z-20 mx-auto mt-28 flex max-w-7xl items-center justify-between px-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/55 md:mt-32 md:px-10">
        <span className="inline-flex items-center gap-2">
          <span className="h-px w-8 bg-neutral-500" />
          SKAJ / 001
        </span>
        <span className="hidden md:inline-flex items-center gap-2">
          Kochi · India
          <span className="h-px w-8 bg-neutral-500" />
        </span>
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 pt-10 pb-28 md:px-10 md:pt-16 md:pb-36 lg:grid-cols-12 lg:gap-10">
        {/* Left: Headline */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)] backdrop-blur-xl"
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
            className="font-display mt-8 text-balance text-[56px] font-bold leading-[0.92] tracking-tight drop-shadow-[0_4px_48px_rgba(0,0,0,0.45)] sm:text-7xl md:text-[96px] lg:text-[108px]"
          >
            Feel the
            <br />
            <span className="relative inline-block">
              <span className="shimmer-text">silence</span>
              <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-[var(--brand)] via-[var(--brand-bright)] to-[var(--brand)] shadow-[0_0_24px_rgba(209,10,4,0.55)]" />
            </span>
            <br />
            of cool air.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-9 max-w-xl text-pretty text-lg leading-relaxed text-white/75 drop-shadow-[0_2px_18px_rgba(0,0,0,0.35)] md:text-xl md:leading-relaxed"
          >
            SKAJ crafts premium automobile accessories — starting with our
            flagship nano-ceramic cooling film that slashes cabin heat, blocks
            99.9% of UV, and keeps your interior showroom-fresh for a decade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-11 flex flex-wrap items-center gap-4"
          >
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-8 py-4 text-[13px] font-semibold tracking-wide text-white shadow-[0_16px_48px_-8px_rgba(209,10,4,0.55)] transition-all duration-300 hover:bg-white hover:text-[var(--ink)] hover:shadow-[0_20px_50px_-10px_rgba(255,255,255,0.2)]"
            >
              Explore the lineup
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#process"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-8 py-4 text-[13px] font-semibold tracking-wide text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-300 hover:border-white/35 hover:bg-white/10"
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
            className="mt-16 grid max-w-xl grid-cols-3 divide-x divide-white/12 rounded-2xl border border-white/12 bg-black/35 shadow-[0_24px_48px_-20px_rgba(0,0,0,0.55),inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-xl"
          >
            <StatCell label="Heat rejection" value="99%" />
            <StatCell label="UV blocked" value="99.9%" />
            <StatCell label="Warranty" value="10 yrs" />
          </motion.div>
        </div>

        {/* Right: floating spec chips overlaying the building photo */}
        <div className="relative hidden lg:col-span-5 lg:block">
          <div className="relative h-full min-h-[520px]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="float-y absolute left-2 top-8 rounded-2xl border border-white/15 bg-black/55 p-4 shadow-[0_28px_56px_-12px_rgba(0,0,0,0.55)] backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand)]/25 text-[var(--brand-bright)]">
                  <Thermometer className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-medium uppercase tracking-widest text-white/65">
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
              transition={{ delay: 1.05, duration: 0.5 }}
              className="float-y absolute right-0 top-44 rounded-2xl border border-white/15 bg-black/55 p-4 shadow-[0_28px_56px_-12px_rgba(0,0,0,0.55)] backdrop-blur-xl"
              style={{ animationDelay: "1.2s" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[var(--ink)]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-medium uppercase tracking-widest text-white/65">
                    Certified
                  </div>
                  <div className="font-display text-base font-semibold text-white">
                    Nano-Ceramic
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Temperature contrast chips */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute bottom-10 right-2 flex flex-col items-end gap-2"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/65 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md">
                <Sun className="h-3.5 w-3.5 text-[#ffb070]" />
                Outside 42°C
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-3 py-1.5 text-[11px] font-semibold text-white shadow-[0_8px_24px_-4px_rgba(209,10,4,0.6)]">
                <Snowflake className="h-3.5 w-3.5" />
                Cabin 24°C
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom scroll ticker */}
      <div className="relative border-t border-white/[0.08] bg-black/55 py-6 backdrop-blur-xl">
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
                className="flex items-center gap-10 font-display text-[11px] font-semibold uppercase tracking-[0.38em] text-white/55"
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
      <div className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
        {label}
      </div>
    </div>
  );
}
