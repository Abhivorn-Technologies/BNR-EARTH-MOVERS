"use client";

import { Logo } from "@/components/Logo";
import { SITE, SERVICES } from "@/lib/constants";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

const footerLinks = {
  SERVICES: SERVICES.slice(0, 4).map(s => ({ label: s.title, href: `/services/${s.id}` })),
  "MORE SERVICES": SERVICES.slice(4, 8).map(s => ({ label: s.title, href: `/services/${s.id}` })),
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
            <p className="text-sm leading-relaxed text-slate-400 mb-8">
              {SITE.description}
            </p>
            <div className="flex items-center gap-4">
              <a 
                href={SITE.instagramUrl || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-all hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] shadow-md"
                aria-label="Follow us on Instagram"
              >
                <InstagramIcon className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href={SITE.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-all hover:bg-[#25D366] shadow-md"
                aria-label="Chat with us on WhatsApp"
              >
                <MessageCircle className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href={SITE.phoneUrl} 
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-all hover:bg-[#fc6604] shadow-md"
                aria-label="Call us"
              >
                <Phone className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
            </div>
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
              Developed by{" "}
              <a href="https://www.abhivorn.com/" target="_blank" rel="noopener noreferrer" className="text-[#fc6604] hover:underline transition-all">
                Abhivorn Technologies Pvt Ltd
              </a>{" "}
              &{" "}
              <a href="https://www.digilevelup.in/" target="_blank" rel="noopener noreferrer" className="text-[#fc6604] hover:underline transition-all">
                Digi Level Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
  );
}
