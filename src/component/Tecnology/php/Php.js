import React from "react";
import Nav from "../../Nav";
import Phpbanner from "./Phpbanner";
import  Phpsection from "../php/Phpsection"
import Phps2 from "./Phps2";
import Phpfaqquestion from "./Phpfaqquestion";
import Footer from  "../../Footer"

const Php = () => {
  return (
    <div>
      <Nav />
      <Phpbanner/>
      <Phpsection/>
      <Phps2/>
      <Phpfaqquestion/>
      <Footer/>

    </div>
  );
};

export default Php;
