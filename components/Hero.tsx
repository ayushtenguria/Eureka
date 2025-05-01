// components/HeroSection.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-white dark:bg-gray-950 overflow-hidden">
      <ThemeToggle />
      {/* Dot patterns */}
      <div className="absolute top-32 left-0">
        <DotPattern />
      </div>
      <div className="absolute bottom-0 left-0">
        <DotPattern />
      </div>
      <div className="absolute right-0 top-1/4">
        <DotPattern />
      </div>
      <div className="absolute right-0 bottom-0">
        <DotPattern />
      </div>

      {/* Circle decoration */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-4 h-4 border-2 border-gray-300 rounded-full"></div>
      <div className="absolute top-0 left-44 w-8 h-8 border-2 border-gray-300 rounded-full"></div>
      <div className="absolute bottom-40 left-40 w-8 h-8 border-2 border-gray-300 rounded-full"></div>

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 space-y-8">
            <div>
              <h2 className="text-sm font-bold tracking-wide uppercase mb-1">
                HELLO WORLD, <span className="text-blue-500">WE ARE</span>
              </h2>
              <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 drop-shadow-md">
                Eureka
              </h1>
              <p className="text-lg mt-2 flex items-center gap-2">
                <span className="text-sm">A</span> 
                <span className="font-serif italic">Creative Hub </span>
              </p>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md">
              We are a team of enthusiastic individuals who help brands grow by
              unleashing the potential of social media
            </p>

            <div className="flex space-x-4">
              <Link href="#" className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
                <Twitter size={24} />
              </Link>
            </div>

            <div className="flex items-center gap-6">
              <Button className="rounded-full bg-white text-black hover:bg-gray-100 border border-gray-200 shadow-md">
                CONTACT US
              </Button>
              <Link href="#" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 font-medium">
                DOWNLOAD BROCHURE
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative">
            <div className="w-full h-full aspect-square bg-blue-500 bg-opacity-80 rounded-full relative overflow-hidden">
              {/* Main illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-3/4 h-3/4">
                  <Image 
                    src="/rocket.png" 
                    alt="Rocket launch with social media icons"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="absolute bottom-24 left-0 transform -translate-x-1/4">
                <div className="bg-white dark:bg-gray-900 rounded-full px-6 py-3 shadow-lg flex items-center gap-3">
                  <div className="text-4xl font-bold">30+</div>
                  <div className="flex flex-col">
                    <span className="text-blue-500 text-xs font-bold">HAPPY</span>
                    <span className="font-semibold">CLIENTS</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-24 right-0 transform translate-x-1/4">
                <div className="bg-white dark:bg-gray-900 rounded-full px-6 py-3 shadow-lg flex items-center gap-3">
                  <div className="text-4xl font-bold">999+</div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold">VIDEOS</span>
                    <span className="text-blue-500 text-xs">EDITED &</span>
                    <span className="text-blue-500 text-xs">PUBLISHED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Dot pattern component
const DotPattern = () => {
  return (
    <div className="grid grid-cols-10 gap-2">
      {Array.from({ length: 100 }).map((_, i) => (
        <div key={i} className="w-1 h-1 rounded-full bg-gray-300"></div>
      ))}
    </div>
  );
};

export default HeroSection;