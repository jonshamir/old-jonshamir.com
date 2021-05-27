import React from "react";
import ProjectPage from "./ProjectPage";

import Button from "../components/Button/Button";

const ProjectMuser = (props) => {
  return (
    <ProjectPage>
      <div className="section">
        <h1>Muser</h1>
        <p className="subtitle">Smart music visualizer</p>
        <p>
          Muser is an experiment to see how machine learning technology can be
          used to enhance music visualization.
        </p>
        <p>
          A pre-trained neural network - musicnn - predicts the musical genre
          for each second of a song. The predictions are then used to generate a
          color scheme. The final visualization colors are based on the 5
          most-fitting genres. The circles & lines move in reaction to the audio
          data, like a classic music visualizer.
        </p>
        <h2>Tools Used</h2>
        <ul>
          <li>React</li>
          <li>WebGL (THREE.js + GLSL)</li>
          <li>Python</li>
        </ul>
        <a
          href="https://jonshamir.github.io/muser"
          target="_blank"
          rel="noreferrer"
        >
          <Button>
            <span>Launch Project ></span>
          </Button>
        </a>
      </div>
    </ProjectPage>
  );
};

export default ProjectMuser;
