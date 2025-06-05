import {
  faCartShopping,
  faCheck,
  faCloud,
  faGear,
  faLaptop,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import img from "./Hiresectionimage/image3.png";
import Slider1 from "../Slider/Slider1";

import Footer from  "../Footer"


const Hiredevsection2 = () => {
  const [change, setchange] = useState(1);

  return (
    <div className="">

      {/* <div className=" flex justify-center py-10">
        <div className="lg:w-[90%] flex flex-col items-center lg:gap-20">
          <span className="lg:text-[28px] text-[20px]   font-[700] ">
            Why hire developers from MageBytes
          </span>
          <div className=" flex space-x-32 ">
            <div className=" flex flex-col gap-5">
              <span className="text-[20px]  font-[700]">Benefits</span>
              <ul className=" list-disc space-y-8 flex flex-col">
                <li>Talent Pool</li>
                <li>Pliable Work Hours</li>
                <li>Source Code Authorization</li>
                <li>Optimum Cost</li>
                <li>Daily Updates</li>
                <li>Scale The Team</li>
              </ul>
            </div>
            <img alt=" " className=" lg:w-[600px] " src={img} />
          </div>
        </div>
      </div> */}
      {/* 
      <div className=" flex justify-center lg:py-10">
        <div className=" lg:w-[90%] flex flex-col items-center ">
          <span className="lg:text-[28px] text-[20px]  font-[700]">
            Why you must hire developers with MageBytes?
          </span>

          <div className=" pt-10 flex  lg:flex-row flex-col space-x-20">
            <div className="">
              <span className="text-blue-500 font-[700] text-[24px]">
                Hire Developers
              </span>
              <form className="pt-5 flex flex-col space-y-6">
                <div className="flex gap-7">
                  <div className=" flex flex-col gap-3">
                    <label className="lg:text-[18px] text-[16px]">
                      First name
                    </label>
                    <input
                      type="text"
                      className=" bg-gradient-to-r from-[#F4F4F9] to-[#e0e4e8] py-[12px] px-[12px] lg:py-[12px] lg:px-[24px] rounded-xl shadow-lg focus:ring-2 focus:ring-[#585DD8] focus:outline-none transition-all duration-300 ease-in-out"
                    />
                  </div>

                  <div className=" flex flex-col gap-3">
                    <label className="lg:text-[18px] text-[16px]">
                      Last name
                    </label>
                    <input
                      type="text"
                      className=" bg-gradient-to-r from-[#F4F4F9] to-[#e0e4e8] py-[12px] px-[12px] lg:py-[12px] lg:px-[24px] rounded-xl shadow-lg focus:ring-2 focus:ring-[#585DD8] focus:outline-none transition-all duration-300 ease-in-out"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label className="lg:text-[18px] text-[16px]">Email</label>
                  <input className=" bg-gradient-to-r from-[#F4F4F9] to-[#e0e4e8] py-[12px] px-[12px] lg:py-[12px] lg:px-[24px]  rounded-xl shadow-lg flex gap-3 items-center focus:ring-2 focus:ring-[#585DD8] focus:outline-none transition-all duration-300 ease-in-out" />
                </div>

                <div className="flex flex-col gap-3">
                  <label className="lg:text-[18px] text-[16px]">
                    Organization
                  </label>
                  <input className=" bg-gradient-to-r from-[#F4F4F9] to-[#e0e4e8] py-[12px] px-[12px] lg:py-[12px] lg:px-[24px]  rounded-xl shadow-lg flex gap-3 items-center focus:ring-2 focus:ring-[#585DD8] focus:outline-none transition-all duration-300 ease-in-out" />
                </div>

                <div className="flex flex-col gap-3">
                  <label className="lg:text-[18px] text-[16px]">
                    Select Tecnologies
                  </label>
                  <select className=" bg-gradient-to-r from-[#F4F4F9] to-[#e0e4e8] py-[12px] px-[12px] lg:py-[12px] lg:px-[24px]  rounded-xl shadow-lg flex gap-3 items-center focus:ring-2 focus:ring-[#585DD8] focus:outline-none transition-all duration-300 ease-in-out">
                    <option>Magento</option>
                    <option>Spotify</option>
                    <option>Bigcommarce</option>
                    <option>Woocommarce</option>
                  </select>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="lg:text-[18px] text-[16px]">Message</label>
                  <textarea
                    className="lg:w-[484px] w-[90%] bg-gradient-to-r from-[#F4F4F9] to-[#e0e4e8] py-[12px] px-[12px] lg:py-[18px] lg:px-[20px]  lg:py-[18px] lg:px-[20px]  rounded-xl shadow-lg text-[16px] focus:ring-2 focus:ring-[#585DD8] focus:outline-none transition-all duration-300 ease-in-out"
                    placeholder="Go ahead, we are listening..."
                    rows="4"
                  ></textarea>

                  <button className="lg:w-[486px] w-[90%] py-[7px] lg:py-[15px] rounded-xl text-lg font-semibold text-[#FFFFFF] transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#4A54D1] focus:ring-opacity-50 bg-gradient-to-r from-[#7E8BF6] to-[#585DD8]">
                    Submit
                  </button>
                </div>
              </form>
            </div>

            <div className="flex flex-col  gap-7">
              <div className="flex flex-col gap-3 items-center ">
                <span className="lg:text-[22px] tex-[20px] font-[700]">
                  How does our 2 week trail Work?
                </span>
                <span className="lg:text-[16px] text-[12px] ">
                  Try our experts and then add them to your team.
                </span>
              </div>

              <div className=" flex flex-col gap-5  ">
                <div className="flex gap-4">
                  <div className="border shadow-2xl lg:w-[300px] hover:shadow-lg py-6 px-10 rounded-lg bg-white">
                    <u className="text-blue-600 text-xl font-semibold hover:text-blue-700 cursor-pointer transition duration-300 ease-in-out">
                      Inquire
                    </u>
                    <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                      Send us your requirement, based on your requirement we
                      will send you some CVs.
                    </p>
                    <div className="mt-5 flex items-center">
                      <span className="bg-blue-500 text-white py-3 px-6 rounded-full text-xl font-semibold shadow-md hover:bg-blue-600 transition duration-300 ease-in-out mr-3">
                        1
                      </span>
                      <span className="text-gray-700 text-xl font-medium">
                        Step
                      </span>
                    </div>
                  </div>
                  <div className="border shadow-2xl lg:w-[300px] hover:shadow-lg py-6 px-10 rounded-lg bg-white">
                    <u className="text-blue-600 text-xl font-semibold hover:text-blue-700 cursor-pointer transition duration-300 ease-in-out">
                      Select CV
                    </u>
                    <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                      Go through the CVs and select the one that best fit to
                      your needs.
                    </p>
                    <div className="mt-5 flex items-center">
                      <span className="bg-blue-500 text-white py-3 px-6 rounded-full text-xl font-semibold shadow-md hover:bg-blue-600 transition duration-300 ease-in-out mr-3">
                        2
                      </span>
                      <span className="text-gray-700 text-xl font-medium">
                        Step
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="border shadow-2xl hover:shadow-lg py-6 px-10 rounded-lg lg:w-[300px] bg-white">
                    <u className="text-blue-600 text-xl font-semibold hover:text-blue-700 cursor-pointer transition duration-300 ease-in-out">
                      Interview
                    </u>
                    <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                      Take interview and try them out for one week.
                    </p>
                    <div className="mt-5 flex items-center">
                      <span className="bg-blue-500 text-white py-3 px-6 rounded-full text-xl font-semibold shadow-md hover:bg-blue-600 transition duration-300 ease-in-out mr-3">
                        3
                      </span>
                      <span className="text-gray-700 text-xl font-medium">
                        Step
                      </span>
                    </div>
                  </div>
                  <div className="border shadow-2xl hover:shadow-lg py-6 px-10 rounded-lg bg-white lg:w-[300px]">
                    <u className="text-blue-600 text-xl font-semibold hover:text-blue-700 cursor-pointer transition duration-300 ease-in-out">
                      Select
                    </u>
                    <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                      If you like their work add them to your team, else try out
                      a new resource.
                    </p>
                    <div className="mt-5 flex items-center">
                      <span className="bg-blue-500 text-white py-3 px-6 rounded-full text-xl font-semibold shadow-md hover:bg-blue-600 transition duration-300 ease-in-out mr-3">
                        4
                      </span>
                      <span className="text-gray-700 text-xl font-medium">
                        Step
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className=" justify-center flex py-10 px-2">
        <div className="lg:w-[90%]">
          <div className=" flex flex-col items-center gap-3">
            <span className=" lg:text-[28px] text-[22px]  font-[600] ">
              Our Tecnologies
            </span>
            <span className="lg:text-[18px] text-[14px]">
              Technologies that we are well versed in :{" "}
            </span>
          </div>
          <div className=" lg:px-5 lg:py-5 px-2 py-2 border border-blue-800    rounded-md mt-3 lg:mt-10">
            <div className=" flex lg:gap-6 gap-2  flex-wrap lg:flex-nowrap">
              <div
                className="flex items-centerlg:space-x-4 space-x-2 border lg:w-[220px] lg:px-4 lg:py-3 px-2 py-1 border-blue-700 rounded-lg hover:bg-blue-50 transition-all duration-300"
                onClick={() => setchange(1)}
              >
                <FontAwesomeIcon
                  icon={faGear}
                  className="text-[20px] text-blue-600"
                />
                <span className="text-[14px] lg:text-[18px] font-semibold text-blue-600">
                  Custom
                </span>
              </div>

              <div
                className="flex items-center space-x-4 border lg:w-[220px] lg:px-4 lg:py-3 px-2 py-1 border-blue-700 rounded-lg hover:bg-blue-50 transition-all duration-300"
                onClick={() => setchange(2)}
              >
                <FontAwesomeIcon
                  icon={faMobile}
                  className="text-[20px] text-blue-600"
                />
                <span className="text-[14px] lg:text-[18px] whitespace-nowrap  font-semibold text-blue-600">
                  Mobile Apps
                </span>
              </div>

              <div
                className="flex items-center lg:space-x-4 space-x-2 border lg:w-[220px] lg:px-4 lg:py-3 px-2 py-1 border-blue-700 rounded-lg hover:bg-blue-50 transition-all duration-300"
                onClick={() => setchange(3)}
              >
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="text-[20px] text-blue-600"
                />
                <span className="text-[14px] lg:text-[18px] font-semibold text-blue-600">
                  Ecommarce
                </span>
              </div>

              <div
                className="flex items-center lg:space-x-4 space-x-2 border lg:w-[220px] lg:px-4 lg:py-3 px-2 py-1 border-blue-700 rounded-lg hover:bg-blue-50 transition-all duration-300"
                onClick={() => setchange(4)}
              >
                <FontAwesomeIcon
                  icon={faLaptop}
                  className="text-[20px] text-blue-600"
                />
                <span className="text-[14px] lg:text-[18px] font-semibold text-blue-600">
                  CMS
                </span>
              </div>

              <div
                className="flex items-center lg:space-x-4 space-x-2 border lg:w-[220px] lg:px-4 lg:py-3 px-2 py-1 border-blue-700 rounded-lg hover:bg-blue-50 transition-all duration-300"
                onClick={() => setchange(5)}
              >
                <FontAwesomeIcon
                  icon={faLaptop}
                  className="text-[20px] text-blue-600"
                />
                <span className="text-[14px] lg:text-[18px] font-semibold text-blue-600">
                  Crm
                </span>
              </div>

              <div
                className="flex items-center lg:space-x-4 space-x-2 border lg:w-[220px] lg:px-4 lg:py-3 px-2 py-1 border-blue-700 rounded-lg hover:bg-blue-50 transition-all duration-300"
                onClick={() => setchange(6)}
              >
                <FontAwesomeIcon
                  icon={faCloud}
                  className="text-[20px] text-blue-600"
                />
                <span className="text-[14px] lg:text-[18px] font-semibold text-blue-600">
                  Cloud
                </span>
              </div>
            </div>
            {change === 1 ? (
              <div className="flex  flex-col ">
                <div className="   lg:px-5 lg:py-5 px-2 py-2 border border-blue-800 bg-slate-200  rounded-md mt-3 lg:mt-10">
                  <div className=" flex flex-col  lg:space-y-3">
                    <span className="lg:text-[16px] text-[16px] font-[500] text-[blue] ">
                      {" "}
                      Frontend Development{" "}
                    </span>
                    <hr />

                    <ul className="lg:flex  grid grid-cols-2 lg:space-x-20 pt-2 lg:pt-5 text-[12px] lg:text-[14px] font-[500]">
                      <li>javascript</li>
                      <li>React.js</li>
                      <li>Angular</li>
                      <li>vue.js</li>
                      <li>tailwind</li>
                      <li>Typescript</li>
                      <li>Next.js</li>
                      <li>Gatsby.js</li>
                    </ul>
                  </div>
                </div>

                <div className=" lg:px-5 lg:py-5 px-2 py-2 border border-blue-800 bg-slate-200  rounded-md mt-3 lg:mt-10">
                  <div className=" flex flex-col  lg:space-y-3">
                    <span className="lg:text-[16px] font-[500] text-[12px] text-[blue]">
                      {" "}
                      Backend Development{" "}
                    </span>
                    <hr />

                    <ul className="lg:flex  grid grid-cols-2 lg:space-x-20 pt-2 lg:pt-5 text-[12px] lg:text-[14px] font-[500]">
                      <li>Node.js</li>
                      <li>Express.js</li>
                      <li>Django</li>
                      <li>Ruby and Rails</li>
                      <li>ASP.Net</li>
                      <li>Springboot</li>
                      <li>Sitecore</li>
                    </ul>
                  </div>
                </div>

                <div className=" lg:px-5 lg:py-5 px-2 py-2 border border-blue-800 bg-slate-200   rounded-md mt-3 lg:mt-10">
                  <div className=" flex flex-col  lg:space-y-3">
                    <span className="lg:text-[18px] font-[500] text-[12px] text-[blue]">
                      {" "}
                      Database{" "}
                    </span>
                    <hr />

                    <ul className="lg:flex  grid grid-cols-2 lg:space-x-20 pt-2 lg:pt-5 text-[12px] lg:text-[14px] font-[500]">
                      <li>SQlite</li>
                      <li>MSSQL</li>
                      <li>Postgresql</li>
                      <li>MongoDB</li>
                      <li>Oracle</li>
                      <li>Redis</li>
                      <li>MYSQL</li>
                    </ul>
                  </div>
                </div>

                <div className=" lg:px-5 lg:py-5 px-2 py-2 border border-blue-800 bg-slate-200  rounded-md mt-3 lg:mt-10">
                  <div className=" flex flex-col  space-y-3">
                    <span className="lg:text-[16px] font-[500] text-[12px] text-[blue]">
                      {" "}
                      Full stack Development{" "}
                    </span>
                    <hr />

                    <ul className="lg:flex  grid grid-cols-2 lg:space-x-20 pt-2 lg:pt-5 text-[12px] lg:text-[14px] font-[500]">
                      <li>Mean stack</li>
                      <li>Full stack</li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : change === 2 ? (
              <div className="flex  flex-col ">
                <div className=" lg:px-5 lg:py-5 px-2 py-2 border border-blue-800 bg-slate-200   rounded-md mt-3 lg:mt-10">
                  <div className=" flex flex-col  lg:space-y-3">
                    <span className="lg:text-[18px] font-[500] text-[12px] text-[blue]">
                      {" "}
                      Database{" "}
                    </span>
                    <hr />

                    <ul className="lg:flex  grid grid-cols-2 lg:space-x-20 pt-2 lg:pt-5 text-[12px] lg:text-[14px] font-[500]">
                      <li>Flutter</li>
                      <li>Reactnavtive</li>
                      <li>Xamarine</li>
                      <li>Nativescript</li>
                      <li>Cordova</li>
                    </ul>
                  </div>
                </div>

                <div className=" lg:px-5 lg:py-5 px-2 py-2 border border-blue-800 bg-slate-200  rounded-md mt-3 lg:mt-10">
                  <div className=" flex flex-col  lg:space-y-3">
                    <span className="lg:text-[16px] font-[500] text-[12px] text-[blue]">
                      {" "}
                      Android Development{" "}
                    </span>
                    <hr />

                    <ul className="lg:flex  grid grid-cols-2 lg:space-x-20 pt-2 lg:pt-5 text-[12px] lg:text-[14px] font-[500]">
                      <li>Java</li>
                      <li>Kotline</li>
                    </ul>
                  </div>
                </div>

                <div className=" lg:px-5 lg:py-5 px-2 py-2 border border-blue-800 bg-slate-200  rounded-md mt-3 lg:mt-10">
                  <div className=" flex flex-col  lg:space-y-3">
                    <span className="lg:text-[16px] font-[500] text-[12px] text-[blue]">
                      {" "}
                      IOS Development{" "}
                    </span>
                    <hr />

                    <ul className="lg:flex  grid grid-cols-2 lg:space-x-20 pt-2 lg:pt-5 text-[12px] lg:text-[14px] font-[500]">
                      <li>Swift </li>
                      <li>Swift UI</li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : change === 3 ? (
              <div className="flex  flex-col ">
                <div className=" lg:px-5 lg:py-5 px-2 py-2 border border-blue-800 bg-slate-200   rounded-md mt-3 lg:mt-10">
                  <div className=" flex flex-col  lg:space-y-3">
                    <span className="lg:text-[18px] font-[500] text-[12px] text-[blue]">
                      {" "}
                      Tecnologies{" "}
                    </span>
                    <hr />

                    <ul className="lg:flex  grid grid-cols-2 lg:space-x-20 pt-2 lg:pt-5 text-[12px] lg:text-[14px] font-[500]">
                      <li>Prstashop</li>
                      <li>Opencart</li>
                      <li>Zencart</li>
                      <li>CSCart</li>
                      <li>Bigcommarce</li>
                      <li>Mangento</li>
                      <li>Spotify</li>
                      <li>Woocommarce</li>
                    </ul>
                  </div>
                </div>

                <div className=" lg:px-5 lg:py-5 px-2 py-2 border border-blue-800 bg-slate-200  rounded-md mt-3 lg:mt-10">
                  <div className=" flex flex-col  lg:space-y-3">
                    <span className="lg:text-[16px] font-[500] text-[12px] text-[blue]">
                      {" "}
                      Android Development{" "}
                    </span>
                    <hr />

                    <ul className="lg:flex  grid grid-cols-2 lg:space-x-20 pt-2 lg:pt-5 text-[12px] lg:text-[14px] font-[500]">
                      <li>Java</li>
                      <li>Kotline</li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : change === 4 ? (
              <div className="flex  flex-col ">
                <div className=" lg:px-5 lg:py-5 px-2 py-2 border border-blue-800 bg-slate-200   rounded-md mt-3 lg:mt-10">
                  <div className=" flex flex-col  lg:space-y-3">
                    <span className="lg:text-[18px] font-[500] text-[12px] text-[blue]">
                      {" "}
                      Tecnologies{" "}
                    </span>
                    <hr />

                    <ul className="lg:flex  grid grid-cols-2 lg:space-x-20 pt-2 lg:pt-5 text-[12px] lg:text-[14px] font-[500]">
                      <li>Drupal</li>
                      <li>Craft</li>
                      <li>Joomla</li>
                      <li>Sharepoint</li>
                      <li>Sitecore</li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : change === 5 ? (
              <div className="flex  flex-col ">
                <div className=" lg:px-5 lg:py-5 px-2 py-2 border border-blue-800 bg-slate-200   rounded-md mt-3 lg:mt-10">
                  <div className=" flex flex-col  lg:space-y-3">
                    <span className="lg:text-[18px] font-[500] text-[12px] text-[blue]">
                      {" "}
                      Tecnologies{" "}
                    </span>
                    <hr />

                    <ul className="lg:flex  grid grid-cols-2 lg:space-x-20 pt-2 lg:pt-5 text-[12px] lg:text-[14px] font-[500]">
                      <li>Service</li>
                      <li>Salesforcee</li>
                      <li>Hubspot</li>
                      <li>Zoho</li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : change === 6 ? (
              <div className="flex  flex-col ">
                <div className=" lg:px-5 lg:py-5 px-2 py-2 border border-blue-800 bg-slate-200   rounded-md mt-3 lg:mt-10">
                  <div className=" flex flex-col  lg:space-y-3">
                    <span className="lg:text-[18px] font-[500] text-[12px] text-[blue]">
                      {" "}
                      Tecnologies{" "}
                    </span>
                    <hr />

                    <ul className="lg:flex  grid grid-cols-2 lg:space-x-20 pt-2 lg:pt-5 text-[12px] lg:text-[14px] font-[500]">
                      <li>AWS</li>
                      <li>Azure</li>
                      <li>Google Cloud</li>
                      <li>Devops</li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <div className=" flex justify-center py-5">
        <div className="lg:w-[90%] flex flex-col  items-center px-1">
          <div className="flex flex-col items-center space-x-1 lg:space-y-3">
            <span className="lg:text-[28px] text-[19px] text-center  font-[700] ">
              Hire remotely based on your requirement
            </span>
            <p className="lg:text-[18px] text-[13px] text-center  ">
              Hire a team or an individual for full time or part time to lessen
              your work load and boost your delivery.
            </p>
          </div>
          <div className="flex lg:flex-row   flex-col-reverse  lg:gap-0 gap-4 pt-10 lg:space-x-6">
            <img src={img} alt="" className="lg:w-[700px]" />
            <div className=" lg:w-[700px] flex flex-col gap-7">
              <div className=" flex flex-col gap-2 items-start border px-3 py-2 rounded-md shadow-xl border-gray-500 ">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="py-2 px-2 bg-blue-600 rounded-full text-white"
                />

                <div className="w-full">
                  <span className="lg:text-[18px] text-[14px] font-[500]">
                    Dedicated Developer
                  </span>
                  <p className=" lg:text-[16px]  text-[12px] text-gray-800 leading-relaxed max-w-prose  ">
                    Hire a dedicated developer to speed up your project’s
                    delivery. An individual will be allocated to your project
                    that will work with your in-house team.
                  </p>
                </div>
              </div>

              <div className=" flex flex-col gap-2 items-start border px-3 py-2 rounded-md shadow-xl border-gray-500 ">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="py-2 px-2 bg-blue-600 rounded-full text-white"
                />

                <div className="w-full">
                  <span className="lg:text-[18px] text-[14px] font-[500]">
                    Dedicated Team
                  </span>
                  <p className=" lg:text-[16px]  text-[12px] text-gray-800 leading-relaxed max-w-prose  ">
                    Hire a dedicated team of experts to avail best in class
                    service for your project. A complete team will be appointed
                    that will work only on your project and will be directly in
                    touch with you.
                  </p>
                </div>
              </div>

              <div className=" flex flex-col gap-2 items-start border px-3 py-2 rounded-md shadow-xl border-gray-500 ">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="py-2 px-2 bg-blue-600 rounded-full text-white"
                />

                <div className="w-full">
                  <span className="lg:text-[18px] text-[14px] font-[500]">
                    Part time
                  </span>
                  <p className=" lg:text-[16px]  text-[12px] text-gray-800 leading-relaxed max-w-prose  ">
                    Based on how much work hours per day your project requires,
                    you can opt for part time. This will save your money and
                    will boost your project’s delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20">
        <Slider1 />
      </div>
   <Footer/>
    </div>
  );
};

export default Hiredevsection2;
