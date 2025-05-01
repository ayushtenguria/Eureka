"use client";

import React, { useState, useEffect } from 'react';
import { Lightbulb } from 'lucide-react';

interface LoaderProps {
  onLoadingComplete?: () => void;
  duration?: number;
}

const EurekaLoader: React.FC<LoaderProps> = ({ 
  onLoadingComplete, 
  duration = 2000 
}) => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, duration);
    
    return () => clearTimeout(timer);
  }, [duration, onLoadingComplete]);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="flex items-center mb-4">
        <Lightbulb className="h-8 w-8 text-blue-500 mr-2" />
        <span className="text-2xl font-bold text-gray-900">eureka</span>
      </div>
      <div className="w-24 h-1 bg-blue-100 relative overflow-hidden">
        <div className="absolute h-full bg-blue-500 w-1/4 animate-[loading_1.5s_ease-in-out_infinite]"></div>
      </div>
      <style jsx>{`
        @keyframes loading {
          0% {
            left: -25%;
          }
          50% {
            left: 100%;
          }
          100% {
            left: -25%;
          }
        }
      `}</style>
    </div>
  );
};

export default EurekaLoader;