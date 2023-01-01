import React from "react";
import { Link } from "react-router-dom";
import DeliveryBro1 from "../../images/Delivery-address-bro-1.png";
import InNoTimeBro1 from "../../images/In-no-time-bro-1.png";
import Clock from "../../images/clock.svg";
import Flash from "../../images/flash.svg";
import Money from "../../images/moneys.svg";
import Box from "../../images/box.svg";
import User from "../../images/user-tag.svg";

// defining variables
const title1 = "Become a Dealer";
const title2 = "Become a vendor";

const subtitle1 = "Work at your own time, and earn at your own pace.";
const subtitle2 = "Join the Cargodealer Marketplace";

const typo1 =
  "Own a Vehicle? Any Vehicle of any type and size. Become our trusted dealer and Make extra cash, at your own time, Driving for the largest cargo network.";
const typo2 =
  "Shop any items in the Cargodealer Marketplace and have your items delivered to you swiftly.";

const itemTypo1 = "Work on your on time, and earn when you like.";
const itemTypo2 = "Easily make money and cash out whenever you want.";
const itemTypo3 = "Get paid instantly and cashout your earnings every week.";
const itemTypo4 =
  "Enjoy a wide variety of products in one of Nigeria's Largest Virtual Marketplace";
const itemTypo5 = "Pay Instantly and easily from your Cargodealer Wallet.";
const itemTypo6 =
  "Deliver in style. Get your deliveries and pickups at your convenience.";

function BodyHelper({
  className,
  zIndex,
  sectionimg,
  title,
  subtitle,
  para,
  itemimg1,
  itemimg2,
  itemimg3,
  itempara1,
  itempara2,
  itempara3,
  btninfo1,
  btninfo2,
  link1,
  link2,
}) {
  return (
    <div className={className} style={zIndex}>
      <div className="section__imgContainer">
        <img src={sectionimg} alt="" />
      </div>
      <div className="section__typography">
        <p className="section__title">{title}</p>
        <h2 className="section__subtitle">{subtitle}</h2>
        <p className="section__para">{para}</p>
        <div className="section__item-paraContainer">
          <p className="section__item-para section__item-para--1">
            <img src={itemimg1} alt="" />

            {itempara1}
          </p>
          <p className=" section__item-para section__item-para--2">
            <img src={itemimg2} alt="" />

            {itempara2}
          </p>
          <p className=" section__item-para section__item-para--3">
            <img src={itemimg3} alt="" />

            {itempara3}
          </p>
        </div>

        <div className="section__btnContainer">
          <Link to={link1} className="section__btn section__btn--1">
            <p> {btninfo1}</p>
          </Link>
          <Link to={link2} className="section__btn section__btn--2">
            <p> {btninfo2}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

function HomeBody() {
  return (
    <div className="homeBody">
      <BodyHelper
        // bgimg={UnionDark}
        zIndex={{ zIndex: 6, backgroundColor: "#E1EDDB" }}
        className="section section__normal"
        title={title1}
        sectionimg={DeliveryBro1}
        subtitle={subtitle1}
        para={typo1}
        itemimg1={Clock}
        itemimg2={Money}
        itemimg3={Flash}
        itempara1={itemTypo1}
        itempara2={itemTypo2}
        itempara3={itemTypo3}
        btninfo1="Become a Dealer"
        link1="/dealer"
      />
      <BodyHelper
        className="section section__reverse"
        // bgimg={UnionLight}
        zIndex={{ zIndex: 5, backgroundColor: "#fcfdfc" }}
        title={title2}
        sectionimg={InNoTimeBro1}
        subtitle={subtitle2}
        para={typo2}
        itemimg1={Box}
        itemimg2={Money}
        itemimg3={User}
        itempara1={itemTypo4}
        itempara2={itemTypo5}
        itempara3={itemTypo6}
        btninfo1="Become a Vendor"
        btninfo2="Shop Now"
        link1="/vendor"
        link2="/shop"
      />
    </div>
  );
}

export default HomeBody;
