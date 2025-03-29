import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Mernnfaq = () => {
  const [isOpen, setIsOpen] = useState(0);
  return (
    <div>
      <div className="flex  justify-center py-8  lg:py-16">
        <div className="lg:w-[80%] px-3">
          <div className="text-center flex justify-center">
            <span className="lg:text-[28px] text-[20px]  font-[600]">
              Laravel Development Services FAQ
            </span>
          </div>

          <div className="pt-10">
            <div className="border border-gray-300 bg-gray-50 lg:px-5 lg:py-2 px-2 rounded-md flex-col space-y-8 shadow-md">
              <div
                className="flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                onClick={() => (isOpen === 1 ? setIsOpen(0) : setIsOpen(1))}
              >
                <span className="text-gray-800 lg:text-[16px] text-[14px] font-semibold">
                  What is the MERN Stack?
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
                  The MERN stack is a powerful set of technologies used for
                  building dynamic, full-stack web applications. It consists of
                  four key components: MongoDB, Express.js, React, and Node.js.
                  MongoDB is a NoSQL database that stores data in a flexible,
                  JSON-like format. Express.js is a back-end framework that runs
                  on Node.js, making server-side development faster and easier.
                  React is a front-end JavaScript library used to build
                  responsive, dynamic user interfaces. Node.js is a JavaScript
                  runtime that allows for efficient, scalable back-end
                  development. Together, these technologies enable developers to
                  create high-performance applications with a unified language,
                  JavaScript, across both the client and server sides.
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
                  Why should I opt for the MERN stack for my projects?
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
                  Choosing the MERN stack for your projects offers several key
                  advantages, making it a popular choice for modern web
                  development. With MongoDB, Express.js, React, and Node.js, the
                  MERN stack provides a seamless, full-stack JavaScript solution
                  that allows for faster development and efficient project
                  management. Since all components are based on JavaScript,
                  developers can use a single language across both the client
                  and server, streamlining the development process. MERN also
                  offers flexibility, scalability, and high performance,
                  enabling you to build dynamic, data-driven applications.
                  Additionally, React's reusable components and Node.js’s
                  scalability make the stack ideal for handling complex,
                  real-time applications. The MERN stack is highly versatile,
                  cost-effective, and well-suited for building robust,
                  responsive applications that meet the needs of today’s digital
                  landscape.
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
                  What types of applications can we create using the MERN stack?
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
                  The MERN stack is versatile and can be used to build a wide
                  range of applications, from simple websites to complex,
                  data-driven platforms. You can develop single-page
                  applications (SPAs) with dynamic user interfaces using React,
                  real-time applications like chat apps, or even e-commerce
                  platforms that require high performance and scalability. The
                  stack is also ideal for building social media platforms,
                  dashboards, content management systems (CMS), and online
                  marketplaces. With MongoDB for flexible data storage,
                  Express.js and Node.js for powerful back-end development, and
                  React for creating interactive front-end experiences, the MERN
                  stack offers the tools to build fast, reliable, and scalable
                  applications tailored to any business need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mernnfaq;
