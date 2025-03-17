import React from "react";
import img from "../../CMS/Sitecore/Sitecoresectionimages/images.png";
const Sitecoresection = () => {
  return (
    <div>
      <div className="flex justify-center py-4 lg:py-8 px-5">
        <div className=" bg-gray-800 text-white lg:w-[90%] rounded-md py-5 px-3 lg:py-16 lg:px-5 items-center flex flex-col gap-5  justify-center ">
          <div className="flex flex-col items-center gap-5 lg:w-[800px] ">
            <span className=" lg:text-[28px] text-[18px] font-[600]  text-center">
              Maximize Your Business ROI with Magbyte's Expert Sitecore
              Development Services
            </span>
            <p className=" lg:text-[18px] text-[12px] text-center text-gray-100">
              Get started with Magbyte’s Sitecore CMS development without delay
              to streamline your content presentation, strategically design your
              marketing campaigns, and convert traffic into valuable leads.
            </p>
          </div>

          <button className="bg-yellow-600 text-black lg:text-[16px]  text-[14px] lg:px-5 lg:py-3 px-3 py-1 rounded-md hover:scale-105">
            Lets' Get Started
          </button>
        </div>
      </div>
      <div className=" flex justify-center py-4 px-4 lg:py-8">
        <div className="lg:w-[90%] flex gap-20 flex-col lg:flex-row">
          <div className=" flex flex-col gap-5 ">
            <div className="flex flex-col gap-3">
              <span className="lg:text-[24px] text-[18px] font-[600] ">
                Why Choose Sitecore?
              </span>
              <p className="lg:text-[16px] text-[12px]">
                Magbyte leverages the power of Sitecore to deliver exceptional,
                personalized digital experiences that drive business growth.
                Sitecore's advanced features, such as personalized content
                delivery, omnichannel integration, and robust analytics, enable
                Magbyte to craft seamless, engaging experiences for your
                customers. Whether you’re looking to optimize content
                management, improve customer interactions, or gain valuable
                insights from user behavior, Magbyte ensures that Sitecore is
                fully optimized to meet your business goals. With our expertise
                in Sitecore development, we help you scale effortlessly,
                integrate with existing systems, and deliver a secure, reliable
                platform that evolves with your business needs. Let Magbyte
                unlock the full potential of Sitecore for your business success.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="lg:text-[24px] text-[18px] font-[600] ">
                Headless Integration with Magbyte
              </span>
              <p className="lg:text-[16px] text-[12px]">
                Magbyte specializes in headless integration, providing you with
                a flexible and scalable digital experience. By decoupling the
                backend from the frontend, we enable seamless content delivery
                across various channels, including websites, mobile apps, and
                IoT devices. Our team integrates headless CMS platforms, such
                asx Umbraco and Sitecore, with your existing systems and
                technologies to ensure a unified, efficient, and responsive
                solution. This approach allows for greater flexibility, faster
                updates, and a more personalized user experience, helping your
                business stay ahead in the ever-evolving digital landscape. Let
                Magbyte empower your brand with a future-ready headless
                integration solution that adapts to your unique business needs.
              </p>
            </div>
          </div>
          <img src={img} alt="" className="" />
        </div>
      </div>

      <div className="py-10 px-5 flex justify-center items-center  ">
        <div className="flex flex-col lg:w-[90%]">
          <div className="flex flex-col items-center gap-3">
            <span className="lg:text-4xl text-[16px] text-blue-900 font-[600] text-center">
              Comprehensive Sitecore Development Solutions
            </span>
            <span className="lg:text-[18px] text-[14px] text-gray-700 font-[500] text-center">
              We offer a full range of Sitecore services to develop robust,
              scalable, and sophisticated applications customized to meet your
              business requirements. Our services include:
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
                  <span className="lg:text-[20px] text-[16px] font-[500] text-blue-900">
                    Sitecore Implementation
                  </span>
                  <p className="lg:text-[16px] text-[13px]  font-[400] text-gray-700">
                    We specialize in the seamless implementation of Sitecore to
                    create personalized, high-performing digital experiences.
                    Our team ensures a smooth setup and integration process,
                    from configuring the platform to aligning it with your
                    business goals. With our expertise, we help you harness
                    Sitecore’s full potential, ensuring efficient content
                    management, scalability, and a strong foundation for
                    delivering targeted customer experiences across multiple
                    channels.
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
                  <span className="lg:text-[20px] text-[16px] font-[500] text-blue-900">
                    Custom Development
                  </span>
                  <p className="lg:text-[16px] text-[13px]  font-[400] text-gray-700">
                    Our custom development services are designed to create
                    unique, tailored solutions that perfectly align with your
                    business objectives. We specialize in building scalable and
                    flexible applications, integrations, and features that meet
                    your specific needs. Whether you require custom
                    functionality for your website, platform, or CMS, we
                    leverage the latest technologies to deliver solutions that
                    are secure, high-performance, and built to evolve as your
                    business grows.
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
                  <span className="lg:text-[20px] text-[16px] font-[500] text-blue-900">
                    Sitecore Migration
                  </span>
                  <p className="lg:text-[16px] text-[13px]  font-[400] text-gray-700">
                    Our Sitecore migration services ensure a smooth and seamless
                    transition from your existing CMS to Sitecore, preserving
                    your content, SEO rankings, and data integrity throughout
                    the process. We handle every aspect of the migration, from
                    planning and strategy to implementation, ensuring minimal
                    downtime and disruption. With our expertise, we guarantee
                    that your new Sitecore environment is optimized for
                    performance, security, and scalability, allowing you to
                    fully leverage Sitecore’s advanced features and capabilities
                    for enhanced digital experiences.
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
                  <span className="lg:text-[20px] text-[16px] font-[500] text-blue-900">
                    Integration Services
                  </span>
                  <p className="lg:text-[16px] text-[13px]  font-[400] text-gray-700">
                    Our integration services enable seamless connections between
                    Sitecore and various third-party tools, platforms, and
                    systems, ensuring smooth data flow and enhanced
                    functionality across your digital ecosystem. Whether it's
                    CRM systems, ERP solutions, payment gateways, or marketing
                    tools, we provide custom integrations that streamline your
                    business processes and improve overall efficiency. With our
                    expertise, we ensure that all your systems work in harmony,
                    providing a unified experience for both your team and your
                    customers.
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
                  <span className="lg:text-[20px] text-[16px] font-[500] text-blue-900">
                    Personalization & Marketing Automation
                  </span>
                  <p className="lg:text-[16px] text-[13px]  font-[400] text-gray-700">
                    Our personalization and marketing automation services help
                    you deliver targeted, relevant content and experiences to
                    your audience at the right time. By leveraging Sitecore’s
                    advanced capabilities, we enable businesses to create highly
                    personalized customer journeys, optimize engagement, and
                    drive conversions. Our solutions automate marketing
                    campaigns, track user behavior, and tailor content
                    dynamically, ensuring that your marketing efforts are
                    efficient, data-driven, and impactful.
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
                  <span className="lg:text-[20px] text-[16px] font-[500] text-blue-900">
                    Content Strategy & Management
                  </span>
                  <p className="lg:text-[16px] text-[13px]   font-[400] text-gray-700">
                    Our content strategy and management services are designed to
                    help you create, organize, and deliver valuable content that
                    resonates with your target audience. We work with you to
                    develop a comprehensive content strategy that aligns with
                    your business goals, ensuring consistency and relevance
                    across all channels. From content creation and optimization
                    to governance and distribution, we leverage Sitecore’s
                    powerful tools to streamline your content management
                    process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex justify-center py-6">
        <div className="lg:w-[90%] flex flex-col gap-6 px-3  items-center">
          <div className="flex flex-col items-center gap-4">
            <span className="lg:text-[28px] font-[600]">
              Hire Sitecore Developers
            </span>
            <p className="flex text-center lg:text-[16px] text-[12px] ">
              Our certified Sitecore developers craft tailored solutions to meet
              your specific requirements, ensuring a robust end-to-end Sitecore
              implementation. With our flexible approach and ongoing support,
              you can be confident in a seamless, efficient, and successful
              Sitecore experience.
            </p>
          </div>

          <div className=" flex  gap-5 p-5 lg:flex-row flex-col  items-center">
            <span className=" shadow-xl px-6 rounded-md py-3 lg:text-[16px] text-[14px] border hover:scale-105 hover:text-blue-700 font-[500]">
              Certified Sitecore Developers
            </span>
            <span className=" shadow-xl px-6 rounded-md py-3 lg:text-[16px] text-[14px] border hover:scale-105 hover:text-blue-700 font-[500]">
              Quick And Cost Effective Hiring
            </span>
            <span className=" shadow-xl px-6 rounded-md py-3 lg:text-[16px] text-[14px] border hover:scale-105 hover:text-blue-700 font-[500]">
              Transparent Communication
            </span>
            <span className=" shadow-xl px-6 rounded-md py-3 lg:text-[16px] text-[14px] border hover:scale-105 hover:text-blue-700 font-[500]">
              On Time Project Delivery
            </span>
          </div>

          <button className="lg:py-4 lg:px-8 px-4 py-2 bg-yellow-500 rounded-lg text-white hover:scale-105">
            Hire Sitecore Devloper
          </button>
        </div>
      </div>

      <div className=" flex justify-center bg-gray-800 text-white py-10 px-2 ">
        <div className="lg:w-[90%] flex flex-col gap-5">
          <span className="lg:text-[28px] text-center text-[20px] font-[600]">
            Enterprise-level Sitecore website development, support, and
            optimization services.
          </span>
          <p className="text-center lg:text-[18px] text-[12px]">
            Seamless integration, future scalability, and enhanced customer
            engagement are just a few reasons why businesses choose Sitecore web
            design as their customer experience platform. With its award-winning
            .NET content management system, Sitecore has helped numerous
            renowned brands build customer loyalty, increase revenue, and push
            the boundaries of digital excellence.
          </p>
          <p className="text-center lg:text-[18px] text-[12px]">
            To fully unlock the potential of Sitecore, professional Sitecore
            website development is crucial. Let Magbyte be your trusted partner
            in Sitecore web design, assisting you in creating the ideal
            experience for your organization, employees, and customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sitecoresection;
