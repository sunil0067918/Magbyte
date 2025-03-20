import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Azurefaq = () => {
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
                  What are the Benefits of Azure for Enterprises?
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
                  Azure offers numerous advantages for enterprises, making it an
                  ideal cloud platform for businesses of all sizes. With its
                  robust infrastructure, Azure provides scalability, allowing
                  enterprises to easily scale their operations according to
                  demand without the need for significant upfront investment.
                  The platform offers unmatched security features, ensuring that
                  enterprise data and applications are protected against
                  potential threats. Azure also enables seamless integration
                  with existing on-premise systems, offering a smooth transition
                  to the cloud and improving overall efficiency. With global
                  data centers, enterprises can ensure high availability and low
                  latency for users worldwide. Furthermore, Azure's
                  cost-effective pay-as-you-go model helps optimize expenses,
                  while its advanced analytics and AI capabilities support
                  data-driven decision-making. By adopting Azure, enterprises
                  gain flexibility, cost savings, and enhanced productivity, all
                  while maintaining control over their operations and security.
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
                  Is Azure superior to AWS?
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
                  The answer depends on your business's specific needs and
                  objectives. Both Azure and AWS are leading cloud platforms,
                  each offering distinct advantages. Here's a comparison:
                  Advantages of Azure: Integration with Microsoft Products: For
                  businesses already using Microsoft tools like Windows Server,
                  Active Directory, or Office 365, Azure offers seamless
                  integration, making it an ideal choice. Hybrid Cloud
                  Capabilities: Azure excels in providing hybrid cloud
                  solutions, allowing businesses to integrate on-premises
                  systems with cloud services smoothly. Enterprise-Grade
                  Solutions: With a focus on large enterprises, Azure offers a
                  broad range of services to support complex, large-scale
                  applications. Security and Compliance: Azure provides robust
                  security measures and numerous compliance certifications,
                  making it a great option for businesses in regulated
                  industries. Global Reach: With an extensive network of data
                  centers worldwide, Azure ensures low latency and high
                  availability. Advantages of AWS: Market Leader: As the first
                  major cloud platform, AWS offers a more mature and
                  comprehensive set of services, particularly in machine
                  learning, AI, and big data. Scalability and Flexibility: AWS
                  provides a wide variety of instance types, storage options,
                  and services to meet diverse business needs. Strong Developer
                  Ecosystem: AWS has a large developer community, extensive
                  resources, and integrations that support rapid app
                  development. Innovation: AWS leads the way in offering
                  cutting-edge technologies such as serverless computing and
                  advanced analytics. Conclusion: Choose Azure if you’re heavily
                  invested in Microsoft products or need a strong hybrid cloud
                  solution. Choose AWS if you require a broader range of
                  services or advanced computing capabilities. In the end, both
                  Azure and AWS are powerful, reliable platforms, and the choice
                  depends on your business goals and existing infrastructure.
                  Attach Search Reason
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
                  What are the three types of App Services in Azure?
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
                  In Azure, there are three primary types of App Services
                  designed to meet different application needs: Web Apps: Azure
                  Web Apps provide a platform for hosting web applications,
                  APIs, and websites. It supports multiple programming languages
                  like .NET, Java, PHP, Python, and Node.js, offering features
                  like automatic scaling, load balancing, and integrated DevOps
                  capabilities for continuous integration and deployment. Mobile
                  Apps: Azure Mobile Apps is a service for building and hosting
                  mobile application backends. It allows you to create and
                  manage RESTful APIs that can power mobile apps, with features
                  like offline sync, push notifications, and integration with
                  authentication services. It supports cross-platform mobile
                  development for iOS, Android, and Windows apps. API Apps:
                  Azure API Apps are designed for hosting and managing RESTful
                  APIs that can be consumed by various client applications,
                  including web and mobile apps. It offers seamless integration
                  with other Azure services and provides monitoring, scaling,
                  and management capabilities to ensure that APIs perform
                  optimally. Each of these app services offers tailored
                  functionalities, making it easier for developers to build and
                  deploy scalable and secure applications across various
                  platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Azurefaq;
