import React from "react";
import ProjectPage from "./ProjectPage";

import Button from "../components/Button/Button";
import Image from "../components/Image/Image";

const ProjectMuser = (props) => {
  return (
    <ProjectPage>
      <img
        src="images/projects/muser-screenshot.png"
        alt="Muser Screenshot"
        className="Screenshot"
      />
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
        <ul className="List">
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
        <p>
          <figure>
            <Image src="images/projects/kandinsky.jpg" alt="kandinsky" />
            <span className="Caption">
              <span>Circles in a Circle </span>by Wassily Kandinsky, 1923
            </span>
          </figure>
        </p>
        <p>
          The idea for muser and the visualization itself is inspired by Wassily
          Kandinsky (1866-1944). Generally credited as the pioneer of abstract
          art, his work is well-known for its musical inspirations. Kandinsky
          associated specific tones and instruments to shapes and colors, thus
          “visualizing” a musical composition.
        </p>
        <p>
          Colors for each genre were chosen according to the Musicmap project so
          that music genres which are stylistically closer will get similar
          colors.
        </p>
      </div>
    </ProjectPage>
  );
};

export default ProjectMuser;
