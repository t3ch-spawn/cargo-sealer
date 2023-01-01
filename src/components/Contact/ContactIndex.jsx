import React from "react";
import Footer from "../ReUsables/Footer";
import Navbar from "../ReUsables/Navbar";
import ContactForm from "./ContactForm";
import ContactImg from "../../images/contact-us.png";

function ContactIndex() {
  return (
    <>
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

          <div className="contact__details"></div>
        </div>
        <div className="contact__right">
          <div className="contact__imgContainer">
            <img src={ContactImg} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactIndex;
