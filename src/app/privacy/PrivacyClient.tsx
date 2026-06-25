"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Database, Lock, UserCheck, PhoneCall, ArrowRight, Shield, MapPin, Mail } from "lucide-react";
import Link from "next/link";
import { SITE } from "@/lib/constants";

const SECTIONS = [
  {
    id: "introduction",
    title: "Introduction",
    icon: Shield,
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-4 text-lg">
          {SITE.name} operates a comprehensive earthworks and machinery management service. This Privacy Policy explains exactly how we collect, use, disclose, and safeguard your information when you use our website and services.
        </p>
        <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
          <p className="text-orange-900 font-medium">
            By accessing or using {SITE.name}, you agree to this Privacy Policy. If you do not agree with the terms of this policy, please do not access our services.
          </p>
        </div>
      </>
    )
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    icon: Database,
    content: (
      <div className="grid md:grid-cols-2 gap-8 mt-4">
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
          <h4 className="font-bold text-slate-900 mb-4 text-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#fc6604]" />
            Personal Information
          </h4>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            We may collect information that you voluntarily provide to us, including:
          </p>
          <ul className="list-none space-y-3 text-slate-600 text-sm">
            <li className="flex items-start">
              <ArrowRight className="h-4 w-4 text-[#fc6604] mr-2 mt-0.5 shrink-0" />
              Name, email address, phone number, and site address
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-4 w-4 text-[#fc6604] mr-2 mt-0.5 shrink-0" />
              Project timelines and earthworks requirements
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-4 w-4 text-[#fc6604] mr-2 mt-0.5 shrink-0" />
              Payment and billing information
            </li>
          </ul>
        </div>
        
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
          <h4 className="font-bold text-slate-900 mb-4 text-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-400" />
            Automatic Data
          </h4>
          <p className="text-slate-600 leading-relaxed text-sm">
            We automatically collect certain information when you visit our website, such as your IP address, browser type, and usage patterns. This helps us optimize our website to serve you better.
          </p>
        </div>
      </div>
    )
  },
  {
    id: "data-protection",
    title: "Data Protection",
    icon: Lock,
    content: (
      <>
        <p className="text-slate-600 leading-relaxed text-lg mb-6">
          Your data is stored securely and is only accessible by authorized personnel. We implement robust, industry-standard security measures to protect your personal information from unauthorized access.
        </p>
        <div className="flex items-start gap-4 bg-slate-900 text-white p-6 rounded-2xl">
          <ShieldCheck className="h-8 w-8 text-[#fc6604] shrink-0" />
          <div>
            <h4 className="font-bold text-lg mb-2">Strict No-Sale Policy</h4>
            <p className="text-slate-400">
              <strong>We do not sell or trade your data.</strong> We only share necessary information with trusted, vetted subcontractors strictly involved in executing your specific project.
            </p>
          </div>
        </div>
      </>
    )
  },
  {
    id: "your-rights",
    title: "Your Rights",
    icon: UserCheck,
    content: (
      <p className="text-slate-600 leading-relaxed text-lg">
        You maintain full control over your personal data. You have the absolute right to request access to the information we hold about you at any time. If you believe any information is inaccurate, or if you wish to have your data completely removed from our systems, you may request an immediate update or deletion without any hassle.
      </p>
    )
  },
  {
    id: "contact-us",
    title: "Contact Us",
    icon: PhoneCall,
    content: (
      <div className="mt-4 border-t border-slate-100 pt-8">
        <p className="text-slate-600 leading-relaxed text-lg mb-8">
          If you have any questions or concerns regarding this Privacy Policy, or if you wish to exercise your data rights, our dedicated privacy team is always available to assist you.
        </p>
        
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <p className="font-black text-2xl text-slate-900 uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-barlow)" }}>
              {SITE.name}
            </p>
            <div className="flex items-center gap-3 text-slate-600">
              <MapPin className="h-5 w-5 text-[#fc6604]" />
              <p className="text-base">{SITE.address}</p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 mt-2 lg:mt-0">
            <a 
              href={SITE.phoneUrl} 
              className="flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 bg-[#fc6604] text-white font-black text-sm uppercase tracking-widest rounded-xl shadow-lg shadow-[#fc6604]/20 hover:-translate-y-1 transition-all"
            >
              <PhoneCall className="h-4 w-4" />
              Call Now
            </a>
            <a 
              href={SITE.emailUrl} 
              className="flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-black text-sm uppercase tracking-widest rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-1 transition-all"
            >
              <Mail className="h-4 w-4 text-slate-400" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    )
  }
];

export function PrivacyClient() {
  const [activeSection, setActiveSection] = useState<string>("introduction");

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
            <ShieldCheck className="h-4 w-4" />
            <span className="text-xs font-bold tracking-widest uppercase">Legal Document</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Privacy Policy
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-slate-400 leading-relaxed mb-8"
          >
            We value your trust. This policy outlines exactly how we handle and protect your data when you partner with {SITE.name}.
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
