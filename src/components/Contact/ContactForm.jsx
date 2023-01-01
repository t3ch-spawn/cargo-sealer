import React from "react";

function ContactForm() {
  return (
    <form action="" className="contact__form">
      <div className="contact__form-top">
        <div className="contact__form-input-group">
          <input
            type="text"
            className="contact__form-input"
            id="name"
            placeholder="Wade Warren"
          />
          <small className="error-msg">email cannot be empty</small>
          <label htmlFor="name" className="contact__form-label">
            Full Name
          </label>
        </div>

        {/*input 2 */}
        <div className="contact__form-input-group">
          <input
            type="email"
            className="contact__form-input"
            id="email"
            placeholder="WadeWarren@gmail.com"
          />
          <label htmlFor="email" className="contact__form-label">
            Email Address
          </label>
        </div>
      </div>

      <div className="contact__form-bottom">
        <div className="contact__form-input-group">
          <textarea
            type="text"
            className="contact__form-input contact__form-input--long"
            id="message"
            placeholder="Type your message"
          />
          <label htmlFor="message" className="contact__form-label">
            Message
          </label>
        </div>
      </div>

      <button className="contact__form__cta-link">Send Message</button>
    </form>
  );
}

export default ContactForm;
