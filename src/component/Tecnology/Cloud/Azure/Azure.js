import React from "react";
import Nav from "../../../Nav";
import Azurebanner from "./Azurebanner";
import Azuresection from "./Azuresection";
import Azuresection2 from "./Azuresection2";
import Azurefaq from "./Azurefaq";
import Footer from  "../../../Footer"

const Azure = () => {
  return (
    <div className=" cursor-pointer">
      <Nav />
      <Azurebanner />
      <Azuresection/>
      <Azuresection2/>
      <Azurefaq/>

      <Footer/>
    </div>
  );
};

export default Azure;
