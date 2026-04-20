"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const featured = {
  name: "Sameer Khan",
  car: "BMW 3 Series · Nano-Ceramic 80",
  text: "I'd tried three big tinting brands before SCAJ. This is on another level — the clarity at night is unreal, zero signal interference with FASTag, and the cabin feels almost chilled compared to before. Worth every rupee.",
  rating: 5,
};

const reviews = [
  {
    name: "Arjun Menon",
    car: "Hyundai Creta · Nano-Ceramic 80",
    text: "Mid-day Kerala heat used to be unbearable. After SCAJ, the cabin feels 10°C cooler and AC hits in seconds.",
    rating: 5,
  },
  {
    name: "Priya Ramesh",
    car: "Tata Nexon EV · Carbon IR 60",
    text: "My range improved noticeably because the AC barely runs. Installation was spotless — no bubbles, perfectly trimmed.",
    rating: 5,
  },
  {
    name: "Neha Iyer",
    car: "Maruti Baleno · Shield 35",
    text: "Affordable, professional, and the 10-year warranty is reassuring. Dashboard still looks brand new.",
    rating: 5,
  },
  {
    name: "Rohan Das",
    car: "Tesla Model 3 · Nano-Ceramic 80",
    text: "Obsessive attention to detail. They even polished my glass before applying. Quality you can feel.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="relative bg-[var(--ink-deep)] py-24 text-white md:py-32"
    >
      <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div className="mb-14 grid grid-cols-1 items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <span className="section-num text-[var(--brand)]">
              06 · Loved by drivers
            </span>
            <h2 className="font-display mt-4 text-balance text-4xl font-bold leading-[1.02] md:text-[56px]">
              The SCAJ difference,
              <br />
              <span className="text-[var(--brand)]">in their own words.</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 w-fit">
              <div className="flex items-center gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[var(--brand)] text-[var(--brand)]"
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-white">
                4.9 / 5 · 2,300+ reviews
              </span>
            </div>
          </div>
        </div>

        {/* Featured quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a0000] via-[#0a0000] to-black p-8 md:p-14"
        >
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[var(--brand)]/30 blur-3xl" />
          <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-8">
              <Quote className="h-12 w-12 text-[var(--brand)]" />
              <p className="font-display mt-6 text-2xl font-semibold leading-[1.25] md:text-4xl">
                &ldquo;{featured.text}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand)] font-display text-sm font-bold text-white">
                  {featured.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-display text-base font-semibold text-white">
                    {featured.name}
                  </div>
                  <div className="text-sm text-neutral-300">{featured.car}</div>
                </div>
                <div className="ml-auto hidden items-center gap-0.5 sm:flex">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star
                      key={k}
                      className="h-4 w-4 fill-[var(--brand)] text-[var(--brand)]"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="md:col-span-4">
              <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur">
                <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-300">
                  Verified result
                </div>
                <div className="mt-3 grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-display text-3xl font-bold">18°C</div>
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-neutral-300">
                      Cabin drop
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-3xl font-bold">99%</div>
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-neutral-300">
                      Heat rejected
                    </div>
                  </div>
                </div>
                <div className="mt-6 border-t border-white/15 pt-4">
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-neutral-300">
                    Installed at
                  </div>
                  <div className="font-display mt-1 text-sm font-semibold">
                    SCAJ Studio Kochi
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative flex flex-col rounded-2xl border border-white/15 bg-white/[0.05] p-6 transition-all hover:-translate-y-1 hover:border-[var(--brand)]/40 hover:bg-white/[0.08]"
            >
              <div className="flex items-center gap-0.5">
                {Array.from({ length: r.rating }).map((_, k) => (
                  <Star
                    key={k}
                    className="h-3.5 w-3.5 fill-[var(--brand)] text-[var(--brand)]"
                  />
                ))}
              </div>
              <p className="mt-4 text-[15px] leading-[1.65] text-neutral-100">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 font-display text-xs font-bold text-white">
                  {r.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-display text-sm font-semibold text-white">
                    {r.name}
                  </div>
                  <div className="text-[12px] text-neutral-300">{r.car}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
