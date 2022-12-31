import React from "react";
import Globe from "../../images/Globe.png";

function ServicesHero() {
  return (
    <div className="service-hero">
      <p className="service-hero__subtitle">OUR SERVICES</p>
      <h1 className="service-hero__title">
        Unbeatable Air, Ocean & Warehousing Logistics Support
      </h1>
      <p className="service-hero__para">
        We take pride in being regarded as one of the most reliable and
        affordable logistic and warehousing service providers in the country.
      </p>

      <div className="service-hero__img">
        <img src={Globe} alt="" />
      </div>
    </div>
  );
}

export default ServicesHero;
