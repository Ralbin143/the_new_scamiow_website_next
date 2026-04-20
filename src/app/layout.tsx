import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SCAJ — Premium Car Cooling Films & Automobile Accessories",
  description:
    "SCAJ crafts premium automobile accessories, starting with heat-rejecting car cooling films that keep your cabin cool, your interiors protected, and your drive unforgettable.",
  keywords: [
    "SCAJ",
    "car cooling film",
    "ceramic window tint",
    "automobile accessories",
    "car sun film",
    "heat rejection film",
  ],
  metadataBase: new URL("https://scaj.example.com"),
  openGraph: {
    title: "SCAJ — Premium Car Cooling Films",
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
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[var(--ink)] selection:bg-[var(--brand)] selection:text-white">
        {children}
      </body>
    </html>
  );
}
