import React, { useEffect } from "react";
import Home from "./component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./component/Contact";
import About from "./component/About";
import Service from "./component/Services/Service";
import Webapp from "./component/Services/Webapp";
import Webdesign from "./component/Services/Webdesign";
import Digital from "./component/Services/Digital";
import Tecnologies from "./component/Tecnology/Tecnologies";
import Laravel from "./component/Tecnology/Laravel/Laravel";
import Python from "./component/Tecnology/python/Python";
import Node from "../src/component/Tecnology/Node/Node";
import Qatesting from "./component/Services/QAtesting/Qatesting";
import Maintenance from "./component/Services/Maintanace/Maintenance";
import Rea from "./component/Tecnology/React/Rea";
import Dediacted from "./component/Services/Dedictedteam/Dediacted";
import Frameworks from "./component/Services/Frameworks/Frameworks";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page on component load
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/Ecommarce" element={<Service />} />
          <Route path="/Dedicated" element={<Dediacted />} />
          <Route path="/web" element={<Webapp />} />
          <Route path="/QA" element={<Qatesting />} />
          <Route path="/Main" element={<Maintenance />} />
          <Route path="/homepage" element={<Home />} />
          <Route path="/python" element={<Python />} />
          <Route path="/webdesign" element={<Webdesign />} />
          <Route path="/digital" element={<Digital />} />
          <Route path="/tecno" element={<Tecnologies />} />
          <Route path="/Laravel" element={<Laravel />} />
          <Route path="/Node" element={<Node />} />
          <Route path="/Reactt" element={<Rea />} />
          <Route path="/frame" element={<Frameworks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
