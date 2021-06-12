import React from "react";

import "./IntroSection.scss";

const IntroSection = (props) => {
  return (
    <div className="IntroSection section">
      <div className="intro">
        <span id="logoInlinePos"></span>
        <h1>Hi! I'm Jon Shamir</h1>
        <p>
          I am interested in the intersection of art, design and technology. I
          believe that design is a powerful tool that has the ability to change
          perceptions and reveal insights. I enjoy working on projects that
          combine different ideas & disciplines into something greater than the
          sum of its parts!
        </p>
      </div>
    </div>
  );
};

export default IntroSection;
