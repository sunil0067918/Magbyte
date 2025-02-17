import React from "react";
import img1 from "../../../images/ServicesEcommarceimages/Serviceecoportfoliyoimages/images1.png";

const Ecomportfoliyo = () => {
  return (
    <div className="bg-[#D9D9D9]   flex justify-center py-[100px]">
      <div className="w-[90%] flex  gap-16 flex-col lg:flex-row">
        <div className=" space-y-10 flex flex-col ">
          <div className="space-y-6">
            <span className="font-[500]  text-[16px] sm:text-[24px]">e-Commerce Portfolio</span>
            <span className="font-[400]   text-[16px] sm:text-[24px]">Lorem Ipsum</span>
            <p className="   text-[10px]  sm:text-[16px] font-[500]">
              <b>What We Did:</b> Magento to BigCommerce Migration, Data
              Migration, BigCommerce Store Design, Custom Theme Development,
              SEO, Integration.
            </p>
          </div>

          <div className="">
            <div className=" flex flex-col space-y-5">
              <div>
                <div className="flex justify-between">
                  <span   className="sm:text-[16px] text-[12px]">INCREASED CONVERSIONS</span>
                  <span className="sm:text-[16px] text-[12px]">+85%</span>
                </div>

                <svg
                  width="570"
                  height="1"
                  viewBox="0 0 570 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="my-5 w-[384px] sm:w-[569px]"
                >
                  <line
                    opacity="0.4"
                    y1="0.5"
                    x2="569.708"
                    y2="0.5"
                    stroke="black"
                  />
                </svg>
              </div>

              <div className="">
                <div className="flex justify-between">
                  <span className="sm:text-[16px] text-[12px]">INCREASED REVENUE </span>
                  <span className="sm:text-[16px] text-[12px]">+85%</span>
                </div>

                <svg
                  width="570"
                  height="1"
                  viewBox="0 0 570 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="my-5 w-[384px] sm:w-[569px]"
                >
                  <line
                    opacity="0.4"
                    y1="0.5"
                    x2="569.708"
                    y2="0.5"
                    stroke="black"
                  />
                </svg>
              </div>

              <div>
                <div className="flex justify-between">
                  <span className="sm:text-[16px] text-[12px]">INCREASED AOV</span>
                  <span className="sm:text-[16px] text-[12px]">+85%</span>
                </div>

                <svg
                  width="570"
                  height="1"
                  viewBox="0 0 570 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="my-5 w-[384px] sm:w-[569px]"
                >
                  <line
                    opacity="0.4"
                    y1="0.5"
                    x2="569.708"
                    y2="0.5"
                    stroke="black"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className=" flex gap-5">
            <button className="border-[1.5px] rounded-full border-[#000000] text-[#0B56E4] hover:border-[#0B56E4] px-[12px] py-[12px] sm:h-[44px] sm:w-[44px]">
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.1661 10.5097L1.1131 10.2092"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 19L1.1131 10.2092L9.27917 1.71896"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <button className="border-[1.5px] rounded-full border-[#000000] text-[#0B56E4] hover:border-[#0B56E4] px-[12px] py-[12px] h-[44px] w-[44px]">
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.833934 9.49026L16.8869 9.79078"
                  stroke="#0B56E4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 1L16.8869 9.79078L8.72083 18.281"
                  stroke="#0B56E4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div>
          <img alt="" src={img1} />
        </div>
      </div>
    </div>
  );
};

export default Ecomportfoliyo;
