import React from "react";
import NavIcon from "../../images/Cargo-Dealer-Logo.svg";
import Arrow from "../../images/arrow.svg";
import { Link } from "react-router-dom";

function Navbar({ ctaWord }) {
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

      <div className="nav__dropDown" id="dropdown1">
        I AM 1
      </div>
      <div className="nav__dropDown" id="dropdown2">
        I AM 2
      </div>
      <div className="nav__dropDown" id="dropdown3">
        {" "}
        I AM 3
      </div>
      <div className="nav__dropDown" id="dropdown4">
        I AM 4
      </div>
    </div>
  );
}

export default Navbar;
