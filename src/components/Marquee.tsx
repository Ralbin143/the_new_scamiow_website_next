const BRANDS = [
  "BMW",
  "AUDI",
  "MERCEDES",
  "PORSCHE",
  "TOYOTA",
  "HYUNDAI",
  "KIA",
  "TESLA",
  "HONDA",
  "MAHINDRA",
  "TATA",
  "MARUTI",
];

export default function Marquee() {
  const items = [...BRANDS, ...BRANDS];
  return (
    <section
      aria-label="Trusted by top automotive brands"
      className="relative border-y border-black/5 bg-[var(--ink)] py-6"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--ink)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--ink)] to-transparent" />

      <div className="overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-14 whitespace-nowrap">
          {items.map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="font-display text-lg font-semibold tracking-[0.2em] text-white/50 hover:text-white transition-colors"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
