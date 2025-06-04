import React from "react";
import img from "./Hiredevbaanerimage/image.png";
import Form from "../Form";

const Hirebanner = () => {
  return (
    <div>
      <div
        className=" relative  sm:h-[580px] lg:h-[580px] h-[620px] text-white bg-black flex justify-center py-2 lg:pt-0 px-1 lg:items-center "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)),url(${img} `,
          backgroundSize: `cover`,
        }}
      >
        <div className="lg:w-[90%] flex  lg:flex-row flex-col justify-between items-center">
          <div className="flex flex-col items-center lg:items-start gap-5">
            <span className="lg:text-[32px]  text-[20px] font-[600] text-blue-700">
              Hire Dedicated Developers
            </span>
            <span className="lg:text-[18px] font-[500] lg:w-[600px]  lg:text-start text-center  text-[12px]">
              Hiring the highly professional and dedicated developers has become
              one of the most rewarding and prosperous trend in these days in
              the worldwide of an online business.
            </span>
            <button className="relative overflow-hidden lg:px-8 lg:py-3 px-3 py-1 font-semibold rounded-md text-white border-2 border-white capitalize group">
              <span className="z-10 relative group-hover:text-black text-[12px] lg:text-[18px]">
                Hire Developer
              </span>
              <span className="absolute top-0 left-0 w-full h-full bg-white transition-all duration-500 scale-x-0 group-hover:scale-x-100 group-hover:left-0 group-hover:right-0 transform origin-left"></span>
            </button>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Hirebanner;
