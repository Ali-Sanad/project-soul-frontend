import React from "react";

import Navbar from "../shared/navbar";
import HeroSection from "./herosection";
import About from "./about";
import Works from "./works";
import Contact from "./contact";
import Footer from "../shared/footer";
import ToTop from "../shared/totop";
import MessageIcon from "../shared/message";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <About></About>
      <Works></Works>
      <Contact></Contact>
      <Footer></Footer>
      <MessageIcon></MessageIcon>
      <ToTop></ToTop>
    </>
  );
};

export default Home;
