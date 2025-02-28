import React from "react";
import Codeigniterbanner from "./Codeigniterbanner";
import Nav from "../../Nav"
import Codeigntersection from "./Codeigntersection";
import CodeigniterFaq from "./CodeigniterFaq";
import Footer from '../../Footer'

const Codeigniter = () => {
  return (
    <div className="">
    <Nav/>
      <Codeigniterbanner />
      <Codeigntersection/>
      <CodeigniterFaq/>
      <Footer/>
    </div>
  );
};

export default Codeigniter;
