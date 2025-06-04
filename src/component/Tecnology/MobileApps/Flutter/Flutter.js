import React from "react";
import Nav from "../../../Nav";
import Flutterbanner from "./Flutterbanner";
import Fluttersection from "./Fluttersection";
import Flutterfaq from "./Flutterfaq";
import Footer from  "../../../Footer"
const Flutter = () => {
  return (
    <div>
      <Nav />
      <Flutterbanner/>
      <Fluttersection/>
      <Flutterfaq/>
      <Footer/>
    </div>
  );
};

export default Flutter;
