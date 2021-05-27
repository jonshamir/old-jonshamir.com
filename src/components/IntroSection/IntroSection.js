import React from "react";
import JonLogo from "../JonLogo/JonLogo";

import "./IntroSection.scss";

class IntroSection extends React.Component {
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.handleScroll);
  }

  handleResize(e) {}

  handleScroll = () => {
    const currScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (currScroll > 100) {
      console.log("hey");
    }
  };

  render() {
    return (
      <div className="IntroSection section">
        <div className="intro">
          <JonLogo />
          <h1>Hi! I'm Jon Shamir</h1>
          <p>
            I am interested in the intersection of art, science and design. I
            believe that design is a powerful tool that has the ability to
            change perceptions and reveal insights. I enjoy working on projects
            that combine different disciplines into something greater than the
            sum of its parts!
          </p>
        </div>
      </div>
    );
  }
}

export default IntroSection;
