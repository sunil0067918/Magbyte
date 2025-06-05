import React from 'react'
import img1 from "../../images/Groupimages3/image1.png";
import img2 from "../../images/Groupimages3/image2.png";
import img3 from "../../images/Groupimages3/image3.png";
import img4 from "../../images/Groupimages3/image4.png";
import img5 from "../../images/Groupimages3/image5.png";
import img6 from "../../images/Groupimages3/image6.png";
import img7 from "../../images/Groupimages3/image7.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Slider1 = () => {
    
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
    <div>
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
    </div>
  )
}

export default Slider1