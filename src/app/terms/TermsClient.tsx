"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, HardHat, Truck, AlertTriangle, CreditCard, ArrowRight, PhoneCall, Mail } from "lucide-react";
import Link from "next/link";
import { SITE } from "@/lib/constants";

const SECTIONS = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    icon: FileText,
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-4 text-lg">
          Please read these terms carefully before using {SITE.name}. By accessing or using our earthworks, excavation, and machinery services, you agree to be bound by these terms.
        </p>
        <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
          <p className="text-orange-900 font-medium">
            Our motto is to shape the future from the ground up. To maintain our high standards of service, safety, and operational excellence, all clients must adhere strictly to these operational guidelines.
          </p>
        </div>
      </>
    )
  },
  {
    id: "description-of-services",
    title: "Description of Services",
    icon: Truck,
    content: (
      <div className="grid md:grid-cols-2 gap-8 mt-4">
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
          <h4 className="font-bold text-slate-900 mb-4 text-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#fc6604]" />
            Core Earthworks
          </h4>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            We provide professional, heavy-duty earthworks services including:
          </p>
          <ul className="list-none space-y-3 text-slate-600 text-sm">
            <li className="flex items-start">
              <ArrowRight className="h-4 w-4 text-[#fc6604] mr-2 mt-0.5 shrink-0" />
              Site preparation and leveling
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-4 w-4 text-[#fc6604] mr-2 mt-0.5 shrink-0" />
              Mass soil and rock excavations
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-4 w-4 text-[#fc6604] mr-2 mt-0.5 shrink-0" />
              Controlled concrete breaking
            </li>
          </ul>
        </div>
        
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
          <h4 className="font-bold text-slate-900 mb-4 text-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-400" />
            Equipment Hire
          </h4>
          <p className="text-slate-600 leading-relaxed text-sm">
            We offer heavy machinery for hire (excavators, loaders, dump trucks) with certified operators. Machinery is strictly operated under the supervision of our trained personnel to ensure maximum efficiency and safety.
          </p>
        </div>
      </div>
    )
  },
  {
    id: "safety-compliance",
    title: "Safety & Site Compliance",
    icon: HardHat,
    content: (
      <>
        <p className="text-slate-600 leading-relaxed text-lg mb-6">
          Safety is our absolute highest priority. All operations conducted by {SITE.name} strictly adhere to national safety regulations and heavy machinery operating protocols.
        </p>
        <div className="flex items-start gap-4 bg-slate-900 text-white p-6 rounded-2xl">
          <HardHat className="h-8 w-8 text-[#fc6604] shrink-0" />
          <div>
            <h4 className="font-bold text-lg mb-2">Client Responsibilities</h4>
            <p className="text-slate-400">
              Clients must ensure the site is free from unmapped underground utilities (gas, water, electric) prior to excavation. <strong>{SITE.name} is not liable for damages to unmarked underground infrastructure.</strong>
            </p>
          </div>
        </div>
      </>
    )
  },
  {
    id: "liability",
    title: "Equipment & Liability",
    icon: AlertTriangle,
    content: (
      <p className="text-slate-600 leading-relaxed text-lg">
        While we maintain our fleet to the highest industry standards, {SITE.name} shall not be held liable for project delays caused by severe weather conditions, unforeseen geological anomalies (e.g., hidden bedrock), or force majeure. We guarantee the quality of our earthworks but clients are responsible for securing necessary municipal digging permits.
      </p>
    )
  },
  {
    id: "payment-terms",
    title: "Payment Terms",
    icon: CreditCard,
    content: (
      <div className="bg-white p-8 rounded-2xl border border-slate-200 mt-2 relative overflow-hidden shadow-xl shadow-slate-200/50">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#fc6604] to-[#ea5a02]" />
        <p className="text-slate-900 font-medium mb-6 text-lg">
          Clear and transparent billing for all earthworks and machinery contracts.
        </p>
        <div className="text-slate-600 space-y-4">
          <p className="leading-relaxed">
            Payment structures will be outlined clearly in your custom quote. We require an initial mobilization deposit before machinery is dispatched to the site. Final balance is due upon project completion or at agreed-upon milestones for long-term excavations.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 pt-6 border-t border-slate-100">
            <a href={SITE.phoneUrl} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#fc6604] text-white font-bold rounded-xl hover:bg-[#ea5a02] transition-all shadow-lg shadow-[#fc6604]/20 hover:-translate-y-1">
              <PhoneCall className="h-4 w-4" />
              Call Billing
            </a>
            <a href={SITE.emailUrl} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-xl border-2 border-slate-200 hover:border-slate-400 hover:bg-slate-50 transition-all hover:-translate-y-1">
              <Mail className="h-4 w-4 text-slate-400" />
              Email for Quote
            </a>
          </div>
        </div>
      </div>
    )
  }
];

export function TermsClient() {
  const [activeSection, setActiveSection] = useState<string>("acceptance");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Brand Hero Section */}
      <section className="bg-slate-950 pt-40 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex flex-col items-center text-center">
        {/* Subtle grid and glow */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#fc6604] rounded-full blur-[150px] opacity-10 pointer-events-none" />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#fc6604] mb-8"
          >
            <FileText className="h-4 w-4" />
            <span className="text-xs font-bold tracking-widest uppercase">Legal Document</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Terms of Service
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-slate-400 leading-relaxed mb-8"
          >
            Clear guidelines ensuring smooth operations. By accessing or using our heavy machinery and earthworks services, you agree to be bound by these terms.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm text-slate-500 font-medium tracking-wide uppercase"
          >
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
          </motion.p>
        </div>
      </section>

      {/* 2-Column Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Sticky Sidebar (TOC) */}
          <div className="w-full lg:w-1/3">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="sticky top-32"
            >
              <h3 className="text-lg font-black uppercase tracking-widest text-slate-900 mb-6" style={{ fontFamily: "var(--font-barlow)" }}>
                Table of Contents
              </h3>
              <div className="w-12 h-1 bg-[#fc6604] mb-8" />
              
              <ul className="space-y-4 border-l-2 border-slate-100 pl-4">
                {SECTIONS.map((section, index) => {
                  const isActive = activeSection === section.id;
                  return (
                    <li key={section.id}>
                      <Link 
                        href={`#${section.id}`} 
                        className={`group flex items-center font-medium transition-colors text-sm ${
                          isActive ? "text-[#fc6604]" : "text-slate-500 hover:text-slate-800"
                        }`}
                      >
                        <span className={`w-6 transition-colors ${
                          isActive ? "text-[#fc6604]" : "text-slate-300 group-hover:text-slate-400"
                        }`}>
                          0{index + 1}
                        </span>
                        {section.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </div>

          {/* Content Area */}
          <div className="w-full lg:w-2/3">
            <div className="space-y-12">
              {SECTIONS.map((section, index) => {
                const Icon = section.icon;
                return (
                  <motion.div 
                    key={section.id} 
                    id={section.id} 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                    }}
                    className="scroll-mt-32"
                  >
                    <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden">
                      {/* Top Accent Line (Static) */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100" />
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
                        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-orange-50 text-[#fc6604] flex items-center justify-center">
                          <Icon className="h-8 w-8" />
                        </div>
                        <div>
                          <span className="text-[#fc6604] font-black text-sm tracking-widest uppercase mb-1 block" style={{ fontFamily: "var(--font-barlow)" }}>
                            Section 0{index + 1}
                          </span>
                          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight" style={{ fontFamily: "var(--font-barlow)" }}>
                            {section.title}
                          </h2>
                        </div>
                      </div>
                      
                      <div className="prose prose-slate prose-lg max-w-none text-slate-600">
                        {section.content}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}
