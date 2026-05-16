"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck,
  Scissors,
  Sparkles,
  CarFront,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    n: "01",
    icon: CalendarCheck,
    title: "Book your slot",
    desc: "Pick a film, a date, and your preferred SKAJ studio — takes 60 seconds online or over a quick call.",
    time: "60 sec",
  },
  {
    n: "02",
    icon: CarFront,
    title: "Precision prep",
    desc: "Your car rolls into our dust-controlled bay. Glass is deep-cleaned and inspected under studio lighting.",
    time: "30 min",
  },
  {
    n: "03",
    icon: Scissors,
    title: "Computer-cut film",
    desc: "Film is plotted to your exact make & model using our digital cutter — zero blades ever touch your car.",
    time: "20 min",
  },
  {
    n: "04",
    icon: Sparkles,
    title: "Install & shine",
    desc: "Certified installers apply the film, squeegee every edge, and hand you a warranty card before you drive away.",
    time: "~2 hrs",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-0 -z-10 dot-grid-dark opacity-65" />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        {/* Header */}
        <div className="mb-14 grid grid-cols-1 items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-6">
            <span className="section-num text-[var(--brand)]">
              05 · The install
            </span>
            <h2 className="font-display mt-4 text-balance text-4xl font-bold leading-[1.02] md:text-[56px]">
              From booking to{" "}
              <span className="text-[var(--brand)]">showroom finish</span> in
              under 3 hours.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="text-lg leading-[1.65] text-[var(--muted-strong)]">
              Every SKAJ install is a four-step ritual. No surprises, no
              upselling, no rushed jobs — just a clean, precise finish you can
              feel the moment you sit down.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--brand)] via-black/20 to-transparent md:left-1/2" />

          <div className="flex flex-col gap-10 md:gap-16">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`relative grid grid-cols-[40px_1fr] gap-5 md:grid-cols-2 md:gap-16 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                {/* Node */}
                <div
                  className={`relative ${
                    i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div
                    className={`hidden md:block ${
                      i % 2 === 0 ? "ml-auto" : "mr-auto"
                    }`}
                  >
                    <div className="inline-flex items-center gap-3 rounded-full border border-[var(--line)] bg-white px-4 py-2 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.1)]">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ink)] text-white">
                        <s.icon className="h-4 w-4" />
                      </div>
                      <span className="font-display text-sm font-bold text-[var(--ink)]">
                        Step {s.n}
                      </span>
                      <span className="rounded-full bg-[var(--brand)]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-[var(--brand)]">
                        {s.time}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Dot on line */}
                <div className="absolute left-0 top-2 flex h-10 w-10 items-center justify-center md:left-1/2 md:-translate-x-1/2">
                  <div className="absolute h-10 w-10 animate-ping rounded-full bg-[var(--brand)]/20" />
                  <div className="relative h-4 w-4 rounded-full bg-[var(--brand)] ring-4 ring-white" />
                </div>

                {/* Content card */}
                <div className={i % 2 === 0 ? "md:pl-12" : "md:pr-12"}>
                  <div className="group relative overflow-hidden rounded-[28px] border border-[var(--line)] bg-white p-6 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand)]/35 hover:shadow-[0_28px_48px_-20px_rgba(209,10,4,0.15)] md:p-9">
                    <div className="flex items-center gap-4 md:hidden">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--ink)] text-white">
                        <s.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-display text-sm font-bold">
                          Step {s.n}
                        </div>
                        <div className="rounded-full bg-[var(--brand)]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-[var(--brand)] inline-block mt-0.5">
                          {s.time}
                        </div>
                      </div>
                    </div>

                    <div className="absolute -right-8 -top-8 font-display text-[140px] font-bold leading-none text-black/[0.04] md:text-[180px]">
                      {s.n}
                    </div>
                    <h3 className="font-display relative mt-4 text-2xl font-bold md:mt-0 md:text-3xl">
                      {s.title}
                    </h3>
                    <p className="relative mt-3 text-[15px] leading-[1.6] text-[var(--muted-strong)] md:text-base">
                      {s.desc}
                    </p>

                    <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[var(--brand)] transition-transform duration-500 group-hover:scale-x-100" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-8 py-4 text-[13px] font-semibold tracking-wide text-white shadow-[0_16px_40px_-12px_rgba(0,0,0,0.35)] transition-all hover:bg-[var(--brand)] hover:shadow-[0_20px_48px_-12px_rgba(209,10,4,0.45)]"
          >
            Book your install
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
