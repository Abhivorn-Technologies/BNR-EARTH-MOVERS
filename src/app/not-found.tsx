import Link from "next/link";
import { TriangleAlert, Home as HomeIcon } from "lucide-react";
import { Logo } from "@/components/Logo";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 bg-gradient-to-br from-amber-50 via-orange-50/30 to-orange-100/50 pt-20 pb-12">
      <div className="w-full max-w-lg rounded-[2.5rem] bg-white p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] ring-1 ring-slate-100 flex flex-col items-center text-center relative overflow-hidden">
        
        {/* Logo */}
        <Link href="/" className="transform scale-110 block hover:opacity-90 transition-opacity mb-2">
          <Logo variant="default" centered={true} />
        </Link>

        {/* 404 Text with Icon */}
        <div className="flex items-center justify-center gap-1 text-[#ea5a02] font-black text-5xl sm:text-6xl mt-2 mb-2 tracking-tighter" style={{ fontFamily: "var(--font-barlow)" }}>
          <span>4</span>
          <TriangleAlert className="w-10 h-10 sm:w-12 sm:h-12 stroke-[2.5] relative -top-0.5" />
          <span>4</span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2" style={{ fontFamily: "var(--font-barlow)" }}>
          Page Not Found
        </h2>

        {/* Description text */}
        <p className="text-[15px] sm:text-base text-slate-500 leading-relaxed mb-6 max-w-[320px] mx-auto font-medium">
          We couldn't find the page you were looking for. Please check the URL or return to the homepage.
        </p>

        {/* Return Button */}
        <Link
          href="/"
          className="w-full flex items-center justify-center gap-2.5 rounded-xl bg-[#ea5a02] px-6 py-4 text-[15px] font-bold text-white shadow-lg shadow-[#ea5a02]/20 transition-all hover:-translate-y-0.5 hover:bg-[#fc6604] hover:shadow-[#fc6604]/30 active:scale-[0.98]"
        >
          <HomeIcon className="h-5 w-5 stroke-[2.5]" />
          Return to Homepage
        </Link>
      </div>
    </main>
  );
}
