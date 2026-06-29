"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export function ServiceAccordion({ points, serviceTitle }: { points: readonly string[], serviceTitle: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-8 space-y-4">
      {points.map((point, i) => {
        const isOpen = openIndex === i;
        
        const question = point;
        const answer = `Our expert team is fully equipped to handle ${point.toLowerCase()}. We leverage years of industry experience, advanced ${serviceTitle.toLowerCase()} machinery, and strict safety protocols to ensure flawless execution.`;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`rounded-2xl border transition-all duration-300 ${isOpen ? 'border-[#fc6604]/50 bg-white shadow-lg shadow-[#fc6604]/10' : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'}`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between p-5 text-left sm:p-6"
            >
              <div className="pr-4">
                <h3 className="text-base sm:text-lg font-bold text-slate-700 leading-tight">{question}</h3>
              </div>
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${isOpen ? 'bg-[#fc6604] text-white rotate-45 border-transparent' : 'bg-white text-slate-500 border border-slate-200 shadow-sm hover:border-slate-300'}`}>
                <Plus className={`h-6 w-6 stroke-[2] transition-transform duration-300 ${isOpen ? 'rotate-0' : ''}`} />
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
                    <p className="text-sm font-medium leading-relaxed text-slate-500 sm:text-base">
                      {answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
