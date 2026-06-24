"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

export function TopBar() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-background border-b border-border text-foreground"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider sm:px-6 lg:px-8">
        <p className="text-accent font-bold">{SITE.availability}</p>
        <div className="flex items-center gap-4">
          <a
            href={SITE.phoneUrl}
            className="flex items-center gap-1.5 transition-colors hover:text-accent"
          >
            <Phone className="h-3.5 w-3.5" />
            {SITE.phoneDisplay}
          </a>
          <div className="flex items-center gap-2">
            <Mail className="h-3.5 w-3.5 text-[#fc6604]" />
            <a
              href={SITE.emailUrl}
              className="hover:text-white transition-colors"
            >
              {SITE.email}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
