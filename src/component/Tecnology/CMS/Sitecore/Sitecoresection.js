import React from "react";
import img from  "../../CMS/Sitecore/Sitecoresectionimages/images.png"
const Sitecoresection = () => {
  return (
    <div>
      <div className="flex justify-center py-4 lg:py-8 px-5">
        <div className=" bg-gray-800 text-white lg:w-[90%] rounded-md py-5 px-3 lg:py-16 lg:px-5 items-center flex flex-col gap-5  justify-center ">
          <div className="flex flex-col items-center gap-5 lg:w-[800px] ">
            <span className=" lg:text-[28px] text-[18px] font-[600]  text-center">
              Maximize Your Business ROI with Magbyte's Expert Sitecore
              Development Services
            </span>
            <p className=" lg:text-[18px] text-[12px] text-center text-gray-100">
              Get started with Magbyte’s Sitecore CMS development without delay
              to streamline your content presentation, strategically design your
              marketing campaigns, and convert traffic into valuable leads.
            </p>
          </div>

          <button className="bg-yellow-600 text-black lg:text-[16px]  text-[14px] lg:px-5 lg:py-3 px-3 py-1 rounded-md hover:scale-105">
            Lets' Get Started
          </button>
        </div>
      </div>
      <div className=" flex justify-center py-4 px-4 lg:py-8">
        <div className="lg:w-[90%] flex gap-20 flex-col lg:flex-row">
          <div className=" flex flex-col gap-5 ">
            <div className="flex flex-col gap-3">
              <span className="lg:text-[24px] text-[18px] font-[600] ">Why Choose Sitecore?</span>
              <p className="lg:text-[16px] text-[12px]">
                Magbyte leverages the power of Sitecore to deliver exceptional,
                personalized digital experiences that drive business growth.
                Sitecore's advanced features, such as personalized content
                delivery, omnichannel integration, and robust analytics, enable
                Magbyte to craft seamless, engaging experiences for your
                customers. Whether you’re looking to optimize content
                management, improve customer interactions, or gain valuable
                insights from user behavior, Magbyte ensures that Sitecore is
                fully optimized to meet your business goals. With our expertise
                in Sitecore development, we help you scale effortlessly,
                integrate with existing systems, and deliver a secure, reliable
                platform that evolves with your business needs. Let Magbyte
                unlock the full potential of Sitecore for your business success.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="lg:text-[24px] text-[18px] font-[600] ">Headless Integration with Magbyte</span>
              <p className="lg:text-[16px] text-[12px]">
                Magbyte specializes in headless integration, providing you with
                a flexible and scalable digital experience. By decoupling the
                backend from the frontend, we enable seamless content delivery
                across various channels, including websites, mobile apps, and
                IoT devices. Our team integrates headless CMS platforms, such asx
                Umbraco and Sitecore, with your existing systems and
                technologies to ensure a unified, efficient, and responsive
                solution. This approach allows for greater flexibility, faster
                updates, and a more personalized user experience, helping your
                business stay ahead in the ever-evolving digital landscape. Let
                Magbyte empower your brand with a future-ready headless
                integration solution that adapts to your unique business needs.
              </p>
            </div>
          </div>
          <img src={img}  alt="" className=""/>
        </div>
      </div>
    </div>
  );
};

export default Sitecoresection;
