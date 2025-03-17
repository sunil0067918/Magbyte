import React from "react";

const Androidsection2 = () => {
  return (
    <div className="">
      <div className="flex justify-center py-5 lg:py-10 px-2">
        <div className="lg:w-[90%] flex flex-col gap-5 items-center ">
          <span className="lg:text-[32px]  text-[20px] text-center font-[600] capitalize">
            A proficient Android app development company offering solutions for
            mobiles, tablets, and wearables.
          </span>

          <ul className="flex flex-col gap-5 lg:text-[18px] text-center font-[600]  text-[12px]">
            <li>
              Our Android development services include the design, development,
              and optimization of mobile applications that are compatible with
              all supported Android OS versions.
            </li>
            <li>
              {" "}
              We develop fully functional and stable apps for a variety of
              Android device types. As an experienced Android app development
              company, our expert team possesses in-depth knowledge of the
              Android ecosystem. With over a decade of experience, we specialize
              in creating custom Android solutions tailored to meet your
              business requirements.
            </li>
            <li>
              {" "}
              For native app development, we leverage Android SDK, Kotlin, and
              Java. Our team is also proficient in using cross-platform
              technologies like React Native, Xamarin, and Flutter to build
              applications that function seamlessly across multiple platforms.
              Additionally, our cross-platform app developers can assist in
              migrating mobile apps built with other technologies, such as
              Kotlin (Java) and Swift, to Android.
            </li>
            <li>
              {" "}
              We have developed feature-rich Android apps across many industries
              like healthcare, media & entertainment just to name a few. Whether
              you are looking to create mobile apps that are standalone,
              client-server, web service driven, or database driven, our skilled
              Android app developers can help.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center  bg-gradient-to-r from-green-700 to-green-900 py-5 px-5 lg:py-20">
        <div className="lg:w-[90%] flex flex-col items-center gap-4">
          <span className="text-white font-[600] text-center   text-[18px] lg:text-[28px]">
            Are you ready to create a feature-packed mobile app with our Android
            development services?
          </span>
          <button className=" bg-gradient-to-r from-blue-600 to-blue-900 lg:py-3 py-1 px-4 lg:px-8 text-white text-[16px] lg:text-[18px]  rounded-lg hover:scale-105">
            Lets Talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default Androidsection2;
