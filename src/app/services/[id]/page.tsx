import { SERVICES } from "@/lib/constants";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { FinalCta } from "@/components/FinalCta";

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    id: service.id,
  }));
}

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const service = SERVICES.find((s) => s.id === params.id);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-0 selection:bg-accent selection:text-white">
      {/* Hero Section */}
      <section className="relative flex h-[50vh] min-h-[400px] w-full flex-col items-center justify-center overflow-hidden bg-slate-900">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          className="object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Link 
            href="/#about" 
            className="group mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Services
          </Link>
          <h1 
            className="mb-6 text-4xl font-black text-white sm:text-5xl lg:text-6xl drop-shadow-lg"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            {service.title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-slate-200 sm:text-xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative z-20 mx-auto -mt-16 mb-24 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-white p-8 shadow-2xl shadow-slate-200/50 sm:p-12 border border-slate-100">
          <h2 
            className="mb-8 text-3xl font-black text-slate-900 sm:text-4xl"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Service Details
          </h2>
          
          <ul className="grid gap-6 sm:grid-cols-2">
            {service.points.map((point, idx) => (
              <li 
                key={idx} 
                className="flex items-start gap-4 rounded-2xl bg-slate-50 p-5 transition-colors hover:bg-slate-100"
              >
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-accent" />
                <span className="text-base font-semibold leading-relaxed text-slate-700">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <FinalCta />
    </main>
  );
}
