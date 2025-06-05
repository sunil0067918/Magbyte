import React from "react";
import Nav from "../../../Nav";
import Sharebanner from "./Sharebanner";
import Sharepointsection from "./Sharepointsection";
import Sharesection2 from "./Sharesection2";
import Sharefaqquesion from "./Sharefaqquesion";
import Footer from "../../../Footer"

const Sharepoint = () => {
  return (
    <div className="  cursor-pointer">
      <Nav />
      <Sharebanner/>
      <Sharepointsection/>
      <Sharesection2/>
      <Sharefaqquesion/>
      <Footer/>
    </div>
  );
};

export default Sharepoint;
