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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-sans overflow-x-hidden max-w-[100vw]">
        {children}
      </body>
    </html>
  );
}
