import React from "react";
import Nav from "../../Nav";
import Angularbanner from "./Angularbanner";
import Angularsection from "./Angularsection";
import Angularfaqquestions from "./Angularfaqquestions";
import Footer from  "../../Footer"

const Angular = () => {
  return (
    <div className=" overflow-hidden cursor-pointer">
      <Nav />
      <Angularbanner/>
      <Angularsection/>
      <Angularfaqquestions/>
      <Footer/>
    </div>
  );
};

export default Angular;
