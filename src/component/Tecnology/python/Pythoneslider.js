import React from "react";
import img from "../python/Pythonsliderimages/images.png";
import img1 from "../python/Pythonsliderimages/images1.png";
import img2 from "../python/Pythonsliderimages/images2.png";
import img3 from "../python/Pythonsliderimages/images3.png";
import img4 from "../python/Pythonsliderimages/images4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Pythoneslider = () => {
  var settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
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
    <div className=" flex justify-center ">
      <div className="h-[400px] lg:w-[80%] w-full    flex justify-center items-center ">
        <Slider {...settings} className="w-full flex gap-5  items-start " id = "python">
          <img
            src={img}
            alt=""
            className="sm:h-[85px] sm:w-[117px] w-[102px]   object-contain  border py-2 mx-[20px]"
          />

          <img
            src={img1}
            alt=""
            className="sm:h-[85px] sm:w-[217px] w-[102px]  object-cover mx-[20px] "
          />

          <img
            src={img2}
            alt=""
            className="sm:h-[85px] sm:w-[217px] w-[102px]  object-cover mx-[20px] "
          />

          <img
            src={img3}
            alt=""
            className="sm:h-[85px] sm:w-[217px] w-[102px]   object-contain mx-[20px] "
          />
          <img
            src={img4}
            alt=""
            className="sm:h-[85px] sm:w-[217px] w-[102px]  object-contain mx-[20px] "
          />
        </Slider>
      </div>
    </div>
  );
};

export default Pythoneslider;
