import React from "react";
import img1 from "../Digitalmarketing/Images/images1.png";
import img2 from "../Digitalmarketing/Images/images2.png";
import img3 from "../Digitalmarketing/Images/images3.png";

const Digitalbanner = () => {
  return (
    <div>
      <div
        className=" relative lg:h-[540px] h-[800px] sm:h-[700px]  bg-blue-600 flex justify-center  items-baseline lg:tems-center pt-[20px] sm:pt-0 "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${img1})`,
          backgroundSize: `cover`,
        }}
      >
        <div className=" absolute w-[90%] flex gap-6 justify-between sm:items-baseline lg:items-center pt-6   rounded-[5px] lg:flex-row flex-col ">
          <div className=" flex flex-col items-start space-y-4">
            <div className=" space-y-4 flex flex-col  ">
              <span className=" text-[16px] sm:text-[24px] font-[600] text-white">
                Digital Marketing Agency driven by
              </span>
              <span className="lg:text-[32px] text-[20px]   font-[800] text-white">
                Relationships& Results
              </span>
              <p className=" text-[12px] sm:text-[16px]  font-[500] text-white md:w-[700px] text-wrap">
                Magebytes tailor-made marketing strategies are the proven path
                to better ROI, revenue & growth. Partner with the SEM agency
                that will help you soar above the rest.
              </p>
            </div>

            <button className=" text-[12px] lg:text-[18px]  font-[600] px-[20px]  py-[10px]  lg:px-[40px] lg:py-[16px] rounded-[50px] bg-white text-black">
              <span className=" flowing-text"> Free Consultation</span>
            </button>
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

      <div className="flex justify-center my-5  lg:my-10   ">
        <div className="w-[90%]   lg:bg-gradient-to-r  from-[#3F4864]  to-[white] pt-7    bg-gradient-to-b  lg:from-[#3F4864]  lg:to-[white] border rounded-[8px] lg:py-0 lg:px-0 ">
          <div className="flex justify-between items-center flex-col lg:flex-row">
            <div className="lg:w-[655px] lg:pl-[50px] flex items-center flex-col px-[8px]">
              <div className=" relative">
                <span className="lg:text-[32px]  text-[24px] font-[500] lg:font-[700] text-white">
                  Hello there!
                </span>
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" absolute top-[-17px] left-[-17px]"
                >
                  <mask id="path-1-inside-1_619_9198" fill="white">
                    <path d="M0 18.5C0 8.28273 8.28273 0 18.5 0C28.7173 0 37 8.28273 37 18.5C37 28.7173 28.7173 37 18.5 37C8.28273 37 0 28.7173 0 18.5Z" />
                  </mask>
                  <path
                    d="M-2 17.5C-2 6.73045 6.73045 -2 17.5 -2C28.2696 -2 37 6.73045 37 17.5V18.5C37 9.3873 28.7173 2 18.5 2C9.3873 2 2 9.3873 2 18.5L-2 17.5ZM37 37H0H37ZM17.5 37C6.73045 37 -2 28.2696 -2 17.5C-2 6.73045 6.73045 -2 17.5 -2L18.5 2C9.3873 2 2 9.3873 2 18.5C2 28.7173 9.3873 37 18.5 37H17.5ZM37 0V37V0Z"
                    fill="#4687C7"
                    mask="url(#path-1-inside-1_619_9198)"
                  />
                </svg>
              </div>

              <p className="lg:text-[20px]  text-[16px] font-[300] lg:font-[400] text-white">
                As an Magebytes agency that believes results are everything, we
                help companies grow through ROI-boosting digital marketing
                programs that make clients smile. 
                <b>
                  Smiling is a very good thing – and we’re glad you’re here.
                </b>
              </p>
            </div>
            <img
              src={img2}
              alt=""
              className="lg:h-[435px] lg:w-[600px]  pt-5 lg:pt-0  object-contain lg:object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center py-16">
        <div className="flex justify-between w-[90%] lg:flex-row flex-col gap-20 ">
          <div className="flex flex-col space-y-11">
            <span className=" text-[24px] font-[400px] lg:text-[32px] lg:font-[600]">
              We help you at every stage of your product marketing
            </span>
            <p className="lg:text-[18px]   text-[14px]  font-[300] lg:font-[400]">
              We develop brands with digital and imaginative perspicuity. Our
              kin’s first way to deal with digital services consolidates
              creativity with innovation to construct modified plans that follow
              through on your business goals.
            </p>
            <p className="lg:text-[18px]   text-[14px]  font-[300] lg:font-[400]">
              Get more qualified traffic based on the search items that make the
              biggest difference to your business. We accomplish quantifiable
              outcomes by chipping away at each factor that impacts SERPs.
              Full-channel advanced promoting services to arrive at your
              interest group without overpowering. We recognize gaps in your
              present showcasing system, then, at that point, counsel you on
              what you want and how we will get it going – all before the
              agreement is agreed upon.
            </p>

            <p className="lg:text-[18px]   text-[14px]  font-[300] lg:font-[400]">
              Our group is inventive, open, business shrewd, and responsible. We
              will assimilate your plan of action while utilizing digital
              channels to help you procure and hold clients. Complete digital
              marketing services to reach your target audience without
              overpowering.
            </p>
          </div>

          <img className="" src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Digitalbanner;
