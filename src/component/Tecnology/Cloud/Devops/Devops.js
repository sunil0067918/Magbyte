import React from "react";
import Nav from "../../../Nav";
import Devopsbanner from "./Devopsbanner";
import Devopsection from "./Devopsection";
import Devopsfaq from "./Devopsfaq";
import Footer from "../../../Footer"
const Devops = () => {
  return (
    <div>
      <Nav />
      <Devopsbanner/>
      <Devopsection/>
      <Devopsfaq/>
      <Footer/>
    </div>
  );
};

export default Devops;
