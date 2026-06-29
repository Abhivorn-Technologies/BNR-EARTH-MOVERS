"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_IMAGES, NEW_GALLERY_PHOTOS, NEW_GALLERY_VIDEOS } from "@/lib/constants";
import { Play as PlayIcon, X as XIcon, Image as ImageIcon, RotateCw, ChevronDown } from "lucide-react";
import Image from "next/image";

const CATEGORIES = ["All", "Services", "Projects", "Machinery"];

function CustomVideoPlayer({ src, onClose }: { src: string, onClose: () => void }) {
  return (
    <div className="relative flex items-center justify-center bg-transparent group overflow-hidden rounded-2xl p-0.5">
      <video
        src={src}
        className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-xl"
        autoPlay
        muted
        controls
        playsInline
      />

      {/* Top Right Close Button (Appears on Hover) */}
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-4 right-4 z-50 rounded-full bg-black/70 p-2 text-white hover:bg-[#fc6604] transition-colors backdrop-blur-sm"
        aria-label="Close Video"
      >
        <XIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<"Photos" | "Videos">("Photos");
  const [showAll, setShowAll] = useState(false);
  const [expandedItem, setExpandedItem] = useState<{ type: "photo" | "video", src: string, title: string, category: string } | null>(null);
  const [rotation, setRotation] = useState(0);
  const [durations, setDurations] = useState<Record<string, number>>({});

  // Prevent background scrolling when modal is open and handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setExpandedItem(null);
      }
    };

    if (expandedItem) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [expandedItem]);

  const handleMetadataLoaded = (src: string, e: React.SyntheticEvent<HTMLVideoElement>) => {
    const duration = e.currentTarget.duration;
    if (duration) {
      setDurations(prev => ({ ...prev, [src]: duration }));
    }
  };

  const formatDuration = (timeInSeconds: number) => {
    if (!timeInSeconds || isNaN(timeInSeconds)) return "0:00";
    const m = Math.floor(timeInSeconds / 60);
    const s = Math.floor(timeInSeconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const activeItems = activeTab === "Photos" ? NEW_GALLERY_PHOTOS : NEW_GALLERY_VIDEOS;
  const visibleItems = showAll ? activeItems : activeItems.slice(0, 8);
  const hasMore = activeItems.length > 8 && !showAll;

  const handleTabChange = (tab: "Photos" | "Videos") => {
    setActiveTab(tab);
    setShowAll(false);
  };

  return (
    <main className="min-h-screen bg-slate-100 selection:bg-accent selection:text-white pb-24">

      {/* 1. Stunning Image-Driven Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-32 pb-32 text-center bg-slate-900">
        {/* Full Bleed Background Image with Subtle Scale Animation */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/services/ROCK EXCAVATION 1.png"
            alt="Gallery Hero Background"
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
            Our Projects <span className="text-accent">Gallery</span>
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
      <section id="gallery-section" className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-16">

        {/* Tabs */}
        <div className="relative z-30 mx-auto mb-12 flex max-w-fit items-center justify-center gap-2 rounded-full bg-white p-2 shadow-xl shadow-black/10 ring-1 ring-slate-900/5">
          <button
            onClick={() => handleTabChange("Photos")}
            className={`rounded-full px-8 py-3 text-sm font-bold tracking-wide transition-all duration-300 ${activeTab === "Photos" ? "bg-[#fc6604] text-white shadow-md" : "bg-transparent text-slate-600 hover:bg-slate-50 hover:text-[#fc6604]"
              }`}
          >
            Photos
          </button>
          <button
            onClick={() => handleTabChange("Videos")}
            className={`rounded-full px-8 py-3 text-sm font-bold tracking-wide transition-all duration-300 ${activeTab === "Videos" ? "bg-[#fc6604] text-white shadow-md" : "bg-transparent text-slate-600 hover:bg-slate-50 hover:text-[#fc6604]"
              }`}
          >
            Videos
          </button>
        </div>

        <motion.div
          layout
          className="flex flex-wrap justify-center gap-5 sm:gap-6"
        >
          <AnimatePresence>
            {visibleItems.map((item, index) => (
              <motion.div
                key={item.src}
                onClick={() => { setExpandedItem({ ...item, type: activeTab === "Photos" ? "photo" : "video" }); setRotation(0); }}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.5, type: "spring", damping: 25, stiffness: 300, delay: index * 0.05 }}
                className="group relative h-80 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)] overflow-hidden rounded-[2rem] bg-slate-900 shadow-md shadow-slate-200/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20 hover:ring-2 hover:ring-accent/50 cursor-pointer"
              >
                {/* Background Media */}
                {activeTab === "Photos" ? (
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-100"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <video
                    src={item.src}
                    className="object-cover h-full w-full opacity-90 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-100"
                    muted
                    playsInline
                    preload="metadata"
                    onLoadedMetadata={(e) => handleMetadataLoaded(item.src, e)}
                  />
                )}

                {/* Clean Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/40 z-10" />

                {activeTab === "Videos" && (
                  <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1 rounded bg-black/80 px-2 py-1 text-xs font-bold tracking-wider text-white backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-0">
                    <PlayIcon className="h-3 w-3" fill="white" />
                    <span>{durations[item.src] ? formatDuration(durations[item.src]) : "0:00"}</span>
                  </div>
                )}

                {/* Hover Icon (Center) */}
                <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full p-4 shadow-xl ring-1 backdrop-blur-md transition-all duration-500 z-20
                  ${activeTab === "Videos"
                    ? "scale-100 opacity-100 bg-black/50 ring-white/20 group-hover:scale-110 group-hover:bg-[#fc6604] group-hover:ring-[#fc6604]"
                    : "scale-50 opacity-0 bg-white/20 ring-white/30 group-hover:scale-100 group-hover:opacity-100"}`}
                >
                  {activeTab === "Photos" ? <ImageIcon className="h-8 w-8 text-white" /> : <PlayIcon className="h-8 w-8 text-white" fill="white" />}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination Buttons */}
        <div className="mt-12 flex justify-center gap-4">
          {hasMore && (
            <button
              onClick={() => setShowAll(true)}
              className="rounded-full bg-[#fc6604] px-8 py-3 font-bold text-white shadow-lg shadow-[#fc6604]/20 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#fc6604]/40"
            >
              View More
            </button>
          )}
          {showAll && activeItems.length > 8 && (
            <button
              onClick={() => {
                setShowAll(false);
                const section = document.getElementById('gallery-section');
                if (section) {
                  window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
                }
              }}
              className="rounded-full bg-white px-8 py-3 font-bold text-slate-800 ring-1 ring-slate-200 shadow-lg shadow-black/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:ring-slate-300"
            >
              View Less
            </button>
          )}
        </div>

        {activeItems.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-slate-500">No media found.</p>
          </div>
        )}
      </section>

      {/* Media Modal Overlay */}
      <AnimatePresence>
        {expandedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => { setExpandedItem(null); setRotation(0); }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-xl p-4 sm:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative flex items-center justify-center max-w-[95vw] md:max-w-[85vw] lg:max-w-[75vw] max-h-[95vh] overflow-hidden rounded-2xl bg-transparent shadow-[0_0_80px_rgba(0,0,0,0.6)] ring-1 ring-white/10 group"
              onClick={(e) => e.stopPropagation()}
            >
              {expandedItem.type === "video" ? (
                <CustomVideoPlayer src={expandedItem.src} onClose={() => { setExpandedItem(null); setRotation(0); }} />
              ) : (
                <div className="relative flex items-center justify-center bg-transparent">
                  {/* Top Right Close Button (YouTube Style) */}
                  <button
                    onClick={(e) => { e.stopPropagation(); setExpandedItem(null); setRotation(0); }}
                    className="absolute top-4 right-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-[#fc6604] transition-colors opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                    aria-label="Close Image"
                  >
                    <XIcon className="h-5 w-5" />
                  </button>

                  <img
                    src={expandedItem.src}
                    alt={expandedItem.title}
                    className="w-auto h-auto max-w-full max-h-[85vh] object-contain transition-transform duration-300"
                    style={{ transform: `rotate(${rotation}deg)` }}
                  />
                  {/* Unified Photo Controls */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-end gap-4 sm:gap-6 pr-2">
                      <div className="group/btn relative flex items-center justify-center">
                        <button onClick={(e) => { e.stopPropagation(); setRotation((prev) => prev + 90); }} className="text-white hover:text-[#fc6604] transition-colors transform hover:scale-110" aria-label="Rotate Image">
                          <RotateCw className="h-5 w-5" />
                        </button>
                        <div className="absolute bottom-full mb-3 px-3 py-1.5 bg-white text-[#fc6604] text-[10px] font-black uppercase tracking-wider rounded-lg shadow-lg shadow-black/20 opacity-0 group-hover/btn:opacity-100 transition-all scale-95 group-hover/btn:scale-100 pointer-events-none whitespace-nowrap">
                          Rotate
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
