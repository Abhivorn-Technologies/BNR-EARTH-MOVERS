import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { VideoSection } from "@/components/VideoSection";
import { Services } from "@/components/Services";
import { Process, WhyUs } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { ServiceArea } from "@/components/ServiceArea";
import { FinalCta } from "@/components/FinalCta";

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
