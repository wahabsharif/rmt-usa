"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const SecondBanner: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Use Intersection Observer to detect when the component is in view
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const handlePlayClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      ref={ref}
      className="flex flex-col lg:flex-row items-center justify-between p-6 sm:p-8 lg:p-16 space-y-8 lg:space-y-0"
    >
      {/* Left Section: Heading and Paragraph */}
      <motion.div
        className="lg:w-1/2 space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center lg:text-left leading-tight">
          Our Transformative Technological Breakthroughs shaping the Healthcare
          Landscape.
        </h2>
        <motion.div
          className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/home/sec-banner-image.jpg"
            alt="Descriptive alt text"
            className="w-full sm:w-[250px] lg:w-[300px] object-cover h-[350px] sm:h-[400px] lg:h-[450px] rounded-lg shadow-md"
            width={1000}
            height={1000}
          />
          <div className="space-y-5 text-center sm:text-left">
            <p className="text-base sm:text-lg text-gray-500">
              At Revive Medical Technologies, we stand at the forefront of
              medical innovation, driven by a passion to transform ideas into
              reality.
            </p>
            <div>
              <span className="text-thRed font-bold uppercase block">
                Leading Expertise
              </span>
              <p className="text-sm sm:text-base">
                Our company’s cutting-edge knowledge and proficiency in the
                field, enabling us to maintain a competitive edge and deliver
                the most innovative solutions to our clients.
              </p>
            </div>
            <div>
              <span className="text-thRed font-bold uppercase block">
                Reliable Solutions
              </span>
              <p className="text-sm sm:text-base">
                Our company’s dedication to consistently offer dependable and
                effective responses to our clients’ needs, cultivating trust and
                confidence in our services.
              </p>
            </div>
            <div className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  href={"#"}
                  className=" px-3 py-2 text-white bg-thDarkBlue rounded-xl"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Section: Image with Play Button */}
      <motion.div
        className="lg:w-1/2 relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Image
          src="/images/home/sec-banner-video-image.jpg"
          alt="Descriptive alt text"
          className="w-full rounded-lg shadow-md"
          width={1000}
          height={1000}
        />
        {/* Play Button */}
        <motion.button
          onClick={handlePlayClick}
          className="absolute inset-0 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaPlay className="text-5xl sm:text-7xl lg:text-9xl text-white" />
        </motion.button>
      </motion.div>

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

export default SecondBanner;
