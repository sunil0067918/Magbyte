import React from "react";
import Nav from "../../Nav";
import Maintenanacebanner from "./Maintenanacebanner";
import Maintenancesection from "./Maintenancesection";
import ManitanceFaq from "./ManitanceFaq";
import Footer from '../../Footer'

const Maintenance = () => {
  return (
    <div>
      <Nav />
      <Maintenanacebanner/>
      <Maintenancesection/>
      <ManitanceFaq/>
      <Footer />
    </div>
  );
};

export default Maintenance;
