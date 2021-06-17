import React from "react";
import ProjectPage from "./ProjectPage";

import Image from "../components/Image/Image";

const GrowthPatterns = (props) => {
  return (
    <ProjectPage>
      <Image
        ratio="1.53"
        src="assets/projects/growth-patterns/pic2.jpg"
        alt="GrowthPatterns"
        className="Screenshot"
        style={{ backgroundColor: "#6c6a70" }}
      />
      <div className="section">
        <h1>Growth Patterns</h1>
        <p className="subtitle">Population density visualization</p>
        <p>
          I created a visualization of population centers in centeral Israel and
          the Palestinian territories. I visualized the data on a blank canvas,
          without any borders or markings, by using a local species of grain.
        </p>
        <br />
        <Image
          src="assets/projects/growth-patterns/data1.jpg"
          alt="Data 1"
          className="halfImage"
        />
        <Image
          src="assets/projects/growth-patterns/data2.jpg"
          alt="Data 2"
          className="halfImage"
        />
        <p className="Caption">
          Every point corrosponds to a city or town, with size representing
          population
        </p>
        <br />
        <br />
        <p>
          I tried to emphasize the natural growth pattern of human settlement,
          regardless of politics or borders.
        </p>
        <br />
        <br />
        <Image
          ratio="1.33:1"
          src="assets/projects/growth-patterns/pic3.jpg"
          alt="GrowthPatterns"
          style={{ width: "90%" }}
        />
      </div>
    </ProjectPage>
  );
};

export default GrowthPatterns;
