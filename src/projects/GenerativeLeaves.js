import React from "react";
import ProjectPage from "./ProjectPage";

import Image from "../components/Image/Image";

const GenerativeLeaves = (props) => {
  return (
    <ProjectPage>
      <div className="section">
        <h1>Generative Leaves</h1>
        <p className="subtitle">Screenprints of generative leaf shapes.</p>
        <p>
          I was exploring the creation of leaf shapes using{" "}
          <a
            href="https://en.wikipedia.org/wiki/Superformula"
            target="_blank"
            rel="noreferrer"
          >
            Generalized Superellipses
          </a>{" "}
          in JavaScript. Each leaf was screen printed in 2 colors with a
          different halftone pattern.
        </p>
        <img
          src="assets/projects/generative-leaves/leaf1.jpg"
          alt="Leaf 1"
          className="halfImage"
        />
        <img
          src="assets/projects/generative-leaves/leaf4.jpg"
          alt="Leaf 2"
          className="halfImage"
        />
        <img
          src="assets/projects/generative-leaves/leaf2.jpg"
          alt="Leaf 3"
          className="halfImage"
        />
        <img
          src="assets/projects/generative-leaves/leaf3.jpg"
          alt="Leaf 4"
          className="halfImage"
        />
        <br />
      </div>
    </ProjectPage>
  );
};

export default GenerativeLeaves;
