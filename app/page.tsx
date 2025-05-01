'use client';

import { useState, useEffect } from 'react';
import HeroSection from "@/components/Hero";
import EurekaLoader from "@/components/Loader";
import PortfolioSection from "@/components/Portfolio";
import ServicesSection from "@/components/Service";
import TestimonialsSection from "@/components/Testimonials";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <EurekaLoader />;
  }

  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
    </div>
  );
}
