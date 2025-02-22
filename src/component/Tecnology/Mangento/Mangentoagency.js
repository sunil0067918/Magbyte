import React from "react";
import img1 from "../Mangento/Magentosectionsimages/images7.png";

const Mangentoagency = () => {
  return (
    <div className="flex justify-center flex-col     items-center">
      <div className="lg:w-[80%]  w-full space-y-8  py-10 ">
        <div className="flex justify-center flex-col items-center space-y-4">
          <h1 className="lg:text-[32px] font-[600] text-[18px] flex justify-center ">
            Magento Development Company
          </h1>
          <p className="lg:text-[20px] text-[18px]  font-[500]   ">
            Select Us as Your Magento Agency for Top-Notch Magento E-Commerce
            Solutions
          </p>

          <p className="font-[400] text-[14px] text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,{" "}
          </p>
          <p className="font-[400] text-[14px] text-gray-500">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </p>
        </div>

        <img src={img1} alt="img" className=" " />

        <div className=" flex flex-col space-y-5">
          <span className="lg:text-[20px] text-[18px]  font-[600]   ">
            Magento India – Your Ultimate Destination for Complete Solutions
          </span>
          <span className="text-[18px] font-[500]">We Offer</span>
          <div className="flex gap-16">
            <div className="flex gap-5 flex-col">
              <span className="text-[15px] text-gray-600 font-[600]">
                Magento E-Commerce Store Development
              </span>
              <span className="text-[15px] text-gray-600 font-[600]">
                Magento Mobile App Developmen
              </span>
              <span className="text-[15px] text-gray-600 font-[600]">
                Tailored E-Commerce Store Developmen
              </span>
              <span className="text-[15px] text-gray-600 font-[600]">
                Mobile-Friendly E-Commerce Websites
              </span>
              <span className="text-[15px] text-gray-600 font-[600]">
                Magento Theme Customization and Development
              </span>
            </div>

            <div className="flex gap-5 flex-col">
              <span className="text-[15px] text-gray-600 font-[600]">
                Custom Magento Module Development
              </span>
              <span className="text-[15px] text-gray-600 font-[600]">
                Magento Integration Services
              </span>
              <span className="text-[15px] text-gray-600 font-[600]">
                Multi-Store Magento Development
              </span>
              <span className="text-[15px] text-gray-600 font-[600]">
                Magento Store Support and Maintenance
              </span>
              <span className="text-[15px] text-gray-600 font-[600]">
                Magento 2 Upgrade and Migration Services
              </span>
            </div>

            <div className="flex gap-5 flex-col">
              <span className="text-[15px] text-gray-600 font-[600]">
                Magento Performance and Speed Optimization
              </span>
              <span className="text-[15px] text-gray-600 font-[600]">
                Cloud Hosting Solutions
              </span>
              <span className="text-[15px] text-gray-600 font-[600]">
                System Administration Services
              </span>
              <span className="text-[15px] text-gray-600 font-[600]">
                {" "}
                Marketing Services
              </span>
              <span className="text-[15px] text-gray-600 font-[600]">
                Support Services
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 h-[800px] w-full py-20  flex justify-center ">
        <div className="w-[80%] ">
          <p className="flex justify-center text-[20px]  font-[600]">
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it{" "}
          </p>

          <div className="p-20">
            <ul className=" flex justify-between ">
              <li>
                <span className="text-sm px-6 py-3   rounded-lg text-white border border-gray-300 bg-gray-800 transition-all duration-300 shadow-md">
                  Frontend
                </span>
              </li>

              <li>
                <span className="text-sm px-6 py-3   rounded-lg text-white border border-gray-300 bg-gray-800 transition-all duration-300 shadow-md">Backend</span>
              </li>
              <li>
                <span className="text-sm px-6 py-3   rounded-lg text-white border border-gray-300 bg-gray-800 transition-all duration-300 shadow-md">database</span>
              </li>
              <li>
                <span className="text-sm px-6 py-3   rounded-lg text-white border border-gray-300 bg-gray-800 transition-all duration-300 shadow-md">cloud</span>
              </li>
              <li>
                <span className="text-sm px-6 py-3   rounded-lg text-white border border-gray-300 bg-gray-800 transition-all duration-300 shadow-md">Ecommarce</span>
              </li>
              <li>
                <span className="text-sm px-6 py-3   rounded-lg text-white border border-gray-300 bg-gray-800 transition-all duration-300 shadow-md">CMS</span>
              </li>
              <li>
                <span className="text-sm px-6 py-3   rounded-lg text-white border border-gray-300 bg-gray-800 transition-all duration-300 shadow-md">CRM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mangentoagency;
