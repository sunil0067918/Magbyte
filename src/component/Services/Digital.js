import React from "react";
import Nav from "../Nav";
import Digitalbanner from "./Digitalmarketing/Digitalbanner";
import Digitalserviceprovider from "./Digitalmarketing/Digitalserviceprovider";
import Footer from "../Footer";
const Digital = () => {
  return (
    <div className="">
      <Nav />
      <Digitalbanner />
      <Digitalserviceprovider/>
      <Footer/>
    </div>
  );
};

export default Digital;
