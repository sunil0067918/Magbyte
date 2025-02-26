import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import img1 from "../Laravel/Laravelsectionimages/images2.png";

const Laravel2sections = () => {
  const [drop, setdrop] = useState(1);
  return (
    <div className=" flex justify-center bg-[#faf8f8]">
      <div className="w-[80%]  py-10 ">
        <h1 className="text-[28px] font-[700]">
          Magbytes most well-known Laravel services
        </h1>

        <div className="pt-16 flex gap-16 ">
          <div className="space-y-10 text-start">
            <div className=" flex flex-col  ">
              <div className="flex items-center gap-5">
                <span className="text-[24px] whitespace-nowrap font-[600]">
                  {" "}
                  Laravel migration
                </span>
                <FontAwesomeIcon
                  icon={drop === 1 ? faTimes : faPlus}
                  onClick={() => setdrop(drop === 1 ? 0 : 1)}
                  className={`transition-transform duration-300 ease-in-out transform text-2xl ${
                    drop === 1 ? "rotate-45" : ""
                  }`}
                />
              </div>

              {
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    drop === 1 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 md:text-[18px] text-[12px]  pt-5">
                    Are you finding it challenging to build the ideal enterprise
                    application or web solution? Do you require a robust backend
                    framework like Laravel to enhance your site's performance?
                    We offer expert LAMP, Laravel Livewire, and PHP development
                    services to help you achieve your goals.
                  </p>
                </div>
              }
            </div>
            <div className=" flex flex-col">
              <div className="flex items-center gap-5">
                <span className="text-[24px] whitespace-nowrap font-[600]">
                  {" "}
                  Laravel Development
                </span>
                <FontAwesomeIcon
                  icon={drop === 2 ? faTimes : faPlus}
                  onClick={() => setdrop(drop === 2 ? 0 : 2)}
                  className={`transition-transform duration-300 ease-in-out transform text-2xl ${
                    drop === 2 ? "rotate-45" : ""
                  }`}
                />
              </div>

              {
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    drop === 2 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 md:text-[18px] text-[12px]  pt-5">
                    Do you feel your site is lacking adequate support and
                    maintenance? Depending on the client’s requirements, we
                    offer support and maintenance services for all our Laravel
                    development projects.
                  </p>
                </div>
              }
            </div>
            <div className=" flex flex-col">
              <div className="flex items-center gap-5">
                <span className="text-[24px] font-[600] whitespace-nowrap">
                  {" "}
                  Laravel API development
                </span>
                <FontAwesomeIcon
                  icon={drop === 3 ? faTimes : faPlus}
                  onClick={() => setdrop(drop === 3 ? 0 : 3)}
                  className={`transition-transform duration-300 ease-in-out transform text-2xl ${
                    drop === 3 ? "rotate-45" : ""
                  }`}
                />
              </div>

              {
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    drop === 3 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600  md:text-[18px] text-[12px]  pt-5">
                    Is your site in need of a migration from one Laravel version
                    to another? Or perhaps it's missing essential PHP updates?
                    Whether you're looking to upgrade to a higher version of
                    Laravel or need assistance with updating your current site,
                    we can be the perfect tech partner for you.
                  </p>
                </div>
              }
            </div>
            <div className=" flex flex-col">
              <div className="flex items-center gap-5">
                <span className="text-[24px] font-[600] whitespace-nowrap">
                  {" "}
                  Laravel maintenance and assistance
                </span>
                <FontAwesomeIcon
                  icon={drop === 4 ? faTimes : faPlus}
                  onClick={() => setdrop(drop === 4 ? 0 : 4)}
                  className={`transition-transform duration-300 ease-in-out transform text-2xl ${
                    drop === 4 ? "rotate-45" : ""
                  }`}
                />
              </div>

              {
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    drop === 4 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600  md:text-[18px] text-[12px]  pt-5">
                    Looking to enhance your website's performance with powerful
                    APIs? Our team can develop a custom API generator package to
                    ensure seamless communication between your application and
                    mobile users. We also offer API integration services to meet
                    your specific needs.
                  </p>
                </div>
              }
            </div>
          </div>

          <div className="space-y-10">
            <div className=" flex flex-col  text-startt">
              <div className="flex items-center gap-5">
                <span className="text-[24px] whitespace-nowrap font-[600]">
                  {" "}
                  Laravel Consulting
                </span>
                <FontAwesomeIcon
                  icon={drop === 5 ? faTimes : faPlus}
                  onClick={() => setdrop(drop === 5 ? 0 : 5)}
                  className={`transition-transform duration-300 ease-in-out transform text-2xl ${
                    drop === 5 ? "rotate-45" : ""
                  }`}
                />
              </div>

              {
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    drop === 5 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600  md:text-[18px] text-[12px]  pt-5">
                    Thinking about building a Laravel site but unsure how to get
                    started? Not sure about your website idea or concept? Bring
                    it to us, and we’ll help you turn it into a successful,
                    tech-driven solution that maximizes its potential.
                  </p>
                </div>
              }
            </div>
            <div className=" flex flex-col">
              <div className="flex items-center gap-5">
                <span className="text-[24px] whitespace-nowrap font-[600]">
                  {" "}
                  Looking to hire a Laravel developer?
                </span>
                <FontAwesomeIcon
                  icon={drop === 6 ? faTimes : faPlus}
                  onClick={() => setdrop(drop === 6 ? 0 : 6)}
                  className={`transition-transform duration-300 ease-in-out transform text-2xl ${
                    drop === 6 ? "rotate-45" : ""
                  }`}
                />
              </div>

              {
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    drop === 6 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600  md:text-[18px] text-[12px] pt-5">
                    Looking for expert Laravel developers to enhance your
                    website's performance? If your tech team needs guidance or
                    additional support, our experienced Laravel professionals
                    can turn any concept into a fully functional application.
                  </p>
                </div>
              }
            </div>
            <div className=" flex flex-col">
              <div className="flex items-center gap-5">
                <span className="text-[24px] font-[600] whitespace-nowrap">
                  {" "}
                  Laravel development extension
                </span>
                <FontAwesomeIcon
                  icon={drop === 7 ? faTimes : faPlus}
                  onClick={() => setdrop(drop === 7 ? 0 : 7)}
                  className={`transition-transform duration-300 ease-in-out transform text-2xl ${
                    drop === 3 ? "rotate-45" : ""
                  }`}
                />
              </div>

              {
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    drop === 7 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600  md:text-[18px] text-[12px]  pt-5">
                    Is your site lacking unique features and extensions? Does it
                    need an upgrade? Adding custom Laravel extensions is an
                    excellent way to enhance site performance. We’re here to
                    help you with that.
                  </p>
                </div>
              }
            </div>
            <div className=" flex flex-col">
              <div className="flex items-center gap-5">
                <span className="text-[24px] font-[600] whitespace-nowrap">
                  {" "}
                  Laravel eCommerce development
                </span>
                <FontAwesomeIcon
                  icon={drop === 8 ? faTimes : faPlus}
                  onClick={() => setdrop(drop === 8 ? 0 : 8)}
                  className={`transition-transform duration-300 ease-in-out transform text-2xl ${
                    drop === 4 ? "rotate-45" : ""
                  }`}
                />
              </div>

              {
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    drop === 8 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600  md:text-[18px]text-[12px] pt-5">
                    Worried about the security and customer data of your
                    eCommerce store? If you're looking for a top-tier eCommerce
                    site with a secure payment gateway, high-performance design,
                    and an interactive dashboard, we’ve got you covered.
                  </p>
                </div>
              }
            </div>
          </div>
        </div>

        <div className="pt-20 flex gap-6">
          <img src={img1} />
          <div className="flex flex-col gap-4">
            <span className="text-[24px] font-[600]" >Complex Business Application </span>
            <p className="text-[20px]  text-gray-700">
              We specialize in developing small yet complex business
              applications tailored for brands across the globe. Our tech
              experts ensure a seamless development process while delivering
              high-quality apps. Our experienced team provides fast solutions
              for all types of projects. From Laravel mobile app development to
              point-of-sale systems, software as a service (SaaS), and
              progressive web apps, we handle it all.
            </p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Laravel2sections;
