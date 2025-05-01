'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

// Portfolio items data
const portfolioItems = [
  {
    id: 1,
    title: "Sanjay's Ad Edit",
    category: "AD EDITS",
    image: "/portfolio/ad-edit-1.jpg", // Update with your actual image paths
    description: "Sanjay's captivating Ad video for his SEO course. Edited with attractive animations and to-the-tee transcribing!",
    link: "/portfolio/sanjay-ad-edit"
  },
  {
    id: 2,
    title: "Luru's ProductHunt Video",
    category: "AD EDITS",
    image: "/portfolio/product-hunt.jpg",
    description: "Luru's successful ProductHunt launch feature. A high-quality edit with custom-made screen grabs and creative animations!",
    link: "/portfolio/luru-producthunt"
  },
  {
    id: 3,
    title: "Ishan's Dr Strange thumbnail",
    category: "THUMBNAILS",
    image: "/portfolio/dr-strange.jpg",
    description: "A mystic fusion of creativity and mastery, showcasing the sorcerer of content's enchanting digital realm.",
    link: "/portfolio/ishan-dr-strange"
  },
  {
    id: 4,
    title: "Marketing Campaign",
    category: "AD EDITS",
    image: "/portfolio/marketing-campaign.jpg",
    description: "Strategic ad campaign for a leading tech brand with modern animations and conversions-focused editing.",
    link: "/portfolio/marketing-campaign"
  },
  {
    id: 5,
    title: "Travel Vlog Edit",
    category: "VIDEO EDITS",
    image: "/portfolio/travel-vlog.jpg",
    description: "Cinematic travel montage with color grading that brings the vibrant landscapes to life.",
    link: "/portfolio/travel-vlog"
  },
  {
    id: 6,
    title: "Tech Review Thumbnail",
    category: "THUMBNAILS",
    image: "/portfolio/tech-review.jpg",
    description: "Eye-catching thumbnail design with vibrant colors that achieved a 32% increase in click-through rate.",
    link: "/portfolio/tech-review"
  },
  {
    id: 7,
    title: "Podcast Highlight",
    category: "VIDEO EDITS",
    image: "/portfolio/podcast-edit.jpg",
    description: "Sharp podcast highlight reel featuring dynamic audio visualizations and smooth transitions.",
    link: "/portfolio/podcast-highlight"
  },
  {
    id: 8,
    title: "E-commerce Ad",
    category: "AD EDITS",
    image: "/portfolio/ecommerce-ad.jpg",
    description: "Conversion-focused product showcase with attention-grabbing animations and clear call-to-actions.",
    link: "/portfolio/ecommerce-ad"
  },
  {
    id: 9,
    title: "Gaming Channel Art",
    category: "THUMBNAILS",
    image: "/portfolio/gaming-thumbnail.jpg",
    description: "Exciting gaming thumbnail series that helped the channel grow by 5K subscribers in just one month.",
    link: "/portfolio/gaming-channel"
  }
];

// Categories for filtering
const categories = ['ALL', 'VIDEO EDITS', 'THUMBNAILS', 'AD EDITS'];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  
  // Filter items based on active category
  const filteredItems = activeCategory === 'ALL' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-16 md:px-40 bg-neutral-50" id="portfolio">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">PORTFOLIO</h2>
        
        {/* Category filters */}
        <div className="flex justify-center mb-12 space-x-10 overflow-x-auto sm:overflow-visible">
          {categories.map((category) => (
            <button
              key={category}
              className={`relative pb-2 font-medium whitespace-nowrap ${
                activeCategory === category 
                  ? 'text-black' 
                  : 'text-gray-500 hover:text-black transition-colors'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
              {activeCategory === category && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></span>
              )}
            </button>
          ))}
        </div>
        
        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Card className="h-full overflow-hidden">
                {/* Project image */}
                <div className="relative aspect-video overflow-hidden">
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    {/* Replace this with your actual Image component when you have images */}
                    {/* <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      className="object-cover transition-transform hover:scale-105"
                    /> */}
                    
                    {/* Text overlay for image - add this if you want title on the image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg">{item.title.split(' ')[0]}</h3>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="text-sm font-semibold text-blue-500 mb-2">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
                
                <CardFooter className="px-6 pb-6 pt-0">
                  <Link 
                    href={item.link} 
                    className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800"
                  >
                    See project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </CardFooter>
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
      </div>
    </section>
  );
}