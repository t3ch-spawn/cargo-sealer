import React from "react";
import NavIcon from "../../images/Cargo-Dealer-Logo.svg";
import Arrow from "../../images/arrow.svg";
import { Link } from "react-router-dom";
import NavBox from "../../images/nav-box.svg";
import NavAddress from "../../images/nav-address.svg";
import NavCart from "../../images/nav-cart.svg";
import NavNews from "../../images/nav-news.svg";
import NavFlag from "../../images/nav-flag.svg";
import NavGear from "../../images/nav-gear.svg";
import Nav2Users from "../../images/nav-2-users.svg";
import Nav1User from "../../images/nav-1-user.svg";
import NavDealer from "../../images/nav-dealer.svg";
import NavVendor from "../../images/nav-vendor.svg";
import NavContact from "../../images/nav-contact.svg";

function Navbar({ ctaWord }) {
  const handleLinks = () => {
    const dropDowns = document.querySelectorAll(".nav__dropDown");
    const arrows = document.querySelectorAll(".nav__arrow");
    const overlay = document.querySelector(".overlay");
    overlay.classList.remove("active");

    dropDowns.forEach((drop) => {
      drop.classList.remove("active");
    });
    arrows.forEach((drop) => {
      drop.classList.remove("active");
    });
  };

  // component helping to build nav
  function NavBoxHelper({ link, para, title, icon }) {
    return (
      <Link
        className="nav-helper nav-helper__link"
        onClick={handleLinks}
        to={link}
      >
        <img src={icon} alt="" />

        <span className="nav-helper__link-container">
          <p className="nav-helper__title">{title}</p>
          <p className="nav-helper__para">{para}</p>
        </span>
      </Link>
    );
  }

  const handleOverlay = () => {
    const dropDowns = document.querySelectorAll(".nav__dropDown");
    const arrows = document.querySelectorAll(".nav__arrow");
    const overlay = document.querySelector(".overlay");
    overlay.classList.remove("active");

    dropDowns.forEach((drop) => {
      drop.classList.remove("active");
    });
    arrows.forEach((drop) => {
      drop.classList.remove("active");
    });
  };

  const handleDropDown1 = () => {
    //toggle the dropDown1 class
    let dropDown1 = document.getElementById("dropdown1");
    let dropDown2 = document.getElementById("dropdown2");
    let dropDown3 = document.getElementById("dropdown3");
    let dropDown4 = document.getElementById("dropdown4");
    let arrow1 = document.getElementById("arrow-1");
    let arrow2 = document.getElementById("arrow-2");
    let arrow3 = document.getElementById("arrow-3");
    let arrow4 = document.getElementById("arrow-4");
    const overlay = document.querySelector(".overlay");

    // functionality of drop downs and arrows
    dropDown1.classList.toggle("active");
    dropDown2.classList.remove("active");
    dropDown3.classList.remove("active");
    dropDown4.classList.remove("active");
    arrow1.classList.toggle("active");
    arrow2.classList.remove("active");
    arrow3.classList.remove("active");
    arrow4.classList.remove("active");

    // functionality of overlay

    if (
      dropDown1.classList.contains("active") ||
      dropDown2.classList.contains("active") ||
      dropDown4.classList.contains("active") ||
      dropDown3.classList.contains("active")
    ) {
      overlay.classList.add("active");
    } else {
      overlay.classList.remove("active");
    }
  };

  // FUNCTION 2
  const handleDropDown2 = () => {
    let dropDown1 = document.getElementById("dropdown1");
    let dropDown2 = document.getElementById("dropdown2");
    let dropDown3 = document.getElementById("dropdown3");
    let dropDown4 = document.getElementById("dropdown4");
    let arrow1 = document.getElementById("arrow-1");
    let arrow2 = document.getElementById("arrow-2");
    let arrow3 = document.getElementById("arrow-3");
    let arrow4 = document.getElementById("arrow-4");
    const overlay = document.querySelector(".overlay");

    // functionality of drop downs and arrows
    dropDown1.classList.remove("active");
    dropDown2.classList.toggle("active");
    dropDown3.classList.remove("active");
    dropDown4.classList.remove("active");
    arrow1.classList.remove("active");
    arrow2.classList.toggle("active");
    arrow3.classList.remove("active");
    arrow4.classList.remove("active");

    // functionality of overlay

    if (
      dropDown1.classList.contains("active") ||
      dropDown2.classList.contains("active") ||
      dropDown4.classList.contains("active") ||
      dropDown3.classList.contains("active")
    ) {
      overlay.classList.add("active");
    } else {
      overlay.classList.remove("active");
    }
  };
  const handleDropDown3 = () => {
    let dropDown1 = document.getElementById("dropdown1");
    let dropDown2 = document.getElementById("dropdown2");
    let dropDown3 = document.getElementById("dropdown3");
    let dropDown4 = document.getElementById("dropdown4");
    let arrow1 = document.getElementById("arrow-1");
    let arrow2 = document.getElementById("arrow-2");
    let arrow3 = document.getElementById("arrow-3");
    let arrow4 = document.getElementById("arrow-4");
    const overlay = document.querySelector(".overlay");

    // functionality of drop downs and arrows
    dropDown1.classList.remove("active");
    dropDown2.classList.remove("active");
    dropDown3.classList.toggle("active");
    dropDown4.classList.remove("active");
    arrow1.classList.remove("active");
    arrow2.classList.remove("active");
    arrow3.classList.toggle("active");
    arrow4.classList.remove("active");

    // functionality of overlay

    if (
      dropDown1.classList.contains("active") ||
      dropDown2.classList.contains("active") ||
      dropDown4.classList.contains("active") ||
      dropDown3.classList.contains("active")
    ) {
      overlay.classList.add("active");
    } else {
      overlay.classList.remove("active");
    }
  };
  const handleDropDown4 = () => {
    let dropDown1 = document.getElementById("dropdown1");
    let dropDown2 = document.getElementById("dropdown2");
    let dropDown3 = document.getElementById("dropdown3");
    let dropDown4 = document.getElementById("dropdown4");
    let arrow1 = document.getElementById("arrow-1");
    let arrow2 = document.getElementById("arrow-2");
    let arrow3 = document.getElementById("arrow-3");
    let arrow4 = document.getElementById("arrow-4");
    const overlay = document.querySelector(".overlay");

    // functionality of drop downs and arrows
    dropDown1.classList.remove("active");
    dropDown2.classList.remove("active");
    dropDown3.classList.remove("active");
    dropDown4.classList.toggle("active");
    arrow1.classList.remove("active");
    arrow2.classList.remove("active");
    arrow3.classList.remove("active");
    arrow4.classList.toggle("active");

    // functionality of overlay
    if (
      dropDown1.classList.contains("active") ||
      dropDown2.classList.contains("active") ||
      dropDown4.classList.contains("active") ||
      dropDown3.classList.contains("active")
    ) {
      overlay.classList.add("active");
    } else {
      overlay.classList.remove("active");
    }
  };

  return (
    <div className="navigation">
      <div className="overlay" onClick={handleOverlay}></div>
      <Link to="/">
        <img src={NavIcon} alt="" className="nav__icon--mobile" />
      </Link>

      <input type="checkbox" className="nav__checkbox" id="nav-toggle" />

      <label htmlFor="nav-toggle" className="nav__button">
        <span className="nav__burger"></span>
      </label>

      {/* <div className="nav__background"></div> */}

      <nav className="nav">
        <div className="nav__icon">
          <Link to="/">
            <img src={NavIcon} alt="Logo" />
          </Link>
        </div>

        <ul className="nav__list">
          <li className="nav__item" onClick={handleDropDown1}>
            <a className="nav__link">Partner</a>
            <img src={Arrow} alt="" className="nav__arrow" id="arrow-1" />
          </li>

          <li className="nav__item" onClick={handleDropDown2}>
            <a className="nav__link">Products</a>
            <img src={Arrow} alt="" className="nav__arrow" id="arrow-2" />
          </li>

          <li className="nav__item" onClick={handleDropDown3}>
            <a className="nav__link">Company</a>
            <img src={Arrow} alt="" className="nav__arrow" id="arrow-3" />
          </li>

          <li className="nav__item" onClick={handleDropDown4}>
            <small className="nav__link ">Support</small>
            <img src={Arrow} alt="" className="nav__arrow" id="arrow-4" />
          </li>
        </ul>

        <div className="nav__cta">
          <Link to="/downloadpage" className="nav__cta-link">
            {ctaWord}
          </Link>
        </div>
      </nav>

      {/* DROP DOWN SECTION */}
      {/* ////////////////////////////////////// */}
      <div className="nav__dropDown" id="dropdown1">
        <div className="nav__dropDown__heading">
          <h3 className="nav__dropDown__title">Partner</h3>
          <p className="nav__dropDown__para">Join our working ecosystem</p>
          <hr className="nav__line" />
        </div>

        <div className="nav-helper__container">
          <NavBoxHelper
            icon={NavDealer}
            title="Dealer"
            para="Start earning money driving for us."
            functionName={handleLinks}
            link="/dealer"
          />
          <NavBoxHelper
            icon={NavVendor}
            title="Vendor"
            para="Sell your products on our Marketplace."
            link="/vendor"
          />
        </div>
      </div>

      {/* //////////////////////////// */}
      <div className="nav__dropDown" id="dropdown2">
        <div className="nav__dropDown__heading">
          <h3 className="nav__dropDown__title">Products</h3>
          <p className="nav__dropDown__para">What we provide as a company</p>
          <hr className="nav__line" />
        </div>

        <div className="nav-helper__container">
          <NavBoxHelper
            icon={NavBox}
            title="Ship"
            para="Request a pickup in minutes."
          />
          <NavBoxHelper
            icon={NavCart}
            title="Shop"
            para="Shop any products in the Marketplace."
            link="/shop"
          />
          <NavBoxHelper
            icon={NavAddress}
            title="Freight"
            para="Here for the long run? Move everything."
          />
        </div>
      </div>

      {/* ///////////////////////////// */}
      <div className="nav__dropDown" id="dropdown3">
        <div className="nav__dropDown__heading">
          <h3 className="nav__dropDown__title">Company</h3>
          <p className="nav__dropDown__para">Get to know about us</p>
          <hr className="nav__line" />
        </div>

        <div className="nav-helper__container">
          <NavBoxHelper
            icon={NavFlag}
            title="About Us"
            para="Learn about our story and our mission statement."
            link="/about"
          />
          <NavBoxHelper
            icon={NavGear}
            title="Our Services"
            para="Find out about what we provide as a company."
            link="/services"
          />
          <NavBoxHelper
            icon={NavNews}
            title="News"
            para="News and writings, press releases, and resources."
          />
          <NavBoxHelper
            icon={Nav2Users}
            title="Careers"
            para="We’re always looking for talented people. Join us!"
          />
        </div>
      </div>

      {/* //////////////////////// */}
      <div className="nav__dropDown" id="dropdown4">
        <div className="nav__dropDown__heading">
          <h3 className="nav__dropDown__title">Support</h3>
          <p className="nav__dropDown__para">
            Have questions or want to get in touch?
          </p>
          <hr className="nav__line" />
        </div>

        <div className="nav-helper__container">
          <NavBoxHelper
            icon={Nav1User}
            title="Users"
            para="Do you have questions about requesting pickups?"
          />
          <NavBoxHelper
            icon={NavDealer}
            title="Dealers"
            para="Do you have questions about making deliveres?"
            link="/dealer"
          />
          <NavBoxHelper
            icon={NavVendor}
            title="Vendors"
            para="Do you have questions about selling your items?"
            link="/vendor"
          />
          <NavBoxHelper
            icon={NavContact}
            title="Contact Us"
            para="Want to get in touch?"
            link="contact"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
