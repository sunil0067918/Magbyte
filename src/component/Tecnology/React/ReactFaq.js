import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const ReactFaq = () => {
  const [isOpen, setIsOpen] = useState(0);
  return (
    <div className="">
      <div className="flex  justify-center py-8  lg:py-16">
        <div className="lg:w-[80%] px-3">
          <div className="text-center flex justify-center">
            <span className="lg:text-[28px] text-[20px]  font-[600]">
              React Js Development FAQ
            </span>
          </div>

          <div className="pt-10">
            <div className="border border-gray-300 bg-gray-50 lg:px-5 lg:py-2 px-2 rounded-md flex-col space-y-8 shadow-md">
              <div
                className="flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                onClick={() => (isOpen === 1 ? setIsOpen(0) : setIsOpen(1))}
              >
                <span className="text-gray-800 lg:text-[16px] text-[14px] font-semibold">
                  What is React js
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
                  ReactJS is a popular open-source JavaScript library used for
                  building user interfaces, primarily for single-page
                  applications (SPAs) where you need a fast, interactive
                  experience. Developed and maintained by Facebook, React allows
                  developers to create large web applications that can update
                  and render efficiently in response to data changes.
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
                  Why is React.js the right choice for my project?
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
                  React.js is an excellent choice for your project for several
                  reasons: High Performance: With its Virtual DOM and efficient
                  rendering, React ensures fast performance, even for complex
                  applications with large datasets. Component-Based
                  Architecture: React’s modular, reusable components make it
                  easy to maintain, scale, and manage your project, leading to
                  cleaner and more organized code. Strong Community and
                  Ecosystem: React has a vast, active community and a wealth of
                  resources, libraries, and tools, ensuring long-term support
                  and continuous innovation.
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
                  What kind of applications can be built with React.js?
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
                  React.js is versatile and can be used to build various web
                  applications, such as single-page applications (SPAs),
                  progressive web apps (PWAs), e-commerce platforms, social
                  media sites, dashboards, and more. Its flexibility and
                  performance make it ideal for both simple and complex
                  projects.
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
                  How does React.js enhance the performance of web applications?
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
                  React.js improves the performance of web applications through
                  several key features: Virtual DOM: React uses a Virtual DOM,
                  which updates only the parts of the page that have changed,
                  instead of re-rendering the entire UI. This minimizes the
                  number of updates to the real DOM, improving performance,
                  especially in large applications. Efficient Reconciliation:
                  React uses a reconciliation algorithm to compare the current
                  Virtual DOM with a new one, determining the most efficient way
                  to update the real DOM. This results in faster rendering and
                  less unnecessary processing. Code Splitting: React allows for
                  code splitting, meaning only the necessary code is loaded when
                  needed. This reduces the initial load time and improves the
                  application's performance, especially for larger projects.
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
                  Is React.js suitable for mobile app development?
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
                  Yes, React.js can be used for mobile app development through
                  React Native, a framework that allows you to build
                  cross-platform mobile applications for iOS and Android. React
                  Native uses the same principles as React.js, such as a
                  component-based architecture and a declarative UI, but it
                  compiles to native mobile code, enabling high-performance,
                  responsive mobile apps. This allows developers to write most
                  of their code once and deploy it on multiple platforms, saving
                  time and resources.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ReactFaq;
