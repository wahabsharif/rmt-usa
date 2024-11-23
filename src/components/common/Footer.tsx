import React from "react";
import { footerData } from "@/data/footerData";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer>
      <div className="container mx-auto p-6 bg-thLightBlue dark:bg-thDarkBlue rounded-xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Logo and Paragraph */}
        <div className="space-y-4">
          <Link href="/">
            <Image
              src="/images/logo/rmt-usa-logo.png"
              alt="Logo"
              width={1000}
              height={1000}
              priority
              className="w-32"
            />
          </Link>
          <p className="text-sm">{footerData.description}</p>
        </div>
        {/* Column 2: Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4 tracking-wide">Links</h3>
          <ul className="space-y-2">
            {footerData.links.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="hover:text-gray-400">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Column 3: Reach Us Out */}
        <div className="bg-gray-100 dark:bg-gray-800/70 backdrop-blur-md rounded-xl shadow-lg p-3 transition ease-in-out">
          <h3 className="text-2xl font-bold mb-4 tracking-wide">
            Reach Us Out
          </h3>
          <div className="flex flex-col my-2">
            <label className="text-lg font-bold">Email:</label>
            <Link
              href={`mailto:${footerData.contact.email}`}
              className="text-sm hover:text-gray-400"
            >
              {footerData.contact.email}
            </Link>
          </div>
          <div className="flex flex-col my-2">
            <label className="text-lg font-bold">Phone: </label>
            <Link
              href={`tel:${footerData.contact.phone}`}
              className="text-sm hover:text-gray-400"
            >
              {footerData.contact.phone}
            </Link>
          </div>
          <div className="flex flex-col my-2">
            <label className="text-lg font-bold">Headquarter: </label>
            <p className="text-sm hover:text-gray-400">
              {footerData.contact.headquarter}
            </p>
          </div>
          <div className="flex flex-col my-2">
            <label className="text-lg font-bold">
              Satellite Office and R&D Facility :
            </label>
            <p className="text-sm hover:text-gray-400">
              {footerData.contact.siteOffice}
            </p>
          </div>
        </div>
      </div>

      <div className="text-xs md:text-sm container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        {/* Copyright and Powered By Section */}
        <div className="flex flex-col md:flex-row items-center md:space-x-2">
          <span>
            Copyright © {currentYear}{" "}
            <Link href="/" className="text-thRed font-semibold">
              Revive Medical Technologies Inc.
            </Link>
          </span>
          <span className="hidden md:block">|</span>
          <span className="flex items-center space-x-1">
            <span>Powered By</span>
            <Link
              href={"https://envbyte.com/"}
              target="_blank"
              className="flex items-center"
            >
              <Image
                src={"/images/logo/env-byte-landscape-logo.svg"}
                alt="Powered By Env Byte"
                width={1000}
                height={1000}
                className="w-12 h-12 md:w-16 md:h-16 mx-2"
              />
            </Link>
          </span>
        </div>

        {/* Navigation Links Section */}
        <div className="flex flex-wrap justify-center md:justify-end space-x-4">
          <Link
            href="#privacy"
            className="text-gray-400 hover:text-white transition"
          >
            Privacy Policy
          </Link>
          <Link
            href="#terms"
            className="text-gray-400 hover:text-white transition"
          >
            Terms of Service
          </Link>
          <Link
            href="#contact"
            className="text-gray-400 hover:text-white transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
