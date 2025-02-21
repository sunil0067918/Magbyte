import React, { useState } from "react";
import img1 from "../images/Groupimages3/image1.png";
import img2 from "../images/Groupimages3/image2.png";
import img3 from "../images/Groupimages3/image3.png";
import img4 from "../images/Groupimages3/image4.png";
import img5 from "../images/Groupimages3/image5.png";
import img6 from "../images/Groupimages3/image6.png";
import img7 from "../images/Groupimages3/image7.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Faq = () => {
  const [count, setcount] = useState(0);

  var settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" ">
      <div className=" flex justify-center my-12">
        <span className=" text-[24px]   sm:text-[32px] text-center font-[400] sm:font-[600]">
          Featured Technology Partners
        </span>
      </div>

      <Slider {...settings} className="w-full flex  ">
        <img
          src={img1}
          alt=""
          className="sm:h-[85px] sm:w-[117px] w-[152px]  h-[60px] object-contain  "
        />

        <img
          src={img2}
          alt=""
          className="sm:h-[85px] sm:w-[217px] w-[152px]  h-[60px] object-contain  "
        />

        <img
          src={img3}
          alt=""
          className="sm:h-[85px] sm:w-[217px] w-[152px]  h-[60px] object-cover "
        />

        <img
          src={img4}
          alt=""
          className="sm:h-[85px] sm:w-[217px] w-[152px]  h-[60px] object-contain "
        />

        <img
          src={img5}
          alt=""
          className="sm:h-[85px] sm:w-[217px] w-[152px]  h-[60px] object-contain "
        />

        <img
          src={img6}
          alt=""
          className="sm:h-[85px] sm:w-[217px] w-[152px]  h-[60px] object-contain "
        />

        <img
          src={img7}
          alt=""
          className="sm:h-[85px] sm:w-[217px] w-[152px]  h-[60px] object-contain "
        />
      </Slider>

      <div className=" py-7 flex justify-center mt-20">
        <div className=" w-[90%] lg:w-[80%]">
          <div className="space-y-6">
            <span className="sm:text-[32px]  text-[24px]  font-[400] sm:font-[600]">
              FAQ
            </span>
            <p className="sm:text-[20px]  text-[14px]  font-[300]  sm:font-[400]  ">
              Got some questions on your mind? Here are some frequently asked
              questions about our eCommerce Development Services that our
              experts have answered for you.
            </p>
          </div>
          <div className=" py-10 space-y-10 ">
            <div className="pt-10">
              <div className="border border-gray-300 bg-gray-50 px-5 py-2 rounded-md flex-col space-y-8 shadow-md">
                <div
                  className="flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                  onClick={() => (count === 1 ? setcount(0) : setcount(1))}
                >
                  <span className="text-gray-800 font-semibold">
                    What is the best eCommerce solution for small businesses?
                  </span>
                  <FontAwesomeIcon
                    icon={count === 1 ? faMinus : faPlus}
                    className="text-blue-500 transition-all duration-300"
                  />
                </div>

                {/* Smooth Transition */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    count === 1 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600">
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem IpsumLorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-10">
              <div className="border border-gray-300 bg-gray-50 px-5 py-2 rounded-md flex-col space-y-8 shadow-md">
                <div
                  className="flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                  onClick={() => (count === 2 ? setcount(0) : setcount(2))}
                >
                  <span className="text-gray-800 font-semibold">
                    What is the average eCommerce website design and development
                    price?
                  </span>
                  <FontAwesomeIcon
                    icon={count === 2 ? faMinus : faPlus}
                    className="text-blue-500 transition-all duration-300"
                  />
                </div>

                {/* Smooth Transition */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    count === 2 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600">
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem IpsumLorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-10">
              <div className="border border-gray-300 bg-gray-50 px-5 py-2 rounded-md flex-col space-y-8 ">
                <div
                  className="flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                  onClick={() => (count === 3 ? setcount(0) : setcount(3))}
                >
                  <span className="text-gray-800 font-semibold">
                    What eCommerce website solutions would be the best choice
                    for large organizations?
                  </span>
                  <FontAwesomeIcon
                    icon={count === 3 ? faMinus : faPlus}
                    className="text-blue-500 transition-all duration-300"
                  />
                </div>

                {/* Smooth Transition */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    count === 3 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600">
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem IpsumLorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-10">
              <div className="border border-gray-300 bg-gray-50 px-5 py-2 rounded-md flex-col space-y-8 ">
                <div
                  className="flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                  onClick={() => (count === 4 ? setcount(0) : setcount(4))}
                >
                  <span className="text-gray-800 font-semibold">
                    What is an eCommerce website agency?
                  </span>
                  <FontAwesomeIcon
                    icon={count === 4 ? faMinus : faPlus}
                    className="text-blue-500 transition-all duration-300"
                  />
                </div>

                {/* Smooth Transition */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    count === 4 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600">
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem IpsumLorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-10">
              <div className="border border-gray-300 bg-gray-50 px-5 py-2 rounded-md flex-col space-y-8 ">
                <div
                  className="flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                  onClick={() => (count === 5 ? setcount(0) : setcount(5))}
                >
                  <span className="text-gray-800 font-semibold">
                    What is the best eCommerce solution for small businesses?
                  </span>
                  <FontAwesomeIcon
                    icon={count === 5 ? faMinus : faPlus}
                    className="text-blue-500 transition-all duration-300"
                  />
                </div>

                {/* Smooth Transition */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    count === 5 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600">
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem IpsumLorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="  bg-[#282626] flex justify-center items-center text-center flex-col space-y-6 py-10 lg:py-20 px-4">
        <div className="flex flex-col items-center text-center space-y-6">
          <span className="sm:text-[32px] text-[24px]  font-[400]  sm:font-[700] text-[#FFFFFF]">
            Start Your Project. It’s Risk-Free.
          </span>
          <p className="sm:text-[16px]  text-[10px] text-[300]  sm:font-[400] text-[#FFFFFF]">
            Let's make it happen! With our risk-free approach, you can rest
            assured that your project is in good hands. Submit your inquiry
            today and receive a prompt response from our team.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-6 ">
          <button className="text-[#FFFFFF] sm:border-[0.75px] border text-[13px] font-[500] sm:text-[10px] sm:font-[300] border-[#FFFFFF]  px-[10px] py-[3px]  rounded-[16px] sm:px-[15px] sm:py-[7px] sm:rounded-[24px]">
            Get A Quote For Your Project
          </button>
          <u className="text-[#FFFFFF] sm:text-[13px] text-[10px] font-[300] sm:font-[400]">
            Or Start a conversation
          </u>
        </div>
      </div>
    </div>
  );
};

export default Faq;
