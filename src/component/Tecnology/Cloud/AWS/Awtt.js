import React from "react";
import Nav from "../../../Nav";
import Awbanner from "./Awbanner";
import Awsection from "./Awsection";
// import Awfaq from  "../AWS/Awfaq"
import Footer from   "../../../Footer"

const Awtt = () => {
  return (
    <div>
      <Nav />
      <Awbanner />
      <Awsection/>  
 
      {/* <Awfaq/> */}
      <Footer/>
    </div>
  );
};

export default Awtt;
