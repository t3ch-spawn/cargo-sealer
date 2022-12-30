import React from "react";
import Arrow from "../../images/arrow.svg";
import Logo from "../../images/footer-logo.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        <img src={Logo} alt="" className="footer__icon" />

        <p>Cargodealer Inc 2022</p>
        <small>Terms & Conditions | Privacy Policy</small>
      </div>
      <div className="footer__right">
        <ul className="footer__list">
          {/* LIST ONE */}
          <li className="footer__item footer__item--big">
            <Link className="footer__link">Partner with us</Link>
          </li>
          <li className="footer__item">
            <Link to="/vendor" className="footer__link">
              Become a Vendor
            </Link>
          </li>
          <li className="footer__item">
            <Link to="/dealer" className="footer__link">
              Become a Dealer
            </Link>
          </li>
          <li className="footer__item">
            <a href="" className="footer__link">
              Join us as a Company
            </a>
          </li>
        </ul>

        {/* LIST TWO */}
        <ul className="footer__list">
          <div className="footer__item footer__item--big">
            <Link to="/services" className="footer__link">
              Our Services
            </Link>
          </div>
          <div className="footer__item">
            <Link to="/pickup" className="footer__link">
              Pickup & Delivery
            </Link>
          </div>
          <div className="footer__item">
            <Link to="/shop" className="footer__link">
              The Marketplace
            </Link>
          </div>
          <div className="footer__item">
            <a href="" className="footer__link">
              Sign up as a Company
            </a>
          </div>
        </ul>

        {/* LIST THREE */}
        <ul className="footer__list">
          <div className="footer__item footer__item--big">
            <a href="" className="footer__link">
              Company
            </a>
          </div>
          <div className="footer__item">
            <a href="" className="footer__link">
              About Us
            </a>
          </div>
          <div className="footer__item">
            <a href="" className="footer__link">
              FAQs
            </a>
          </div>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
