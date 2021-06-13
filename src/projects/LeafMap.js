import React from "react";
import ProjectPage from "./ProjectPage";

import Button from "../components/Button/Button";
import Image from "../components/Image/Image";
import OutLink from "../components/OutLink/OutLink";

const LeafMap = (props) => {
  return (
    <ProjectPage>
      <Image
        ratio="1.95"
        src="assets/projects/leaf-map/screenshot.png"
        alt="Leaf Map screenshot"
        className="Screenshot"
        style={{ backgroundColor: "#f7f3ee" }}
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
          I used machine learning techniques to organize tree species according
          to their leaf shape. The idea was to create a more intuitive and
          friendly way to recognize plant species.
        </p>
        <img src="assets/projects/leaf-map/features.png" />
        <p>
          Using the{" "}
          <OutLink href="https://en.wikipedia.org/wiki/Shape_context">
            Shape Context Algorithm
          </OutLink>{" "}
          I generated a "fingerprint" vector representing each leaf, which is
          then used to asses the similarity of shapes. Finally the dimension of
          this vector is reduced to 2D using PCA and{" "}
          <OutLink href="https://en.wikipedia.org/wiki/T-distributed_stochastic_neighbor_embedding">
            t-SNE
          </OutLink>
          , and the leaves are displayed in an interactive interface I created
          using D3.js.
        </p>

        <p>
          The project was inspired by this{" "}
          <OutLink href="http://fontmap.ideo.com/">Font Map</OutLink>, all data
          and images were taken from the{" "}
          <OutLink href="http://leafsnap.com/dataset/">
            Leaf Snap dataset
          </OutLink>
          .
        </p>
        <br />
        <h2>Tools Used</h2>
        <ul className="List">
          <li>JavaScript (interface)</li>
          <li>Python (data proccessing)</li>
        </ul>
      </div>
    </ProjectPage>
  );
};

export default LeafMap;
