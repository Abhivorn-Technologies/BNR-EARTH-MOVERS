"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import Image from "next/image";
import { MACHINERY } from "@/lib/constants";
import { MachineryIcon } from "@/components/MachineryIcon";

const CATEGORIES = ["All", "Excavation", "Drilling & Blasting", "Transport", "Support", "Specialized"];

export default function MachineryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMachinery = activeCategory === "All" 
    ? MACHINERY 
    : MACHINERY.filter((m) => m.category === activeCategory);


  return (
    <MotionConfig reducedMotion="user">
    <main className="min-h-screen bg-slate-100 selection:bg-accent selection:text-white pb-24">
      
      {/* 1. Stunning Image-Driven Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-32 pb-32 text-center bg-slate-900">
        {/* Full Bleed Background Image with Subtle Scale Animation */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/services/rock-excavation-1.png"
            alt=""
            fill
            unoptimized={true}
            className="object-cover opacity-40 mix-blend-luminosity animate-[pulse_20s_ease-in-out_infinite] scale-105"
            priority
          />
          {/* Professional Gradient Overlay blending into the page body */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-slate-100" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md shadow-2xl"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent"></span>
            </span>
            <span className="text-sm sm:text-base font-black uppercase tracking-widest text-white">
              Our Heavy Equipment
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl drop-shadow-2xl"
            style={{ fontFamily: "var(--font-barlow)", textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
          >
            Advanced <span className="text-accent">Machinery</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-8 max-w-3xl text-lg font-medium leading-relaxed text-slate-200 sm:text-xl drop-shadow-lg"
          >
            At BNR Earth Movers, we pride ourselves on having a fleet of advanced machinery that enhances our ability to deliver exceptional excavation and land development services. From survey and civil construction to massive excavation, we use the best tools for the job.
          </motion.p>
        </div>
      </section>

      {/* 2. Premium Machinery Grid */}
      <section id="machinery-grid" className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 scroll-mt-32">
        {/* Dynamic Category Filters */}
        <div role="group" aria-label="Filter machinery by category" className="relative z-30 mx-auto -mt-10 mb-8 flex max-w-fit flex-wrap items-center justify-center gap-2 rounded-2xl bg-white p-2 shadow-xl shadow-black/10 ring-1 ring-slate-900/5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-xl px-6 py-2.5 text-sm font-bold tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-accent text-white shadow-md"
                  : "bg-transparent text-slate-600 hover:bg-slate-50 hover:text-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {filteredMachinery.length} machines
        </p>

        <motion.ul layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredMachinery.map((item) => (
              <motion.li
                key={item.name}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-slate-300/40"
              >
                {"image" in item ? (
                  <div className="relative h-36 overflow-hidden bg-slate-950 sm:h-44">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 1280px) 300px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
                    />
                    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 bg-accent" />
                  </div>
                ) : (
                  <div className="relative flex h-36 items-center sm:h-44 justify-center overflow-hidden bg-slate-950">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-[0.07]"
                      style={{
                        backgroundImage:
                          "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                        backgroundSize: "16px 16px",
                      }}
                    />
                    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 bg-accent" />
                    <MachineryIcon
                      name={item.icon}
                      size={124}
                      strokeWidth={1.8}
                      className="relative text-accent transition-transform duration-500 group-hover:-translate-y-1 motion-reduce:transition-none"
                    />
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent-dark">{item.category}</p>
                  <h2 className="mt-2 text-xl font-bold text-slate-900" style={{ fontFamily: "var(--font-barlow)" }}>
                    {item.name}
                  </h2>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </section>

      {/* 3. High-End Outro Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-4 mt-32 max-w-7xl rounded-[2.5rem] sm:mx-6 lg:mx-auto bg-gradient-to-br from-slate-900 via-slate-950 to-[#1a0b02] p-10 text-center sm:p-16 relative overflow-hidden shadow-2xl shadow-accent/10 border border-accent/20"
        >
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
          
          <h2 className="relative z-10 mx-auto max-w-4xl text-2xl font-bold leading-relaxed text-white sm:text-4xl" style={{ fontFamily: "var(--font-barlow)" }}>
            Equipped to handle any project with <span className="text-accent">precision</span> and <span className="text-accent">reliability</span>, ensuring smooth execution from start to finish.
          </h2>
          
          <div className="relative z-10 mt-10">
             <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-[#ea5a02] px-10 py-4 text-sm font-black uppercase tracking-widest text-white shadow-xl shadow-accent/20 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/40 hover:brightness-110">
               Get A Free Quote
             </Link>
          </div>
        </motion.div>
    </main>
    </MotionConfig>
  );
}
