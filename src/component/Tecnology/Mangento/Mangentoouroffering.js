import React, { useState } from "react";
import img1 from "../Mangento/Magentosectionsimages/images1.png";
import img2 from "../Mangento/Magentosectionsimages/images2.png";
import img3 from "../Mangento/Magentosectionsimages/images3.png";
const Mangentoouroffering = () => {
  const [change, setchange] = useState(0);

  return (
    <div className="flex justify-center bg-black">
      <div className="py-8 lg:w-[80%]">
        <h1 className="flex justify-center text-[32px]  font-[700] text-white">
          Our offerings
        </h1>

        <div className="     py-5 mt-6 px-3 lg:px-10 rounded-lg">
          <div className="flex gap-5 flex-wrap">
            <button
              className="bg-orange-500  text-[16px] rounded-md text-white px-7 py-3  hover:bg-red-500 font-[500]"
              onClick={() => setchange(1)}
            >
              Solutions
            </button>
            <button
              className="bg-orange-500  text-[16px] rounded-md text-white px-7 py-3 hover:bg-red-500  font-[500]"
              onClick={() => setchange(2)}
            >
              Platforms
            </button>
            <button className="bg-orange-500  text-[16px] rounded-md text-white px-7 py-3 hover:bg-red-500  font-[500]">
              Services
            </button>
          </div>

          {!change ? (
            

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

                  <a
                    href="#"
                    className="block text-center py-2 px-6 bg-gray-600 hover:bg-gray-700 rounded-full font-semibold mt-4 transition-colors duration-200"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ) : (
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
                    alt="Image 1"
                    src={img1}
                    className="w-[200px] object-contain rounded-md transition-transform duration-300 hover:scale-105"
                  />
                  <img
                    alt="Image 2"
                    src={img2}
                    className="w-[200px] object-contain rounded-md transition-transform duration-300 hover:scale-105"
                  />
                  <img
                    alt="Image 3"
                    src={img3}
                    className="w-[200px] object-contain rounded-md transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mangentoouroffering;
