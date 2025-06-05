import React from "react";
import Nav from "../../Nav";
import Pythonbanner from "./Pythonbanner";
import Pythonsection from "../python/Pythonsection";
import Pythoneslider from "./Pythoneslider";
import Footer from "../../Footer";
import Pythonfaqquestions from "./Pythonfaqquestions";
const Python = () => {
  return (
    <div>
      <Nav />
      <Pythonbanner />
      <Pythonsection />
      <Pythoneslider />
      <Pythonfaqquestions />
      <Footer />
    </div>
  );
};

export default Python;
