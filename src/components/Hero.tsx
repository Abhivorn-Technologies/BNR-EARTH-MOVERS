"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Phone, MessageCircle, Star } from "lucide-react";
import { SITE } from "@/lib/constants";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-[90vh] pt-24 pb-20 sm:pt-32 sm:pb-32 flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Video Placeholder */}
      <video
        src="/gallery/videos/video.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Gradient overlay for much better text readability and premium look */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-slate-900/90" />

      <motion.div 
        style={{ y, opacity }} 
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center px-4 py-12 text-center sm:px-6 lg:px-8 -mt-8"
      >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/40 bg-black/40 px-5 py-2 text-sm sm:text-base font-black uppercase tracking-wider text-white backdrop-blur-md shadow-2xl"
          >
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-accent" />
            {SITE.availability}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-black uppercase leading-tight tracking-tight text-white drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-[4.5rem]"
            style={{ fontFamily: "var(--font-barlow)", textShadow: "0 4px 30px rgba(0,0,0,0.6)" }}
          >
            Specialized <span className="text-accent">Rock Cutting</span><br className="hidden lg:block" /> & Earthworks
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 sm:mt-10 max-w-3xl text-lg font-medium leading-relaxed text-white/90 drop-shadow-xl sm:text-xl md:text-2xl"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,1)" }}
          >
            Precise, vibration-free rock breaking, controlled blasting, and heavy-duty excavation. Built for complex sites and strict safety requirements.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6"
          >
            <a
              href={SITE.phoneUrl}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#fc6604] to-[#ea5a02] px-8 py-4 text-sm font-black uppercase tracking-widest text-white shadow-[0_0_40px_rgba(252,102,4,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(252,102,4,0.5)]"
            >
              {/* Premium Sweeping Shine Effect */}
              <motion.div 
                className="absolute inset-0 z-0 w-[50%] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                animate={{ x: ['-200%', '300%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
              />
              <div className="relative z-10 flex items-center gap-3">
                <Phone className="h-5 w-5" />
                Call Now
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-black uppercase tracking-widest text-white backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white hover:text-[#0B1120] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
          </motion.div>
      </motion.div>

    </section>
  );
}
