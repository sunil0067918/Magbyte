import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Woofaq = () => {
  const [isOpen, setIsOpen] = useState(0);
  return (
    <div className="flex  justify-center py-8  lg:py-16">
      <div className="lg:w-[80%] px-3">
        <div className="text-center flex justify-center">
          <span className="lg:text-[28px] text-[20px]  font-[600]">
            Woocommarce Development Services FAQ
          </span>
        </div>

        <div className="pt-10">
          <div className="border border-gray-300 bg-gray-50 lg:px-5 lg:py-2 px-2 rounded-md flex-col space-y-8 shadow-md">
            <div
              className="flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-md"
              onClick={() => (isOpen === 1 ? setIsOpen(0) : setIsOpen(1))}
            >
              <span className="text-gray-800 lg:text-[16px] text-[14px] font-semibold">
                Why should I choose WooCommerce for my online store?
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
                WooCommerce is an excellent choice for your online store due to
                its flexibility, scalability, and ease of use. As an open-source
                platform built on WordPress, it offers a wide range of
                customizable features to suit businesses of all sizes. With
                WooCommerce, you can easily manage your inventory, process
                payments securely, and offer a seamless shopping experience to
                your customers. Additionally, its vast library of plugins and
                themes allows you to enhance the functionality and design of
                your store without needing advanced technical knowledge. Whether
                you're a small business or looking to scale, WooCommerce
                provides the tools to grow your store efficiently and
                cost-effectively.
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
                Can you assist with setting up my WooCommerce store?
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
                Yes, we can certainly help you set up your WooCommerce store.
                From installing the platform and choosing the right theme to
                configuring payment gateways, shipping methods, and adding
                products, we’ll guide you through every step of the process. Our
                team ensures that your store is fully optimized for performance,
                security, and a smooth user experience. Whether you’re new to
                e-commerce or looking to enhance your existing store, we offer
                tailored solutions to get your WooCommerce store up and running
                efficiently.
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
                What types of products can I sell with WooCommerce?
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
                WooCommerce allows you to sell a wide variety of products, both
                physical and digital. You can sell physical items such as
                clothing, electronics, or accessories, and manage inventory,
                shipping, and taxes seamlessly. Additionally, WooCommerce
                supports digital products like e-books, software, music, and
                downloadable files, enabling instant delivery to customers. You
                can also sell subscription-based products, services, or even
                memberships, providing flexibility in how you offer your
                products. With its versatility, WooCommerce can accommodate
                nearly any type of product you wish to sell.
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
                Can you integrate payment gateways with WooCommerce?
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
                Yes, we can integrate various payment gateways with WooCommerce
                to ensure secure and seamless transactions for your customers.
                Whether you prefer popular options like PayPal, Stripe, or
                credit card payments, or need to integrate local or custom
                payment solutions, WooCommerce offers flexibility to accommodate
                them all. Our team will handle the setup and ensure that your
                store is ready to process payments smoothly and securely,
                providing your customers with multiple payment options for a
                hassle-free shopping experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Woofaq;
