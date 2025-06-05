import React from "react";
import img from "../images/Layer5.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
const Freeconstaform = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onsubmit = async (data) => {
    const payload = {
      Consultationfirstname: data.Consultationfirstname,
      Consultationemail: data.Consultationemail,
      Consultationnumber: data.Consultationnumber,
      Consultationmessage: data.Consultationmessage,
    };

    try {
      const consultresult = await axios.post(
        "http://localhost:3000/Consultresister",
        payload
      );
      if (consultresult.data.status) {
        toast.success(consultresult.data.message);
      } else {
        toast.warn("Something went wrong");
      }
      reset()

      console.log(consultresult);
    } catch (errors) {
      console.log(errors);
    }
  };

  return (
    <div
      className=" relative   overflow-hidden h-[660px]  flex justify-center py-2 lg:pt-0 px-2 lg:items-center "
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),url(${img} `,
        backgroundSize: `cover`,
        height: `100vh`,
      }}
    >
      <div className=" lg:w-[35%] w-full  lg:p-6 p-3 h-[480px] lg:h-[660px]  bg-white rounded-lg shadow-lg">
        <h2 className="lg:text-2xl text-[18px] font-semibold text-center  mb-6 bg-gradient-to-r from-blue-800 to-white bg-clip-text text-transparent animate-pulse">
          Book Your Consultation
        </h2>
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="mb-2 ">
            <label className="block lg:text-[16px] text-[14px] font-medium text-gray-600">
              Name:
            </label>
            <input
              type="text"
              name="Consultationfirstname"
              className="lg:mt-2 lg:p-3 p-1 mt-1 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
              {...register("Consultationfirstname", {
                required: "Firstname is required",
              })}
            />

            {errors.Consultationfirstname && (
              <p className="text-red-700 lg:text-[14px] text-[12px]">
                {errors.Consultationfirstname.message}
              </p>
            )}
          </div>

          <div className="mb-2">
            <label className="block lg:text-[16px] text-[14px] font-medium text-gray-600">
              Email:
            </label>
            <input
              type="email"
              name="Consultationemail"
              className="lg:mt-2 lg:p-3 p-1 mt-1 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
              {...register("Consultationemail", {
                required: "Email is required",
              })}
            />
            {errors.Consultationemail && (
              <p className="text-red-700 lg:text-[14px] text-[12px]">
                {errors.Consultationemail.message}
              </p>
            )}
          </div>

          <div className="mb-2">
            <label className="block lg:text-[16px] text-[14px]font-medium text-gray-600">
              Phone Number:
            </label>
            <input
              type="number"
              name="Consultationnumber"
              className="lg:mt-2 lg:p-3 p-1 mt-1 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
              {...register("Consultationnumber", {
                required: "Enter Your Phone Number",
              })}
            />

            {errors.Consultationnumber && (
              <p className="text-red-700 lg:text-[14px] text-[12px]">
                {errors.Consultationnumber.message}
              </p>
            )}
          </div>

          <div className="mb-2">
            <label className="block lg:text-[16px] text-[14px] font-medium text-gray-600">
              Requirement:
            </label>
            <textarea
              id="message"
              name="Consultationmessage"
              {...register("Consultationmessage", {
                required: "Enter Your Phone Number",
              })}
              className="lg:mt-2 lg:p-3 p-1 mt-1 w-full lg:h-28 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
            ></textarea>
            {errors.Consultationmessage && (
              <p className="text-red-700 lg:text-[14px] text-[12px]">
                {errors.Consultationmessage.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white lg:py-3 lg:text-[20px] text-[16px]  py-1 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Freeconstaform;
