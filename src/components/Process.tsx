"use client";

import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, staggerItem } from "./AnimatedSection";
import { PROCESS_STEPS, WHY_US } from "@/lib/constants";

const WHY_ICONS = ["🛡️", "⏱️", "👷", "🚜"];

export function Process() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-slate-950 py-16 lg:py-20">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: "linear-gradient(#fc6604 1px, transparent 1px), linear-gradient(90deg, #fc6604 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[#fc6604]">
            How We Work
          </p>
          <h2
            className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            From Quote to Completion
          </h2>
        </div>

        <StaggerContainer className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.step}
              variants={staggerItem}
              className="relative text-center group"
            >
              {/* Animated Connecting Line */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="absolute left-[calc(50%+3rem)] top-10 hidden h-[2px] w-[calc(100%-6rem)] overflow-hidden bg-slate-800 lg:block">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.5, delay: 0.3 + index * 0.2, ease: "easeInOut" }}
                    className="h-full bg-gradient-to-r from-[#fc6604] to-transparent"
                  />
                </div>
              )}

              {/* Step Block - Glowing Hollow Ring */}
              <motion.div 
                whileHover={{ y: -8, scale: 1.05 }}
                className="mx-auto flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-slate-950 border-[3px] border-[#fc6604] text-2xl sm:text-3xl font-black text-white shadow-[0_0_30px_rgba(252,102,4,0.2)] transition-all group-hover:shadow-[0_0_40px_rgba(252,102,4,0.4)] relative"
              >
                <div className="absolute inset-0 rounded-full bg-[#fc6604]/10 animate-pulse" />
                {step.step}
              </motion.div>

              <div className="mt-8">
                <span className="inline-block rounded-full bg-[#fc6604]/10 border border-[#fc6604]/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#fc6604] shadow-[0_0_15px_rgba(252,102,4,0.1)]">
                  Phase {step.step}
                </span>
                <h3
                  className="mt-5 text-2xl font-bold text-white transition-colors group-hover:text-[#fc6604]"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {step.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-slate-400 max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}

export function WhyUs() {
  return (
    <AnimatedSection className="bg-slate-50 py-16 lg:py-20 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[#fc6604]">
            Why Choose Us
          </p>
          <h2
            className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            The Power Behind Every Project
          </h2>
        </div>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((item, i) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 transition-all duration-500 hover:border-[#fc6604]/30 hover:shadow-2xl hover:shadow-[#fc6604]/15 z-10 overflow-hidden"
              >
                {/* Subtle Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#fc6604]/0 via-transparent to-[#fc6604]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 -z-10" />
                
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-2xl shadow-sm border border-orange-100 transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-[#fc6604]/20 group-hover:border-[#fc6604]/30">
                  {WHY_ICONS[i]}
                </div>
                <h3
                  className="text-xl font-bold text-slate-900"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
