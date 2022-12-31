import React from "react";
import Partners from "../../images/partners.png";
import Avatar1 from "../../images/avatar-1.png";
import Avatar2 from "../../images/avatar-2.png";
import Avatar3 from "../../images/avatar-3.png";
import Avatar4 from "../../images/avatar-4.png";

function TestimonialHelper({ para, avatar, name }) {
  return (
    <div className="testimonial">
      <p className="testimonial__para">{para}</p>

      <span className="testimonial__user">
        <img className="testimonial__avatar" src={avatar} alt="" />

        <p className="testimonial__name">{name}</p>
      </span>
    </div>
  );
}

function HomeBottom() {
  return (
    <div className="home-bottom">
      <div className="home-bottom__typography">
        <h2 className="home-bottom__title">OUR PARTNERS</h2>
        <p className="home-bottom__para">
          We’ve partnerd with a couple of companies to help them make
          deliveries.
        </p>
      </div>

      <div className="home-bottom__partners">
        <img src={Partners} alt="" />
      </div>

      <div className="testimonial__container">
        <div className="testimonial__container--1">
          <TestimonialHelper
            para=" “Cargodealer is the best and has been super helpful all this time.”"
            avatar={Avatar1}
            name="Gabin Yarigo"
          />
          <TestimonialHelper
            para=" “Very quick and easy! Great service, thanks!”
            "
            avatar={Avatar2}
            name="Esther Howard"
          />
        </div>

        <div className="testimonial__container--2">
          <TestimonialHelper
            para="“Really glad to have used Cargodealer truly an invaluable experience.”
            "
            avatar={Avatar3}
            name="Guy Hawkins"
          />
          <TestimonialHelper
            para="“Just came back to home and should say that it is definitely a great experience.”
            "
            avatar={Avatar4}
            name="Jenny Wilson"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeBottom;
