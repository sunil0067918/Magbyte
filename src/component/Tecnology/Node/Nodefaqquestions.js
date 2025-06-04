import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Nodefaqquestions = () => {
  const [isOpen, setIsOpen] = useState(0);
  return (
    <div className="">
      <div className="flex  justify-center  py-16">
        <div className="lg:w-[80%] px-3">
          <div className="text-center flex justify-center">
            <span className="text-[28px]  font-[600]">
              Node Development Services FAQ
            </span>
          </div>

          <div className="pt-10">
            <div className="border border-gray-300 bg-gray-50 lg:px-5 lg:py-2 px-2 rounded-md flex-col space-y-8 shadow-md">
              <div
                className="flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                onClick={() => (isOpen === 1 ? setIsOpen(0) : setIsOpen(1))}
              >
                <span className="text-gray-800 lg:text-[16px] text-[14px] font-semibold">
                  What is NodeJs?
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
                  Node.js is a JavaScript runtime environment built on Chrome’s
                  V8 engine, allowing server-side scripting to create scalable
                  network applications. It enables developers to use a single
                  programming language (JavaScript) for both client-side and
                  server-side development, streamlining the development process.
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
                  What is the Cost of a Node.js Development Project?
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
                onClick={() => (isOpen === 3 ? setIsOpen(0) : setIsOpen(3))}
              >
                <span className="text-gray-800 lg:text-[16px] text-[14px] font-semibold">
                  What are the Benefits of Outsourcing Node.js Development?
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
                  Outsourcing Node.js development offers cost savings, access to
                  specialized skills, scalability, and faster project delivery.
                  It enables your team to focus on core business functions while
                  benefiting from the latest technologies and global expertise.
                  Moreover, it minimizes risks by relying on experienced
                  professionals, ultimately improving project quality and
                  results.
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
                  Why Opt for Node.js Instead of Python for Web App Development?
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
                  Opt for Node.js over Python for web app development due to its
                  non-blocking, event-driven architecture, which supports
                  real-time applications and high concurrency. Since Node.js
                  uses JavaScript, it enables full-stack development with a
                  single language. Additionally, its powerful npm package
                  manager and extensive ecosystem speed up development and
                  scalability, making it perfect for high-performance
                  applications.
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
                  How do you choose the best NodeJS development company for your
                  project?
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
                  Opt for Node.js over Python for web app development due to its
                  non-blocking, event-driven architecture, which supports
                  real-time applications and high concurrency. Since Node.js
                  uses JavaScript, it enables full-stack development with a
                  single language. Additionally, its powerful npm package
                  manager and extensive ecosystem speed up development and
                  scalability, making it perfect for high-performance
                  applications.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-10">
            <div className="border border-gray-300 bg-gray-50 lg:px-5 lg:py-2 px-2 rounded-md flex-col space-y-8 shadow-md">
              <div
                className="flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                onClick={() => (isOpen === 6 ? setIsOpen(0) : setIsOpen(6))}
              >
                <span className="text-gray-800 lg:text-[16px] text-[14px] font-semibold">
                  For NodeJS Web Application Development, Why Select Nimap
                  Infotech?
                </span>
                <FontAwesomeIcon
                  icon={isOpen === 6 ? faMinus : faPlus}
                  className="text-blue-500 transition-all duration-300"
                />
              </div>

              {/* Smooth Transition */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  isOpen === 6 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 md:text-[16px] text-[12px]">
                  Choose Nimap Infotech for Node.js web application development
                  for their expertise, cost-effective solutions, timely
                  delivery, and a proven track record of successful projects
                  tailored to client needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nodefaqquestions;
