import React from "react";
import Navbar from "../ReUsables/Navbar";
import HomeBody from "./HomeBody";
import HomeHero from "./HomeHero";
import Footer from "../ReUsables/Footer";
import AppDownload from "../ReUsables/AppDownload";
import Phones1 from "../../images/phones-1.png";
import HomeBottom from "./HomeBottom";

function index() {
  return (
    <div data-scroll-section className="home">
      <Navbar ctaWord="Get Started" />
      <HomeHero />
      <HomeBody />
      <AppDownload
        bgc={{ backgroundColor: "#e1eddb" }}
        title="We promise you an amazing experience with your packages"
        para="Download Cargodealer and come start managing your packages with us."
        img={Phones1}
      />
      <HomeBottom />
      <Footer />
    </div>
  );
}

export default index;
