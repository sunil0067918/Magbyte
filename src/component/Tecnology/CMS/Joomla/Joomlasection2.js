import React from "react";
import img1 from "../Joomla/Joomlasectionsimages/images2.png";

const Joomlasection2 = () => {
  return (
    <div>
      <div className=" flex justify-center py-10 px-4">
        <div className=" lg:w-[80%] flex  flex-col items-center">
          <span className="lg:text-[36px] text-center text-[20px]">
            Why Choose Joomla Web CMS Development?
          </span>
          <div className=" pt-10 flex flex-col lg:flex-row gap-20  ">
            <div className=" flex flex-col gap-5">
              <div className="flex  flex-col lg:w-[600px] gap-2">
                <span className="lg:text-[24px] text-[14px]  font-[600] text-blue-800">
                  Multilingual
                </span>
                <p className="lg:text-[16px] text-[12px]">
                  Expand your site's reach and accessibility to a larger
                  audience by supporting over 64 languages, ensuring a more
                  inclusive and global user experience.
                </p>
              </div>

              <div className="flex  flex-col lg:w-[600px]  gap-2">
                <span className="lg:text-[24px] text-[14px]  font-[600] text-blue-800">
                  Vibrant Community
                </span>
                <p className="lg:text-[16px] text-[12px]">
                  Backed by an enthusiastic and powerful community ready to
                  support your Joomla project.
                </p>
              </div>

              <div className="flex  flex-col lg:w-[600px]  gap-2">
                <span className="lg:text-[24px] text-[14px]  font-[600] text-blue-800">
                  Fast Upgrade
                </span>
                <p className="lg:text-[16px] text-[12px]">
                  Joomla features a 'one-click upgrade' system. The built-in
                  updater includes an automated checker that notifies you of
                  available updates, making it easy to keep your site up to date
                </p>
              </div>

              <div className="flex  flex-col lg:w-[600px]  gap-2">
                <span className="lg:text-[24px] text-[14px]  font-[600] text-blue-800">
                  Smart Search
                </span>
                <p className="lg:text-[16px] text-[12px]">
                  Advanced search options, smart indexing, auto suggest searches
                  enables quick data search
                </p>
              </div>
            </div>

            <div className=" flex flex-col gap-6">
              <div className="flex  flex-col lg:w-[600px]  gap-2">
                <span className="lg:text-[24px] text-[14px]  font-[600] text-blue-800">
                  Integrated Help System
                </span>
                <p className="lg:text-[16px] text-[12px]">
                  Expand your site's reach and accessibility to a larger
                  audience by supporting over 64 languages, ensuring a more
                  inclusive and global user experience.
                </p>
              </div>

              <div className="flex  flex-col lg:w-[600px]  gap-2">
                <span className="lg:text-[24px] text-[14px]  font-[600] text-blue-800">
                  Move Online in Seconds
                </span>
                <p className="lg:text-[16px] text-[12px]">
                  Get online in seconds with a quick and easy setup, allowing
                  you to launch your site effortlessly.
                </p>
              </div>

              <div className="flex  flex-col lg:w-[600px]  gap-2">
                <span className="lg:text-[24px] text-[14px]  font-[600] text-blue-800">
                  Mobile-friendly
                </span>
                <p className="lg:text-[16px] text-[12px]">
                  All available templates are fully responsive, ensuring your
                  site looks great and functions seamlessly on all mobile
                  devices.
                </p>
              </div>

              <div className="flex  flex-col lg:w-[600px]  gap-2">
                <span className="lg:text-[24px] text-[14px]  font-[600] text-blue-800">
                  Powerful Extensions
                </span>
                <p className="lg:text-[16px] text-[12px]">
                  You can easily expand your website and enhance its
                  functionality at any time, offering limitless growth and
                  customization options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" relative  sm:h-[880px] lg:h-[440px] h-[400px] px-1 bg-blue-600 flex justify-center items-center "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${img1})`,

          backgroundSize: `contain`,
        }}
      >
        <div className="lg:w-[90%] flex items-center flex-col gap-5 ">
          <span className="  text-gray-200 lg:text-[36px] text-[20px] text-center font-[600]">
            Create a powerful CMS with expert Joomla developers
          </span>
          <p className="text-white text-center lg:text-[18px] text-[14px]">
            Leverage decades of experience in the software development industry
            with Joomla designers who specialize in creating cost-effective,
            high-value solutions that help clients maximize ROI and gain a
            competitive edge in the market
          </p>
          <button className="lg:px-5 px-3  lg:py-3 py-1 scale-105 lg:text-[18px] text-[14px] rounded-full bg-white  capitalize">
            Hire joomla devlopers
          </button>
        </div>
      </div>

      <div className=" flex justify-center lg:py-6 px-3">
        <div className="lg:w-[90%] flex flex-col items-center justify-center ">
          <div className="flex flex-col gap-3">
            <span className=" text-[20px] lg:text-[36px] flex  font-[600] text-center text-blue-500">
              Custom Joomla Web Development – Hire Magbytes for Expert Solutions
            </span>
            <p className="lg:text-[18px] text-[12px] text-center  ">
              Looking for custom Joomla web development? Hire Magbytes to create
              tailored, high-performance Joomla websites that meet your unique
              needs and drive business success.
            </p>
          </div>

          <ul className="list-disc flex flex-col pl-4 lg:flex-row gap-20 pt-10 lg:text-[18px] text-[14px]">
            <li className="flex flex-col  gap-3">
              <li>Clarity and Efficient Processes</li>
              <li>Effortless Communication</li>
              <li>Adaptable Engagement Models</li>
              <li>24 x 7 Support</li>
            </li>

            <li className="flex flex-col gap-3 ">
              <li>Safe and Protected Development Environment</li>
              <li>Unified Infrastructure </li>
              <li>Cutting-Edge Technologies and Top-Quality Standards</li>
              <li>Rigorous Quality Standards</li>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Joomlasection2;
