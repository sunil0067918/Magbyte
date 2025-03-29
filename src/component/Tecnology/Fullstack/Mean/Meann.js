import React from "react";
import Nav from "../../../Nav";
import Meanbanner from "./Meanbanner";
import Meansection from "./Meansection";
import Meanfaq from "./Meanfaq";
import Footer from "../../../Footer";

const Meann = () => {
  return (
    <div>
      <Nav />
      <Meanbanner />
      <Meansection />
      <Meanfaq/>
      <Footer/>
    </div>
  );
};

export default Meann;
