import React from "react";
import Nav from "../../../Nav";
import Sitecorebanner from "./Sitecorebanner";
import Sitecoresection from "./Sitecoresection";
import Sitecorefaq from "./Sitecorefaq";
import Footer from "../../../Footer"
const Sitecore = () => {
  return (
    <div className=" overflow-hidden cursor-pointer">
      <Nav />
<Sitecorebanner/>
<Sitecoresection/>  
<Sitecorefaq/>
<Footer/>
    </div>
  );
};

export default Sitecore;
