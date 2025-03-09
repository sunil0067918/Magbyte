import React from "react";
import img from "../../CMS/Craft/CMSsectionimages/images1.png";
import img1 from "../../CMS/Craft/CMSsectionimages/images2.png"

const Craftsection2 = () => {
  return (
    <div>
      <div
        className=" relative  sm:h-[880px] lg:h-[540px] h-[800px] px-3 bg-blue-600 flex justify-center pt-10 lg:pt-16 "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${img})`,

          backgroundSize: `cover`,
        }}
      >
        <div className="lg:w-[80%] items-center flex flex-col ">
          <div className=" flex flex-col gap-5 ">
            <span className="text-white text-center lg:text-[36px] font-[600]">
              CMS Website Development – Perks
            </span>
            <p className="text-white text-center">
              Investing in dynamic Content Management System (CMS) solutions
              enables systematic content deployment across various platforms,
              incorporating essential features such as content authorization,
              workflow approvals, and content editing. These functionalities
              enhance content governance, streamline approval processes, and
              facilitate efficient content updates
            </p>
          </div>

          <ul className="list-disc flex lg:space-x-20 pl-3 gap-4 pt-3 text-[15px]    text-white lg:text-[20px]  lg:flex-row flex-col">
            <li className="flex flex-col gap-4">
              <li>Process Automation for Time and Cost Savings</li>
              <li>Extensive Template Selection</li>
              <li>Full Functional Control</li>
              <li>Unlimited Page Access</li>
              <li>SEO Optimization for Enhanced Visibility</li>
            </li>

            <li className="flex flex-col gap-4">
              <li>Comprehensive Media Storage</li>
              <li>User-Friendly Content Management</li>
              <li>Autonomous Business Management</li>
              <li>Customization for Competitive Advantage</li>
              <li>Regular Security Updates</li>
            </li>
          </ul>
        </div>
      </div>

      <div className=" flex justify-center bg-slate-100 lg:py-10 py-3">
        <div className="w-[90%] flex lg:flex-row flex-col">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-5">
              <span className="lg:text-[28px] text-[20px] text-center">Why Should You Hire Dedicated CMS Developers?</span>
              <p  className="lg:text-[18px] text-[14px] text-center">
                Access a comprehensive suite of CMS development services to
                obtain customized CMS solutions tailored to your business needs.
                Enhance the efficiency of managing your content and enterprise
                data through streamlined processes and user-friendly interfaces.
              </p>
            </div>

            <ul className="flex gap-10 list-disc text-[12px] lg:text-[18px] pl-3 ">
              <li className="flex-col flex gap-4">
                <li>Complete Development Process</li>
                <li>Agile Development Methodology</li>
                <li>Comprehensive Quality Assurance</li>
                <li>Customized CMS Solutions</li>
                <li>Risk Mitigation</li>
              </li>

              <li  className="flex-col flex gap-4">
                <li>Accelerated Time-to-Market</li>
                <li>Dedicated Development Team</li>
                <li>Value-Based Engagement Models</li>
                <li>Significant Cost Savings</li>
                <li>Confidential Development Process</li>
              </li>
            </ul>
          </div>

          <img alt="" src={img1} className="w-[1000px]" />
        </div>
      </div>
    </div>
  );
};

export default Craftsection2;
