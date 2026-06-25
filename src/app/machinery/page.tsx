"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MACHINERY } from "@/lib/constants";

// Helper function to pick a real image for each machinery
function getIconForMachinery(name: string) {
  // Using the transparent excavator image as a fallback for all items
  // until the specific transparent machinery images are downloaded.
  let imgSrc = "/machinery/excavators.png"; 

  switch (name) {
    case "Excavators": imgSrc = "/machinery/excavators.png"; break;
    case "Dumpers": imgSrc = "/machinery/Dumper.jpg"; break;
    case "Jack Hammer Drills": imgSrc = "/machinery/Jack Hammer Drills.jpg"; break;
    case "Wagon Drills": imgSrc = "/machinery/Wagon Drills.jpg"; break;
    case "Explosives Mobile Magazines": imgSrc = "/machinery/Explosives Mobile Magazines.jpg"; break;
    case "Seismographs": imgSrc = "/machinery/Seismographs.jpg"; break;
    case "Water Tanker with Sprinklers": imgSrc = "/machinery/Water Tanker with Sprinklers.jpg"; break;
    case "Dozers": imgSrc = "/machinery/Dozers.jpg"; break;
    case "Dewatering Pumps": imgSrc = "/machinery/Dewatering Pumps.jpg"; break;
    case "Diamond Rope Cutting Units": imgSrc = "/machinery/Diamond Rope Cutting Units.jpg"; break;
    case "Blasting Mats / Rubber Mats": imgSrc = "/machinery/Blasting Mats.jpg"; break;
    case "Pile Load Testing Equipment": imgSrc = "/machinery/Pile Load Testing Equipment.jpg"; break;
    case "Backhoe": imgSrc = "/machinery/Backhoe.jpg"; break;
    case "Hydraulic Rotary Rig": imgSrc = "/machinery/Hydraulic Rotary Rig.avif"; break;
  }

  return (
    <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-slate-50 shadow-sm ring-1 ring-slate-200 transition-all duration-500 group-hover:scale-110 group-hover:shadow-md group-hover:ring-[#fc6604] group-hover:ring-2">
      <Image 
        src={imgSrc} 
        alt={name} 
        fill 
        className="object-contain p-1.5 drop-shadow-sm"
        sizes="56px"
      />
    </div>
  );
}

const CATEGORIES = ["All", "Excavation", "Drilling & Blasting", "Transport", "Support", "Specialized"];

export default function MachineryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  
  const filteredMachinery = activeCategory === "All" 
    ? MACHINERY 
    : MACHINERY.filter((m) => m.category === activeCategory);

  const displayedMachinery = showAll ? filteredMachinery : filteredMachinery.slice(0, 8);

  return (
    <main className="min-h-screen bg-slate-100 selection:bg-accent selection:text-white pb-24">
      
      {/* 1. Stunning Image-Driven Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-32 pb-32 text-center bg-slate-900">
        {/* Full Bleed Background Image with Subtle Scale Animation */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/services/ROCK EXCAVATION 1.png"
            alt="Machinery Hero Background"
            fill
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
            <span className="text-xs font-black uppercase tracking-widest text-white">
              Our Heavy Arsenal
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
        <div className="relative z-30 mx-auto -mt-10 mb-8 flex max-w-fit flex-wrap items-center justify-center gap-2 rounded-2xl bg-white p-2 shadow-xl shadow-black/10 ring-1 ring-slate-900/5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
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

        <motion.div 
          layout
          className="flex flex-wrap justify-center gap-5 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedMachinery.map((item, idx) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative flex w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)] flex-col rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-md shadow-slate-200/40 overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 hover:border-accent/30"
              >
                <div className="relative z-10 flex flex-col h-full">
                  {/* Real Image Icon Container */}
                  <div className="mb-5 inline-flex">
                    {getIconForMachinery(item.name)}
                  </div>
                  
                  {/* Category Pill */}
                  <span className="mb-3 w-fit rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-500 transition-colors duration-500 group-hover:bg-accent/10 group-hover:text-accent">
                    {item.category}
                  </span>
                  
                  <h3 className="mb-2 text-lg font-bold text-slate-900 transition-colors duration-500 group-hover:text-accent" style={{ fontFamily: "var(--font-barlow)" }}>
                    {item.name}
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-slate-500">
                    {item.desc}
                  </p>
                </div>
                
                {/* Calm Bottom Glowing Line */}
                <div className="absolute inset-x-0 bottom-0 h-1 scale-x-0 rounded-b-3xl bg-gradient-to-r from-accent to-[#ea5a02] transition-transform duration-700 ease-in-out group-hover:scale-x-100" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More / View Less Buttons */}
        {filteredMachinery.length > 8 && (
          <div className="mt-12 flex justify-center gap-4">
            {!showAll ? (
              <button
                onClick={() => setShowAll(true)}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-slate-900 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20"
              >
                <span>View More</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  setShowAll(false);
                  document.getElementById("machinery-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-3.5 text-sm font-bold text-slate-700 shadow-md ring-1 ring-slate-200 transition-all hover:bg-slate-50 hover:shadow-lg"
              >
                <span>View Less</span>
              </button>
            )}
          </div>
        )}
      </section>

      {/* 3. High-End Outro Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-32 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-950 to-[#1a0b02] p-10 text-center sm:p-16 relative overflow-hidden shadow-2xl shadow-accent/10 border border-accent/20"
        >
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
          
          <h2 className="relative z-10 mx-auto max-w-4xl text-2xl font-bold leading-relaxed text-white sm:text-4xl" style={{ fontFamily: "var(--font-barlow)" }}>
            Equipped to handle any project with <span className="text-accent">precision</span> and <span className="text-accent">reliability</span>, ensuring smooth execution from start to finish.
          </h2>
          
          <div className="relative z-10 mt-10">
             <a href="/#contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-[#ea5a02] px-10 py-4 text-sm font-black uppercase tracking-widest text-white shadow-xl shadow-accent/20 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/40 hover:brightness-110">
               Get A Free Quote
             </a>
          </div>
        </motion.div>
    </main>
  );
}
