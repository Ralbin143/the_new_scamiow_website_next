"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const stats = [
  { value: "12,400+", label: "Cars filmed" },
  { value: "98%", label: "5-star reviews" },
  { value: "25+", label: "Certified installers" },
  { value: "10 yrs", label: "Film warranty" },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--brand)] via-[#9a0500] to-[var(--brand-dark)] text-white">
      <div className="absolute inset-0 noise opacity-35 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/[0.07] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <span className="section-num text-white/90">04 · By the numbers</span>
            <h2 className="font-display mt-4 text-balance text-4xl font-bold leading-[1.02] md:text-[64px]">
              A track record drivers actually trust.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="text-lg leading-[1.65] text-white md:text-xl">
              Precision installs. Honest warranties. Zero shortcuts. A decade
              of obsession baked into every SKAJ film.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#reviews"
                className="rounded-full border border-white/35 bg-white/12 px-6 py-3 text-[13px] font-semibold tracking-wide text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] backdrop-blur-md transition-colors hover:bg-white/22"
              >
                Read reviews
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[13px] font-semibold tracking-wide text-[var(--ink)] shadow-[0_12px_32px_-8px_rgba(0,0,0,0.35)] transition-all hover:bg-[var(--ink)] hover:text-white hover:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.45)]"
              >
                Visit studio
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 divide-x divide-white/20 border border-white/25 bg-white/[0.04] backdrop-blur-sm md:mt-24 md:grid-cols-4 md:rounded-2xl md:shadow-[0_32px_64px_-24px_rgba(0,0,0,0.35)]">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`px-6 py-8 md:px-8 md:py-10 ${
                i >= 2 ? "border-t border-white/20 md:border-t-0" : ""
              }`}
            >
              <div className="font-display text-5xl font-bold leading-none md:text-7xl">
                {s.value}
              </div>
              <div className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/85">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
