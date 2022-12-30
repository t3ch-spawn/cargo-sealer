import React from "react";
import Globe from "../../images/Globe.png";
import FreeShipping from "../../images/Free-shipping.png";
import Logistics from "../../images/Logistics.png";
import NewEntries from "../../images/New-entries.png";
import CheckingBoxes from "../../images/Checking-boxes.png";
import ContainerShip from "../../images/Container-ship.png";
import CurveNormal from "../../images/curve-normal.png";

function ServicesHelper({ className, zIndex, sectionimg, title, para }) {
  return (
    <div className={className} style={zIndex}>
      <div className="servicesMain__imgContainer">
        <img src={sectionimg} alt="" />
      </div>
      <div className="servicesMain__typography">
        <h2 className="servicesMain__subtitle">{title}</h2>
        <p className="servicesMain__para">{para}</p>

        <div className="servicesMain__cta">
          <a href="#" className="servicesMain__cta-link">
            <p> Contact Sales</p>
          </a>
        </div>
      </div>

      {/* <img src={CurveNormal} alt="" /> */}
    </div>
  );
}

function paragraph() {
  return (
    <>
      We are engaging a futuristic approach to warehousing as the Traditional
      warehousing is fast undergoing a transformation driven by a revolution in
      customer expectations, order characteristics and service requirements.
      This trend is fueling a new kind of warehouse that is highly agile,
      extensible, responsive, and optimizes the capabilities of man and machine
      in a newly symbiotic relationship.
      <br /> <br />
      Secondly, warehousing is riding the wave of technology innovation,
      particularly in the physical/mechanical realm. Collaborative robotics,
      augmented reality, autonomous vehicles, sensor technology, and the
      Internet of Things are converging to give birth to something new: the
      smart warehouse
    </>
  );
}

const paraReal = paragraph();

function ServicesBody(bgc) {
  return (
    <div className="services-body" style={bgc}>
      <ServicesHelper
        className="servicesMain servicesMain__normal"
        sectionimg={Logistics}
        title="Haulage"
        para="Shipping at any scale, With the expertise to provide quotes, insights, and optimization strategies, Cargodealer Freight gives you the tools to deliver for your customers. Make your cross-border shipping easier with end-to-end visibility from freight origin to customs clearance and final delivery."
      />
      <ServicesHelper
        className="servicesMain servicesMain__reverse"
        sectionimg={FreeShipping}
        title="Air Freights"
        para="We are a courier and freight solutions service provider. We will provide you with a quote that would not only suit your budget, but would also save you considerable amount of money in the long term. And, we guarantee that."
      />
      <ServicesHelper
        className="servicesMain servicesMain__normal"
        sectionimg={NewEntries}
        title="Courier Services"
        para="The more you know, the better your results. Our warehousing and distribution services are regularly audited and analyzed to ensure that it meets the contemporary business models, and any and all upgrades are made to ensure our services continue to help our clients meet their logistic requirements efficiently."
      />

      <ServicesHelper
        className="servicesMain servicesMain__reverse"
        sectionimg={ContainerShip}
        title="Ocean Frieghts"
        para="When it comes to shipping your packages across the world, there's a lot for you to think about. The most important thing is that you are confident that your goods will reach their destination safely and on time. Our expert team at Courier can advise you on the best delivery method for your particular requirements."
      />

      <ServicesHelper
        className="servicesMain servicesMain__normal"
        sectionimg={CheckingBoxes}
        title="Warehousing Services"
        para={paraReal}
      />
    </div>
  );
}

export default ServicesBody;
