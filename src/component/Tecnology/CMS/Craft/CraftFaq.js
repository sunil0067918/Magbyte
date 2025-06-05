import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const CraftFaq = () => {
  const [isOpen, setIsOpen] = useState(0);
  return (
    <div className="flex  justify-center py-8  lg:py-16">
      <div className="lg:w-[80%] px-3">
        <div className="text-center flex justify-center">
          <span className="lg:text-[28px] text-[20px]  font-[600]">
            Craft Development Services FAQ
          </span>
        </div>

        <div className="pt-10">
          <div className="border border-gray-300 bg-gray-50 lg:px-5 lg:py-2 px-2 rounded-md flex-col space-y-8 shadow-md">
            <div
              className="flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-md"
              onClick={() => (isOpen === 1 ? setIsOpen(0) : setIsOpen(1))}
            >
              <span className="text-gray-800 lg:text-[16px] text-[14px] font-semibold">
                To hire a Craft CMS developer from Magesbytes
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
                To hire a Craft CMS developer from Magesbytes, begin by visiting
                their official website to explore their Craft CMS development
                services and understand their expertise. Use the contact form to
                submit your project requirements, providing detailed information
                to help their team assess your needs. Magesbytes will review
                your submission and reach out to discuss your project, offering
                a proposal that outlines the scope, timeline, and cost
                estimates. Once you agree to the proposal, they will initiate
                the onboarding process, which includes signing necessary
                agreements and setting up communication channels. A dedicated
                Craft CMS developer or team will then be assigned to your
                project, ensuring regular updates and collaboration throughout
                the development process. Sources
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
                How long does it take to develop a website using Craft CMS?
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
                The time required to develop a website using Craft CMS varies
                based on several factors, including the project's complexity,
                design requirements, and desired functionalities. Generally,
                setting up a basic website with Craft CMS can be accomplished
                relatively quickly, especially with the availability of
                pre-built templates and plugins. However, more complex sites
                requiring custom features, integrations, and unique design
                elements may take longer to develop. Collaborating closely with
                experienced developers and clearly defining project requirements
                can help establish a realistic timeline tailored to your
                specific needs.
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
                How much does Craft CMS website development cost? Are there
                hidden costs?
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
                Developing a website using Craft CMS involves various costs,
                including licensing fees, development, design, and potential
                plugin purchases. Craft CMS offers several editions: Solo
                Edition: Designed for individual developers or personal
                projects, this edition is free but limited in features. Pro
                Edition: Priced at $399 per project, it includes one year of
                updates and developer support. CRAFTCMS.COM Team Edition: Aimed
                at small teams, it costs $99 per year for updates after the
                first year. CRAFTCMS.COM Additional expenses may include
                purchasing plugins or third-party integrations to enhance
                functionality. It's important to review all potential costs,
                including design and development services, to fully understand
                the investment required. Craft CMS is transparent about its
                pricing, with no hidden costs associated with its plans
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
                Can you assist in upgrading my website to the latest Craft CMS
                version?
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
                Upgrading your website to the latest version of Craft CMS
                involves several critical steps to ensure a smooth transition
                and maintain optimal functionality. Here's how you can proceed:
                Assess Current Version and Requirements: Begin by verifying your
                website's current Craft CMS version. Review the official Craft
                CMS upgrade documentation for the version you're upgrading to,
                as it provides detailed instructions and considerations.
                CRAFTCMS.COM Backup Your Website: Before making any changes,
                create comprehensive backups of your website, including
                databases and files. This step is crucial to prevent data loss
                in case of unforeseen issues during the upgrade process.
                HONCHO.AGENCY Update Plugins and Custom Code: Ensure that all
                installed plugins are compatible with the new Craft CMS version.
                This may involve updating existing plugins or redeveloping
                custom plugins to align with the latest standards. HONCHO.AGENCY
                Review Server Requirements: Confirm that your hosting
                environment meets the server requirements for the new Craft CMS
                version, such as specific PHP versions or extensions.
                BLOG.FORTRABBIT.COM Perform the Upgrade: Follow the step-by-step
                upgrade instructions provided in the official Craft CMS
                documentation. This includes running necessary commands and
                addressing any deprecation warnings. CRAFTCMS.COM Test
                Thoroughly: After the upgrade, conduct comprehensive testing to
                ensure that all website functionalities operate correctly. Pay
                special attention to custom features and integrations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftFaq;
