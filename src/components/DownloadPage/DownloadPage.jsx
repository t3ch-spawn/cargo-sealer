import React from "react";
import Footer from "../ReUsables/Footer";
import Navbar from "../ReUsables/Navbar";
import AppDownload from "../ReUsables/AppDownload";
import Phones1 from "../../images/phones-1.png";

function DownloadPage() {
  return (
    <div>
      <Navbar ctaWord="Get Started" />
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

export default DownloadPage;
