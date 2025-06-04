import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Spotifyfaq = () => {
  const [isOpen, setIsOpen] = useState(0);
  return (
    <div className="flex  justify-center py-8  lg:py-16">
      <div className="lg:w-[80%] px-3">
        <div className="text-center flex justify-center">
          <span className="lg:text-[28px] text-[20px]  font-[600]">
            Spotify Development Services FAQ
          </span>
        </div>

        <div className="pt-10">
          <div className="border border-gray-300 bg-gray-50 lg:px-5 lg:py-2 px-2 rounded-md flex-col space-y-8 shadow-md">
            <div
              className="flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-md"
              onClick={() => (isOpen === 1 ? setIsOpen(0) : setIsOpen(1))}
            >
              <span className="text-gray-800 lg:text-[16px] text-[14px] font-semibold">
                What customizations can you provide for a Shopify store?
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
                At Magbyte, we offer a wide range of customizations to tailor
                your Shopify store to meet your unique business needs. From
                designing a custom theme to match your brand identity, to
                developing personalized features and functionalities, we ensure
                your store stands out. Our services include custom app
                development, integrating third-party tools, payment gateway
                setup, advanced shipping and inventory management, and enhancing
                user experience with custom checkout processes. We also focus on
                optimizing store performance, implementing SEO strategies, and
                ensuring seamless mobile responsiveness. Whatever your vision,
                we create a Shopify store that aligns perfectly with your
                business goals and provides an exceptional shopping experience
                for your customers.
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
                Can you help with Shopify app integrations?
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
                Yes, at Magbyte, we specialize in integrating various Shopify
                apps to enhance the functionality of your store. Whether you
                need integrations for payment gateways, shipping solutions,
                inventory management, marketing tools, or customer service apps,
                we ensure smooth and seamless connections with your Shopify
                store. Our team works closely with you to understand your
                specific requirements, selecting the right apps and integrating
                them to streamline your business operations. With our expertise,
                you can enhance your store's performance, automate tasks, and
                improve the overall customer experience.v
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
                What are your services for Shopify SEO optimization?
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
                At Magbyte, we offer comprehensive Shopify SEO optimization
                services designed to improve your store's visibility and search
                engine ranking. Our services include on-page SEO, such as
                keyword optimization, meta tags, alt text for images, and URL
                structure improvements. We also focus on technical SEO, ensuring
                fast load times, mobile responsiveness, and a clean site
                architecture for better crawlability. Additionally, we optimize
                product descriptions, content, and internal linking to enhance
                user experience and engagement. With a focus on both local and
                global SEO strategies, we help drive organic traffic, increase
                conversions, and ultimately boost your Shopify store’s search
                engine performance.
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
                Do you offer Shopify store migration services?
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
                Yes, at Magbyte, we provide seamless Shopify store migration
                services to help you transition smoothly from your current
                e-commerce platform to Shopify. Our team handles everything from
                data migration (products, customers, orders) to theme
                customization, ensuring that your new store is fully optimized
                and functional. We also ensure that SEO rankings and site
                performance are preserved during the migration process,
                minimizing any potential disruptions. Whether you're migrating
                from another platform or upgrading your existing Shopify store,
                we make the transition hassle-free and efficient, so you can
                continue growing your business without missing a beat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spotifyfaq;
