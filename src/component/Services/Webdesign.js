import React from "react";
import Nav from "../Nav";
import Webdesignbanner from "./WebDesign/Webdesignbanner";
import Intutive from "./WebDesign/Intutive";
import Ourhasselwebsite from "./WebDesign/Ourhasselwebsite";
import Webdesignservices from "./WebDesign/Webdesignservices";
import Faq from "../Faq";
import Footer from "../Footer";
import Whybrandwebdesign from "./WebDesign/Whybrandwebdesign";

const Webdesign = () => {
  return (
    <div>
      <Nav />
      <Webdesignbanner />
      <Intutive />
      <Ourhasselwebsite />
      <Webdesignservices />
      <Whybrandwebdesign />
      <Faq />
      <Footer />
    </div>
  );
};

export default Webdesign;
