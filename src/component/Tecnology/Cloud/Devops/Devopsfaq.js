import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Devopsfaq = () => {
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
                  How does DevOps enhance collaboration between my development
                  and operations teams?
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
                  DevOps fosters improved collaboration between development and
                  operations teams by encouraging a culture of shared
                  responsibility and continuous communication. By breaking down
                  traditional silos, DevOps promotes a more integrated workflow
                  where both teams work together throughout the entire software
                  lifecycle—from development to deployment. This collaboration
                  is achieved through automation, real-time monitoring, and the
                  use of collaborative tools, allowing for quicker feedback and
                  faster problem resolution. As a result, teams are able to
                  deliver high-quality software more efficiently, reduce errors,
                  and respond to changes or issues swiftly, creating a smoother,
                  more productive work environment.
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
                  What sets your DevOps services apart from other providers?
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
                  Our DevOps services stand out due to our tailored approach,
                  deep expertise, and commitment to delivering scalable, secure,
                  and high-performance solutions. Unlike other providers, we
                  take the time to understand your unique business needs and
                  customize our services accordingly. We focus on automating
                  processes, improving team collaboration, and ensuring seamless
                  integration across development and operations. With our
                  end-to-end support, we not only accelerate software delivery
                  but also enhance the quality and security of your
                  applications. Our proactive approach to monitoring and
                  continuous improvement ensures that your systems remain
                  optimized and adaptable in a rapidly evolving digital
                  landscape.
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
                  How do you maintain security throughout a DevOps pipeline?
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
                  We ensure security within a DevOps pipeline by implementing a
                  DevSecOps approach, where security is integrated at every
                  stage of the development lifecycle. From the initial design
                  phase to deployment and beyond, we embed security practices
                  into automation, continuous integration, and continuous
                  delivery processes. This includes code scanning, vulnerability
                  assessments, and secure coding practices, as well as real-time
                  monitoring to detect and address potential risks. By making
                  security a shared responsibility across development,
                  operations, and security teams, we ensure that potential
                  threats are identified and mitigated early, allowing for
                  faster, more secure releases without compromising quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devopsfaq;
