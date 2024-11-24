"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const SecondBanner: React.FC = () => {
  // Use Intersection Observer and Framer Motion Controls
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Trigger animations when the component is in view
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      className="flex flex-col lg:flex-row items-center justify-between p-6 sm:p-8 lg:p-16 space-y-8 lg:space-y-0"
    >
      {/* Left Section: Heading and Paragraph */}
      <motion.div
        className="space-y-6"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center lg:text-left leading-tight">
          Our Transformative Technological Breakthroughs shaping the Healthcare
          Landscape.
        </h2>
        <motion.div
          className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-5 text-center sm:text-left">
            <p className="text-center sm:text-lg text-gray-500">
              At Revive Medical Technologies, we stand at the forefront of
              medical innovation, driven by a passion to transform ideas into
              reality.
            </p>
            <div className="flex flex-col sm:flex-row items-center">
              {/* Left Section */}
              <div className="flex-1 sm:pr-4 sm:border-r dark:border-gray-300 border-gray-900 dark pb-4 sm:pb-0">
                <span className="text-thRed font-bold uppercase block">
                  Leading Expertise
                </span>
                <p className="text-sm sm:text-base">
                  Our company’s cutting-edge knowledge and proficiency in the
                  field, enabling us to maintain a competitive edge and deliver
                  the most innovative solutions to our clients.
                </p>
              </div>

              {/* Right Section */}
              <div className="flex-1 sm:pl-4">
                <span className="text-thRed font-bold uppercase block">
                  Reliable Solutions
                </span>
                <p className="text-sm sm:text-base">
                  Our company’s dedication to consistently offer dependable and
                  effective responses to our clients’ needs, cultivating trust
                  and confidence in our services.
                </p>
              </div>
            </div>

            {/* Centered Button */}
            <div className="flex justify-center mt-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  href={"#"}
                  className="px-3 py-2 text-white bg-thDarkBlue rounded-xl"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SecondBanner;
