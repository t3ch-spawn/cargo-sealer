import React from "react";
import AddressBro1 from "../../images/Address-bro-1.png";
import { Link } from "react-router-dom";

function HomeHero() {
  return (
    <div className="home-hero">
      <h1 className="home-hero__title">Fast Shipments To Anywhere</h1>
      <p className="home-hero__para">
        Shipping Made Easy! Send Items to anywhere in the world. In one tap of a
        button, Get a pick up in minutes. Don't Stress!
      </p>
      <div className="home-hero__btnContainer">
        <Link to="/pickup" className="home-hero__btn home-hero__btn--1">
          Request Pickup
        </Link>
        <Link to="/dealer" className="home-hero__btn home-hero__btn--2">
          Become a Dealer
        </Link>
      </div>

      <div className="home-hero__img">
        <img src={AddressBro1} alt="" />
      </div>
    </div>
  );
}

export default HomeHero;
