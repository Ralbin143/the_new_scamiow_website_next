"use client";

import { motion } from "framer-motion";
import {
  Snowflake,
  ShieldCheck,
  SunDim,
  Eye,
  Zap,
  BatteryCharging,
  ArrowUpRight,
} from "lucide-react";

export default function Features() {
  return (
    <section
      id="why"
      className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

      {/* Header */}
      <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-4">
          <span className="section-num text-[var(--brand)]">02 · Why SCAJ</span>
          <h2 className="font-display mt-4 text-balance text-4xl font-bold leading-[1.02] md:text-[56px]">
            Engineered to the{" "}
            <span className="text-[var(--brand)]">last micron</span>.
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <p className="text-lg leading-[1.65] text-[var(--muted-strong)] md:text-xl">
            Every SCAJ film is born in a precision lab, tuned for punishing
            Indian summers, and finished by certified installers. Six reasons
            your car deserves one.
          </p>
        </div>
      </div>

      {/* Bento grid */}
      <div className="grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-4 md:grid-cols-4 md:gap-5">
        {/* Big featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-3xl bg-[var(--ink)] p-7 text-white md:col-span-2 md:row-span-2 md:p-10"
        >
          <div className="absolute inset-0 dot-grid opacity-60" />
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[var(--brand)]/30 blur-3xl" />
          <div className="absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-[var(--brand)]/10 blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-neutral-200">
              <Snowflake className="h-3.5 w-3.5 text-[var(--brand)]" />
              Core benefit
            </div>
            <h3 className="font-display mt-6 text-balance text-3xl font-bold leading-[1.05] md:text-5xl">
              Blocks up to <span className="text-[var(--brand)]">99%</span> of
              infrared heat.
            </h3>
            <p className="mt-5 max-w-md text-base leading-[1.65] text-neutral-300 md:text-lg">
              Nano-ceramic particles reflect the sun&apos;s invisible heat
              rays before they ever enter your cabin — cool interior, cool
              dashboard, cool steering wheel.
            </p>
          </div>

          {/* Visual */}
          <div className="relative mt-10 h-44 overflow-hidden rounded-2xl border border-white/10 bg-black/50">
            <svg
              viewBox="0 0 400 160"
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="heatBar" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#ff2a2a" />
                  <stop offset="100%" stopColor="#600000" />
                </linearGradient>
                <linearGradient id="coolBar" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#2a2a2a" />
                </linearGradient>
              </defs>
              <g>
                <text
                  x="20"
                  y="40"
                  fill="#d4d4d4"
                  fontSize="11"
                  fontWeight="600"
                  fontFamily="sans-serif"
                  letterSpacing="2"
                >
                  WITHOUT SCAJ
                </text>
                <rect
                  x="20"
                  y="50"
                  width="360"
                  height="14"
                  rx="7"
                  fill="url(#heatBar)"
                />
                <text
                  x="20"
                  y="100"
                  fill="#d4d4d4"
                  fontSize="11"
                  fontWeight="600"
                  fontFamily="sans-serif"
                  letterSpacing="2"
                >
                  WITH SCAJ NANO-CERAMIC 80
                </text>
                <rect
                  x="20"
                  y="110"
                  width="40"
                  height="14"
                  rx="7"
                  fill="url(#coolBar)"
                />
              </g>
            </svg>
          </div>
        </motion.div>

        <FeatureTile
          icon={ShieldCheck}
          title="99.9% UV protection"
          desc="Blocks UVA/UVB, prevents interior fading and skin damage."
          delay={0.05}
        />
        <FeatureTile
          icon={Eye}
          title="Crystal-clear vision"
          desc="High clarity glass, zero haze, sharp at night."
          delay={0.1}
        />

        <FeatureTile
          icon={SunDim}
          title="Anti-glare tech"
          desc="Cuts harsh reflections for a calmer drive."
          delay={0.15}
          tone="light"
        />
        <FeatureTile
          icon={Zap}
          title="Signal-friendly"
          desc="Metal-free — never blocks GPS, Bluetooth, or FASTag."
          delay={0.2}
          tone="light"
        />

        {/* Wide bottom tile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="group relative col-span-1 flex items-center justify-between gap-6 overflow-hidden rounded-3xl border border-black/10 bg-white p-7 md:col-span-4"
        >
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand)] text-white">
              <BatteryCharging className="h-6 w-6" />
            </div>
            <h3 className="font-display mt-5 text-2xl font-semibold md:text-3xl">
              Less heat in. Less load on your AC.{" "}
              <span className="text-[var(--muted-soft)]">
                More range. Better mileage. Quieter ride.
              </span>
            </h3>
          </div>
          <a
            href="#products"
            className="hidden shrink-0 items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold hover:border-[var(--ink)] md:inline-flex"
          >
            See the films
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureTile({
  icon: Icon,
  title,
  desc,
  delay,
  tone = "dark",
}: {
  icon: typeof Snowflake;
  title: string;
  desc: string;
  delay: number;
  tone?: "dark" | "light";
}) {
  const isDark = tone === "dark";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 transition-all hover:-translate-y-1 ${
        isDark
          ? "border border-black/10 bg-white hover:border-[var(--brand)]/40 hover:shadow-[0_20px_40px_-15px_rgba(225,6,0,0.2)]"
          : "border border-black/10 bg-[var(--ink)] text-white hover:border-[var(--brand)]"
      }`}
    >
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
          isDark
            ? "bg-[var(--ink)] text-white group-hover:bg-[var(--brand)]"
            : "bg-[var(--brand)] text-white"
        }`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="mt-6">
        <h3 className="font-display text-lg font-semibold">{title}</h3>
        <p
          className={`mt-2 text-[15px] leading-[1.6] ${
            isDark ? "text-[var(--muted-strong)]" : "text-neutral-300"
          }`}
        >
          {desc}
        </p>
      </div>
    </motion.div>
  );
}
