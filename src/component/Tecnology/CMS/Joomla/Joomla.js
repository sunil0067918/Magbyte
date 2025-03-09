import React from "react";
import Nav from "../../../Nav";
import Joomlabanner from "./Joomlabanner";
import Joomlasection from "./Joomlasection";
import Joomlasection2 from "./Joomlasection2";
import Joomlafaqquestions from "./Joomlafaqquestions";
import Footer from "../../../Footer";

const Joomla = () => {
  return (
    <div className=" cursor-pointer">
      <Nav />
      <Joomlabanner />
      <Joomlasection />
      <Joomlasection2 />
      <Joomlafaqquestions />
      <Footer />
    </div>
  );
};

export default Joomla;
