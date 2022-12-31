import React from "react";
import NavIcon from "../../images/Cargo-Dealer-Logo.svg";
import Arrow from "../../images/arrow.svg";
import { Link } from "react-router-dom";

function Navbar() {
  let dropDown1 = "nav__dropDown";
  let dropDown2 = "nav__dropDown";
  let dropDown3 = "nav__dropDown";
  let dropDown4 = "nav__dropDown";

  const handleDropDown1 = () => {
    if (dropDown1 === "nav__dropDown") {
      dropDown1 = "nav__dropDown active";
    } else {
      dropDown1 = "nav__dropDown";
    }

    console.log(dropDown1);
  };
  const handleDropDown2 = () => {
    if (dropDown2 === "nav__dropDown") {
      dropDown2 = "nav__dropDown active";
    } else {
      dropDown2 = "nav__dropDown";
    }
  };
  const handleDropDown3 = () => {
    if (dropDown3 === "nav__dropDown") {
      dropDown3 = "nav__dropDown active";
    } else {
      dropDown3 = "nav__dropDown";
    }
  };
  const handleDropDown4 = () => {
    dropDown4 = "nav__dropDown active";

    console.log(dropDown4);

    // if (dropDown4 === "nav__dropDown") {
    //   dropDown4 = "nav__dropDown active";
    // } else {
    //   dropDown4 = "nav__dropDown";
    // }
  };

  return (
    <div className="navigation">
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
            <img src={Arrow} alt="" />
          </li>

          <li className="nav__item" onClick={handleDropDown2}>
            <a className="nav__link">Products</a>
            <img src={Arrow} alt="" />
          </li>

          <li className="nav__item" onClick={handleDropDown3}>
            <a className="nav__link">Company</a>
            <img src={Arrow} alt="" />
          </li>

          <li className="nav__item" onClick={handleDropDown4}>
            <small className="nav__link ">Support</small>
            <img src={Arrow} alt="" />
          </li>
        </ul>

        <div className="nav__cta">
          <Link to="/downloadpage" className="nav__cta-link">
            Get Started
          </Link>
        </div>
      </nav>

      <div className={dropDown1}></div>
      <div className={dropDown2}></div>
      <div className={dropDown3}></div>
      <div className={dropDown4}></div>
    </div>
  );
}

export default Navbar;
