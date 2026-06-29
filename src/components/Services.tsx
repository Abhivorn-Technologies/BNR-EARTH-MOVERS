"use client";

import { useState, useEffect, Suspense, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { SERVICES } from "@/lib/constants";
import Link from "next/link";

function ServicesContent() {
  const searchParams = useSearchParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Handle manual dot navigation
  const scrollTo = (index: number, manual: boolean = false) => {
    if (manual) setUserInteracted(true);
    if (scrollRef.current) {
      const container = scrollRef.current;
      // Get the width of the first card to calculate scroll position
      const cardWidth = (container.firstChild as HTMLElement)?.offsetWidth || 0;
      const gap = 24; // gap-6 is 24px
      container.scrollTo({
        left: index * (cardWidth + gap),
        behavior: "smooth"
      });
    }
  };

  const scrollBy = (direction: 1 | -1, manual: boolean = false) => {
    if (manual) setUserInteracted(true);
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = (container.firstChild as HTMLElement)?.offsetWidth || 0;
      const gap = 24;
      const moveAmount = cardWidth + gap;
      const currentScroll = container.scrollLeft;
      
      // Calculate next position based on current scroll position to avoid jumping
      const targetScroll = direction === 1 
        ? currentScroll + moveAmount 
        : currentScroll - moveAmount;

      // Handle wrapping at ends
      if (direction === 1 && currentScroll + container.clientWidth >= container.scrollWidth - 10) {
        // We hit the right end, smoothly scroll back to start
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else if (direction === -1 && currentScroll <= 0) {
        // We hit the left end, smoothly scroll to end
        container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
      } else {
        container.scrollTo({
          left: targetScroll,
          behavior: "smooth"
        });
      }
    }
  };

  // Sync scroll position with the active dot indicator
  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = (container.firstChild as HTMLElement)?.offsetWidth || 1;
      const gap = 24;
      // Use round to find the card that takes up the majority of the view
      const activeIndex = Math.round(container.scrollLeft / (cardWidth + gap));
      if (activeIndex !== currentIndex && activeIndex >= 0 && activeIndex < SERVICES.length) {
        setCurrentIndex(activeIndex);
      }
    }
  };

  // URL Parameter Navigation (runs once on mount or query change)
  useEffect(() => {
    const handleNavigation = () => {
      const serviceQuery = searchParams.get('service');
      const hash = window.location.hash.replace('#', '');
      const targetId = serviceQuery || hash;
      
      if (targetId) {
        const decodedTarget = decodeURIComponent(targetId).toLowerCase();
        const index = SERVICES.findIndex(s => 
          s.id.toLowerCase() === decodedTarget ||
          s.id.toLowerCase().replace(/-/g, ' ') === decodedTarget.replace(/-/g, ' ')
        );
        
        if (index !== -1) {
          setUserInteracted(true);
          // Wait a tiny bit for render if it's initial load
          setTimeout(() => scrollTo(index, true), 100);
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
  }, [searchParams]);

  // Auto-play effect
  useEffect(() => {
    // Pause if hovering or actively dragging/touching
    if (isInteracting || isHovered) return;
    
    const timer = setInterval(() => {
      scrollBy(1, false);
    }, 3000);
    
    return () => clearInterval(timer);
  }, [isInteracting, isHovered]);

  return (
    <AnimatedSection id="services" className="relative bg-slate-50 py-6 lg:py-8 overflow-hidden">
      {/* Invisible Anchors for Footer Navigation */}
      {SERVICES.map((service) => (
        <div key={service.id} id={service.id} className="absolute top-0" />
      ))}
      
      <div className="mx-auto w-full max-w-[100vw] relative z-10">
        
        {/* Header */}
        <div className="mb-6 text-center max-w-3xl mx-auto px-4 sm:px-6 flex flex-col items-center">
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#fc6604]/20 bg-[#fc6604]/10 px-5 py-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#fc6604] opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#fc6604]"></span>
            </span>
            <span className="text-sm sm:text-base font-black uppercase tracking-widest text-[#fc6604]">
              Our Services
            </span>
          </div>
          <h2
            className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Comprehensive <span className="text-[#fc6604]">Earthworks</span>
          </h2>
          <p className="mt-6 text-lg font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From precision rock cutting to massive land clearing, our fleet of heavy machinery and expert operators are ready for any challenge.
          </p>
        </div>

        {/* Horizontal Scroll Track Wrapper */}
        <div className="relative group w-full">
          {/* Scroll Container */}
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            onPointerDown={() => setIsInteracting(true)}
            onPointerUp={() => setIsInteracting(false)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
               setIsHovered(false);
               setIsInteracting(false);
            }}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 sm:px-6 lg:px-8 scroll-pl-4 sm:scroll-pl-6 lg:scroll-pl-8 pb-12 pt-4 hide-scrollbar cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {SERVICES.map((service, idx) => (
              <div 
                key={service.id}
                className="shrink-0 snap-start snap-always w-[85vw] sm:w-[400px] lg:w-[450px]"
                onPointerDown={() => setUserInteracted(true)} // Interacting directly with cards stops autoplay
              >
                <Link href={`/services/${service.id}`} className="block group/card relative h-[480px] lg:h-[520px] w-full flex-col overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-xl shadow-slate-200/50 border-[6px] border-white transition-all duration-500 hover:shadow-2xl hover:shadow-[#fc6604]/20 hover:border-[#fc6604] cursor-pointer isolate [transform:translateZ(0)]">
                  
                  {/* Blurred Premium Background for aspect ratio differences */}
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    priority={idx < 4}
                    draggable={false}
                    className="object-cover scale-110 blur-xl opacity-30 saturate-150 absolute z-0 transition-all duration-700 group-hover/card:opacity-10 select-none pointer-events-none text-transparent bg-transparent"
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 400px, 450px"
                  />
                  
                  {/* Complete, Un-cropped Image (Uniform Height Wrapper) */}
                  <div className="absolute inset-x-0 top-[12%] h-[250px] lg:h-[280px] z-10 pointer-events-none select-none">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      priority={idx < 4}
                      draggable={false}
                      className="object-cover transition-all duration-700 group-hover/card:scale-105 group-hover/card:opacity-30 text-transparent bg-transparent"
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 400px, 450px"
                    />
                  </div>
                  
                  {/* Gradients */}
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90 transition-opacity duration-500 group-hover/card:opacity-100" />
                  
                  {/* Content Container (Bottom Aligned) */}
                  <div className="absolute inset-x-0 bottom-0 z-30 flex flex-col justify-end p-8 sm:p-10 transition-transform duration-500 group-hover/card:-translate-y-2">
                    <h3 
                      className="mb-3 text-2xl font-black text-white sm:text-3xl transition-colors duration-300 group-hover/card:text-[#fc6604]"
                      style={{ fontFamily: "var(--font-barlow)" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base font-medium leading-relaxed text-slate-300 line-clamp-2 transition-all duration-500 group-hover/card:line-clamp-none group-hover/card:text-slate-200">
                      {service.description}
                    </p>
                    
                    {/* Hover Content (Bullet Points) */}
                    <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 group-hover/card:grid-rows-[1fr] group-hover/card:opacity-100 group-hover/card:mt-6">
                      <div className="overflow-hidden">
                        <ul className="space-y-3">
                          {service.points.slice(0, 4).map((point, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-3">
                              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#fc6604]" />
                              <span className="text-sm font-semibold leading-relaxed text-slate-200">
                                {point.q}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                </Link>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 sm:gap-8 mt-4">
            
            {/* Dots */}
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
              {SERVICES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollTo(idx, true)}
                  className={`relative h-2.5 rounded-full overflow-hidden transition-all duration-500 ease-out ${
                    currentIndex === idx ? "w-8 sm:w-10 bg-slate-200" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                >
                  {currentIndex === idx && (
                    <motion.div
                      key={`progress-${currentIndex}-${userInteracted}`}
                      className="absolute left-0 top-0 h-full rounded-full bg-[#fc6604]"
                      initial={{ width: userInteracted ? "100%" : "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: userInteracted ? 0 : 5, ease: "linear" }}
                    />
                  )}
                </button>
              ))}
            </div>

          </div>

        </div>
        
      </div>
      
      {/* Hide scrollbar styling for webkit */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
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
