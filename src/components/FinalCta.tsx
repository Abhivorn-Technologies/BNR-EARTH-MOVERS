"use client";

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
    <AnimatedSection id="contact" className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Clean, Premium SaaS-Style Card */}
        <div className="relative overflow-hidden rounded-[2rem] bg-white px-8 py-16 text-center sm:px-16 lg:py-20 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-200">
          
          {/* Accent Top Border */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#fc6604] via-[#ea5a02] to-[#f4d880]" />
          
          {/* Animated Ambient Glow */}
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#fc6604]/5 blur-[100px] animate-pulse" />
          <div className="absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-[#f4d880]/10 blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
          
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03]"
               style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #0f172a 1px, transparent 0)", backgroundSize: "32px 32px" }}
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
              hidden: {},
            }}
            className="relative z-10 flex flex-col items-center"
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="text-4xl sm:text-5xl lg:text-6xl"
            >
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fc6604] to-[#ea5a02]">Break Ground?</span>
            </motion.h2>
            
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="mx-auto mt-6 max-w-2xl text-lg font-medium text-slate-500 sm:text-xl leading-relaxed"
            >
              Get a free, no-obligation quote within 24 hours. Let&apos;s get
              your project moving with speed and precision.
            </motion.p>

            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="mt-10 flex flex-col w-full sm:w-auto sm:flex-row items-center justify-center gap-4"
            >
              <a
                href={SITE.phoneUrl}
                className="group relative w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#fc6604] px-8 py-4 text-sm font-black uppercase tracking-widest text-white shadow-lg shadow-[#fc6604]/20 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#fc6604]/30 hover:bg-[#ea5a02]"
              >
                <div className="absolute -inset-2 rounded-full bg-[#fc6604]/30 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call {SITE.phoneDisplay}
                </span>
              </a>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-black uppercase tracking-widest text-slate-600 transition-all hover:border-[#25D366] hover:text-[#25D366] hover:bg-slate-50 hover:-translate-y-1 hover:shadow-md"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
              <a
                href={SITE.emailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-black uppercase tracking-widest text-slate-600 transition-all hover:border-slate-400 hover:text-slate-900 hover:bg-slate-50 hover:-translate-y-1 hover:shadow-md"
              >
                <Mail className="h-4 w-4" />
                Email Us
              </a>
            </motion.div>

            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-8 border-t border-slate-100 w-full max-w-3xl"
            >
              {trustBadges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-500"
                >
                  <Icon className="h-5 w-5 text-[#fc6604]" />
                  {label}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
