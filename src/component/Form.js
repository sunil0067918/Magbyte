// import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Form = () => {
  let location = useLocation();
  console.log(location);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  console.log(errors);

  const onSubmit = async (data) => {
    const payload = {
      firstName: data.firstName,
      Email: data.Email,
      number: data.number,
      company: data.company,
      requriement: data.requriement,
    };

    try {
      const result = await axios.post(
        "http://localhost:3000/register",
        payload
      );

      console.log(result);
      toast.success(" Your consultation has been scheduled!");

      reset();
    } catch (err) {
      console.error(err);
      toast.error(" please the all the field");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action="submit"
        className={`${
          [
            "/angular",
            "/Reactt",
            "/azure",
            "/zoho",
            "/servicenow",
            "/flutter",
            "/ios",
            "/adobe",
            "/android",
            "/drupal",
            "/joomla",
            "/Node",
            "/php",
            "/googl",
            "/dev",
            "/mean",
            "/javaa",
            "/portt"
          ].includes(location.pathname)
            ? "animate-slideInFromRight"
            : "animate-slideInFromBottom "
        } bg-gradient-to-r from-[#333333] to-[#000000] rounded-[5px] lg:px-[14px] py-[20px] px-[10px] lg:py-[40px] opacity-0 border-2 border-[#333333]`}
      >
        <div className="flex flex-col text-center opacity-0 animate-fadeIn">
          <span
            className={`${
              location.pathname === "/Ecommarce"
                ? "bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent"
                : location.pathname === "/web"
                ? "bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent"
                : location.pathname === "/webdesign"
                ? "bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent"
                : location.pathname === "/digital"
                ? "bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent"
                : location.pathname === "/Laravel"
                ? "bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent"
                : location.pathname === "/code"
                ? "bg-gradient-to-r from-orange-500 to-white bg-clip-text text-transparent"
                : location.pathname === "/python"
                ? "bg-gradient-to-r from-yellow-500 to-white bg-clip-text text-transparent"
                : location.pathname === "/Node"
                ? "bg-gradient-to-r from-green-500 to-white bg-clip-text text-transparent"
                : location.pathname === "/Reactt"
                ? "bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent"
                : location.pathname === "/angular"
                ? "bg-gradient-to-r from-red-800 to-white bg-clip-text text-transparent"
                : location.pathname === "/php"
                ? "bg-gradient-to-r from-[rgb(222,32,212)] to-[#f0ebee] bg-clip-text text-transparent"
                : location.pathname === "/dot"
                ? "bg-gradient-to-r from-sky-500 to-white bg-clip-text text-transparent"
                : location.pathname === "/tecno"
                ? "bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent "
                : location.pathname === "/Wordpress"
                ? "bg-gradient-to-r from-sky-300 to-white bg-clip-text text-transparent "
                : location.pathname === "/drupal"
                ? "bg-gradient-to-r from-blue-800 to-white bg-clip-text text-transparent "
                : location.pathname === "/craftt"
                ? "bg-gradient-to-r from-orange-700 to-orange-500 bg-clip-text text-transparent "
                : location.pathname === "/joomla"
                ? "bg-gradient-to-r from-blue-800 to-white bg-clip-text text-transparent "
                : location.pathname === "/share"
                ? "bg-gradient-to-r from-sky-300 to-white bg-clip-text text-transparent "
                : location.pathname === "/um"
                ? "bg-gradient-to-r from-blue-900 to-white bg-clip-text text-transparent "
                : location.pathname === "/site"
                ? "bg-gradient-to-r from-red-800 to-white bg-clip-text text-transparent "
                : location.pathname === "/woo"
                ? "bg-gradient-to-r from-pink-800 to-white bg-clip-text text-transparent "
                : location.pathname === "/spotify"
                ? "bg-gradient-to-r from-green-800 to-white bg-clip-text text-transparent "
                : location.pathname === "/bigco"
                ? "bg-gradient-to-r from-purple-800 to-white bg-clip-text text-transparent "
                : location.pathname === "/adobe"
                ? "bg-gradient-to-r from-red-800 to-white bg-clip-text text-transparent "
                : location.pathname === "/android"
                ? "bg-gradient-to-r from-green-800 to-white bg-clip-text text-transparent "
                : location.pathname === "/Reactnative"
                ? "bg-gradient-to-r from-blue-800 to-white bg-clip-text text-transparent "
                : location.pathname === "/flutter"
                ? "bg-gradient-to-r from-sky-800 to-white bg-clip-text text-transparent "
                : location.pathname === "/ios"
                ? "bg-gradient-to-r from-gray-800 to-white bg-clip-text text-transparent "
                : location.pathname === "/servicenow"
                ? "bg-gradient-to-r from-green-900 to-white bg-clip-text text-transparent "
                : location.pathname === "/sales"
                ? "bg-gradient-to-r from-blue-900 to-white bg-clip-text text-transparent "
                : location.pathname === "/hub"
                ? "bg-gradient-to-r from-orange-600 to-white bg-clip-text text-transparent "
                : location.pathname === "/zoho"
                ? "bg-gradient-to-r from-red-600 to-white bg-clip-text text-transparent "
                : location.pathname === "/awsa"
                ? "bg-gradient-to-r from-yellow-600 to-white bg-clip-text text-transparent "
                : location.pathname === "/hire"
                ? "bg-gradient-to-r from-blue-900 to-white bg-clip-text text-transparent "
                : location.pathname === "/azure"
                ? "bg-gradient-to-r from-sky-900 to-white bg-clip-text text-transparent "
                : location.pathname === "/googl"
                ? "bg-gradient-to-r from-yellow-600 to-white bg-clip-text text-transparent "
                : location.pathname === "/dev"
                ? "bg-gradient-to-r from-sky-900 to-white bg-clip-text text-transparent "
                : location.pathname === "/mern"
                ? "bg-gradient-to-r from-green-900 to-white bg-clip-text text-transparent "
                : location.pathname === "/mean"
                ? "bg-gradient-to-r from-blue-900 to-white bg-clip-text text-transparent "
                : location.pathname === "/javaa"
                ? "bg-gradient-to-r from-blue-900 to-white bg-clip-text text-transparent "
                : location.pathname === "/portt"
                ? "bg-gradient-to-r from-blue-900 to-white bg-clip-text text-transparent "
                : ""
            } text-[16px] sm:text-[20px] font-[800] `}
          >
            Book Free Consultation
          </span>

          <p className="text-[12px] sm:text-[14px] font-[500] text-[#FFFFFF] text-center">
            Fill Out the Form and Our Expert Will Contact You Within 24hrs
          </p>
        </div>

        <div className="flex flex-col lg:space-y-5 pt-2 capitalize lg:pt-10">
          <div className="flex justify-between sm:flex-row flex-col gap-1 sm:gap-8">
            <div className="relative">
              <input
                id="name"
                className="text-[11px] sm:text-[14px] px-[6px] py-[6px] sm:px-[10px] sm:py-[10px] rounded-[6px] border-2 border-[#333333] focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-[#333333] transition-all duration-300 w-full mt-1"
                type="text"
                placeholder="First Name"
                {...register("firstName", {
                  required: "First name is required",
                })}
                name="firstName"
              />

              {errors.firstName && (
                <p className="text-white lg:text-[14px] text-[12px] ">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div className=" relative pt-1 lg:pt-0 ">
              <input
                id="email"
                className="text-[11px] sm:text-[14px] px-[6px] py-[6px] sm:px-[10px] sm:py-[10px] rounded-[6px] border-2 border-[#333333] focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-[#333333] transition-all duration-300 w-full mt-1"
                type="email"
                name="Email"
                placeholder="Enter your email"
                {...register("Email", {
                  required: "enter your email",
                })}
              />
              {errors.Email && (
                <p className="text-white lg:text-[14px] text-[12px] absolute ">
                  {errors.Email.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-between sm:flex-row flex-col lg:pt-2 pt-5 gap-1 sm:gap-8">
            <div className=" relative">
              <input
                id="name"
                className="text-[11px] sm:text-[14px] px-[6px] py-[6px] sm:px-[10px] sm:py-[10px] rounded-[6px] border-2 border-[#333333] focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-[#333333] transition-all duration-300 w-full mt-1"
                type="text"
                placeholder=" phone number"
                name="number"
                {...register("number", {
                  required: "enter your number",
                })}
              />

              {errors.number && (
                <p className="text-white lg:text-[14px] text-[12px] absolute ">
                  {errors.number.message}
                </p>
              )}
            </div>

            <div className=" relative pt-3 lg:pt-0">
              <input
                id="email"
                className="text-[11px] sm:text-[14px] px-[6px] py-[6px] sm:px-[10px] sm:py-[10px] rounded-[6px] border-2 border-[#333333] focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-[#333333] transition-all duration-300 w-full mt-1"
                type="text"
                placeholder="company"
                name="company"
                {...register("company", {
                  required: "enter your company name",
                })}
              />
              {errors.company && (
                <p className="text-white lg:text-[14px] text-[12px] absolute ">
                  {errors.company.message}
                </p>
              )}
            </div>
          </div>

          <div className="w-full lg:pt-5 pt-6">
            <input
              type="text"
              placeholder="Your Requirement*"
              className="text-[11px] sm:text-[14px] relative px-[6px] py-[6px] sm:px-[10px] sm:py-[10px] rounded-[6px] border-2 w-full border-[#333333] focus:outline-none focus:ring-2 focus:ring-[#007BFF]  focus:border-[#333333] lighting-border transition-all duration-300"
              name="requriement"
              {...register("requriement", {
                required: "enter your Requirment",
              })}
            />

            {errors.requriement && (
              <p className="text-white lg:text-[14px] text-[12px] absolute ">
                {errors.requriement.message}
              </p>
            )}
          </div>

          <button
            className={`${
              location.pathname === "/Ecommarce"
                ? " bg-gradient-to-r from-[#4687C7] to-[#1E3A8A]   focus:ring-[#4687C7] focus:ring-opacity-60 focus:border-[#4687C7]   border-2 border-[#4687C7] "
                : location.pathname === "/web"
                ? " bg-gradient-to-r from-[#4687C7] to-[#1E3A8A]    focus:ring-[#4687C7] focus:ring-opacity-60 focus:border-[#4687C7]  border-2 border-[#4687C7]"
                : location.pathname === "/webdesign"
                ? "bg-gradient-to-r from-[#4687C7] to-[#1E3A8A]   focus:ring-[#4687C7] focus:ring-opacity-60 focus:border-[#4687C7] border-2 border-[#4687C7]"
                : location.pathname === "/digital"
                ? "bg-gradient-to-r from-[#4687C7] to-[#1E3A8A]   focus:ring-[#4687C7] focus:ring-opacity-60 focus:border-[#4687C7]   border-2 border-[#4687C7]"
                : location.pathname === "/Laravel"
                ? "bg-gradient-to-r from-red-600 to-[#e66161] border-2 border-red-500 focus:ring-4 focus:ring-red-500 focus:ring-opacity-60 focus:border-red-500"
                : location.pathname === "/code"
                ? "bg-gradient-to-r from-[#c76846] to-[#d77c13] border-2 border-[#c78446] focus:ring-[#4687C7] focus:ring-opacity-60 focus:border-[#4687C7] "
                : location.pathname === "/python"
                ? "bg-gradient-to-r from-yellow-400 to-yellow-300 border-2 border-yellow-500"
                : location.pathname === "/Node"
                ? "bg-gradient-to-r from-[#4ac746] to-[#308a1e] border-2 border-[#5bc746]"
                : location.pathname === "/Reactt"
                ? "bg-gradient-to-r from-[#4687C7] to-[#9ab2f3] border-2 border-[#4687C7] "
                : location.pathname === "/angular"
                ? "bg-gradient-to-r from-[rgb(235,97,66)] to-[#a72306] border-2 border-[#9a2e26]"
                : location.pathname === "/php"
                ? "bg-gradient-to-r from-[rgb(222,32,212)] to-[#e889c2] border-2 border-[#e33db7]"
                : location.pathname === "/dot"
                ? "bg-gradient-to-r from-[rgb(127,234,240)] to-[#48e2e4] border-2 border-[#6ee3e9]"
                : location.pathname === "/tecno"
                ? "bg-gradient-to-r from-orange-500 to-yellow-500 border-2 border-orange-500 "
                : location.pathname === "/Wordpress"
                ? "bg-gradient-to-r from-[rgb(78,226,234)] to-[#86dddf] border-2 border-[#6ee3e9]"
                : location.pathname === "/drupal"
                ? "bg-gradient-to-r from-[rgb(48,23,192)] to-[#4507d7] border-2 border-[#492aa5]"
                : location.pathname === "/craftt"
                ? "bg-gradient-to-r from-orange-700 to-orange-500 "
                : location.pathname === "/joomla"
                ? "bg-gradient-to-r from-[rgb(48,23,192)] to-[#4507d7] border-2 border-[#492aa5] "
                : location.pathname === "/share"
                ? "bg-gradient-to-r from-[rgb(78,226,234)] to-[#86dddf] border-2 border-[#6ee3e9] "
                : location.pathname === "/um"
                ? "bg-gradient-to-r from-[rgb(42,18,152)] to-[#0404a3] border-2 border-[#4333d3] "
                : location.pathname === "/site"
                ? "bg-gradient-to-r from-red-600 to-[#e66161] border-2 border-red-500 focus:ring-4 focus:ring-red-500 focus:ring-opacity-60 focus:border-red-500 "
                : location.pathname === "/woo"
                ? "bg-gradient-to-r from-pink-600 to-[#ab087a] border-2 border-pink-500 focus:ring-4 focus:ring-pink-500 focus:ring-opacity-60 focus:border-pink-500 "
                : location.pathname === "/spotify"
                ? "bg-gradient-to-r from-green-600 to-[#17de63] border-2 border-green-500 focus:ring-4 focus:ring-green-500 focus:ring-opacity-60 focus:border-green-500 "
                : location.pathname === "/bigco"
                ? "bg-gradient-to-r from-purple-600 to-[#c514b9] border-2 border-purple-500 focus:ring-4 focus:ring-purple-500 focus:ring-opacity-60 focus:border-purple-500 "
                : location.pathname === "/adobe"
                ? "bg-gradient-to-r from-red-600 to-[#9d0505] border-2 border-red-500 focus:ring-4 focus:ring-red-500 focus:ring-opacity-60 focus:border-red-500 "
                : location.pathname === "/android"
                ? "bg-gradient-to-r from-green-600 to-[#17b93a] border-2 border-green-500 focus:ring-4 focus:ring-green-500 focus:ring-opacity-60 focus:border-green-500 "
                : location.pathname === "/Reactnative"
                ? "bg-gradient-to-r from-blue-600 to-[#2c0dba] border-2 border-blue-500 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-60 focus:border-blue-500 "
                : location.pathname === "/flutter"
                ? "bg-gradient-to-r from-blue-600 to-[#32aee3] border-2 border-blue-500 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-60 focus:border-blue-500 "
                : location.pathname === "/ios"
                ? "bg-gradient-to-r from-gray-500 to-[#a3a3b9] border-2 border-black-500 focus:ring-4 focus:ring-gray-500 focus:ring-opacity-60 focus:border-gray-500 "
                : location.pathname === "/servicenow"
                ? "bg-gradient-to-r from-green-900 to-[#096d10] border-2 border-black-500 focus:ring-4 focus:ring-green-500 focus:ring-opacity-60 focus:border-green-500 "
                : location.pathname === "/sales"
                ? "bg-gradient-to-r from-blue-900 to-[#0f0a98] border-2 border-black-500 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-60 focus:border-blue-500 "
                : location.pathname === "/hub"
                ? "bg-gradient-to-r from-orange-600 to-[#98870a] border-2 border-black-500 focus:ring-4 focus:ring-orange-600 focus:ring-opacity-60 focus:border-orange-500 "
                : location.pathname === "/zoho"
                ? "bg-gradient-to-r from-red-600 to-[#9d0505] border-2 border-red-500 focus:ring-4 focus:ring-red-500 focus:ring-opacity-60 focus:border-red-500  "
                : location.pathname === "/awsa"
                ? "bg-gradient-to-r from-yellow-600 to-[#dff141] border-2 border-yellow-500 focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-60 focus:border-yellow-500  "
                : location.pathname === "/hire"
                ? "bg-gradient-to-r from-blue-900 to-[#0f0a98] border-2 border-black-500 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-60 focus:border-blue-500  "
                : location.pathname === "/azure"
                ? "bg-gradient-to-r from-blue-900 to-[#0f0a98] border-2 border-black-500 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-60 focus:border-blue-500  "
                : location.pathname === "/googl"
                ? "bg-gradient-to-r from-yellow-500 to-[#e0ef10] border-2 border-black-500 focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-60 focus:border-yellow-500  "
                : location.pathname === "/dev"
                ? "bg-gradient-to-r from-blue-900 to-[#0f0a98] border-2 border-black-500 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-60 focus:border-blue-500 "
                : location.pathname === "/mean"
                ? "bg-gradient-to-r from-blue-900 to-[#4016d6] border-2 border-black-500 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-60 focus:border-blue-500 "
                : location.pathname === "/javaa"
                ? "bg-gradient-to-r from-blue-900 to-[#4016d6] border-2 border-black-500 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-60 focus:border-blue-500 "
                :  location.pathname === "/portt"
                ? "bg-gradient-to-r from-blue-900 to-[#4016d6] border-2 border-black-500 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-60 focus:border-blue-500 "
                : ""
            } px-[4px] py-[4px] mt-[20px] lg:mt-0 sm:px-[10px] sm:py-[10px] font-[700]  text-white
              shadow-[0_0_10px_2px rgba(70,135,199,0.7)] hover:scale-105
               hover:shadow-[0_0_20px_4px rgba(70,135,199,1)] focus:ring-4 focus:shadow-[0_0_20px_4px rgba(70,135,199,1)] rounded-[6px] transition-all
                  duration-300 ease-in-out `}
          >
            <span
              className="
                flowing-textt text-[12px] lg:text-[18px]  whitespace-nowrap "
            >
              Submit Your Requirement!
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
