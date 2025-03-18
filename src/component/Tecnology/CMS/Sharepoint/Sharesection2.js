import React from "react";
import img from "../../CMS/Sharepoint/Sharesectionimages/images.png";

const Sharesection2 = () => {
  return (
    <div>
      <div className="flex justify-center px-1 py-5">
        <div className=" flex justify-center lg:w-[90%] lg:flex-row flex-col py-6 px-3 gap-3  lg:py-28 lg:px-5 rounded-md text-white  bg-black">
          <div className=" flex flex-col items-start gap-4">
            <span className="lg:text-[28px] lg:text-start text-center text-[18px] font-[600]">
              Ready to take your e-commerce to the next level with Magbyte's
              SharePoint solutions?
            </span>
            <p className="lg:text-[18px] text-[12px]">
              As a top SharePoint solutions provider, we specialize in creating
              exceptional, high-performance solutions customized to meet the
              unique needs of your business.
            </p>
            <button className=" text-[12px] lg:text-[18px]  font-[600] px-[20px]  py-[10px]  lg:px-[40px] lg:py-[16px] rounded-[50px] bg-white text-black">
              <span className=" flowing-text"> Free Consultation</span>
            </button>
          </div>

          <img src={img} alt="" className="  rounded-lg" />
        </div>
      </div>

      <div className="flex justify-center py-5">
        <div className=" w-[90%] flex flex-col items-center">
          <div className=" flex flex-col items-center gap-4">
            <span className="lg:text-[28px] text-[18px]  font-[500]">
              Integrating AI with SharePoint
            </span>
            <p className="flex text-center  text-[13px] lg:text-[16px] font-[500]">
              AI offers countless benefits for enhancing a business's SharePoint
              capabilities. Chetu’s developers specialize in integrating AI with
              SharePoint to optimize site-building functionalities, streamline
              processes, and improve overall efficiency.
            </p>
          </div>

          <div className=" pt-6 flex flex-col gap-5">
            <div className=" flex gap-5 lg:flex-row flex-col">
              <div className=" border border-gray-500 flex flex-col gap-3 lg:px-4 lg:py-4 py-2 px-2 rounded-md  lg:w-[400px]">
                <span className="lg:text-[20px] text-[16px] font-[600]">
                  HR Analytics for SharePoint HR Management System{" "}
                </span>
                <p className=" lg:text-[16px]  text-[12px] text-gray-800 leading-relaxed max-w-prose mx-auto ">
                  HR Analytics for SharePoint HR Management System combines the
                  power of data analysis with SharePoint’s collaborative
                  platform to optimize human resource management. By integrating
                  advanced analytics tools into SharePoint, businesses can gain
                  valuable insights into employee performance, recruitment
                  trends, retention rates, and workforce productivity.{" "}
                </p>
              </div>
              <div className=" border border-gray-500 flex flex-col gap-3 lg:px-4 lg:py-4 py-2 px-2 rounded-md  lg:w-[400px]">
                <span className="lg:text-[20px] text-[16px] font-[600]">
                  Intelligent Project Monitoring for SharePoint Project
                  Management{" "}
                </span>
                <p className=" lg:text-[16px]  text-[12px] text-gray-800 leading-relaxed max-w-prose mx-auto ">
                  Intelligent Project Monitoring for SharePoint Project
                  Management utilizes advanced tools and analytics to provide
                  real-time insights into project progress, performance, and
                  potential risks. By integrating smart monitoring features into
                  SharePoint, businesses can track milestones, resource
                  allocation, timelines, and team collaboration more effectively
                </p>
              </div>
              <div className=" border border-gray-500  flex flex-col gap-3 lg:px-4 lg:py-4 py-2 px-2 rounded-md  lg:w-[400px]">
                <span className="lg:text-[20px] text-[16px] font-[600]">
                  Intelligent Search for SharePoint Online
                </span>
                <p className=" lg:text-[16px]  text-[12px] text-gray-800 leading-relaxed max-w-prose mx-auto ">
                  Intelligent Search for SharePoint Online enhances the search
                  functionality by using advanced AI and machine learning
                  algorithms to deliver more accurate and relevant results. With
                  this feature, users can quickly find documents, files, and
                  content based on context, keywords, and user intent, rather
                  than just simple keyword matching.
                </p>
              </div>
            </div>
            <div className=" flex gap-5 lg:flex-row flex-col">
              <div className=" border border-gray-500  flex flex-col gap-3 lg:px-4 lg:py-4 py-2 px-2 rounded-md  lg:w-[400px]">
                <span className="lg:text-[20px] text-[16px] font-[600]">
                  AI-Driven API Error Handling for SharePoint API
                </span>
                <p className=" lg:text-[16px]  text-[12px] text-gray-800 leading-relaxed max-w-prose mx-auto ">
                  AI-Driven API Error Handling for SharePoint API uses
                  artificial intelligence to automatically detect, diagnose, and
                  resolve errors within the SharePoint API. By leveraging
                  machine learning algorithms, this solution can identify
                  patterns in API failures, predict potential issues, and
                  provide real-time recommendations for resolution.
                </p>
              </div>
              <div className=" border border-gray-500 flex flex-col gap-3 lg:px-4 lg:py-4 py-2 px-2 rounded-md  lg:w-[400px]">
                <span className="lg:text-[20px] text-[16px] font-[600]">
                  AI-Based Knowledge Management for SharePoint Online
                </span>
                <p className=" lg:text-[16px]  text-[12px] text-gray-800 leading-relaxed max-w-prose mx-auto ">
                  AI-Based Knowledge Management for SharePoint Online leverages
                  artificial intelligence to streamline the organization,
                  discovery, and sharing of knowledge across an organization. By
                  integrating AI with SharePoint Online, businesses can automate
                  the categorization of content, improve search accuracy, and
                  deliver personalized content recommendations based on user
                  behavior and needs.
                </p>
              </div>
              <div className=" border border-gray-500  flex flex-col gap-3 lg:px-4 lg:py-4 py-2 px-2 rounded-md  lg:w-[400px]">
                <span className="lg:text-[20px] text-[16px] font-[600]">
                  Automated Task Assignment for SharePoint Project Management
                </span>
                <p className=" lg:text-[16px]  text-[12px] text-gray-800 leading-relaxed max-w-prose mx-auto ">
                  Automated Task Assignment for SharePoint Project Management
                  streamlines the process of allocating tasks to team members
                  based on predefined criteria such as availability, skills, and
                  workload. By integrating automation into SharePoint, this
                  solution ensures that tasks are assigned efficiently and
                  consistently, reducing manual effort and minimizing errors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sharesection2;
