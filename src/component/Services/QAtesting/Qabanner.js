import React from "react";
import img from "../QAtesting/Qabannerimages/images.png";

const Qabanner = () => {
  return (
    <div
      className=" relative  sm:h-[880px] lg:h-[540px] h-[500px]  bg-blue-600 flex justify-center pt-10 lg:pt-0 px-4 lg:items-center "
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)), url(${img})`,
        backgroundSize: `cover`,
      }}
    >
      <div className="flex flex-col items-center gap-6 lg:w-[80%] ">
        <span className=" text-[18px] lg:text-6xl text-white font-[700]">
          Testing services for software
        </span>
        <p className=" text-[14px] lg:text-2xl text-gray-300 text-center">
          QA testing ensures that software meets the required standards and
          functions properly. It involves identifying defects, ensuring
          functionality, performance, security, and usability, and verifying
          that the product performs as expected in various conditions. Through
          thorough testing, QA helps improve software quality, user experience,
          and reliability
        </p>

        <div className="flex gap-4 justify-center items-center mt-12">
          <button className="relative overflow-hidden lg:px-8 lg:py-3 px-3 py-1 font-semibold rounded-md text-white border-2 border-white capitalize group">
            <span className="z-10 relative group-hover:text-black text-[12px] lg:text-[18px]">
              Get in Touch
            </span>
            <span className="absolute top-0 left-0 w-full h-full bg-white transition-all duration-500 scale-x-0 group-hover:scale-x-100 group-hover:left-0 group-hover:right-0 transform origin-left"></span>
          </button>
          <button className="relative overflow-hidden lg:px-8 lg:py-3 px-3 py-1 font-semibold rounded-md text-white border-2 border-white capitalize group">
            <span className="z-10 relative group-hover:text-black text-[12px] lg:text-[18px]">
              View Portfolio
            </span>
            <span className="absolute top-0 left-0 w-full h-full bg-white transition-all duration-500 scale-x-0 group-hover:scale-x-100 group-hover:left-0 group-hover:right-0 transform origin-left"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Qabanner;
