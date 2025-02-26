import React from "react";
import img from "../QAtesting/Qasectionimages/images2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img8 from "../../../images/Groupimages3/image1.png";
import img9 from "../../../images/Groupimages3/image2.png";
import img10 from "../../../images/Groupimages3/image3.png";
import img11 from "../../../images/Groupimages3/image4.png";
import img12 from "../../../images/Groupimages3/image5.png";
import img13 from "../../../images/Groupimages3/image6.png";
import img14 from "../../../images/Groupimages3/image7.png";



const Qasection2 = () => {
    var settings = {
        infinite: true,
        dots :true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 4,
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
    <div>
      <div
        className=" relative  w-full lg:h-[440px] h-[650px]  bg-blue-600 flex justify-center pt-3 lg:pt-0 px-4 lg:items-center "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${img})`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
        }}
      >
        <div className="w-[80%] flex flex-col items-center gap-6 lg:gap-12">
          <span className="text-white text-2xl font-[600] lg:text-6xl">
            Software testing
          </span>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="bg-gradient-to-r from-blue-500 via-blue-500 to-blue-900 py-3 px-5 rounded-md shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span className="lg:text-[28px] text-[18px] text-orange-900  font-[600]">
                Software testing solutions
              </span>
              <p className="lg:text-[16px] text-[10px] text-gray-900 font-[600] mt-2">
                Software testing services are essential for ensuring the
                functionality, performance, and security of software
                applications. These services involve a comprehensive evaluation
                process that identifies bugs, errors, and any potential issues
                in the software before it is released to the market. Testing can
                be performed at various stages of the software development
                lifecycle, including during development, integration, and
                post-release.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-500 via-blue-500 to-blue-900 py-3 px-5 rounded-md shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span className="lg:text-[28px] text-[18px] text-orange-900 font-[600]">
                Software testing solutions
              </span>
              <p className="lg:text-[16px] text-[10px] text-gray-900 font-[500] mt-2">
                Software testing services are essential for ensuring the
                functionality, performance, and security of software
                applications. These services involve a comprehensive evaluation
                process that identifies bugs, errors, and any potential issues
                in the software before it is released to the market. Testing can
                be performed at various stages of the software development
                lifecycle, including during development, integration, and
                post-release.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="lg:py-10 w-[90%] pt-6 flex items-center justify-center flex-col">
          <span className="lg:text-4xl text-2xl whitespace-nowrap font-[600]  flex items-center justify-center">
            Benefits of QA Automation
          </span>

          <div className="flex pt-10 flex-col lg:flex-row  gap-6">
            <div className=" p-6 rounded-xl shadow-lg border-[1px] transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span className=" lg:text-2xl text-[18px] font-semibold">Improved Equality</span>
              <p className=" lg:text-[16px] text-[13px] text-gray-600 mt-4 font-medium">
                Enhanced equality in QA testing ensures that software is tested
                impartially across all platforms, devices, and user
                demographics. By automating tests and using diverse scenarios,
                biases are minimized, leading to consistent and reliable
                performance. This approach guarantees comprehensive coverage,
                ultimately delivering higher-quality software that meets the
                needs of all users.
              </p>
            </div>
            <div className=" p-6 rounded-xl shadow-lg border-[1px]  transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span className=" lg:text-2xl text-[18px] font-semibold">Cost efficiency</span>
              <p className="lg:text-[16px] text-[13px] text-gray-600 mt-4 font-medium">
                Cost efficiency in QA testing refers to optimizing the testing
                process to reduce expenses while maintaining high-quality
                results. By automating repetitive tasks, streamlining workflows,
                and prioritizing critical test cases, organizations can minimize
                the time and resources spent on testing. This approach helps
                achieve thorough software validation without unnecessary costs,
                ultimately improving the overall return on investment.
              </p>
            </div>
            <div className=" p-6 rounded-xl shadow-lg border-[1px]  transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span className=" lg:text-2xl text-[18px]  font-semibold">Fast-tracked deliverables</span>
              <p className=" lg:text-[16px] text-[13px] text-gray-600 mt-4 font-medium">
                Enhanced equality in QA testing ensures that software is tested
                impartially across all platforms, devices, and user
                demographics. By automating tests and using diverse scenarios,
                biases are minimized, leading to consistent and reliable
                performance. This approach guarantees comprehensive coverage,
                ultimately delivering higher-quality software that meets the
                needs of all users.
              </p>
            </div>
          </div>
        </div>
      </div>


      
      <div className=" py-10">
          <Slider {...settings} className="w-full flex  ">
            <img
              src={img8}
              alt=""
              className="sm:h-[85px] sm:w-[117px] w-[152px]  h-[60px] object-contain  "
            />

            <img
              src={img9}
              alt=""
              className="sm:h-[85px] sm:w-[217px] w-[152px]  h-[60px] object-contain  "
            />

            <img
              src={img10}
              alt=""
              className="sm:h-[85px] sm:w-[217px] w-[152px]  h-[60px] object-cover "
            />

            <img
              src={img11}
              alt=""
              className="sm:h-[85px] sm:w-[217px] w-[152px]  h-[60px] object-contain "
            />

            <img
              src={img12}
              alt=""
              className="sm:h-[85px] sm:w-[217px] w-[152px]  h-[60px] object-contain "
            />

            <img
              src={img13}
              alt=""
              className="sm:h-[85px] sm:w-[217px] w-[152px]  h-[60px] object-contain "
            />

            <img
              src={img14}
              alt=""
              className="sm:h-[85px] sm:w-[217px] w-[152px]  h-[60px] object-contain "
            />
          </Slider>
        </div>
    </div>
  );
};

export default Qasection2;
