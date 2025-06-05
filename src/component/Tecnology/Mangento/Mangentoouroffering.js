import React, { useState } from "react";
import img1 from "../Mangento/Magentosectionsimages/images1.png";
import img2 from "../Mangento/Magentosectionsimages/images2.png";
import img3 from "../Mangento/Magentosectionsimages/images3.png";
const Mangentoouroffering = () => {
  const [change, setchange] = useState(1);

  return (
    <div className="flex justify-center bg-black">
      <div className="py-8 lg:w-[80%]">
        <h1 className="flex justify-center text-[32px]  font-[700] text-white">
          Our offerings
        </h1>

        <div className="     py-5 mt-6 px-3 lg:px-10 rounded-lg">
          <div className="flex gap-5 flex-wrap">
            <button
              className="relative text-[16px] rounded-md text-white px-7 py-3 font-[500] overflow-hidden group bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg"
              onClick={() => setchange(1)}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="relative z-10 group-hover:text-orange-500">
                Solutions
              </span>
            </button>
            <button
              className="relative text-[16px] rounded-md text-white px-7 py-3 font-[500] overflow-hidden group bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg"
              onClick={() => setchange(2)}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="relative z-10 group-hover:text-orange-500">
                Platforms
              </span>
            </button>

            <button
              className="relative text-[16px] rounded-md text-white px-7 py-3 font-[500] overflow-hidden group bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg"
              onClick={() => setchange(3)}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="relative z-10 group-hover:text-orange-500">
                Services
              </span>
            </button>
          </div>

          {change === 1 ? (
            <div className="pt-10 text-center">
              <div className="flex flex-col pt-10 gap-7 lg:flex-row">
                <div className="bg-gradient-to-r from-gray-500 to-gray-800 rounded-lg text-white py-8 px-6 shadow-lg space-y-6 max-w-md mx-auto transition-transform transform hover:scale-105 duration-300">
                  <span className="text-2xl font-semibold tracking-wide uppercase">
                    Platform Audit & Consulting
                  </span>

                  <p className="text-base font-light opacity-90">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur vehicula neque vel urna malesuada, at ultricies
                    velit dapibus."
                  </p>

                  <a
                    href="#"
                    className="block text-center py-2 px-6 bg-gray-600 hover:bg-gray-700 rounded-full font-semibold mt-4 transition-colors duration-200"
                  >
                    Learn More
                  </a>
                </div>

                <div className="bg-gradient-to-r from-gray-500 to-gray-800 rounded-lg text-white py-8 px-6 shadow-lg space-y-6 max-w-md mx-auto transition-transform transform hover:scale-105 duration-300">
                  <span className="text-2xl font-semibold tracking-wide uppercase">
                    Platform Audit & Consulting
                  </span>

                  <p className="text-base font-light opacity-90">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur vehicula neque vel urna malesuada, at ultricies
                    velit dapibus."
                  </p>

                  <a
                    href="#"
                    className="block text-center py-2 px-6 bg-gray-600 hover:bg-gray-700 rounded-full font-semibold mt-4 transition-colors duration-200"
                  >
                    Learn More
                  </a>
                </div>

                <div className="bg-gradient-to-r from-gray-500 to-gray-800 rounded-lg text-white py-8 px-6 shadow-lg space-y-6 max-w-md mx-auto transition-transform transform hover:scale-105 duration-300">
                  <span className="text-2xl font-semibold tracking-wide uppercase">
                    Platform Audit & Consulting
                  </span>

                  <p className="text-base font-light opacity-90">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur vehicula neque vel urna malesuada, at ultricies
                    velit dapibus."
                  </p>

                  <a
                    href="#"
                    className="block text-center py-2 px-6 bg-gray-600 hover:bg-gray-700 rounded-full font-semibold mt-4 transition-colors duration-200"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              <div className="flex flex-col pt-10 gap-7 lg:flex-row">
              <div className="bg-gradient-to-r from-gray-500 to-gray-800 rounded-lg text-white py-8 px-6 shadow-lg space-y-6 max-w-md mx-auto transition-transform transform hover:scale-105 duration-300">
                  <span className="text-2xl font-semibold tracking-wide uppercase">
                    Platform Audit & Consulting
                  </span>

                  <p className="text-base font-light opacity-90">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur vehicula neque vel urna malesuada, at ultricies
                    velit dapibus."
                  </p>

                  <a
                    href="#"
                    className="block text-center py-2 px-6 bg-gray-600 hover:bg-gray-700 rounded-full font-semibold mt-4 transition-colors duration-200"
                  >
                    Learn More
                  </a>
                </div>
                <div className="bg-gradient-to-r from-gray-500 to-gray-800 rounded-lg text-white py-8 px-6 shadow-lg space-y-6 max-w-md mx-auto transition-transform transform hover:scale-105 duration-300">
                  <span className="text-2xl font-semibold tracking-wide uppercase">
                    Platform Audit & Consulting
                  </span>

                  <p className="text-base font-light opacity-90">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur vehicula neque vel urna malesuada, at ultricies
                    velit dapibus."
                  </p>

                  <a
                    href="#"
                    className="block text-center py-2 px-6 bg-gray-600 hover:bg-gray-700 rounded-full font-semibold mt-4 transition-colors duration-200"
                  >
                    Learn More
                  </a>
                </div>
                <div className="bg-gradient-to-r from-gray-500 to-gray-800 rounded-lg text-white py-8 px-6 shadow-lg space-y-6 max-w-md mx-auto transition-transform transform hover:scale-105 duration-300">
                  <span className="text-2xl font-semibold tracking-wide uppercase">
                    Platform Audit & Consulting
                  </span>

                  <p className="text-base font-light opacity-90">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur vehicula neque vel urna malesuada, at ultricies
                    velit dapibus."
                  </p>

                  <button
                    href="#"
                    className="block text-center py-2 px-6 bg-gray-600 hover:bg-gray-700 rounded-full font-semibold mt-4 transition-colors duration-200"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ) : change === 2 ? (
            <div className="pt-10  font-semibold">
              <p className="lg:w-[80%]  text-white leading-relaxed">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur vehicula neque vel urna malesuada, at ultricies velit
                dapibus. Integer lacinia, neque ut ullamcorper convallis, libero
                magna iaculis purus, et volutpat nulla urna ut ante. Sed
                consequat ante sit amet nulla feugiat, nec ultricies ligula
                interdum. Ut tempor elit a justo vestibulum, non efficitur sem
                viverra. Nulla facilisi. Fusce sit amet malesuada nulla. Aenean
                pharetra eu dui vel suscipit. Fusce ac maximus ante, vel
                tincidunt purus."
              </p>

              <div className="pt-16">
                <div className="flex flex-col lg:flex-row gap-8">
                  <img
                    alt=""
                    src={img1}
                    className="w-[200px] object-contain rounded-md transition-transform duration-300 hover:scale-105"
                  />
                  <img
                    alt=""
                    src={img2}
                    className="w-[200px] object-contain rounded-md transition-transform duration-300 hover:scale-105"
                  />
                  <img
                    alt=""
                    src={img3}
                    className="w-[200px] object-contain rounded-md transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ) : change === 3 ? (
            <div>qkjehdbkcnwld</div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Mangentoouroffering;
