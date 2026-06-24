"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_IMAGES } from "@/lib/constants";
import { ChevronDown, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

const CATEGORIES = ["All", "Services", "Projects", "Machinery"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredImages = activeCategory === "All" 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <main className="min-h-screen bg-slate-100 selection:bg-accent selection:text-white pb-24">
      
      {/* 1. Stunning Dark Hero Section (Matching Machinery Page) */}
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
              Visual Showcase
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#f4d880]">Gallery</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-8 max-w-3xl text-lg font-medium leading-relaxed text-slate-300 sm:text-xl"
          >
            Explore our extensive portfolio of high-precision earthworks, controlled blasting, and advanced machinery in action. We let our results speak for themselves.
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

      {/* 2. Premium Image Grid */}
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
            {filteredImages.map((item) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative flex w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)] flex-col rounded-[2rem] border border-slate-200/80 bg-white shadow-md shadow-slate-200/40 overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 hover:border-accent/30"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Hover Icon Overlay (No dark background) */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center pointer-events-none z-20">
                    <div className="bg-[#fc6604]/90 backdrop-blur-sm p-4 rounded-full translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 shadow-xl shadow-[#fc6604]/40 ring-4 ring-white/20">
                      <ImageIcon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 relative z-10 flex flex-col items-center bg-white border-t border-slate-100 transition-colors group-hover:bg-slate-50">
                  <h3 className="text-lg font-black text-slate-900 tracking-tight text-center" style={{ fontFamily: "var(--font-barlow)" }}>
                    {item.title}
                  </h3>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#fc6604] mt-2">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredImages.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-slate-500">No images found in this category.</p>
          </div>
        )}
      </section>
    </main>
  );
}
