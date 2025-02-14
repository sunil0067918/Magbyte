import React, { useState } from "react";
import img1 from "../images/Groupimages3/image1.png";
import img2 from "../images/Groupimages3/image2.png";
import img3 from "../images/Groupimages3/image3.png";
import img4 from "../images/Groupimages3/image4.png";
import img5 from "../images/Groupimages3/image5.png";
import img6 from "../images/Groupimages3/image6.png";
import img7 from "../images/Groupimages3/image7.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Faq = () => {
  const [drop, setdrop] = useState(true);
  const [drop2 , setdrop2] =  useState(true)

  var settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" ">
      <div className=" flex justify-center my-12">
        <span className="text-[32px] font-[600]">
          Featured Technology Partners
        </span>
      </div>

      <Slider {...settings} className="w-full flex  ">
        <img
          src={img1}
          alt=""
          className="sm:h-[85px] sm:w-[117px] w-[152px]  h-[60px] object-contain border-[0.5px]  rounded-[10px] border-gray-400 px-[12px] py-[10px] "
        />

        <img
          src={img2}
          alt=""
          className="sm:h-[85px] sm:w-[217px] w-[152px]  h-[60px] object-contain  border-[0.5px]  rounded-[10px] border-gray-400 px-[12px] py-[10px]"
        />

        <img
          src={img3}
          alt=""
          className="sm:h-[85px] sm:w-[217px] w-[152px]  h-[60px] object-contain border-[0.5px]  rounded-[10px] border-gray-400 px-[12px] py-[10px]"
        />

        <img
          src={img4}
          alt=""
          className="sm:h-[85px] sm:w-[217px] w-[152px]  h-[60px] object-contain border-[0.5px]  rounded-[10px] border-gray-400 px-[12px] py-[10px]"
        />

        <img
          src={img5}
          alt=""
          className="sm:h-[85px] sm:w-[217px] w-[152px]  h-[60px] object-contain border-[0.5px]  rounded-[10px] border-gray-400 px-[12px] py-[10px]"
        />

        <img
          src={img6}
          alt=""
          className="sm:h-[85px] sm:w-[217px] w-[152px]  h-[60px] object-contain border-[0.5px]  rounded-[10px] border-gray-400 px-[12px] py-[10px]"
        />

        <img
          src={img7}
          alt=""
          className="sm:h-[85px] sm:w-[217px] w-[152px]  h-[60px] object-contain border-[0.5px]  rounded-[10px] border-gray-400 px-[12px] py-[10px]"
        />
      </Slider>

      <div className=" py-7 flex justify-center mt-20">
        <div className=" w-[80%]">
          <div className="space-y-6">
            <span className="text-[32px] font-[600]">FAQ</span>
            <p className="text-[20px]  font-[400]  ">
              Got some questions on your mind? Here are some frequently asked
              questions about our eCommerce Development Services that our
              experts have answered for you.
            </p>
          </div>
          <div className=" py-10 space-y-10 ">
            <div className="border-[1px] hover:border-[#4687C7] px-[20px] py-[15px] hover:text-[#4687C7] text-[#565656] border-[#C1BFBF] rounded-[17px]">
              <div className="   flex justify-between  ">
                <p className="text-[18px]  font-[500]">
                  What is the best eCommerce solution for small businesses?
                </p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => setdrop(!drop)}
                  // className="hover:text-[#4687C7]"
                >
                  <g clip-path="url(#clip0_498_318)">
                    <path
                      d="M24.0058 11.989C24.0079 13.5643 23.6997 15.1246 23.0988 16.5809C22.4978 18.0371 21.6159 19.3606 20.5034 20.476C19.3909 21.5914 18.0696 22.4766 16.6149 23.0813C15.1603 23.6859 13.6007 23.9981 12.0254 24C10.4461 24.0039 8.88152 23.6959 7.42152 23.0937C5.96151 22.4915 4.6348 21.6069 3.51752 20.4906C2.40023 19.3744 1.51435 18.0486 0.910726 16.5891C0.307103 15.1297 -0.00238677 13.5654 1.38593e-05 11.9861C0.00101958 10.4108 0.312339 8.85117 0.916192 7.39622C1.52004 5.94126 2.4046 4.61951 3.51935 3.50646C4.63409 2.39341 5.95717 1.51087 7.41304 0.90922C8.86891 0.307575 10.429 -0.0013794 12.0043 4.62949e-06C13.5797 -0.00125359 15.1399 0.3079 16.5957 0.909805C18.0515 1.51171 19.3745 2.39457 20.489 3.50794C21.6036 4.6213 22.4878 5.94336 23.0912 7.39857C23.6946 8.85379 24.0054 10.4136 24.0058 11.989ZM1.53814 11.9737C1.53335 13.3492 1.80013 14.7121 2.32318 15.9844C2.84623 17.2566 3.61526 18.413 4.58618 19.3874C5.55709 20.3618 6.7108 21.135 7.98114 21.6625C9.25148 22.1901 10.6135 22.4618 11.989 22.4619C14.7589 22.4693 17.4185 21.3767 19.3833 19.4243C21.3481 17.4718 22.4575 14.8192 22.4676 12.0493C22.4758 10.6738 22.2123 9.31014 21.6923 8.03666C21.1722 6.76319 20.4058 5.60492 19.4371 4.62834C18.4683 3.65175 17.3163 2.87605 16.047 2.34576C14.7778 1.81547 13.4163 1.54101 12.0407 1.53813C10.6652 1.5312 9.30185 1.7959 8.02886 2.31705C6.75587 2.8382 5.59829 3.60555 4.62253 4.57508C3.64677 5.54461 2.87203 6.69725 2.34274 7.96687C1.81344 9.2365 1.54002 10.5981 1.53814 11.9737Z"
                      fill="#565656"
                    />
                    <path
                      d="M12.7715 12.7675C12.7715 13.8546 12.7715 14.8746 12.7715 15.8926C12.7715 16.4864 12.4775 16.8504 12.0053 16.8561C11.5331 16.8619 11.2334 16.4922 11.2324 15.9051C11.2324 14.8841 11.2324 13.8641 11.2324 12.7675H9.75652C9.18188 12.7675 8.60724 12.7675 8.03259 12.7675C7.48955 12.7618 7.12849 12.4371 7.14094 11.9831C7.15339 11.5292 7.49817 11.239 8.02014 11.2361C9.07366 11.2294 10.1214 11.2361 11.2314 11.2361C11.2314 10.2353 11.2314 9.2689 11.2314 8.30158C11.2314 7.52773 11.4785 7.15229 11.9919 7.14655C12.5052 7.1408 12.7667 7.5239 12.7677 8.28817V11.2351H14.2416C14.8163 11.2351 15.3909 11.2304 15.9656 11.2351C16.5095 11.2409 16.8697 11.5636 16.8582 12.0186C16.8467 12.4572 16.499 12.7637 15.979 12.7675C14.9322 12.7723 13.8815 12.7675 12.7715 12.7675Z"
                      fill="#565656"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_498_318">
                      <rect width="24.0048" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              {!drop ? (
                <p className="text-[15px] font-[300] pt-5">
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem IpsumLorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              ) : (
                ""
              )}
            </div>

            <div className="border-[1px] hover:border-[#4687C7] hover:text-[#4687C7] px-[20px] py-[15px] text-[#565656] border-[#C1BFBF] rounded-[17px]">
            <div className="  flex justify-between  ">
              <p className="text-[18px]  font-[500]">
                What is the average eCommerce website design and development
                price?
              </p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setdrop2(!drop2)}
                // className="hover:text-[#4687C7]"
              >
                <g clip-path="url(#clip0_498_318)">
                  <path
                    d="M24.0058 11.989C24.0079 13.5643 23.6997 15.1246 23.0988 16.5809C22.4978 18.0371 21.6159 19.3606 20.5034 20.476C19.3909 21.5914 18.0696 22.4766 16.6149 23.0813C15.1603 23.6859 13.6007 23.9981 12.0254 24C10.4461 24.0039 8.88152 23.6959 7.42152 23.0937C5.96151 22.4915 4.6348 21.6069 3.51752 20.4906C2.40023 19.3744 1.51435 18.0486 0.910726 16.5891C0.307103 15.1297 -0.00238677 13.5654 1.38593e-05 11.9861C0.00101958 10.4108 0.312339 8.85117 0.916192 7.39622C1.52004 5.94126 2.4046 4.61951 3.51935 3.50646C4.63409 2.39341 5.95717 1.51087 7.41304 0.90922C8.86891 0.307575 10.429 -0.0013794 12.0043 4.62949e-06C13.5797 -0.00125359 15.1399 0.3079 16.5957 0.909805C18.0515 1.51171 19.3745 2.39457 20.489 3.50794C21.6036 4.6213 22.4878 5.94336 23.0912 7.39857C23.6946 8.85379 24.0054 10.4136 24.0058 11.989ZM1.53814 11.9737C1.53335 13.3492 1.80013 14.7121 2.32318 15.9844C2.84623 17.2566 3.61526 18.413 4.58618 19.3874C5.55709 20.3618 6.7108 21.135 7.98114 21.6625C9.25148 22.1901 10.6135 22.4618 11.989 22.4619C14.7589 22.4693 17.4185 21.3767 19.3833 19.4243C21.3481 17.4718 22.4575 14.8192 22.4676 12.0493C22.4758 10.6738 22.2123 9.31014 21.6923 8.03666C21.1722 6.76319 20.4058 5.60492 19.4371 4.62834C18.4683 3.65175 17.3163 2.87605 16.047 2.34576C14.7778 1.81547 13.4163 1.54101 12.0407 1.53813C10.6652 1.5312 9.30185 1.7959 8.02886 2.31705C6.75587 2.8382 5.59829 3.60555 4.62253 4.57508C3.64677 5.54461 2.87203 6.69725 2.34274 7.96687C1.81344 9.2365 1.54002 10.5981 1.53814 11.9737Z"
                    fill="#565656"
                  />
                  <path
                    d="M12.7715 12.7675C12.7715 13.8546 12.7715 14.8746 12.7715 15.8926C12.7715 16.4864 12.4775 16.8504 12.0053 16.8561C11.5331 16.8619 11.2334 16.4922 11.2324 15.9051C11.2324 14.8841 11.2324 13.8641 11.2324 12.7675H9.75652C9.18188 12.7675 8.60724 12.7675 8.03259 12.7675C7.48955 12.7618 7.12849 12.4371 7.14094 11.9831C7.15339 11.5292 7.49817 11.239 8.02014 11.2361C9.07366 11.2294 10.1214 11.2361 11.2314 11.2361C11.2314 10.2353 11.2314 9.2689 11.2314 8.30158C11.2314 7.52773 11.4785 7.15229 11.9919 7.14655C12.5052 7.1408 12.7667 7.5239 12.7677 8.28817V11.2351H14.2416C14.8163 11.2351 15.3909 11.2304 15.9656 11.2351C16.5095 11.2409 16.8697 11.5636 16.8582 12.0186C16.8467 12.4572 16.499 12.7637 15.979 12.7675C14.9322 12.7723 13.8815 12.7675 12.7715 12.7675Z"
                    fill="#565656"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_498_318">
                    <rect width="24.0048" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>


            {!drop2 ? (
                <p className="text-[15px] font-[300] pt-5">
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem IpsumLorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              ) : (
                ""
              )}

            </div>

            <div className=" border-[1px] hover:border-[#4687C7] hover:text-[#4687C7] text-[#565656] border-[#C1BFBF] rounded-[17px] flex justify-between px-[20px] py-[15px] ">
              <p className="text-[18px]  font-[500]">
                What eCommerce website solutions would be the best choice for
                large organizations?
              </p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                // className="hover:text-[#4687C7]"
              >
                <g clip-path="url(#clip0_498_318)">
                  <path
                    d="M24.0058 11.989C24.0079 13.5643 23.6997 15.1246 23.0988 16.5809C22.4978 18.0371 21.6159 19.3606 20.5034 20.476C19.3909 21.5914 18.0696 22.4766 16.6149 23.0813C15.1603 23.6859 13.6007 23.9981 12.0254 24C10.4461 24.0039 8.88152 23.6959 7.42152 23.0937C5.96151 22.4915 4.6348 21.6069 3.51752 20.4906C2.40023 19.3744 1.51435 18.0486 0.910726 16.5891C0.307103 15.1297 -0.00238677 13.5654 1.38593e-05 11.9861C0.00101958 10.4108 0.312339 8.85117 0.916192 7.39622C1.52004 5.94126 2.4046 4.61951 3.51935 3.50646C4.63409 2.39341 5.95717 1.51087 7.41304 0.90922C8.86891 0.307575 10.429 -0.0013794 12.0043 4.62949e-06C13.5797 -0.00125359 15.1399 0.3079 16.5957 0.909805C18.0515 1.51171 19.3745 2.39457 20.489 3.50794C21.6036 4.6213 22.4878 5.94336 23.0912 7.39857C23.6946 8.85379 24.0054 10.4136 24.0058 11.989ZM1.53814 11.9737C1.53335 13.3492 1.80013 14.7121 2.32318 15.9844C2.84623 17.2566 3.61526 18.413 4.58618 19.3874C5.55709 20.3618 6.7108 21.135 7.98114 21.6625C9.25148 22.1901 10.6135 22.4618 11.989 22.4619C14.7589 22.4693 17.4185 21.3767 19.3833 19.4243C21.3481 17.4718 22.4575 14.8192 22.4676 12.0493C22.4758 10.6738 22.2123 9.31014 21.6923 8.03666C21.1722 6.76319 20.4058 5.60492 19.4371 4.62834C18.4683 3.65175 17.3163 2.87605 16.047 2.34576C14.7778 1.81547 13.4163 1.54101 12.0407 1.53813C10.6652 1.5312 9.30185 1.7959 8.02886 2.31705C6.75587 2.8382 5.59829 3.60555 4.62253 4.57508C3.64677 5.54461 2.87203 6.69725 2.34274 7.96687C1.81344 9.2365 1.54002 10.5981 1.53814 11.9737Z"
                    fill="#565656"
                  />
                  <path
                    d="M12.7715 12.7675C12.7715 13.8546 12.7715 14.8746 12.7715 15.8926C12.7715 16.4864 12.4775 16.8504 12.0053 16.8561C11.5331 16.8619 11.2334 16.4922 11.2324 15.9051C11.2324 14.8841 11.2324 13.8641 11.2324 12.7675H9.75652C9.18188 12.7675 8.60724 12.7675 8.03259 12.7675C7.48955 12.7618 7.12849 12.4371 7.14094 11.9831C7.15339 11.5292 7.49817 11.239 8.02014 11.2361C9.07366 11.2294 10.1214 11.2361 11.2314 11.2361C11.2314 10.2353 11.2314 9.2689 11.2314 8.30158C11.2314 7.52773 11.4785 7.15229 11.9919 7.14655C12.5052 7.1408 12.7667 7.5239 12.7677 8.28817V11.2351H14.2416C14.8163 11.2351 15.3909 11.2304 15.9656 11.2351C16.5095 11.2409 16.8697 11.5636 16.8582 12.0186C16.8467 12.4572 16.499 12.7637 15.979 12.7675C14.9322 12.7723 13.8815 12.7675 12.7715 12.7675Z"
                    fill="#565656"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_498_318">
                    <rect width="24.0048" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className=" border-[1px] hover:border-[#4687C7] hover:text-[#4687C7] text-[#565656] border-[#C1BFBF] rounded-[17px] flex justify-between px-[20px] py-[15px] ">
              <p className="text-[18px]  font-[500]">
                What is an eCommerce website agency?
              </p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                // className="hover:text-[#4687C7]"
              >
                <g clip-path="url(#clip0_498_318)">
                  <path
                    d="M24.0058 11.989C24.0079 13.5643 23.6997 15.1246 23.0988 16.5809C22.4978 18.0371 21.6159 19.3606 20.5034 20.476C19.3909 21.5914 18.0696 22.4766 16.6149 23.0813C15.1603 23.6859 13.6007 23.9981 12.0254 24C10.4461 24.0039 8.88152 23.6959 7.42152 23.0937C5.96151 22.4915 4.6348 21.6069 3.51752 20.4906C2.40023 19.3744 1.51435 18.0486 0.910726 16.5891C0.307103 15.1297 -0.00238677 13.5654 1.38593e-05 11.9861C0.00101958 10.4108 0.312339 8.85117 0.916192 7.39622C1.52004 5.94126 2.4046 4.61951 3.51935 3.50646C4.63409 2.39341 5.95717 1.51087 7.41304 0.90922C8.86891 0.307575 10.429 -0.0013794 12.0043 4.62949e-06C13.5797 -0.00125359 15.1399 0.3079 16.5957 0.909805C18.0515 1.51171 19.3745 2.39457 20.489 3.50794C21.6036 4.6213 22.4878 5.94336 23.0912 7.39857C23.6946 8.85379 24.0054 10.4136 24.0058 11.989ZM1.53814 11.9737C1.53335 13.3492 1.80013 14.7121 2.32318 15.9844C2.84623 17.2566 3.61526 18.413 4.58618 19.3874C5.55709 20.3618 6.7108 21.135 7.98114 21.6625C9.25148 22.1901 10.6135 22.4618 11.989 22.4619C14.7589 22.4693 17.4185 21.3767 19.3833 19.4243C21.3481 17.4718 22.4575 14.8192 22.4676 12.0493C22.4758 10.6738 22.2123 9.31014 21.6923 8.03666C21.1722 6.76319 20.4058 5.60492 19.4371 4.62834C18.4683 3.65175 17.3163 2.87605 16.047 2.34576C14.7778 1.81547 13.4163 1.54101 12.0407 1.53813C10.6652 1.5312 9.30185 1.7959 8.02886 2.31705C6.75587 2.8382 5.59829 3.60555 4.62253 4.57508C3.64677 5.54461 2.87203 6.69725 2.34274 7.96687C1.81344 9.2365 1.54002 10.5981 1.53814 11.9737Z"
                    fill="#565656"
                  />
                  <path
                    d="M12.7715 12.7675C12.7715 13.8546 12.7715 14.8746 12.7715 15.8926C12.7715 16.4864 12.4775 16.8504 12.0053 16.8561C11.5331 16.8619 11.2334 16.4922 11.2324 15.9051C11.2324 14.8841 11.2324 13.8641 11.2324 12.7675H9.75652C9.18188 12.7675 8.60724 12.7675 8.03259 12.7675C7.48955 12.7618 7.12849 12.4371 7.14094 11.9831C7.15339 11.5292 7.49817 11.239 8.02014 11.2361C9.07366 11.2294 10.1214 11.2361 11.2314 11.2361C11.2314 10.2353 11.2314 9.2689 11.2314 8.30158C11.2314 7.52773 11.4785 7.15229 11.9919 7.14655C12.5052 7.1408 12.7667 7.5239 12.7677 8.28817V11.2351H14.2416C14.8163 11.2351 15.3909 11.2304 15.9656 11.2351C16.5095 11.2409 16.8697 11.5636 16.8582 12.0186C16.8467 12.4572 16.499 12.7637 15.979 12.7675C14.9322 12.7723 13.8815 12.7675 12.7715 12.7675Z"
                    fill="#565656"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_498_318">
                    <rect width="24.0048" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className=" border-[1px] hover:border-[#4687C7] hover:text-[#4687C7] text-[#565656] border-[#C1BFBF] rounded-[17px] flex justify-between px-[20px] py-[15px] ">
              <p className="text-[18px]  font-[500]">
                What is the best eCommerce solution for small businesses?
              </p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                // className="hover:text-[#4687C7]"
              >
                <g clip-path="url(#clip0_498_318)">
                  <path
                    d="M24.0058 11.989C24.0079 13.5643 23.6997 15.1246 23.0988 16.5809C22.4978 18.0371 21.6159 19.3606 20.5034 20.476C19.3909 21.5914 18.0696 22.4766 16.6149 23.0813C15.1603 23.6859 13.6007 23.9981 12.0254 24C10.4461 24.0039 8.88152 23.6959 7.42152 23.0937C5.96151 22.4915 4.6348 21.6069 3.51752 20.4906C2.40023 19.3744 1.51435 18.0486 0.910726 16.5891C0.307103 15.1297 -0.00238677 13.5654 1.38593e-05 11.9861C0.00101958 10.4108 0.312339 8.85117 0.916192 7.39622C1.52004 5.94126 2.4046 4.61951 3.51935 3.50646C4.63409 2.39341 5.95717 1.51087 7.41304 0.90922C8.86891 0.307575 10.429 -0.0013794 12.0043 4.62949e-06C13.5797 -0.00125359 15.1399 0.3079 16.5957 0.909805C18.0515 1.51171 19.3745 2.39457 20.489 3.50794C21.6036 4.6213 22.4878 5.94336 23.0912 7.39857C23.6946 8.85379 24.0054 10.4136 24.0058 11.989ZM1.53814 11.9737C1.53335 13.3492 1.80013 14.7121 2.32318 15.9844C2.84623 17.2566 3.61526 18.413 4.58618 19.3874C5.55709 20.3618 6.7108 21.135 7.98114 21.6625C9.25148 22.1901 10.6135 22.4618 11.989 22.4619C14.7589 22.4693 17.4185 21.3767 19.3833 19.4243C21.3481 17.4718 22.4575 14.8192 22.4676 12.0493C22.4758 10.6738 22.2123 9.31014 21.6923 8.03666C21.1722 6.76319 20.4058 5.60492 19.4371 4.62834C18.4683 3.65175 17.3163 2.87605 16.047 2.34576C14.7778 1.81547 13.4163 1.54101 12.0407 1.53813C10.6652 1.5312 9.30185 1.7959 8.02886 2.31705C6.75587 2.8382 5.59829 3.60555 4.62253 4.57508C3.64677 5.54461 2.87203 6.69725 2.34274 7.96687C1.81344 9.2365 1.54002 10.5981 1.53814 11.9737Z"
                    fill="#565656"
                  />
                  <path
                    d="M12.7715 12.7675C12.7715 13.8546 12.7715 14.8746 12.7715 15.8926C12.7715 16.4864 12.4775 16.8504 12.0053 16.8561C11.5331 16.8619 11.2334 16.4922 11.2324 15.9051C11.2324 14.8841 11.2324 13.8641 11.2324 12.7675H9.75652C9.18188 12.7675 8.60724 12.7675 8.03259 12.7675C7.48955 12.7618 7.12849 12.4371 7.14094 11.9831C7.15339 11.5292 7.49817 11.239 8.02014 11.2361C9.07366 11.2294 10.1214 11.2361 11.2314 11.2361C11.2314 10.2353 11.2314 9.2689 11.2314 8.30158C11.2314 7.52773 11.4785 7.15229 11.9919 7.14655C12.5052 7.1408 12.7667 7.5239 12.7677 8.28817V11.2351H14.2416C14.8163 11.2351 15.3909 11.2304 15.9656 11.2351C16.5095 11.2409 16.8697 11.5636 16.8582 12.0186C16.8467 12.4572 16.499 12.7637 15.979 12.7675C14.9322 12.7723 13.8815 12.7675 12.7715 12.7675Z"
                    fill="#565656"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_498_318">
                    <rect width="24.0048" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="  bg-[#282626] flex justify-center items-center text-center flex-col space-y-6 py-20">
        <div className="flex flex-col items-center text-center space-y-6">
          <span className="text-[32px]  font-[700] text-[#FFFFFF]">
            Start Your Project. It’s Risk-Free.
          </span>
          <p className="text-[16px] font-[400] text-[#FFFFFF]">
            Let's make it happen! With our risk-free approach, you can rest
            assured that your project is in good hands. Submit your inquiry
            today and receive a prompt response from our team.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-6 ">
          <button className="text-[#FFFFFF] border-[0.75px]  border-[#FFFFFF] px-[15px] py-[7px] rounded-[24px]">
            Get A Quote For Your Project
          </button>
          <u className="text-[#FFFFFF]">Or Start a conversation</u>
        </div>
      </div>
    </div>
  );
};

export default Faq;
