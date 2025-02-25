import React, { useState } from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pythonfaqquestions = () => {
  const [isOpen, setIsOpen] = useState(0);
  return (
    <div className="flex  justify-center  py-16">
      <div className="lg:w-[80%] px-3">
        <div className="text-center flex justify-center">
          <span className="text-[28px]  font-[600]">
            We're available to help with any questions you have.
          </span>
        </div>

        <div className="pt-10">
          <div className="border border-gray-300 bg-gray-50 lg:px-5 lg:py-2 px-2 rounded-md flex-col space-y-8 shadow-md">
            <div
              className="flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-md"
              onClick={() => (isOpen === 1 ? setIsOpen(0) : setIsOpen(1))}
            >
              <span className="text-gray-800 lg:text-[16px] text-[14px] font-semibold">
                What are the uses of Python?
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
                Python is a versatile, dynamic programming language primarily
                used on the server side. It is commonly employed to develop
                dynamic HTML content. Some of its popular applications include:
                Data analytics Artificial Intelligence and Machine Learning
                projects , Data visualization , Application development , Web
                and game development
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
                What are the various Python frameworks?
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
                ChatGPT said: There are several Python frameworks available for
                web app development. Based on their functionality and key
                features, here are our top five choices: Django Web2Py Flask
                Bottle CherryPy Python services involve the planning, design,
                development, deployment, and maintenance of high-quality
                software products using the Python programming language. The
                goal is to create a custom software solution that meets your
                specific business needs by harnessing the power of this
                versatile scripting language.
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
                Why is Magbytes the best Python web development company to hire?
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
                Magbytes' Python development services offer expert solutions in
                areas like web development, data analysis, automation, and more,
                all using the Python programming language. What sets Magbytes
                apart in the Python development industry is not just the quality
                of our work, but also our approach to tackling challenges and
                collaborating with clients to build lasting partnerships.
                Whether your business is large or small, or located anywhere in
                the world, you can count on us for everything—from web design
                and development to mobile applications and machine learning—to
                create innovative digital experiences.
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
                What is the cost of developing a Python app?
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
                We can't provide a direct answer to this question, as the cost
                of developing a Python application depends on various factors,
                such as the tech stack, project complexity, team size, and the
                features your application needs. To get an accurate estimate for
                your Python project, please contact us with your requirements,
                and we'll provide you with a detailed quote.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 ">
          <div className="border border-gray-300 bg-gray-50 lg:px-5 lg:py-2 px-2 rounded-md flex-col space-y-8 shadow-md">
            <div
              className="flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-md"
              onClick={() => (isOpen === 5 ? setIsOpen(0) : setIsOpen(5))}
            >
              <span className="text-gray-800 lg:text-[16px] text-[14px] font-semibold">
                What is the typical time frame for building a Python
                application?
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
                ChatGPT said: The time required to develop a Python application
                from scratch can vary based on several factors, such as the
                development approach, design complexity, developer experience,
                required features and functionality, testing, and more. Reach
                out to us with your requirements to learn more and get a time
                estimate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pythonfaqquestions;
