import React from "react";

import "./IntroSection.scss";

const IntroSection = (props) => {
  return (
    <div className="IntroSection section">
      <div className="intro">
        <span id="logoInlinePos"></span>
        <h1>Hi, I'm Jon Shamir</h1>
        <p>
          I recently graduated from a 5-year program combining computer science
          & design. My interests lie at the intersection of technology and art:
          graphics, typography, machine learning, generative art, data viz and
          more.
        </p>
        <p>
          I have experience with various technologies and mediums. I love
          working on projects that combine different fields and use technology
          in new and interesting ways. I am inspired by nature and have a
          special affinity for plants 🌱
        </p>
      </div>
    </div>
  );
};

export default IntroSection;
