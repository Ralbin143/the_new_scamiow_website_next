import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SKAJ — Premium Car Cooling Films & Automobile Accessories",
  description:
    "SKAJ crafts premium automobile accessories, starting with heat-rejecting car cooling films that keep your cabin cool, your interiors protected, and your drive unforgettable.",
  keywords: [
    "SKAJ",
    "car cooling film",
    "ceramic window tint",
    "automobile accessories",
    "car sun film",
    "heat rejection film",
  ],
  metadataBase: new URL("https://skaj.example.com"),
  openGraph: {
    title: "SKAJ — Premium Car Cooling Films",
    description:
      "Heat-rejecting, UV-blocking cooling films engineered for your ride.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--canvas)] text-[var(--ink)] selection:bg-[var(--brand)] selection:text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
