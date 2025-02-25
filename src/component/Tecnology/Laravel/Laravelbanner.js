import React from "react";
import img from "../Laravel/Bannnerimages/images.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

const Laravelbanner = () => {
  return (
    <div
      className=" relative  sm:h-[880px] lg:h-[540px] h-[790px]  bg-blue-600 flex justify-center pt-5  lg:items-center "
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(${img})`,
        backgroundSize: `contain`,
      }}
    >
      <div className="flex justify-between gap-10 w-[90%] lg:flex-row flex-col">
        <div className="">
          <h1 className="lg:text-4xl text-xl text-white font-[600]">
            <span className="text-red-500 animate-pulse">Laravel</span> Web
            <span className="text-red-200 animate-pulse"> Development</span>  Solutions
          </h1>

          <div className=" mt-3 lg:mt-7 flex gap-8">
            <div className=" flex-col flex gap-5 ">
              <div className="text-white gap-5 flex items-center">
                <FontAwesomeIcon
                  icon={faSquareCheck}
                  className=" text-sm lg:text-xl"
                />
                <span className="  text-[10px]  font-[400] lg:text-[18px]">
                  Powerful MVC Architecture
                </span>
              </div>
              <div className="text-white gap-5 flex items-center">
                <FontAwesomeIcon
                  icon={faSquareCheck}
                  className=" text-sm lg:text-xl"
                />
                <span className="  text-[10px]  font-[400] lg:text-[18px]">
                  Database Migration and Data Seeding
                </span>
              </div>
              <div className="text-white gap-5 flex items-center">
                <FontAwesomeIcon
                  icon={faSquareCheck}
                  className=" text-sm lg:text-xl"
                />
                <span className="  text-[10px]  font-[400] lg:text-[18px]">
                  Sophisticated Routing Features
                </span>
              </div>
            </div>

            <div className=" flex-col flex gap-5 ">
              <div className="text-white gap-5 flex items-center">
                <FontAwesomeIcon
                  icon={faSquareCheck}
                  className=" text-sm lg:text-xl"
                />
                <span className="  text-[10px]  font-[400] lg:text-[18px]">
                  Language Localization and Multilingual Support
                </span>
              </div>
              <div className="text-white gap-5 flex items-center">
                <FontAwesomeIcon
                  icon={faSquareCheck}
                  className=" text-sm lg:text-xl"
                />
                <span className=" text-[10px]  font-[400] lg:text-[18px]">
                  Efficient ORM with Eloquent
                </span>
              </div>
              <div className="text-white gap-5 flex items-center">
                <FontAwesomeIcon
                  icon={faSquareCheck}
                  className=" text-sm lg:text-xl"
                />
                <span className=" text-[10px]  font-[400] lg:text-[18px]">
                  Integrated Authentication and Authorization
                </span>
              </div>
            </div>
          </div>
        </div>

        <form
          action="submit"
          className="bg-gradient-to-r from-[#333333] to-[#000000] rounded-[5px] px-[14px] py-[40px] opacity-0 animate-slideInFromBottom border-2 border-[#333333]"
        >
          <div className="flex flex-col text-center opacity-0 animate-fadeIn">
            <span className="text-[16px] sm:text-[20px] font-[800] bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">
              Book Free Consultation
            </span>

            <p className="text-[12px] sm:text-[14px] font-[500] text-[#FFFFFF] text-center">
              Fill Out the Form and Our Expert Will Contact You Within 24hrs
            </p>
          </div>

          <div className="flex flex-col space-y-5 pt-10">
            <div className="flex justify-between sm:flex-row flex-col gap-5 sm:gap-0">
              <input
                className="text-[11px] sm:text-[14px] px-[6px] py-[6px] sm:px-[10px] sm:py-[10px] rounded-[6px] border-2 border-[#333333] focus:outline-none focus:ring-0 focus:border-[#333333] lighting-border transition-all duration-300"
                type="text"
                placeholder="FirstName*"
              />

              <input
                className="text-[11px] sm:text-[14px] px-[6px] py-[6px] sm:px-[10px] sm:py-[10px] rounded-[6px] border-2 border-[#333333] focus:outline-none focus:ring-0 focus:border-[#333333] lighting-border transition-all duration-300"
                type="email"
                placeholder="Email*"
              />
            </div>

            <div className="flex justify-between sm:flex-row flex-col gap-5 sm:gap-0">
              <input
                className="text-[11px] sm:text-[14px] px-[6px] py-[6px] sm:px-[10px] sm:py-[10px] rounded-[6px] border-2 border-[#333333] focus:outline-none focus:ring-0 focus:border-[#333333] lighting-border transition-all duration-300"
                type="number"
                placeholder="Phone Number*"
              />

              <input
                className="text-[11px] sm:text-[14px] px-[6px] py-[6px] sm:px-[10px] sm:py-[10px] rounded-[6px] border-2 border-[#333333] focus:outline-none focus:ring-0 focus:border-[#333333] lighting-border transition-all duration-300"
                type="text"
                placeholder="Company Name*"
              />
            </div>

            <input
              type="text"
              placeholder="Your Requirement*"
              className="text-[11px] sm:text-[14px] px-[6px] py-[6px] sm:px-[10px] sm:py-[10px] rounded-[6px] border-2 border-[#333333] focus:outline-none focus:ring-0 focus:border-[#333333] lighting-border transition-all duration-300"
            />

            <button class=" px-[6px] py-[6px] sm:px-[10px] sm:py-[10px] font-[700] text-white bg-gradient-to-r from-red-600 to-[#e66161] border-2 border-red-500 shadow-[0_0_10px_2px rgba(70,135,199,0.7)] hover:scale-105 hover:shadow-[0_0_20px_4px rgba(70,135,199,1)] focus:ring-4 focus:ring-red-500 focus:ring-opacity-60 focus:border-red-500 focus:shadow-[0_0_20px_4px rgba(70,135,199,1)] rounded-[6px] transition-all duration-300 ease-in-out">
              <span
                className="
                flowing-texttt text-[11px] sm:text-[14px]"
              >
                Submit Your Requirement!
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Laravelbanner;
