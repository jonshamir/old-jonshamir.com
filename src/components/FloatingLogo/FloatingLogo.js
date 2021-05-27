import React from "react";
import JonLogo from "../JonLogo/JonLogo";

import "./FloatingLogo.scss";

class FloatingLogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false, isMinimized: false, inlinePos: [0, 0] };
    this.inlineLogoEl = null;
  }

  componentDidMount() {
    window.addEventListener("resize", () => this.updateInlinePos());
    window.addEventListener("scroll", this.handleScroll);
    this.updateInlinePos();
    setTimeout(() => {
      this.setState({ isLoaded: true });
    }, 500);
  }

  updateInlinePos = () => {
    // const { x, y } = this.inlineLogoRef.current.getBoundingClientRect();
    this.inlineLogoEl = document.getElementById("logoInlinePos");
    if (this.inlineLogoEl) {
      const x = this.inlineLogoEl.offsetLeft;
      const y = this.inlineLogoEl.offsetTop;
      this.setState({ inlinePos: [x - 30, y - 180] });
    }
  };

  getInlinePos = () => {
    const { inlinePos } = this.state;
    if (inlinePos[0] !== 0 && inlinePos[1] !== 0)
      return { x: inlinePos[0], y: inlinePos[1] };

    // const { x, y } = this.inlineLogoRef.current.getBoundingClientRect();
    this.inlineLogoEl = document.getElementById("logoInlinePos"); // TODO large screens
    let x = 0,
      y = 0;
    if (this.inlineLogoEl) {
      x = this.inlineLogoEl.offsetLeft - 30;
      y = this.inlineLogoEl.offsetTop - 180;
    }
    return { x, y };
  };

  handleScroll = () => {
    const currScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const { isMinimized } = this.state;

    if (currScroll < 10) {
      this.setState({ isMinimized: false });
    } else if (!isMinimized) {
      this.setState({ isMinimized: true });
    }
  };

  render() {
    const { isMinimized } = this.state;
    const { inlineOnScroll } = this.props;
    const { x, y } = this.getInlinePos();
    const logoTransform =
      !inlineOnScroll || (this.inlineLogoEl && isMinimized)
        ? `scale(0.5)`
        : `scale(1) translate(${x}px,${y}px)`;

    return (
      <div className="FloatingLogo" style={{ transform: logoTransform }}>
        <JonLogo isVisible={this.state.isLoaded} />
      </div>
    );
  }
}

export default FloatingLogo;
