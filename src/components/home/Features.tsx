import React from "react";
import { featuresData } from "@/data/featuresData";
import Image from "next/image";

const Features = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col relative p-4">
      {/* Heading at the top for small devices */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-thRed tracking-wider mb-8 sm:mb-0 sm:absolute sm:top-8 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:text-5xl sm:text-center">
        Features
      </h2>

      <div className="flex flex-wrap gap-4 justify-center max-w-screen-lg relative z-10">
        {/* Content positioned above the blurred background */}
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 p-4 dark:bg-black cursor-pointer bg-white bg-opacity-80 backdrop-blur-lg shadow-md rounded-lg text-center"
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
