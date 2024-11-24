"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.button
      onClick={scrollToTop}
      whileHover={{
        scale: 1.1,
        y: -5, // Slight upward movement for bounce
        transition: { type: "spring", stiffness: 300, damping: 10 },
      }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-8 p-4 bg-thDarkBlue w-15 h-15 bg-opacity-50 text-white rounded-full shadow-lg border-thRed border-2 hover:bg-gray-800 focus:outline-none z-50 backdrop-blur-sm"
    >
      <MdOutlineKeyboardDoubleArrowUp />
    </motion.button>
  );
};

export default ScrollToTop;
