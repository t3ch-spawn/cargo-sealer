import React from "react";
import Delivery from "../../images/about-delivery.png";

function LongPara() {
  return (
    <>
      <p>
        We take pride in being regarded as one of the most reliable and
        affordable logistic and warehousing service providers in the country.
        <br /> <br />
        As a third party logistic service provider, we excel at a range of
        logistic services, which includes trucking services, warehousing
        services, logistic services, and a range of other ancillary services.
        <br /> <br />
        We have years of experience in the business of logistics, warehousing,
        distribution, trucking and supply chain management services, and aim to
        provide our clients with convenience, reliability and affordability
        through our premium logistic services.
      </p>
    </>
  );
}

function AboutHero() {
  return (
    <div className="about-hero">
      <div className="about-hero__heading">
        <p className="about-hero__subtitle">About US</p>
        <h1 className="about-hero__title">
          Achieving excellence in logistics through innovation & commitment.
        </h1>
        <p className="about-hero__para">
          We have the expertise and flexibility to help you with any of your
          logistics needs.
        </p>
      </div>

      <div className="about-hero__typography">
        <div className="about-hero__imgContainer">
          <img src={Delivery} alt="" />
        </div>

        <section className="about-hero__longpara">
          <LongPara />
        </section>
      </div>
    </div>
  );
}

export default AboutHero;
