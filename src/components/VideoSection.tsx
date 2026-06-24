"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Play, ArrowRight } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { SITE } from "@/lib/constants";

const highlights = [
  "Precision Rock & Chemical Cutting",
  "Controlled Bore Hole Blasting",
  "Deep Excavation & Land Leveling",
];

  export function VideoSection() {
    return (
      <AnimatedSection id="about" className="relative bg-white py-12 lg:py-16 overflow-hidden">
        {/* Premium Background Elements */}
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#fc6604]/5 blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          
          {/* LEFT SIDE: Image */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="group relative h-[300px] sm:h-[400px] w-full overflow-hidden rounded-3xl shadow-2xl shadow-slate-900/10 ring-8 ring-white"
            >
              <Image
                src="/ROCK EXCAVATION 1.png"
                alt="Heavy construction machinery"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>

            {/* Floating Experience Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-4 right-4 sm:-right-8 sm:-bottom-8 lg:-right-8 lg:-bottom-8 z-20 flex flex-col items-center justify-center rounded-[2rem] bg-white p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] ring-1 ring-slate-100"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fc6604] to-[#ea5a02] text-white shadow-lg shadow-[#fc6604]/30">
                  <span className="text-2xl font-black">15</span>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Years of</p>
                  <p className="text-xl font-black text-slate-900" style={{ fontFamily: "var(--font-barlow)" }}>Excellence</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Content */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-black uppercase tracking-widest text-[#fc6604]">
                Our Expertise
              </p>
              <h2
                className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-4xl lg:leading-tight"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                Advanced Cutting & Blasting Experts.
              </h2>
              <div className="mt-3 h-1 w-16 rounded-full bg-[#fc6604]" />
              <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600 sm:text-base">
                At <strong className="text-slate-800">{SITE.name}</strong>, we specialize in highly technical rock cutting and structural dismantling. Equipped with modern technology like rope and chemical cutting, along with safe blasting procedures, we deliver vibration-free, precise results for even the most sensitive environments.
              </p>
            </motion.div>

            <ul className="mt-5 space-y-2">
              {highlights.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-100 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50 hover:ring-[#fc6604]/20"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-[#fc6604] transition-colors duration-300 group-hover:bg-[#fc6604] group-hover:text-white">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-bold text-slate-700 transition-colors group-hover:text-slate-900">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-6"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#fc6604] to-[#ea5a02] px-8 py-3.5 text-sm font-black uppercase tracking-widest text-white shadow-lg shadow-[#fc6604]/30 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#fc6604]/40"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </AnimatedSection>
  );
}


