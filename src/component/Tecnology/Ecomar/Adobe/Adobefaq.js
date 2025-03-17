import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Adobefaq = () => {
  const [isOpen, setIsOpen] = useState(0);
  return (
    <div className="flex  justify-center py-8  lg:py-16">
      <div className="lg:w-[80%] px-3">
        <div className="text-center flex justify-center">
          <span className="lg:text-[28px] text-[20px]  font-[600]">
            Adobe Development Services FAQ
          </span>
        </div>

        <div className="pt-10">
          <div className="border border-gray-300 bg-gray-50 lg:px-5 lg:py-2 px-2 rounded-md flex-col space-y-8 shadow-md">
            <div
              className="flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-md"
              onClick={() => (isOpen === 1 ? setIsOpen(0) : setIsOpen(1))}
            >
              <span className="text-gray-800 lg:text-[16px] text-[14px] font-semibold">
                What is Adobe Commerce?
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
                Adobe Commerce, formerly known as Magento, is a powerful and
                flexible e-commerce platform designed to help businesses create,
                manage, and scale their online stores. It offers a wide range of
                features, including advanced product management, customizable
                designs, and integrated payment and shipping solutions. Adobe
                Commerce provides businesses with the tools to deliver
                personalized shopping experiences, manage inventory, and
                optimize for performance across multiple channels. Whether
                you're a small business or an enterprise-level operation, Adobe
                Commerce offers scalability, security, and flexibility to meet
                your unique e-commerce needs.
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
                What Adobe Commerce services does Magbyte provide?
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
                At Magbyte, we offer a comprehensive range of Adobe Commerce
                services designed to elevate your online store. Our services
                include custom theme development, e-commerce design and UX/UI
                optimization, advanced integrations with third-party tools,
                payment gateway integration, and performance optimization. We
                also provide Adobe Commerce migration, custom module
                development, and ongoing support and maintenance. Our expert
                developers work closely with you to deliver tailored solutions
                that meet your business needs, ensuring your store is scalable,
                secure, and optimized for maximum performance.
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
                How can Adobe Commerce Consulting services help my business?
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
                Adobe Commerce Consulting services can significantly benefit
                your business by providing expert guidance on optimizing and
                scaling your online store. Our consultants analyze your current
                e-commerce strategy, identify areas for improvement, and
                recommend tailored solutions to enhance performance, user
                experience, and sales. Whether you're looking to streamline
                operations, implement custom features, or migrate to Adobe
                Commerce, our consulting services help ensure that you make the
                most of the platform's capabilities. We also offer insights on
                the latest trends, integrations, and best practices, empowering
                your business to stay competitive and grow in the dynamic
                e-commerce landscape.
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
                What are all services included in our Adobe Commerce Development
                Services?
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
                At Magbyte, our Adobe Commerce Development Services include a
                comprehensive range of solutions to meet all your e-commerce
                needs. These services include: Custom Theme Development:
                Tailored, responsive designs that align with your brand identity
                and provide a seamless user experience across devices. Custom
                Module Development: Building specialized features and
                functionalities to enhance your store's capabilities.
                Integration with Third-Party Solutions: Seamless integration of
                payment gateways, shipping providers, CRM systems, and other
                essential tools. Performance Optimization: Improving store
                speed, performance, and scalability to handle high traffic and
                ensure a smooth shopping experience. Adobe Commerce Migration:
                Expert migration from other platforms to Adobe Commerce with
                minimal downtime and data loss. SEO and Marketing Optimization:
                Implementing strategies to improve your store’s visibility,
                search engine ranking, and online presence. Security and
                Compliance: Ensuring your store is secure, compliant with data
                regulations, and protected from cyber threats. Ongoing Support
                and Maintenance: Providing continuous monitoring, updates, and
                support to keep your store running smoothly. Our Adobe Commerce
                experts work closely with you to deliver a solution that is
                tailored to your business goals, ensuring your online store is
                optimized for growth and success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adobefaq;
