import React from "react";
import img1 from "../../Services/WebDesign/Images/images2.png";
import img2 from "../../Services/WebDesign/Images/images3.png";
import img3 from "../../Services/WebDesign/Images/images4.png";
import img4 from "../../Services/WebDesign/Images/images5.png";

const Intutive = () => {
  return (
    <div>
      <div className=" flex justify-center">
        <div className="lg:w-[90%] flex py-10 px-3 lg:py-20 gap-16 items-center flex-col lg:flex-row">
          <div className="space-y-10 lg:w-[50%] w-full">
            <span className="lg:text-[32px] text-[24px]  font-[400] lg:font-[600]">
              Intuitive experience that captures user’s interest
            </span>
            <p className="lg:text-[18px] lg:font-[400] text-[14px]  font-[300]">
              A flunking website can leave your company in ashes. Our objective
              is not just to make designs that look great but designs that
              benefit a purpose.
            </p>
            <p className="lg:text-[18px] lg:font-[400] text-[14px]  font-[300]">
              We look at your image from each point. We take a gander at the
              littlest subtleties, uniting market bits of knowledge and business
              objectives, to make an engaging solution. Our designs make you
              stand out from the rest. We cut interesting spaces and make a
              brand persona that is engaging for your ideal interest group. We
              will dive deep into what is significant for your audience, so we
              can leave an imprint on their heart. We join hands with brands
              like yours to make sites your clients will recollect, boundlessly
              work on your key measurements, and showcase your brand with pride.
            </p>
            <p className="lg:text-[18px] lg:font-[400] text-[14px]  font-[300]">
              Your site ought to assist your company by increasing the tempo;
              making your attempts simpler and setting out new open doors and
              should not need to endure long-haul fallouts in light of an
              average site.
            </p>
          </div>

          <img alt="" src={img1} className="w-[571px] h-[393px] object-contain  lg:object-cover" />
        </div>
      </div>

      <div className="bg-[#D9D9D9]  flex justify-center py-4  lg:py-[70px]">
        <div className="lg:w-[90%] px-3">
          <div className="lg:text-[32px] lg:font-[700] text-[24px] font-[500] flex justify-center flex-col items-center text-center space-y-5">
            <span>Service We Provide</span>
            <p className="lg:text-[20px] text-[14px] font-[300] lg:font-[400]">
              We cultivate a collaborative bond with our clients, akin to
              friendship, to ensure the delivery of optimal and tailored
              solutions.
            </p>
          </div>

          <div className="bg-[#4687C7] py-5 px-4 lg:py-10 lg:px-20 mt-10 rounded-[30px]">
            <div className="flex gap-10 flex-wrap sm:flex-nowrap lg:flex-row flex-col ">
              <div className=" bg-white  lg:px-[30px] lg:py-[40px] px-[15px] py-[20px] space-y-4 lg:w-[580px] w-full rounded-[20px]    ">
                <div className="">
                  <img src={img2} alt="" className="w-[40px]" />

                  <span className=" lg:text-[20px] text-[16px] font-[500]  lg:font-[600] ">
                    Ecommerce Website <br />
                    Development
                  </span>
                </div>

                <p className="flex-wrap  text-[14px]  font-[400] lg:text-[18px] lg:font-[400]">
                  User Experience design, otherwise called UX design, is the
                  core of any website. The end user anticipates a simple, clear,
                  and appealing site, regardless of what industry you are in. We
                  will tell you the best way to construct a remarkable web
                  presence through our tried and tested methodologies
                </p>
              </div>
              <div className=" bg-white lg:px-[30px] lg:py-[40px]  px-[15px] py-[20px] space-y-4  lg:w-[580px] w-full rounded-[20px]   ">
                <div className="">
                  <img src={img3} alt="" className="w-[40px]" />
                  <span className=" lg:text-[20px] text-[16px] font-[500]  lg:font-[600] ">
                    Ecommerce application <br />
                    development
                  </span>
                </div>

                <p className="flex-wrap  text-[14px]  font-[400] lg:text-[18px] lg:font-[400]">
                  Graphics are the only thing that can attract the user in a
                  fraction of second. We understand how important it is to
                  engage the interest of the customer so that they can connect
                  and explore the website. We design eye catchy graphics that
                  are insightful as well.
                </p>
              </div>
              <div className=" bg-white lg:px-[40px] lg:py-[40px]   px-[15px] py-[20px] space-y-4  lg:w-[580px] w-full  rounded-[20px]   ">
                <div className="">
                  <img src={img2} alt="" className="w-[40px]" />

                  <span className=" lg:text-[20px] text-[16px] font-[500]  lg:font-[600]">
                    eCommerce Maintenance & <br />
                    Support
                  </span>
                </div>

                <p className="flex-wrap  text-[14px]  font-[400] lg:text-[18px] lg:font-[400]">
                  Logo is the identity of any organizations. Our experts very
                  well know the importance of identity and that is why we make a
                  logo that conveys your image personality, impressive skill and
                  reliability.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="lg:text-[18px] lg:font-[500] text-[14px] font-[400] px-[30px] py-[10px] bg-black text-white  mt-6 rounded-[50px]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intutive;
