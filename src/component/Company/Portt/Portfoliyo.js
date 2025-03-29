import React from "react";
import Nav from "../../Nav";
import Portfoliyobanner from "./Portfoliyobanner";
import Porttsection from "./Porttsection";
// import New from "./New";


const Portfoliyo = () => {
  return (
    <div className="  cursor-pointer">
      <Nav />
      <Portfoliyobanner />
      <Porttsection/>
      {/* <New/> */}
  
    </div>
  );
};

export default Portfoliyo;
