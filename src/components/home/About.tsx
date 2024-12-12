"use client";
import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      className="p-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl text-thRed tracking-wider mb-8 sm:mb-12 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Who we are?
      </motion.h2>
      <motion.p
        className="text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Revive Medical Technologies Inc. (RMT) is a U.S. based company with its
        Satellite office and a unique R&D facility in Pakistan. As a
        cross-functional service provider we provide cost and time efficient R&D
        services to creative minds like Physicians, Medical device manufacturers
        and healthcare researchers who want to realize their ingenious ideas
        into market-ready products in an accelerated process. Our mission is to
        catalyze healthcare advancement by cultivating an environment that turns
        creative ideas into practical solutions. By having our state-of-art R&D
        facility and Technical/development staff in Pakistan, we offer reliable
        and robust technological solutions to our customers across the globe.
      </motion.p>
    </motion.div>
  );
}

export default About;
