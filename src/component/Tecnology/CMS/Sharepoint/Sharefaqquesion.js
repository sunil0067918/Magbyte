import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Sharefaqquesion = () => {
  const [isOpen, setIsOpen] = useState(0);
  return (
    <div className="flex  justify-center py-8  lg:py-16">
      <div className="lg:w-[80%] px-3">
        <div className="text-center flex justify-center">
          <span className="lg:text-[28px] text-[20px]  font-[600]">
            Sharepoint Development Services FAQ
          </span>
        </div>

        <div className="pt-10">
          <div className="border border-gray-300 bg-gray-50 lg:px-5 lg:py-2 px-2 rounded-md flex-col space-y-8 shadow-md">
            <div
              className="flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-md"
              onClick={() => (isOpen === 1 ? setIsOpen(0) : setIsOpen(1))}
            >
              <span className="text-gray-800 lg:text-[16px] text-[14px] font-semibold">
                What is SharePoint?
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
                SharePoint is a web-based collaboration platform developed by
                Microsoft that enables organizations to store, manage, and share
                content, documents, and information within a centralized, secure
                environment. It provides tools for creating websites, intranets,
                document libraries, and lists, as well as facilitating
                communication, workflow automation, and content management
                across teams and departments. SharePoint integrates seamlessly
                with other Microsoft 365 applications, such as Teams, Outlook,
                and OneDrive, allowing for enhanced collaboration, data sharing,
                and efficient project management. It can be used for everything
                from document storage to building custom solutions that enhance
                productivity and streamline business processes.
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
                What are the key features of SharePoint?
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
                Document Management: SharePoint allows businesses to store,
                organize, and manage documents in a central repository. Features
                like version control, document check-in/check-out, and approval
                workflows ensure seamless collaboration. Collaboration and
                Communication: SharePoint facilitates team collaboration through
                shared workspaces, discussion boards, and integration with
                Microsoft Teams and Outlook. It enables real-time communication
                and knowledge sharing among team members. Customization:
                SharePoint offers extensive customization options, allowing
                businesses to tailor sites, workflows, and lists to meet their
                specific needs. You can also create custom apps using PowerApps
                or integrate third-party solutions. Content Management:
                SharePoint’s content management capabilities help organizations
                organize, tag, and manage content, making it easy to find and
                use. This includes managing metadata, setting retention
                policies, and content approval workflows. Security and
                Permissions: SharePoint provides robust security features,
                including role-based access control (RBAC) and granular
                permission settings, ensuring that users only have access to the
                content they need. Search Functionality: SharePoint offers
                advanced search capabilities that allow users to quickly find
                documents, people, and information across sites. Features like
                intelligent search and filters improve content discovery.
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
                Is SharePoint secure?
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
                Yes, SharePoint is secure. Microsoft provides a robust set of
                security features to ensure the confidentiality, integrity, and
                availability of your data. Some of the key security features of
                SharePoint include: User Authentication and Access Control:
                SharePoint integrates with Microsoft Azure Active Directory,
                enabling multi-factor authentication (MFA) and single sign-on
                (SSO). It also offers granular access control, allowing
                administrators to define who can view, edit, and manage content
                based on roles and permissions. Data Encryption: SharePoint
                ensures that data is encrypted both in transit (using SSL/TLS)
                and at rest (using AES-256 encryption) to protect sensitive
                information from unauthorized access. Compliance and Data
                Retention: SharePoint helps businesses meet compliance standards
                with features such as eDiscovery, audit logs, and retention
                policies. It also allows organizations to manage documents with
                legal hold and ensures proper data governance. Regular Security
                Updates: Microsoft regularly updates SharePoint, both in the
                cloud (SharePoint Online) and on-premises, to patch any security
                vulnerabilities and improve overall system security. Advanced
                Threat Protection: For SharePoint Online, Microsoft integrates
                security tools like Microsoft Defender for Office 365 to help
                detect and mitigate threats such as phishing, malware, and
                ransomware.
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

export default Sharefaqquesion;
