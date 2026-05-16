import Image from "next/image";
import clsx from "clsx";

const SRC = {
  /** Dark page background — use white mark */
  light: "/skaj_white.webp",
  /** Light page background — use full-color mark */
  dark: "/skaj_color.webp",
} as const;

const sizeStyles = {
  /** Top bar / navbar */
  default: {
    img: "block h-12 w-auto max-w-none md:h-14",
    sizes: "(max-width: 768px) 68px, 82px",
  },
  /** Footer — larger than nav */
  lg: {
    img: "block h-16 w-auto max-w-none sm:h-[4.5rem] md:h-[5.5rem]",
    sizes: "(max-width: 768px) 100px, 125px",
  },
} as const;

export default function Logo({
  className,
  variant = "dark",
  size = "default",
  priority = false,
}: {
  className?: string;
  variant?: "dark" | "light";
  /** Larger mark for footer / hero */
  size?: keyof typeof sizeStyles;
  /** Set on above-the-fold nav for faster LCP */
  priority?: boolean;
}) {
  const src = variant === "light" ? SRC.light : SRC.dark;
  const s = sizeStyles[size];

  return (
    <a
      href="#home"
      aria-label="SKAJ home"
      className={clsx(
        "group inline-flex shrink-0 items-center outline-none transition-opacity duration-300 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2",
        className,
      )}
    >
      {/* Use width/height + h-* w-auto — do not use `fill` (parent had no reliable width). */}
      <Image
        src={src}
        alt="SKAJ"
        width={650}
        height={492}
        priority={priority}
        className={s.img}
        sizes={s.sizes}
      />
    </a>
  );
}
