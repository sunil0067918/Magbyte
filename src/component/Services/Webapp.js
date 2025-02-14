import React from "react";
import Nav from "../Nav";
import Webappbanner from "./Webapp/Webappbanner";
import Vastappdev from "./Webapp/Vastappdev";
import Ourwebappmobiledev from "./Webapp/Ourwebappmobiledev";
import Benfitsworkingwithus from "./Webapp/Benfitsworkingwithus";
import Webappdivergent from "./Webapp/Webappdivergent";

const Webapp = () => {
  return (
    <div className="">
      <Nav />
      <Webappbanner />
      <Vastappdev />
      <Ourwebappmobiledev />
      <Benfitsworkingwithus />
      <Webappdivergent />
    </div>
  );
};

export default Webapp;
