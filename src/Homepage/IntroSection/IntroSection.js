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
          graphics, typography, machine learning, generative art, data viz and
          more.
        </p>
        <p>
          I have more than a decade of professional experience with various
          technologies and mediums. I've previously worked for small and
          medium-sized startups, as a freelancer and on academic projects.
        </p>
      </div>
    </div>
  );
};

export default IntroSection;
