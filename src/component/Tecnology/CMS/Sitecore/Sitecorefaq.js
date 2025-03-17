import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Sitecorefaq = () => {
  const [isOpen, setIsOpen] = useState(0);
  return (
    <div className="flex  justify-center py-8  lg:py-16">
      <div className="lg:w-[80%] px-3">
        <div className="text-center flex justify-center">
          <span className="lg:text-[28px] text-[20px]  font-[600]">
            Sitecore Development Services FAQ
          </span>
        </div>

        <div className="pt-10">
          <div className="border border-gray-300 bg-gray-50 lg:px-5 lg:py-2 px-2 rounded-md flex-col space-y-8 shadow-md">
            <div
              className="flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-md"
              onClick={() => (isOpen === 1 ? setIsOpen(0) : setIsOpen(1))}
            >
              <span className="text-gray-800 lg:text-[16px] text-[14px] font-semibold">
                What is Sitecore and Why is it Beneficial for My Business?
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
                Sitecore is a powerful, enterprise-level digital experience
                platform (DXP) that combines content management,
                personalization, and marketing automation in one unified
                solution. It enables businesses to deliver personalized,
                omnichannel experiences that engage customers across websites,
                mobile apps, social media, and more. Benefits for Your Business:
                Personalized Customer Experiences: Sitecore’s advanced
                personalization features allow you to tailor content and
                experiences based on user behavior, preferences, and
                demographics, increasing engagement and driving conversions.
                Omnichannel Delivery: With Sitecore, you can deliver a
                consistent brand experience across various channels, including
                web, mobile, email, and social, ensuring your messaging reaches
                customers wherever they are. Scalability: Sitecore is designed
                to grow with your business, providing the flexibility to scale
                your digital presence as needed, whether you're expanding to new
                markets or launching new products. Data-Driven Insights:
                Sitecore's robust analytics capabilities help you track user
                behavior and gather actionable insights, allowing you to refine
                your marketing strategies and make data-backed decisions.
                Content Management: Sitecore offers a user-friendly interface
                for managing content at scale, enabling teams to create, update,
                and optimize content quickly, ensuring that your site is always
                fresh and relevant. Integration Capabilities: Sitecore
                seamlessly integrates with a variety of third-party tools, CRMs,
                and enterprise systems, allowing you to unify your digital
                ecosystem and enhance operational efficiency. Security and
                Reliability: With Sitecore’s enterprise-grade security features,
                you can protect your customer data and ensure high availability,
                making it a reliable solution for businesses handling sensitive
                information.
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
                How much will it cost us for the Sitecore development and
                integration services?
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
                Scope and Complexity of the Project: The more complex and
                feature-rich your Sitecore implementation is, the higher the
                cost. Customizations, integrations with third-party systems, and
                advanced functionalities will contribute to the overall cost.
                Size of the Business: Large enterprises with extensive needs may
                require a more robust, scalable solution, which could increase
                costs. Smaller businesses or simpler projects may cost less.
                Customization and Design: If your project requires custom design
                elements, personalized content delivery, or specific
                integrations, this will affect the cost of development and
                implementation. Development Time: The length of time required
                for development, testing, and deployment will impact the overall
                cost. More complex projects will take longer to complete.
                Third-Party Integrations: Integrating Sitecore with other tools,
                platforms, or systems (CRM, ERP, etc.) will add to the cost due
                to the complexity of the integration process. Ongoing Support
                and Maintenance: Ongoing maintenance, support, and optimization
                services are typically billed separately. The more frequent or
                extensive your support requirements, the higher the cost.
                Location of the Development Team: Development costs can also
                vary depending on the geographic location of the team you're
                working with. Agencies based in regions with a higher cost of
                living may charge more than those in areas with lower overhead
                costs.
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
                What sets Sourceved apart as a Sitecore Solution Partner?
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
                Magbyte stands out as a Sitecore Solution Partner due to our
                deep expertise, commitment to delivering tailored solutions, and
                customer-centric approach. Here’s what differentiates us:
                Certified Expertise: Our team consists of certified Sitecore
                developers with extensive experience in implementing and
                optimizing Sitecore solutions. We have the technical knowledge
                and skills to ensure seamless integrations, customizations, and
                enhancements. Tailored Solutions: At Magbyte, we understand that
                every business is unique. We work closely with you to develop
                Sitecore solutions that are specifically designed to meet your
                business objectives, ensuring a personalized digital experience
                for both you and your customers. Comprehensive Services: We
                offer end-to-end Sitecore services, including implementation,
                migration, integration, customization, and ongoing support.
                Whether you are starting fresh or optimizing an existing
                Sitecore platform, we provide all the services you need to
                maximize your investment. Focus on Business Results: Beyond just
                technical expertise, we focus on driving tangible business
                outcomes. Our solutions are designed to help you engage your
                audience, enhance conversions, and achieve a higher ROI through
                personalized customer experiences. Seamless Integration: We
                excel in integrating Sitecore with other third-party tools,
                platforms, and systems, ensuring that your digital ecosystem
                operates cohesively and efficiently. Scalability and
                Flexibility: We build solutions that are scalable, so as your
                business grows, your Sitecore platform can grow with you. We
                ensure flexibility to adapt to new business needs, technologies,
                and evolving customer expectations. Ongoing Support and
                Optimization: We don’t just build and walk away. Magbyte
                provides continuous support, monitoring, and optimization
                services to ensure your Sitecore platform operates at its best
                and evolves with your business.
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
                Can existing systems be integrated with Sitecore during
                development?
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
                Yes, existing systems can be integrated with Sitecore during
                development. One of the key strengths of Sitecore is its ability
                to seamlessly integrate with various third-party systems,
                applications, and databases to create a unified digital
                ecosystem. This allows you to leverage your existing
                infrastructure and tools while benefiting from Sitecore's
                advanced content management, personalization, and analytics
                capabilities. Types of Integrations Possible: CRM Systems:
                Sitecore can be integrated with Customer Relationship Management
                (CRM) systems like Salesforce, Microsoft Dynamics, or HubSpot to
                provide a 360-degree view of customer data and enhance
                personalized experiences. ERP Systems: Sitecore can integrate
                with Enterprise Resource Planning (ERP) systems, helping to
                synchronize data across business functions like finance,
                inventory, and supply chain management. E-commerce Platforms:
                Sitecore can be integrated with e-commerce solutions (such as
                Magento, Shopify, or custom platforms) to provide a seamless
                shopping experience, including personalized product
                recommendations and order management. Marketing Automation
                Tools: Sitecore integrates with marketing automation platforms
                like Marketo, HubSpot, and Mailchimp to automate and personalize
                marketing campaigns based on customer behavior and engagement.
                Payment Gateways: For e-commerce solutions, Sitecore can
                integrate with payment gateways like PayPal, Stripe, or other
                custom payment processors to manage transactions securely. APIs
                and Web Services: Sitecore supports integration with external
                APIs and web services, allowing data exchange with other systems
                like social media platforms, analytics tools, or custom-built
                applications. Analytics and Reporting Tools: Sitecore can be
                integrated with advanced analytics tools like Google Analytics,
                Power BI, or Tableau, allowing you to analyze user behavior,
                measure performance, and generate reports.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitecorefaq;
