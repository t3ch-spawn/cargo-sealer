import React from "react";
import Navbar from "../ReUsables/Navbar";
import Footer from "../ReUsables/Footer";
import AppDownload from "../ReUsables/AppDownload";
import Questions from "../ReUsables/Questions";
import Download2 from "../ReUsables/Download2";
import ThreeBoxes3 from "../ReUsables/ThreeBoxes3";
import Phones3 from "../../images/phones-3.png";
import Catalogue from "../../images/Catalogue-bro.png";

function Vendor() {
  return (
    <div data-scroll-section>
      <Navbar ctaWord="Request Pickup" />
      <Download2
        bgc={{ zIndex: 5 }}
        titlepart1="Make"
        titlepart2="money"
        titlepart3="selling from your phone"
        para="Get paid and earn good money with your vehicle."
        img={Catalogue}
        titlestyle1={{ display: "none" }}
      />
      <ThreeBoxes3
        bgc={{ zIndex: 4 }}
        title="Benefits Of Selling On The Cargodealer"
      />
      <AppDownload
        bgc={{ backgroundColor: "#fcfdfc", zIndex: 3 }}
        title="Join the Cargodealer Marketplace"
        para="Download Cargodealer’s user app and Improve your business by hosting your products on our marketplace."
        img={Phones3}
      />
      {/* <Questions bgc={{ zIndex: 2 }} /> */}
      <Footer />
    </div>
  );
}

export default Vendor;
