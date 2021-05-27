import React from "react";
import ProjectPage from "./ProjectPage";

import Button from "../components/Button/Button";

const ProjectMuser = (props) => {
  return (
    <ProjectPage>
      <div className="section">
        <h1>Muser</h1>
        <h2>Smart music visualizer</h2>
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
        <Button>
          <span>Launch Project ></span>
        </Button>
      </div>
    </ProjectPage>
  );
};

export default ProjectMuser;
