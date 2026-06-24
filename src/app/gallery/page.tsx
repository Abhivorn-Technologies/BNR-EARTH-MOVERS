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
      
      {/* 1. Stunning Image-Driven Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-32 pb-32 text-center bg-slate-900">
        {/* Full Bleed Background Image with Subtle Scale Animation */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/ROCK EXCAVATION 1.png"
            alt="Gallery Hero Background"
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
              Visual Showcase
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl drop-shadow-2xl"
            style={{ fontFamily: "var(--font-barlow)", textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
          >
            Our Project <span className="text-accent">Gallery</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-8 max-w-3xl text-lg font-medium leading-relaxed text-slate-200 sm:text-xl drop-shadow-lg"
          >
            Explore our extensive portfolio of high-precision earthworks, controlled blasting, and advanced machinery in action. We let our results speak for themselves.
          </motion.p>
        </div>
      </section>

      {/* 2. Premium Image Grid */}
      <section className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            {filteredImages.map((item) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative h-80 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)] overflow-hidden rounded-[2rem] bg-slate-900 shadow-md shadow-slate-200/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20 hover:ring-2 hover:ring-accent/50 cursor-pointer"
              >
                {/* Background Image */}
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-70"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
                
                {/* Hover Icon (Center) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-50 rounded-full bg-white/10 p-4 opacity-0 shadow-xl ring-1 ring-white/20 backdrop-blur-md transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 z-20">
                   <ImageIcon className="h-6 w-6 text-white" />
                </div>

                {/* Content Container (Bottom) */}
                <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center justify-end p-6 transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-xl font-black text-white tracking-tight text-center transition-colors duration-300 group-hover:text-accent" style={{ fontFamily: "var(--font-barlow)" }}>
                    {item.title}
                  </h3>
                  <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-2">
                    <div className="overflow-hidden">
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
                        {item.category}
                      </span>
                    </div>
                  </div>
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
