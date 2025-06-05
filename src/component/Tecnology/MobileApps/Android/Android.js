import React from "react";
import Nav from "../../../Nav";
import Androidbanner from "./Androidbanner";
import Androidsection from "../Android/Androidsection";
import Androidsection2 from "./Androidsection2";
import AndroidFaq from "./AndroidFaq";
import Footer from "../../../Footer";

const Android = () => {
  return (
    <div className=" cursor-pointer overflow-hidden">
      <Nav />
      <Androidbanner />
      <Androidsection />
      <Androidsection2/>
      <AndroidFaq/>
      <Footer/>
    </div>
  );
};

export default Android;
