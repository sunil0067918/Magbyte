import React from "react";
import Nav from "../../../Nav";
import Goobanner from "../Goocloud/Goobanner";
import Googsection from "./Googsection";
import Goosection2 from "./Goosection2";
import Goofaq from "./Goofaq";
import Footer from "../../../Footer"

const Goog = () => {
  return (
    <div>
      <Nav />
      <Goobanner />
      <Googsection />
      <Goosection2/>
      <Goofaq/>
      <Footer/>
    </div>
  );
};

export default Goog;
