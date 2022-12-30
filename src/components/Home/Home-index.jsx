import React from "react";
import Navbar from "../ReUsables/Navbar";
import HomeBody from "./HomeBody";
import HomeHero from "./HomeHero";
import Footer from "../ReUsables/Footer";
import AppDownload from "../ReUsables/AppDownload";
import Phones1 from "../../images/phones-1.png";

function index() {
  return (
    <div className="home">
      <Navbar />
      <HomeHero />
      <HomeBody />
      <AppDownload
        bgc={{ backgroundColor: "#e1eddb" }}
        title="We promise you an amazing experience with your packages"
        para="Download Cargodealer and come start managing your packages with us."
        img={Phones1}
      />
      <Footer />
    </div>
  );
}

export default index;
