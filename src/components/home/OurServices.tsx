"use client";

import React from "react";
import { ourServicesData } from "@/data/ourServicesData";
import Image from "next/image";
import { motion } from "framer-motion";

const OurServices: React.FC = () => {
  return (
    <div className="py-10">
      <div className="font-bold text-center mb-5">
        <h2 className="text-6xl text-thRed tracking-wider">Our Services</h2>
        <p className="text-3xl">Elevate your expectations with our services.</p>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ourServicesData.map((service) => (
            <motion.a
              key={service.id}
              href={service.link}
              className="dark:bg-black cursor-pointer bg-white bg-opacity-80 backdrop-blur-lg shadow-md rounded-lg p-6"
              whileHover={{ scale: 1.05 }} // Scale on hover
              whileTap={{ scale: 0.95 }} // Scale down when clicked
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="text-5xl mb-4 text-center">
                <Image
                  src={`/images/icons/${service.icon}`}
                  alt={service.title}
                  className="w-16 h-16 mx-auto"
                  width={500}
                  height={500}
                />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
