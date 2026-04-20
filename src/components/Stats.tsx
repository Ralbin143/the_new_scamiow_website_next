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
    <section className="relative overflow-hidden bg-[var(--brand)] text-white">
      <div className="absolute inset-0 noise opacity-40 mix-blend-overlay pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
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
              of obsession baked into every SCAJ film.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#reviews"
                className="rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
              >
                Read reviews
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--ink)] hover:text-white"
              >
                Visit studio
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 divide-x divide-white/20 border-y border-white/20 md:grid-cols-4">
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
              <div className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-white">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
