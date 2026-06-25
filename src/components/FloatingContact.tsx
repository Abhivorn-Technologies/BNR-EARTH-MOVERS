"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ChevronUp } from "lucide-react";
import { SITE } from "@/lib/constants";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.882 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
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

function FloatingButton({
  href,
  label,
  textLabel,
  color,
  glowColor,
  labelColor,
  external,
  children,
}: {
  href: string;
  label: string;
  textLabel?: string;
  color: string;
  glowColor: string;
  labelColor?: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      initial={{ opacity: 0, scale: 0, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group relative flex items-center justify-end"
    >
      {textLabel && (
        <span
          className={`absolute right-full mr-3 sm:mr-4 px-3 py-2 rounded-md text-sm font-semibold shadow-md whitespace-nowrap hidden md:block ${labelColor}`}
        >
          {textLabel}
        </span>
      )}
      <span
        className={`absolute h-[60px] w-[60px] rounded-full ${glowColor} animate-pulse-ring hidden sm:block`}
      />
      <span
        className={`relative flex h-12 w-12 sm:h-[60px] sm:w-[60px] items-center justify-center rounded-full ${color} shadow-lg transition-transform`}
      >
        {children}
      </span>
    </motion.a>
  );
}

export function FloatingContact() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-4 items-end">
      
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 50 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="group relative flex h-12 w-12 sm:h-[60px] sm:w-[60px] items-center justify-center rounded-full bg-slate-900 shadow-lg shadow-slate-900/20 transition-transform"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-6 w-6 sm:h-8 sm:w-8 text-[#fcd34d]" strokeWidth={3} />
          </motion.button>
        )}
      </AnimatePresence>

      <FloatingButton
        href={SITE.phoneUrl}
        label="Call us"
        textLabel="Talk to an Expert"
        color="bg-[#fc6604]"
        glowColor="bg-[#fc6604]/40"
        labelColor="bg-[#fc6604] text-white shadow-md"
      >
        <Phone className="h-5 w-5 sm:h-[26px] sm:w-[26px] text-white" fill="white" />
      </FloatingButton>

      <FloatingButton
        href={SITE.whatsappUrl}
        label="Chat on WhatsApp"
        textLabel="WhatsApp Now"
        color="bg-[#25D366]"
        glowColor="bg-[#25D366]/40"
        labelColor="bg-[#25D366] text-white shadow-md"
        external
      >
        <WhatsAppIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
      </FloatingButton>

      <FloatingButton
        href="#"
        label="Follow on Instagram"
        textLabel="Instagram"
        color="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]"
        glowColor="bg-[#e1306c]/40"
        labelColor="bg-[#e1306c] text-white shadow-md"
        external
      >
        <InstagramIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
      </FloatingButton>
    </div>
  );
}
