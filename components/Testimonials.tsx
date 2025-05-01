'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { QuoteIcon } from 'lucide-react';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Parikh Jain',
    position: 'Creator and Founder',
    avatar: '/testimonials/parikh-jain.jpg', // Update with your actual image paths
    quote: 'MarkitUp is a really cool agency to work with. They produce amazing thumbnails, superb video editing and have contributed a lot in growth of my channel.',
  },
  {
    id: 2,
    name: 'Kushal Lodha',
    position: 'Founder, KAGR | LinkedIn Top Voice',
    avatar: '/testimonials/kushal-lodha.jpg',
    quote: 'MarkitUp\'s exceptional Social Media Management across Youtube, Instagram and LinkedIn saved me so much time and made my experience smooth. Kudos to their team!',
  },
  {
    id: 3,
    name: 'Mehul Mohan',
    position: 'Founder, Codedamn',
    avatar: '/testimonials/mehul-mohan.jpg',
    quote: 'Markitup really helped us get organised with our publishing schedule, video titles and content strategy that boosted our views from 250k/month to 1.1M/month at peak.',
  },
  {
    id: 4,
    name: 'Sarah Johnson',
    position: 'Marketing Director, TechNova',
    avatar: '/testimonials/sarah-johnson.jpg',
    quote: 'The team at MarkitUp transformed our social presence completely. Their strategic approach to content creation has doubled our engagement rates in just three months.',
  },
  {
    id: 5,
    name: 'Raj Patel',
    position: 'YouTube Creator',
    avatar: '/testimonials/raj-patel.jpg',
    quote: 'Since working with MarkitUp, my channel has grown from 50K to over 500K subscribers. Their thumbnail designs consistently get 30% higher CTR than my old ones.',
  },
];

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalTestimonials = testimonials.length;
  
  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        // When reaching the end, loop back to the first
        return (prevIndex + 1) % totalTestimonials;
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, [totalTestimonials]);
  
  // Handle card scroll when active index changes
  useEffect(() => {
    const container = containerRef.current;
    const card = container?.querySelector('.testimonial-card');
    if (container && card) {
      const cardWidth = (card as HTMLElement).offsetWidth + 24; // including gap
      container.scrollTo({
        left: activeIndex * cardWidth,
        behavior: 'smooth',
      });
    }
  }, [activeIndex]);
  
  // Handle pagination click - each indicator controls a group of testimonials
  const handlePaginationClick = (index: number) => {
    // Map the pagination index (0, 1, 2) to actual testimonial indices
    let targetIndex = index;
    
    // Ensure we don't go out of bounds
    if (targetIndex >= totalTestimonials) {
      targetIndex = 0;
    }
    
    setActiveIndex(targetIndex);
  };

  return (
    <section className="py-16 bg-neutral-50" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2">TESTIMONIALS</h2>
          <div className="flex items-center justify-center gap-2">
            <span className="text-blue-500 text-sm font-medium">WHAT</span>
            <span className="text-xl italic font-medium">Customers Say</span>
          </div>
        </div>
        
        {/* Testimonials carousel */}
        <div className="relative mx-auto max-w-6xl">
          {/* Left overlay */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-neutral-50 via-neutral-50/80 to-transparent z-10"></div>
          
          <div
            ref={containerRef}
            className="flex scroll-smooth space-x-6 no-scrollbar overflow-x-hidden pb-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="testimonial-card min-w-[calc(100%-48px)] sm:min-w-[calc(85%-48px)] md:min-w-[calc(50%-24px)] lg:min-w-[calc(33.333%-24px)] snap-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full shadow-sm">
                  <CardContent className="p-8 space-y-6 relative">
                    {/* Quote icon */}
                    <div className="absolute top-6 left-6 text-green-500">
                      <QuoteIcon size={24} />
                    </div>
                    
                    {/* Testimonial text */}
                    <div className="pt-8 pb-6">
                      <p className="text-gray-700 leading-relaxed">
                        {testimonial.quote}
                      </p>
                    </div>
                    
                    {/* Author info */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 relative flex-shrink-0">
                        {/* Replace with your actual Image component when you have images */}
                        {/* <Image 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          fill 
                          className="object-cover"
                        /> */}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Decorative dots pattern */}
                <div className="absolute bottom-4 right-4 grid grid-cols-3 gap-1 opacity-30">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-1 h-1 rounded-full bg-black"></div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Right overlay */}
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-neutral-50 via-neutral-50/80 to-transparent z-10"></div>
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center items-center mt-12 gap-2">
          {/* Show only 3 pagination indicators regardless of number of testimonials */}
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => handlePaginationClick(index)}
              className={`w-8 h-2 rounded-full transition-all ${
                Math.floor(activeIndex / 3) === Math.floor(index / 3) && activeIndex % 3 === index % 3
                  ? 'bg-blue-600 w-12'
                  : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}