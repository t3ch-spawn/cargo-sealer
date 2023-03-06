import React from "react";
import Navbar from "../ReUsables/Navbar";
import Footer from "../ReUsables/Footer";
import AppDownload from "../ReUsables/AppDownload";
import Questions from "../ReUsables/Questions";
import Download2 from "../ReUsables/Download2";
import ThreeBoxes4 from "../ReUsables/ThreeBoxes4";
import Phones3 from "../../images/phones-3.png";
import Ecommerce from "../../images/Ecommerce.png";

function Shop() {
  return (
    <div data-scroll-section>
      <Navbar ctaWord="Request Pickup" />
      <Download2
        bgc={{ zIndex: 5 }}
        titlepart1="Get"
        titlepart2="quality"
        titlepart3="products from vendors"
        para="Browse the catalog and shop any product in the Marketplace."
        img={Ecommerce}
        titlestyle1={{ display: "none" }}
      />
      <ThreeBoxes4 bgc={{ zIndex: 4 }} title="How to earn as a Vendor" />
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

export default Shop;
