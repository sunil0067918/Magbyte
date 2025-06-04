import React from "react";
import Nav from "../Nav";
import Ecobanner from "./Ecommarce/Ecobanner";
import Ecommarcedevsolutions from "./Ecommarce/Ecommarcedevsolutions";
import Ourecommarcedevsolutions from "./Ecommarce/Ourecommarcedevsolutions";
import EcommarcePowerfullplateform from "./Ecommarce/EcommarcePowerfullplateform";
import Ecomportfoliyo from "./Ecommarce/Ecomportfoliyo";
import Ecommarcedevcompany from "./Ecommarce/Ecommarcedevcompany";
import OurinclusiveEcommarce from "./Ecommarce/OurinclusiveEcommarce";
import Ecommarcebenefits from "./Ecommarce/Ecommarcebenefits";
import Faq from "../Faq";
import Footer from "../Footer";

const Service = () => {
  return (
    <div className="">
      <Nav />
      <Ecobanner />
      <Ecommarcedevsolutions />
      <Ourecommarcedevsolutions />
      <EcommarcePowerfullplateform />
      <Ecomportfoliyo />
      <Ecommarcedevcompany />
      <OurinclusiveEcommarce />
      <Ecommarcebenefits />
      <Faq />
      <Footer />
    </div>
  );
};

export default Service;
