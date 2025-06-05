import React from "react";
import Nav from "../../../Nav";
import Iosbanner from "./Iosbanner";
import Iossection from "./Iossection";
import Iossection2 from "./Iossection2";
import Iosfaq from "./Iosfaq";
import Footer from  "../../../Footer"

const Ios = () => {
  return (
    <div className="">
      <Nav />
      <Iosbanner/>
      <Iossection/>
      <Iossection2/>
      <Iosfaq/>
      <Footer/>
    </div>
  );
};

export default Ios;
