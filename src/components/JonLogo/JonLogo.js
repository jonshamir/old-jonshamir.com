import React from "react";
import "./JonLogo.scss";

class JonLogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isVisible } = this.props;
    return (
      <div className={isVisible ? "logo-container visible" : "logo-container"}>
        <div className={isVisible ? "rotate" : ""}>
          <div className="logo">
            <div className="top">
              <div className="face"></div>
              <div className="face"></div>
              <div className="face"></div>
              <div className="face"></div>
              <div className="face"></div>
              <div className="face"></div>
            </div>
            <div className="bottom">
              <div className="face"></div>
              <div className="face"></div>
              <div className="face"></div>
              <div className="face"></div>
              <div className="face"></div>
              <div className="face"></div>
            </div>
            <div className="middle">
              <div className="face"></div>
              <div className="face"></div>
              <div className="face"></div>
              <div className="face"></div>
              <div className="face"></div>
              <div className="face"></div>
            </div>
            <div className="side">
              <div className="face"></div>
              <div className="face"></div>
              <div className="face"></div>
              <div className="face"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

JonLogo.defaultProps = {
  onClick: () => {},
};

export default JonLogo;
