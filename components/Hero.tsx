"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const rocketControls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await rocketControls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1.5, ease: "easeOut" },
      });
      rocketControls.start({
        y: [-2, 2, -2],
        transition: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      });
    };
    sequence();
  }, [rocketControls]);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const statsCounter = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.8,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    },
  };

  const circleScale = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative w-full min-h-screen bg-white dark:bg-gray-950 overflow-hidden">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Dot Patterns */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-32 left-0"
      >
        <DotPattern />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute bottom-0 left-0"
      >
        <DotPattern />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute right-0 top-1/4"
      >
        <DotPattern />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.4 }}
        className="absolute right-0 bottom-0"
      >
        <DotPattern />
      </motion.div>

      {/* Circle decorations */}
      <motion.div
        variants={circleScale}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        className="absolute top-24 left-1/2 transform -translate-x-1/2 w-4 h-4 border-2 border-gray-300 rounded-full"
      />
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-0 left-44 w-8 h-8 border-2 border-gray-300 rounded-full"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-40 left-40 w-8 h-8 border-2 border-gray-300 rounded-full"
      />

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left side */}
          <div className="w-full md:w-1/2 space-y-8">
            <motion.div
              variants={fadeIn}
              custom={0}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
            >
              <h2 className="text-sm font-bold tracking-wide uppercase mb-1">
                HELLO WORLD, <span className="text-blue-500">WE ARE</span>
              </h2>
              <h1 className="text-6xl md:text-7xl font-extrabold text-blue-500">
                Eureka
              </h1>
              <p className="text-lg mt-2 flex items-center gap-2">
                <span className="text-sm">A</span>
                <span className="font-serif italic">Creative Hub</span>
              </p>
            </motion.div>

            <motion.p
              variants={fadeIn}
              custom={1}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-md"
            >
              We are a team of enthusiastic individuals who help brands grow by
              unleashing the potential of social media
            </motion.p>

            <motion.div
              variants={fadeIn}
              custom={2}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              className="flex space-x-4"
            >
              <Link
                href="#"
                className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <Linkedin size={24} />
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <Twitter size={24} />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeIn}
              custom={3}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              className="flex items-center gap-6"
            >
              <Button className="rounded-full bg-blue-500 text-white hover:bg-blue-600">
                CONTACT US
              </Button>
              <Link
                href="#"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 font-medium flex items-center group"
              >
                DOWNLOAD BROCHURE
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Right side with rocket and stats */}
          <div className="w-full md:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full h-full aspect-square bg-blue-500 rounded-full relative overflow-hidden"
            >
              <motion.div
                initial={{ y: 300, opacity: 0 }}
                animate={rocketControls}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-3/4 h-3/4">
                  <Image
                    src="/rocket.png"
                    alt="Rocket launch with social media icons"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Stat blocks placed outside the circle */}
            <motion.div
              variants={statsCounter}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              className="absolute top-[90%] left-6 z-30"
            >
              <div className="bg-white dark:bg-gray-900 rounded-full px-6 py-3 shadow-lg flex items-center gap-3 border border-blue-100">
                <div className="text-4xl font-bold">30+</div>
                <div className="flex flex-col">
                  <span className="text-blue-500 text-xs font-bold">HAPPY</span>
                  <span className="font-semibold">CLIENTS</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={statsCounter}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              className="absolute top-[90%] right-6 z-30"
            >
              <div className="bg-white dark:bg-gray-900 rounded-full px-6 py-3 shadow-lg flex items-center gap-3 border border-blue-100">
                <div className="text-4xl font-bold">999+</div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold">VIDEOS</span>
                  <span className="text-blue-500 text-xs">EDITED &</span>
                  <span className="text-blue-500 text-xs">PUBLISHED</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DotPattern = () => {
  return (
    <div className="grid grid-cols-10 gap-2">
      {Array.from({ length: 100 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: Math.random() * 0.7 + 0.3 }}
          transition={{ duration: 1, delay: Math.random() * 0.5 }}
          className="w-1 h-1 rounded-full bg-gray-300"
        ></motion.div>
      ))}
    </div>
  );
};

export default HeroSection;
