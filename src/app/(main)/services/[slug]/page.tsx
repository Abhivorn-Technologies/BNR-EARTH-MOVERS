import { SERVICES } from "@/lib/constants";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ServiceAccordion } from "@/components/ServiceAccordion";

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
    <main className="min-h-screen bg-slate-900 selection:bg-accent selection:text-white pb-24">
      {/* 1. Stunning Dark Hero Section */}
      <section className="relative flex flex-col justify-center overflow-hidden bg-slate-950 pt-32 pb-28 text-center">
        {/* Background Grid & Glow */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(#fc6604 1px, transparent 1px), linear-gradient(90deg, #fc6604 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#fc6604]/20 blur-[150px] pointer-events-none" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-accent/40 bg-accent/10 px-5 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(252,102,4,0.15)]">
            <span className="text-sm sm:text-base font-black uppercase tracking-widest text-accent">
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
        <div className="absolute -bottom-1 left-0 right-0 h-16 bg-slate-900" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
      </section>

      {/* 2. Main Content Section */}
      <section className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="bg-[#141414] p-6 sm:p-10 lg:p-12 rounded-[2.5rem] shadow-2xl shadow-black/50 border border-white/5">
          
          {/* Breadcrumb Back Button */}
          <Link 
            href="/#services" 
            className="group inline-flex items-center gap-2 text-slate-400 hover:text-accent font-semibold mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            Back to Services
          </Link>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            
            {/* LEFT SIDE: Image */}
            <div className="relative w-full h-full">
              <div className="lg:sticky lg:top-32">
                <div className="group overflow-hidden rounded-3xl shadow-2xl border border-white/10 bg-black flex items-center justify-center relative aspect-video lg:aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl" style={{ fontFamily: "var(--font-barlow)" }}>
              Specialized {service.title} Solutions.
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-[#fc6604]" />
            <p className="mt-6 text-lg font-medium leading-relaxed text-slate-300">
              {service.description}
            </p>

            <ServiceAccordion points={service.points} serviceTitle={service.title} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
