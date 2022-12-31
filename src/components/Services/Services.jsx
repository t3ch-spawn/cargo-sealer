import React from "react";
import ServicesBody from "./ServicesBody";
import Navbar from "../ReUsables/Navbar";
import Footer from "../ReUsables/Footer";
import ServicesHero from "./ServicesHero";
import ServicesBottom from "./ServicesBottom";

function Services() {
  return (
    <div>
      <Navbar ctaWord="Request Pickup" />
      <ServicesHero />
      <ServicesBody />
      <ServicesBottom />
      <Footer />
    </div>
  );
}

export default Services;
