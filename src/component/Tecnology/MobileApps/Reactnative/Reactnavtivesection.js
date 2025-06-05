import React from "react";
import img from "../../MobileApps/Reactnative/Reactnativesectionimages/images.png";
import img1 from "../Reactnative/Reactnativesectionimages/images1.png";

const Reactnavtivesection = () => {
  return (
    <div>
      <div className="flex justify-center py-3 lg:py-6">
        <div className="lg:w-[90%] flex flex-col  lg:flex-row gap-10 px-5 items-center ">
          <div className="flex flex-col gap-6">
            <span className="lg:text-[28px]  text-[20px] font-[700] text-center lg:text-start ">
              React Native app Devlopment
            </span>
            <ul className="flex flex-col gap-4 list-disc lg:text-[16px] text-[12px] font-[500]">
              <li>
                React Native combines the best features of native development
                with React, a top-tier JavaScript library for building user
                interfaces. It enables the development of applications for
                Android, iOS, Web, and Universal Windows Platform (UWP),
                allowing developers to create cross-platform apps with a single
                codebase while maintaining high performance and a native-like
                experience.
              </li>
              <li>
                Flexible and scalable, React Native allows you to customize it
                to the extent you need, offering versatility for your app
                development. Enhance your reach and distribution, while boosting
                your marketing strategies and user interactions. With React
                Native, you can gain deeper insights into user behavior, helping
                you make data-driven decisions for better engagement and app
                performance.
              </li>
              <li>
                {" "}
                All it takes is writing the code once. After deployment, it can
                run on both iOS and Android platforms. Whether you're building a
                news aggregator, ride-sharing app, or any other mobile solution,
                React Native ensures you make the right choice, no matter the
                direction you take.
              </li>
            </ul>
          </div>
          <img alt="" src={img} className="w-[600px]  lg:h-[300px]" />
        </div>
      </div>

      <div className="py-10 px-5 flex justify-center items-center  ">
        <div className="flex flex-col lg:w-[90%]">
          <div className="flex flex-col items-center gap-3">
            <span className="lg:text-4xl text-[16px] text-green-500 font-[600] text-center">
              A Leading React native Development Solution Provider
            </span>
            <span className="lg:text-[18px] text-[14px] text-gray-700 font-[500] text-center">
              We utilize our expertise in React Native   to build a strong and
              impactful web presence for your brand
            </span>
          </div>

          <div className="flex justify-center lg:pt-10 pt-6  ">
            <div className="lg:w-[90%] flex flex-col gap-8 lg:gap-12 ">
              <div className="flex lg:flex-row flex-col gap-10 cursor-pointer">
                <div className="border shadow-md flex flex-col gap-3 lg:px-3 bg-white lg:py-3 px-2 p-2 hover:scale-105 hover:duration-300 hover:transition-all lg:w-[600px]  rounded-md   ">
                  <svg
                    width="76"
                    height="76"
                    viewBox="0 0 76 76"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="38"
                      cy="38"
                      r="37.625"
                      fill="white"
                      stroke="#2567BB"
                      stroke-width="0.750001"
                    />
                    <g clip-path="url(#clip0_519_1444)">
                      <path
                        d="M54.7098 43.4101C51.7406 42.4905 48.8667 41.5709 45.9731 40.731C45.2954 40.5333 44.5255 40.4 43.8449 40.5195C43.4693 40.5815 43.111 40.7234 42.7935 40.9357C42.4759 41.148 42.2062 41.426 42.0022 41.7514C41.7982 42.0768 41.6645 42.4422 41.6098 42.8238C41.5551 43.2053 41.5807 43.5942 41.6849 43.965C42.2899 46.2502 43.0069 48.5063 43.6739 50.7746C43.7435 51.0091 43.801 51.2482 43.8857 51.5624H43.0523C37.3286 51.5624 31.6049 51.5011 25.8812 51.5915C23.4112 51.6299 20.9834 49.8474 21.0001 46.6502C21.0318 40.0842 21.0001 33.5183 21.0122 26.9507C21.0122 23.9452 22.915 22.0109 25.8828 22.0079C33.8753 21.9987 41.8684 21.9987 49.862 22.0079C52.8387 22.0079 54.7023 23.9298 54.7023 26.9553C54.7023 32.1664 54.7023 37.3775 54.7023 42.5886L54.7098 43.4101ZM52.5529 29.7463C52.5529 28.7639 52.5529 27.8719 52.5529 26.9875C52.5408 25.1483 51.6604 24.2548 49.8635 24.2532C43.4601 24.2532 37.0568 24.2532 30.6535 24.2532C28.9397 24.2532 27.2244 24.2425 25.5106 24.2532C24.3671 24.2655 23.3567 25.0502 23.2705 26.1323C23.1752 27.3171 23.2493 28.5156 23.2493 29.7463H52.5529Z"
                        fill="#4687C7"
                      />
                      <path
                        d="M55.9986 46.5581C55.9805 47.1528 55.6129 47.4869 55.0638 47.6709C53.7781 48.1031 52.4924 48.5567 51.2052 48.9644C50.9259 49.0377 50.6709 49.1849 50.4663 49.391C50.2616 49.597 50.1147 49.8544 50.0405 50.1369C49.6442 51.4228 49.201 52.6934 48.7896 53.9686C48.6035 54.5495 48.2965 55.0032 47.6415 54.9924C46.9866 54.9817 46.7037 54.5326 46.5267 53.9364C45.5345 50.6013 44.5316 47.2703 43.5182 43.9434C43.3669 43.4238 43.2731 42.8537 43.7602 42.564C44.1603 42.34 44.6283 42.275 45.0731 42.3816C48.4009 43.361 51.7044 44.4032 55.017 45.4194C55.5736 45.591 55.9578 45.8976 55.9986 46.5581Z"
                        fill="#4687C7"
                      />
                      <path
                        d="M27.9273 26.9995C27.8471 27.5574 27.5869 27.9375 26.9758 27.9589C26.4026 27.9804 25.9306 27.5405 25.9745 26.9826C26.0214 26.3971 26.3617 26.0446 26.9486 26.0461C27.5355 26.0477 27.8426 26.414 27.9273 26.9995Z"
                        fill="#4687C7"
                      />
                      <path
                        d="M30.3021 26.04C30.948 26.0492 31.3095 26.3834 31.3246 26.9704C31.3397 27.5574 31.0221 27.9436 30.408 27.9559C29.7939 27.9681 29.455 27.6493 29.4308 27.0363C29.4066 26.4232 29.7666 26.1197 30.3021 26.04Z"
                        fill="#4687C7"
                      />
                      <path
                        d="M32.8296 26.9827C32.9204 26.3696 33.2425 26.0141 33.8446 26.0524C34.4466 26.0907 34.7687 26.4401 34.7385 27.0547C34.7082 27.6693 34.3437 27.9667 33.7493 27.9575C33.6253 27.9559 33.503 27.9293 33.3893 27.8792C33.2756 27.8292 33.173 27.7566 33.0874 27.6658C33.0017 27.5751 32.9348 27.4679 32.8905 27.3506C32.8463 27.2333 32.8256 27.1082 32.8296 26.9827Z"
                        fill="#4687C7"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_519_1444">
                        <rect
                          width="35"
                          height="33"
                          fill="white"
                          transform="translate(21 22)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="lg:text-[20px] text-[16px] font-[500] text-green-600">
                    Custom Android App Development
                  </span>
                  <p className="lg:text-[16px] text-[13px]  font-[400] text-gray-700">
                    At Magbyte, we specialize in Custom Android App Development,
                    creating high-quality, feature-rich mobile applications
                    tailored to meet your business objectives. Our team of
                    experienced developers designs intuitive, user-friendly apps
                    that offer seamless performance across a wide range of
                    Android devices. Whether you're looking to develop an app
                    for e-commerce, business management, or any other purpose,
                    we provide end-to-end services, from ideation and design to
                    development, testing, and deploymen
                  </p>
                </div>

                <div className="border shadow-md flex flex-col gap-3 bg-white lg:px-3 lg:py-3 px-2 p-2 hover:scale-105 hover:duration-300 hover:transition-all lg:w-[600px]  rounded-md   ">
                  <svg
                    width="76"
                    height="76"
                    viewBox="0 0 76 76"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="38"
                      cy="38"
                      r="37.625"
                      fill="white"
                      stroke="#2567BB"
                      stroke-width="0.750001"
                    />
                    <g clip-path="url(#clip0_519_1444)">
                      <path
                        d="M54.7098 43.4101C51.7406 42.4905 48.8667 41.5709 45.9731 40.731C45.2954 40.5333 44.5255 40.4 43.8449 40.5195C43.4693 40.5815 43.111 40.7234 42.7935 40.9357C42.4759 41.148 42.2062 41.426 42.0022 41.7514C41.7982 42.0768 41.6645 42.4422 41.6098 42.8238C41.5551 43.2053 41.5807 43.5942 41.6849 43.965C42.2899 46.2502 43.0069 48.5063 43.6739 50.7746C43.7435 51.0091 43.801 51.2482 43.8857 51.5624H43.0523C37.3286 51.5624 31.6049 51.5011 25.8812 51.5915C23.4112 51.6299 20.9834 49.8474 21.0001 46.6502C21.0318 40.0842 21.0001 33.5183 21.0122 26.9507C21.0122 23.9452 22.915 22.0109 25.8828 22.0079C33.8753 21.9987 41.8684 21.9987 49.862 22.0079C52.8387 22.0079 54.7023 23.9298 54.7023 26.9553C54.7023 32.1664 54.7023 37.3775 54.7023 42.5886L54.7098 43.4101ZM52.5529 29.7463C52.5529 28.7639 52.5529 27.8719 52.5529 26.9875C52.5408 25.1483 51.6604 24.2548 49.8635 24.2532C43.4601 24.2532 37.0568 24.2532 30.6535 24.2532C28.9397 24.2532 27.2244 24.2425 25.5106 24.2532C24.3671 24.2655 23.3567 25.0502 23.2705 26.1323C23.1752 27.3171 23.2493 28.5156 23.2493 29.7463H52.5529Z"
                        fill="#4687C7"
                      />
                      <path
                        d="M55.9986 46.5581C55.9805 47.1528 55.6129 47.4869 55.0638 47.6709C53.7781 48.1031 52.4924 48.5567 51.2052 48.9644C50.9259 49.0377 50.6709 49.1849 50.4663 49.391C50.2616 49.597 50.1147 49.8544 50.0405 50.1369C49.6442 51.4228 49.201 52.6934 48.7896 53.9686C48.6035 54.5495 48.2965 55.0032 47.6415 54.9924C46.9866 54.9817 46.7037 54.5326 46.5267 53.9364C45.5345 50.6013 44.5316 47.2703 43.5182 43.9434C43.3669 43.4238 43.2731 42.8537 43.7602 42.564C44.1603 42.34 44.6283 42.275 45.0731 42.3816C48.4009 43.361 51.7044 44.4032 55.017 45.4194C55.5736 45.591 55.9578 45.8976 55.9986 46.5581Z"
                        fill="#4687C7"
                      />
                      <path
                        d="M27.9273 26.9995C27.8471 27.5574 27.5869 27.9375 26.9758 27.9589C26.4026 27.9804 25.9306 27.5405 25.9745 26.9826C26.0214 26.3971 26.3617 26.0446 26.9486 26.0461C27.5355 26.0477 27.8426 26.414 27.9273 26.9995Z"
                        fill="#4687C7"
                      />
                      <path
                        d="M30.3021 26.04C30.948 26.0492 31.3095 26.3834 31.3246 26.9704C31.3397 27.5574 31.0221 27.9436 30.408 27.9559C29.7939 27.9681 29.455 27.6493 29.4308 27.0363C29.4066 26.4232 29.7666 26.1197 30.3021 26.04Z"
                        fill="#4687C7"
                      />
                      <path
                        d="M32.8296 26.9827C32.9204 26.3696 33.2425 26.0141 33.8446 26.0524C34.4466 26.0907 34.7687 26.4401 34.7385 27.0547C34.7082 27.6693 34.3437 27.9667 33.7493 27.9575C33.6253 27.9559 33.503 27.9293 33.3893 27.8792C33.2756 27.8292 33.173 27.7566 33.0874 27.6658C33.0017 27.5751 32.9348 27.4679 32.8905 27.3506C32.8463 27.2333 32.8256 27.1082 32.8296 26.9827Z"
                        fill="#4687C7"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_519_1444">
                        <rect
                          width="35"
                          height="33"
                          fill="white"
                          transform="translate(21 22)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="lg:text-[20px] text-[16px] font-[500] text-green-600">
                    API Integrations
                  </span>
                  <p className="lg:text-[16px] text-[13px]  font-[400] text-gray-700">
                    At Magbyte, we offer seamless API integration services to
                    enhance the functionality of your applications and systems.
                    Our team integrates third-party APIs to improve connectivity
                    between your platform and external services, enabling
                    smoother data exchange and enhanced performance. Whether
                    it’s payment gateways, CRM systems, shipping providers, or
                    social media platforms, we ensure that all integrations work
                    efficiently and securely. We help streamline business
                    operations, automate processes, and offer your customers a
                    more cohesive and enhanced experience by connecting your
                    business to the right tools and services.
                  </p>
                </div>
              </div>

              <div className="flex lg:flex-row flex-col gap-10 cursor-pointer">
                <div className="border shadow-md flex flex-col gap-3 bg-white lg:px-3 lg:py-3 px-2 p-2 hover:scale-105 hover:duration-300 hover:transition-all lg:w-[600px]  rounded-md   ">
                  <svg
                    width="76"
                    height="76"
                    viewBox="0 0 76 76"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="38"
                      cy="38"
                      r="37.625"
                      fill="white"
                      stroke="#2567BB"
                      stroke-width="0.750001"
                    />
                    <g clip-path="url(#clip0_519_1444)">
                      <path
                        d="M54.7098 43.4101C51.7406 42.4905 48.8667 41.5709 45.9731 40.731C45.2954 40.5333 44.5255 40.4 43.8449 40.5195C43.4693 40.5815 43.111 40.7234 42.7935 40.9357C42.4759 41.148 42.2062 41.426 42.0022 41.7514C41.7982 42.0768 41.6645 42.4422 41.6098 42.8238C41.5551 43.2053 41.5807 43.5942 41.6849 43.965C42.2899 46.2502 43.0069 48.5063 43.6739 50.7746C43.7435 51.0091 43.801 51.2482 43.8857 51.5624H43.0523C37.3286 51.5624 31.6049 51.5011 25.8812 51.5915C23.4112 51.6299 20.9834 49.8474 21.0001 46.6502C21.0318 40.0842 21.0001 33.5183 21.0122 26.9507C21.0122 23.9452 22.915 22.0109 25.8828 22.0079C33.8753 21.9987 41.8684 21.9987 49.862 22.0079C52.8387 22.0079 54.7023 23.9298 54.7023 26.9553C54.7023 32.1664 54.7023 37.3775 54.7023 42.5886L54.7098 43.4101ZM52.5529 29.7463C52.5529 28.7639 52.5529 27.8719 52.5529 26.9875C52.5408 25.1483 51.6604 24.2548 49.8635 24.2532C43.4601 24.2532 37.0568 24.2532 30.6535 24.2532C28.9397 24.2532 27.2244 24.2425 25.5106 24.2532C24.3671 24.2655 23.3567 25.0502 23.2705 26.1323C23.1752 27.3171 23.2493 28.5156 23.2493 29.7463H52.5529Z"
                        fill="#4687C7"
                      />
                      <path
                        d="M55.9986 46.5581C55.9805 47.1528 55.6129 47.4869 55.0638 47.6709C53.7781 48.1031 52.4924 48.5567 51.2052 48.9644C50.9259 49.0377 50.6709 49.1849 50.4663 49.391C50.2616 49.597 50.1147 49.8544 50.0405 50.1369C49.6442 51.4228 49.201 52.6934 48.7896 53.9686C48.6035 54.5495 48.2965 55.0032 47.6415 54.9924C46.9866 54.9817 46.7037 54.5326 46.5267 53.9364C45.5345 50.6013 44.5316 47.2703 43.5182 43.9434C43.3669 43.4238 43.2731 42.8537 43.7602 42.564C44.1603 42.34 44.6283 42.275 45.0731 42.3816C48.4009 43.361 51.7044 44.4032 55.017 45.4194C55.5736 45.591 55.9578 45.8976 55.9986 46.5581Z"
                        fill="#4687C7"
                      />
                      <path
                        d="M27.9273 26.9995C27.8471 27.5574 27.5869 27.9375 26.9758 27.9589C26.4026 27.9804 25.9306 27.5405 25.9745 26.9826C26.0214 26.3971 26.3617 26.0446 26.9486 26.0461C27.5355 26.0477 27.8426 26.414 27.9273 26.9995Z"
                        fill="#4687C7"
                      />
                      <path
                        d="M30.3021 26.04C30.948 26.0492 31.3095 26.3834 31.3246 26.9704C31.3397 27.5574 31.0221 27.9436 30.408 27.9559C29.7939 27.9681 29.455 27.6493 29.4308 27.0363C29.4066 26.4232 29.7666 26.1197 30.3021 26.04Z"
                        fill="#4687C7"
                      />
                      <path
                        d="M32.8296 26.9827C32.9204 26.3696 33.2425 26.0141 33.8446 26.0524C34.4466 26.0907 34.7687 26.4401 34.7385 27.0547C34.7082 27.6693 34.3437 27.9667 33.7493 27.9575C33.6253 27.9559 33.503 27.9293 33.3893 27.8792C33.2756 27.8292 33.173 27.7566 33.0874 27.6658C33.0017 27.5751 32.9348 27.4679 32.8905 27.3506C32.8463 27.2333 32.8256 27.1082 32.8296 26.9827Z"
                        fill="#4687C7"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_519_1444">
                        <rect
                          width="35"
                          height="33"
                          fill="white"
                          transform="translate(21 22)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="lg:text-[20px] text-[16px] font-[500] text-green-600">
                    Android Framework Development
                  </span>
                  <p className="lg:text-[16px] text-[13px]  font-[400] text-gray-700">
                    At Magbyte, we specialize in Android Framework Development,
                    offering comprehensive solutions to enhance your mobile
                    applications' performance and scalability. Our team
                    leverages advanced frameworks and technologies to build
                    robust applications that cater to your specific business
                    requirements. Whether it's utilizing Google's Flutter for
                    cross-platform development or other frameworks like Titanium
                    SDK and RhoMobile Suite, we ensure your applications are
                    optimized for efficiency and user engagement.
                  </p>
                </div>

                <div className="border shadow-md flex flex-col gap-3 bg-white lg:px-3 lg:py-3 px-2 p-2 hover:scale-105 hover:duration-300 hover:transition-all lg:w-[600px]  rounded-md   ">
                  <svg
                    width="76"
                    height="76"
                    viewBox="0 0 76 76"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="38"
                      cy="38"
                      r="37.625"
                      fill="white"
                      stroke="#2567BB"
                      stroke-width="0.750001"
                    />
                    <g clip-path="url(#clip0_519_1444)">
                      <path
                        d="M54.7098 43.4101C51.7406 42.4905 48.8667 41.5709 45.9731 40.731C45.2954 40.5333 44.5255 40.4 43.8449 40.5195C43.4693 40.5815 43.111 40.7234 42.7935 40.9357C42.4759 41.148 42.2062 41.426 42.0022 41.7514C41.7982 42.0768 41.6645 42.4422 41.6098 42.8238C41.5551 43.2053 41.5807 43.5942 41.6849 43.965C42.2899 46.2502 43.0069 48.5063 43.6739 50.7746C43.7435 51.0091 43.801 51.2482 43.8857 51.5624H43.0523C37.3286 51.5624 31.6049 51.5011 25.8812 51.5915C23.4112 51.6299 20.9834 49.8474 21.0001 46.6502C21.0318 40.0842 21.0001 33.5183 21.0122 26.9507C21.0122 23.9452 22.915 22.0109 25.8828 22.0079C33.8753 21.9987 41.8684 21.9987 49.862 22.0079C52.8387 22.0079 54.7023 23.9298 54.7023 26.9553C54.7023 32.1664 54.7023 37.3775 54.7023 42.5886L54.7098 43.4101ZM52.5529 29.7463C52.5529 28.7639 52.5529 27.8719 52.5529 26.9875C52.5408 25.1483 51.6604 24.2548 49.8635 24.2532C43.4601 24.2532 37.0568 24.2532 30.6535 24.2532C28.9397 24.2532 27.2244 24.2425 25.5106 24.2532C24.3671 24.2655 23.3567 25.0502 23.2705 26.1323C23.1752 27.3171 23.2493 28.5156 23.2493 29.7463H52.5529Z"
                        fill="#4687C7"
                      />
                      <path
                        d="M55.9986 46.5581C55.9805 47.1528 55.6129 47.4869 55.0638 47.6709C53.7781 48.1031 52.4924 48.5567 51.2052 48.9644C50.9259 49.0377 50.6709 49.1849 50.4663 49.391C50.2616 49.597 50.1147 49.8544 50.0405 50.1369C49.6442 51.4228 49.201 52.6934 48.7896 53.9686C48.6035 54.5495 48.2965 55.0032 47.6415 54.9924C46.9866 54.9817 46.7037 54.5326 46.5267 53.9364C45.5345 50.6013 44.5316 47.2703 43.5182 43.9434C43.3669 43.4238 43.2731 42.8537 43.7602 42.564C44.1603 42.34 44.6283 42.275 45.0731 42.3816C48.4009 43.361 51.7044 44.4032 55.017 45.4194C55.5736 45.591 55.9578 45.8976 55.9986 46.5581Z"
                        fill="#4687C7"
                      />
                      <path
                        d="M27.9273 26.9995C27.8471 27.5574 27.5869 27.9375 26.9758 27.9589C26.4026 27.9804 25.9306 27.5405 25.9745 26.9826C26.0214 26.3971 26.3617 26.0446 26.9486 26.0461C27.5355 26.0477 27.8426 26.414 27.9273 26.9995Z"
                        fill="#4687C7"
                      />
                      <path
                        d="M30.3021 26.04C30.948 26.0492 31.3095 26.3834 31.3246 26.9704C31.3397 27.5574 31.0221 27.9436 30.408 27.9559C29.7939 27.9681 29.455 27.6493 29.4308 27.0363C29.4066 26.4232 29.7666 26.1197 30.3021 26.04Z"
                        fill="#4687C7"
                      />
                      <path
                        d="M32.8296 26.9827C32.9204 26.3696 33.2425 26.0141 33.8446 26.0524C34.4466 26.0907 34.7687 26.4401 34.7385 27.0547C34.7082 27.6693 34.3437 27.9667 33.7493 27.9575C33.6253 27.9559 33.503 27.9293 33.3893 27.8792C33.2756 27.8292 33.173 27.7566 33.0874 27.6658C33.0017 27.5751 32.9348 27.4679 32.8905 27.3506C32.8463 27.2333 32.8256 27.1082 32.8296 26.9827Z"
                        fill="#4687C7"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_519_1444">
                        <rect
                          width="35"
                          height="33"
                          fill="white"
                          transform="translate(21 22)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="lg:text-[20px] text-[16px] font-[500] text-green-600">
                    Android Migration Services
                  </span>
                  <p className="lg:text-[16px] text-[13px]  font-[400] text-gray-700">
                    At Magbyte, we offer comprehensive Android Migration
                    Services to facilitate a seamless transition to Android
                    devices or operating systems. Our expert team assists
                    businesses and individuals in migrating data, applications,
                    and settings, ensuring minimal downtime and data integrity
                    throughout the process.
                  </p>
                </div>
              </div>

              <div className="flex lg:flex-row flex-col gap-10 cursor-pointer">
                <div className="border shadow-md flex flex-col gap-3 bg-white lg:px-3 lg:py-3 px-2 p-2 hover:scale-105 hover:duration-300 hover:transition-all lg:w-[600px]  rounded-md   ">
                  <svg
                    width="76"
                    height="76"
                    viewBox="0 0 76 76"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="38"
                      cy="38"
                      r="37.625"
                      fill="white"
                      stroke="#2567BB"
                      stroke-width="0.750001"
                    />
                    <g clip-path="url(#clip0_519_1444)">
                      <path
                        d="M54.7098 43.4101C51.7406 42.4905 48.8667 41.5709 45.9731 40.731C45.2954 40.5333 44.5255 40.4 43.8449 40.5195C43.4693 40.5815 43.111 40.7234 42.7935 40.9357C42.4759 41.148 42.2062 41.426 42.0022 41.7514C41.7982 42.0768 41.6645 42.4422 41.6098 42.8238C41.5551 43.2053 41.5807 43.5942 41.6849 43.965C42.2899 46.2502 43.0069 48.5063 43.6739 50.7746C43.7435 51.0091 43.801 51.2482 43.8857 51.5624H43.0523C37.3286 51.5624 31.6049 51.5011 25.8812 51.5915C23.4112 51.6299 20.9834 49.8474 21.0001 46.6502C21.0318 40.0842 21.0001 33.5183 21.0122 26.9507C21.0122 23.9452 22.915 22.0109 25.8828 22.0079C33.8753 21.9987 41.8684 21.9987 49.862 22.0079C52.8387 22.0079 54.7023 23.9298 54.7023 26.9553C54.7023 32.1664 54.7023 37.3775 54.7023 42.5886L54.7098 43.4101ZM52.5529 29.7463C52.5529 28.7639 52.5529 27.8719 52.5529 26.9875C52.5408 25.1483 51.6604 24.2548 49.8635 24.2532C43.4601 24.2532 37.0568 24.2532 30.6535 24.2532C28.9397 24.2532 27.2244 24.2425 25.5106 24.2532C24.3671 24.2655 23.3567 25.0502 23.2705 26.1323C23.1752 27.3171 23.2493 28.5156 23.2493 29.7463H52.5529Z"
                        fill="#4687C7"
                      />
                      <path
                        d="M55.9986 46.5581C55.9805 47.1528 55.6129 47.4869 55.0638 47.6709C53.7781 48.1031 52.4924 48.5567 51.2052 48.9644C50.9259 49.0377 50.6709 49.1849 50.4663 49.391C50.2616 49.597 50.1147 49.8544 50.0405 50.1369C49.6442 51.4228 49.201 52.6934 48.7896 53.9686C48.6035 54.5495 48.2965 55.0032 47.6415 54.9924C46.9866 54.9817 46.7037 54.5326 46.5267 53.9364C45.5345 50.6013 44.5316 47.2703 43.5182 43.9434C43.3669 43.4238 43.2731 42.8537 43.7602 42.564C44.1603 42.34 44.6283 42.275 45.0731 42.3816C48.4009 43.361 51.7044 44.4032 55.017 45.4194C55.5736 45.591 55.9578 45.8976 55.9986 46.5581Z"
                        fill="#4687C7"
                      />
                      <path
                        d="M27.9273 26.9995C27.8471 27.5574 27.5869 27.9375 26.9758 27.9589C26.4026 27.9804 25.9306 27.5405 25.9745 26.9826C26.0214 26.3971 26.3617 26.0446 26.9486 26.0461C27.5355 26.0477 27.8426 26.414 27.9273 26.9995Z"
                        fill="#4687C7"
                      />
                      <path
                        d="M30.3021 26.04C30.948 26.0492 31.3095 26.3834 31.3246 26.9704C31.3397 27.5574 31.0221 27.9436 30.408 27.9559C29.7939 27.9681 29.455 27.6493 29.4308 27.0363C29.4066 26.4232 29.7666 26.1197 30.3021 26.04Z"
                        fill="#4687C7"
                      />
                      <path
                        d="M32.8296 26.9827C32.9204 26.3696 33.2425 26.0141 33.8446 26.0524C34.4466 26.0907 34.7687 26.4401 34.7385 27.0547C34.7082 27.6693 34.3437 27.9667 33.7493 27.9575C33.6253 27.9559 33.503 27.9293 33.3893 27.8792C33.2756 27.8292 33.173 27.7566 33.0874 27.6658C33.0017 27.5751 32.9348 27.4679 32.8905 27.3506C32.8463 27.2333 32.8256 27.1082 32.8296 26.9827Z"
                        fill="#4687C7"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_519_1444">
                        <rect
                          width="35"
                          height="33"
                          fill="white"
                          transform="translate(21 22)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="lg:text-[20px] text-[16px] font-[500] text-green-600">
                    Google Services Integration
                  </span>
                  <p className="lg:text-[16px] text-[13px]  font-[400] text-gray-700">
                    At Magbyte, we specialize in integrating a wide array of
                    Google services to enhance the functionality, performance,
                    and user experience of your applications and websites.
                    Leveraging Google's robust suite of tools and APIs, we
                    tailor solutions that align with your business objectives.
                    Our Google Services Integration offerings include: Google
                    Maps Integration: Incorporate interactive maps, location
                    services, and geospatial data into your platform to enhance
                    user engagement and provide valuable location-based
                    information.
                  </p>
                </div>

                <div className="border shadow-md flex flex-col gap-3 bg-white lg:px-3 lg:py-3 px-2 p-2 hover:scale-105 hover:duration-300 hover:transition-all lg:w-[600px]  rounded-md   ">
                  <svg
                    width="76"
                    height="76"
                    viewBox="0 0 76 76"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="38"
                      cy="38"
                      r="37.625"
                      fill="white"
                      stroke="#2567BB"
                      stroke-width="0.750001"
                    />
                    <g clip-path="url(#clip0_519_1444)">
                      <path
                        d="M54.7098 43.4101C51.7406 42.4905 48.8667 41.5709 45.9731 40.731C45.2954 40.5333 44.5255 40.4 43.8449 40.5195C43.4693 40.5815 43.111 40.7234 42.7935 40.9357C42.4759 41.148 42.2062 41.426 42.0022 41.7514C41.7982 42.0768 41.6645 42.4422 41.6098 42.8238C41.5551 43.2053 41.5807 43.5942 41.6849 43.965C42.2899 46.2502 43.0069 48.5063 43.6739 50.7746C43.7435 51.0091 43.801 51.2482 43.8857 51.5624H43.0523C37.3286 51.5624 31.6049 51.5011 25.8812 51.5915C23.4112 51.6299 20.9834 49.8474 21.0001 46.6502C21.0318 40.0842 21.0001 33.5183 21.0122 26.9507C21.0122 23.9452 22.915 22.0109 25.8828 22.0079C33.8753 21.9987 41.8684 21.9987 49.862 22.0079C52.8387 22.0079 54.7023 23.9298 54.7023 26.9553C54.7023 32.1664 54.7023 37.3775 54.7023 42.5886L54.7098 43.4101ZM52.5529 29.7463C52.5529 28.7639 52.5529 27.8719 52.5529 26.9875C52.5408 25.1483 51.6604 24.2548 49.8635 24.2532C43.4601 24.2532 37.0568 24.2532 30.6535 24.2532C28.9397 24.2532 27.2244 24.2425 25.5106 24.2532C24.3671 24.2655 23.3567 25.0502 23.2705 26.1323C23.1752 27.3171 23.2493 28.5156 23.2493 29.7463H52.5529Z"
                        fill="#4687C7"
                      />
                      <path
                        d="M55.9986 46.5581C55.9805 47.1528 55.6129 47.4869 55.0638 47.6709C53.7781 48.1031 52.4924 48.5567 51.2052 48.9644C50.9259 49.0377 50.6709 49.1849 50.4663 49.391C50.2616 49.597 50.1147 49.8544 50.0405 50.1369C49.6442 51.4228 49.201 52.6934 48.7896 53.9686C48.6035 54.5495 48.2965 55.0032 47.6415 54.9924C46.9866 54.9817 46.7037 54.5326 46.5267 53.9364C45.5345 50.6013 44.5316 47.2703 43.5182 43.9434C43.3669 43.4238 43.2731 42.8537 43.7602 42.564C44.1603 42.34 44.6283 42.275 45.0731 42.3816C48.4009 43.361 51.7044 44.4032 55.017 45.4194C55.5736 45.591 55.9578 45.8976 55.9986 46.5581Z"
                        fill="#4687C7"
                      />
                      <path
                        d="M27.9273 26.9995C27.8471 27.5574 27.5869 27.9375 26.9758 27.9589C26.4026 27.9804 25.9306 27.5405 25.9745 26.9826C26.0214 26.3971 26.3617 26.0446 26.9486 26.0461C27.5355 26.0477 27.8426 26.414 27.9273 26.9995Z"
                        fill="#4687C7"
                      />
                      <path
                        d="M30.3021 26.04C30.948 26.0492 31.3095 26.3834 31.3246 26.9704C31.3397 27.5574 31.0221 27.9436 30.408 27.9559C29.7939 27.9681 29.455 27.6493 29.4308 27.0363C29.4066 26.4232 29.7666 26.1197 30.3021 26.04Z"
                        fill="#4687C7"
                      />
                      <path
                        d="M32.8296 26.9827C32.9204 26.3696 33.2425 26.0141 33.8446 26.0524C34.4466 26.0907 34.7687 26.4401 34.7385 27.0547C34.7082 27.6693 34.3437 27.9667 33.7493 27.9575C33.6253 27.9559 33.503 27.9293 33.3893 27.8792C33.2756 27.8292 33.173 27.7566 33.0874 27.6658C33.0017 27.5751 32.9348 27.4679 32.8905 27.3506C32.8463 27.2333 32.8256 27.1082 32.8296 26.9827Z"
                        fill="#4687C7"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_519_1444">
                        <rect
                          width="35"
                          height="33"
                          fill="white"
                          transform="translate(21 22)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="lg:text-[20px] text-[16px] font-[500] text-green-600">
                    Firebase Services Integration
                  </span>
                  <p className="lg:text-[16px] text-[13px]   font-[400] text-gray-700">
                    Firebase provides a comprehensive suite of tools for
                    building and managing apps across various platforms,
                    including Android, iOS, and the web. The integration process
                    involves creating a Firebase project in the Firebase
                    Console, adding Firebase SDKs to your app, and configuring
                    the necessary services. For Android, you add dependencies in
                    the build.gradle file and include a google-services.json
                    file. For iOS, you use CocoaPods to install Firebase and add
                    the GoogleService-Info.plist to your Xcode project. For web
                    apps, you install Firebase via npm and initialize it using
                    your project configuration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="flex justify-center py-10 bg-slate-200 px-3 ">
        <div className="lg:w-[90%] flex gap-10  flex-col-reverse lg:flex-row justify-between">
          <img alt="" src={img1} className=" w-[700px] rounded-md " />
          <div className=" flex flex-col gap-5">
            <span className="lg:text-[24px] text-[18px] lg:text-start text-center font-[600]">
              Time savings vary based on the project's type, size, and
              complexity.
            </span>
            <p className="text-gray-900 lg:text-[18px] text-[14px] font-[500]">The development time for both iOS and Android is decreased.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reactnavtivesection;
