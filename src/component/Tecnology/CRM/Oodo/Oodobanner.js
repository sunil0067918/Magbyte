import React from 'react'
import Form from "../../../Form";
import img from "../../../Tecnology/CRM/Oodo/Oodobannerimage/img1.png";

const Oodobanner = () => {
  return (
    <div>
           <div
        className=" relative  sm:h-[880px] lg:h-[540px] h-[800px]  bg-blue-600 flex justify-center items-center "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(${img})`,
          backgroundSize: `cover`,
        }}
      >
        <div className=" absolute w-[90%] justify-between flex gap-3  sm:items-baseline lg:items-center rounded-[5px] lg:flex-row flex-col ">
          <Form />
        </div>
      </div>
    </div>
  )
}

export default Oodobanner