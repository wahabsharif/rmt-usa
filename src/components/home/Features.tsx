import React from "react";
import { featuresData } from "@/data/featuresData";
import Image from "next/image";

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative px-4">
      {/* Heading at the top */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-thRed tracking-wider mb-8 sm:mb-12 text-center">
        Features
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-xl relative z-10 w-full">
        {/* Content positioned above the blurred background */}
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-full p-6 dark:bg-black bg-white bg-opacity-80 backdrop-blur-lg shadow-md rounded-lg text-center transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <Image
              src={`/images/icons/${feature.icon}`}
              alt={feature.title}
              className="mx-auto mb-4"
              width={64}
              height={64}
            />
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
