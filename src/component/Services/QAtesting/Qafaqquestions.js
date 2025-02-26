import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Faq from "../../Faq";

const Qafaqquestions = () => {
  const [isOpen, setIsOpen] = useState(0);
  return (
    <div className="">
      <div className="flex  justify-center  py-16">
        <div className="lg:w-[80%] px-3">
          <div className="text-center flex justify-center">
            <span className="lg:text-[28px]  font-[600]">
              QA and software testing Faq Questions
            </span>
          </div>

          <div className="pt-10">
            <div className="border border-gray-300 bg-gray-50 lg:px-5 lg:py-2 px-2 rounded-md flex-col space-y-8 shadow-md">
              <div
                className="flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                onClick={() => (isOpen === 1 ? setIsOpen(0) : setIsOpen(1))}
              >
                <span className="text-gray-800 lg:text-[16px] text-[14px] font-semibold">
                  What is the distinction between software testing and QA
                  services?
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
                  Software testing and QA (Quality Assurance) services are both
                  integral parts of the software development process, but they
                  differ in their objectives and focus. Software testing is the
                  process of evaluating a software application or system to
                  verify that it functions correctly and meets the specified
                  requirements. This involves running the software through
                  various test scenarios and data to detect defects, errors, or
                  performance issues. Testing can be done manually or through
                  automation, and includes various types such as functional,
                  performance, security, and usability testing. On the other
                  hand, QA services encompass a broader set of activities aimed
                  at ensuring the development process results in high-quality
                  software that aligns with user needs and expectations. QA
                  services cover the entire software development lifecycle, from
                  requirements gathering and design to coding, testing, and
                  deployment. These services include establishing quality
                  standards, conducting reviews and inspections, managing
                  defects, ensuring regulatory compliance, and overseeing
                  testing efforts. In summary, software testing is a specific
                  task within the larger scope of QA services. While testing
                  ensures the software functions as intended, QA services focus
                  on maintaining quality throughout the development process to
                  deliver software that meets user expectations.
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
                  What are the various types of software testing?
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
                  The cost of a Node.js development project can vary
                  significantly based on factors such as project complexity,
                  developer expertise, location, and project duration. Prices
                  can range from a few thousand dollars for simple applications
                  to several hundred thousand dollars for large-scale, complex
                  projects. For a more precise estimate, it's recommended to
                  request a detailed quote from a development company after
                  outlining your specific requirements.
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
                  Why opt for Qualitest for software testing services?
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
                  Qualitest is a top provider of comprehensive software testing
                  services, combining global expertise and cutting-edge
                  automation tools to guarantee quality, faster time to market,
                  and cost optimization. Partnering with Qualitest allows you to
                  accelerate digital transformation through dependable and
                  scalable software testing solutions. Also explore: Game
                  Testing Services, AI in Softwar
                </p>
              </div>
            </div>
          </div>

       
        </div>
      </div>
    </div>
  );
};

export default Qafaqquestions;
