import React from "react";
import Nav from "../Nav";
import Mangentoecommarce from "../Tecnology/Mangento/Mangentoecommarce"
import Mangentobanner from "./Mangento/Mangentobanner";
import Mangentoouroffering from "./Mangento/Mangentoouroffering";

import Footer from "../Footer"
import Mangentoagency from "./Mangento/Mangentoagency";
import Mangetoquestions from "./Mangento/Mangetoquestions"

const Tecnologies = () => {
  return (
    <div className="">
      <Nav />
      <Mangentobanner />
      <Mangentoecommarce/>
      <Mangentoouroffering/>
      <Mangentoagency/>
      <Mangetoquestions/>
     
      <Footer/>
    </div>
  );
};

export default Tecnologies;
