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
          <Route path="/homepage" element={<Home />} />
          <Route path="/webdesign" element={<Webdesign />} />
          <Route path="/digital" element={<Digital />} />
          <Route path="/tecno" element={<Tecnologies/>} />
          <Route  path="/Laravel"  element = {<Laravel/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
