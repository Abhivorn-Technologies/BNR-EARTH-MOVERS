import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import dynamic from "next/dynamic";

const VideoSection = dynamic(() => import("@/components/VideoSection").then((mod) => mod.VideoSection));
const Services = dynamic(() => import("@/components/Services").then((mod) => mod.Services));
const Process = dynamic(() => import("@/components/Process").then((mod) => mod.Process));
const WhyUs = dynamic(() => import("@/components/Process").then((mod) => mod.WhyUs));
const Testimonials = dynamic(() => import("@/components/Testimonials").then((mod) => mod.Testimonials));
const ServiceArea = dynamic(() => import("@/components/ServiceArea").then((mod) => mod.ServiceArea));
const FinalCta = dynamic(() => import("@/components/FinalCta").then((mod) => mod.FinalCta));

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <VideoSection />
      <Services />
      <Process />
      <WhyUs />
      <Testimonials />
      <ServiceArea />
      <FinalCta />
    </main>
  );
}
