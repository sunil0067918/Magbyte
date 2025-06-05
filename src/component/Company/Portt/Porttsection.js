import React from "react";
import img from "../Portt/Portfoliyosectionimage/image.png";

const Porttsection = () => {
  return (
    <div className="">
      <div className=" flex justify-center py-10">
        <div className=" w-[90%] flex-col flex  items-center">
          <div className=" flex flex-col gap-3 items-center">
            <span className="lg:text-[32px] tetx-[20px] font-[700]">
              Achievement by magbytes Client : Testimonials, Proven Case Studies
            </span>
            <p className=" lg:text-[16px] text-[12px] text-gray-600">
              There are numerous factors to consider, such as whether the agency
              can truly fulfill their promises or if they will consume your
              budget each month without delivering any returns
            </p>
          </div>
          <div className="flex  gap-10">
            <div className="mt-10 group relative overflow-hidden">
              <img
                alt="Product"
                className="lg:w-[600px] h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
                src={img}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-gray-900 p-6 lg:w-[450px] py-6 h-[250px] rounded-xl shadow-lg flex flex-col gap-5 transform transition-transform duration-300 group-hover:scale-110">
                  <p className="lg:text-[22px] text-white font-semibold text-center leading-tight">
                    Magbyets
                  </p>
                  <p className="text-gray-300 text-center text-sm mt-2">
                    Discover the latest collection of Magbyets, designed with
                    elegance and comfort.
                  </p>
                  <button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-md transition-all duration-200 transform hover:scale-105">
                    View details
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-10 group relative overflow-hidden">
              <img
                alt="Product"
                className="lg:w-[600px] h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
                src={img}
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-gray-900 p-6 lg:w-[450px] py-6 h-[250px] rounded-xl shadow-lg flex flex-col gap-5 transform transition-transform duration-300 group-hover:scale-110">
                  <p className="lg:text-[22px] text-white font-semibold text-center leading-tight">
                    Magbyets
                  </p>
                  <p className="text-gray-300 text-center text-sm mt-2">
                    Discover the latest collection of Magbyets, designed with
                    elegance and comfort.
                  </p>
                  <button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-md transition-all duration-200 transform hover:scale-105">
                    View details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Porttsection;
