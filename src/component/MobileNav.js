import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileNav = ({ change }) => {
  const [drop, setdrop] = useState(0);

  return (
    <div
      className={`transition-all duration-[800ms] absolute ${
        change ? "top-[-12px] left-0" : " top-[-1000px] left-0 "
      } bg-gradient-to-t from-black to-gray-600  text-white w-full    block  lg:hidden z-[40] px-4 pt-16 pb-10`}
    >
      <ul className="flex justify-between gap-10   tracking-wider  flex-col capitalize ">
        <li>
          <div className="flex  gap-1     flex-col ">
            <div className="flex justify-between">
              <span className="hover:text-[#4687C7]  text-[20px] font-[600]   ">
                Services
              </span>
              <div>
                <div>
                  <FontAwesomeIcon
                    className={`w-[30px] h-[24px] transition-all duration-[800ms] ease-in-out transform ${
                      drop === 1
                        ? "rotate-180 opacity-100"
                        : "rotate-0 opacity-60"
                    }`}
                    icon={drop === 1 ? faCaretUp : faCaretDown}
                    onClick={() => setdrop(drop === 1 ? 0 : 1)}
                  />
                </div>
              </div>
            </div>

            <ul
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                drop === 1
                  ? "max-h-[500px] opacity-100 visible"
                  : "max-h-0 opacity-0 invisible"
              } text-[13px] font-bold pt-1 space-y-4 text-white cursor-pointer   overflow-y-scroll flex flex-col bg-gray-800 px-3 py-2 items-baseline w-full`}
            >
              <Link to="/webdesign">
                <li className="hover:text-blue-700 text-[14px]">Web Design</li>
              </Link>
              <Link to="/web">
                <li className="hover:text-blue-700 text-[14px]">
                  Web and App Development
                </li>
              </Link>
              <Link to="/digital">
                <li className="hover:text-blue-700 text-[14px]">
                  Digital Marketing
                </li>
              </Link>
              <Link to="/Ecommarce">
                <li className="hover:text-blue-700 text-[14px]">E-commerce</li>
              </Link>
              <Link to="/Main">
                <li className="hover:text-blue-700 text-[14px]">
                  Maintenance & Support
                </li>
              </Link>
              <Link to="/Dedicated">
                <li className="hover:text-blue-700 text-[14px]">
                  Dedicated Team
                </li>
              </Link>
              <Link to="/QA">
                <li className="hover:text-blue-700 text-[14px]">
                  QA & Testing
                </li>
              </Link>
              <Link to="/frame">
                <li className="hover:text-blue-700 text-[14px]">Frameworks</li>
              </Link>
            </ul>
          </div>
        </li>

        <li>
          <div className="flex  gap-1     flex-col ">
            <div className="flex justify-between">
              <span className="hover:text-[#4687C7]  text-[20px] font-[600]   ">
                Technologies
              </span>
              <div>
                <div>
                  <div>
                    <FontAwesomeIcon
                      className={`w-[30px] h-[24px] transition-all duration-[800ms] ease-in-out transform ${
                        drop === 2
                          ? "rotate-180 opacity-100"
                          : "rotate-0 opacity-60"
                      }`}
                      icon={drop === 2 ? faCaretUp : faCaretDown}
                      onClick={() => setdrop(drop === 2 ? 0 : 2)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <ul
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                drop === 2
                  ? "max-h-[500px] opacity-100 visible"
                  : "max-h-0 opacity-0 invisible"
              } text-[13px] font-bold pt-1 space-y-4 text-white cursor-pointer flex flex-col bg-gray-800 px-3   overflow-y-scroll items-baseline w-full`}
            >
              {" "}
              <li className="">
                <div>
                  <span className="hover:text-blue-700 font-[600] text-[16px]">
                    Custom Development
                  </span>
                  <hr />
                  <ul className="flex flex-col gap-3 pt-5 text-gray-300">
                    <Link to="/python">
                      <li className="hover:text-blue-700 text-[14px]">
                        Python
                      </li>
                    </Link>
                    <Link to="/Laravel">
                      <li className="hover:text-blue-700 text-[14px]">
                        Laravel
                      </li>
                    </Link>
                    <Link>
                      <li className="hover:text-blue-700 text-[14px]">
                        DotNet
                      </li>
                    </Link>
                 <Link to  =  "/angular">
                 <li className="hover:text-blue-700 text-[14px]">Angular</li>
                 </Link>
                    <Link to="/Reactt">
                      <li className="hover:text-blue-700 text-[14px]">
                        React JS
                      </li>
                    </Link>
                    <li className="hover:text-blue-700 text-[14px]">
                      JavaScript
                    </li>
                    <li className="hover:text-blue-700 text-[14px]">PHP</li>
                  </ul>
                </div>
                <div className="pt-3">
                  <span className="hover:text-blue-700 text-white font-[600] text-[16px]">
                    CMS
                  </span>
                  <hr />
                  <ul className="flex flex-col gap-3 pt-5 text-gray-300">
                    <li className="hover:text-blue-700 text-[14px]">
                      WordPress
                    </li>
                    <li className="hover:text-blue-700 text-[14px]">Drupal</li>
                    <li className="hover:text-blue-700 text-[14px]">Craft</li>
                    <li className="hover:text-blue-700 text-[14px]">Joomla</li>
                    <li className="hover:text-blue-700 text-[14px]">
                      SharePoint
                    </li>
                    <li className="hover:text-blue-700 text-[14px]">Umbraco</li>
                    <li className="hover:text-blue-700 text-[14px]">
                      Sitecore
                    </li>
                  </ul>
                </div>

                <div className="pt-3">
                  <span className="hover:text-blue-700 text-white font-[600] text-[16px]">
                    Ecommarce
                  </span>
                  <hr />
                  <ul className="flex flex-col gap-3 pt-5 text-gray-300">
                    <Link to="/tecno">
                      {" "}
                      <li className="hover:text-blue-700 text-[14px]">
                        Magento
                      </li>
                    </Link>
                    <li className="hover:text-blue-700 text-[14px]">
                      Adobe Commerce
                    </li>
                    <li className="hover:text-blue-700 text-[14px]">Craft</li>
                    <li className="hover:text-blue-700 text-[14px]">Shopify</li>
                    <li className="hover:text-blue-700 text-[14px]">
                      BigCommerce
                    </li>
                    <li className="hover:text-blue-700 text-[14px]">
                      WooCommerce
                    </li>
                  </ul>
                </div>

                <div className="pt-3">
                  <span className="hover:text-blue-700 text-white font-[600] text-[16px]">
                    Mobile Apps
                  </span>
                  <hr />
                  <ul className="flex flex-col gap-3 pt-5 text-gray-300">
                    <li className="hover:text-blue-700 text-[14px]">Android</li>
                    <li className="hover:text-blue-700 text-[14px]">
                      React Native
                    </li>
                    <li className="hover:text-blue-700 text-[14px]">Flutter</li>
                    <li className="hover:text-blue-700 text-[14px]">IOS</li>
                  </ul>
                </div>

                <div className="pt-3">
                  <span className="hover:text-blue-700 text-white font-[600] text-[16px]">
                    CRM
                  </span>
                  <hr />
                  <ul className="flex flex-col gap-3 pt-5 text-gray-300">
                    <li className="hover:text-blue-700 text-[14px]">
                      Service Now
                    </li>
                    <li className="hover:text-blue-700 text-[14px]">
                      Salesforce
                    </li>
                    <li className="hover:text-blue-700 text-[14px]">Hubspot</li>
                    <li className="hover:text-blue-700 text-[14px]">Zoho</li>
                  </ul>
                </div>

                <div className="pt-3">
                  <span className="hover:text-blue-700 text-white font-[600] text-[16px]">
                    Cloud
                  </span>
                  <hr />
                  <ul className="flex flex-col gap-3 pt-5 text-gray-300">
                    <li className="hover:text-blue-700 text-[14px]">AWS</li>
                    <li className="hover:text-blue-700 text-[14px]">Azure</li>
                    <li className="hover:text-blue-700 text-[14px]">
                      Google Cloud
                    </li>
                    <li className="hover:text-blue-700 text-[14px]">Devops</li>
                  </ul>
                </div>

                <div className="pt-3">
                  <span className="hover:text-blue-700 text-white font-[600] text-[16px]">
                    Full Stack
                  </span>
                  <hr />
                  <ul className="flex flex-col gap-3 pt-5 text-gray-300">
                    <li className="hover:text-blue-700 text-[14px]">MEAN</li>
                    <li className="hover:text-blue-700 text-[14px]">MERN</li>

                    <li className="hover:text-blue-700 text-[14px]">JAVA</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <div className="flex  gap-1     flex-col ">
            <div className="flex justify-between">
              <span className="hover:text-[#4687C7]  text-[20px] font-[600]   ">
                Company
              </span>
              <div>
                <FontAwesomeIcon
                  className={`w-[30px] h-[24px] transition-all duration-[800ms] ease-in-out transform ${
                    drop === 3
                      ? "rotate-180 opacity-100"
                      : "rotate-0 opacity-60"
                  }`}
                  icon={drop === 2 ? faCaretUp : faCaretDown}
                  onClick={() => setdrop(drop === 3 ? 0 : 3)}
                />
              </div>
            </div>
            <ul
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                drop === 3
                  ? "max-h-[500px] opacity-100 visible"
                  : "max-h-0 opacity-0 invisible"
              } text-[13px] font-bold pt-1 space-y-4 text-white cursor-pointer flex flex-col bg-gray-800 px-3 p-2 items-baseline w-full`}
            >
              <Link to="/contact">
                {" "}
                <li className="hover:text-blue-700 text-[14px] ">Contact us</li>
              </Link>
              <Link to="/about">
                {" "}
                <li className="hover:text-blue-700 text-[14px]">About</li>
              </Link>
              <Link to="/digital">
                {" "}
                <li className="hover:text-blue-700 text-[14px]">Blog</li>
              </Link>
            </ul>
          </div>
        </li>

        <li className=" hover:text-[#4687C7]  text-[20px] font-[600] ">
          Industries
        </li>

        <li className=" hover:text-[#4687C7]  text-[20px] font-[600] ">
          <span>Hire Developers</span>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
