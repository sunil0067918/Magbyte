import React, { useEffect } from "react";
import Home from "./component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./component/Contact";
import About from "./component/About";
import Service from "./component/Services/Service";
import Webapp from "./component/Services/Webapp";
import Webdesign from "./component/Services/Webdesign";
import Digital from "./component/Services/Digital";

import Laravel from "./component/Tecnology/Laravel/Laravel";
import Python from "./component/Tecnology/python/Python";
import Node from "../src/component/Tecnology/Node/Node";
import Qatesting from "./component/Services/QAtesting/Qatesting";
import Maintenance from "./component/Services/Maintanace/Maintenance";
import Rea from "./component/Tecnology/React/Rea";
import Dediacted from "./component/Services/Dedictedteam/Dediacted";
import Frameworks from "./component/Services/Frameworks/Frameworks";
import Codeigniter from "./component/Tecnology/Codeigniterdev/Codeigniter";
import Angular from "./component/Tecnology/Angular/Angular";
import Php from "./component/Tecnology/php/Php";
import Dotnet from "./component/Tecnology/Dotnet/Dotnet";
import Wordpress from "./component/Tecnology/CMS/Wordpress/Wordpress";
import Drupal from "./component/Tecnology/CMS/Drupal/Drupal";
import Craft from "./component/Tecnology/CMS/Craft/Craft";
import Joomla from "./component/Tecnology/CMS/Joomla/Joomla";
import Sharepoint from "./component/Tecnology/CMS/Sharepoint/Sharepoint";
import Umbarco from "./component/Tecnology/CMS/Umbaraco/Umbarco";
import Sitecore from "./component/Tecnology/CMS/Sitecore/Sitecore";
import Woocommarce from "./component/Tecnology/Ecomar/Woocomarce/Woocommarce";
import Spotify from "./component/Tecnology/Ecomar/Spotify/Spotify";
import Bigcommarce from "./component/Tecnology/Ecomar/Bigcommarce/Bigcommarce";
import Adobe from "./component/Tecnology/Ecomar/Adobe/Adobe";
import Android from "./component/Tecnology/MobileApps/Android/Android";
import Reactnavtive from "./component/Tecnology/MobileApps/Reactnative/Reactnavtive";
import Flutter from "./component/Tecnology/MobileApps/Flutter/Flutter";
import Ios from "./component/Tecnology/MobileApps/IOS/Ios";
import Servicenow from "./component/Tecnology/CRM/Servicenow/Servicenow";
import Salesforcee from "./component/Tecnology/CRM/Salesforce/Salesforcee";
import Hubspot from "./component/Tecnology/CRM/Hubspot/Hubspot";
import Zoho from "./component/Tecnology/CRM/ZOHO/Zoho";
import Awtt from "./component/Tecnology/Cloud/AWS/Awtt";
import Hiredev from "./component/Hiredevlopers/Hiredev";
import Azure from "./component/Tecnology/Cloud/Azure/Azure";
import Goog from "./component/Tecnology/Cloud/Goocloud/Goog";
import Devops from "./component/Tecnology/Cloud/Devops/Devops";
import Mernn from "./component/Tecnology/Fullstack/Mern/Mernn";
import Meann from "./component/Tecnology/Fullstack/Mean/Meann";
import { ToastContainer } from "react-toastify";
import Javaa from "./component/Tecnology/Fullstack/Javaa/Javaa";
import Portfoliyo from "./component/Company/Portt/Portfoliyo";
import Freeconstaform from "./component/Freeconstaform";
import Manjento from "./component/Tecnology/Mangento/Manjento";
import Industries from "./component/Industruies/Industries"
import Oodo from "./component/Tecnology/CRM/Oodo/Oodo";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page on component load
  }, []);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
          <Route path="/" element={<Home />} />
          <Route path="/python" element={<Python />} />
          <Route path="/webdesign" element={<Webdesign />} />
          <Route path="/digital" element={<Digital />} />
          <Route path="/majento" element={<Manjento/>} />
          <Route path="/Laravel" element={<Laravel />} />
          <Route path="/Node" element={<Node />} />
          <Route path="/Reactt" element={<Rea />} />
          <Route path="/code" element={<Codeigniter />} />
          <Route path="/angular" element={<Angular />} />
          <Route path="/php" element={<Php />} />
          <Route path="/dot" element={<Dotnet />} />
          <Route path="/Wordpress" element={<Wordpress />} />
          <Route path="/drupal" element={<Drupal />} />
          <Route path="/craftt" element={<Craft />} />
          <Route path="/joomla" element={<Joomla />} />
          <Route path="/share" element={<Sharepoint />} />
          <Route path="/um" element={<Umbarco />} />
          <Route path="/site" element={<Sitecore />} />
          <Route path="woo" element={<Woocommarce />} />
          <Route path="/spotify" element={<Spotify />} />
          <Route path="/bigco" element={<Bigcommarce />} />
          <Route path="/adobe" element={<Adobe />} />
          <Route path="/android" element={<Android />} />
          <Route path="/Reactnative" element={<Reactnavtive />} />
          <Route path="/flutter" element={<Flutter />} />
          <Route path="/ios" element={<Ios />} />
          <Route path="/servicenow" element={<Servicenow />} />
          <Route path="/sales" element={<Salesforcee />} />
          <Route path="/hub" element={<Hubspot />} />
          <Route path="/zoho" element={<Zoho />} />
          <Route path="/awsa" element={<Awtt />} />
          <Route path="/azure" element={<Azure />} />
          <Route path="/frame" element={<Frameworks />} />
          <Route path="/googl" element={<Goog />} />
          <Route path="/dev" element={<Devops />} />
          <Route path="/mern" element={<Mernn />} />
          <Route path="/mean" element={<Meann />} />
          <Route path="/javaa" element={<Javaa />} />
          <Route path="/portt" element={<Portfoliyo />} />
          <Route path="/hire" element={<Hiredev />} />
          <Route path="/industries"  element ={<Industries/>}/>
          <Route path="/book" element = {<Freeconstaform/>}/>
          <Route path="/odo"  element = {<Oodo/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
