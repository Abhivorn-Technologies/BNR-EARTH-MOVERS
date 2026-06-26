import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      <div className="space-y-6">
        <h1 className="text-8xl font-black text-slate-900 tracking-tighter" style={{ fontFamily: "var(--font-barlow)" }}>
          404
        </h1>
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight" style={{ fontFamily: "var(--font-barlow)" }}>
          Page Not Found
        </h2>
        <p className="mx-auto max-w-[500px] text-lg text-slate-600">
          The page you are looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="pt-8">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#fc6604] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-xl shadow-[#fc6604]/20 transition-all hover:-translate-y-1 hover:bg-[#ea5a02] hover:shadow-[#fc6604]/40"
          >
            Return to Home
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </main>
  );
}
