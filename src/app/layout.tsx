import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE.name} — Earthmoving, Excavation & Demolition`,
  description: SITE.description,
  keywords: [
    "BNR Earth Movers",
    "earthmoving",
    "excavation",
    "demolition",
    "Bangalore",
    "construction",
  ],
  icons: {
    icon: "/brand-logo.jpeg?v=3",
    apple: "/brand-logo.jpeg?v=3",
  },
};

import { Barlow, Plus_Jakarta_Sans } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${jakarta.className} ${barlow.variable} antialiased font-sans overflow-x-hidden max-w-[100vw]`}>
        {children}
      </body>
    </html>
  );
}
