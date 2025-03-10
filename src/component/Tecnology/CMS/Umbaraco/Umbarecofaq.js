import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Umbarecofaq = () => {
  const [isOpen, setIsOpen] = useState(0);
  return (
    <div className="flex  justify-center py-8  lg:py-16">
      <div className="lg:w-[80%] px-3">
        <div className="text-center flex justify-center">
          <span className="lg:text-[28px] text-[20px]  font-[600]">
            Umbarco Development Services FAQ
          </span>
        </div>

        <div className="pt-10">
          <div className="border border-gray-300 bg-gray-50 lg:px-5 lg:py-2 px-2 rounded-md flex-col space-y-8 shadow-md">
            <div
              className="flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-md"
              onClick={() => (isOpen === 1 ? setIsOpen(0) : setIsOpen(1))}
            >
              <span className="text-gray-800 lg:text-[16px] text-[14px] font-semibold">
                Is Umbraco the best choice for headless CMS development?
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
                Yes, Umbraco is an excellent choice for headless CMS
                development. With its flexibility, scalability, and robust API
                capabilities, Umbraco allows businesses to manage content
                efficiently across multiple platforms while decoupling the
                frontend and backend. This headless approach enables developers
                to deliver tailored, omnichannel experiences, as content can be
                delivered to websites, mobile apps, and other digital platforms
                seamlessly. Additionally, Umbraco’s user-friendly interface and
                strong developer community make it an ideal platform for
                organizations looking for a customizable, future-proof headless
                CMS solution.
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
                Why should I choose an Umbraco development company?
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
                Expertise and Experience: Umbraco development companies
                specialize in building tailored solutions that leverage the full
                potential of the Umbraco CMS. Their experience ensures that your
                project is built with best practices and optimized for
                performance. Customization: An experienced Umbraco development
                company can help you fully customize the platform to meet your
                specific business requirements, providing unique features and
                integrations that align with your brand and goals. Seamless
                Integration: A professional Umbraco agency can integrate your
                website with third-party tools, APIs, and other systems (like
                CRM or ERP), making it more powerful and adaptable to your
                business needs. Ongoing Support and Maintenance: Partnering with
                an Umbraco development company ensures you have continuous
                support, updates, and troubleshooting services, keeping your
                website secure and up to date. Scalability: Umbraco is built to
                scale with your business. A development company can create a
                solution that grows with your organization, ensuring that your
                website or app can handle increased traffic and complexity.
                Security and Compliance: Professional Umbraco developers will
                implement best security practices to protect your website and
                ensure compliance with data privacy regulations. Efficiency and
                Time-Saving: Working with an Umbraco development company speeds
                up the development process, allowing you to launch your website
                or application more quickly while focusing on your core
                business. By choosing an Umbraco development company, you ensure
                that your website or web application is expertly designed, built
                to last, and optimized for both performance and usability.
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
                Can you migrate my existing website to Umbraco?
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
                With years of experience working with various tech stacks,
                including Umbraco, we are a trusted company to help you migrate
                from your traditional CMS to Umbraco’s headless CMS. We ensure
                the seamless transfer of your existing content while minimizing
                data disruptions and maintaining content integrity throughout
                the migration process.
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
                What type of support can I expect for SharePoint from Magbyte?
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
                With Magbyte, you can expect comprehensive and reliable
                SharePoint support tailored to your organization's needs. Our
                team of experts offers a range of services, including
                troubleshooting, system maintenance, customizations, and regular
                updates to ensure your SharePoint environment runs smoothly. We
                provide proactive assistance in optimizing performance,
                resolving technical issues, and implementing new features,
                ensuring that your SharePoint solution remains secure,
                efficient, and aligned with your business goals. Whether you're
                looking for ongoing support or assistance with specific
                SharePoint challenges, Magbyte is here to help maximize the
                platform’s potential for your organization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Umbarecofaq;
