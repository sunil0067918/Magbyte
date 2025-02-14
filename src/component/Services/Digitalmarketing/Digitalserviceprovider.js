import React from "react";
import img1 from "../Digitalmarketing/Images/images4.png";
import img2 from "../Digitalmarketing/Images/images5.png";
import img3 from "../Digitalmarketing/Images/images6.png";
import img4 from "../Digitalmarketing/Images/images7.png";
import img5 from "../Digitalmarketing/Images/images8.png";
import img6 from "../Digitalmarketing/Images/images9.png";

const Digitalserviceprovider = () => {
  return (
    <div className="bg-[#D9D9D9] py-[40px] flex justify-center">
      <div className="w-[80%] flex  flex-col  items-center">
        <div className="flex flex-col justify-center items-center text-center">
          <span className="text-[32px]  font-[700]">Service We Provide</span>
          <span>
            We cultivate a collaborative bond with our clients, akin to
            friendship, to ensure the delivery of optimal and tailored
            solutions.
          </span>
        </div>

        <div className="flex flex-col gap-6 py-20">
          <div className="flex  gap-9 flex-col sm:flex-row">
            <div className=" bg-white  px-[30px] py-[40px] space-y-6  w-full rounded-[5px] h-[437px]    ">
              <div className=" flex flex-col">
                <img className="w-[50px] h-[50px]" alt="" src={img1} />

                <span className=" sm:text-[24px]  font-[600] ">SEO</span>
              </div>

              <p className="flex-wrap text-[16px] font-[400]">
                With keyword research and SEO practices, we can assist you with
                accomplishing higher organic rankings and increased visibility
                in search results. We conduct on-page and off-page SEO
                optimization and monitor the outcome with the Google search
                engine.
              </p>
            </div>

            <div className=" bg-white  px-[30px] py-[40px] space-y-4  w-full rounded-[5px] h-[437px]   ">
              <div className="flex flex-col">
                <img className="w-[50px] h-[50px]" alt="" src={img2} />
                <span className=" sm:text-[24px]  font-[600] ">PPC</span>
              </div>

              <p className="flex-wrap text-[16px] font-[400]">
                Get in touch with your clients directly and with accuracy with a
                data-driven PPC campaign. Our PPC Experts are AdWords certified
                and create targeted ad copies, optimize bidding strategies, and
                monitor ROI for each keyword. We additionally put to use
                seasonal trends to promote products and services and drive more
                leads and traffic.
              </p>
            </div>

            <div className=" bg-white  px-[30px] py-[40px] space-y-4  w-full rounded-[5px] h-[437px]   ">
              <div className="flex flex-col">
                <img className="w-[50px] h-[50px]" alt="" src={img3} />
                <span className=" sm:text-[24px]  font-[600] ">
                  Content Writing
                </span>
              </div>

              <p className="flex-wrap text-[16px] font-[400]">
                The foundation of SEO is the website's content and the reason
                many people visit it. Our content experts keep up to date with
                the most recent news and market patterns to guarantee we adhere
                to Google standards while creating content.
              </p>
            </div>
          </div>

          <div className="flex  gap-9 flex-col sm:flex-row">
            <div className=" bg-white  px-[30px] py-[40px] space-y-4  w-full rounded-[5px] h-[437px]   ">
              <div className="flex flex-col">
                <img className="w-[50px] h-[50px]" alt="" src={img4} />

                <span className=" sm:text-[24px]  font-[600] ">
                  Link Building
                </span>
              </div>

              <p className="flex-wrap text-[16px] font-[400]">
                Gain a constant traffic flow from leading websites and increment
                your customer trust. We use strategic guest blogging, publish
                creative and persuasive content, distribute data-driven
                infographics and lift your social media engagement.
              </p>
            </div>

            <div className=" bg-white  px-[30px] py-[40px] space-y-4  w-full rounded-[5px] h-[437px]    ">
              <div className="flex flex-col">
                <img className="w-[50px] h-[50px]" alt="" src={img5} />

                <span className=" text-[20px]  font-[600] ">ORM</span>
              </div>

              <p className="flex-wrap text-[16px] font-[400]">
                Reviews and online reputation can make or break your business
                online. Our team uses best-in-class online reputation management
                software to smooth out your ORM practices and procure more
                positive reviews.
              </p>
            </div>

            <div className=" bg-white  px-[30px] py-[40px] space-y-4  w-full rounded-[5px] h-[437px]   ">
              <div className="flex flex-col">
                <img className="w-[50px] h-[50px]" alt="" src={img6} />
                <span className=" sm:text-[24px]  font-[600] ">
                  Email Marketing
                </span>
              </div>

              <p className="flex-wrap text-[16px] font-[400]">
                Partner with us and then how about we make your email promoting
                efforts stick out and work for your business. We make customized
                email pamphlets to keep your messages out of spam folder and
                urge your clients to make a deal with you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Digitalserviceprovider;
