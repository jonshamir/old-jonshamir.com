import React from "react";
import ProjectPage from "./ProjectPage";

import Button from "../components/Button/Button";

const ProjectCG = (props) => {
  return (
    <ProjectPage>
      <div className="section">
        <h1>Unity CG</h1>
        <p className="subtitle">Computer Graphics Course in Unity3D</p>
        <p>
          In 2019 I was given the opportunity to rebuild the practical side of
          the Computer Graphics Course at HUJI from the ground up. The idea was
          to teach Computer Graphics in a more engaging way, using the real-time
          interactivity of Unity3D.
        </p>
        <p>
          Due to the COVID-19 pandemic which was just beginning, we understood
          that the campus will probably be closed. To improve the remote
          learning experience, I designed over 500 slides, with custom
          illustrations & animations that visualize different computer graphics
          concepts.
        </p>
        <p>
          I also created 5 practical exercises, taught the students online and
          graded their assignments.
        </p>
        <h2>Tools Used</h2>
        <ul>
          <li>Unity3D + C#</li>
          <li>HLSL (shading language)</li>
          <li>Adobe CC</li>
          <li>Google Slides</li>
        </ul>
        <a
          href="https://jonshamir.github.io/muser"
          target="_blank"
          rel="noreferrer"
        >
          <Button style={{ textAlign: "right" }}>
            <span>Launch Project ></span>
          </Button>
        </a>
      </div>
    </ProjectPage>
  );
};

export default ProjectCG;
