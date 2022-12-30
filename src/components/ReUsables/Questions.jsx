import React from "react";

function Questions({ bgc }) {
  return (
    <div className="questions" style={bgc}>
      <div className="questions__box">
        <div className="questions__typography">
          <h3>Still have questions?</h3>
          <p>
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
        </div>

        <div className="questions__cta">
          <a href="" className="questions__cta-link">
            See FAQ
          </a>
        </div>
      </div>
    </div>
  );
}

export default Questions;
