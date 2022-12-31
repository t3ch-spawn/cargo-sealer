import React from "react";
import AboutTeam from "../../images/about-team.png";

function LongBottomPara() {
  return (
    <>
      <p>
        We are a team of engineers, entrepreneurs, designers and artists working
        together with a singular mission of building a new and better future of
        successful and permission-less entrepreneurship for everyone.
        <br /> <br />
        If you run a business or ever decide to do so, we are here to support
        you.
      </p>
    </>
  );
}

function AboutBottom() {
  return (
    <div className="about-bottom">
      <div className="about-bottom__imgContainer">
        <img src={AboutTeam} alt="" />
      </div>

      <div className="about-bottom__typography">
        <div className="about-bottom__left">
          <p className="about-bottom__subtitle">The Team</p>
          <h3 className="about-bottom__title">
            The awesome people behind the scenes
          </h3>
        </div>

        <div className="about-bottom__right">
          <small className="about-bottom__para">
            <LongBottomPara />
          </small>
        </div>
      </div>
    </div>
  );
}

export default AboutBottom;
