import React from "react";
import Nav from "../../../Nav";
import Hubspotbanner from "./Hubspotbanner";
import Hubspotsection from "./Hubspotsection";
import Hubspotsection2 from "./Hubspotsection2";
import Footer from "../../../Footer"
import Hubspotfaq from "./Hubspotfaq";

const Hubspot = () => {
  return (
    <div className="">
      <Nav />
      <Hubspotbanner />
      <Hubspotsection/>
      <Hubspotsection2/>
      <Hubspotfaq/>
      <Footer/>
    </div>
  );
};

export default Hubspot;
