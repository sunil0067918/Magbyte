import React from "react";
import Umbarcobanner from "./Umbarcobanner";
import Nav from "../../../Nav";
import Umbaracosection from "./Umbaracosection";
import Umbarecofaq from "./Umbarecofaq";
import Footer from  "../../../Footer"

const Umbarco = () => {
  return (
    <div>
      <Nav />
      <Umbarcobanner />
      <Umbaracosection/>
      <Umbarecofaq/>
      <Footer/>
    </div>
  );
};

export default Umbarco;
