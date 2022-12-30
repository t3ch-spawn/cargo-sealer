import React from "react";
import Navbar from "../ReUsables/Navbar";
import Footer from "../ReUsables/Footer";
import AppDownload from "../ReUsables/AppDownload";
import Questions from "../ReUsables/Questions";
import Download2 from "../ReUsables/Download2";
import ThreeBoxes from "../ReUsables/ThreeBoxes1";
import Phones1 from "../../images/phones-1.png";
import Corona from "../../images/Corona.png";

function Pickup() {
  return (
    <div>
      <Navbar />
      <Download2
        img={Corona}
        bgc={{ zIndex: 5 }}
        title="Make your package deliveries "
        titlesub="faster"
        para="Fund your wallet and start delivering packages with ease."
        titlestyle2={{ display: "none" }}
      />
      <ThreeBoxes bgc={{ zIndex: 4 }} title="Why Ship with Cargodealer?" />
      <AppDownload
        bgc={{ backgroundColor: "#fcfdfc", zIndex: 3 }}
        title="We promise you an amazing experience with your packages"
        para="Download Cargodealer and come start managing your packages with us."
        img={Phones1}
      />
      <Questions bgc={{ zIndex: 2 }} />
      <Footer />
    </div>
  );
}

export default Pickup;
