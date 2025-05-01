'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const services = [
  {
    title: 'SOCIAL MEDIA MANAGEMENT',
    subtitle: 'Instagram, LinkedIn and more',
    description:
      'Amplify your social media impact through expert management services. We devise captivating strategies for heightened engagement, follower growth, and extensive reach.',
  },
  {
    title: '360° YOUTUBE MANAGEMENT',
    subtitle: 'For Brands and Influencers',
    description:
      'All-encompassing support for strategy, post-production, operations, and analytics, driving channel growth and success.',
  },
  {
    title: 'GRAPHIC DESIGNING',
    subtitle: 'Multipurpose Designing',
    description:
      'Elevate your brand with tailored multipurpose graphic design services: stunning visuals for marketing, branding, and social media.',
  },
  {
    title: 'CONTENT STRATEGY',
    subtitle: 'Content that Converts',
    description:
      'Strategically crafted content tailored to your audience that drives engagement, conversions, and loyalty.',
  },
  {
    title: 'BRAND CONSULTING',
    subtitle: 'Shaping Strong Identities',
    description:
      'Get expert advice on brand development, market positioning, and storytelling for lasting impact.',
  },
];

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Number of cards shown at once (fixed at 3)
  const visibleCards = 3;
  const totalDots = Math.ceil(services.length - visibleCards + 1);

  useEffect(() => {
    const container = containerRef.current;
    const card = container?.querySelector('.service-card');
    if (container && card) {
      const cardWidth = (card as HTMLElement).offsetWidth + 24; // including gap
      container.scrollTo({
        left: activeIndex * cardWidth,
        behavior: 'smooth',
      });
    }
  }, [activeIndex]);

  // Handle navigation buttons
  const handleNext = () => {
    if (activeIndex < totalDots - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div className="w-full py-16 bg-gradient-to-b from-white to-neutral-100 overflow-hidden">
      <h2 className="text-center text-4xl font-bold mb-12">OUR SERVICES</h2>

      <div className="relative mx-auto max-w-6xl">
        {/* Container with fixed width to show exactly 3 cards */}
        <div className="relative overflow-hidden px-4 lg:px-12">
          {/* Left overlay - stronger and wider */}
          {/* <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white via-white to-transparent z-10"></div> */}
          
          <div
            ref={containerRef}
            className="flex scroll-smooth space-x-6 no-scrollbar"
            style={{
              overflowX: 'hidden',
              padding: '0.5rem',
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card min-w-[calc(33.333%-16px)] snap-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="h-full shadow-md">
                  <CardContent className="p-6 space-y-4 h-full flex flex-col justify-center">
                    <h3 className="text-lg font-semibold uppercase tracking-wide">
                      {service.title}
                    </h3>
                    <p className="font-bold text-sm">{service.subtitle}</p>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Right overlay - stronger and wider */}
          {/* <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white via-white to-transparent z-10"></div> */}

          {/* Navigation buttons */}
          {/* <button 
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-xl transition-opacity opacity-80 hover:opacity-100 disabled:opacity-30"
            disabled={activeIndex === 0}
          >
            ←
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-xl transition-opacity opacity-80 hover:opacity-100 disabled:opacity-30"
            disabled={activeIndex === totalDots - 1}
          >
            →
          </button> */}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 gap-2">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                'w-3 h-3 rounded-full border border-black transition-all',
                activeIndex === index ? 'bg-black scale-110' : 'bg-transparent'
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}