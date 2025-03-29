import axios from "axios";
// import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Popupform = ({ show, handleclose }) => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      jobposition: data.jobposition,
    };

    try {
      const hireresult = await axios.post(
        "http://localhost:3000/hireresister",
        payload
      );

      if(hireresult.data.status){
        toast.success(hireresult.data.message)
      }else{
        toast.warn('Something went wrong')
      }
      console.log(hireresult);

      reset();
    } catch (err) {
      console.log(err);
    } finally{
      handleclose()
    }
  };

  if (!show) return null;

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50  flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg bg-gradient-to-r from-gray-300 to-bg-white lg:w-96">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-2xl font-semibold mb-4  text-center text-blue-900">
              Magbytes Job Application Form
            </h2>

            <div className="mb-4  flex flex-col ">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                name="fullName"
                {...register("fullName", {
                  required: "Full name is required",
                })}
                className="w-full p-2 border border-black rounded-md"
              />
              {errors.fullName && (
                <p className="text-red-700 lg:text-[14px] text-[12px]">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="mb-4 flex flex-col">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                name="email"
                {...register("email", {
                  required: "Email is required",
                })}
                className="w-full p-2 border border-black rounded-md"
              />
              {errors.email && (
                <p className="text-red-700 lg:text-[14px] text-[12px]">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                name="phone"
                {...register("phone", {
                  required: "Phone number is required",
                })}
                className="w-full p-2 border border-black rounded-md"
              />
              {errors.phone && (
                <p className="text-red-700 lg:text-[14px] text-[12px]">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="mb-4">
          
              <input
                type="file"
              
                placeholder="Enter your phone number"
                name="resum"
                {...register("resum", {
                  required: "pdf file is requierd",
                })}
                className="w-full p-2 border border-black rounded-md"
              />
              {errors.resum && (
                <p className="text-red-700 lg:text-[14px] text-[12px]">
                  {errors.resum.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="jobposition"
                className="block text-sm font-medium text-gray-700"
              >
                Job Position
              </label>
              <select
                id="jobposition"
                name="jobposition"
                className="w-full p-2 rounded-md"
                {...register("jobposition", {
                  required: "Job position is required",
                })}
              >
                <option value="">Select a job position</option>
                <option value="React Developer">React Developer</option>
                <option value="Magento Developer">Magento Developer</option>
                <option value="Php Developer">Php Developer</option>
                <option value="Angular Developer">Angular Developer</option>
                <option value="JavaScript Developer">
                  JavaScript Developer
                </option>
              </select>
              {errors.jobposition && (
                <p className="text-red-500 text-xs">
                  {errors.jobposition.message}
                </p>
              )}
            </div>



              <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Submit Application
            </button>
            <button
              onClick={handleclose}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
          </form>
        
        </div>
      </div>
    </div>
  );
};

export default Popupform;
