import React from "react";
import Nav from "../../../Nav";
import Spotifybanner from "./Spotifybanner";
import Spotifysection from "./Spotifysection";
import Spotifyfaq from "./Spotifyfaq";
import Footer from   "../../../Footer"
const Spotify = () => {
  return (
    <div className=" cursor-pointer">
      <Nav />
      <Spotifybanner />
      <Spotifysection />
      <Spotifyfaq/>
      <Footer/>
    </div>
  );
};

export default Spotify;
