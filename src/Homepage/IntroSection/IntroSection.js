import React from "react";

import "./IntroSection.scss";

const IntroSection = (props) => {
  return (
    <div className="IntroSection section">
      <div className="intro">
        <span id="logoInlinePos"></span>
        <h1>Hi, I'm Jon Shamir</h1>
        <p>
          I'm a designer & developer. My interests include computer graphics,
          data visualization, web technologies and machine learning.
        </p>
        <p>Currently building spatial interactions for Spacetop.</p>
      </div>
    </div>
  );
};

export default IntroSection;
