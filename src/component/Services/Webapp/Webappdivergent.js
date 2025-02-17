import React from "react";
import Faq from "../../../component/Faq";
import Footer from "../../../component/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../Webapp/Images/Sliderimages/images1.png";
import img2 from "../Webapp/Images/Sliderimages/images2.png";
import img3 from "../Webapp/Images/Sliderimages/images3.png";
import img4 from "../Webapp/Images/Sliderimages/images4.png";

import img5 from "../Webapp/Images/Webappdivergentiamges/images5.png";
import img6 from "../Webapp/Images/Webappdivergentiamges/images6.png";
// import img7 from "../Webapp/Images/Webappdivergentiamges/images7.png";
import img8 from "../Webapp/Images/Webappdivergentiamges/image8.png";
import img9 from "../Webapp/Images/Webappdivergentiamges/images9.png";

const Webappdivergent = () => {
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
    <div className="w-full ">
      <div className="  w-11/12 md:w-10/12 mx-auto flex justify-center my-10">
        {/* <div className="w-[90%] py-[50px] bg-[#F5F5F5]">
          <span className="text-[34px]  font-[600] flex justify-center  text-center ">
            Web and app development services
            <br /> for divergent industries
          </span>
        </div> */}

          <Slider {...settings} className="w-full">
              <img
                className="md:w-[200px] w-[180px]  h-[500px]  grayscale hover:grayscale-0 cursor-pointer"
                src={img1}
                alt="clients121"
                
              />
     
              <img
                className="md:w-[400px] w-[300px] h-[500px]  grayscale hover:grayscale-0 cursor-pointer"
                src={img2}
                alt="clientsanarock"
                
              />
 
              <img
                className="md:w-[200px] w-[180px]  h-[500px]  grayscale hover:grayscale-0 cursor-pointer"
                src={img3}
                alt="clientsbharat"
                
              />
             <img
                className="md:w-[200px] w-[180px]  h-[500px]  grayscale hover:grayscale-0 cursor-pointer"
                src={img4}
                alt="clientsByju"
                width={200}
                loading="lazy"
                height={70}
              />
            
          
            
            {/* <div>
            <img className="w-[200px] h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer" src={nine} alt="clients" />
          </div> */}
            
            {/* <div className="p-3">
              <img
                className="md:w-[200px] w-[180px]  h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer"
                src={eleven}
                alt="clients"
              />
            </div> */}
            
          </Slider>
      
      </div>

      <div className="flex  w-full justify-center items-center">
        <div className=" w-[90%]  flex flex-col justify-center">
          <div className=" flex pt-10 justify-between ">
            <span className="text-[32px] font-[500]">Why Choose Us</span>

            <div className="flex items-center gap-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.561609 15.9997C0.56161 7.47345 7.47361 0.561529 16 0.56153C24.5264 0.56153 31.4384 7.47345 31.4384 15.9997C31.4384 24.526 24.5264 31.4379 16 31.4379C7.47361 31.4379 0.561608 24.526 0.561609 15.9997Z"
                  stroke="black"
                  stroke-width="1.12322"
                />
                <path
                  d="M21.9399 16.082L10.2651 15.879"
                  stroke="#0E151D"
                  stroke-width="1.12322"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.001 21.8179L10.2651 15.879L16.204 10.1431"
                  stroke="#0E151D"
                  stroke-width="1.12322"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.4384 16.0003C31.4384 24.5266 24.5264 31.4385 16 31.4385C7.4736 31.4385 0.561608 24.5266 0.561608 16.0003C0.561608 7.47401 7.4736 0.562097 16 0.562097C24.5264 0.562097 31.4384 7.47401 31.4384 16.0003Z"
                  stroke="black"
                  stroke-width="1.12322"
                />
                <path
                  d="M10.062 15.9175L21.7369 16.1205"
                  stroke="#0E151D"
                  stroke-width="1.12322"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.001 10.1816L21.7369 16.1205L15.7979 21.8564"
                  stroke="#0E151D"
                  stroke-width="1.12322"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="flex  gap-9 flex-col sm:flex-row  py-16 justify-start items-start w-full ">
            <div className=" bg-white   px-[30px] py-[40px] space-y-6 sm:w-[580px] w-full  rounded-[8px]  border-[2px] border-[#4687C7]   ">
              <div className=" flex flex-col w-full">
                <img alt="" src={img5} className="w-[60px]" />

                <span className=" sm:text-[24px]  font-[600] ">
                  Well-versed with Modern Mobile Tech
                  <br />
                  Stacks
                </span>
              </div>

              <p className="flex-wrap text-[16px] font-[400]">
                The team comprises senior mobile app developers and core
                contributors to popular mobile app development frameworks like
                React Native and Flutter. This gives a big advantage of being
                able to suggest the best tech journey for you. 
              </p>
            </div>

            <div className=" bg-white  px-[30px] py-[40px] space-y-4 md:w-[580px] w-full rounded-[8px]  border-[2px] border-[#4687C7]   ">
              <div className="flex flex-col">
                <img alt="" src={img6} className="w-[60px]" />

                <span className=" sm:text-[24px]  font-[600] ">
                  Strong Mobile <br /> Portfolio
                </span>
              </div>

              <p className="flex-wrap text-[16px] font-[400]">
                Our portfolio includes high-performing apps of industry leaders.
                Some of them are a multifunctional app for Darden, a video
                conferencing app for 100ms, a gaming app for mobile premier
                league, mobile banking app for ICICI Bank, and a news app for
                Scroll News
              </p>
            </div>
          
          </div>
        </div>
      </div>

      <div
        className=" relative  h-[700px] sm:h-[600px] lg:h-[342px] flex justify-center py-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 139, 0.5), rgba(0, 0, 139, 0.5)), url(${img8})`,
        }}
      >
        <div className="  absolute w-[90%] flex justify-between flex-col lg:flex-row  ">
          <div className="">
            <div className="flex flex-col space-y-5">
              <span className="text-[33px] text-white font-[600]">
                Start Building Your Mobile <br /> App Today
              </span>

              <span className="text-[18px]  font-[500] text-white">
                Book a free discovery session.
              </span>

              <div>
                <button className="border-[0.75px border-[#FFFFFF] bg-[#FFFFFF]  text-[13px]  font-[600]  px-[30px]  py-[10px] rounded-[24px]">
                  GET A QUOTE
                </button>
              </div>
            </div>
          </div>

          <div className="  relative ">
            <svg
              width="484"
              height="342"
              viewBox="0 0 484 342"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" absolute sm:w-[350px] w-[300px]  lg:top-[-11px] lg:right "
            >
              <ellipse
                opacity="0.2"
                cx="242"
                cy="171"
                rx="242"
                ry="171"
                fill="white"
              />
            </svg>

            <img
              src={img9}
              alt=""
              className=" absolute  lg:w-[340px] w-[190px] right-[63px] top-[100px] left-[54px] sm:top-[94px] 
              -[24px] sm:left-[59px] sm:w-[225px]  "
            />
          </div>
        </div>
      </div>

      <Faq />
      <Footer />
    </div>
  );
};

export default Webappdivergent;
