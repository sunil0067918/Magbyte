import React from "react";
// import img1 from "../../Services/WebDesign/Images/";
import img1 from "../../Services/WebDesign/Images/images1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import Form from "../../Form";

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

         <Form/>
        </div>
      </div>
    </div>
  );
};

export default Webdesignbanner;
