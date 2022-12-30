import React from "react";
import { useRef, useEffect } from "react";

function Download2({
  bgc,
  title,
  titlesub,
  titlepart1,
  titlepart2,
  titlepart3,
  titlestyle1,
  titlestyle2,
  para,
  img,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el2 = ref.current;

    // window.intlTelInput(el2, {});
  }, []);

  return (
    <div className="download2" style={bgc}>
      <div className="download2__imgContainer">
        <img src={img} alt="" />
      </div>
      <div className="download2__typography">
        <h1
          className="download2__title download2__title--1"
          style={titlestyle1}
        >
          {title} <span>{titlesub}</span>
        </h1>

        <h1
          className="download2__title download2__title--2"
          style={titlestyle2}
        >
          {titlepart1} <span>{titlepart2}</span> {titlepart3}
        </h1>

        <p className="download2__para">{para}</p>
        <div className="download2__input-group">
          <input
            ref={ref}
            type="number"
            className="download2__input"
            id="phone"
            placeholder="(+234) 822 000 4944"
          />
          <label htmlFor="phone" className="download2__label">
            Mobile number
          </label>
        </div>

        <div className="download2__cta">
          <a href="" className="download2__cta-link">
            Download App
          </a>
        </div>
      </div>
    </div>
  );
}

export default Download2;
