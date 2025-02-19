import React from "react";
import Nav from "../Nav";
import Mangentoecommarce from "../Tecnology/Mangento/Mangentoecommarce"
import Mangentobanner from "./Mangento/Mangentobanner";
import Mangentoouroffering from "./Mangento/Mangentoouroffering";

const Tecnologies = () => {
  return (
    <div className="">
      <Nav />
      <Mangentobanner />
      <Mangentoecommarce/>
      <Mangentoouroffering/>
    </div>
  );
};

export default Tecnologies;
