"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();
  const pathname = usePathname() || "/";

  useEffect(() => {
    if (pathname !== "/") return;

    // Map page routes to homepage section IDs for scroll spy functionality
    const routeToSectionMap: Record<string, string> = {
      "/about": "about",
      "/services": "services",
      "/contact": "contact",
    };
    const sectionIds = Object.values(routeToSectionMap);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -40% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-md transition-all duration-300">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <Link href="/" className="group shrink-0 transition-opacity hover:opacity-90">
          <Logo />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const isHash = link.href.startsWith("#");
            const targetHref = isHash ? (pathname === "/" ? link.href : `/${link.href}`) : link.href;
            
            let isActive = false;
            
            if (link.href === "/") {
              // Home link is active only on the actual homepage, or when scroll spy is on "home"
              isActive = pathname === "/" && (activeSection === "home" || activeSection === "");
            } else if (pathname === "/") {
              // On homepage, use scroll spy mapping for section links
              const mappedSection = link.href.replace("/", "");
              isActive = activeSection === mappedSection;
            } else {
              // On separate pages, use exact pathname matching
              isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            }

            return (
              <Link
                key={link.href}
                href={targetHref}
                className={`group relative py-1 text-sm font-bold uppercase tracking-wide transition-colors ${
                  isActive ? "text-accent" : "text-foreground/80 hover:text-accent"
                }`}
              >
                {link.label}
                <span 
                  className={`absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-300 ease-out ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} 
                />
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-md bg-accent px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-accent/30 transition-all hover:bg-accent-dark hover:-translate-y-0.5"
          >
            Get Free Quote
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center justify-center rounded-xl bg-slate-50 p-2.5 text-slate-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-100 hover:text-slate-900 transition-all active:scale-95 lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-slate-200/50 bg-white/95 backdrop-blur-lg px-4 py-6 shadow-xl lg:hidden"
        >
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => {
              const isHash = link.href.startsWith("#");
              const targetHref = isHash ? (pathname === "/" ? link.href : `/${link.href}`) : link.href;
              
              let isActive = false;
              
              if (link.href === "/") {
                isActive = pathname === "/" && (activeSection === "home" || activeSection === "");
              } else if (pathname === "/") {
                const mappedSection = link.href.replace("/", "");
                isActive = activeSection === mappedSection;
              } else {
                isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
              }

              return (
                <Link
                  key={link.href}
                  href={targetHref}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm font-semibold uppercase tracking-wide ${
                    isActive 
                      ? "bg-accent/10 text-accent" 
                      : "text-foreground/80 hover:bg-surface hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 rounded-xl bg-gradient-to-r from-accent to-[#ea5a02] px-4 py-3 text-center text-sm font-black uppercase tracking-widest text-white shadow-lg shadow-accent/20 active:scale-95 transition-transform"
            >
              Get Free Quote
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
