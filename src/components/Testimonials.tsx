"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { AnimatedSection, StaggerContainer, staggerItem } from "./AnimatedSection";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <AnimatedSection id="feedback" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-black uppercase tracking-widest text-[#fc6604]">
            Client Feedback
          </p>
          <h2
            className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            What Our Clients Say
          </h2>
          <p className="mt-6 text-lg text-slate-600 font-medium">
            Don&apos;t just take our word for it. Here is what our trusted partners have to say about working with BNR Earth Movers.
          </p>
        </div>

        <StaggerContainer className="mt-16 grid gap-8 lg:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <motion.blockquote
              key={item.name}
              variants={staggerItem}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group relative flex flex-col justify-between rounded-[2rem] bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 hover:ring-[#fc6604]/30 sm:p-10 z-10 overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#fc6604]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 -z-10" />
              
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="inline-flex items-center justify-center rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-100 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-[#fc6604]/10 group-hover:ring-[#fc6604]/30 group-hover:shadow-md">
                    <Quote className="h-6 w-6 text-slate-300 transition-colors duration-500 group-hover:text-[#fc6604]" />
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#fc6604] text-[#fc6604]" />
                    ))}
                  </div>
                </div>
                
                <p className="text-lg font-medium leading-relaxed text-slate-700">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <footer className="mt-10 flex items-center gap-4 pt-6 border-t border-slate-200/80 transition-colors duration-500 group-hover:border-[#fc6604]/20">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#fc6604] group-hover:ring-[#fc6604] group-hover:shadow-lg group-hover:shadow-[#fc6604]/30">
                  <span className="text-sm font-black text-slate-700 transition-colors duration-500 group-hover:text-white" style={{ fontFamily: "var(--font-barlow)" }}>
                    {item.initial}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-slate-900 tracking-wide">{item.name}</p>
                  <p className="text-sm font-medium text-slate-500">{item.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </StaggerContainer>

      </div>
    </AnimatedSection>
  );
}
