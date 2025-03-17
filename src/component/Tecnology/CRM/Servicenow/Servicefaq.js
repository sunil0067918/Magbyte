import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Servicefaq = () => {
  const [isOpen, setIsOpen] = useState(0);
  return (
    <div className="">
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
                  What is ServiceNow portal integration, and how can it benefit
                  my organization?
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
                  ServiceNow portal integration refers to the process of
                  connecting the ServiceNow platform with other internal and
                  external systems to streamline data sharing and enhance
                  workflows. This integration enables seamless access to various
                  services like IT service management, HR services, customer
                  support, and more, all through a single, unified portal. By
                  integrating ServiceNow portals with other enterprise systems,
                  organizations can automate processes, reduce manual data
                  entry, and improve communication across departments. The
                  benefits of ServiceNow portal integration include: Improved
                  Efficiency: Streamlined processes and automated workflows lead
                  to faster service delivery and reduced operational overhead.
                  Centralized Access: A single portal provides users with access
                  to various services and information, improving user experience
                  and reducing the need for multiple logins. Better
                  Decision-Making: Integration allows real-time data sharing,
                  providing decision-makers with accurate and up-to-date
                  information for more informed decisions. Cost Reduction: By
                  eliminating redundant processes and improving productivity,
                  organizations can lower costs related to service delivery and
                  system management. Enhanced Collaboration: Integrated systems
                  improve communication and collaboration between departments,
                  fostering a more cohesive work environment. In essence,
                  ServiceNow portal integration helps organizations deliver
                  efficient, user-friendly experiences while optimizing internal
                  processes, leading to better service outcomes and increased
                  business agility.
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
                  What Are the Advantages of Integrating ServiceNow Modules for
                  My Organization?
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
                  Integrating ServiceNow modules offers numerous advantages for
                  your organization, driving efficiency, consistency, and
                  improved service delivery across various departments. By
                  seamlessly connecting different ServiceNow modules such as IT
                  Service Management (ITSM), IT Operations Management (ITOM),
                  Human Resources (HR), Customer Service Management (CSM), and
                  more, organizations can create a unified system that enhances
                  collaboration and automates workflows. The benefits of
                  integrating ServiceNow modules include: Improved Operational
                  Efficiency: Automated processes and streamlined workflows
                  reduce manual tasks and eliminate bottlenecks, helping your
                  team work faster and more efficiently. Enhanced Data Accuracy:
                  With integrated modules, data is synchronized across systems,
                  ensuring that all departments work with the same, up-to-date
                  information, which leads to fewer errors and inconsistencies.
                  Better Collaboration: Integration fosters communication
                  between departments by providing a shared platform where teams
                  can collaborate on tasks and resolve issues more effectively.
                  Cost Savings: By automating processes and reducing the need
                  for multiple standalone systems, ServiceNow module integration
                  reduces operational costs and improves overall resource
                  utilization. Faster Decision-Making: With all systems
                  connected, leaders and managers have access to real-time data,
                  enabling quicker, data-driven decisions that align with
                  business objectives. Overall, integrating ServiceNow modules
                  helps organizations optimize their operations, reduce costs,
                  and create a more cohesive environment for service delivery,
                  ultimately driving better business outcomes.
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
                  Can the ServiceNow Portal Be Customized to Match Our Company’s
                  Branding and Requirements?
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
                  Yes, the ServiceNow portal can be fully customized to align
                  with your company’s branding and specific requirements.
                  ServiceNow offers a highly flexible platform that allows
                  organizations to tailor the portal’s design, layout, and
                  functionality to match their unique branding guidelines,
                  including logos, color schemes, fonts, and more. Additionally,
                  you can customize the portal to meet the specific needs of
                  your organization by adjusting workflows, forms, and user
                  interfaces, ensuring that it provides an optimal experience
                  for both employees and customers. This customization enhances
                  usability, improves user engagement, and ensures the portal
                  aligns with your business objectives, delivering a cohesive
                  and branded experience across all touchpoints.
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
                  What kind of support and maintenance is available for
                  ServiceNow integrations?
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
                  ServiceNow integrations come with a range of support and
                  maintenance options to ensure seamless operation and
                  continuous improvement. The support typically includes
                  troubleshooting, bug fixes, updates, and enhancements to
                  ensure that your integrations are running smoothly and
                  efficiently. ServiceNow provides both proactive and reactive
                  support, addressing issues as they arise and anticipating
                  potential challenges through regular system health checks and
                  performance monitoring. Maintenance services often involve:
                  System Updates and Patches: Regular updates to ensure
                  compatibility with new features, security patches, and
                  optimizations. Integration Monitoring: Continuous monitoring
                  of integrations to detect and resolve any issues quickly,
                  minimizing downtime and disruptions. Bug Fixes and
                  Troubleshooting: Assistance with identifying and resolving any
                  integration issues or errors that may arise. Customization and
                  Optimization: Ongoing customization support to improve
                  functionality and align the platform with changing business
                  needs. User Training and Documentation: Ensuring users are
                  fully equipped to use and manage integrations effectively
                  through training sessions and detailed documentation. This
                  support and maintenance ensure that your ServiceNow
                  integrations remain secure, up-to-date, and optimized, helping
                  your organization achieve maximum value from its ServiceNow
                  platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicefaq;
