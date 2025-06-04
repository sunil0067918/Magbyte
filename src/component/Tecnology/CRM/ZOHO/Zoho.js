import React from "react";
import Nav from "../../../Nav";
import Zohobanner from "./Zohobanner";
import Zohosection from "./Zohosection";
import Zohofaq from "./Zohofaq";
import Footer from  "../../../Footer"
const Zoho = () => {
  return (
    <div>
      <Nav />
      <Zohobanner/>
      <Zohosection/>
      <Zohofaq/>
      <Footer/>
    </div>
  );
};

export default Zoho;
