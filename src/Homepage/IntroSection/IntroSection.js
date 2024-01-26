import React from "react";

import "./IntroSection.scss";

const IntroSection = (props) => {
  return (
    <div className="IntroSection section">
      <div className="intro">
        <span id="logoInlinePos"></span>
        <h1>Hi, I'm Jon Shamir</h1>
        <p>
          My interests lie at the intersection of technology and graphic design:
          computer graphics, data visualization, web technologies and more.
        </p>
        <p>
          Mostly I love working on projects that combine different fields and
          use technology in new and interesting ways. Currently working on
          spatial interactions at Sightful.
        </p>
      </div>
    </div>
  );
};

export default IntroSection;
