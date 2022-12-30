import React from "react";
import NavIcon from "../../images/Cargo-Dealer-Logo.svg";
import Arrow from "../../images/arrow.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__icon">
        <Link to="/">
          <img src={NavIcon} alt="Logo" />
        </Link>
      </div>

      <ul className="nav__list">
        <li className="nav__item">
          Partner <img src={Arrow} alt="" />
        </li>
        <li className="nav__item">
          Products <img src={Arrow} alt="" />
        </li>
        <li className="nav__item">
          Company <img src={Arrow} alt="" />
        </li>
        <li className="nav__item">
          Support <img src={Arrow} alt="" />
        </li>
      </ul>

      <div className="nav__cta">
        <a href="#appInstall" className="nav__cta__link">
          Get Started
        </a>
      </div>

      <div className="nav__dropDown nav__dropDown--partner"></div>
      <div className="nav__dropDown nav__dropDown--products"></div>
      <div className="nav__dropDown nav__dropDown--company"></div>
      <div className="nav__dropDown nav__dropDown--support"></div>
    </nav>
  );
}

export default Navbar;
