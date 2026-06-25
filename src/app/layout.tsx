import type { Metadata } from "next";
import { Barlow, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

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
    <html lang="en" className={`${jakarta.variable} ${barlow.variable}`} data-scroll-behavior="smooth">
      <body className="antialiased font-sans overflow-x-hidden max-w-[100vw]">
        <Navbar />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
