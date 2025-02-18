import React from "react";
import img1 from "../Mangento/bannerimages/images1.png";
import img2 from "../images/images13.png";

const Mangentobanner = () => {
  return (
    <div>
      <div
        className=" relative  sm:h-[880px] lg:h-[580px] h-[790px]  justify-center items-center  bg-blue-600 flex  "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${img1})`,
          backgroundSize: `cover`,
        }}
      >
        <div className="  absolute w-[90%] flex gap-14 sm:items-baseline lg:items-center rounded-[5px] lg:flex-row flex-col justify-between">
          <div>
            <h1 className="text-white lg:text-[40px] text-[20px] font-[400] lg:font-[800]     ">
              Adobe Commerce and Magento <br />
              <span className="text-orange-500  animate-pulse">
                Development
              </span>
            </h1>
            <span className="text-white text-[18px] font-[500]">
              Hire Certified, Highly Experienced Adobe Commerce Developers
            </span>

            <div className="flex  pt-10 text-white gap-10">
              <div className="space-y-4">
                <div>
                  <span className="  text-[10px]  lg:font-[500] font-[300] lg:text-[20px]">Adobe Commerce Design & Customization</span>
                </div>

                <div >
                  <span className="  text-[10px]  lg:font-[500] font-[300] lg:text-[20px]"> Adobe Commerce Migration & Upgrade</span>
                </div>

                <div>
                  <span className="  text-[10px]  lg:font-[500] font-[300] lg:text-[20px]">Adobe Commerce Mobile</span>
                </div>
              </div>


              <div className="space-y-4">
                <div>
                  <span className="  text-[10px]  lg:font-[500] font-[300] lg:text-[20px]">Adobe Commerce Marketplace Integration</span>
                </div>

                <div>
                  <span className="  text-[10px]  lg:font-[500] font-[300] lg:text-[20px]">Adobe Commerce Multi-Store</span>
                </div>

                <div>
                  <span className="  text-[10px]  lg:font-[500] font-[300] lg:text-[20px]">Adobe Commerce Headless</span>
                </div>
              </div>
            </div>
          </div>

          <form
            action="submit "
            className=" bg-[#2E2E2E] rounded-[5px] px-[14px] py-[40px]"
          >
            <div className="flex flex-col  text-center ">
              <span className=" text-[16px] sm:text-[20px]  font-[800]  text-orange-500 ">
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

              <button className="text-[11px] sm:text-[14px] px-[6px] py-[6px] sm:px-[10px] sm:py-[10px]  font-[700] text-white  bg-orange-500 animate-pulse   rounded-[6px]">
                Submit Your Requirement!
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-[#F9F9FF] py-10 flex justify-center">
        <div className="w-[90%] py-4 lg:py-16">
          <span className="lg:text-[28px] text-[20px] font-[400] lg:font-[600] flex justify-center ">
            Adobe Commerce and Magento Development
          </span>

          <div className=" flex items-center gap-10 pt-10 flex-col lg:flex-row">
            <div className=" pt-10 lg:w-[50%] space-y-4">
              <span className="lg:text-[45px] text-[25px] font-[500] lg:font-[800]">
                Unleash the power of Magento and be limitless
              </span>

              <p className="text-gray-500  font-[300] lg:font-[500] lg:text-[18px] text-[13px]">
                <b> Magento 2(Adobe commerce)</b> is the ideal open-source
                eCommerce platform for an e-commerce website, as it's
                exceptional with different traffic features. <b>Magento 2</b>{" "}
                features make it the most favored internet business stage among
                e-commerce website owners. Our specialists can convey an
                exhaustive index of <b> Magento development </b> services,
                including strategy, executions, integration, design, migrations,
                and updates as well as 24x7 support and maintenance. We are
                specialists with respect to <b>eCommerce and Magento</b>{" "}
                strategically and technically
              </p>

              <p className=" border-[0.5px] px-[10px]  py-8 rounded-md  font-[300] lg:font-[500] lg:text-[18px] text-[13px]  shadow-md  text-gray-500 ">
                Being digitized generally changes the manner in which
                organizations approach their clients and the best outcomes are
                accomplished by taking part in an information driven process
                that brings design, development, and strategy together. We
                construct a site that is not difficult to refresh, drives
                changes, and catches your story.
              </p>

              <p className=" border-[0.5px] px-[10px] py-8 rounded-md  shadow-md text-gray-500  font-[300] lg:font-[500] lg:text-[18px] text-[13px]">
                We view our commitment as connections not seller arrangements.
                In addition to what we produce, we additionally tell our
                customers about the best digital practices along the way.
              </p>
            </div>

            <img
              alt=""
              src={img2}
              className="lg:w-[50%]  rounded-md  animate-pulse"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))`,
                backgroundSize: `cover`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mangentobanner;
