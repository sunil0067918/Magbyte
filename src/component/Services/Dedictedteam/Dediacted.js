import React from "react";
import Nav from "../../Nav";
import Dedicatedbanner from "./Dedicatedbanner";
import Dedicatedsection from "./Dedicatedsection";
import Dedicatedsection2 from "./Dedicatedsection2";
import Dedicatedfaq from "./Dedicatedfaq";
import Footer from "../../Footer";

const Dediacted = () => {
  return (
    <div className="  overflow-hidden">
      <Nav />
      <Dedicatedbanner />
      <Dedicatedsection/>
      <Dedicatedsection2/>
      <Dedicatedfaq/>
      <Footer/>
    </div>
  );
};

export default Dediacted;
