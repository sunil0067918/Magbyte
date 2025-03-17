import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Reactnativefaq = () => {
  const [isOpen, setIsOpen] = useState(0);
  return (
    <div>
      <div className="flex  justify-center py-8  lg:py-16">
        <div className="lg:w-[80%] px-3">
          <div className="text-center flex justify-center">
            <span className="lg:text-[28px] text-[20px]  font-[600]">
              React Navtive Development Services FAQ
            </span>
          </div>

          <div className="pt-10">
            <div className="border border-gray-300 bg-gray-50 lg:px-5 lg:py-2 px-2 rounded-md flex-col space-y-8 shadow-md">
              <div
                className="flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                onClick={() => (isOpen === 1 ? setIsOpen(0) : setIsOpen(1))}
              >
                <span className="text-gray-800 lg:text-[16px] text-[14px] font-semibold">
                  How much does it cost to develop a React Native app?
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
                  The cost to develop a React Native app can vary depending on
                  several factors, such as the complexity of the app, the
                  features you require, the development team's location, and the
                  time required for development. Generally, a simple app with
                  basic features might cost less, while a more complex app with
                  advanced functionality and integrations can be more expensive.
                  On average, the cost can range anywhere from $5,000 to $50,000
                  or more. However, it's important to get a customized quote
                  based on your specific project requirements and desired
                  features. The ability to share code across both iOS and
                  Android can help reduce costs compared to developing separate
                  native apps for each platform.
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
                  How can I monitor the development progress of my React Native
                  app?
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
                  To monitor the development progress of your React Native app,
                  you can follow these approaches: Set Clear Milestones and
                  Deadlines: Define key stages of development, such as
                  wireframing, UI/UX design, coding, testing, and deployment.
                  Establishing milestones helps you track progress effectively.
                  Regular Communication with the Development Team: Stay in
                  constant contact with your development team through regular
                  meetings or updates. Platforms like Slack, Microsoft Teams, or
                  Zoom are great for quick updates. Use Project Management
                  Tools: Tools like Jira, Trello, Asana, or Monday.com allow you
                  to track tasks, assign responsibilities, and set deadlines.
                  These platforms help you keep an eye on what's been completed
                  and what's in progress. Access Version Control and
                  Repositories: If the development team is using version control
                  systems like GitHub or Bitbucket, you can monitor progress by
                  reviewing commits, pull requests, and branches. This way, you
                  can see the development steps taken and provide feedback if
                  needed. Test Builds and Demos: Request regular test builds or
                  demo versions of the app to get a firsthand look at its
                  progress. This will allow you to evaluate the functionality,
                  design, and usability. Use Analytics and Monitoring Tools:
                  Tools like Firebase or Sentry can track app performance and
                  provide real-time feedback on errors or bugs during the
                  development phase. By staying engaged and using these
                  strategies, you can ensure that the project is on track and
                  that you're aware of any issues that might arise during
                  development.
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
                  Will your developers be available for meetings in my time
                  zone?
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
                  Yes, our developers can accommodate meetings in your time
                  zone. We prioritize clear communication and ensure that our
                  team is available at times that work best for you, regardless
                  of the time zone differences. We are flexible and can schedule
                  regular updates, progress reviews, or discussions to ensure
                  smooth collaboration throughout the development process.
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
                  Will I receive support after my mobile app is developed?
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
                  Yes, we provide ongoing support after your mobile app is
                  developed. Our team offers post-launch services, including bug
                  fixes, updates, performance monitoring, and assistance with
                  any issues that may arise. Whether you need help with app
                  maintenance, feature enhancements, or ensuring compatibility
                  with future OS versions, we are here to ensure your app
                  continues to run smoothly and meets your evolving needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reactnativefaq;
