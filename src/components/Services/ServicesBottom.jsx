import React from "react";
import Flash from "../../images/flash.svg";
import Desktop from "../../images/desktop.svg";
import People from "../../images/people.svg";
import Confidence from "../../images/confidence.png";

function BottomHelper({ icon, title, para }) {
  return (
    <div className="bottom-helper">
      <img className="bottom-helper__icon" src={icon} alt="" />

      <h3 className="bottom-helper__title">{title}</h3>

      <p className="bottom-helper__para">{para}</p>
    </div>
  );
}

function ServicesBottom() {
  return (
    <div className="service-bottom">
      <h2 className="service-bottom__title">Why Cargodealer Freight?</h2>

      <div className="service-bottom__row">
        {" "}
        <div className="bottom-helper__container">
          <BottomHelper
            icon={Desktop}
            title="Innovative Technology"
            para="We are Backed by innovative technology and a dedicated team of logistics experts, one of the largest logistics and transportation networks in the world."
          />
          <BottomHelper
            icon={People}
            title="The Best Opportunities"
            para="We combine the largest network of digitally-enabled carriers with industry-leading logistics technology. Our Platform connects shippers and carriers with the best opportunities and options to move goods."
          />
          <BottomHelper
            icon={Flash}
            title="Instant Networking"
            para="Find and book freight in a short time. Expand your capacity with access to a trusted network of carriers, booked online with just a few taps, We are available 24/7"
          />
        </div>
        <div className="service-bottom__imgContainer">
          <img src={Confidence} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ServicesBottom;
