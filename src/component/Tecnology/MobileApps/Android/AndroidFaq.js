import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const AndroidFaq = () => {
  const [isOpen, setIsOpen] = useState(0);
  return (
    <div className="flex  justify-center py-8  lg:py-16">
      <div className="lg:w-[80%] px-3">
        <div className="text-center flex justify-center">
          <span className="lg:text-[28px] text-[20px]  font-[600]">
            Android Development Services FAQ
          </span>
        </div>

        <div className="pt-10">
          <div className="border border-gray-300 bg-gray-50 lg:px-5 lg:py-2 px-2 rounded-md flex-col space-y-8 shadow-md">
            <div
              className="flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-md"
              onClick={() => (isOpen === 1 ? setIsOpen(0) : setIsOpen(1))}
            >
              <span className="text-gray-800 lg:text-[16px] text-[14px] font-semibold">
                What is Android development?
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
                Android development refers to the process of creating mobile
                applications for devices running the Android operating system.
                It involves designing, coding, testing, and deploying apps for a
                wide range of Android devices, including smartphones, tablets,
                wearables, and more. Android development typically uses
                programming languages such as Java and Kotlin, along with tools
                like the Android Software Development Kit (SDK) and Android
                Studio to build robust and user-friendly applications.
                Developers can create both native apps, which are specifically
                designed for the Android platform, and cross-platform apps,
                which work on multiple platforms like iOS and Android.
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
                What programming languages are utilized in Android development?
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
                In Android development, the primary programming languages used
                are Java and Kotlin. Java has been the traditional language for
                Android development for many years, offering a vast ecosystem
                and strong community support. However, Kotlin, which was
                introduced by Google as a first-class language for Android, is
                gaining popularity due to its concise syntax, improved safety
                features, and enhanced performance. Both languages are supported
                by the Android SDK and Android Studio, allowing developers to
                create powerful, efficient, and maintainable apps. Additionally,
                cross-platform technologies like Dart (with Flutter) and
                JavaScript (with React Native) are also used for building apps
                that run on both Android and iOS platforms.
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
                What is Android Studio?
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
                Android Studio is the official integrated development
                environment (IDE) for Android app development, created by
                Google. It provides a comprehensive set of tools for building,
                testing, and debugging Android applications. Android Studio is
                designed to streamline the development process, offering
                features like a code editor, visual layout editor, performance
                profilers, and an emulator to test apps. It supports both Java
                and Kotlin, the primary programming languages used for Android
                development, and includes a range of features such as real-time
                code analysis, refactoring tools, and integration with version
                control systems like Git. Android Studio helps developers create
                high-quality, efficient, and responsive apps for a wide range of
                Android devices.
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
                What is Firebase, and how is it used in Android development?
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
                Firebase is a comprehensive platform developed by Google that
                provides a variety of tools and services for building and
                managing mobile and web applications. It offers services like
                real-time databases, cloud storage, user authentication,
                analytics, and cloud functions, all of which simplify the app
                development process. In Android development, Firebase is
                commonly used to add essential features such as user
                authentication (via Firebase Auth), cloud storage (via Firebase
                Storage), real-time data synchronization (via Firebase Realtime
                Database or Firestore), and push notifications (via Firebase
                Cloud Messaging). Firebase integrates seamlessly with Android
                Studio, making it easy for developers to add powerful backend
                functionalities to their Android apps without needing to manage
                their own infrastructure. Firebase’s scalability and ease of
                integration make it a popular choice for developers looking to
                enhance the capabilities of their Android applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AndroidFaq;
