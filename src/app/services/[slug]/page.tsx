import { SERVICES } from "@/lib/constants";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.id,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const decodedSlug = decodeURIComponent(resolvedParams.slug).toLowerCase();
  
  // Allow matching whether the URL uses hyphens (tractor-jack-hammer) or spaces (tractor jack hammer)
  const service = SERVICES.find((s) => 
    s.id.toLowerCase() === decodedSlug || 
    s.id.toLowerCase().replace(/-/g, " ") === decodedSlug.replace(/-/g, " ")
  );

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-accent selection:text-white pb-24">
      {/* 1. Stunning Dark Hero Section */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-slate-950 pt-32 pb-20 text-center">
        {/* Background Grid & Glow */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(#fc6604 1px, transparent 1px), linear-gradient(90deg, #fc6604 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#fc6604]/20 blur-[150px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col items-center mt-10">
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-accent/40 bg-accent/10 px-5 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(252,102,4,0.15)]">
            <span className="text-xs font-black uppercase tracking-widest text-accent">
              Our Services
            </span>
          </div>

          <h1 
            className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            {service.title}
          </h1>
        </div>
        
        {/* Slanted Bottom Divider */}
        <div className="absolute -bottom-1 left-0 right-0 h-16 bg-slate-50" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
      </section>

      {/* 2. Main Content Section */}
      <section className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start bg-white p-6 sm:p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 ring-1 ring-slate-100">
          
          {/* LEFT SIDE: Image */}
          <div className="relative">
            <div className="group relative h-full min-h-[400px] w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-100 bg-slate-100">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* RIGHT SIDE: Content */}
          <div className="flex flex-col justify-center py-4">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl" style={{ fontFamily: "var(--font-barlow)" }}>
              Specialized {service.title} Solutions.
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-[#fc6604]" />
            <p className="mt-6 text-lg font-medium leading-relaxed text-slate-600">
              {service.description}
            </p>

            <ul className="mt-8 space-y-4">
              {service.points.map((item, i) => (
                <li
                  key={i}
                  className="group flex items-start gap-4 rounded-xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-100 transition-all hover:-translate-y-1 hover:shadow-md hover:ring-[#fc6604]/20"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#fc6604] shadow-sm transition-colors duration-300 group-hover:bg-[#fc6604] group-hover:text-white mt-1">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <span className="text-base font-semibold text-slate-700 leading-relaxed transition-colors group-hover:text-slate-900">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#fc6604] to-[#ea5a02] px-8 py-4 text-sm font-black uppercase tracking-widest text-white shadow-lg shadow-[#fc6604]/30 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#fc6604]/40"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-8 py-4 text-sm font-black uppercase tracking-widest text-slate-900 shadow-sm transition-all hover:-translate-y-1 hover:bg-slate-200"
              >
                View Gallery
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
