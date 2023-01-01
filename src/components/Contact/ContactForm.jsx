import React from "react";

function ContactForm() {
  function handleValidation(e) {
    e.preventDefault();
    checkInput();

    function isEmail(email) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }

    function checkInput() {
      const nameValue = document.querySelector("#name").value.trim();
      const messageValue = document.querySelector("#message").value.trim();
      const emailValue = document.querySelector("#email").value.trim();
      const errorMsg1 = document.querySelector("#error-msg-1");
      const errorMsg2 = document.querySelector("#error-msg-2");
      const errorMsg3 = document.querySelector("#error-msg-3");

      // validation for name
      if (nameValue === "") {
        errorMsg1.classList.add("active");
      } else {
        errorMsg1.classList.remove("active");
      }

      // validation for message
      if (messageValue === "") {
        errorMsg3.classList.add("active");
      } else {
        errorMsg3.classList.remove("active");
      }

      // validation for email

      if (emailValue === "") {
        errorMsg2.classList.add("active");

        errorMsg2.textContent = "Email cannot be empty";
      } else if (!isEmail(emailValue)) {
        errorMsg2.classList.add("active");

        errorMsg2.textContent = "This is not a valid email";
      } else {
        errorMsg2.classList.remove("active");
      }
    }
  }

  return (
    <form action="" onSubmit={handleValidation} className="contact__form">
      <div className="contact__form-top">
        <div className="contact__form-input-group">
          <input
            type="text"
            className="contact__form-input"
            id="name"
            placeholder="Wade Warren"
          />
          <small className="error-msg" id="error-msg-1">
            name cannot be empty
          </small>
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
          <small className="error-msg" id="error-msg-2">
            email cannot be empty
          </small>
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
          <small className="error-msg" id="error-msg-3">
            message cannot be empty
          </small>
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
