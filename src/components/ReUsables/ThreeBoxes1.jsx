import React from "react";
import Delivery1 from "../../images/delivery-icon.svg";
import Money2 from "../../images/money2-icon.svg";
import Smile from "../../images/smile-icon.svg";

function BoxHelper({ icon, title, para }) {
  return (
    <div className="box-helper">
      <img src={icon} alt="" />
      <h3 className="box-helper__title">{title}</h3>
      <p className="box-helper__para">{para}</p>
    </div>
  );
}

function ThreeBoxes1({ bgc, title }) {
  return (
    <div className="three-boxes" style={bgc}>
      <h2 className="three-boxes__title">{title}</h2>
      <div className="three-boxes__row">
        <div className="three-boxes__row--2">
          <BoxHelper
            icon={Delivery1}
            title="Dealers on Demand"
            para="Request a pickup and have one of our elite dealers ready to handle your shipment."
          />
          <BoxHelper
            icon={Money2}
            title="Budget-Friendly Pricing"
            para="We offer the best shipping deals and easiest payment solution Nationwide."
          />
        </div>
        <BoxHelper
          icon={Smile}
          title="Stress-Free Shipments"
          para="Tap and let our dealer save you the stress of moving your items."
        />
      </div>
    </div>
  );
}

export default ThreeBoxes1;
