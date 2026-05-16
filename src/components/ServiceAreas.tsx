"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, ArrowUpRight, Phone } from "lucide-react";
import {
  KERALA_CENTER_X,
  KERALA_CITY_COORDS,
  KERALA_PATH,
  KERALA_VIEWBOX,
  type KeralaCityId,
} from "@/lib/kerala-map";

type Location = {
  id: KeralaCityId;
  name: string;
  note: string;
  status: "live" | "soon";
  x: number;
  y: number;
};

const LOCATIONS: Location[] = (
  [
    { id: "kasaragod", name: "Kasaragod", note: "Mobile visits", status: "soon" },
    { id: "kannur", name: "Kannur", note: "Opening 2027", status: "soon" },
    { id: "wayanad", name: "Wayanad", note: "On request", status: "soon" },
    { id: "kozhikode", name: "Kozhikode", note: "Opening Q4", status: "soon" },
    { id: "malappuram", name: "Malappuram", note: "Mobile visits", status: "soon" },
    { id: "palakkad", name: "Palakkad", note: "Mobile visits", status: "soon" },
    { id: "thrissur", name: "Thrissur", note: "Opening Q3", status: "soon" },
    { id: "ernakulam", name: "Kochi · Ernakulam", note: "Flagship studio", status: "live" },
    { id: "idukki", name: "Idukki", note: "On request", status: "soon" },
    { id: "kottayam", name: "Kottayam", note: "Mobile visits", status: "soon" },
    { id: "alappuzha", name: "Alappuzha", note: "Mobile visits", status: "soon" },
    { id: "pathanamthitta", name: "Pathanamthitta", note: "On request", status: "soon" },
    { id: "kollam", name: "Kollam", note: "Opening 2027", status: "soon" },
    { id: "thiruvananthapuram", name: "Thiruvananthapuram", note: "Opening Q4", status: "soon" },
  ] satisfies Array<Omit<Location, "x" | "y">>
).map((l) => ({ ...l, ...KERALA_CITY_COORDS[l.id] }));

const KOCHI = KERALA_CITY_COORDS.ernakulam;

export default function ServiceAreas() {
  const [active, setActive] = useState<string>("ernakulam");
  const activeLoc =
    LOCATIONS.find((l) => l.id === active) ??
    LOCATIONS.find((l) => l.id === "ernakulam") ??
    LOCATIONS[0];

  return (
    <section
      id="service-areas"
      className="relative mx-auto max-w-7xl px-5 py-28 md:px-10 md:py-36"
    >
      <div className="absolute inset-0 -z-10 dot-grid-dark opacity-40 pointer-events-none" />

      {/* Header */}
      <div className="mb-14 grid grid-cols-1 items-end gap-8 md:grid-cols-12">
        <div className="md:col-span-7">
          <span className="section-num text-[var(--brand)]">
            06 · Service areas
          </span>
          <h2 className="font-display mt-4 text-balance text-4xl font-bold leading-[1.02] md:text-[56px]">
            Covering{" "}
            <span className="text-[var(--brand)]">Kerala</span>,
            <br />
            one cool cabin at a time.
          </h2>
        </div>
        <div className="md:col-span-4 md:col-start-9">
          <p className="text-lg leading-[1.65] text-[var(--muted-strong)]">
            Our flagship studio is in Kochi, and mobile-install crews travel
            across the state. More studios opening soon — here&apos;s where you
            can find us.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
        {/* Map */}
        <div className="relative lg:col-span-7">
          <div className="relative overflow-hidden rounded-[28px] border border-[var(--line)] bg-white p-4 shadow-[0_24px_48px_-20px_rgba(0,0,0,0.1)] md:p-7">
            {/* Corner meta */}
            <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--muted-soft)]">
              <span className="h-px w-6 bg-[var(--muted-soft)]" />
              Kerala · India
            </div>
            <div className="pointer-events-none absolute right-5 top-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--muted-soft)]">
              Coverage map
              <span className="h-px w-6 bg-[var(--muted-soft)]" />
            </div>

            <svg
              viewBox={`0 0 ${KERALA_VIEWBOX.width} ${KERALA_VIEWBOX.height}`}
              className="mx-auto block h-auto w-full max-w-[420px]"
              aria-label="Kerala service area map"
              role="img"
            >
              <defs>
                <linearGradient id="keralaFill" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#1a1a1a" />
                  <stop offset="55%" stopColor="#0c0c0c" />
                  <stop offset="100%" stopColor="#040404" />
                </linearGradient>
                <linearGradient id="keralaShine" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.09" />
                  <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="seaWash" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#eef2f5" />
                  <stop offset="100%" stopColor="#f7f8fa" />
                </linearGradient>
                <radialGradient id="brandGlow" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="pulse" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
                </radialGradient>
                <pattern id="ghats" x="0" y="0" width="14" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 0 9 L 7 1 L 14 9" stroke="#2c2c2c" strokeWidth="0.6" fill="none" />
                </pattern>
                {/* Clip Western Ghats pattern to the Kerala body */}
                <clipPath id="keralaClip">
                  <path d={KERALA_PATH} />
                </clipPath>
              </defs>

              {/* Arabian Sea wash */}
              <rect
                x="0"
                y="0"
                width={KERALA_VIEWBOX.width}
                height={KERALA_VIEWBOX.height}
                fill="url(#seaWash)"
              />

              {/* Latitude / longitude graticule (very subtle) */}
              <g stroke="#dde2e7" strokeWidth="0.5" opacity="0.55">
                {[80, 160, 240, 320, 400, 480, 560].map((y) => (
                  <line key={`lat-${y}`} x1="0" y1={y} x2={KERALA_VIEWBOX.width} y2={y} />
                ))}
                {[80, 160, 240, 320].map((x) => (
                  <line key={`lon-${x}`} x1={x} y1="0" x2={x} y2={KERALA_VIEWBOX.height} />
                ))}
              </g>

              {/* Ocean ripples on the left (Arabian Sea) */}
              <g opacity="0.55" stroke="#cfd6dd" strokeWidth="1" fill="none">
                {[120, 180, 240, 310, 380, 450, 520].map((y) => (
                  <path key={y} d={`M 8 ${y} q 14 -5 28 0 t 28 0`} />
                ))}
              </g>

              {/* Arabian Sea label */}
              <text
                x="34"
                y="340"
                transform="rotate(-90 34 340)"
                className="fill-[#9aa3ab]"
                fontSize="10"
                fontWeight="600"
                letterSpacing="6"
              >
                ARABIAN SEA
              </text>

              {/* Brand glow behind Kochi flagship */}
              <circle cx={KOCHI.x} cy={KOCHI.y} r="86" fill="url(#brandGlow)" />

              {/* Kerala state body */}
              <path
                d={KERALA_PATH}
                fill="url(#keralaFill)"
                fillRule="evenodd"
                stroke="#0a0a0a"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />

              {/* Western Ghats hatching, clipped to state shape, right (east) half */}
              <g clipPath="url(#keralaClip)" opacity="0.6">
                <rect x="220" y="80" width="140" height="460" fill="url(#ghats)" />
              </g>

              {/* Subtle highlight shine */}
              <path d={KERALA_PATH} fill="url(#keralaShine)" fillRule="evenodd" />

              {/* Backwaters — Vembanad / Ashtamudi hint along the central coast */}
              <g
                stroke="#4a90c7"
                strokeOpacity="0.55"
                strokeWidth="1.3"
                strokeLinecap="round"
                fill="none"
              >
                <path d="M 220 410 q 8 18 -1 36 q -6 14 4 32 q 8 16 0 30" />
                <path d="M 244 475 q 6 14 -3 26" />
                <path d="M 260 515 q 6 14 -2 26" />
              </g>

              {/* Neighbour labels (Karnataka / Tamil Nadu) */}
              <g
                className="fill-[#a8b0b8]"
                fontSize="9"
                fontWeight="600"
                letterSpacing="3"
              >
                <text x="145" y="60">KARNATAKA</text>
                <text x="372" y="300" transform="rotate(90 372 300)">TAMIL NADU</text>
              </g>

              {/* Compass rose */}
              <g transform="translate(392 60)">
                <circle r="14" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1" />
                <path d="M 0 -10 L 3 0 L 0 10 L -3 0 Z" fill="#0a0a0a" />
                <path d="M 0 -10 L 3 0 L 0 0 Z" fill="var(--brand)" />
                <text
                  x="0"
                  y="-16"
                  textAnchor="middle"
                  className="fill-[#0a0a0a]"
                  fontSize="8"
                  fontWeight="700"
                >
                  N
                </text>
              </g>

              {/* Scale bar — ~100 km using the projection's lat-degrees */}
              <g transform="translate(300 600)">
                <line x1="0" y1="0" x2="56" y2="0" stroke="#0a0a0a" strokeWidth="1.5" />
                <line x1="0" y1="-3" x2="0" y2="3" stroke="#0a0a0a" strokeWidth="1.5" />
                <line x1="28" y1="-2" x2="28" y2="2" stroke="#0a0a0a" strokeWidth="1" />
                <line x1="56" y1="-3" x2="56" y2="3" stroke="#0a0a0a" strokeWidth="1.5" />
                <text x="28" y="14" textAnchor="middle" className="fill-[#525252]" fontSize="9" fontWeight="600">
                  100 km
                </text>
              </g>

              {/* Locations */}
              {LOCATIONS.map((loc) => {
                const isActive = active === loc.id;
                const isLive = loc.status === "live";
                return (
                  <g
                    key={loc.id}
                    className="cursor-pointer"
                    onMouseEnter={() => setActive(loc.id)}
                    onClick={() => setActive(loc.id)}
                  >
                    {/* Pulse */}
                    {isLive && (
                      <circle cx={loc.x} cy={loc.y} r="22" fill="url(#pulse)">
                        <animate
                          attributeName="r"
                          from="10"
                          to="26"
                          dur="1.8s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          from="0.8"
                          to="0"
                          dur="1.8s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}

                    {/* Active ring */}
                    {isActive && !isLive && (
                      <circle
                        cx={loc.x}
                        cy={loc.y}
                        r="12"
                        fill="none"
                        stroke="var(--brand)"
                        strokeWidth="1.5"
                        opacity="0.8"
                      />
                    )}

                    {/* Pin */}
                    <circle
                      cx={loc.x}
                      cy={loc.y}
                      r={isLive ? 7 : 5}
                      fill={
                        isLive
                          ? "var(--brand)"
                          : isActive
                            ? "var(--brand)"
                            : "#ffffff"
                      }
                      stroke={isLive ? "#ffffff" : "#0a0a0a"}
                      strokeWidth={isLive ? 2 : 1.5}
                    />
                    {isLive && (
                      <circle cx={loc.x} cy={loc.y} r="2" fill="#ffffff" />
                    )}

                    {/* Label — placed in the sea / Tamil Nadu margin, with
                        a white halo so it stays legible if it ever overlaps
                        the dark state body. */}
                    <text
                      x={loc.x + (loc.x >= KERALA_CENTER_X ? 12 : -12)}
                      y={loc.y + 3.5}
                      textAnchor={loc.x >= KERALA_CENTER_X ? "start" : "end"}
                      className={`font-display ${
                        isActive || isLive
                          ? "fill-[#0a0a0a]"
                          : "fill-[#525252]"
                      }`}
                      fontSize={isLive || isActive ? "11" : "10"}
                      fontWeight={isLive || isActive ? "700" : "600"}
                      stroke="#ffffff"
                      strokeWidth="3"
                      strokeLinejoin="round"
                      style={{ paintOrder: "stroke fill" }}
                    >
                      {loc.name.replace("Kochi · ", "")}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Legend */}
            <div className="mt-2 flex flex-wrap items-center justify-center gap-5 border-t border-black/5 pt-4 text-[11px] text-[var(--muted-strong)] md:text-xs">
              <LegendDot live />
              <LegendDot />
              <span className="flex items-center gap-1.5">
                <span className="h-px w-4 bg-[var(--muted-soft)]" />
                Mobile install available statewide
              </span>
            </div>
          </div>
        </div>

        {/* Side panel */}
        <div className="lg:col-span-5">
          {/* Active location card */}
          <motion.div
            key={activeLoc.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`relative overflow-hidden rounded-[28px] border p-6 shadow-[0_24px_48px_-20px_rgba(0,0,0,0.12)] md:p-9 ${
              activeLoc.status === "live"
                ? "border-white/[0.08] bg-[var(--ink)] text-white shadow-[0_32px_64px_-20px_rgba(0,0,0,0.45)]"
                : "border-[var(--line)] bg-white"
            }`}
          >
            {activeLoc.status === "live" && (
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--brand)]/30 blur-3xl" />
            )}
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <div
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] ${
                    activeLoc.status === "live"
                      ? "border-white/20 bg-white/10 text-white"
                      : "border-black/10 bg-[var(--gray-100)] text-[var(--brand)]"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      activeLoc.status === "live"
                        ? "bg-[var(--brand)]"
                        : "bg-[var(--brand)]"
                    }`}
                  />
                  {activeLoc.status === "live" ? "Flagship · Open now" : activeLoc.note}
                </div>
                <h3 className="font-display mt-4 text-3xl font-bold md:text-4xl">
                  {activeLoc.name}
                </h3>
                <p
                  className={`mt-3 text-[15px] leading-[1.6] ${
                    activeLoc.status === "live"
                      ? "text-neutral-200"
                      : "text-[var(--muted-strong)]"
                  }`}
                >
                  {activeLoc.status === "live"
                    ? "Walk in any day from 10am to 8pm. Our flagship studio runs every premium SKAJ install — Nano-Ceramic 80, Carbon IR 60, and Shield 35."
                    : `We cover ${activeLoc.name} through mobile install crews. Book a slot and we'll bring the studio to your driveway.`}
                </p>
              </div>
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                  activeLoc.status === "live"
                    ? "bg-[var(--brand)] text-white"
                    : "bg-[var(--ink)] text-white"
                }`}
              >
                <MapPin className="h-5 w-5" />
              </div>
            </div>

            <div className="relative mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className={`group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                  activeLoc.status === "live"
                    ? "bg-[var(--brand)] text-white hover:bg-white hover:text-[var(--ink)]"
                    : "bg-[var(--ink)] text-white hover:bg-[var(--brand)]"
                }`}
              >
                Book for {activeLoc.name.split(" · ")[0]}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="tel:+919847630088"
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-colors ${
                  activeLoc.status === "live"
                    ? "border-white/20 bg-white/5 text-white hover:bg-white/10"
                    : "border-black/15 bg-white text-[var(--ink)] hover:border-[var(--ink)]"
                }`}
              >
                <Phone className="h-4 w-4" />
                Call us
              </a>
            </div>
          </motion.div>

          {/* Location list */}
          <div className="mt-6 rounded-[26px] border border-[var(--line)] bg-white p-2 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.08)]">
            <div className="grid max-h-[420px] grid-cols-1 gap-1 overflow-y-auto sm:grid-cols-2">
              {LOCATIONS.map((loc) => {
                const isActive = active === loc.id;
                const isLive = loc.status === "live";
                return (
                  <button
                    key={loc.id}
                    onMouseEnter={() => setActive(loc.id)}
                    onClick={() => setActive(loc.id)}
                    className={`group flex items-center justify-between gap-3 rounded-xl px-3.5 py-3 text-left transition-colors ${
                      isActive
                        ? "bg-[var(--gray-100)]"
                        : "hover:bg-[var(--gray-50)]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
                          isLive
                            ? "bg-[var(--brand)] text-white"
                            : isActive
                              ? "bg-[var(--ink)] text-white"
                              : "bg-[var(--gray-100)] text-[var(--muted-strong)] group-hover:bg-[var(--ink)] group-hover:text-white"
                        }`}
                      >
                        <MapPin className="h-3.5 w-3.5" />
                      </span>
                      <div>
                        <div className="font-display text-sm font-semibold text-[var(--ink)]">
                          {loc.name}
                        </div>
                        <div className="text-[12px] text-[var(--muted-strong)]">
                          {loc.note}
                        </div>
                      </div>
                    </div>
                    {isLive && (
                      <span className="rounded-full bg-[var(--brand)]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[var(--brand)]">
                        Live
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LegendDot({ live }: { live?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <span
        className={`inline-block h-3 w-3 rounded-full ring-2 ${
          live
            ? "bg-[var(--brand)] ring-white shadow-[0_0_0_2px_rgba(225,6,0,0.3)]"
            : "bg-white ring-black"
        }`}
      />
      <span className="font-medium">
        {live ? "Open now" : "Coming soon / mobile"}
      </span>
    </span>
  );
}
