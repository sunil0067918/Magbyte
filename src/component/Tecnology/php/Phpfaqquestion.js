import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Phpfaqquestion = () => {
  const [isOpen, setIsOpen] = useState(0);
  return (
    <div className="">
      <div className="flex  justify-center py-8  lg:py-16">
        <div className="lg:w-[80%] px-3">
          <div className="text-center flex justify-center">
            <span className="lg:text-[28px] text-[20px]  font-[600]">
              PHP Development FAQ
            </span>
          </div>

          <div className="pt-10">
            <div className="border border-gray-300 bg-gray-50 lg:px-5 lg:py-2 px-2 rounded-md flex-col space-y-8 shadow-md">
              <div
                className="flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                onClick={() => (isOpen === 1 ? setIsOpen(0) : setIsOpen(1))}
              >
                <span className="text-gray-800 lg:text-[16px] text-[14px] font-semibold">
                  How can I hire a PHP developer from Magbytesx
                </span>
                <FontAwesomeIcon
                  icon={isOpen === 1 ? faMinus : faPlus}
                  className="text-blue-500 transition-all duration-300"
                />
              </div>

              {/* Smooth Transition */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  isOpen === 1 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 md:text-[16px] text-[12px]">
                  Hiring a PHP developer from Magbytes is simple. Just get in
                  touch with us via our contact form. Our team will review your
                  project requirements, share developer profiles that match your
                  needs, and assist you throughout the entire hiring process..
                </p>
              </div>
            </div>
          </div>
          <div className="pt-10">
            <div className="border border-gray-300 bg-gray-50 lg:px-5 lg:py-2 px-2 rounded-md flex-col space-y-8 shadow-md">
              <div
                className="flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                onClick={() => (isOpen === 2 ? setIsOpen(0) : setIsOpen(2))}
              >
                <span className="text-gray-800 lg:text-[16px] text-[14px] font-semibold">
                  How long does it take to build a PHP website?
                </span>
                <FontAwesomeIcon
                  icon={isOpen === 2 ? faMinus : faPlus}
                  className="text-blue-500 transition-all duration-300"
                />
              </div>

              {/* Smooth Transition */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  isOpen === 2 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 md:text-[16px] text-[12px]">
                  The time required to develop a PHP website depends on factors
                  like its complexity, the number of pages, and the technologies
                  used. We are dedicated to meeting your deadlines and will work
                  efficiently to ensure on-time delivery.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-10">
            <div className="border border-gray-300 bg-gray-50 lg:px-5 lg:py-2 px-2 rounded-md flex-col space-y-8 shadow-md">
              <div
                className="flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                onClick={() => (isOpen === 3 ? setIsOpen(0) : setIsOpen(3))}
              >
                <span className="text-gray-800 lg:text-[16px] text-[14px] font-semibold">
                  What is the cost of PHP website development? Are there any
                  hidden fees?
                </span>
                <FontAwesomeIcon
                  icon={isOpen === 3 ? faMinus : faPlus}
                  className="text-blue-500 transition-all duration-300"
                />
              </div>

              {/* Smooth Transition */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  isOpen === 3 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 md:text-[16px] text-[12px]">
                  The cost of PHP website development depends on factors such as
                  design complexity, required features, and project size. We
                  start with a thorough discussion of your needs to provide an
                  accurate estimate. Once we finalize the requirements and
                  pricing, you can be assured there are no hidden costs.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-10">
            <div className="border border-gray-300 bg-gray-50 lg:px-5 lg:py-2 px-2 rounded-md flex-col space-y-8 shadow-md">
              <div
                className="flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                onClick={() => (isOpen === 4 ? setIsOpen(0) : setIsOpen(4))}
              >
                <span className="text-gray-800 lg:text-[16px] text-[14px] font-semibold">
                  Can you help upgrade my website to the latest PHP version?
                </span>
                <FontAwesomeIcon
                  icon={isOpen === 4 ? faMinus : faPlus}
                  className="text-blue-500 transition-all duration-300"
                />
              </div>

              {/* Smooth Transition */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  isOpen === 4 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 md:text-[16px] text-[12px]">
                  Yes, we specialize in upgrading websites to the latest PHP
                  version. Our experienced PHP developers ensure your site stays
                  secure and performs at its best through careful updates and
                  improvements.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-10">
            <div className="border border-gray-300 bg-gray-50 lg:px-5 lg:py-2 px-2 rounded-md flex-col space-y-8 shadow-md">
              <div
                className="flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                onClick={() => (isOpen === 5 ? setIsOpen(0) : setIsOpen(5))}
              >
                <span className="text-gray-800 lg:text-[16px] text-[14px] font-semibold">
                  Can you help upgrade my website to the latest PHP version
                </span>
                <FontAwesomeIcon
                  icon={isOpen === 5 ? faMinus : faPlus}
                  className="text-blue-500 transition-all duration-300"
                />
              </div>

              {/* Smooth Transition */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  isOpen === 5 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 md:text-[16px] text-[12px]">
                  Yes, we specialize in upgrading websites to the latest PHP
                  version. Our expert PHP developers ensure your site stays
                  secure and performs at its best with careful updates and
                  improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phpfaqquestion;
