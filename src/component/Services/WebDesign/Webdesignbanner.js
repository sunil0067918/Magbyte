import React from "react";
// import img1 from "../../Services/WebDesign/Images/";
import img1 from "../../Services/WebDesign/Images/images1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

const Webdesignbanner = () => {
  return (
    <div>
      <div
        className=" relative lg:h-[540px] h-[780px]  bg-blue-600 flex justify-center sm:items-center pt-[20px] sm:pt-0 "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${img1}) `,
          backgroundSize: `cover`,
        }}
      >
        <div className=" absolute lg:w-[90%] px-3 pt-5 flex gap-6 justify-between sm:items-baseline   lg:items-center rounded-[5px] lg:flex-row flex-col ">
          <div className=" space-y-4 ">
            <div className="  lg:w-[602px] w-full ">
              <span className=" text-[16px] lg:text-[32px] sm:text-[24px] font-[600]  text-wrap text-white">
                Website Design services that Maximize Traffic, Engagement, and
                Conversion
              </span>
            </div>

            <div className="text-white space-y-6">
              <div className="lg:space-x-6 space-x-2 flex ">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    className=" text-white"
                  />
                  <span className="lg:text-[18px]    text-[12px] lg:font-[600] whitespace-nowrap">
                    100% Mobile Friendly
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    className=" text-white"
                  />
                  <span className="lg:text-[18px] lg:font-[600] text-[12px] whitespace-nowrap ">
                    Stunning Design
                  </span>
                </div>
              </div>
              <div className="lg:space-x-6 space-x-1 flex ">
                <div className="flex items-center  gap-1">
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    className=" text-white"
                  />
                  <span className="lg:text-[18px]    text-[11px] lg:font-[600]  whitespace-nowrap">
                    Conversion Friendly Layout
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    className=" text-white"
                  />
                  <span className="lg:text-[18px] lg:font-[600] text-[11px]  whitespace-nowrap">
                    Effective Call to Action
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-10">
              <button className="bg-[#FFFFFF] lg:px-[40px] lg:py-[16px]  px-[20px] py-[9px]  rounded-[30px]  lg:rounded-[50px]lg:text-[18px] lg:font-[600] ">
               
                <span className=" flowing-text">Get free consultation</span>
              </button>
            </div>
          </div>

          <form
            action="submit"
            className="bg-gradient-to-r from-[#333333] to-[#000000] rounded-[5px] px-[14px] py-[40px] opacity-0 animate-slideInFromBottom border-2 border-[#333333]"
          >
            <div className="flex flex-col text-center opacity-0 animate-fadeIn">
              <span className="text-[16px] sm:text-[20px] font-[800] bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">
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
              <button class=" px-[6px] py-[6px] sm:px-[10px] sm:py-[10px] font-[700] text-white bg-gradient-to-r from-[#4687C7] to-[#1E3A8A] border-2 border-[#4687C7] shadow-[0_0_10px_2px rgba(70,135,199,0.7)] hover:scale-105 hover:shadow-[0_0_20px_4px rgba(70,135,199,1)] focus:ring-4 focus:ring-[#4687C7] focus:ring-opacity-60 focus:border-[#4687C7] focus:shadow-[0_0_20px_4px rgba(70,135,199,1)] rounded-[6px] transition-all duration-300 ease-in-out">
                <span
                  className="
                flowing-textt text-[11px] sm:text-[14px]"
                >
                  Submit Your Requirement!
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Webdesignbanner;
