"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MACHINERY } from "@/lib/constants";
import { Tractor, Truck, Hammer, Pickaxe, Flame, Activity, Droplets, HardHat, Waves, Disc, Layers, ArrowDownToLine, Shovel, Drill, Settings, ChevronDown } from "lucide-react";

// Helper function to pick a semi-relevant icon
function getIconForMachinery(name: string) {
  switch (name) {
    case "Excavators":
      return <Tractor className="h-7 w-7" />;
    case "Dumpers":
      return <Truck className="h-7 w-7" />;
    case "Jack Hammer Drills":
      return <Hammer className="h-7 w-7" />;
    case "Wagon Drills":
      return <Pickaxe className="h-7 w-7" />;
    case "Explosives Mobile Magazines":
      return <Flame className="h-7 w-7" />;
    case "Seismographs":
      return <Activity className="h-7 w-7" />;
    case "Water Tanker with Sprinklers":
      return <Droplets className="h-7 w-7" />;
    case "Dozers":
      return <HardHat className="h-7 w-7" />;
    case "Dewatering Pumps":
      return <Waves className="h-7 w-7" />;
    case "Diamond Rope Cutting Units":
      return <Disc className="h-7 w-7" />;
    case "Blasting Mats / Rubber Mats":
      return <Layers className="h-7 w-7" />;
    case "Pile Load Testing Equipment":
      return <ArrowDownToLine className="h-7 w-7" />;
    case "Backhoe":
      return <Shovel className="h-7 w-7" />;
    case "Hydraulic Rotary Rig":
      return <Drill className="h-7 w-7" />;
    default:
      return <Settings className="h-7 w-7" />;
  }
}

const CATEGORIES = ["All", "Excavation", "Drilling & Blasting", "Transport", "Support", "Specialized"];

export default function MachineryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredMachinery = activeCategory === "All" 
    ? MACHINERY 
    : MACHINERY.filter((m) => m.category === activeCategory);

  return (
    <main className="min-h-screen bg-slate-100 selection:bg-accent selection:text-white pb-24">
      
      {/* 1. Stunning Dark Hero Section */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-slate-950 pt-32 pb-20 text-center">
        {/* Background Grid & Glow */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(#fc6604 1px, transparent 1px), linear-gradient(90deg, #fc6604 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#fc6604]/20 blur-[150px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-accent/40 bg-accent/10 px-5 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(252,102,4,0.15)]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent"></span>
            </span>
            <span className="text-xs font-black uppercase tracking-widest text-accent">
              Our Heavy Arsenal
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#f4d880]">Machinery</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-8 max-w-3xl text-lg font-medium leading-relaxed text-slate-300 sm:text-xl"
          >
            At BNR Earth Movers, we pride ourselves on having a fleet of advanced machinery that enhances our ability to deliver exceptional excavation and land development services. From survey and civil construction to massive excavation, we use the best tools for the job.
          </motion.p>
          
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1, duration: 1 }}
             className="mt-16 animate-bounce"
          >
             <ChevronDown className="h-8 w-8 text-accent/50" />
          </motion.div>
        </div>
        
        {/* Slanted Bottom Divider */}
        <div className="absolute -bottom-1 left-0 right-0 h-16 bg-slate-100" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
      </section>

      {/* 2. Premium Machinery Grid */}
      <section className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-8">
        {/* Dynamic Category Filters */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full border px-6 py-2.5 text-sm font-bold tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? "border-accent bg-accent text-white shadow-lg shadow-accent/30 scale-105"
                  : "border-slate-200 bg-white text-slate-600 hover:border-accent/30 hover:bg-slate-50 hover:text-accent"
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
            {filteredMachinery.map((item, idx) => (
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
                  {/* Calm Animated Icon Container */}
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 text-slate-400 transition-colors duration-500 group-hover:bg-accent/10 group-hover:border-accent/20 group-hover:text-accent shadow-sm">
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

      </section>
    </main>
  );
}
