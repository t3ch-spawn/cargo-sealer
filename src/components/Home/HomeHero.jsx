import React from "react";
import UnionLight from "../../images/Union-light.png";
import AddressBro1 from "../../images/Address-bro-1.png";

function HomeHero() {
  return (
    <div className="home-hero">
      {/* <div className="home-hero__bg-img">
        <img src={UnionLight} alt="" />
      </div> */}

      <h1 className="home-hero__title">Fast Shipments To Anywhere</h1>
      <p className="home-hero__para">
        Shipping Made Easy! Send Items to anywhere in the world. In one tap of a
        button, Get a pick up in minutes. Don't Stress!
      </p>
      <div className="home-hero__btnContainer">
        <a href="" className="home-hero__btn home-hero__btn--1">
          Request Pickup
        </a>
        <a href="" className="home-hero__btn home-hero__btn--2">
          Become a Dealer
        </a>
      </div>

      <div className="home-hero__img">
        <img src={AddressBro1} alt="" />
      </div>
    </div>
  );
}

export default HomeHero;
