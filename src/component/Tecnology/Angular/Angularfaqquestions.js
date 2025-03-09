import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Angularfaqquestions = () => {
  const [isOpen, setIsOpen] = useState(0);
  return (
    <div className="">
      <div className="flex  justify-center py-8  lg:py-16">
        <div className="lg:w-[80%] px-3">
          <div className="text-center flex justify-center">
            <span className="lg:text-[28px] text-[20px]  font-[600]">
              Angular Development Services FAQ
            </span>
          </div>

          <div className="pt-10">
            <div className="border border-gray-300 bg-gray-50 lg:px-5 lg:py-2 px-2 rounded-md flex-col space-y-8 shadow-md">
              <div
                className="flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                onClick={() => (isOpen === 1 ? setIsOpen(0) : setIsOpen(1))}
              >
                <span className="text-gray-800 lg:text-[16px] text-[14px] font-semibold">
                  What is Angular
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
                  Angular is a popular open-source web application framework
                  developed and maintained by Google. It is used to build
                  dynamic, single-page web applications (SPAs) with a focus on
                  simplicity, scalability, and maintainability. Angular is based
                  on TypeScript, a superset of JavaScript, and follows the
                  Model-View-Controller (MVC) architecture.
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
                  What are the main features of Angular
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
                  Angular has several key features that make it a powerful and
                  popular framework for building web applications. Here are the
                  main features of Angular: Component-based Architecture:
                  Angular uses a component-based architecture where each UI
                  element is a component. Components are the building blocks of
                  Angular applications, containing both the template (HTML) and
                  the logic (TypeScript/JavaScript). Two-way Data Binding:
                  Angular provides two-way data binding, which means that any
                  changes in the user interface automatically update the
                  corresponding model (data), and vice versa. This makes it
                  easier to manage synchronization between the model and view.
                  Directives: Directives are special markers in the DOM that add
                  behavior to elements. Angular provides built-in directives
                  like ngIf (for conditionally rendering elements) and ngFor
                  (for rendering lists). You can also create custom directives
                  to extend HTML's capabilities. Dependency Injection (DI):
                  Angular has a built-in dependency injection system that allows
                  for better management of service instances and improves
                  modularity and testability. DI makes it easy to inject
                  services into components, reducing the need for boilerplate
                  code and improving code reusability. Routing: Angular provides
                  a powerful routing mechanism that allows you to manage
                  navigation between different views or pages within a
                  single-page application (SPA). The router enables deep
                  linking, lazy loading of modules, and handling of route
                  parameters.
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
                  Why should I use Angular for my project?
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
                  Choosing Angular for your project comes with several
                  advantages. Here are some compelling reasons why you might
                  want to use Angular: 1. Comprehensive Framework: Angular is a
                  full-fledged, comprehensive framework that provides everything
                  you need to build complex web applications. It covers the
                  entire development process, from routing and data binding to
                  HTTP requests and testing. This all-in-one approach reduces
                  the need for external libraries and ensures that all parts of
                  your app work together seamlessly. 2. Component-based
                  Architecture: Angular’s component-based architecture allows
                  for modular, reusable, and maintainable code. Each component
                  encapsulates both the UI (HTML) and logic (TypeScript), which
                  makes it easier to organize your codebase, manage complex UIs,
                  and reuse components across different parts of your
                  application. 3. Two-way Data Binding: Angular’s two-way data
                  binding feature ensures that changes in the user interface
                  (UI) automatically reflect in the underlying data model, and
                  vice versa. This simplifies synchronization between the view
                  and the model, reducing the need for complex code. 4.
                  Dependency Injection (DI): Angular's built-in Dependency
                  Injection system makes managing services and components
                  easier. DI improves code modularity, reusability, and
                  testability, allowing you to inject services where needed
                  without tightly coupling them to specific components. 5.
                  Built-in Routing: Angular’s robust routing system makes it
                  easy to build single-page applications (SPAs) with multiple
                  views and navigation. You can define different routes, handle
                  nested routes, and load modules lazily to improve performance.
                  6. TypeScript: Angular is built on TypeScript, which adds
                  static typing to JavaScript. TypeScript enables you to catch
                  errors early in the development process, enhances code
                  readability, and offers better tooling support (such as
                  autocompletion and refactoring) that can help developers write
                  cleaner, more maintainable code. 7. Cross-Platform
                  Development: With Angular, you can build applications that
                  work on multiple platforms, including web, mobile (using
                  Ionic), and desktop (using Electron). This cross-platform
                  capability allows you to write your application once and
                  deploy it across various environments. 8. RxJS for
                  Asynchronous Programming: Angular integrates RxJS for managing
                  asynchronous operations and event-based programming. This
                  makes it easy to handle complex data streams, such as HTTP
                  requests, user inputs, and WebSocket connections, in a
                  declarative manner. 9. Powerful CLI (Command Line Interface):
                  Angular CLI is a powerful tool that streamlines the
                  development workflow. It helps with creating components,
                  services, modules, and other elements, as well as running
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
                  Does Angular support internationalization?
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
                  Yes, Angular does support internationalization (i18n). Angular
                  provides a built-in set of tools and features that allow
                  developers to build applications that can be easily localized
                  for different languages, regions, and cultural conventions.
                  Key Features of Angular's Internationalization Support: i18n
                  Module: Angular has an i18n module built into the framework
                  that allows you to mark content for translation within
                  templates. You can use the i18n attribute in HTML elements to
                  identify content that should be translated, making it easy to
                  manage translations. Translation of Static Text: You can
                  translate text within your templates by marking them for
                  extraction using the i18n attribute. This allows Angular to
                  extract and generate translation files, which you can then
                  edit to add translations for different languages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Angularfaqquestions;
