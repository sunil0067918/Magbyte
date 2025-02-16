import React from "react";
import img1 from "../../../images/ServicesEcommarceimages/ServicesEcomarcepowerfullimages/images1.png";
import img2 from "../../../images/ServicesEcommarceimages/ServicesEcomarcepowerfullimages/images2.png";
import img3 from "../../../images/ServicesEcommarceimages/ServicesEcomarcepowerfullimages/images3.png";
import img4 from "../../../images/ServicesEcommarceimages/ServicesEcomarcepowerfullimages/images4.png";
import img5 from "../../../images/ServicesEcommarceimages/ServicesEcomarcepowerfullimages/images5.png";
import img6 from "../../../images/ServicesEcommarceimages/ServicesEcomarcepowerfullimages/images6.png";
import img7 from "../../../images/ServicesEcommarceimages/ServicesEcomarcepowerfullimages/images7.png";
import img8 from "../../../images/ServicesEcommarceimages/ServicesEcomarcepowerfullimages/images8.png";
import img9 from "../../../images/ServicesEcommarceimages/ServicesEcomarcepowerfullimages/images9.png";
import img10 from "../../../images/ServicesEcommarceimages/ServicesEcomarcepowerfullimages/images10.png";
import img11 from "../../../images/ServicesEcommarceimages/ServicesEcomarcepowerfullimages/images11.png";
import img12 from "../../../images/ServicesEcommarceimages/ServicesEcomarcepowerfullimages/images12.png";
import img13 from "../../../images/ServicesEcommarceimages/ServicesEcomarcepowerfullimages/images13.png";

const EcommarcePowerfullplateform = () => {
  return (
    <div className="  bg-[#FFFFFF] flex justify-center ">
      <div className="w-[90%] pt-[50px] pb-[40px]  ">
        <div className="flex justify-center">
          <div className=" flex  flex-col  text-center w-[782px]     gap-y-5">
            <span className="  text-[24px]  sm:text-[32px] font-[600]  ">
              Powerful Platforms We Use For Uncompromised Services
            </span>
            <p className="   text-[12px] sm:text-[18px] sm:font-[400]">
              Choosing the right platform for your eCommerce business determines
              its success and failure. To provide the finest and uninterrupted
              user experience, here are some powerful platforms our developers
              love working on.
            </p>
          </div>
        </div>

        <div className="flex flex-col  pt-16 space-y-9 flex-wrap">
          <div className="w-full flex justify-between flex-wrap sm:gap-0 gap-[68px] ">
            <img
              src={img1}
              alt=""
              className="w-[150px] h-[44px] object-contain"
            />
            <img
              src={img2}
              alt=""
              className="w-[150px] h-[44px] object-contain"
            />
            <img
              src={img3}
              alt=""
              className="w-[150px] h-[44px] object-cover"
            />
            <img
              src={img4}
              alt=""
              className="w-[150px] h-[44px] object-contain "
            />
            <img
              src={img5}
              alt=""
              className="w-[150px] h-[44px] object-contain"
            />
            <img
              src={img10}
              alt=""
              className="w-[150px] h-[44px] object-cover "
            />

            <img
              src={img11}
              alt=""
              className="w-[150px] h-[44px] object-contain "
            />
          </div>

          <div className="flex justify-center gap-[60px] flex-wrap">
            <img
              src={img6}
              alt=""
              className="w-[150px] h-[44px] object-contain"
            />
            <img
              src={img7}
              alt=""
              className="w-[150px] h-[44px] object-contain"
            />
            <img
              src={img8}
              alt=""
              className="w-[150px] h-[44px] object-contain"
            />
            <img
              src={img9}
              alt=""
              className="w-[150px] h-[44px] object-cover"
            />
            <img
              src={img12}
              alt=""
              className="w-[150px] h-[44px] object-contain "
            />
            <img
              src={img13}
              alt=""
              className="w-[150px] h-[44px] object-contain "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommarcePowerfullplateform;
