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
        `${process.env.REACT_APP_API_URL}/register`,
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
            "/portt",
          ].includes(location.pathname)
            ? "animate-slideInFromRight"
            : "animate-slideInFromBottom "
        } bg-gradient-to-r from-[#333333] to-[#000000] rounded-[5px] lg:px-[14px] py-[20px] px-[10px] lg:py-[40px] opacity-0 border-2 border-[#333333]`}
      >
        <div className="flex flex-col text-center opacity-0 animate-fadeIn">
          <span
            className= "bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent text-[16px] sm:text-[20px] font-[800]" 
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

            <div className=" relative pt-1 lg:pt-0">
              <input
                id="email"
                className="text-[11px]  sm:text-[14px] px-[6px] py-[6px] sm:px-[10px] sm:py-[10px] rounded-[6px] border-2 border-[#333333] focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-[#333333] transition-all duration-300 w-full mt-1"
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
      className="px-[4px] py-[4px] mt-[20px] lg:mt-0 sm:px-[10px] sm:py-[10px] font-[700]  text-white
              shadow-[0_0_10px_2px rgba(70,135,199,0.7)] hover:scale-105
               hover:shadow-[0_0_20px_4px rgba(70,135,199,1)] focus:ring-4 focus:shadow-[0_0_20px_4px rgba(70,135,199,1)] rounded-[6px] transition-all
                  duration-300 ease-in-out bg-gradient-to-r from-[#4687C7] h- to-[#1E3A8A]   focus:ring-[#4687C7] focus:ring-opacity-60 focus:border-[#4687C7]   border-2 border-[#4687C7]"
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
