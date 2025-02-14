import React from "react";
// import img1 from "../../Services/WebDesign/Images/";
import img1 from "../../Services/WebDesign/Images/images1.png";

const Webdesignbanner = () => {
  return (
    <div>
      <div
        className=" relative md:h-[540px] h-[1000px]  bg-blue-600 flex justify-center sm:items-center pt-[20px] sm:pt-0 "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${img1}) `,
          backgroundSize: `cover`,
        }}
      >
        <div className=" absolute w-[90%] flex gap-6 justify-between items-center rounded-[5px] md:flex-row flex-col ">
          <div className=" space-y-4">
            <div className="  sm:w-[602px] w-full ">
              <span className=" text-[20px] sm:text-[32px] font-[600]  text-wrap text-white">
                Website Design services that Maximize Traffic, Engagement, and
                Conversion
              </span>
            </div>

            <div className="text-white space-y-6">
              <div className="space-x-6">
                <span className="text-[18px] font-[600]">100% Mobile Friendly</span>
                <span className="text-[18px] font-[600]">Stunning Design</span>
              </div>
              <div className="space-x-6">
                <span className="text-[18px] font-[600]">Conversion Friendly Layout</span>
                <span className="text-[18px] font-[600]">Effective Call to Action</span>
              </div>
            </div>


            <div  className="pt-10">
                <button className="bg-[#FFFFFF] px-[40px] py-[16px] rounded-[50px]">
                Get free consultation
                </button>
            </div>
          </div>

          <form
            action="submit "
            className=" bg-[#2E2E2E] rounded-[5px] px-[14px] py-[40px]"
          >
            <div className="flex flex-col  text-center ">
              <span className=" text-[16px] sm:text-[20px]  font-[800] text-[#FFFFFF]">
                Book Free Consultation
              </span>
              <p className=" text-[12px] sm:text-[14px] font-[500] text-[#FFFFFF] text-center">
                Fill Out the Form and Our Expert Will Contact You Within 24hrs{" "}
              </p>
            </div>

            <div className="flex  flex-col  space-y-5 pt-10">
              <div className="flex  justify-between">
                <input
                  className=" text-[11px] sm:text-[14px] px-[6px] py-[6px] sm:px-[10px] sm:py-[10px] rounded-[6px] focus:outline-none "
                  type="text"
                  placeholder="FirstName*"
                />

                <input
                  className="  text-[11px] sm:text-[14px] px-[6px] py-[6px] sm:px-[10px] sm:py-[10px] rounded-[6px] focus:outline-none "
                  type="email"
                  placeholder="Email*"
                />
              </div>

              <div className="flex  justify-between">
                <input
                  className="text-[11px] sm:text-[14px] px-[6px] py-[6px] sm:px-[10px] sm:py-[10px] rounded-[6px] focus:outline-none"
                  type="number"
                  placeholder="Phone Number*"
                />

                <input
                  className=" text-[11px] sm:text-[14px] px-[6px] py-[6px] sm:px-[10px] sm:py-[10px] rounded-[6px] focus:outline-none"
                  type="text"
                  placeholder="Company Name*"
                />
              </div>
              <input
                type="text"
                placeholder="Your Requirement*"
                className="text-[11px] sm:text-[14px] px-[6px] py-[6px] sm:px-[10px] sm:py-[10px] rounded-[6px] flex  focus:outline-none"
              />

              <button className="text-[11px] sm:text-[14px] px-[6px] py-[6px] sm:px-[10px] sm:py-[10px]  font-[700] text-white bg-[#4687C7]  rounded-[6px]">
                Submit Your Requirement!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Webdesignbanner;
