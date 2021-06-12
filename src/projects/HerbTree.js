import React from "react";
import ProjectPage from "./ProjectPage";

import Button from "../components/Button/Button";

const HerbTree = (props) => {
  return (
    <ProjectPage>
      <div className="section">
        <a href="http://herbtree.co.il" target="_blank" rel="noreferrer">
          <Button>
            <span>Launch Project ></span>
          </Button>
        </a>
        <h1>Herb Tree</h1>
        <p className="subtitle">Interactive botanic visualization</p>
        <p>
          Final project for my B.Des. in Visual Communication. An index of
          culinary herbs. The plants are organized according to their genetic
          classification, creating a herbal “tree of life”. In addition to
          research, design and development, I photographed dozens of plant
          specimens from the hebrew University herbarium, which are incorporated
          in the project.
        </p>
        <p>
          The site is currently available only in Hebrew but will be translated
          soon.
        </p>
        <br />
        <h2>Tools Used</h2>
        <ul className="List">
          <li>JavaScript (d3.js + React.js)</li>
          <li>Python</li>
        </ul>
      </div>
    </ProjectPage>
  );
};

export default HerbTree;
