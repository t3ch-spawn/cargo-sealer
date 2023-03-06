import React from "react";
import Footer from "../ReUsables/Footer";
import Navbar from "../ReUsables/Navbar";
import ContactForm from "./ContactForm";
import ContactImg from "../../images/contact-us.png";
import ContactAddress from "../../images/contact-address.svg";
import ContactMail from "../../images/contact-mail.svg";
import ContactPhone from "../../images/contact-phone.svg";

function ContactIndex() {
  return (
    <div data-scroll-section>
      <Navbar ctaWord="Request Pickup" />
      <div className="contact">
        <div className="contact__left">
          <div className="contact__heading">
            <h2 className="contact__title">Contact us</h2>
            <p className="contact__para">
              Have something on your mind? Say Hi and come tell us all about it.
            </p>
          </div>

          <ContactForm />

          <div className="contact__details">
            <div className="contact__details-item-container">
              <img src={ContactAddress} alt="" />
              <span>
                <p className="contact__details-item-1">Address</p>
                <p className="contact__details-item-2">
                  1365 Wiley Road, suite 142, Schaumburg, IL 60173
                </p>
              </span>
            </div>

            <div className="contact__details-item-container">
              <img src={ContactPhone} alt="" />
              <span>
                <p className="contact__details-item-1">Call us</p>
                <p className="contact__details-item-2">+1 85 720 43 170</p>
              </span>
            </div>

            <div className="contact__details-item-container">
              <img src={ContactMail} alt="" />
              <span>
                <p className="contact__details-item-1">E-mail</p>
                <p className="contact__details-item-2">
                  info@cargodealerinc.com
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="contact__right">
          <div className="contact__imgContainer">
            <img src={ContactImg} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactIndex;
