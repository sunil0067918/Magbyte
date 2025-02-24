import React from "react";
import Nav from "../../Nav";
import Laravelbanner from "./Laravelbanner";
import Laravelsections from "./Laravelsections";
import Laravel2sections from "./Laravel2sections";

const Laravel = () => {
  return (
    <div>
      <Nav />
      <Laravelbanner/>
      <Laravelsections/>
      <Laravel2sections/>
    </div>
  );
};

export default Laravel;
