"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { SERVICE_AREAS, SITE } from "@/lib/constants";

export function ServiceArea() {
  // Default to Hyderabad or the first area
  const [activeArea, setActiveArea] = useState<string>(SERVICE_AREAS[1] || SERVICE_AREAS[0] || "Hyderabad");

  return (
    <AnimatedSection className="bg-[#141414] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <div>
            <p className="text-sm sm:text-base font-black uppercase tracking-widest text-accent">
              Service Areas
            </p>
            <h2 className="mt-3 text-3xl font-extrabold uppercase text-white sm:text-4xl">
              Serving <span className="text-accent">Andhra Pradesh & Telangana</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              We dispatch heavy equipment and highly trained crews across Andhra Pradesh and Telangana, while also undertaking major excavation projects in key surrounding hubs.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-5 py-3">
              <MapPin className="h-5 w-5 shrink-0 text-accent" />
              <p className="text-sm font-medium tracking-wide text-slate-300">{SITE.address}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {SERVICE_AREAS.map((area, i) => {
                const isActive = activeArea === area;
                return (
                  <motion.button
                    key={area}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveArea(area)}
                    className={`rounded-full border px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium transition-colors ${
                      isActive
                        ? "border-accent bg-accent text-white shadow-lg shadow-accent/20"
                        : "border-accent/30 bg-accent/10 text-accent-yellow hover:bg-accent/20"
                    }`}
                  >
                    {area}
                  </motion.button>
                );
              })}
            </div>
          </div>

          <motion.div
            key={activeArea}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl aspect-square md:aspect-video lg:aspect-[4/3] w-full"
          >
            <iframe
              title={`Map of ${activeArea}`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(activeArea + ', India')}&z=${activeArea === 'Andhra Pradesh' ? 6 : 10}&output=embed&iwloc=B`}
              width="100%"
              height="100%"
              className="border-0 filter invert-[90%] hue-rotate-180 contrast-[1.1] grayscale-[20%]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
