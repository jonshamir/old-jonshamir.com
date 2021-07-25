import React from "react";

import "./IntroSection.scss";

const IntroSection = (props) => {
  return (
    <div className="IntroSection section">
      <div className="intro">
        <span id="logoInlinePos"></span>
        <h1>Hi, I'm Jon Shamir</h1>
        <p>
          My interests lie at the intersection of technology and visual arts:
          computer graphics, machine learning, data visualization and more.
        </p>
        <p>
          I have more than a decade of professional experience with various
          technologies and mediums. Mostly I love working on projects that
          combine different fields and use technology in new and interesting
          ways.
        </p>
      </div>
    </div>
  );
};

export default IntroSection;
