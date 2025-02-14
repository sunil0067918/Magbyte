import React from "react";
import img1 from "../../Services/WebDesign/Images/images2.png";
import img2 from "../../Services/WebDesign/Images/images3.png";
import img3 from "../../Services/WebDesign/Images/images4.png";
import img4 from "../../Services/WebDesign/Images/images5.png";

const Intutive = () => {
  return (
    <div>
      <div className=" flex justify-center">
        <div className="w-[90%] flex py-20 gap-16 items-center flex-col sm:flex-row">
          <div className="space-y-10 md:w-[50%] w-full">
            <span className="text-[32px] font-[600]">
              Intuitive experience that captures user’s interest
            </span>
            <p className="text-[18px] font-[400]">
              A flunking website can leave your company in ashes. Our objective
              is not just to make designs that look great but designs that
              benefit a purpose.
            </p>
            <p className="text-[18px] font-[400]">
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
            <p className="text-[18px] font-[400]">
              Your site ought to assist your company by increasing the tempo;
              making your attempts simpler and setting out new open doors and
              should not need to endure long-haul fallouts in light of an
              average site.
            </p>
          </div>

          <img alt="" src={img1} className="w-[571px] h-[393px]" />
        </div>
      </div>

      <div className="bg-[#D9D9D9] h-[955px] flex justify-center pt-[70px]">
        <div className="w-[90%]">
          <div className="text-[32px] font-[700] flex justify-center flex-col items-center text-center space-y-5">
            <span>Service We Provide</span>
            <p className="text-[20px] font-[400]">
              We cultivate a collaborative bond with our clients, akin to
              friendship, to ensure the delivery of optimal and tailored
              solutions.
            </p>
          </div>

          <div className="bg-[#4687C7] py-10 px-20 mt-10 rounded-[30px]">
            <div className="flex gap-10 flex-wrap sm:flex-nowrap sm:flex-row ">
              <div className=" bg-white  px-[30px] py-[40px] space-y-4 md:w-[580px] w-full rounded-[20px]    ">
                <div className="">
                  <img src={img2} alt="" className="w-[40px]" />

                  <span className=" text-[20px]  font-[600] ">
                    Ecommerce Website <br />
                    Development
                  </span>
                </div>

                <p className="flex-wrap text-[18px] font-[400]">
                  User Experience design, otherwise called UX design, is the
                  core of any website. The end user anticipates a simple, clear,
                  and appealing site, regardless of what industry you are in. We
                  will tell you the best way to construct a remarkable web
                  presence through our tried and tested methodologies
                </p>
              </div>
              <div className=" bg-white px-[30px] py-[40px] space-y-4  md:w-[580px] w-full rounded-[20px]   ">
                <div className="">
                  <img src={img3} alt="" className="w-[40px]" />
                  <span className=" text-[20px]  font-[600] ">
                    Ecommerce application <br />
                    development
                  </span>
                </div>

                <p className="flex-wrap text-[18px] font-[400]">
                  Graphics are the only thing that can attract the user in a
                  fraction of second. We understand how important it is to
                  engage the interest of the customer so that they can connect
                  and explore the website. We design eye catchy graphics that
                  are insightful as well.
                </p>
              </div>
              <div className=" bg-white px-[40px] py-[40px] space-y-4  md:w-[580px] w-full  rounded-[20px]   ">
                <div className="">
                  <img src={img2} alt="" className="w-[40px]" />

                  <span className=" text-[20px]  font-[600] ">
                    eCommerce Maintenance & <br />
                    Support
                  </span>
                </div>

                <p className="flex-wrap text-[18px] font-[400]">
                  Logo is the identity of any organizations. Our experts very
                  well know the importance of identity and that is why we make a
                  logo that conveys your image personality, impressive skill and
                  reliability.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="text-[18px] font-[500] px-[30px] py-[10px] bg-black text-white  mt-6 rounded-[50px]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intutive;
