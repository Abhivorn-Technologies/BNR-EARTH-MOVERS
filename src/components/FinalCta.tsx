"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Shield, BadgeCheck, Wallet } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { SITE } from "@/lib/constants";

const trustBadges = [
  { icon: Wallet, label: "Free Quote" },
  { icon: BadgeCheck, label: "No Hidden Costs" },
  { icon: Shield, label: "Licensed & Insured" },
];

export function FinalCta() {
  return (
    <AnimatedSection id="contact" className="relative bg-white border-t border-slate-200">
      <div className="flex items-center justify-center pt-16 pb-32 lg:py-24 relative overflow-hidden">
        
        {/* Massive Background Watermark */}
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[8rem] sm:text-[14rem] lg:text-[28rem] font-black tracking-tighter text-slate-50 opacity-80 pointer-events-none" 
          style={{ fontFamily: "var(--font-barlow)", lineHeight: 1 }}
        >
          BNR
        </div>
        
        {/* Soft Sunlight Ambient Glows */}
        <div className="absolute -left-32 -top-32 h-[40rem] w-[40rem] rounded-full bg-[#fc6604]/5 blur-[120px] animate-pulse" />
        <div className="absolute -right-32 -bottom-32 h-[40rem] w-[40rem] rounded-full bg-[#f4d880]/10 blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        
        {/* Clean Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]"
             style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #0f172a 1px, transparent 0)", backgroundSize: "48px 48px" }}
        />

        {/* Professional max-w-7xl Container Structure */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            
            {/* Left Content Area */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } },
                hidden: {},
              }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left w-full"
            >
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className="text-sm font-bold uppercase tracking-widest text-[#fc6604] mb-3"
              >
                Get a Quote
              </motion.p>
              
              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fc6604] to-[#ea5a02]">Break Ground?</span>
              </motion.h2>
              
              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className="mt-6 max-w-xl text-lg font-medium text-slate-500 leading-relaxed"
              >
                Get a free, no-obligation quote within 24 hours. Let&apos;s get
                your project moving with speed and precision.
              </motion.p>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className="mt-10 flex flex-col w-full sm:w-auto sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <a
                  href={SITE.phoneUrl}
                  className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-black uppercase tracking-widest text-slate-700 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#fc6604]/20 hover:border-[#fc6604] hover:bg-[#fc6604] hover:text-white"
                >
                  <Phone className="h-4 w-4 transition-transform group-hover:scale-110" />
                  Call Now
                </a>
                <a
                  href={SITE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-black uppercase tracking-widest text-slate-700 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#25D366]/20 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 transition-transform group-hover:scale-110" />
                  WhatsApp Us
                </a>
                <a
                  href={SITE.emailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-black uppercase tracking-widest text-slate-700 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/20 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                >
                  <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
                  Email Us
                </a>
              </motion.div>

              {/* Compact Floating Trust Pills */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full"
              >
                {trustBadges.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm"
                  >
                    <Icon className="h-4 w-4 text-[#fc6604]" />
                    <p className="text-sm font-bold text-slate-700">{label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Image Area */}
            <div className="w-full flex items-center justify-center lg:justify-end">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full max-w-lg aspect-square lg:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(252,102,4,0.2)] border-4 border-white"
              >
                <Image 
                  src="/services/Concrete Breaking.png" 
                  alt="Concrete Breaking Machinery" 
                  fill 
                  className="object-cover object-[15%_center] transition-transform duration-1000 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Soft inner glow to make it feel premium */}
                <div className="absolute inset-0 rounded-[3rem] shadow-[inset_0_0_80px_rgba(0,0,0,0.1)] pointer-events-none" />
              </motion.div>
            </div>
            
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
