import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Flutterfaq = () => {
  const [isOpen, setIsOpen] = useState(0);
  return (
    <div>
      <div className="flex  justify-center py-8  lg:py-16">
        <div className="lg:w-[80%] px-3">
          <div className="text-center flex justify-center">
            <span className="lg:text-[28px] text-[20px]  font-[600]">
              Android Development Services FAQ
            </span>
          </div>

          <div className="pt-10">
            <div className="border border-gray-300 bg-gray-50 lg:px-5 lg:py-2 px-2 rounded-md flex-col space-y-8 shadow-md">
              <div
                className="flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                onClick={() => (isOpen === 1 ? setIsOpen(0) : setIsOpen(1))}
              >
                <span className="text-gray-800 lg:text-[16px] text-[14px] font-semibold">
                  How can I hire a Flutter developer from Magbyte?
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
                  Hiring a Flutter developer from Magbyte is simple and
                  efficient. First, reach out to our team to discuss your
                  project requirements and the specific skills you need for your
                  app. We’ll then match you with one of our experienced Flutter
                  developers who aligns with your needs. Whether you require
                  full-time, part-time, or hourly engagement, we offer flexible
                  hiring options to suit your project. Once onboard, our
                  developer will work closely with you to ensure the development
                  process meets your expectations, delivering high-quality,
                  cross-platform mobile applications. With Magbyte, you can
                  easily scale your team and get started on your Flutter app
                  development right away.
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
                  How long does it take to develop a Flutter application?
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
                  The time it takes to develop a Flutter application depends on
                  several factors, such as the complexity of the app, the number
                  of features, the design requirements, and the platform
                  specifications. Generally, a simple app with basic features
                  can take anywhere from 2 to 4 weeks to develop, while a more
                  complex app with advanced functionality and custom features
                  could take 2 to 6 months or longer. At Magbyte, we provide a
                  more accurate timeline based on your specific project scope.
                  After discussing your requirements and understanding the
                  details, we can give you a clear estimate of how long it will
                  take to complete your Flutter app.
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
                  How much does Flutter app development cost? Are there hidden
                  costs?
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
                  The cost of Flutter app development depends on factors such as
                  the app's complexity, the features required, the developer's
                  experience, and the development team's location. Typically,
                  the cost can range from $5,000 to $50,000 or more. A basic app
                  with limited features will cost less, while more complex apps
                  with advanced functionality and integrations will have a
                  higher price tag. At Magbyte, we provide a detailed project
                  estimate upfront, so you know exactly what to expect. We
                  ensure transparency throughout the process, so there are no
                  hidden costs. Additional expenses may arise if you require
                  extra features, ongoing maintenance, or if the project scope
                  changes during development. However, we work with you to keep
                  costs within your budget while delivering a high-quality
                  Flutter app.
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
                  Can you assist in integrating Flutter with other systems?
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
                  Yes, at Magbyte, we can assist in integrating Flutter with
                  other systems. Whether you need to connect your Flutter app
                  with third-party APIs, databases, backend services, or other
                  enterprise systems, our team has the expertise to ensure
                  smooth and seamless integration. We can help integrate
                  functionalities like payment gateways, real-time chat, cloud
                  services, analytics, and much more. With our experience in
                  Flutter and system integration, we ensure that your app works
                  harmoniously with your existing infrastructure, providing a
                  cohesive experience for your users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flutterfaq;
