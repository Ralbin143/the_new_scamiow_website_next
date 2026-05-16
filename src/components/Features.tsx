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
      className="relative mx-auto max-w-7xl px-5 py-28 md:px-10 md:py-36"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--line-strong)] to-transparent" />

      {/* Header */}
      <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-4">
          <span className="section-num text-[var(--brand)]">02 · Why SKAJ</span>
          <h2 className="font-display mt-4 text-balance text-4xl font-bold leading-[1.02] md:text-[56px]">
            Engineered to the{" "}
            <span className="text-[var(--brand)]">last micron</span>.
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <p className="text-lg leading-[1.65] text-[var(--muted-strong)] md:text-xl">
            Every SKAJ film is born in a precision lab, tuned for punishing
            Indian summers, and finished by certified installers. Six reasons
            your car deserves one.
          </p>
        </div>
      </div>

      {/* Bento grid */}
      <div className="grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-5 md:grid-cols-4 md:gap-6">
        {/* Big featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/[0.08] bg-[var(--ink)] p-7 text-white shadow-[0_32px_64px_-24px_rgba(0,0,0,0.45),inset_0_1px_0_0_rgba(255,255,255,0.06)] md:col-span-2 md:row-span-2 md:p-11"
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
                  WITHOUT SKAJ
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
                  WITH SKAJ NANO-CERAMIC 80
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
          className="group relative col-span-1 flex items-center justify-between gap-6 overflow-hidden rounded-[28px] border border-[var(--line)] bg-white p-7 shadow-[0_24px_48px_-20px_rgba(0,0,0,0.08)] md:col-span-4 md:p-9"
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
            className="hidden shrink-0 items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--gray-50)] px-6 py-3.5 text-[13px] font-semibold tracking-wide shadow-sm transition-colors hover:border-[var(--ink)] hover:bg-white md:inline-flex"
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
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[26px] p-7 transition-all duration-300 hover:-translate-y-1 ${
        isDark
          ? "border border-[var(--line)] bg-white shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)] hover:border-[var(--brand)]/35 hover:shadow-[0_28px_48px_-20px_rgba(209,10,4,0.18)]"
          : "border border-white/[0.1] bg-[var(--ink)] text-white shadow-[0_24px_48px_-20px_rgba(0,0,0,0.35)] hover:border-[var(--brand)]/50"
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
