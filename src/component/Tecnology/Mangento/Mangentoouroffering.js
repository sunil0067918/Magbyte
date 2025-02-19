import React, { useState } from "react";
import img1 from "../Mangento/Magentosectionsimages/images1.png";
import img2 from "../Mangento/Magentosectionsimages/images2.png";
import img3 from "../Mangento/Magentosectionsimages/images3.png";
const Mangentoouroffering = () => {
  const [change, setchange] = useState(1);
  return (
    <div className="flex justify-center">
      <div className="py-8 w-[80%]">
        <h1 className="flex justify-center text-[32px]  font-[700]">
          Our offerings
        </h1>

        <div className="  bg-[#F9F9FF] h-[800px]   py-16 mt-6 px-10 rounded-lg">
          <div className="flex gap-5 ">
            <button
              className="bg-orange-500  text-[16px] rounded-md text-white px-7 py-3  hover:bg-red-500 font-[500]"
              onClick={() => setchange(1)}
            >
              Solutions
            </button>
            <button onClick={() => setchange(2)}  className="bg-orange-500  text-[16px] rounded-md text-white px-7 py-3 hover:bg-red-500  font-[500]"    >
              Platforms
            </button>
            <button onClick={() => setchange(3)} className="bg-orange-500  text-[16px] rounded-md text-white px-7 py-3 hover:bg-red-500  font-[500]">
              Services
            </button>
          </div>

          {change === 1 ? (
            <div className=" flex flex-col pt-10">
              <div className=" flex  pt-10 gap-7">
                <div className=" bg-white py-10 px-10  shadow-md space-y-3">
                  <span className="text-[16px] font-[600]">
                    Platform Audit & Consulting
                  </span>
                  <p className="text-[14px]  font-[400]">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur vehicula neque vel urna malesuada, at ultricies
                    velit dapibus. Integer lacinia, neque ut ullamcorper
                    convallis, libero magna iaculis purus, et volutpat nulla
                    urna ut ante.{" "}
                  </p>
                </div>

                <div className=" bg-white py-10 px-10  shadow-md space-y-3">
                  <span className="text-[16px] font-[600]">
                    Platform Audit & Consulting
                  </span>
                  <p className="text-[14px]  font-[400]">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur vehicula neque vel urna malesuada, at ultricies
                    velit dapibus. Integer lacinia, neque ut ullamcorper
                    convallis, libero magna iaculis purus, et volutpat nulla
                    urna ut ante.{" "}
                  </p>
                </div>

                <div className=" bg-white py-10 px-10  shadow-md space-y-3">
                  <span className="text-[16px] font-[600]">
                    Platform Audit & Consulting
                  </span>
                  <p className="text-[14px]  font-[400]">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur vehicula neque vel urna malesuada, at ultricies
                    velit dapibus. Integer lacinia, neque ut ullamcorper
                    convallis, libero magna iaculis purus, et volutpat nulla
                    urna ut ante.{" "}
                  </p>
                </div>
              </div>

              <div className=" flex  pt-10 gap-7">
                <div className=" bg-white py-10 px-10  shadow-md space-y-3">
                  <span className="text-[16px] font-[600]">
                    Platform Audit & Consulting
                  </span>
                  <p className="text-[14px]  font-[400]">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur vehicula neque vel urna malesuada, at ultricies
                    velit dapibus. Integer lacinia, neque ut ullamcorper
                    convallis, libero magna iaculis purus, et volutpat nulla
                    urna ut ante.{" "}
                  </p>
                </div>

                <div className=" bg-white py-10 px-10  shadow-md space-y-3">
                  <span className="text-[16px] font-[600]">
                    Platform Audit & Consulting
                  </span>
                  <p className="text-[14px]  font-[400]">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur vehicula neque vel urna malesuada, at ultricies
                    velit dapibus. Integer lacinia, neque ut ullamcorper
                    convallis, libero magna iaculis purus, et volutpat nulla
                    urna ut ante.{" "}
                  </p>
                </div>

                <div className=" bg-white py-10 px-10  shadow-md space-y-3">
                  <span className="text-[16px] font-[600]">
                    Platform Audit & Consulting
                  </span>
                  <p className="text-[14px]  font-[400]">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur vehicula neque vel urna malesuada, at ultricies
                    velit dapibus. Integer lacinia, neque ut ullamcorper
                    convallis, libero magna iaculis purus, et volutpat nulla
                    urna ut ante.{" "}
                  </p>
                </div>
              </div>
            </div>
          ) : change === 2 ?  <div className="pt-10 text-[15px]  font-[700] ">
            <p className="w-[80%]">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur vehicula neque vel urna malesuada, at ultricies velit
              dapibus. Integer lacinia, neque ut ullamcorper convallis, libero
              magna iaculis purus, et volutpat nulla urna ut ante. Sed consequat
              ante sit amet nulla feugiat, nec ultricies ligula interdum. Ut
              tempor elit a justo vestibulum, non efficitur sem viverra. Nulla
              facilisi. Fusce sit amet malesuada nulla. Aenean pharetra eu dui
              vel suscipit. Fusce ac maximus ante, vel tincidunt purus.
            </p>

            <div className="">
              <div>
                <div className="flex pt-20 justify-start gap-10">
                  <img alt="" src={img1} className="w-[200px] object-contain" />
                  <img
                    alt=""
                    src={img2}
                    className="w-[200px]  object-contain"
                  />
                  <img
                    alt=""
                    src={img3}
                    className="w-[200px]  object-contain"
                  />
                </div>
              </div>
            </div>
          </div> : change === 3 ? <div>qkjehdbkcnwld</div> : ''}
        </div>
      </div>
    </div>
  );
};

export default Mangentoouroffering;
