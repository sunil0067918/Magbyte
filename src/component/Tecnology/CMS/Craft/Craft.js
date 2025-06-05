import React from "react";
import Nav from "../../../Nav";
import Craftbanner from "./Craftbanner";
import Craftsection from "./Craftsection";
import Craftsection2 from "./Craftsection2";
import CraftFaq from "./CraftFaq";
import Footer from "../../../Footer"

const Craft = () => {
  return (
    <div className=" cursor-pointer">
      <Nav/>
      <Craftbanner />
      <Craftsection/>
      <Craftsection2/>
      <CraftFaq/>
      <Footer/>

    </div>
  );
};

export default Craft;
