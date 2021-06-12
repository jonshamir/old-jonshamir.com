import React from "react";
import ProjectPage from "./ProjectPage";

import Button from "../components/Button/Button";

const LeafMap = (props) => {
  return (
    <ProjectPage>
      <img
        src="assets/projects/leaf-map/screenshot.png"
        alt="Leaf Map screenshot"
        className="Screenshot"
      />
      <div className="section">
        <a
          href="https://jonshamir.github.io/leaf-map"
          target="_blank"
          rel="noreferrer"
        >
          <Button>
            <span>Launch Project ></span>
          </Button>
        </a>
        <h1>Leaf Map</h1>
        <p className="subtitle">Interactive map of leaf shapes</p>
        <p>
          inspired by this{" "}
          <a href="http://fontmap.ideo.com/" target="_blank">
            Font Map
          </a>
          , I used machine-learning techniques to organize tree species in 2D
          space according to their leaf shape.
        </p>
        <br />
        <h2>Tools Used</h2>
        <ul className="List">
          <li>JavaScript (d3.js)</li>
          <li>Python (numpy, pytorch)</li>
        </ul>
      </div>
    </ProjectPage>
  );
};

export default LeafMap;
