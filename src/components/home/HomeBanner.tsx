"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import GetQuote from "../common/GetQuote";

const HomeBanner: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40 dark:opacity-20"
        autoPlay
        loop
        muted
      >
        <source src="/videos/home-banner-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 ml-8 text-white">
        {/* Animated Heading */}
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-thRed"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          CONCEPTION TO COMMERCIALIZATION
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          className="text-md md:text-lg mb-6 dark:text-gray-100 text-gray-950"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Your complete journey partner from conceptualization to full-scale
          commercial reality in the medical innovation landscape.
        </motion.p>

        <motion.div
          className="flex items-center space-x-4"
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
              className="px-6 py-2 hover:border-2 hover:border-thDarkBlue hover:bg-transparent hover:text-black hover:dark:text-white text-white font-semibold rounded-xl bg-thDarkBlue transition ease-in-out duration-500"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeBanner;
