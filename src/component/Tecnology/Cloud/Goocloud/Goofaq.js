import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Goofaq = () => {
  const [isOpen, setIsOpen] = useState(0);
  return (
    <div>
      <div className="flex  justify-center py-8  lg:py-16">
        <div className="lg:w-[80%] px-3">
          <div className="text-center flex justify-center">
            <span className="lg:text-[28px] text-[20px]  font-[600]">
              We're here to answer all your questions.
            </span>
          </div>

          <div className="pt-10">
            <div className="border border-gray-300 bg-gray-50 lg:px-5 lg:py-2 px-2 rounded-md flex-col space-y-8 shadow-md">
              <div
                className="flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                onClick={() => (isOpen === 1 ? setIsOpen(0) : setIsOpen(1))}
              >
                <span className="text-gray-800 lg:text-[16px] text-[14px] font-semibold">
                  Which Google Cloud APIs can be integrated with my platform?
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
                  Google Cloud offers a wide range of APIs that can be
                  seamlessly integrated with your platform to enhance
                  functionality and performance. These APIs cover areas such as
                  machine learning, data storage, analytics, and security,
                  allowing you to leverage powerful tools for your specific
                  business needs. Whether you need to incorporate Google Cloud
                  Storage, BigQuery for data analytics, or AI services like
                  Natural Language or Vision, we can help integrate the right
                  APIs to optimize your platform. Our experts will work with you
                  to identify the most suitable Google Cloud APIs, ensuring
                  smooth integration and improved capabilities for your
                  platform.
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
                  Are you able to manage cross-cloud migration of my existing
                  applications to Google Cloud?
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
                  Yes, we can expertly manage the cross-cloud migration of your
                  existing applications to Google Cloud. Our team specializes in
                  seamlessly transferring workloads, data, and applications from
                  your current cloud environment to Google Cloud, ensuring
                  minimal downtime and disruption. We carefully plan and execute
                  the migration process, optimizing for performance, security,
                  and cost-efficiency. Whether you're moving from AWS, Azure, or
                  an on-premises setup, we ensure that your applications are
                  migrated smoothly and aligned with your business objectives.
                  With our expertise, you can confidently embrace the benefits
                  of Google Cloud without the stress of complex migrations.
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
                  Do your Google Cloud developers work across different time
                  zones?
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
                  Yes, our Google Cloud developers are equipped to work across
                  different time zones to accommodate your business needs. We
                  understand the importance of flexibility and timely support,
                  which is why our team is committed to providing continuous
                  collaboration, no matter your location. With a global
                  presence, we ensure that your projects are managed efficiently
                  and that any issues are addressed promptly, no matter the time
                  zone difference. Whether you're working with clients in
                  various regions or need support outside of regular business
                  hours, our developers are here to ensure your Google Cloud
                  initiatives run smoothly around the clock.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goofaq;
