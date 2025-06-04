import React from "react";
import Form from "../../Form";
import img from "../Portt/Portfoliyobannerimage/image.png";
import { Link } from "react-router-dom";
const Portfoliyobanner = () => {
  return (
    <div className="">
      <div
        className=" relative  sm:h-[580px] lg:h-[580px] h-[660px] text-white bg-black flex justify-center py-2 lg:pt-0 px-1 lg:items-center "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),url(${img} `,
          backgroundSize: `cover`,
        }}
      >
        <div className="lg:w-[90%] flex  lg:flex-row flex-col justify-between items-center">
          <div className="flex flex-col items-center lg:items-start gap-5">
            <span className="lg:text-[32px]  text-center lg:text-start  text-[20px] font-[700] text-blue-700">
              Discover the Journey to Digital Excellence: Our Success Stories
            </span>
            <span className="lg:text-[18px] font-[500] lg:w-[600px] lg:text-start text-center  text-[12px]">
              Explore our inspiring success stories across various sectors such
              as E-commerce, Logistics, Education, Healthcare, Real Estate, and
              more, as we move closer to achieving digital excellence.
            </span>
            <Link to="/contact">
              <button className="relative overflow-hidden lg:px-8 lg:py-3 px-3 py-1 font-semibold rounded-md text-white border-2 border-white capitalize group">
                <span className="z-10 relative group-hover:text-black text-[12px] lg:text-[18px]">
                  Contact us
                </span>
                <span className="absolute top-0 left-0 w-full h-full bg-white transition-all duration-500 scale-x-0 group-hover:scale-x-100 group-hover:left-0 group-hover:right-0 transform origin-left"></span>
              </button>
            </Link>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Portfoliyobanner;
