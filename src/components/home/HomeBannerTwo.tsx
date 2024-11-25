"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GetQuote from "../common/GetQuote";
import Link from "next/link";

const images = [
  "/images/home/ai-texture-background-image-1.avif",
  "/images/home/ai-texture-background-image.jpg",
  "/images/home/sec-banner-image.jpg",
  "/images/home/sec-banner-video-image.jpg",
];

function HomeBannerTwo() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showStrips, setShowStrips] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowStrips(true); // Start strip animation
      setTimeout(() => {
        setShowStrips(false); // Remove strips after animation
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000); // Duration of strip animation
    }, 3000); // Duration of image animation
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen p-4 mt-16 overflow-hidden flex flex-col lg:flex-row items-center justify-between">
      {/* Text Content */}
      <div className="relative z-10 max-w-lg mx-4 sm:mx-8 lg:ml-8 text-white text-center lg:text-left">
        {/* Animated Heading */}
        <motion.h1
          className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-4 text-thRed"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          CONCEPTION TO COMMERCIALIZATION
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          className="text-sm md:text-md lg:text-lg mb-6 dark:text-gray-100 text-gray-950"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Your complete journey partner from conceptualization to full-scale
          commercial reality in the medical innovation landscape.
        </motion.p>

        {/* Call to Action */}
        <motion.div
          className="flex items-center justify-center space-x-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <GetQuote />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="#"
              className="px-4 py-2 sm:px-6 sm:py-2 hover:border-2 hover:border-thDarkBlue hover:bg-transparent hover:text-black hover:dark:text-white text-white font-semibold rounded-xl bg-thDarkBlue transition ease-in-out duration-500"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Image Slideshow with Animated Strips */}
      <div className="relative w-full lg:w-1/2 sm:w-[80%] h-96 sm:h-[450px] lg:h-[500px] xl:h-[600px] overflow-hidden flex items-center justify-center mt-8 lg:mt-0">
        <div className="relative w-full h-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-none overflow-hidden">
          {/* Image */}
          <AnimatePresence>
            {images.map((image, index) => {
              if (index === currentImageIndex) {
                return (
                  <motion.img
                    key={image}
                    src={image}
                    alt={`Banner Image ${index + 1}`}
                    className="absolute w-full h-full rounded-xl object-cover z-0"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      duration: 1,
                    }}
                  />
                );
              }
              return null;
            })}
          </AnimatePresence>

          {/* Strips Animation */}
          {showStrips && (
            <div className="absolute inset-0 flex justify-center rounded-xl items-center z-10">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-[20%] h-full"
                  style={{
                    left: `${i * 20}%`,
                    backgroundColor:
                      i % 3 === 0
                        ? "#013550"
                        : i % 3 === 1
                        ? "#00b6c6"
                        : "#DC3332", // Cycle through colors
                  }}
                  initial={{ y: "100%" }}
                  animate={{ y: "-100%" }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeBannerTwo;
