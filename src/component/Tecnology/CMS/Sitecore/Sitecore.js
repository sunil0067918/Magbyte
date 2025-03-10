import React from "react";
import Nav from "../../../Nav";
import Sitecorebanner from "./Sitecorebanner";
import Sitecoresection from "./Sitecoresection";
const Sitecore = () => {
  return (
    <div className=" overflow-hidden">
      <Nav />
<Sitecorebanner/>
<Sitecoresection/>  
    </div>
  );
};

export default Sitecore;
