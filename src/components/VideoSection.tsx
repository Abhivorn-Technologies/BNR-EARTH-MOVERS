"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Plus, X } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { SITE } from "@/lib/constants";

const faqs = [
  {
    category: "SPECIALIZED SERVICE",
    question: "Precision Rock & Chemical Cutting",
    answer: "We utilize state-of-the-art chemical compounds and diamond wire saws for noiseless, vibration-free rock splitting in highly sensitive urban environments."
  },
  {
    category: "CORE EXPERTISE",
    question: "Controlled Bore Hole Blasting",
    answer: "Our licensed experts conduct precise drill-and-blast operations, strictly adhering to safety regulations, ensuring optimal rock fragmentation with minimal ground vibration."
  },
  {
    category: "HEAVY EARTHWORKS",
    question: "Deep Excavation & Land Leveling",
    answer: "We provide comprehensive bulk excavation, grading, and site preparation services for massive commercial and industrial developments, utilizing our fleet of heavy machinery."
  }
];

  export function VideoSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    return (
      <AnimatedSection id="about-us" className="relative bg-white py-12 lg:py-16 overflow-hidden">
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
              className="group relative h-[250px] sm:h-[320px] lg:h-[380px] w-full overflow-hidden rounded-3xl shadow-2xl shadow-slate-900/10 ring-8 ring-white"
            >
              <Image
                src="/about-excavator.jpg"
                alt="Heavy construction machinery"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>

            {/* Floating Experience Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 lg:top-6 lg:right-4 z-20 flex items-center gap-3 sm:gap-4 rounded-2xl bg-slate-900/50 backdrop-blur-md border border-white/10 p-2 pr-5 sm:pr-6 shadow-2xl"
            >
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-[#ea5a02] text-white shadow-lg shadow-[#ea5a02]/40">
                <span className="text-xl sm:text-2xl font-black">15</span>
              </div>
              <div className="flex flex-col">
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-white/95">Years of</p>
                <p className="text-lg sm:text-xl font-black text-white leading-none mt-0.5" style={{ fontFamily: "var(--font-barlow)" }}>Excellence</p>
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
              <p className="text-sm sm:text-base font-black uppercase tracking-widest text-[#fc6604]">
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

            <div className="mt-8 space-y-4">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className={`rounded-2xl border transition-all duration-300 ${isOpen ? 'border-[#fc6604]/30 bg-white shadow-lg shadow-[#fc6604]/5' : 'border-slate-200 bg-slate-50/50 hover:border-slate-300 hover:bg-white'}`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="flex w-full items-start justify-between p-5 text-left sm:p-6"
                    >
                      <div className="pr-4 mt-1">
                        <h3 className="text-lg font-bold text-slate-900 leading-tight">{faq.question}</h3>
                      </div>
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${isOpen ? 'bg-[#ea5a02] text-white rotate-45' : 'bg-white text-slate-400 border border-slate-200 hover:text-[#ea5a02] hover:border-[#ea5a02]/30'}`}>
                        <Plus className="h-4 w-4 stroke-[3]" />
                      </div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                            <p className="text-sm font-medium leading-relaxed text-slate-600 sm:text-base">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </AnimatedSection>
  );
}


