"use client";

import { Logo } from "@/components/Logo";
import { SITE, SERVICES } from "@/lib/constants";
import Link from "next/link";

const footerLinks = {
  SERVICES: SERVICES.slice(0, 4).map(s => ({ label: s.title, href: `/?service=${s.id}#services` })),
  "MORE SERVICES": SERVICES.slice(4, 8).map(s => ({ label: s.title, href: `/?service=${s.id}#services` })),
  COMPANY: [
    { label: "Home", href: "/#home" },
    { label: "About Us", href: "/#about" },
    { label: "Machinery", href: "/machinery" },
    { label: "Contact", href: "/#contact" },
  ],
  LEGAL: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#0B1120] text-slate-400 font-sans">
      <div className="mx-auto max-w-7xl px-4 pt-24 pb-8 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Brand Column */}
          <div className="lg:w-[35%] lg:pr-8">
            <div className="mb-8">
              {/* Added a subtle brightness bump to ensure the logo pops on the dark background */}
              <div className="brightness-125 filter inline-block">
                <Logo variant="compact" />
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              {SITE.description}
            </p>
          </div>

          {/* Links Columns */}
          <div className="lg:flex-1 grid grid-cols-2 sm:grid-cols-4 gap-10 lg:gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="flex flex-col">
                <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
                  {title}
                </h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group relative inline-flex items-center text-sm font-medium text-slate-400 transition-all duration-300 hover:text-white"
                      >
                        <span className="absolute -left-3 opacity-0 transition-all duration-300 group-hover:-left-0 group-hover:opacity-100 text-[#fc6604]">
                          ›
                        </span>
                        <span className="transition-transform duration-300 group-hover:translate-x-3">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col items-center justify-center gap-3 border-t border-slate-800/80 pt-8 sm:flex-row sm:justify-start">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <p className="text-sm font-medium tracking-wide text-slate-400 text-center sm:text-left">
              ©{new Date().getFullYear()} {SITE.name}. All rights reserved.
            </p>
            <span className="hidden text-slate-600 sm:inline-block">|</span>
            <p className="text-sm font-medium tracking-wide text-slate-400 text-center sm:text-left">
              Developed by <span className="text-[#fc6604]">Abhivorn Technologies Pvt Ltd</span> & <span className="text-[#fc6604]">Digi Level Up</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
