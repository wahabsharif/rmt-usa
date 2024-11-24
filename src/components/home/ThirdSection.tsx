import React from "react";
import GetQuote from "../common/GetQuote";

const ThirdSection: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('/images/home/ai-texture-background-image-1.avif')`,
      }}
    >
      <div className="bg-black bg-opacity-50 backdrop-blur-md p-8 rounded-lg text-center text-white max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Started</h1>
        <p className="text-lg md:text-xl mb-6">
          Begin Your Medical Innovation Journey with a Commitment to
          Professional Excellence.{" "}
        </p>
        <div className="flex justify-center gap-4">
          <GetQuote />
          <button className="bg-thDarkBlue hover:bg-gray-800 px-6 py-2 rounded-lg font-medium text-white transition ease-in-out">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
