import clsx from "clsx";

export default function Logo({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const text = variant === "dark" ? "text-[var(--ink)]" : "text-white";
  const box = variant === "dark" ? "bg-[var(--ink)]" : "bg-white";
  const boxText = variant === "dark" ? "text-white" : "text-[var(--ink)]";

  return (
    <a
      href="#home"
      aria-label="SCAJ home"
      className={clsx("group inline-flex items-center gap-2.5", className)}
    >
      <span
        className={clsx(
          "relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-md ring-1 transition-transform duration-300 group-hover:scale-105",
          box,
          variant === "dark" ? "ring-black/5" : "ring-white/10",
        )}
      >
        <span className="absolute inset-0 bg-gradient-to-br from-[var(--brand)] via-transparent to-transparent opacity-80" />
        <span
          className={clsx(
            "relative font-display text-[15px] font-bold tracking-tight",
            boxText,
          )}
        >
          S
        </span>
        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-[var(--brand)] shadow-[0_0_12px_var(--brand-glow)]" />
      </span>
      <span
        className={clsx(
          "font-display text-xl font-bold tracking-tight",
          text,
        )}
      >
        SCAJ
        <span className="ml-0.5 text-[var(--brand)]">.</span>
      </span>
    </a>
  );
}
