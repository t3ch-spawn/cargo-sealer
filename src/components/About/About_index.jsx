import React from "react";
import Footer from "../ReUsables/Footer";
import Navbar from "../ReUsables/Navbar";
import AboutBottom from "./AboutBottom";
import AboutHero from "./AboutHero";
import AboutTargets from "./AboutTargets";

function About_index() {
  return (
    <div data-scroll-section>
      <Navbar ctaWord="Request Pickup" />
      <AboutHero />
      <AboutTargets />
      <AboutBottom />
      <Footer />
    </div>
  );
}

export default About_index;
