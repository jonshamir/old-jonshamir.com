import React from "react";
import "./JonLogo.scss";

class JonLogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <a
        className="JonLogo"
        ref={(c) => {
          this.container = c;
        }}
      >
        <div className="logo-container">
          <div className="rotate">
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
      </a>
    );
  }
}

JonLogo.defaultProps = {
  onClick: () => {},
};

export default JonLogo;
