import React from "react";
import Nav from "../../../Nav";
import Servicessectionnow from "./Servicessectionnow";
import Sevicenowbanner from "./Sevicenowbanner";
import Servicefaq from "./Servicefaq";
import Footer from "../../../Footer";

const Servicenow = () => {
  return (
    <div className=" cursor-pointer">
      <Nav />
      <Sevicenowbanner />
      <Servicessectionnow />
      <Servicefaq />
      <Footer />
    </div>
  );
};

export default Servicenow;
