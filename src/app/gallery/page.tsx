"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_VIDEOS } from "@/lib/constants";
import { ChevronDown, Play as PlayIcon, X as XIcon, Pause as PauseIcon, Volume2, VolumeX, Maximize, Minimize } from "lucide-react";
import Image from "next/image";

const CATEGORIES = ["All", "Services", "Projects", "Machinery"];

function CustomVideoPlayer({ src, onClose }: { src: string, onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullScreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen().catch(err => {
          console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      setProgress((current / total) * 100 || 0);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const newTime = Number(e.target.value);
    if (videoRef.current) {
      const timeToSeek = (newTime / 100) * videoRef.current.duration;
      videoRef.current.currentTime = timeToSeek;
      setProgress(newTime);
    }
  };

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-full bg-black group flex items-center justify-center"
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        className="h-full w-full object-contain"
        autoPlay
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Top Right Close Button (Appears on Hover) */}
      <button 
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-4 right-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-[#fc6604] transition-colors opacity-0 group-hover:opacity-100 backdrop-blur-sm"
        aria-label="Close Video"
      >
        <XIcon className="h-5 w-5" />
      </button>

      {/* Custom Control Bar (Appears on Hover) */}
      <div 
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pt-16 pb-4 px-4 sm:px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Progress Bar (YouTube Style) */}
        <div className="w-full h-1.5 bg-white/30 mb-4 cursor-pointer relative group/slider">
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={progress}
            onChange={handleSeek}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          />
          <div 
            className="h-full bg-red-600 relative"
            style={{ width: `${progress}%` }}
          >
            {/* Thumb */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-red-600 rounded-full scale-0 group-hover/slider:scale-100 transition-transform" />
          </div>
        </div>

        {/* Controls Row */}
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="group/btn relative flex items-center justify-center">
              <button onClick={togglePlay} className="hover:text-[#fc6604] transition-colors transform hover:scale-110" aria-label="Play/Pause">
                {isPlaying ? <PauseIcon className="h-5 w-5" fill="currentColor" /> : <PlayIcon className="h-5 w-5" fill="currentColor" />}
              </button>
              <div className="absolute bottom-full mb-3 px-3 py-1.5 bg-white text-[#fc6604] text-[10px] font-black uppercase tracking-wider rounded-lg shadow-lg shadow-black/20 opacity-0 group-hover/btn:opacity-100 transition-all scale-95 group-hover/btn:scale-100 pointer-events-none whitespace-nowrap">
                {isPlaying ? "Pause" : "Play"}
              </div>
            </div>

            <div className="group/btn relative flex items-center justify-center">
              <button onClick={toggleMute} className="hover:text-[#fc6604] transition-colors transform hover:scale-110" aria-label="Mute/Unmute">
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>
              <div className="absolute bottom-full mb-3 px-3 py-1.5 bg-white text-[#fc6604] text-[10px] font-black uppercase tracking-wider rounded-lg shadow-lg shadow-black/20 opacity-0 group-hover/btn:opacity-100 transition-all scale-95 group-hover/btn:scale-100 pointer-events-none whitespace-nowrap">
                {isMuted ? "Unmute" : "Mute"}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="group/btn relative hidden sm:flex items-center justify-center">
              <button onClick={toggleFullScreen} className="hover:text-[#fc6604] transition-colors transform hover:scale-110" aria-label="Full Screen">
                <Maximize className="h-4 w-4" />
              </button>
              <div className="absolute bottom-full mb-3 px-3 py-1.5 bg-white text-[#fc6604] text-[10px] font-black uppercase tracking-wider rounded-lg shadow-lg shadow-black/20 opacity-0 group-hover/btn:opacity-100 transition-all scale-95 group-hover/btn:scale-100 pointer-events-none whitespace-nowrap">
                Full Screen
              </div>
            </div>

            <div className="group/btn relative flex items-center justify-center">
              <button onClick={(e) => { e.stopPropagation(); onClose(); }} className="hover:text-[#fc6604] transition-colors transform hover:scale-110" aria-label="Minimize/Close">
                <Minimize className="h-5 w-5" />
              </button>
              <div className="absolute bottom-full mb-3 px-3 py-1.5 bg-white text-[#fc6604] text-[10px] font-black uppercase tracking-wider rounded-lg shadow-lg shadow-black/20 opacity-0 group-hover/btn:opacity-100 transition-all scale-95 group-hover/btn:scale-100 pointer-events-none whitespace-nowrap">
                Minimize
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [expandedVideo, setExpandedVideo] = useState<{src: string, title: string, category: string} | null>(null);

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
      <section className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-16">
        <motion.div 
          layout
          className="flex flex-wrap justify-center gap-5 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {GALLERY_VIDEOS.map((item) => (
              <motion.div
                key={item.src}
                layoutId={`video-container-${item.src}`}
                onClick={() => setExpandedVideo(item)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative h-80 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)] overflow-hidden rounded-[2rem] bg-slate-900 shadow-md shadow-slate-200/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20 hover:ring-2 hover:ring-accent/50 cursor-pointer"
              >
                {/* Background Video */}
                <video
                  src={item.src}
                  className="object-cover h-full w-full opacity-90 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-100"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
                
                {/* Hover Icon (Center) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-50 rounded-full bg-white/10 p-4 opacity-0 shadow-xl ring-1 ring-white/20 backdrop-blur-md transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 z-20">
                   <PlayIcon className="h-6 w-6 text-white" fill="white" />
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
        
        {GALLERY_VIDEOS.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-slate-500">No videos found.</p>
          </div>
        )}
      </section>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {expandedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedVideo(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8"
          >
            <motion.div
              layoutId={`video-container-${expandedVideo.src}`}
              className="relative w-full overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/20 aspect-video"
              style={{ maxWidth: '60vw' }}
              onClick={(e) => e.stopPropagation()}
            >
              <CustomVideoPlayer src={expandedVideo.src} onClose={() => setExpandedVideo(null)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
