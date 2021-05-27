import React from "react";
import JonLogo from "../JonLogo/JonLogo";

import "./IntroSection.scss";

class IntroSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { logoMinimized: false, logoPosition: [0, 0] };
    this.inlineLogoRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("resize", () => this.updateLogoPosition());
    window.addEventListener("scroll", this.handleScroll);
    this.updateLogoPosition();
  }

  updateLogoPosition = () => {
    // const { x, y } = this.inlineLogoRef.current.getBoundingClientRect();
    const x = this.inlineLogoRef.current.offsetLeft;
    const y = this.inlineLogoRef.current.offsetTop;
    this.setState({ logoPosition: [x - 30, y - 180] });
  };

  handleScroll = () => {
    const currScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const { logoMinimized } = this.state;

    if (currScroll < 10) {
      this.setState({ logoMinimized: false });
    } else if (!logoMinimized) {
      this.setState({ logoMinimized: true });
    }
  };

  render() {
    const { logoMinimized, logoPosition } = this.state;
    const logoTransform = logoMinimized
      ? `scale(0.5)`
      : `scale(1) translate(${logoPosition[0]}px,${logoPosition[1]}px)`;

    return (
      <div className="IntroSection section">
        <div className="intro">
          <div className="JonLogo" style={{ transform: logoTransform }}>
            <JonLogo />
          </div>
          <span ref={this.inlineLogoRef}></span>
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
