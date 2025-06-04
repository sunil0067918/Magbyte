import React from "react";

const Dedicatedsection2 = () => {
  return (
    <div className="flex justify-center py-6     ">
      <div className=" w-[90%]  flex justify-center flex-col">
        <span className="lg:text-[28px] text-center font-[600]">
          What does the dedicated development team consist of?
        </span>
        <div className="pt-10 flex flex-col items-center gap-6 cursor-pointer">
          <div className="flex flex-col lg:flex-row  gap-6">
            <div className="bg-gray-100 px-6 py-5 gap-7  rounded-md lg:w-[600px] transition-all duration-300 hover:scale-105 hover:shadow-md">
              <span className="lg:text-[24px]  font-[600] text-blue-800">
                Project Manager
              </span>
              <p className="lg:text-[18px] font-[400] text-gray-500">
                A project manager is responsible for overseeing the planning,
                execution, and completion of a project. They ensure that the
                project is completed on time, within budget, and meets the
                desired quality standards. The project manager coordinates with
                various teams, manages resources, identifies potential risks,
                and resolves issues that arise during the project.
              </p>
            </div>
            <div className="bg-gray-100 px-6 py-5 gap-7  rounded-md  lg:w-[600px] transition-all duration-300 hover:scale-105 hover:shadow-md">
              <span className="lg:text-[24px]  font-[600] text-blue-800">
                Business Analyst
              </span>
              <p className="lg:text-[18px] font-[400] text-gray-500">
                A business analyst is responsible for identifying business needs
                and finding technical solutions to address those needs. They act
                as a bridge between stakeholders (such as clients, managers, and
                users) and the development team, ensuring that business
                requirements are clearly understood and implemented. Business
                analysts gather, analyze, and document requirements, ensuring
                that the project delivers value to the organization.
              </p>
            </div>
          </div>

          <div className="flex  gap-6  flex-col lg:flex-row">
            <div className="bg-gray-100 px-6 py-5 gap-7  rounded-md lg:w-[600px] transition-all duration-300 hover:scale-105 hover:shadow-md">
              <span className="lg:text-[24px]  font-[600] text-blue-800">
                Back end devlopers
              </span>
              <p className="lg:text-[18px] font-[400] text-gray-500">
                Back-end developers are responsible for building and maintaining
                the server-side logic, databases, and application programming
                interfaces (APIs) that power the functionality of a website or
                application. They ensure that the server, database, and
                application work together seamlessly to deliver the desired user
                experience. Back-end developers write code to handle requests,
                process data, and manage data storage.
              </p>
            </div>
            <div className="bg-gray-100 px-6 py-5 gap-7  rounded-md  lg:w-[600px] transition-all duration-300 hover:scale-105 hover:shadow-md">
              <span className="lg:text-[24px]  font-[600] text-blue-800">
                UI/UX Desiger
              </span>
              <p className="lg:text-[18px] font-[400] text-gray-500">
                A UI/UX designer is responsible for creating the user interface
                (UI) and user experience (UX) of a product, such as a website or
                mobile app. The UI aspect focuses on designing the look and feel
                of the product, including layout, colors, typography, buttons,
                and other visual elements that users interact with. The UX
                aspect focuses on ensuring the product is easy to use,
                intuitive, and provides a positive experience for users by
                understanding their needs and behaviors.
              </p>
            </div>
          </div>

          <div className="flex  gap-6  flex-col lg:flex-row">
            <div className="bg-gray-100 px-6 py-5 gap-7  rounded-md lg:w-[600px] transition-all duration-300 hover:scale-105 hover:shadow-md">
              <span className="lg:text-[24px]  font-[600] text-blue-800">
                Full stack devlopers
              </span>
              <p className="lg:text-[18px] font-[400] text-gray-500">
                A full-stack developer is a software engineer who is proficient
                in both front-end and back-end development. They have the skills
                to work on every layer of a web application, from the user
                interface (UI) that users interact with (front-end) to the
                server-side logic and databases that handle the data and
                functionality (back-end). Full-stack developers typically work
                with various technologies, including HTML, CSS, and JavaScript
                for front-end development,
              </p>
            </div>
            <div className="bg-gray-100 px-6 py-5 gap-7  rounded-md  lg:w-[600px] transition-all duration-300 hover:scale-105 hover:shadow-md">
              <span className="lg:text-[24px]  font-[600] text-blue-800">
                DevOps Engineer
              </span>
              <p className="lg:text-[18px] font-[400] text-gray-500">
                A DevOps Engineer is a professional responsible for bridging the
                gap between software development and IT operations. Their main
                role is to automate, monitor, and optimize the processes of
                software development, deployment, and infrastructure management.
                This includes designing and managing CI/CD (Continuous
                Integration/Continuous Deployment) pipelines, automating
                repetitive tasks, and ensuring that development, testing, and
                production environments are consistent and reliable.
              </p>
            </div>
          </div>

          <div className="flex  gap-6  flex-col lg:flex-row">
            <div className="bg-gray-100 px-6 py-5 gap-7  rounded-md lg:w-[600px] transition-all duration-300 hover:scale-105 hover:shadow-md">
              <span className="lg:text-[24px]  font-[600] text-blue-800">
                Frontend Devlopers
              </span>
              <p className="lg:text-[18px] font-[400] text-gray-500">
                Front-end developers are responsible for creating the
                user-facing part of a website or web application. They focus on
                designing and implementing the layout, structure, and
                interactivity that users see and interact with. Their work
                ensures that the application is visually appealing, responsive,
                and user-friendly. Front-end developers typically use languages
                like HTML, CSS, and JavaScript to build the interface. They
                often work with frameworks and libraries like React, Angular,
              </p>
            </div>
            <div className="bg-gray-100 px-6 py-5 gap-7  rounded-md  lg:w-[600px] transition-all duration-300 hover:scale-105 hover:shadow-md">
              <span className="lg:text-[24px]  font-[600] text-blue-800">
                QA Engineer
              </span>
              <p className="lg:text-[18px] font-[400] text-gray-500">
                QA (Quality Assurance) Engineers are responsible for ensuring
                that software products meet the required quality standards
                before being released. They focus on testing and identifying
                bugs, issues, or inconsistencies in the software to ensure it
                works as expected. QA engineers design and execute test cases,
                automate testing processes, and work closely with developers to
                resolve any defects or improvements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dedicatedsection2;
