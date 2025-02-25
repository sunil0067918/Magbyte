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
import Framework from "../src/component/Services/Framework"
import Python from "./component/Tecnology/python/Python";
import Node from "../src/component/Tecnology/Node/Node"

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page on component load
  }, []);
  return (
    <>
      {/* <Home/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/Ecommarce" element={<Service />} />
          <Route path="/web" element={<Webapp />} />
          <Route path="/homepage" element={<Home/>} />
          <Route  path="python"  element =  {<Python/>}/>
          <Route  path="/frame" element = {<Framework/>} />
          <Route path="/webdesign" element={<Webdesign />} />
          <Route path="/digital" element={<Digital />} />
          <Route path="/tecno" element={<Tecnologies/>} />
          <Route  path="/Laravel"  element = {<Laravel/>} />
          <Route path="/Node" element = {<Node/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
