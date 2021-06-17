import React from "react";
import ProjectPage from "./ProjectPage";

import Button from "../components/Button/Button";
import Image from "../components/Image/Image";

const HerbTree = (props) => {
  return (
    <ProjectPage>
      <Image
        ratio="1.95"
        src="assets/projects/herbtree/screenshot.png"
        alt="Herb Tree screenshot"
        className="Screenshot"
        style={{ backgroundColor: "#f6f2f1" }}
      />

      <div className="section">
        <a href="http://herbtree.co.il" target="_blank" rel="noreferrer">
          <Button>
            <span>Launch Project ></span>
          </Button>
        </a>
        <h1>Herb Tree</h1>
        <p className="subtitle">Interactive botanic visualization</p>
        <p>
          An online index of culinary herbs, created as the final project for my
          Visual Communication degree. The plants are organized according to
          their scientific classification, creating a herbal “tree of life”.
          Each herb contains a description as well as information about using it
          in the kitchen. In addition to research, design and development, I
          photographed dozens of plant specimens from the Hebrew University
          Herbarium, which are incorporated into the project.
        </p>
        <p>Note that the site is currently available only in Hebrew.</p>
        <figure>
          <Image
            src="assets/projects/herbtree/specimen.jpg"
            alt="Photographing a Specimen"
          />
          <span className="Caption">
            Photographing a specimen for the project.
          </span>
        </figure>
        <br />
        <h2>Tools Used</h2>
        <ul className="List">
          <li>JavaScript (d3.js + React.js)</li>
          <li>Python</li>
          <li>Photography</li>
        </ul>
      </div>
    </ProjectPage>
  );
};

export default HerbTree;
