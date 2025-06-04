import React from "react";
import img from "../Maintanace/Manitenancebannerimages/images.png";

const Maintenanacebanner = () => {
  return (
    <div
      className=" relative  sm:h-[880px] lg:h-[540px] h-[500px]  bg-blue-600 flex justify-center pt-10 lg:pt-0 px-4  "
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)), url(${img})`,
        backgroundSize: `contain`,
      }}
    >
      <div className="lg:w-[90%] flex items-center text-center">
        <div className="flex flex-col items-center  justify-center gap-6">
          <span className=" text-[20px] lg:text-6xl font-[600] text-white">
            <span className="text-blue-500 animate-pulse">IT Maintenance</span>{" "}
            Support Services
          </span>
          <p className="text-gray-200 text-[16px] lg:text-[18px]"> 
            Let us relieve you of the stress surrounding IT support and
            maintenance with our all-inclusive software support services.
            Benefit from secure and reliable management of critical business
            operations, enabling you to boost productivity, regardless of your
            organization's size or scope!
          </p>
          <button className="lg:px-5 lg:py-4 px-3 py-2 text-white bg-gradient-to-r from-blue-700 to-blue-500 rounded-full transition-all transform hover:scale-105 hover:shadow-lg hover:from-blue-500 hover:to-blue-400">
  Request a Quote
</button>

        </div>
      </div>
    </div>
  );
};

export default Maintenanacebanner;
