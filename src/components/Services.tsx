"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { SERVICES } from "@/lib/constants";

function ServicesContent() {
  const searchParams = useSearchParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 800 : -800,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 800 : -800,
      opacity: 0,
      scale: 0.98,
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + SERVICES.length) % SERVICES.length);
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  useEffect(() => {
    const handleNavigation = () => {
      // 1. Read from query params via Next.js router
      const serviceQuery = searchParams.get('service');
      
      // 2. Or fallback to hash if someone typed /#rock-excavation directly
      const hash = window.location.hash.replace('#', '');
      
      const targetId = serviceQuery || hash;
      
      if (targetId) {
        const decodedTarget = decodeURIComponent(targetId).toLowerCase();
        const index = SERVICES.findIndex(s => 
          s.id.toLowerCase() === decodedTarget ||
          s.id.toLowerCase().replace(/-/g, ' ') === decodedTarget.replace(/-/g, ' ')
        );
        
        if (index !== -1 && index !== currentIndex) {
          setDirection(index > currentIndex ? 1 : -1);
          setCurrentIndex(index);
        }
      }
    };

    handleNavigation();

    window.addEventListener('hashchange', handleNavigation);
    window.addEventListener('popstate', handleNavigation);
    
    return () => {
      window.removeEventListener('hashchange', handleNavigation);
      window.removeEventListener('popstate', handleNavigation);
    };
  }, [currentIndex, searchParams]);

  return (
    <AnimatedSection id="services" className="relative bg-slate-50 py-16 lg:py-20 overflow-hidden">
      {/* Invisible Anchors for Footer Navigation */}
      {SERVICES.map((service) => (
        <div key={service.id} id={service.id} className="absolute top-0" />
      ))}
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-sm font-black uppercase tracking-widest text-[#fc6604]">
            Our Services
          </p>
          <h2
            className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fc6604] to-[#f4d880]">Earthworks</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative mx-auto w-full rounded-[2.5rem] bg-white shadow-2xl shadow-slate-200/50 ring-1 ring-slate-100 lg:h-[520px] mb-24">
          
          <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[2.5rem] lg:flex-row">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="flex h-full w-full flex-col lg:absolute lg:flex-row cursor-grab active:cursor-grabbing"
              >
                
                {/* Left Side: Image */}
                <div className="relative h-64 w-full lg:h-full lg:absolute lg:w-[45%] shrink-0">
                  <Image
                    src={SERVICES[currentIndex].image}
                    alt={SERVICES[currentIndex].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fc6604] text-white shadow-lg shadow-[#fc6604]/20 mb-4">
                      <span className="text-xl font-black" style={{ fontFamily: "var(--font-barlow)" }}>
                        0{currentIndex + 1}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Content */}
                <div className="flex h-full w-full flex-col justify-center p-8 lg:ml-[45%] lg:w-[55%] lg:px-12">
                  <h3 
                    className="text-3xl font-black text-slate-900 sm:text-4xl" 
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    {SERVICES[currentIndex].title}
                  </h3>
                  <p className="mt-4 text-lg font-medium leading-relaxed text-slate-600">
                    {SERVICES[currentIndex].description}
                  </p>
                  
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {SERVICES[currentIndex].points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 rounded-xl bg-slate-50 p-3 transition-colors hover:bg-[#fc6604]/5">
                        <div className="mt-0.5 shrink-0 text-[#fc6604]">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <span className="text-sm font-semibold leading-relaxed text-slate-700">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="absolute -bottom-20 left-1/2 flex -translate-x-1/2 items-center gap-6 z-30">
            <button
              onClick={() => paginate(-1)}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-slate-100 transition-all duration-300 hover:text-[#fc6604] hover:shadow-[0_8px_30px_rgba(252,102,4,0.2)] hover:-translate-y-1 active:scale-95"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex items-center gap-3">
              {SERVICES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-500 ease-out ${
                    currentIndex === idx ? "w-8 bg-[#fc6604]" : "w-2.5 bg-slate-200 hover:bg-slate-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => paginate(1)}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-slate-100 transition-all duration-300 hover:text-[#fc6604] hover:shadow-[0_8px_30px_rgba(252,102,4,0.2)] hover:-translate-y-1 active:scale-95"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

        </div>
        
      </div>
    </AnimatedSection>
  );
}

export function Services() {
  return (
    <Suspense fallback={<div className="min-h-[800px] w-full bg-slate-50" />}>
      <ServicesContent />
    </Suspense>
  );
}
