"use client";

import React, { useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { motion } from "framer-motion";
import Image from "next/image";

const HomeVideo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="relative p-6 min-h-screen w-1/2">
      {/* Thumbnail with Play Button */}
      <Image
        src="/images/home/sec-banner-video-image.jpg"
        alt="Video Thumbnail"
        className="w-full rounded-lg shadow-md"
        width={1000}
        height={1000}
      />
      <motion.button
        onClick={handlePlayClick}
        className="absolute inset-0 flex items-center justify-center"
        whileHover={{ scale: 0.9 }}
        whileTap={{ scale: 1 }}
      >
        <FaPlay className="text-5xl sm:text-7xl lg:text-9xl text-white" />
      </motion.button>

      {/* Modal for YouTube Video */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative w-full sm:w-4/5 lg:w-2/3 max-h-[90vh] overflow-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 px-3 py-2 bg-thLightBlue rounded-full text-white text-lg sm:text-2xl"
            >
              ✕
            </button>
            {/* YouTube Video */}
            <iframe
              width="100%"
              height="315px"
              className="sm:h-[400px] lg:h-[500px] rounded-lg"
              src="https://www.youtube.com/embed/FxDgF5jEThc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default HomeVideo;
