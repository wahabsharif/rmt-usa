import React from "react";

const HomeBanner: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source
          src="/videos/stock-footage-future-hospitals-and-medical-technology.webm"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>

      {/* Content Section */}
      <div className="relative z-10 max-w-lg ml-8 text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg mb-6">
          Discover amazing content and explore endless opportunities with us.
        </p>
        <button className="px-6 py-3 bg-thDarkBlue text-white font-semibold rounded-md hover:bg-thLightBlue transition duration-300">
          Get Started
        </button>
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    </div>
  );
};

export default HomeBanner;
