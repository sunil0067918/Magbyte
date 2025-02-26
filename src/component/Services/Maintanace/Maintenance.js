import React from "react";
import Nav from "../../Nav";
import Maintenanacebanner from "./Maintenanacebanner";
import Maintenancesection from "./Maintenancesection";

const Maintenance = () => {
  return (
    <div>
      <Nav />
      <Maintenanacebanner/>
      <Maintenancesection/>
    </div>
  );
};

export default Maintenance;
