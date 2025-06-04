import React from "react";
import Nav from "../../Nav";
import Laravelbanner from "./Laravelbanner";
import Laravelsections from "./Laravelsections";
import Laravel2sections from "./Laravel2sections";
import Footer from "../../Footer";
import Laravelfaq from "./Laravelfaq";

const Laravel = () => {
  return (
    <div>
      <Nav />
      <Laravelbanner/>
      <Laravelsections/>
      <Laravel2sections/>
      <Laravelfaq/>
      <Footer/> 
    </div>
  );
};

export default Laravel;
