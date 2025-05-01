import HeroSection from "@/components/Hero";
import EurekaLoader from "@/components/Loader";
import PortfolioSection from "@/components/Portfolio";
import ServicesSection from "@/components/Service";
import TestimonialsSection from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div>
    <HeroSection />
    <EurekaLoader/>
    <ServicesSection />
    <PortfolioSection />
    <TestimonialsSection />
    </div>
    </>
  );
}
