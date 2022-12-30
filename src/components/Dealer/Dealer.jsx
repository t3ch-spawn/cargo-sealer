import React from "react";
import Navbar from "../ReUsables/Navbar";
import Footer from "../ReUsables/Footer";
import AppDownload from "../ReUsables/AppDownload";
import Questions from "../ReUsables/Questions";
import Download2 from "../ReUsables/Download2";
import ThreeBoxes2 from "../ReUsables/ThreeBoxes2";
import Phones2 from "../../images/phones-2.png";
import Ride from "../../images/Order-ride.png";

function Dealer() {
  return (
    <div>
      <Navbar />
      <Download2
        bgc={{ zIndex: 5 }}
        title="Start making pickups with  "
        titlesub="Cargodealer"
        para="Fund your wallet and start delivering packages with ease."
        img={Ride}
        titlestyle2={{ display: "none" }}
      />
      <ThreeBoxes2 bgc={{ zIndex: 4 }} title="Why Drive for Cargodealer?" />
      <AppDownload
        bgc={{ backgroundColor: "#fcfdfc", zIndex: 3 }}
        title="Work on your own time, and earn at your own pace."
        para="Download Cargodealer’s driver app and start cashing out each week with us."
        img={Phones2}
      />
      <Questions bgc={{ zIndex: 2 }} />
      <Footer />
    </div>
  );
}

export default Dealer;
